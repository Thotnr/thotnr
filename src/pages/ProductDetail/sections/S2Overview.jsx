function InsightCard({ label, body }) {
  return (
    <div
      className="flex flex-col p-6 rounded-xl"
      style={{
        background: '#ffffff',
        border: '1px solid rgba(11,15,25,0.08)',
        boxShadow: '0 2px 16px rgba(11,15,25,0.05)',
      }}
    >
      <p
        className="text-label mb-3"
        style={{ color: 'var(--color-highlight)', letterSpacing: '0.12em' }}
      >
        {label}
      </p>
      <div
        className="mb-4 h-[2px] w-8 rounded-full"
        style={{ background: 'var(--color-highlight)' }}
      />
      <p
        className="text-body-sm"
        style={{ color: 'var(--color-text-secondary)', lineHeight: 1.82 }}
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

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-start">

          {/* Left — about */}
          <div>
            <p className="text-h4 text-[var(--color-highlight)] mb-3">About the Product</p>
            <h2
              className="text-h1 leading-tight mb-3"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {product.name}
            </h2>
            <div
              className="mt-1 mb-6 h-[3px] w-16 rounded-full"
              style={{ background: 'var(--color-highlight)' }}
            />
            <p
              className="text-body-lg mb-8"
              style={{ color: 'var(--color-text-secondary)', lineHeight: 1.82 }}
            >
              {product.description}
            </p>
            <p
              className="text-body-sm"
              style={{ color: 'var(--color-secondary)', letterSpacing: '0.14em' }}
            >
              Est. {product.builtYear} · {product.domain}
            </p>
          </div>

          {/* Right — motive + problem cards */}
          <div className="flex flex-col gap-5">
            <InsightCard label="Why We Built It" body={product.motive} />
            <InsightCard label="Problem Solved" body={product.problemSolved} />
          </div>

        </div>

      </div>
    </section>
  )
}

export default S2Overview
