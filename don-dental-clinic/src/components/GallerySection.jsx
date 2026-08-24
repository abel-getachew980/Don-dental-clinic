import SectionHeader from './SectionHeader';

function GallerySection({ t }) {
  const items = [
    {
      key: 'gallery1',
      altKey: 'gallery1_alt',
      captionKey: 'gallery1_caption',
      imgSrc: '/assets/treatment-room.jpg',
      sub: 'Equipped with digital imaging & ergonomic operatories',
    },
    {
      key: 'gallery2',
      altKey: 'gallery2_alt',
      captionKey: 'gallery2_caption',
      imgSrc: '/assets/reception-lounge.jpg',
      sub: 'A serene, welcoming entry lounge',
    },
    {
      key: 'gallery3',
      altKey: 'gallery3_alt',
      captionKey: 'gallery3_caption',
      imgSrc: '/assets/sterilization-station.jpg',
      sub: 'Hospital-grade autoclave & sanitization',
    },
    {
      key: 'gallery4',
      altKey: 'gallery4_alt',
      captionKey: 'gallery4_caption',
      imgSrc: '/assets/waiting-lounge.jpg',
      sub: 'Spacious and tranquil environment for families',
    },
  ];

  return (
    <section id="gallery" className="page-section section-canvas" aria-labelledby="gallery-heading" data-aos="fade-up">
      <div className="section-inner">
        <SectionHeader
          tag="04 / The Clinic"
          title={t('gallery_heading')}
          subtitle="Designed to cultivate calm, hygiene, and technological precision."
        />

        <div className="gallery-grid">
          {items.map((item, index) => (
            <div
              className="gallery-card"
              data-aos="fade-up"
              data-aos-delay={index * 80}
              key={item.key}
            >
              <div className="gallery-img-wrap">
                <img
                  src={item.imgSrc}
                  alt={t(item.altKey)}
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="gallery-badge-pill">
                    {t(item.captionKey)}
                  </div>
                  <p className="gallery-caption-sub">{item.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
