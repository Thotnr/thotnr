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

function ServiceCard({ icon, title, tagline, whatWeDo, index }) {
  return (
    <>
      <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(50px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes scanline {
          0%   { top: 0%; opacity: 0.6; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes cornerPulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }
        @keyframes particleRise {
          0%   { transform: translateY(0) scale(1);    opacity: 0.8; }
          100% { transform: translateY(-80px) scale(0); opacity: 0; }
        }

        .svc-card-wrap-${index} {
          animation: cardIn 0.7s cubic-bezier(0.4,0,0.2,1) ${0.1 + index * 0.15}s both;
          height: 100%;
        }

        .svc-icon-${index} {
          animation: iconFloat ${4 + index * 0.4}s ease-in-out infinite;
        }

        .svc-card-${index} {
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease, border-color 0.3s ease;
          transform-style: preserve-3d;
          perspective: 800px;
          cursor: pointer;
          height: 100%;
        }
        .svc-card-${index}:hover {
          transform: translateY(-16px) rotateX(6deg) rotateY(${index === 0 ? '4deg' : index === 1 ? '0deg' : '-4deg'}) scale(1.03);
          box-shadow:
            0 30px 60px rgba(0,0,0,0.6),
            0 0 0 1px rgb(var(--color-tech-rgb) / 0.4),
            0 0 40px rgb(var(--color-tech-rgb) / 0.15),
            0 0 80px rgb(var(--color-tech-rgb) / 0.06);
          border-color: rgb(var(--color-tech-rgb) / 0.4) !important;
        }

        .svc-card-${index}:hover .scan-line { animation: scanline 1.2s linear infinite; }
        .scan-line {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(to right, transparent, rgb(var(--color-tech-rgb) / 0.5), transparent);
          pointer-events: none; top: -100%; opacity: 0;
        }

        .svc-card-${index}:hover .corner-tl-${index},
        .svc-card-${index}:hover .corner-tr-${index},
        .svc-card-${index}:hover .corner-bl-${index},
        .svc-card-${index}:hover .corner-br-${index} {
          opacity: 1;
          animation: cornerPulse 1.5s ease-in-out infinite;
        }
        .corner-tl-${index}, .corner-tr-${index},
        .corner-bl-${index}, .corner-br-${index} {
          position: absolute; width: 14px; height: 14px;
          opacity: 0; transition: opacity 0.3s ease;
        }
        .corner-tl-${index} { top: 10px; left: 10px; border-top: 2px solid var(--color-tech-bright); border-left: 2px solid var(--color-tech-bright); }
        .corner-tr-${index} { top: 10px; right: 10px; border-top: 2px solid var(--color-tech-bright); border-right: 2px solid var(--color-tech-bright); }
        .corner-bl-${index} { bottom: 10px; left: 10px; border-bottom: 2px solid var(--color-tech-bright); border-left: 2px solid var(--color-tech-bright); }
        .corner-br-${index} { bottom: 10px; right: 10px; border-bottom: 2px solid var(--color-tech-bright); border-right: 2px solid var(--color-tech-bright); }

        .svc-card-${index}:hover .particle-${index} { animation: particleRise 1.5s ease-out infinite; }
        .particle-${index} {
          position: absolute; width: 3px; height: 3px;
          border-radius: 50%; background: var(--color-tech-bright); opacity: 0;
        }
        .p1-${index} { bottom: 20%; left: 20%; animation-delay: 0s; }
        .p2-${index} { bottom: 15%; left: 45%; animation-delay: 0.4s; }
        .p3-${index} { bottom: 25%; left: 70%; animation-delay: 0.8s; }
        .p4-${index} { bottom: 10%; left: 30%; animation-delay: 1.1s; }

        .svc-card-${index}:hover .icon-img-${index} {
          filter: drop-shadow(0 0 16px rgb(var(--color-tech-bright-rgb) / 0.5)) drop-shadow(0 0 32px rgb(var(--color-tech-bright-rgb) / 0.25));
        }
        .icon-img-${index} {
          filter: drop-shadow(0 4px 12px rgb(var(--color-tech-bright-rgb) / 0.15));
          transition: filter 0.4s ease;
        }

        .svc-card-${index}:hover .card-title-${index} {
          text-shadow:
            0px -1px 0 rgba(255,255,255,0.08),
            1px 1px 0 rgba(0,0,0,0.8),
            2px 2px 0 rgba(0,0,0,0.5),
            3px 3px 0 rgba(0,0,0,0.3),
            4px 4px 12px rgba(0,0,0,0.4),
            0 0 20px rgb(var(--color-ink-soft-rgb) / 0.08);
          transform: translateZ(20px);
        }
        .card-title-${index} {
          transition: text-shadow 0.4s ease, transform 0.4s ease;
          text-shadow: 1px 1px 0 rgba(0,0,0,0.6), 2px 2px 4px rgba(0,0,0,0.3);
        }

        .svc-card-${index}:hover .hover-overlay-${index} { opacity: 1; }
        .hover-overlay-${index} {
          opacity: 0;
          transition: opacity 0.4s ease;
          background: linear-gradient(135deg, rgb(var(--color-tech-rgb) / 0.08) 0%, rgb(var(--color-tech-rgb) / 0.03) 40%, transparent 70%);
        }
      `}</style>

      <div className={`svc-card-wrap-${index}`}>
        <div
          className={`svc-card-${index} group relative flex flex-col gap-6 rounded-xl p-7`}
          style={{
            background: 'var(--color-bg-card)',
            border: '1px solid var(--color-border-subtle)',
          }}
        >
          <div className="scan-line" />

          <div className={`corner-tl-${index}`} />
          <div className={`corner-tr-${index}`} />
          <div className={`corner-bl-${index}`} />
          <div className={`corner-br-${index}`} />

          <div className={`hover-overlay-${index} absolute inset-0 rounded-xl pointer-events-none`} />

          <div className={`particle-${index} p1-${index}`} />
          <div className={`particle-${index} p2-${index}`} />
          <div className={`particle-${index} p3-${index}`} />
          <div className={`particle-${index} p4-${index}`} />

          {/* Icon */}
          <div className={`svc-icon-${index} w-40 h-40 relative z-10 flex-shrink-0`}>
            <img src={icon} alt={title} className={`icon-img-${index} w-full h-full object-contain`} />
          </div>

          {/* Title */}
          <div className="relative z-10">
            <h3
              className={`card-title-${index} t-title-lg mb-1`}
              style={{ color: 'var(--color-text-primary)' }}
            >
              {title}
            </h3>
          </div>

          {/* Body — line-clamp keeps equal height */}
          <div className="relative z-10">
            <p
              className="t-body-lg line-clamp-5"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {whatWeDo}
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

function ServicesCards() {
  return (
    <>
      <style>{`
        @keyframes eyebrowFade {
          from { opacity: 0; letter-spacing: 0.3em; }
          to   { opacity: 1; letter-spacing: 0.1em; }
        }
        @keyframes headSlide {
          from { opacity: 0; transform: translateX(-28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes aiPop {
          0%, 100% {
            text-shadow:
              1px 1px 0 var(--color-accent-sh2), 2px 2px 0 var(--color-accent-sh3), 3px 3px 0 var(--color-accent-sh4),
              4px 4px 0 var(--color-accent-sh5), 5px 5px 0 var(--color-accent-sh6),
              6px 6px 16px rgba(0,0,0,0.7),
              0 0 30px rgb(var(--color-accent-rgb) / 0.4), 0 0 60px rgb(var(--color-accent-rgb) / 0.15);
            transform: translateZ(0px) scale(1);
          }
          50% {
            text-shadow:
              1px 1px 0 var(--color-accent-sh0), 2px 2px 0 var(--color-accent-sh1), 3px 3px 0 var(--color-accent-sh2),
              4px 4px 0 var(--color-accent-sh3), 5px 5px 0 var(--color-accent-sh4), 6px 6px 0 var(--color-accent-sh5),
              7px 7px 20px rgba(0,0,0,0.7),
              0 0 50px rgb(var(--color-accent-rgb) / 0.65), 0 0 90px rgb(var(--color-accent-rgb) / 0.25);
            transform: translateZ(8px) scale(1.02);
          }
        }
        @keyframes restGlow {
          0%, 100% {
            text-shadow:
              1px 1px 0 rgba(0,0,0,0.7), 2px 2px 0 rgba(0,0,0,0.4),
              3px 3px 8px rgba(0,0,0,0.3);
          }
          50% {
            text-shadow:
              1px 1px 0 rgba(0,0,0,0.7), 2px 2px 0 rgba(0,0,0,0.4),
              3px 3px 12px rgba(0,0,0,0.3), 0 0 20px rgb(var(--color-ink-soft-rgb) / 0.05);
          }
        }
        .sc-eyebrow { animation: eyebrowFade 0.8s ease 0.1s both; }
        .sc-headline {
          animation: headSlide 0.9s cubic-bezier(0.4,0,0.2,1) 0.3s both;
        }
        .sc-sub { animation: headSlide 0.9s cubic-bezier(0.4,0,0.2,1) 0.45s both; }
        .ai-word {
          display: inline-block;
          color: var(--color-accent);
        
        }
        .rest-word {
          display: inline-block;
          animation: restGlow 4s ease-in-out 1.5s infinite;
          text-shadow:
            1px 1px 0 rgba(0,0,0,0.7), 2px 2px 0 rgba(0,0,0,0.4),
            3px 3px 8px rgba(0,0,0,0.3);
        }
      `}</style>

      <section
        className="py-20 px-6 md:px-10 lg:px-16"
        style={{ background: 'var(--color-bg-secondary)' }}
      >
        <div className="flex flex-col justify-start">

          <div className="text-start mb-16">
            <p
              className="sc-eyebrow t-eyebrow mb-3"
              style={{ color: 'var(--color-accent)' }}
            >
              Core Capabilities
            </p>

            <h2
              className="sc-headline t-headline"
              style={{
                color: 'var(--color-text-primary)',
                transformStyle: 'preserve-3d',
                perspective: '600px',
              }}
            >
              <span className="rest-word">Our&nbsp;</span>
              <span className="ai-word">AI</span>
              <span className="rest-word">&nbsp;Capabilities</span>
            </h2>

            <p
              className="sc-sub t-sub mt-4"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Three interlocking disciplines that take an AI idea from whiteboard
              to measurable business impact.
            </p>
          </div>

          {/* items-stretch — all cards same height */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
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
