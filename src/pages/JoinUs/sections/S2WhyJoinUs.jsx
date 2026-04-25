const pillars = [
  {
    number: '01',
    title: 'Ownership',
    desc: 'You build, ship, and own outcomes — not just tickets. Every engineer here can trace a line from their work to a client result.',
  },
  {
    number: '02',
    title: 'Real Impact',
    desc: 'We work on systems that run in production for enterprises that depend on them. No toy problems, no indefinite pilots.',
  },
  {
    number: '03',
    title: 'Growth',
    desc: "The pace here is fast and the exposure is wide. You'll move across domains, tech stacks, and seniority levels faster than most organisations allow.",
  },
]

function Pillar({ number, title, desc, last }) {
  return (
    <div className={`py-4 ${!last ? 'border-b' : ''}`} style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
      <div className="flex items-baseline gap-2 mb-2">
        <span
          className="text-h4 flex-shrink-0"
          style={{ color: 'var(--color-highlight)', minWidth: '2rem' }}
        >
          {number}
        </span>
        <h4 className="text-h4" style={{ color: 'var(--color-text-primary)' }}>{title}</h4>
      </div>
      <p className="text-body-sm pl-10" style={{ color: 'var(--color-text-secondary)' }}>
        {desc}
      </p>
    </div>
  )
}

function S2WhyJoinUs() {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[3fr_2fr] gap-16 items-start">

        {/* Left — Narrative */}
        <div>
          <p className="text-h3 text-[var(--color-highlight)] mb-3">Why Join Us</p>

          <h2 className="text-h1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>
            Work That Matters.<br />
            A Team That Pushes<br />
            You Forward.
          </h2>

          <div
            className="mt-3 mb-5 h-[3px] w-16 rounded-full"
            style={{ background: 'var(--color-highlight)' }}
          />

          <p className="text-body max-w-md" style={{ color: 'var(--color-text-secondary)' }}>
            Thotnr is built on the belief that the best engineers want to work on real,
            hard problems — and grow into roles that give them genuine authority over
            what they build. We offer that environment, and nothing less.
          </p>
        </div>

        {/* Right — Core Pillars */}
        <div>
          {pillars.map((p, i) => (
            <Pillar key={p.number} {...p} last={i === pillars.length - 1} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default S2WhyJoinUs
