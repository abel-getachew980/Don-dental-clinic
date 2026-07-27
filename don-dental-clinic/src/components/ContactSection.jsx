import SectionHeader from './SectionHeader';

const MAPS_URL = 'https://maps.app.goo.gl/frLAo3EYKiRQkS6C6';

function ContactSection({ t }) {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading" data-aos="fade-up">
      <div className="section-inner">
        <SectionHeader label="Contact" title={t('contact_heading')} />
        <div className="contact-layout">
          <div className="contact-info" data-aos="fade-right">
            <div className="contact-detail">
              <div className="contact-detail-icon red-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#CC2229" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-detail-text">
                <p className="label">{t('contact_address_label')}</p>
                <address className="value">{t('contact_address')}</address>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon blue-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1E6FB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="contact-detail-text">
                <p className="label">{t('contact_hours_label')}</p>
                <p className="value">{t('contact_hours')}</p>
              </div>
            </div>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-outline" aria-label="Get directions to Don Dental Clinic on Google Maps (opens in new tab)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
              <span>{t('contact_directions_btn')}</span>
            </a>
          </div>
          <div className="contact-cta-block" data-aos="fade-left">
            <svg viewBox="0 0 64 64" fill="none" stroke="#1E6FB5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="56" height="56" aria-hidden="true">
              <path d="M32 6C18 6 8 17 8 28c0 6 2.5 11.5 6.5 15.5L12 58l14.5-2.5C29 56.5 30.5 57 32 57c14 0 24-11 24-22S46 6 32 6z" />
              <path d="M22 28h20M22 36h12" stroke="#CC2229" />
            </svg>
            <p>{t('contact_cta_sub')}</p>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label="Contact Don Dental Clinic via Google Maps (opens in new tab)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.7 12.5a19.79 19.79 0 01-3.07-8.67A2 2 0 013.61 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span>{t('contact_cta_btn')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
