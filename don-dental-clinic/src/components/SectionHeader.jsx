function SectionHeader({ label, title, centered = true }) {
  return (
    <div className="section-header text-center">
      <span className="section-label">{label}</span>
      <div className={`accent-line ${centered ? 'centered' : ''}`} />
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

export default SectionHeader;
