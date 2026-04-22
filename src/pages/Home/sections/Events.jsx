import aiSummitImg from '../../../assets/images/ai-summit.jpg'

const events = [
  {
    featured: true,
    image: aiSummitImg,
    type: 'In-Person',
    title: 'AI Leadership Summit 2025',
    desc: "A curated gathering of enterprise AI leaders — sharing what's actually working in production environments, governance frameworks, and C-suite AI alignment.",
    date: 'January 15, 2025',
    time: '9:00 AM – 6:00 PM',
    location: 'New York, NY',
  },
  {
    featured: false,
    image: null,
    type: 'Online',
    title: 'Enterprise AI Workshop',
    desc: 'Hands-on half-day workshop covering AI readiness assessment, use-case prioritisation, and rapid prototyping frameworks your team can apply immediately.',
    date: 'February 8, 2025',
    time: '10:00 AM – 2:00 PM',
    location: 'Virtual',
  },
  {
    featured: false,
    image: null,
    type: 'In-Person',
    title: 'AI Implementation Masterclass',
    desc: 'A deep-dive masterclass on moving AI from pilot to production — covering technical architecture, change management, and governance models.',
    date: 'March 22, 2025',
    time: '9:00 AM – 5:00 PM',
    location: 'San Francisco, CA',
  },
]

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function TypeBadge({ type }) {
  const isOnline = type === 'Online'
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider"
      style={{
        background: isOnline ? 'rgba(59,130,246,0.15)' : 'rgba(225,29,72,0.15)',
        color: isOnline ? 'var(--color-tech)' : 'var(--color-accent)',
        border: `1px solid ${isOnline ? 'rgba(59,130,246,0.25)' : 'rgba(225,29,72,0.25)'}`,
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: isOnline ? 'var(--color-tech)' : 'var(--color-accent)' }} />
      {type}
    </span>
  )
}

function FeaturedCard({ type, title, desc, date, time, location, image }) {
  return (
    <>
      <style>{`
        @keyframes featuredIn {
          from { opacity: 0; transform: translateX(-40px) scale(0.97); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes imgZoom {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.04); }
        }
        @keyframes scanFeat {
          0%   { top: 0%; opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes featTitleGlow {
          0%, 100% {
            text-shadow:
              1px 1px 0 rgba(0,0,0,0.8),
              2px 2px 0 rgba(0,0,0,0.5),
              3px 3px 8px rgba(0,0,0,0.4);
          }
          50% {
            text-shadow:
              1px 1px 0 rgba(0,0,0,0.8),
              2px 2px 0 rgba(0,0,0,0.5),
              3px 3px 12px rgba(0,0,0,0.5),
              0 0 30px rgba(248,250,252,0.08);
          }
        }
        @keyframes particleUp {
          0%   { transform: translateY(0) scale(1);    opacity: 0.9; }
          100% { transform: translateY(-90px) scale(0); opacity: 0; }
        }
        @keyframes cornerBlink {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
        .feat-card {
          animation: featuredIn 0.8s cubic-bezier(0.4,0,0.2,1) 0.1s both;
          transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease, border-color 0.3s ease;
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        .feat-card:hover {
          transform: translateY(-14px) rotateX(5deg) rotateY(-3deg) scale(1.02);
          box-shadow:
            0 32px 64px rgba(0,0,0,0.7),
            0 0 0 1px rgba(225,29,72,0.5),
            0 0 50px rgba(225,29,72,0.18),
            0 0 100px rgba(225,29,72,0.07);
          border-color: rgba(225,29,72,0.5) !important;
        }
        .feat-img {
          animation: imgZoom 8s ease-in-out infinite;
        }
        .feat-card:hover .scan-feat {
          animation: scanFeat 1.4s linear infinite;
        }
        .scan-feat {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(to right, transparent, rgba(225,29,72,0.5), transparent);
          top: -100%; opacity: 0; pointer-events: none; z-index: 20;
        }
        .feat-card:hover .feat-particle { animation: particleUp 1.6s ease-out infinite; }
        .feat-particle {
          position: absolute; width: 3px; height: 3px; border-radius: 50%;
          background: var(--color-accent); opacity: 0; pointer-events: none; z-index: 20;
        }
        .fp1 { bottom: 15%; left: 15%; animation-delay: 0s !important; }
        .fp2 { bottom: 10%; left: 35%; animation-delay: 0.5s !important; }
        .fp3 { bottom: 18%; left: 60%; animation-delay: 0.9s !important; }
        .fp4 { bottom: 12%; left: 80%; animation-delay: 1.3s !important; }
        .feat-corner-tl, .feat-corner-tr, .feat-corner-bl, .feat-corner-br {
          position: absolute; width: 16px; height: 16px;
          opacity: 0; transition: opacity 0.3s ease; z-index: 20;
        }
        .feat-card:hover .feat-corner-tl,
        .feat-card:hover .feat-corner-tr,
        .feat-card:hover .feat-corner-bl,
        .feat-card:hover .feat-corner-br {
          opacity: 1; animation: cornerBlink 1.5s ease-in-out infinite;
        }
        .feat-corner-tl { top: 10px; left: 10px; border-top: 2px solid var(--color-accent); border-left: 2px solid var(--color-accent); }
        .feat-corner-tr { top: 10px; right: 10px; border-top: 2px solid var(--color-accent); border-right: 2px solid var(--color-accent); }
        .feat-corner-bl { bottom: 10px; left: 10px; border-bottom: 2px solid var(--color-accent); border-left: 2px solid var(--color-accent); }
        .feat-corner-br { bottom: 10px; right: 10px; border-bottom: 2px solid var(--color-accent); border-right: 2px solid var(--color-accent); }
        .feat-title {
          animation: featTitleGlow 4s ease-in-out 1s infinite;
          text-shadow: 1px 1px 0 rgba(0,0,0,0.8), 2px 2px 0 rgba(0,0,0,0.5), 3px 3px 8px rgba(0,0,0,0.4);
        }
      `}</style>

      <div
        className="feat-card relative flex flex-col justify-end rounded-2xl overflow-hidden min-h-[480px]"
        style={{ border: '1px solid var(--color-border-subtle)' }}
      >
        <div className="scan-feat" />
        <div className="feat-corner-tl" />
        <div className="feat-corner-tr" />
        <div className="feat-corner-bl" />
        <div className="feat-corner-br" />
        <div className="feat-particle fp1" />
        <div className="feat-particle fp2" />
        <div className="feat-particle fp3" />
        <div className="feat-particle fp4" />

        <img src={image} alt={title} className="feat-img absolute inset-0 w-full h-full object-cover" />

        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(6,4,31,0.97) 0%, rgba(6,4,31,0.75) 45%, rgba(6,4,31,0.2) 100%)' }} />

        <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(to right, var(--color-accent), transparent)' }} />

        <div className="relative z-10 flex flex-col gap-4 p-8">
          <TypeBadge type={type} />
          <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>
            Featured Event
          </div>
          <h3 className="feat-title text-2xl sm:text-3xl font-bold leading-tight" style={{ color: 'var(--color-text-primary)' }}>
            {title}
          </h3>
          <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'var(--color-text-secondary)' }}>
            {desc}
          </p>
          <div className="flex flex-col gap-2 pt-4 mt-1 border-t text-xs" style={{ borderColor: 'var(--color-border-subtle)', color: 'var(--color-text-secondary)' }}>
            <div className="flex items-center gap-2"><CalendarIcon /><span>{date} · {time}</span></div>
            <div className="flex items-center gap-2"><LocationIcon /><span>{location}</span></div>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 rounded-lg text-sm font-semibold w-fit transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: '#BE123C', color: '#fff', boxShadow: '0 4px 20px rgba(190,18,60,0.4)' }}
          >
            Register Now →
          </a>
        </div>
      </div>
    </>
  )
}

