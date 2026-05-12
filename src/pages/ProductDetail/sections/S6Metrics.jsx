function MetricTile({ value, label, context, index }) {
  return (
    <div
      className={`pdm-tile-${index} flex flex-col p-7 rounded-2xl`}
      style={{
        background: '#ffffff',
        border: '1px solid rgba(11,15,25,0.07)',
        boxShadow: '0 2px 20px rgba(11,15,25,0.05)',
        transition: 'transform 0.32s cubic-bezier(0.16,1,0.3,1), box-shadow 0.32s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = '0 18px 44px rgba(11,15,25,0.10)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 2px 20px rgba(11,15,25,0.05)'
      }}
    >
      {/* Big number */}
      <span
        className="leading-none mb-1"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(36px, 4.5vw, 52px)',
          fontWeight: 800,
          color: 'var(--color-secondary)',
          display: 'block',
          lineHeight: 1,
        }}
      >
        {value}
      </span>

      {/* Label */}
      <span
        className="text-label mb-3"
        style={{ color: 'var(--color-highlight)', letterSpacing: '0.10em' }}
      >
        {label}
      </span>

      {/* Divider */}
      <div className="mb-3 h-[1px]" style={{ background: 'rgba(11,15,25,0.07)' }} />

      {/* Context */}
      <p
        className="text-body-sm"
        style={{ color: 'var(--color-text-secondary)', lineHeight: 1.72 }}
      >
        {context}
      </p>
    </div>
  )
}

function S6Metrics({ product }) {
  const metrics = product.metrics || []
  if (!metrics.length) return null

  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <style>{`
        @keyframes pdmIn {
          from { opacity: 0; transform: scale(0.94) translateY(22px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .pdm-tile-0 { animation: pdmIn 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.10s both; }
        .pdm-tile-1 { animation: pdmIn 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.24s both; }
        .pdm-tile-2 { animation: pdmIn 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.38s both; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <div>
            <p className="text-h4 text-[var(--color-highlight)] mb-3">By the Numbers</p>
            <h2
              className="text-h1 leading-tight mb-5"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Real Results,<br />Proven at Scale
            </h2>
            <div
              className="mb-5 h-[3px] w-12 rounded-full"
              style={{ background: 'var(--color-highlight)' }}
            />
            <p
              className="text-body max-w-md"
              style={{ color: 'var(--color-text-secondary)', lineHeight: 1.80 }}
            >
              {product.name} isn't built on promises — every metric below reflects live deployments,
              real enterprise clients, and measurable outcomes delivered in production.
            </p>
          </div>

          {/* Right — metric tiles */}
          <div className="flex flex-col gap-4">
            {metrics.map((m, i) => (
              <MetricTile key={m.label} {...m} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default S6Metrics
