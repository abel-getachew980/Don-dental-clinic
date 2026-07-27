function HeroSection({ t, onNavigate }) {
  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-heading" data-aos="fade-up">
      <div className="hero-inner">
        <div className="hero-badge" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 1a7 7 0 100 14A7 7 0 008 1zM7 5h2v5H7V5zm0 6h2v2H7v-2z" /></svg>
          Addis Ababa, Ethiopia
        </div>
        <h1 id="hero-heading" className="hero-title">
          <span className="word-don">{t('hero_clinic_name')}</span>
        </h1>
        <p className="hero-subtitle">{t('hero_subheadline')}</p>
        <p className="hero-tagline">{t('hero_tagline')}</p>
        <a href="#contact" className="btn-hero" role="button" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>{t('hero_cta')}</span>
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
