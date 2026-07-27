const MAPS_URL = 'https://maps.app.goo.gl/frLAo3EYKiRQkS6C6';

function Footer({ t }) {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="section-inner">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/assets/logo.svg" alt="Don Dental Clinic logo" className="footer-logo" width="140" height="40" />
            <p className="footer-tagline">{t('footer_tagline')}</p>
          </div>
          <div className="footer-col">
            <h4>{t('contact_address_label')}</h4>
            <address>{t('footer_address')}</address>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="footer-maps-link" aria-label="View Don Dental Clinic on Google Maps (opens in new tab)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <span>{t('footer_maps_link')}</span>
            </a>
          </div>
          <div className="footer-col">
            <h4>{t('contact_hours_label')}</h4>
            <p>{t('contact_hours')}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-disclaimer">{t('footer_disclaimer')}</p>
          <p className="footer-rights">{t('footer_rights')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
