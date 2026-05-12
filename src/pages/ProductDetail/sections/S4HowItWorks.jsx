function StepCard({ step, title, desc, index, total }) {
  return (
    <div className={`pdh-step-${index} relative flex flex-col items-start`}>

      {/* Connector line — hidden on last step and on mobile */}
      {index < total - 1 && (
        <div
          className="hidden lg:block absolute top-[22px] left-[calc(50%+28px)] right-0"
          style={{
            height: '1px',
            background: 'linear-gradient(to right, rgba(230,57,70,0.35), rgba(230,57,70,0.08))',
            zIndex: 0,
          }}
        />
      )}

      {/* Step number circle */}
      <div
        className="relative z-10 flex items-center justify-center w-11 h-11 rounded-full mb-5 flex-shrink-0"
        style={{
          background: 'rgba(230,57,70,0.08)',
          border: '1.5px solid rgba(230,57,70,0.30)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            fontWeight: 700,
            color: 'var(--color-highlight)',
            letterSpacing: '0.05em',
          }}
        >
          {step}
        </span>
      </div>

      {/* Title */}
      <h4
        className="text-h4 font-semibold mb-2 leading-snug"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {title}
      </h4>

      {/* Desc */}
      <p
        className="text-body-sm"
        style={{ color: 'var(--color-text-secondary)', lineHeight: 1.78 }}
      >
        {desc}
      </p>

    </div>
  )
}

function S4HowItWorks({ product }) {
  const steps = product.howItWorks || []
  if (!steps.length) return null

  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <style>{`
        @keyframes pdhwIn {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pdh-step-0 { animation: pdhwIn 0.65s cubic-bezier(0.16,1,0.3,1) 0.08s both; }
        .pdh-step-1 { animation: pdhwIn 0.65s cubic-bezier(0.16,1,0.3,1) 0.20s both; }
        .pdh-step-2 { animation: pdhwIn 0.65s cubic-bezier(0.16,1,0.3,1) 0.32s both; }
        .pdh-step-3 { animation: pdhwIn 0.65s cubic-bezier(0.16,1,0.3,1) 0.44s both; }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-h4 text-[var(--color-highlight)] mb-2">Our Process</p>
          <h2 className="text-h1 text-[var(--color-text-primary)] leading-tight">
            How {product.name} Works
          </h2>
          <p
            className="text-body mt-2 max-w-2xl"
            style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75 }}
          >
            From first connection to full operation — a clear, structured path to value.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((s, i) => (
            <StepCard key={s.step} {...s} index={i} total={steps.length} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default S4HowItWorks
