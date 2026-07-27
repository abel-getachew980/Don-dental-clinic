/**
 * Don Dental Clinic — main.js
 * Handles: bilingual content injection, language toggle,
 * AOS initialization, mobile nav, smooth scroll.
 */

(function () {
  'use strict';

  const MAPS_URL = 'https://maps.app.goo.gl/frLAo3EYKiRQkS6C6';
  const STORAGE_KEY = 'ddc_lang';
  let content = null;
  let currentLang = sessionStorage.getItem(STORAGE_KEY) || 'en';

  /* --------------------------------------------------------
     1. Fetch content.json
  -------------------------------------------------------- */
  async function loadContent() {
    try {
      const resp = await fetch('content.json');
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      content = await resp.json();
      applyLanguage(currentLang);
      initAOS();
    } catch (err) {
      console.error('[DonDental] Failed to load content.json:', err);
      showErrorBanner();
    }
  }

  /* --------------------------------------------------------
     2. Apply language to all [data-i18n] elements
  -------------------------------------------------------- */
  function applyLanguage(lang) {
    currentLang = lang;
    sessionStorage.setItem(STORAGE_KEY, lang);

    // Update html[lang]
    document.documentElement.lang = lang === 'am' ? 'am' : 'en';

    // Apply text to all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!content[key]) {
        console.warn(`[DonDental] Missing i18n key: "${key}"`);
        return;
      }
      const entry = content[key];
      let text;
      if (lang === 'am') {
        if (entry.am) {
          text = entry.am;
        } else {
          console.warn(`[DonDental] Missing "am" for key "${key}", falling back to "en"`);
          text = entry.en;
        }
      } else {
        text = entry.en;
      }
      el.textContent = text;
    });

    // Apply aria-label translations
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (!content[key]) return;
      const entry = content[key];
      const text = (lang === 'am' && entry.am) ? entry.am : entry.en;
      el.setAttribute('aria-label', text);
    });

    // Update language toggle buttons active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      btn.classList.toggle('active', btnLang === lang);
      btn.setAttribute('aria-pressed', btnLang === lang ? 'true' : 'false');
    });
  }

  /* --------------------------------------------------------
     3. Language toggle button wiring
  -------------------------------------------------------- */
  function initLangToggle() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (lang && content) applyLanguage(lang);
      });
    });
  }

  /* --------------------------------------------------------
     4. AOS initialization (after content applied)
  -------------------------------------------------------- */
  function initAOS() {
    if (window.AOS) {
      AOS.init({
        duration: 550,
        easing: 'ease-out-quad',
        once: true,
        offset: 60,
        disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
      });
    }
  }

  /* --------------------------------------------------------
     5. Mobile nav toggle
  -------------------------------------------------------- */
  function initMobileNav() {
    const btn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('mobile-nav');
    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      const spans = btn.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });

    // Close on nav link click
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        const spans = btn.querySelectorAll('span');
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      });
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (!btn.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        const spans = btn.querySelectorAll('span');
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
  }

  /* --------------------------------------------------------
     6. Smooth scroll for anchor links
  -------------------------------------------------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        const id = anchor.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          const headerH = parseInt(
            getComputedStyle(document.documentElement).getPropertyValue('--header-h') || '72'
          );
          const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  /* --------------------------------------------------------
     7. Error banner
  -------------------------------------------------------- */
  function showErrorBanner() {
    const banner = document.getElementById('error-banner');
    if (banner) banner.classList.add('visible');
  }

  /* --------------------------------------------------------
     8. Ensure Google Maps links are set
  -------------------------------------------------------- */
  function initMapLinks() {
    document.querySelectorAll('[data-maps-link]').forEach(el => {
      el.setAttribute('href', MAPS_URL);
    });
  }

  /* --------------------------------------------------------
     Boot
  -------------------------------------------------------- */
  function boot() {
    initLangToggle();
    initMobileNav();
    initSmoothScroll();
    initMapLinks();
    loadContent();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
