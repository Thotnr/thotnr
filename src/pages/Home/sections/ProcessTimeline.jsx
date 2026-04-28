import { Brain, Search, Rocket } from "lucide-react"

const icons = [Brain, Search, Rocket]

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
    title:   'Build, Ship & Evolve',
    summary: 'Engineering for long-term production capability, not just a clean demo.',
    detail:  'We handle end-to-end deployment, infrastructure integration, and ongoing governance. From day one, we monitor performance and train your team to ensure your AI scales reliably and compounds in value.',
  },
]

function ProcessTimeline() {
  return (
    <section className="bg-[var(--color-primary)] py-16 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <p className="text-h4 text-[var(--color-highlight)]">
            Our Methodology
          </p>

          <h2 className="text-h1 text-[var(--color-text-primary)]">
            How AI Thinking Works in Practice
          </h2>

          <p className="text-body text-[var(--color-text-secondary)] mt-2 max-w-2xl">
            A five-phase engagement designed to move at the speed of your organisation while never sacrificing depth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 perspective-[1200px]">
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