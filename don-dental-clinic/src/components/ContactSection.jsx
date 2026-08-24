import SectionHeader from './SectionHeader';

const MAPS_URL = 'https://maps.app.goo.gl/frLAo3EYKiRQkS6C6';

function ContactSection({ t }) {
  return (
    <section id="contact" className="page-section section-fog" aria-labelledby="contact-heading" data-aos="fade-up">
      <div className="section-inner">
        <SectionHeader
          tag="05 / Visit Us"
          title={t('contact_heading')}
          subtitle="We are conveniently located in the center of Addis Ababa."
        />

        <div className="contact-layout">
          {/* Left Panel: Information */}
          <div className="contact-info-panel" data-aos="fade-right">
            <div>
              <span className="section-tag">Direct Details</span>
              <h3 style={{ fontFamily: 'var(--font-signifier)', fontSize: '26px', marginBottom: '24px' }}>
                Clinic Hours & Location
              </h3>

              <div className="contact-details-list">
                {/* Address */}
                <div className="contact-detail-row">
                  <div className="contact-detail-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="contact-detail-content">
                    <p className="label">{t('contact_address_label')}</p>
                    <address className="value">{t('contact_address')}</address>
                  </div>
                </div>

                {/* Hours */}
                <div className="contact-detail-row">
                  <div className="contact-detail-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="contact-detail-content">
                    <p className="label">{t('contact_hours_label')}</p>
                    <p className="value">{t('contact_hours')}</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-ghost"
              aria-label="Get directions to Don Dental Clinic on Google Maps (opens in new tab)"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
              <span>{t('contact_directions_btn')}</span>
              <span>→</span>
            </a>
          </div>

          {/* Right Panel: Direct Contact CTA */}
          <div className="contact-cta-panel" data-aos="fade-left">
            <div>
              <span className="section-tag">Book or Inquire</span>
              <h3>{t('contact_cta_btn')}</h3>
              <p style={{ marginTop: '12px' }}>
                {t('contact_cta_sub')}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-filled"
                style={{ width: '100%' }}
                aria-label="Contact Don Dental Clinic via Google Maps (opens in new tab)"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.7 12.5a19.79 19.79 0 01-3.07-8.67A2 2 0 013.61 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>{t('contact_cta_btn')}</span>
              </a>

              <p style={{ fontSize: '13px', color: 'var(--color-slate-gray)', textAlign: 'center' }}>
                Direct walk-ins & appointments welcome during clinic hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
