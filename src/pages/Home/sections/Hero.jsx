import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Activity, Landmark, ShieldCheck } from 'lucide-react'
import heroVideo from '../../../assets/videos/home.mp4'

const METRICS = [
  { icon: Activity,    value: '40%↑',   label: 'fast HCP decisions', industry: 'PHARMA & HEALTHCARE', slug: 'autonomous-field-intelligence-rexall'    },
  { icon: Landmark,    value: '60%+',   label: 'agent deflection',      industry: 'FINANCE & BANKING',   slug: 'enterprise-ai-architecture-governance'  },
  { icon: ShieldCheck, value: '18→44%', label: 'STP lift in claims',    industry: 'LIFE & INSURANCE',    slug: 'ai-powered-insurance-intelligence'       },
]


function MetricCard({ icon: Icon, value, label, industry, slug }) {
  const [hov, setHov] = useState(false)

  return (
    <Link
      to={`/case-studies/${slug}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'block',
        textDecoration: 'none',
        position: 'relative',
        width: '200px',
        flexShrink: 0,
        background: hov ? 'rgba(29,53,87,0.88)' : 'rgba(255,255,255,0.07)',
        border: `1px solid ${hov ? 'rgba(168,218,220,0.55)' : 'rgba(168,218,220,0.22)'}`,
        borderRadius: '14px',
        backdropFilter: 'blur(16px)',
        padding: '14px',
        transform: hov ? 'translateY(-4px)' : 'none',
        boxShadow: hov
          ? '0 0 24px rgba(168,218,220,0.20), inset 0 0 14px rgba(168,218,220,0.06)'
          : '0 2px 12px rgba(0,0,0,0.22)',
        transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

        {/* Icon box */}
        <div style={{
          width: '44px', height: '44px', flexShrink: 0,
          border: '1px solid rgba(168,218,220,0.28)',
          borderRadius: '10px',
          background: 'rgba(168,218,220,0.10)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon
            size={18}
            style={{
              color: '#7dd3c0',
              filter: hov
                ? 'drop-shadow(0 0 8px rgba(125,211,192,0.6))'
                : 'drop-shadow(0 0 3px rgba(125,211,192,0.25))',
              transition: 'filter 0.3s ease',
            }}
          />
        </div>

        {/* Text */}
        <div>
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '18px',
            fontWeight: 600,
            color: '#ffffff',
            lineHeight: 1,
            marginBottom: '4px',
          }}>
            {value}
          </div>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.80)',
            lineHeight: 1.4,
            marginBottom: '6px',
          }}>
            {label}
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#7dd3c0',
            opacity: 0.75,
          }}>
            {industry}
          </div>
        </div>

      </div>

      {/* Top-right arrow — appears on hover to signal clickability */}
      <div style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        width: '22px',
        height: '22px',
        borderRadius: '6px',
        background: 'rgba(168,218,220,0.15)',
        border: '1px solid rgba(168,218,220,0.35)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: hov ? 1 : 0,
        transform: hov ? 'scale(1) translate(0,0)' : 'scale(0.7) translate(4px,-4px)',
        transition: 'opacity 0.25s ease, transform 0.25s ease',
        pointerEvents: 'none',
      }}>
        <span style={{ color: '#7dd3c0', fontSize: '11px', lineHeight: 1, fontFamily: 'var(--font-mono)' }}>↗</span>
      </div>

    </Link>
  )
}

function Hero() {
  const [exploreHov, setExploreHov] = useState(false)
  const [accelHov,   setAccelHov]   = useState(false)

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '100dvh',
        overflow: 'hidden',
        background: 'var(--color-secondary)',
      }}
    >
      <style>{`
        @keyframes hBlurReveal {
          from { opacity: 0; filter: blur(22px); transform: scale(0.96) translateY(10px); }
          to   { opacity: 1; filter: blur(0);    transform: scale(1)    translateY(0); }
        }
        @keyframes hFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hShimmer {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }

        .h-headline  { animation: hBlurReveal 1.1s cubic-bezier(0.16,1,0.3,1) 0.2s  both; }
        .h-tia-block { animation: hFadeUp     0.7s  cubic-bezier(0.16,1,0.3,1) 0.6s  both; }
        .h-cards     { animation: hFadeUp     0.7s  cubic-bezier(0.16,1,0.3,1) 0.85s both; }
        .h-ctas      { animation: hFadeUp     0.6s  cubic-bezier(0.16,1,0.3,1) 1.1s  both; }
        .h-accent-line { animation: hShimmer 3s ease-in-out infinite; }

        /* Content — absolutely centered within 100vh */
        .h-content {
          position: absolute;
          left: 6%;
          right: 6%;
          top: 60%;
          transform: translateY(-50%);
          z-index: 10;
        }
        @media (min-width: 768px) {
          .h-content { left: 8%; right: auto; }
        }
        @media (min-width: 1024px) {
          .h-content { left: 10%; right: auto; }
        }

        .h-bg-video { object-fit: cover; object-position: center center; }
        @media (max-width: 767px)                        { .h-bg-video { object-position: 60% center; } }
        @media (min-width: 768px) and (max-width: 1023px){ .h-bg-video { object-position: 55% center; } }

        .h-cards-row { display: flex; gap: 14px; }
        @media (max-width: 1023px) {
          .h-cards-row {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding-bottom: 2px;
          }
          .h-cards-row::-webkit-scrollbar { display: none; }
        }
        @media (max-width: 767px) { .h-cards-row > * { width: 175px !important; } }

        .h-cta-link { text-decoration: none; display: inline-block; }

        /* ── Tablet (768–1023px) ── */
        @media (min-width: 768px) and (max-width: 1023px) {
          .h-content { top: 50%; }
          .h-tia-desc { max-width: 300px !important; font-size: 13px !important; }
        }

        /* ── Mobile (<768px) ── */
        @media (max-width: 767px) {
          .h-content { top: 50%; left: 5%; right: 5%; }
          /* Hide TIA description and divider — too cramped side-by-side */
          .h-tia-divider { display: none !important; }
          .h-tia-desc    { display: none !important; }
          /* Tighten block spacing */
          .h-headline  { margin-bottom: 16px !important; }
          .h-tia-block { margin-bottom: 16px !important; }
          .h-cards     { margin-bottom: 16px !important; }
        }

        @media (min-width: 1440px) {
          .h-content { left: calc((100vw - 1280px) / 2 + 64px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .h-headline, .h-tia-block, .h-cards, .h-ctas {
            animation: none !important; opacity: 1 !important; filter: none !important;
          }
          .h-accent-line { animation: none !important; opacity: 0.7 !important; }
        }
      `}</style>

      {/* Background video */}
      <video
        className="h-bg-video absolute inset-0 w-full h-full z-0"
        style={{ filter: 'brightness(0.82) contrast(1.05)' }}
        src={heroVideo}
        autoPlay muted loop playsInline
      />


      {/* Overlay 1 — left-to-right (matches TIA hero) */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to right, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.88) 20%, rgba(0,0,0,0.72) 55%, rgba(0,0,0,0.45) 100%)',
      }} />

      {/* Overlay 2 — top + bottom vignette (matches TIA hero) */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 72%, rgba(0,0,0,0.55) 100%)',
      }} />

      {/* Overlay 3 — mobile flat overlay (matches TIA hero) */}
      <div
        className="block lg:hidden"
        style={{
          position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
          background: 'rgba(0,0,0,0.52)',
        }}
      />

      {/* Content — vertically centered in 100vh */}
      <div className="h-content">
        <div style={{ maxWidth: '780px' }}>

          {/* Headline */}
          <div className="h-headline" style={{ marginBottom: '40px' }}>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(36px, 4.5vw, 56px)',
              fontWeight: 300,
              lineHeight: 0.97,
              letterSpacing: '-0.04em',
              margin: 0,
            }}>
              <span style={{ color: 'var(--color-primary)' }}>intelligence, augmented </span>
              
            </h1>
          </div>

          {/* THE FRAMEWORK label + TIA block */}
          <div className="h-tia-block" style={{ marginBottom: '32px' }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div className="h-accent-line" style={{
                width: 'clamp(24px, 3vw, 36px)',
                height: '1px',
                background: 'linear-gradient(90deg, transparent 0%, #7dd3c0 100%)',
              }} />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11.5px',
                fontWeight: 500,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: '#7dd3c0',
                opacity: 0.85,
              }}>
                THE FRAMEWORK
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(36px, 4vw, 48px)',
                fontWeight: 500,
                color: 'var(--color-primary)',
                lineHeight: 1,
                flexShrink: 0,
                letterSpacing: '-0.04em',
              }}>
                TIA
              </div>

              <div className="h-tia-divider" style={{
                width: '1px',
                alignSelf: 'stretch',
                background: 'rgba(168,218,220,0.22)',
                flexShrink: 0,
                marginTop: '3px',
              }} />

              <p className="h-tia-desc" style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(12.5px, 1vw, 14.5px)',
                lineHeight: 1.78,
                maxWidth: '440px',
                color: 'rgba(255,255,255,0.99)',
                margin: 0,
                paddingTop: '2px',
              }}>
                TIA — <span style={{ color: 'var(--color-accent)', fontWeight: 600, textShadow: '0 0 18px rgba(168,218,220,0.55), 0 0 40px rgba(168,218,220,0.25)' }}>Thotnr Intelligence Augmentation</span> framework for enterprise AI grounded in your data, embedded in your workflows, and measured by outcomes that compound.
              </p>
            </div>
          </div>

          {/* Metric cards */}
          <div className="h-cards" style={{ marginBottom: '32px' }}>
            <div className="h-cards-row">
              {METRICS.map((m) => (
                <MetricCard key={m.industry} {...m} />
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div
            className="h-ctas"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}
          >
            <Link
              to="/tia"
              className="h-cta-link"
              onMouseEnter={() => setExploreHov(true)}
              onMouseLeave={() => setExploreHov(false)}
              style={{
                padding: '14px 46px',
                borderRadius: '100px',
                fontFamily: 'var(--font-heading)',
                fontSize: '14px',
                fontWeight: 700,
                background: exploreHov ? 'var(--color-primary)' : 'var(--color-accent)',
                color: 'var(--color-secondary)',
                border: 'none',
                transform: exploreHov ? 'translateY(-2px)' : 'none',
                boxShadow: exploreHov
                  ? '0 16px 40px rgba(168,218,220,0.35)'
                  : '0 8px 24px rgba(168,218,220,0.20)',
                transition: 'background 0.24s ease, transform 0.22s ease, box-shadow 0.24s ease',
              }}
            >
              Explore TIA
            </Link>

            <Link
              to="/accelerators"
              className="h-cta-link"
              onMouseEnter={() => setAccelHov(true)}
              onMouseLeave={() => setAccelHov(false)}
              style={{
                padding: '14px 46px',
                borderRadius: '100px',
                fontFamily: 'var(--font-heading)',
                fontSize: '14px',
                fontWeight: 600,
                background: accelHov ? 'rgba(168,218,220,0.13)' : 'rgba(168,218,220,0.07)',
                color: 'var(--color-accent)',
                border: `1.5px solid ${accelHov ? 'rgba(168,218,220,0.60)' : 'rgba(168,218,220,0.32)'}`,
                transform: accelHov ? 'translateY(-2px)' : 'none',
                boxShadow: accelHov ? '0 0 30px rgba(168,218,220,0.30)' : 'none',
                transition: 'all 0.25s ease',
              }}
            >
              TIA Accelerators
            </Link>

            
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero