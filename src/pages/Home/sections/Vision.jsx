function Vision() {
  const steps = [
    {
      number: '01',
      label: 'Sense',
      statement: ['We ', 'understand data', ' before design the intelligence.'],
      accentIndex: 1,
      body: 'We map where it lives, how clean it is, what it can prove, and what it cannot tell you. Most AI fails here, quietly. TIA makes data the starting point of every decision.',
    },
    {
      number: '02',
      label: 'Shape',
      statement: ['We ', 'shape intelligence', ' around your business.'],
      accentIndex: 1,
      body: 'We engineer AI for your infrastructure, governance, and workflows — so intelligence fits how your teams operate today and helps them grow tomorrow.',
    },
    {
      number: '03',
      label: 'Scale',
      statement: ['We ', 'turn intelligence', ' into measurable growth.'],
      accentIndex: 1,
      body: 'Every deployment ships with metrics that matter — revenue lift, hours saved, faster decisions, lower risk, and stronger customer outcomes.',
    },
  ]

  return (
    <section
      className="py-16 px-5 md:px-10 lg:px-16"
      style={{ background: 'var(--color-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── BLOCK 1: Vision header — 2-col on tablet+, stacked on mobile ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-10 md:mb-12">

          {/* Left — eyebrow + headline */}
          <div>
            <p className="text-h4 mb-4 tracking-widest" style={{ color: 'var(--color-highlight)' }}>
              TIA Vision
            </p>
            <h2
              className="text-h1 mt-1"
              style={{ color: 'var(--color-text-white)', lineHeight: 1.16 }}
            >
              Great AI doesn’t start with technology.
            </h2>
            <h2
              className="text-h1 mt-1"
              style={{ color: 'var(--color-text-white)', lineHeight: 1.16, fontStyle: 'italic' }}
            >
              It starts with your data.
            </h2>
          </div>

          {/* Right — description */}
          <div className="flex items-center">
            <p
              className="text-body"
              style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.75 }}
            >
We see AI as a discipline, not a demo. Through TIA, we build intelligence in three steps: understand the enterprise reality, design the right AI capability, and prove value through measurable outcomes.            </p>
          </div>

        </div>

        {/* Thin divider */}
        <div className="mb-8 md:mb-10" style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

        {/* ── BLOCK 2: Three steps ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-8 md:mb-10">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="flex flex-col gap-4 py-6 md:py-2"
              style={{
                paddingRight: i < 2 ? 'clamp(0px, 3vw, 40px)' : '0',
                paddingLeft: i > 0 ? 'clamp(0px, 3vw, 40px)' : '0',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                borderBottom:  '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Step label row */}
              <div className="flex items-center gap-3">
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: 'var(--color-accent)',
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </span>
                <span
                  style={{
                    width: '1px',
                    height: '14px',
                    background: 'rgba(255,255,255,0.18)',
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                />
                <span
                  className="text-label"
                  style={{color: 'var(--color-accent)', letterSpacing: '0.18em', fontWeight: 600 }}
                >
                  {step.label}
                </span>
                {/* Chevron — visible on desktop only */}
                {i < 2 && (
                  <span
                    className="hidden lg:block ml-auto"
                    style={{ color: 'rgba(255,255,255,0.2)', fontSize: '18px', lineHeight: 1 }}
                  >
                    ›
                  </span>
                )}
              </div>

              {/* Statement with inline italic accent */}
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(16px, 1.8vw, 22px)',
                  fontWeight: 600,
                  lineHeight: 1.35,
                  color: '#ffffff',
                  margin: 0,
                }}
              >
                {step.statement[0]}
                
                  {step.statement[1]}
                
                {step.statement[2]}
              </p>

              {/* Body */}
              <p
                className="text-body-sm"
                style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.75 }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Thin divider */}
        <div className="mb-8" style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

        {/* ── BLOCK 3: Belief bar ── */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8">

          {/* Label */}
          <p
            className="text-body-sm tracking-widest flex-shrink-0"
            style={{ color: 'var(--color-highlight)' , fontWeight: 500}}
          >
            WHAT WE BELIEVE
          </p>

          {/* Phrases */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span
              className="text-h4"
              style={{ color: '#ffffff', fontWeight: 400 }}
            >
              Built on your data
            </span>

            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '18px' }}>·</span>

            <span
              className="text-h4"
              style={{ color: '#ffffff', fontWeight: 400 }}
            >
              Embedded in your business
            </span>

            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '18px' }}>·</span>

            <span
              className="text-h4"
              style={{ color: '#ffffff', fontWeight: 400 }}
            >
              Measured by your growth.
            </span>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Vision
