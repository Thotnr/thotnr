// ── Data ──────────────────────────────────────────────────────────────────────

const steps = [
  {
    number:  '01',
    title:   'Map the Reality',
    summary: 'We immerse in your organisation — not your decks.',
    detail:  'Deep-dive workshops, system audits, and stakeholder interviews surface the real data landscape, process bottlenecks, and cultural constraints that will determine whether any AI project lives or dies.',
  },
  {
    number:  '02',
    title:   'Find the AI Angle',
    summary: 'Not every problem needs AI. The ones that do deserve precision.',
    detail:  'We identify the highest-impact AI opportunities specific to your context — prioritising by ROI potential, implementation complexity, and organisational readiness, not industry buzzwords.',
  },
  {
    number:  '03',
    title:   'Build With Purpose',
    summary: 'Engineering for the messy middle, not the clean demo.',
    detail:  'Solutions are designed around your existing systems, data quality realities, and security requirements. Every architectural decision is made with handoff and maintainability in mind from day one.',
  },
  {
    number:  '04',
    title:   'Make It Real',
    summary: 'Production is the only metric that matters.',
    detail:  "We own deployment, integration testing, user acceptance, and team training. We don't consider a project complete until your people are running it confidently and outcomes are being tracked.",
  },
  {
    number:  '05',
    title:   'Evolve Together',
    summary: 'AI is not a one-time project. It is a capability.',
    detail:  'Post-launch monitoring, model drift detection, quarterly reviews, and continuous capability expansion ensure your AI investments compound over time rather than degrade.',
  },
]

// ── Step ──────────────────────────────────────────────────────────────────────

function TimelineStep({ number, title, summary, detail, isLast }) {
  return (
    <div className="flex gap-8 relative">
      {/* Number + line */}
      <div className="flex flex-col items-center" style={{ minWidth: 72 }}>
        <div className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 z-10 border-2 border-accent text-accent bg-accent/[0.08]">
          {number}
        </div>
        {!isLast && (
          <div className="flex-1 w-px mt-2 bg-gradient-to-b from-accent/40 to-transparent" style={{ minHeight: 60 }} />
        )}
      </div>

      {/* Content */}
      <div className="pb-12">
        <h3 className="text-xl font-semibold mb-1 text-gray-900">{title}</h3>
        <p className="text-base font-medium mb-3 text-accent">{summary}</p>
        <p className="text-sm lg:text-base leading-relaxed text-gray-600">{detail}</p>
      </div>
    </div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

// ProcessTimeline — Section 4 (light). Vertical numbered engagement methodology.
function ProcessTimeline() {
  return (
    <section className="bg-white py-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-accent">
            Our Methodology
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900 tracking-tight">
            How <span className="text-accent">AI Thinking</span> Works in Practice
          </h2>
          <p className="mt-4 text-base lg:text-lg leading-relaxed text-gray-600">
            A five-phase engagement designed to move at the speed of your organisation while never sacrificing depth.
          </p>
        </div>

        {/* Timeline */}
        <div>
          {steps.map((step, i) => (
            <TimelineStep key={step.number} {...step} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline
