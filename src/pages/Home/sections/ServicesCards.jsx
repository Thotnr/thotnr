import icon1 from '../../../assets/icons/icon1-dark-human-ai.svg'
import icon2 from '../../../assets/icons/icon2-dark-enterprise.svg'
import icon3 from '../../../assets/icons/icon3-dark-flow.svg'

const services = [
  {
    icon: icon1,
    title: 'Human and AI collaboration',
    tagline: 'Where human judgment meets machine capability',
    whatWeDo: 'Engineering is evolving. AI no longer just helps us write code; it shapes how we design, test, and improve systems. Engineers are becoming system thinkers, creating spaces where human judgment and AI work together effectively.',
  },
  {
    icon: icon2,
    title: 'AI grounded in real enterprise knowledge',
    tagline: 'AI that understands your business, not just your data',
    whatWeDo: 'Enterprises carry years of hard-won knowledge, but it often sits in silos. Fluidic Intelligence brings it together through strong technology foundations and practical AI. The result is AI that understands how the enterprise really works.',
  },
  {
    icon: icon3,
    title: 'Intelligence in flow across the enterprise',
    tagline: 'Seamless movement of insight across systems and teams',
    whatWeDo: 'At the enterprise level, intelligence flows to the right models, systems, and people. Decisions and actions move smoothly across teams and processes, removing the friction that once slowed everything down.',
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
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes scanline {
          0% { top: 0%; opacity: 0.6; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes cornerPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes particleRise {
          0% { transform: translateY(0) scale(1); opacity: 0.8; }
          100% { transform: translateY(-80px) scale(0); opacity: 0; }
        }

        .svc-card-wrap-${index} {
          animation: cardIn 0.7s ease ${0.1 + index * 0.15}s both;
          height: 100%;
        }

        .svc-icon-${index} {
          animation: iconFloat ${4 + index * 0.4}s ease-in-out infinite;
        }

        .svc-card-${index} {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          transform-style: preserve-3d;
          cursor: pointer;
          height: 100%;
        }

        .svc-card-${index}:hover {
          transform: translateY(-14px) scale(1.02);
          box-shadow:
            0 25px 50px rgba(0,0,0,0.5),
            0 0 40px rgba(230,57,70,0.15);
        }

        .scan-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(to right, transparent, rgba(168,218,220,0.5), transparent);
          pointer-events: none;
          top: -100%;
          opacity: 0;
        }

        .svc-card-${index}:hover .scan-line {
          animation: scanline 1.2s linear infinite;
        }

        .corner-tl-${index}, .corner-tr-${index},
        .corner-bl-${index}, .corner-br-${index} {
          position: absolute;
          width: 12px;
          height: 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-color: rgba(230,57,70,0.6);
        }

        .corner-tl-${index} { top: 10px; left: 10px; border-top: 2px solid; border-left: 2px solid; }
        .corner-tr-${index} { top: 10px; right: 10px; border-top: 2px solid; border-right: 2px solid; }
        .corner-bl-${index} { bottom: 10px; left: 10px; border-bottom: 2px solid; border-left: 2px solid; }
        .corner-br-${index} { bottom: 10px; right: 10px; border-bottom: 2px solid; border-right: 2px solid; }

        .svc-card-${index}:hover .corner-tl-${index},
        .svc-card-${index}:hover .corner-tr-${index},
        .svc-card-${index}:hover .corner-bl-${index},
        .svc-card-${index}:hover .corner-br-${index} {
          opacity: 1;
          animation: cornerPulse 1.5s infinite;
        }

        .particle-${index} {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(230,57,70,0.7);
          opacity: 0;
        }

        .svc-card-${index}:hover .particle-${index} {
          animation: particleRise 1.5s infinite;
        }
      `}</style>

      <div className={`svc-card-wrap-${index}`}>
        <div
          className={`svc-card-${index} relative flex flex-col gap-3 rounded-xl p-7`}
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div className="scan-line" />

          <div className={`corner-tl-${index}`} />
          <div className={`corner-tr-${index}`} />
          <div className={`corner-bl-${index}`} />
          <div className={`corner-br-${index}`} />

          <div className={`particle-${index}`} />

          {/* Icon */}
          <div className={`svc-icon-${index} w-44 h-44 mx-auto`}>
            <img src={icon} alt={title} className="w-full h-full object-contain" />
          </div>

          {/* Title */}
          <h3 className="text-h3 text-white">
            {title}
          </h3>

          {/* Body */}
          <p className="text-body text-white/70 line-clamp-5">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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