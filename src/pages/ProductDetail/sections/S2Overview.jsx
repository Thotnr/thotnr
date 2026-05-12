function InsightCard({ label, body }) {
  return (
    <div
      className="flex flex-col p-8 lg:p-10 rounded-2xl h-full"
      style={{
        background: '#ffffff',
        border: '1px solid rgba(11,15,25,0.07)',
        boxShadow: '0 4px 24px rgba(11,15,25,0.06)',
        borderLeft: '3px solid var(--color-highlight)',
      }}
    >
      <p
        className="text-label mb-4"
        style={{ color: 'var(--color-highlight)', letterSpacing: '0.14em' }}
      >
        {label}
      </p>
      <p
        className="text-body flex-1"
        style={{ color: 'var(--color-text-secondary)', lineHeight: 1.85 }}
      >
        {body}
      </p>
    </div>
  )
}

function S2Overview({ product }) {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto">

        {/* Top — full-width description */}
        <div className="mb-12">
          <p className="text-h4 text-[var(--color-highlight)] mb-3">About the Product</p>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-16 items-end">
            <div>
              <h2
                className="text-h1 leading-tight mb-3"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {product.name}
              </h2>
              <div
                className="mb-6 h-[3px] w-16 rounded-full"
                style={{ background: 'var(--color-highlight)' }}
              />
              <p
                className="text-body-lg max-w-3xl"
                style={{ color: 'var(--color-text-secondary)', lineHeight: 1.82 }}
              >
                {product.description}
              </p>
            </div>
            <p
              className="text-body-sm flex-shrink-0"
              style={{
                color: 'var(--color-secondary)',
                letterSpacing: '0.14em',
                paddingBottom: '4px',
              }}
            >
              Est. {product.builtYear} · {product.domain}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-10" style={{ height: '1px', background: 'rgba(11,15,25,0.07)' }} />

        {/* Bottom — two insight cards, equal width, centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          <InsightCard label="Why We Built It" body={product.motive} />
          <InsightCard label="Problem Solved"  body={product.problemSolved} />
        </div>

      </div>
    </section>
  )
}

export default S2Overview
