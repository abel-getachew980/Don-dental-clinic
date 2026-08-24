function SectionHeader({ tag, title, subtitle, centered = true }) {
  return (
    <div className={`section-header ${centered ? 'text-center' : ''}`}>
      {tag && <span className="section-tag">{tag}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;
