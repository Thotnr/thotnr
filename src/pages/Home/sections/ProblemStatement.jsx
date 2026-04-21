// ProblemStatement — Section 2 (light). Narrative that articulates the enterprise AI execution gap.
function ProblemStatement() {
  return (
    <section className="bg-white py-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-3xl mx-auto">

        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-accent">
          The Reality Check
        </p>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-10 text-gray-900 tracking-tight">
          Most enterprises are drowning in AI pilots that{' '}
          <span className="text-accent">never reach production.</span>
        </h2>

        {/* Story */}
        <div className="flex flex-col gap-6 text-base lg:text-lg leading-relaxed text-gray-600">
          <p>
            Every boardroom has an AI strategy deck. Every innovation team has run at least one pilot.
            Vendors have been evaluated, budgets approved, use-cases workshopped. And yet — when you look
            past the slides — the needle on real business outcomes barely moves.
          </p>
          <p>
            The problem isn't a lack of technology. Foundation models are more capable than ever.
            Cloud compute is cheap. Data pipelines exist. The real bottleneck is the gap between what a
            model can do in a controlled demo and what it can reliably do inside a messy, regulated,
            politically complex enterprise operation.
          </p>
          <p>
            Most AI consultancies optimise for impressive prototypes. They hand over a polished
            proof-of-concept, collect the milestone payment, and move on — leaving your team to figure
            out governance, integration, change management, and why the model that scored 94% in
            evaluation is producing nonsense in staging.
          </p>
          <p>
            We've seen it repeatedly: talented engineering teams, genuine executive commitment, and a
            use-case with real business value — all stalled because nobody asked the harder operational
            questions before a single line of code was written.
          </p>
        </div>

        {/* Closing statement */}
        <div className="mt-12 pt-10 border-t border-border">
          <p className="text-xl lg:text-2xl font-semibold leading-snug text-gray-900">
            We don't just build AI solutions.{' '}
            <span className="text-accent">
              We make them work inside your real organisation.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProblemStatement
