import icon1 from '../../../assets/images/human-ai.png'
import icon2 from '../../../assets/images/human-meets-ai.png'
import icon3 from '../../../assets/images/collabration-layers.png'

const services = [
  {
    icon: icon1,
    title: 'AI built to extend human capability',
    tagline: 'Augmentation',
    whatWeDo: 'We design AI systems that strengthen human judgment with speed, scale, and precision. By combining machine intelligence with business context, we enable teams to make faster, more informed decisions while retaining oversight, accountability, and strategic control.',
  },
  {
    icon: icon2,
    title: 'Where people and AI work as one',
    tagline: 'Collabration',
    whatWeDo: 'Our solutions are built for practical human–AI collaboration. Teams bring domain expertise and intent, while AI contributes responsiveness, analytical depth, and scale — creating a more effective way to work across critical business functions.',
  },
  {
    icon: icon3,
    title: 'Intelligence embedded across operations',
    tagline: 'Integration',
    whatWeDo: "We integrate AI directly into enterprise workflows, systems, and decision points. This makes intelligence operational across the organisation, improving efficiency, consistency, and adaptability over time.",
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

          <p className="text-body" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.75 }}>
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
          <p className="text-body mt-2 max-w-2xl" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.75 }}>Intelligence Augmented across decisions, workflows, and operations.</p>
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