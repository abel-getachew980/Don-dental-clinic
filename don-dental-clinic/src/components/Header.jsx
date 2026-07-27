function Header({ t, lang, mobileOpen, setMobileOpen, onNavigate, onSetLang }) {
  return (
    <>
      <header className="site-header" role="banner">
        <div className="header-inner">
          <a href="#hero" className="logo-link" aria-label="Don Dental Clinic — Home" onClick={(e) => { e.preventDefault(); onNavigate('hero'); }}>
            <img src="/assets/logo.svg" alt="Don Dental Clinic logo" width="160" height="46" />
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#hero" onClick={(e) => { e.preventDefault(); onNavigate('hero'); }}>{t('nav_home')}</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>{t('nav_services')}</a>
            <a href="#gallery" onClick={(e) => { e.preventDefault(); onNavigate('gallery'); }}>{t('nav_gallery')}</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>{t('nav_contact')}</a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="lang-toggle" role="group" aria-label="Language selection">
              <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} aria-pressed={lang === 'en'} onClick={() => onSetLang('en')}>
                <span>{t('lang_toggle_en')}</span>
              </button>
              <button className={`lang-btn ${lang === 'am' ? 'active' : ''}`} aria-pressed={lang === 'am'} onClick={() => onSetLang('am')}>
                <span>{t('lang_toggle_am')}</span>
              </button>
            </div>

            <button id="mobile-menu-btn" className="mobile-menu-btn" aria-label="Open navigation menu" aria-expanded={mobileOpen} aria-controls="mobile-nav" onClick={() => setMobileOpen((prev) => !prev)}>
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <nav id="mobile-nav" className={`mobile-nav ${mobileOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        <a href="#hero" onClick={(e) => { e.preventDefault(); onNavigate('hero'); }}>{t('nav_home')}</a>
        <a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>{t('nav_services')}</a>
        <a href="#gallery" onClick={(e) => { e.preventDefault(); onNavigate('gallery'); }}>{t('nav_gallery')}</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>{t('nav_contact')}</a>
      </nav>
    </>
  );
}

export default Header;
