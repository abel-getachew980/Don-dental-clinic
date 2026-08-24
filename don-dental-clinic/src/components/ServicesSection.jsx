import SectionHeader from './SectionHeader';

function ServicesSection({ t }) {
  const services = [
    {
      key: 'service1',
      num: '01',
      icon: (
        <path d="M12 2C8 2 5 5.5 5 8c0 2 .5 3.5 1 5 .5 1.5 1 3 1 5 0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2 0-2 .5-3.5 1-5 .5-1.5 1-3 1-5 0-2.5-3-6-7-6z" />
      ),
    },
    {
      key: 'service2',
      num: '02',
      icon: (
        <>
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </>
      ),
    },
    {
      key: 'service3',
      num: '03',
      icon: (
        <>
          <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          <circle cx="7" cy="6" r="1.5" fill="currentColor" />
          <circle cx="12" cy="6" r="1.5" fill="currentColor" />
          <circle cx="17" cy="6" r="1.5" fill="currentColor" />
        </>
      ),
    },
    {
      key: 'service4',
      num: '04',
      icon: (
        <>
          <line x1="12" y1="2" x2="12" y2="10" />
          <path d="M8 10h8l1 10H7L8 10z" />
          <path d="M9 14h6" />
        </>
      ),
    },
    {
      key: 'service5',
      num: '05',
      icon: (
        <>
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
        </>
      ),
    },
    {
      key: 'service6',
      num: '06',
      icon: (
        <>
          <path d="M12 2C8 2 5 5.5 5 8c0 2 .5 3.5 1 5 .5 1.5 1 3 1 5 0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2 0-2 .5-3.5 1-5 .5-1.5 1-3 1-5 0-2.5-3-6-7-6z" />
          <line x1="12" y1="8" x2="12" y2="14" stroke="currentColor" strokeWidth="2" />
        </>
      ),
    },
  ];

  return (
    <section id="services" className="page-section section-canvas" aria-labelledby="services-heading" data-aos="fade-up">
      <div className="section-inner">
        <SectionHeader
          tag="02 / Clinical Care"
          title={t('services_heading')}
          subtitle="Comprehensive dental treatments delivered with precision and aesthetic balance."
        />

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" data-aos="fade-up" data-aos-delay={index * 60} key={service.key}>
              <div>
                <div className="service-meta-row">
                  <span className="service-number">{service.num}</span>
                  <div className="service-icon-box" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {service.icon}
                    </svg>
                  </div>
                </div>
                <h3 className="service-title">{t(`${service.key}_title`)}</h3>
                <p className="service-desc">{t(`${service.key}_desc`)}</p>
              </div>
              <a href="#contact" className="text-link-arrow">
                <span>Book consultation</span>
                <span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
