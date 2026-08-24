import SectionHeader from './SectionHeader';

function ValueSection({ t }) {
  return (
    <section id="about" className="page-section section-fog" aria-labelledby="value-heading" data-aos="fade-up">
      <div className="section-inner">
        <SectionHeader
          tag="01 / Philosophy"
          title={t('value_heading')}
          subtitle="A balanced approach combining advanced clinical mastery with profound patient comfort."
        />

        <div className="value-grid">
          {/* Neutral Card 1 */}
          <div className="neutral-card" data-aos="fade-up" data-aos-delay="0">
            <div>
              <div className="card-icon-wrapper" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                  <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" /><path d="M12 8v4l3 3" />
                </svg>
              </div>
              <span className="card-top-tag" style={{ marginTop: '16px', display: 'inline-block' }}>Tailored Care</span>
              <h3 className="card-title">{t('value1_title')}</h3>
              <p className="card-text">{t('value1_desc')}</p>
            </div>
            <a href="#services" className="text-link-arrow">
              <span>Explore treatment standards</span>
              <span className="arrow">→</span>
            </a>
          </div>

          {/* Neutral Card 2 */}
          <div className="neutral-card" data-aos="fade-up" data-aos-delay="80">
            <div>
              <div className="card-icon-wrapper" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                  <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <span className="card-top-tag" style={{ marginTop: '16px', display: 'inline-block' }}>State-of-the-Art</span>
              <h3 className="card-title">{t('value2_title')}</h3>
              <p className="card-text">{t('value2_desc')}</p>
            </div>
            <a href="#gallery" className="text-link-arrow">
              <span>Tour clinical equipment</span>
              <span className="arrow">→</span>
            </a>
          </div>

          {/* Accent Blush Peach Card */}
          <div className="accent-peach-card" data-aos="fade-up" data-aos-delay="160">
            <div>
              <div className="card-icon-wrapper" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </div>
              <span className="card-top-tag" style={{ marginTop: '16px', display: 'inline-block' }}>Gentle Atmosphere</span>
              <h3 className="card-title">{t('value3_title')}</h3>
              <p className="card-text">{t('value3_desc')}</p>
            </div>
            <a href="#contact" className="text-link-arrow" style={{ color: 'var(--color-sienna-brown)' }}>
              <span>Experience our care</span>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValueSection;
