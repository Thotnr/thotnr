function MetaRow({ label, value }) {
  return (
    <div className="py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <p className="text-h4 mb-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
        {label}
      </p>
      <p className="text-h2" style={{ color: '#ffffff' }}>
        {value}
      </p>
    </div>
  )
}

function S2Metadata({ meta }) {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-secondary)' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 md:gap-20">

        {/* Left — sticky label */}
        <div className="md:pt-5">
          <p
            className="text-h3 tracking-widest uppercase md:sticky md:top-8"
            style={{ color: 'var(--color-accent)' }}
          >
            Overview
          </p>
        </div>

        {/* Right — meta rows */}
        <div>
          <MetaRow label="Sector"   value={meta.sector}   />
          <MetaRow label="Company"  value={meta.company}  />
          <MetaRow label="Service"  value={meta.service}  />
          <MetaRow label="Offering" value={meta.offering} />
        </div>

      </div>
    </section>
  )
}

export default S2Metadata
