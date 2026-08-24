function HeroSection({ t, onNavigate }) {
  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-heading" data-aos="fade-up">
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

          {/* AI / Specialist Consultation Composer */}
          <div className="hero-composer-wrapper">
            <div className="composer-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="#777b86" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
                <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <input
                type="text"
                className="composer-input"
                placeholder="Ask about teeth whitening, veneers, or appointments..."
                aria-label="Ask a question about our dental treatments"
              />
              <button
                className="composer-send-btn"
                aria-label="Send inquiry"
                onClick={() => onNavigate('contact')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Visual Collage: Photography */}
        <div className="hero-visual-collage" data-aos="fade-up" data-aos-delay="60">
          <img
            src="/assets/doctor-consultation.jpg"
            alt="Dr. Don Dental Specialist consulting with patient in Addis Ababa"
            loading="eager"
          />
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
