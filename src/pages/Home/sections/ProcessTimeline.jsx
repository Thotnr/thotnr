import { Brain, Search, Rocket } from "lucide-react"

const icons = [Brain, Search, Rocket]

const steps = [
  {
    number:  '01',
    title:   'Sense the Enterprise',
    summary: 'We immerse in your organisation — not your decks.',
    detail:  'We assess your data, systems, processes, decision points, and operating constraints to understand where AI can genuinely create value. This creates a clear view of your enterprise reality before any solution is designed.',
  },
  {
    number:  '02',
    title:   'Shape the Intelligence',
    summary: 'Not every problem needs AI. The ones that do deserve precision.',
    detail:  'We identify and prioritise AI opportunities based on business value, data readiness, implementation complexity, risk, and adoption potential — focusing only on use cases that can become practical business capability.',
  },
  {
    number:  '03',
    title:   'Scale the Capability',
    summary: 'Engineering for long-term production capability, not just a clean demo.',
    detail:  'We deploy intelligence into your infrastructure, workflows, and governance model — then monitor outcomes so AI becomes a repeatable capability, not a one-time experiment.',
  },
]

function ProcessTimeline() {
  return (
    <section className="bg-[var(--color-primary)] py-16 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <p className="text-h4 text-[var(--color-highlight)]">
            TIA Framework
          </p>

          <h2 className="text-h1 text-[var(--color-text-primary)]">
            How Thotnr Intelligence Augmentation Works
          </h2>

          <p className="text-body text-[var(--color-text-secondary)] mt-2 max-w-2xl">
A three-phase engagement designed to move from enterprise reality to measurable AI value — without sacrificing depth, governance, or adoption.          </p>
        </div>

        {/* Cards */}
        <style>{`
          @media (min-width: 768px) and (max-width: 1023px) {
            .proc-cards-grid > *:nth-child(3) {
              grid-column: 1 / -1;
              max-width: calc(50% - 16px);
              margin: 0 auto;
              width: 100%;
            }
          }
        `}</style>
        <div className="proc-cards-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1200px]">
          {steps.map((step, i) => {
            const Icon = icons[i]

            return (
              <div key={step.number} className="group relative">

                {/* Subtle glow layer (kept but toned premium) */}
                <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[rgba(230,57,70,0.12)] via-transparent to-[rgba(230,57,70,0.12)] blur-md" />

                {/* Card */}
                <div
                  className="
                    relative
                    rounded-2xl
                    p-6
                    h-full
                    transition-all duration-500
                    transform-gpu
                    group-hover:-translate-y-2
                    group-hover:rotate-[0.5deg]
                  "
                  style={{
                    background: 'rgba(255,255,255,0.6)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(0,0,0,0.06)',
                  }}
                >

                  {/* Icon */}
                  <div
                    className="mb-5 flex items-center justify-center w-12 h-12 rounded-xl transition group-hover:scale-110"
                    style={{
                      background: 'rgba(230,57,70,0.08)',
                      color: 'var(--color-highlight)',
                    }}
                  >
                    <Icon size={22} strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-h3 text-[var(--color-text-primary)] mb-4">
                    {step.title}
                  </h3>

                  {/* Detail */}
                  <p className="text-body text-[var(--color-text-secondary)]">
                    {step.detail}
                  </p>

                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default ProcessTimeline