function SecondaryCard({ type, title, desc, date, time, location, index }) {
  return (
    <>
      <style>{`
        @keyframes secCardIn {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes scanSec {
          0%   { top: 0%; opacity: 0.4; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes secTitlePop {
          0%, 100% {
            text-shadow: 1px 1px 0 rgba(0,0,0,0.3), 2px 2px 4px rgba(0,0,0,0.15);
          }
          50% {
            text-shadow: 1px 1px 0 rgba(0,0,0,0.3), 2px 2px 8px rgba(0,0,0,0.2), 0 0 20px rgba(248,250,252,0.06);
          }
        }
        .sec-card-${index} {
          animation: secCardIn 0.7s cubic-bezier(0.4,0,0.2,1) ${0.2 + index * 0.15}s both;
          transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease, border-color 0.3s ease;
          transform-style: preserve-3d;
          perspective: 800px;
        }
        .sec-card-${index}:hover {
          transform: translateY(-12px) rotateX(4deg) rotateY(3deg) scale(1.02);
          box-shadow:
            0 24px 50px rgba(0,0,0,0.6),
            0 0 0 1px rgba(225,29,72,0.4),
            0 0 36px rgba(225,29,72,0.12);
          border-color: rgba(225,29,72,0.4) !important;
        }
        .sec-card-${index}:hover .scan-sec-${index} {
          animation: scanSec 1.2s linear infinite;
        }
        .scan-sec-${index} {
          position: absolute; left: 0; right: 0; height: 1.5px;
          background: linear-gradient(to right, transparent, rgba(225,29,72,0.4), transparent);
          top: -100%; opacity: 0; pointer-events: none; z-index: 10;
        }
        .sec-card-${index}:hover .sec-corner-tl-${index},
        .sec-card-${index}:hover .sec-corner-tr-${index},
        .sec-card-${index}:hover .sec-corner-bl-${index},
        .sec-card-${index}:hover .sec-corner-br-${index} { opacity: 1; }
        .sec-corner-tl-${index}, .sec-corner-tr-${index}, .sec-corner-bl-${index}, .sec-corner-br-${index} {
          position: absolute; width: 12px; height: 12px; opacity: 0;
          transition: opacity 0.3s ease; z-index: 10;
        }
        .sec-corner-tl-${index} { top: 8px; left: 8px; border-top: 1.5px solid var(--color-accent); border-left: 1.5px solid var(--color-accent); }
        .sec-corner-tr-${index} { top: 8px; right: 8px; border-top: 1.5px solid var(--color-accent); border-right: 1.5px solid var(--color-accent); }
        .sec-corner-bl-${index} { bottom: 8px; left: 8px; border-bottom: 1.5px solid var(--color-accent); border-left: 1.5px solid var(--color-accent); }
        .sec-corner-br-${index} { bottom: 8px; right: 8px; border-bottom: 1.5px solid var(--color-accent); border-right: 1.5px solid var(--color-accent); }
        .sec-title-${index} {
          animation: secTitlePop 4s ease-in-out ${0.5 + index * 0.3}s infinite;
          text-shadow: 1px 1px 0 rgba(0,0,0,0.3), 2px 2px 4px rgba(0,0,0,0.15);
          transition: color 0.2s ease;
        }
      `}</style>

      <div
        className={`sec-card-${index} group relative flex flex-col gap-4 rounded-xl p-6 cursor-pointer`}
        style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border-subtle)' }}
      >
        <div className={`scan-sec-${index}`} />
        <div className={`sec-corner-tl-${index}`} />
        <div className={`sec-corner-tr-${index}`} />
        <div className={`sec-corner-bl-${index}`} />
        <div className={`sec-corner-br-${index}`} />

        <div className="relative z-10 flex items-start justify-between gap-3">
          <TypeBadge type={type} />
          <span className="text-xs font-mono font-bold opacity-30" style={{ color: 'var(--color-text-primary)' }}>
            0{index + 2}
          </span>
        </div>

        <h3 className={`sec-title-${index} relative z-10 text-base font-semibold leading-snug group-hover:text-red-400`} style={{ color: 'var(--color-text-primary)' }}>
          {title}
        </h3>

        <p className="relative z-10 text-sm leading-relaxed flex-1 line-clamp-3" style={{ color: 'var(--color-text-secondary)' }}>
          {desc}
        </p>

        <div className="relative z-10 flex flex-col gap-1.5 pt-4 mt-auto border-t text-xs" style={{ borderColor: 'var(--color-border-subtle)', color: 'var(--color-text-secondary)' }}>
          <div className="flex items-center gap-2"><CalendarIcon /><span>{date} · {time}</span></div>
          <div className="flex items-center gap-2"><LocationIcon /><span>{location}</span></div>
        </div>

        <a
          href="#"
          className="relative z-10 inline-flex items-center gap-1.5 text-sm font-semibold w-fit transition-all duration-200 hover:gap-2.5"
          style={{ color: 'var(--color-accent)' }}
        >
          Register Now →
        </a>
      </div>
    </>
  )
}

