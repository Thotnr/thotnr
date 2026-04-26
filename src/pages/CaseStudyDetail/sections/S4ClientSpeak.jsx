const principles = [
  {
    index: '01',
    title: 'Outcome Before Output',
    desc: 'Every engagement starts with the business result, not the feature list. We measure success by what changes in your organisation — not by what we ship.',
  },
  {
    index: '02',
    title: 'Enterprise-Grade from Day One',
    desc: 'Scalability, auditability, and regulatory alignment are designed in from the start — never retrofitted after the fact. We build for the environment you operate in.',
  },
  {
    index: '03',
    title: 'Embedded Until It Sticks',
    desc: 'We do not hand over a solution and walk away. Our teams stay embedded until the capability is operating, adopted, and owned by yours.',
  },
]

function S4ClientSpeak() {
  return (
    <section
      className="py-20 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-h4 text-[var(--color-highlight)]">
            How We Work
          </p>
          <h2 className="text-h1 text-white max-w-xl leading-snug">
            The Principles Behind Every Engagement
          </h2>
        </div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {principles.map((p, i) => (
            <div
              key={p.index}
              className="flex flex-col gap-5 px-8 py-2"
              style={{
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.10)' : 'none',
              }}
            >
              <span
                className="text-5xl font-bold leading-none"
                style={{ color: 'rgba(255,255,255,0.08)', fontFamily: 'var(--font-heading)' }}
              >
                {p.index}
              </span>

              <h3
                className="text-h3 font-semibold leading-snug text-white"
              >
                {p.title}
              </h3>

              <p
                className="text-body leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.60)' }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default S4ClientSpeak
