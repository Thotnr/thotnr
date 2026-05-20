import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const STATS = [
  { metric: '40%',       label: 'faster HCP decisions',         sector: 'Pharma',    client: 'Rexall'     },
  { metric: '18% → 44%', label: 'STP lift in claims operations', sector: 'Insurance', client: 'SA Insurer' },
  { metric: '60%+',      label: 'reduction in agent hand-offs',  sector: 'Finance',   client: 'Creditas'   },
]

function useInView(threshold = 0.08) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

function StatCard({ stat, index }) {
  const [hov, setHov] = useState(false)

  return (
    <div
      className={`cta11-stat-${index}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: 'clamp(22px, 2.5vw, 32px) clamp(20px, 2vw, 28px)',
        borderRadius: '10px',
        background: hov ? 'rgba(29,53,87,0.07)' : 'rgba(29,53,87,0.04)',
        border: `1px solid ${hov ? 'rgba(29,53,87,0.28)' : 'rgba(29,53,87,0.12)'}`,
        transform: hov ? 'translateY(-5px)' : 'none',
        boxShadow: hov ? '0 12px 36px rgba(29,53,87,0.14)' : 'none',
        transition: [
          'background 0.38s cubic-bezier(0.16,1,0.3,1)',
          'border-color 0.38s cubic-bezier(0.16,1,0.3,1)',
          'transform 0.38s cubic-bezier(0.16,1,0.3,1)',
          'box-shadow 0.38s cubic-bezier(0.16,1,0.3,1)',
        ].join(', '),
        textAlign: 'center',
      }}
    >
      <p style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(26px, 3vw, 38px)',
        fontWeight: 700,
        color: 'var(--color-secondary)',
        margin: '0 0 8px',
        lineHeight: 1.1,
      }}>
        {stat.metric}
      </p>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '15px',
        color: 'var(--color-text-secondary)',
        lineHeight: 1.5,
        margin: '0 0 12px',
      }}>
        {stat.label}
      </p>
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--color-text-tertiary)',
        margin: 0,
      }}>
        {stat.sector} · {stat.client}
      </p>
    </div>
  )
}

function S11FinalCTA({ onAskTIA }) {
  const [sectionRef,   inView]        = useInView(0.08)
  const [primaryHov,   setPrimaryHov]   = useState(false)
  const [secondaryHov, setSecondaryHov] = useState(false)

  return (
    <>
      <style>{`
        @keyframes cta11FadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cta11BlurIn {
          from { opacity: 0; filter: blur(12px); transform: translateY(16px); }
          to   { opacity: 1; filter: blur(0);    transform: translateY(0); }
        }
        @keyframes cta11DividerGrow {
          from { opacity: 0; transform: scaleX(0.4); }
          to   { opacity: 1; transform: scaleX(1); }
        }

        .cta11-eyebrow   { animation: cta11FadeUp      0.55s cubic-bezier(0.16,1,0.3,1) 0.08s both; }
        .cta11-heading   { animation: cta11BlurIn      0.9s  cubic-bezier(0.16,1,0.3,1) 0.16s both; }
        .cta11-sub       { animation: cta11FadeUp      0.65s cubic-bezier(0.16,1,0.3,1) 0.28s both; }
        .cta11-divider   { animation: cta11DividerGrow 0.7s  cubic-bezier(0.16,1,0.3,1) 0.38s both; }
        .cta11-stat-0    { animation: cta11FadeUp      0.65s cubic-bezier(0.16,1,0.3,1) 0.46s both; }
        .cta11-stat-1    { animation: cta11FadeUp      0.65s cubic-bezier(0.16,1,0.3,1) 0.56s both; }
        .cta11-stat-2    { animation: cta11FadeUp      0.65s cubic-bezier(0.16,1,0.3,1) 0.66s both; }
        .cta11-btns      { animation: cta11FadeUp      0.7s  cubic-bezier(0.16,1,0.3,1) 0.78s both; }
        .cta11-manifesto { animation: cta11FadeUp      0.7s  cubic-bezier(0.16,1,0.3,1) 0.90s both; }

        .cta11-paused .cta11-eyebrow,   .cta11-paused .cta11-heading,   .cta11-paused .cta11-sub,
        .cta11-paused .cta11-divider,   .cta11-paused .cta11-stat-0,    .cta11-paused .cta11-stat-1,
        .cta11-paused .cta11-stat-2,    .cta11-paused .cta11-btns,      .cta11-paused .cta11-manifesto {
          opacity: 0; animation-play-state: paused;
        }
        .cta11-running .cta11-eyebrow,  .cta11-running .cta11-heading,  .cta11-running .cta11-sub,
        .cta11-running .cta11-divider,  .cta11-running .cta11-stat-0,   .cta11-running .cta11-stat-1,
        .cta11-running .cta11-stat-2,   .cta11-running .cta11-btns,     .cta11-running .cta11-manifesto {
          animation-play-state: running;
        }

        .cta11-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(14px, 2vw, 24px);
        }
        @media (max-width: 767px) {
          .cta11-stats-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 1023px) and (min-width: 768px) {
          .cta11-stats-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (prefers-reduced-motion: reduce) {
          .cta11-eyebrow, .cta11-heading, .cta11-sub, .cta11-divider,
          .cta11-stat-0,  .cta11-stat-1,  .cta11-stat-2,
          .cta11-btns,    .cta11-manifesto {
            animation: none !important; opacity: 1 !important; filter: none !important;
          }
        }
      `}</style>

      <section
        id="tia-final-cta"
        ref={sectionRef}
        className={`py-16 px-6 md:px-10 lg:px-16 ${inView ? 'cta11-running' : 'cta11-paused'}`}
        style={{ background: 'var(--color-primary)' }}
      >
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>

          {/* ── Centered header ── */}
          <div style={{
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            marginBottom: 'clamp(24px, 1vw, 32px)',
          }}>
            <p className="cta11-eyebrow text-h4 text-[var(--color-highlight)] mb-2">
              Thotnr Intelligence Augmentation
            </p>
            <h2 className="cta11-heading text-h1" style={{ color: 'var(--color-text-primary)', lineHeight: 1.15, marginBottom: '20px' }}>
              Ready to move beyond AI pilots?
            </h2>
            <p className="cta11-sub text-body-lg" style={{
              color: 'var(--color-text-secondary)',
              lineHeight: 1.75,
              maxWidth: '800px',
              margin: '0 auto',
            }}>
              TIA is how enterprise AI moves from experiment to operating model. Data-first. Outcomes-led. Governed from day one.
            </p>
          </div>

          

          {/* ── CTAs ── */}
          <div
            className="cta11-btns"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
              marginBottom: 'clamp(24px, 3vw, 32px)',
            }}
          >
            <Link
              to="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                padding: '7px 36px',
                borderRadius: '100px',
                background: primaryHov ? 'var(--color-secondary)' : 'var(--color-accent)',
                color: primaryHov ? 'var(--color-text-white)' : 'var(--color-secondary)',
                textDecoration: 'none',
                fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 700,
                transition: 'background 0.28s ease, transform 0.22s ease, box-shadow 0.28s ease',
                transform: primaryHov ? 'translateY(-2px)' : 'none',
                boxShadow: primaryHov
                  ? '0 14px 40px rgba(168,218,220,0.3)'
                  : '0 4px 20px rgba(168,218,220,0.18)',
                flexShrink: 0,
              }}
              onMouseEnter={() => setPrimaryHov(true)}
              onMouseLeave={() => setPrimaryHov(false)}
            >
              Talk to the team →
            </Link>

            <button
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                padding: '12px 36px',
                borderRadius: '100px',
                background: secondaryHov ? 'rgba(29,53,87,0.07)' : 'transparent',
                color: secondaryHov ? 'var(--color-secondary)' : 'var(--color-text-secondary)',
                border: `1.5px solid ${secondaryHov ? 'rgba(29,53,87,0.45)' : 'rgba(29,53,87,0.22)'}`,
                fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.28s cubic-bezier(0.16,1,0.3,1)',
                transform: secondaryHov ? 'translateY(-2px)' : 'none',
                flexShrink: 0,
              }}
              onClick={onAskTIA}
              onMouseEnter={() => setSecondaryHov(true)}
              onMouseLeave={() => setSecondaryHov(false)}
            >
              ✦ Join Ask TIA Beta
            </button>
          </div>

          {/* ── Manifesto footer ── */}
          <div className="cta11-manifesto" style={{
            // borderTop: '1px solid rgba(168,218,220,0.1)',
            // paddingTop: 'clamp(28px, 4vw, 40px)',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-text-tertiary)',
              fontWeight: 500,
              marginBottom: '10px',
            }}>
              TIA — Thotnr Intelligence Augmentation
            </p>
            <p style={{
              fontFamily: 'var(--font-accent)',
              fontStyle: 'italic',
              fontSize: 'clamp(15px, 1.5vw, 18px)',
              color: 'var(--color-text-primary)',
              lineHeight: 1.6,
              marginBottom: '8px',
            }}>
              Built on your data · Embedded in your business · Measured by your growth.
            </p>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--color-text-tertiary)',
              fontWeight: 500
            }}>
              Discipline. Delivery. Product. One framework.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}

export default S11FinalCTA