function Events() {
  const featured = events[0]
  const secondary = events.slice(1)

  return (
    <>
      <style>{`
        @keyframes eyebrowFade {
          from { opacity: 0; letter-spacing: 0.3em; }
          to   { opacity: 1; letter-spacing: 0.1em; }
        }
        @keyframes headSlide {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes featuredPop {
          0%, 100% {
            text-shadow:
              1px 1px 0 rgba(0,0,0,0.6),
              2px 2px 0 rgba(0,0,0,0.35),
              3px 3px 8px rgba(0,0,0,0.25);
          }
          50% {
            text-shadow:
              1px 1px 0 rgba(0,0,0,0.6),
              2px 2px 0 rgba(0,0,0,0.35),
              3px 3px 0 rgba(0,0,0,0.2),
              4px 4px 16px rgba(0,0,0,0.3),
              0 0 30px rgba(248,250,252,0.07);
          }
        }
        .ev-eyebrow  { animation: eyebrowFade 0.8s ease 0.1s both; }
        .ev-headline {
          animation: headSlide 0.9s cubic-bezier(0.4,0,0.2,1) 0.3s both, featuredPop 4s ease-in-out 1.5s infinite;
          text-shadow: 1px 1px 0 rgba(0,0,0,0.6), 2px 2px 0 rgba(0,0,0,0.35), 3px 3px 8px rgba(0,0,0,0.25);
        }
      `}</style>

      <section className="py-24 px-6 md:px-10 lg:px-16" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-7xl mx-auto">

          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="ev-eyebrow text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--color-accent)' }}>
                Upcoming
              </p>
              <h2
                className="ev-headline text-4xl sm:text-5xl font-bold tracking-tight"
                style={{ color: 'var(--color-text-primary)', transformStyle: 'preserve-3d' }}
              >
                Featured Events
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 hover:gap-3"
              style={{ color: 'var(--color-accent)' }}
            >
              View All Events →
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FeaturedCard {...featured} />
            <div className="flex flex-col gap-6">
              {secondary.map((ev, i) => (
                <SecondaryCard key={ev.title} {...ev} index={i} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Events
