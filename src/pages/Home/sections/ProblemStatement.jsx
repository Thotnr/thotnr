function ProblemStatement() {
  return (
    <>
      {/* ── SECTION 1: Stats bar ── */}
      <section className="py-16 px-5 md:px-10 lg:px-16 bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto">
          <p className="text-h4 text-[var(--color-highlight)] mb-2">
            The Enterprise AI Opportunity
          </p>
          <p className="text-body text-[var(--color-text-secondary)] mb-6">
            Enterprise AI is moving from experiment to engine.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
            {[
  {
    pct: '$4.4T',
    label: 'potential AI value for enterprises',
    source: 'MCKINSEY'
  },
  {
    pct: '3x',
    label: 'higher value creation by AI leaders',
    source: 'BCG'
  },
  {
    pct: '70%',
    label: 'CEOs place AI among top priorities',
    source: 'PwC'
  },
  {
    pct: '5%',
    label: 'capture outsized AI value',
    source: 'MIT / NANDA'
  },
].map((s, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(20px, 2.8vw, 24px)',
                    fontWeight: 700,
                    lineHeight: 1,
                    color: 'var(--color-text-primary)',
                    flexShrink: 0,
                  }}>
                    {s.pct}
                  </span>
                  <span className="text-body-sm" style={{
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.35,
                    maxWidth: '160px',
                  }}>
                    {s.label}
                  </span>
                </div>
                <span className="text-body-sm" style={{
                  color: 'var(--color-secondary)',
                  letterSpacing: '0.06em',
                }}>
                  {s.source}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Why Thotnr is Different + Three pillars ── */}
      <section className="py-16 px-5 md:px-10 lg:px-16" style={{ background: 'var(--color-secondary)' }}>
        <div className="max-w-7xl mx-auto">

          {/* Block 2: Problem / Solution headline */}
          <div className="mb-8">
            <p className="text-h4 mb-1" style={{ color: 'var(--color-highlight)' }}>
              Why TIA Matters
            </p>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(22px, 3.8vw, 40px)',
                fontWeight: 600,
                lineHeight: 1.3,
                color: 'var(--color-text-white)',
                marginBottom: '8px',
              }}
            >
              TIA turns AI ambition into enterprise capability.
              {/* <br />
              We build intelligence that works inside enterprise. */}
            </h2>

            <p
              className="text-body"
              style={{
                color: 'rgba(255,255,255,0.85)',
                maxWidth: '760px',
                lineHeight: 1.8,
              }}
            >
Through TIA — Thotnr Intelligence Augmentation — we help organisations build AI that is grounded in their data, shaped around real operating workflows, and measured by business value. So AI moves beyond experimentation and becomes a reliable part of how the business works.            </p>
          </div>

          {/* Block 3: Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
  {
    title: 'Grounded in your data',
  body: 'Every TIA engagement starts with your real data landscape — where it lives, how reliable it is, what it can support, and what must be fixed before AI can scale.',
  },
  {
    title: 'Embedded in your workflows',
    body: 'We design around how your teams actually work — systems, approvals, controls, and governance — so intelligence becomes part of execution.',
  },
  {
    title: 'Measured by business value',
    body: 'Every deployment is tied to measurable outcomes — faster decisions, lower risk, improved experience, and business value that compounds over time.',
  },
].map((pillar) => (
              <div key={pillar.title} className="flex flex-col gap-3">
                <div
                  style={{
                    width: '28px',
                    height: '2px',
                    background: 'var(--color-highlight)',
                    borderRadius: '2px',
                  }}
                />
                <h3
                  className="text-h4 font-semibold"
                  style={{ color: 'var(--color-text-white)' }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-body"
                  style={{ color: 'rgba(255,255,255,0.80)', lineHeight: 1.75 }}
                >
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default ProblemStatement
