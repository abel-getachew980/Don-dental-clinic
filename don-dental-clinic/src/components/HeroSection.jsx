function HeroSection({ t, onNavigate }) {
  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-heading" data-aos="fade-up">
      {/* Doctor Consultation Background Layer */}
      <div className="hero-bg-layer" aria-hidden="true">
        <img
          src="/assets/doctor-consultation.jpg"
          alt="Dr. Don Dental Specialist consulting with patient in Addis Ababa"
          loading="eager"
        />
        <div className="hero-bg-overlay" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-tag">Addis Ababa, Ethiopia · Est. 2024</span>

          <h1 id="hero-heading" className="hero-title">
            <span className="word-don">{t('hero_clinic_name')}</span>
            <span className="italic-accent">{t('hero_subheadline')}</span>
          </h1>

          <p className="hero-tagline">{t('hero_tagline')}</p>

          <div className="hero-actions">
            <button
              className="btn-pill-filled"
              onClick={() => onNavigate('contact')}
            >
              <span>{t('hero_cta')}</span>
            </button>
            <button
              className="btn-pill-ghost"
              onClick={() => onNavigate('services')}
            >
              <span>{t('nav_services')}</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Floating Product UI Artifacts around Hero */}
        <div className="hero-artifacts-grid" data-aos="fade-up" data-aos-delay="100">
          <div className="floating-artifact">
            <div className="artifact-header">
              <span className="artifact-badge"><span className="live-dot" /> Accepting Patients</span>
              <span className="card-top-tag">Mon–Sat</span>
            </div>
            <div className="artifact-metric">8:00 AM – 6:00 PM</div>
            <p className="artifact-desc">Convenient central location in Addis Ababa</p>
          </div>

          <div className="floating-artifact">
            <div className="artifact-header">
              <span className="artifact-badge">Google Verified</span>
              <div className="avatar-bubble" title="Dr. Don Lead Surgeon">DD</div>
            </div>
            <div className="artifact-metric">4.9 ★★★★★</div>
            <p className="artifact-desc">Over 500+ satisfied smiling patients</p>
          </div>

          <div className="floating-artifact">
            <div className="artifact-header">
              <span className="artifact-badge">Technology</span>
              <span className="card-top-tag">100% Digital</span>
            </div>
            <div className="artifact-metric">Anxiety-Free</div>
            <p className="artifact-desc">Gentle ultrasonic care & sterile suites</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
