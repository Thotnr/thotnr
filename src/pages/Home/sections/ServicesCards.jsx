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
          0%   { transform: translateY(0) scale(1);   opacity: 0.8; }
          100% { transform: translateY(-80px) scale(0); opacity: 0; }
        }

        .svc-card-wrap-${index} {
          animation: cardIn 0.7s cubic-bezier(0.4,0,0.2,1) ${0.1 + index * 0.15}s both;
        }

        .svc-icon-${index} {
          animation: iconFloat ${4 + index * 0.4}s ease-in-out infinite;
        }

        /* CRAZY HOVER — tilt + glow burst + scanline + corner brackets */
        .svc-card-${index} {
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease, border-color 0.3s ease;
          transform-style: preserve-3d;
          perspective: 800px;
          cursor: pointer;
        }
        .svc-card-${index}:hover {
          transform: translateY(-16px) rotateX(6deg) rotateY(${index === 0 ? '4deg' : index === 1 ? '0deg' : '-4deg'}) scale(1.03);
          box-shadow:
            0 30px 60px rgba(0,0,0,0.6),
            0 0 0 1px rgba(59,130,246,0.4),
            0 0 40px rgba(59,130,246,0.15),
            0 0 80px rgba(59,130,246,0.06);
          border-color: rgba(59,130,246,0.4) !important;
        }

        /* Scanline sweep on hover */
        .svc-card-${index}:hover .scan-line {
          animation: scanline 1.2s linear infinite;
        }
        .scan-line {
          position: absolute; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(to right, transparent, rgba(59,130,246,0.5), transparent);
          pointer-events: none;
          top: -100%;
          opacity: 0;
        }

        /* Corner brackets animate on hover */
        .svc-card-${index}:hover .corner-tl,
        .svc-card-${index}:hover .corner-tr,
        .svc-card-${index}:hover .corner-bl,
        .svc-card-${index}:hover .corner-br {
          opacity: 1;
          animation: cornerPulse 1.5s ease-in-out infinite;
        }
        .corner-tl, .corner-tr, .corner-bl, .corner-br {
          position: absolute; width: 14px; height: 14px; opacity: 0;
          transition: opacity 0.3s ease;
        }
        .corner-tl { top: 10px; left: 10px; border-top: 2px solid #4a9eff; border-left: 2px solid #4a9eff; }
        .corner-tr { top: 10px; right: 10px; border-top: 2px solid #4a9eff; border-right: 2px solid #4a9eff; }
        .corner-bl { bottom: 10px; left: 10px; border-bottom: 2px solid #4a9eff; border-left: 2px solid #4a9eff; }
        .corner-br { bottom: 10px; right: 10px; border-bottom: 2px solid #4a9eff; border-right: 2px solid #4a9eff; }

        /* Particles on hover */
        .svc-card-${index}:hover .particle { animation: particleRise 1.5s ease-out infinite; }
        .particle {
          position: absolute; width: 3px; height: 3px;
          border-radius: 50%;
          background: #4a9eff;
          opacity: 0;
        }
        .p1 { bottom: 20%; left: 20%; animation-delay: 0s !important; }
        .p2 { bottom: 15%; left: 45%; animation-delay: 0.4s !important; }
        .p3 { bottom: 25%; left: 70%; animation-delay: 0.8s !important; }
        .p4 { bottom: 10%; left: 30%; animation-delay: 1.1s !important; }

        /* Icon glow on hover */
        .svc-card-${index}:hover .icon-img {
          filter: drop-shadow(0 0 16px rgba(74,158,255,0.5)) drop-shadow(0 0 32px rgba(74,158,255,0.25));
        }
        .icon-img {
          filter: drop-shadow(0 4px 12px rgba(74,158,255,0.15));
          transition: filter 0.4s ease;
        }

        /* 3D text pop on hover */
        .svc-card-${index}:hover .card-title {
          text-shadow:
            0px -1px 0 rgba(255,255,255,0.08),
            1px 1px 0 rgba(0,0,0,0.8),
            2px 2px 0 rgba(0,0,0,0.5),
            3px 3px 0 rgba(0,0,0,0.3),
            4px 4px 12px rgba(0,0,0,0.4),
            0 0 20px rgba(248,250,252,0.08);
          transform: translateZ(20px);
        }
        .card-title {
          transition: text-shadow 0.4s ease, transform 0.4s ease;
          text-shadow:
            1px 1px 0 rgba(0,0,0,0.6),
            2px 2px 4px rgba(0,0,0,0.3);
        }

        /* Overlay shimmer on hover */
        .svc-card-${index}:hover .hover-overlay {
          opacity: 1;
        }
        .hover-overlay {
          opacity: 0;
          transition: opacity 0.4s ease;
          background: linear-gradient(
            135deg,
            rgba(59,130,246,0.08) 0%,
            rgba(59,130,246,0.03) 40%,
            transparent 70%
          );
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
          {/* Scanline sweep */}
          <div className="scan-line" />

          {/* Corner brackets */}
          <div className="corner-tl" />
          <div className="corner-tr" />
          <div className="corner-bl" />
          <div className="corner-br" />

          {/* Hover overlay */}
          <div className="hover-overlay absolute inset-0 rounded-xl pointer-events-none" />

          {/* Particles */}
          <div className="particle p1" />
          <div className="particle p2" />
          <div className="particle p3" />
          <div className="particle p4" />

          {/* Icon */}
          <div className={`svc-icon-${index} w-40 h-40 relative z-10`}>
            <img src={icon} alt={title} className="icon-img w-full h-full object-contain" />
          </div>

          {/* Title — 3D pop */}
          <div className="relative z-10">
            <h3
              className="card-title text-3xl font-semibold mb-1"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {title}
            </h3>
          </div>

          {/* Body */}
          <div className="relative z-10">
            <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
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
        .sc-eyebrow  { animation: eyebrowFade 0.8s ease 0.1s both; }
        .sc-headline {
          animation: headSlide 0.9s cubic-bezier(0.4,0,0.2,1) 0.3s both;
          text-shadow:
            1px 1px 0 rgba(0,0,0,0.7),
            2px 2px 0 rgba(0,0,0,0.4),
            3px 3px 8px rgba(0,0,0,0.25),
            4px 4px 16px rgba(0,0,0,0.15);
        }
        .sc-sub { animation: headSlide 0.9s cubic-bezier(0.4,0,0.2,1) 0.45s both; }
      `}</style>

      <section className="py-20 px-6 md:px-10 lg:px-16" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="flex flex-col justify-start">

          <div className="text-start mb-16">
            <p className="sc-eyebrow text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--color-accent)' }}>
              Core Capabilities
            </p>
            <>
  <style>{`
    @keyframes aiPop {
      0%, 100% {
        text-shadow:
          1px 1px 0 #7f0020,
          2px 2px 0 #6b001a,
          3px 3px 0 #570015,
          4px 4px 0 #450010,
          5px 5px 0 #35000c,
          6px 6px 16px rgba(0,0,0,0.7),
          0 0 30px rgba(225,29,72,0.4),
          0 0 60px rgba(225,29,72,0.15);
        transform: translateZ(0px) scale(1);
      }
      50% {
        text-shadow:
          1px 1px 0 #9f0028,
          2px 2px 0 #8a0022,
          3px 3px 0 #7f0020,
          4px 4px 0 #6b001a,
          5px 5px 0 #570015,
          6px 6px 0 #450010,
          7px 7px 20px rgba(0,0,0,0.7),
          0 0 50px rgba(225,29,72,0.65),
          0 0 90px rgba(225,29,72,0.25),
          0 0 120px rgba(225,29,72,0.1);
        transform: translateZ(8px) scale(1.02);
      }
    }
    @keyframes restGlow {
      0%, 100% {
        text-shadow:
          1px 1px 0 rgba(0,0,0,0.7),
          2px 2px 0 rgba(0,0,0,0.4),
          3px 3px 8px rgba(0,0,0,0.3);
      }
      50% {
        text-shadow:
          1px 1px 0 rgba(0,0,0,0.7),
          2px 2px 0 rgba(0,0,0,0.4),
          3px 3px 12px rgba(0,0,0,0.3),
          0 0 20px rgba(248,250,252,0.05);
      }
    }
    .ai-word {
      display: inline-block;
      color: var(--color-accent);
    
    }
    .rest-word {
      display: inline-block;
      animation: restGlow 4s ease-in-out 1.5s infinite;
      text-shadow:
        1px 1px 0 rgba(0,0,0,0.7),
        2px 2px 0 rgba(0,0,0,0.4),
        3px 3px 8px rgba(0,0,0,0.3);
    }
  `}</style>

  <h2
    className="sc-headline text-4xl sm:text-4xl font-semibold tracking-tight"
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
</>
            <p className="sc-sub mt-4 text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              Three interlocking disciplines that take an AI idea from whiteboard to measurable business impact.
            </p>
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