const MAPS_URL = 'https://maps.app.goo.gl/frLAo3EYKiRQkS6C6';

function Footer({ t }) {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="section-inner">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/assets/logo.svg" alt="Don Dental Clinic logo" className="footer-logo" width="140" height="38" />
            <p className="footer-tagline">{t('footer_tagline')}</p>
          </div>
          <div className="footer-col">
            <h4>{t('contact_address_label')}</h4>
            <address>{t('footer_address')}</address>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link-arrow"
              style={{ fontSize: '13.5px', marginTop: '6px' }}
              aria-label="View Don Dental Clinic on Google Maps (opens in new tab)"
            >
              <span>{t('footer_maps_link')}</span>
              <span className="arrow">→</span>
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
