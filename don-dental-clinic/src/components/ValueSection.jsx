import SectionHeader from './SectionHeader';

function ValueSection({ t }) {
  return (
    <section id="about" className="value-section" aria-labelledby="value-heading" data-aos="fade-up">
      <div className="section-inner">
        <SectionHeader label="Why Us" title={t('value_heading')} />
        <div className="value-grid">
          <div className="value-card" data-aos="fade-up" data-aos-delay="0">
            <div className="value-icon red" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="#CC2229" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" /><path d="M12 8v4l3 3" />
              </svg>
            </div>
            <h3>{t('value1_title')}</h3>
            <p>{t('value1_desc')}</p>
          </div>
          <div className="value-card" data-aos="fade-up" data-aos-delay="80">
            <div className="value-icon blue" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1E6FB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3>{t('value2_title')}</h3>
            <p>{t('value2_desc')}</p>
          </div>
          <div className="value-card" data-aos="fade-up" data-aos-delay="160">
            <div className="value-icon both" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1E6FB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </div>
            <h3>{t('value3_title')}</h3>
            <p>{t('value3_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValueSection;
