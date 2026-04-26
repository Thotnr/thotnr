const steps = [
  {
    number: '01',
    title: 'Understand Domain Context',
    desc: "We embed with your team to map the sector-specific constraints, workflows, and data environments that determine what's actually buildable.",
  },
  {
    number: '02',
    title: 'Identify High-Impact Use Cases',
    desc: 'We prioritise the AI and technology opportunities with the clearest path to production value — not the most technically impressive ones.',
  },
  {
    number: '03',
    title: 'Build & Integrate Systems',
    desc: 'We engineer for your real infrastructure, not a clean-sheet environment — ensuring every system fits seamlessly into existing operations.',
  },
  {
    number: '04',
    title: 'Scale & Optimise',
    desc: 'We build the monitoring, governance, and retraining infrastructure that keeps performance high as your data and business evolve.',
  },
]

function StepCard({ number, title, desc, last }) {
  return (
    <div
      className={`flex flex-col items-center text-center px-6 ${!last ? 'md:border-r' : ''}`}
      style={{ borderColor: 'rgba(255,255,255,0.1)' }}
    >
      <span
        className="text-display mb-4 leading-none"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '3rem',
          fontWeight: 700,
          color: 'var(--color-highlight)',
          opacity: 0.7,
        }}
      >
        {number}
      </span>
      <h4 className="text-h4 text-white mb-3">{title}</h4>
      <p className="text-body-sm text-white/60">{desc}</p>
    </div>
  )
}

function S3HowWeWork() {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-h4 text-[var(--color-highlight)]">Our Process</p>
          <h2 className="text-h1 text-white leading-tight">
            How We Work Across Industries
          </h2>
          <p className="text-body text-white/70 mt-2 max-w-2xl mx-auto">
            A repeatable execution model built for the complexity of enterprise environments —
            regardless of sector.
          </p>
        </div>

        {/* Process strip */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
          {steps.map((step, i) => (
            <StepCard key={step.number} {...step} last={i === steps.length - 1} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default S3HowWeWork
