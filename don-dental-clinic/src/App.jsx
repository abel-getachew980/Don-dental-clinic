import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import contentData from '../content.json';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ValueSection from './components/ValueSection';
import ServicesSection from './components/ServicesSection';
import ReviewsSection from './components/ReviewsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const STORAGE_KEY = 'ddc_lang';

function App() {
  const [content] = useState(contentData);
  const [lang, setLang] = useState(() => sessionStorage.getItem(STORAGE_KEY) || 'en');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang === 'am' ? 'am' : 'en';
    document.body.classList.add('ready');
    AOS.init({
      duration: 550,
      easing: 'ease-out-quad',
      once: true,
      offset: 60,
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }, [lang]);

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const t = (key) => {
    const entry = content[key];
    if (!entry) return key;
    return lang === 'am' && entry.am ? entry.am : entry.en;
  };

  const handleNavClick = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h') || '72');
      const top = el.getBoundingClientRect().top + window.scrollY - headerH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div id="error-banner" className="error-banner" role="alert" aria-live="assertive">
        <span>{t('error_banner')}</span>
      </div>

      <Header
        t={t}
        lang={lang}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        onNavigate={handleNavClick}
        onSetLang={setLang}
      />

      <main id="main-content">
        <HeroSection t={t} onNavigate={handleNavClick} />
        <ValueSection t={t} />
        <ServicesSection t={t} />
        <ReviewsSection t={t} />
        <GallerySection t={t} />
        <ContactSection t={t} />
      </main>

      <Footer t={t} />
    </>
  );
}

export default App;
