function UseCaseCard({ audience, title, desc, index }) {
  return (
    <div
      className={`pduc-card-${index} flex flex-col p-7 lg:p-8 rounded-2xl`}
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.09)',
        backdropFilter: 'blur(6px)',
      }}
    >
      {/* Audience badge */}
      <span
        className="inline-block self-start mb-4 px-3 py-1 rounded-full text-label"
        style={{
          color: 'var(--color-secondary)',
          background: '#ffffff',
          letterSpacing: '0.09em',
          fontWeight: 600,
        }}
      >
        {audience}
      </span>

      {/* Title */}
      <h4
        className="text-h3 font-semibold mb-3 leading-snug"
        style={{ color: 'var(--color-text-white)' }}
      >
        {title}
      </h4>

      {/* Desc */}
      <p
        className="text-body-sm"
        style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.75 }}
      >
        {desc}
      </p>

      {/* Bottom accent line */}
      <div
        className="mt-6 h-[1px] rounded-full"
        style={{ background: 'rgba(230,57,70,0.20)' }}
      />
    </div>
  )
}

function S5UseCases({ product }) {
  const cases = product.useCases || []
  if (!cases.length) return null

  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-secondary)' }}
    >
      <style>{`
        @keyframes pducIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pduc-card-0 { animation: pducIn 0.65s cubic-bezier(0.16,1,0.3,1) 0.08s both; }
        .pduc-card-1 { animation: pducIn 0.65s cubic-bezier(0.16,1,0.3,1) 0.20s both; }
        .pduc-card-2 { animation: pducIn 0.65s cubic-bezier(0.16,1,0.3,1) 0.32s both; }
        .pduc-card-3 { animation: pducIn 0.65s cubic-bezier(0.16,1,0.3,1) 0.44s both; }

        .pduc-card-0, .pduc-card-1, .pduc-card-2, .pduc-card-3 {
          transition: transform 0.32s cubic-bezier(0.16,1,0.3,1),
                      background 0.28s ease,
                      border-color 0.28s ease;
        }
        .pduc-card-0:hover, .pduc-card-1:hover, .pduc-card-2:hover, .pduc-card-3:hover {
          transform: translateY(-6px);
          background: rgba(255,255,255,0.08) !important;
          border-color: rgba(230,57,70,0.30) !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-h4 text-[var(--color-highlight)] mb-2">Who It's For</p>
          <h2 className="text-h1 text-white leading-tight">
            Built for Every Scale
          </h2>
          <p
            className="text-body mt-2 max-w-2xl"
            style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.75 }}
          >
            {product.name} adapts to organisations at every stage — from growing teams to enterprise deployments.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-6">
          {cases.map((c, i) => (
            <UseCaseCard key={c.audience} {...c} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default S5UseCases
