import SectionHeader from './SectionHeader';

function GallerySection({ t }) {
  const items = [
    { key: 'gallery1', altKey: 'gallery1_alt', captionKey: 'gallery1_caption', className: 'g1', stroke: '#1E6FB5', icon: <><rect x="8" y="20" width="48" height="30" rx="4" /><path d="M20 20V14a4 4 0 018 0v6" /><circle cx="44" cy="14" r="5" /><line x1="44" y1="19" x2="44" y2="28" /></> },
    { key: 'gallery2', altKey: 'gallery2_alt', captionKey: 'gallery2_caption', className: 'g2', stroke: '#CC2229', icon: <><rect x="6" y="28" width="52" height="24" rx="3" /><rect x="14" y="16" width="16" height="12" rx="2" /><rect x="34" y="16" width="16" height="12" rx="2" /><line x1="6" y1="52" x2="58" y2="52" /></> },
    { key: 'gallery3', altKey: 'gallery3_alt', captionKey: 'gallery3_caption', className: 'g3', stroke: '#1E6FB5', icon: <><rect x="16" y="12" width="32" height="40" rx="4" /><path d="M24 28h16M24 36h10" /><circle cx="32" cy="20" r="4" /></> },
    { key: 'gallery4', altKey: 'gallery4_alt', captionKey: 'gallery4_caption', className: 'g4', stroke: '#CC2229', icon: <><path d="M10 40V28a6 6 0 0112 0v12M42 40V28a6 6 0 0112 0v12" /><rect x="8" y="40" width="48" height="6" rx="3" /><line x1="20" y1="46" x2="20" y2="54" /><line x1="44" y1="46" x2="44" y2="54" /></> },
  ];

  return (
    <section id="gallery" className="gallery-section" aria-labelledby="gallery-heading" data-aos="fade-up">
      <div className="section-inner">
        <SectionHeader label="Gallery" title={t('gallery_heading')} />
        <div className="gallery-grid">
          {items.map((item, index) => (
            <div className="gallery-item" data-aos="zoom-in" data-aos-delay={index * 80} key={item.key}>
              <div className={`gallery-placeholder ${item.className}`} role="img" aria-label={t(item.altKey)}>
                <div className="gallery-svg-icon" aria-hidden="true">
                  <svg viewBox="0 0 64 64" fill="none" stroke={item.stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                  </svg>
                </div>
                <span className="gallery-caption">{t(item.captionKey)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
