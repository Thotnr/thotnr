import { Radar, Blocks, TrendingUp } from "lucide-react"

const icons = [ Radar, Blocks, TrendingUp]

const steps = [
  {
    number: '01',
    title: 'TRACE',
    highlightColor: '#B13E53',
    detail: 'We trace enterprise reality before designing intelligence — mapping where your data lives, how work flows, where decisions happen, and what constraints must be addressed before AI can scale.',
  },
  {
    number: '02',
    title: 'INTEGRATE',
    highlightColor: '#445D8C',
    detail: 'We integrate intelligence into the way your business works — engineering AI around your systems, workflows, governance, controls, and teams so it becomes part of execution.',
  },
  {
    number: '03',
    title: 'AMPLIFY',
    highlightColor: '#445D8C',
    detail: 'We amplify outcomes your business can measure — delivering faster decisions, reduced effort, lower risk, improved conversion, and stronger customer outcomes.',
  },
]

function ProcessTimeline() {
  return (
    <section className="bg-[var(--color-primary)] py-16 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <p className="text-h4 text-[var(--color-highlight)] mb-1">
            TIA Framework
          </p>

          <h2 className="text-h1 text-[var(--color-text-primary)]" style={{lineHeight: 1.2}}>
            Great AI doesn’t start with technology. <br />
            <span style= {{fontStyle:'italic'}}>It starts with enterprise reality.</span>    
              </h2>

          <p className="text-body text-[var(--color-text-secondary)] mt-2 max-w-2xl">
              Through <span
                style={{
                  color: 'var(--color-secondary)',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                TIA
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: '-2px',
                    width: '100%',
                    height: '1px',
                    background: 'rgba(69,123,157,0.35)',
                  }}
                />
              </span>, we build intelligence in three moves: trace the reality of your enterprise, integrate AI into the way work actually happens, and amplify outcomes your business can measure.     </p>
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
                    className="mb-5 flex items-center justify-center w-14 h-14 rounded-xl transition group-hover:scale-110"
                    style={{
                      background: 'rgba(230,57,70,0.08)',
                      color: 'var(--color-highlight)',
                    }}
                  >
                    <Icon size={32} strokeWidth={2} />
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