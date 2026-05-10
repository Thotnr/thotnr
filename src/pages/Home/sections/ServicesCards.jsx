import icon1 from '../../../assets/images/human-ai.png'
import icon2 from '../../../assets/images/human-meets-ai.png'
import icon3 from '../../../assets/images/collabration-layers.png'

const services = [
  {
    icon: icon1,
    title: 'Human Judgment and AI Powered',
    tagline: 'Where human judgment meets machine capability',
    whatWeDo: 'Human judgment sets the direction. AI extends the reach. We build systems where both work in concert — so your teams decide faster without losing the insight only humans carry.',
  },
  {
    icon: icon2,
    title: 'Where Human Meets Machine',
    tagline: 'AI that understands your business, not just your data',
    whatWeDo: 'Your people bring context. AI brings scale. Together they form a thinking system sharper than either could be alone.',
  },
  {
    icon: icon3,
    title: 'Collaboration at Every Layer',
    tagline: 'Seamless movement of insight across systems and teams',
    whatWeDo: "We don't replace human thinking — we amplify it. AI works alongside your teams, learning how you operate and making every interaction more intelligent over time.",
  },
]

function ServiceCard({ icon, title, whatWeDo, index }) {
  return (
    <>
      <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(50px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .svc-card-wrap-${index} {
          animation: cardIn 0.7s ease ${0.1 + index * 0.15}s both;
          height: 100%;
        }

        .svc-card-${index} {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          cursor: pointer;
          height: 100%;
        }

        .svc-card-${index}:hover {
          transform: translateY(-14px) scale(1.02);
          box-shadow:
            0 25px 50px rgba(0,0,0,0.5),
            0 0 40px rgba(230,57,70,0.15);
        }
      `}</style>

      <div className={`svc-card-wrap-${index}`}>
        <div
          className={`svc-card-${index} relative flex flex-col gap-3 rounded-xl px-7 pt-4 pb-7`}
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div className="w-48 h-48 mx-auto">
            <img src={icon} alt={title} className="w-full h-full object-contain" />
          </div>

          <h3 className="text-h3 text-white" style={{ lineHeight: 1.3 }}>
            {title}
          </h3>

          <p className="text-body text-white/70">
            {whatWeDo}
          </p>
        </div>
      </div>
    </>
  )
}

function ServicesCards() {
  return (
    <>
      <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-secondary)]">
        <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <p className="text-h4 text-[var(--color-highlight)]"> Core Capabilities</p>
          <h2 className="text-h1 text-white"> Our AI Capabilities</h2>
          <p className="text-body text-white/70 mt-2 max-w-2xl">Three interlocking disciplines that take an AI idea from whiteboard to measurable business impact.          </p>
        </div>

          <style>{`
            @media (min-width: 768px) and (max-width: 1023px) {
              .svc-cards-grid .svc-card-wrap-2 {
                grid-column: 1 / -1;
                max-width: calc(50% - 12px);
                margin: 0 auto;
                width: 100%;
              }
            }
          `}</style>
          <div className="svc-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <ServiceCard key={svc.title} {...svc} index={i} />
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default ServicesCards