const steps = [
  {
    number: '01',
    title: 'Discover',
    desc: 'Rapid stakeholder alignment, technical audit, and clear outcome definition. We understand the problem before designing the solution.',
  },
  {
    number: '02',
    title: 'Architect',
    desc: 'System design that maps your strategy to the right technology stack. Every architectural decision is traceable to a business outcome.',
  },
  {
    number: '03',
    title: 'Deliver',
    desc: 'Agile execution with embedded quality, continuous stakeholder visibility, and zero tolerance for scope drift.',
  },
  {
    number: '04',
    title: 'Scale',
    desc: 'Post-launch optimisation, model evolution, and platform growth. The work compounds — intelligence improves over time.',
  },
]

function StepItem({ number, title, desc, index }) {
  return (
    <>
      <style>{`
        @keyframes approachStepIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .approach-step-${index} {
          animation: approachStepIn 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 + index * 0.1}s both;
        }
      `}</style>

      <div className={`approach-step-${index}`} style={{ paddingTop: '28px' }}>
        {/* Top accent bar */}
        <div
          style={{
            width: '32px',
            height: '2px',
            background: 'var(--color-accent)',
            borderRadius: '2px',
            marginBottom: '20px',
            opacity: 0.85,
          }}
        />

        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.28)',
            display: 'block',
            marginBottom: '12px',
          }}
        >
          {number}
        </span>

        <h4 className="text-h4 text-white" style={{ marginBottom: '12px', lineHeight: 1.3 }}>
          {title}
        </h4>

        <p
          className="text-body-sm"
          style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.75 }}
        >
          {desc}
        </p>
      </div>
    </>
  )
}

function S3Approach() {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Row 1: Heading left + description right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-end pb-14 md:pb-16">

          <div>
            <p className="text-h4 text-[var(--color-highlight)]">How We Work</p>
            <h2 className="text-h1 text-white" style={{ lineHeight: 1.2 }}>
              Intelligence-First<br />Delivery
            </h2>
          </div>

          <div>
            <p
              className="text-body-lg"
              style={{ color: 'rgba(255,255,255,0.95)', lineHeight: 1.75, marginBottom: '16px' }}
            >
              We don't apply frameworks — we design solutions that fit the specific complexity of your business.
            </p>
            <p
              className="text-body"
              style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.75 }}
            >
              Every engagement starts with understanding, not assumptions. Our strategists, architects, and engineers work as a single delivery motion — from the first stakeholder conversation to production launch.
            </p>
          </div>

        </div>

        {/* Full-width divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />

        {/* Row 2: 4 steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <StepItem key={step.number} {...step} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default S3Approach
