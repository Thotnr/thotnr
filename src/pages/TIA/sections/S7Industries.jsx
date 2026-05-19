import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Pill, Landmark, ShieldCheck } from 'lucide-react'

const INDUSTRIES = [
  {
    Icon: Pill,
    industry: 'PHARMA & HEALTHCARE',
    title: 'Autonomous Field Intelligence',
    metric: '40% faster HCP decisions',
    desc: 'Real-time sales and HCP intelligence replacing quarterly manual analysis. AI-powered field coaching, smart targeting, and early risk detection — embedded into the rep workflow.',
    ctaLink: '/case-studies/rexall',
  },
  {
    Icon: Landmark,
    industry: 'FINANCE & BANKING',
    title: 'Real-time Risk & Operations',
    metric: '60%+ agent deflection',
    desc: 'Embedded Agentic AI across lending journeys. Journey-aware agents, RAG-grounded responses, real-time platform actions, with strict guardrails and compliance.',
    ctaLink: '/case-studies/creditas',
  },
  {
    Icon: ShieldCheck,
    industry: 'LIFE & INSURANCE',
    title: 'AI-Powered Claims & Underwriting',
    metric: 'STP lifted 18% → 44%',
    desc: 'End-to-end Agentic AI for claims operations. Document intelligence, fraud network detection pre-payment, autonomous claims decisioning — fully POPIA and GDPR compliant.',
    ctaLink: '/case-studies/sa-insurer',
  },
]

function useInView(threshold = 0.06) {
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

function IndustryCard({ industry, index }) {
  const [hov,    setHov]    = useState(false)
  const [ctaHov, setCtaHov] = useState(false)
  const { Icon } = industry

  return (
    <div
      className={`s7-card-${index}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? 'rgba(255,255,255,0.075)' : 'rgba(255,255,255,0.055)',
        border: `1px solid ${hov ? 'rgba(94,234,212,0.42)' : 'rgba(168,218,220,0.16)'}`,
        borderRadius: '6px',
        padding: 'clamp(30px, 3vw, 42px)',
        minHeight: '430px',
        display: 'flex',
        flexDirection: 'column',
        transform: hov ? 'translateY(-6px) scale(1.025)' : 'none',
        boxShadow: hov ? '0 26px 80px rgba(0,0,0,0.18)' : 'none',
        transition: [
          'transform 0.55s cubic-bezier(0.16,1,0.3,1)',
          'border-color 0.55s cubic-bezier(0.16,1,0.3,1)',
          'background 0.55s cubic-bezier(0.16,1,0.3,1)',
          'box-shadow 0.55s cubic-bezier(0.16,1,0.3,1)',
        ].join(', '),
      }}
    >
      {/* Icon container */}
      <div style={{
        width: '52px', height: '52px',
        borderRadius: '10px',
        background: hov ? 'rgba(168,218,220,0.24)' : 'rgba(168,218,220,0.14)',
        border: '1px solid rgba(168,218,220,0.22)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '24px',
        flexShrink: 0,
        boxShadow: hov ? '0 0 18px rgba(168,218,220,0.28)' : 'none',
        transition: 'background 0.55s ease, box-shadow 0.55s ease',
      }}>
        <Icon size={24} strokeWidth={1.5} color="var(--color-accent)" aria-hidden="true" />
      </div>

      {/* Industry label */}
      <p 
      className='text-sm'
      style={{
        
        
        textTransform: 'uppercase',
        color: 'var(--color-highlight)',
        marginBottom: '10px',
      }}>
        {industry.industry}
      </p>

      {/* Use case title */}
      <h3 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(20px, 2vw, 26px)',
        lineHeight: 1.35,
        fontWeight: 600,
        color: 'var(--color-text-white)',
        marginBottom: '12px',
      }}>
        {industry.title}
      </h3>

      {/* Outcome metric */}
      <p style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(20px, 2vw, 28px)',
        lineHeight: 1.25,
        fontWeight: 700,
        color: 'var(--color-pillars-cyan)',
        marginBottom: '16px',
      }}>
        {industry.metric}
      </p>

      {/* Description */}
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '16px',
        lineHeight: 1.65,
        color: 'rgba(255,255,255,0.82)',
        flexGrow: 1,
      }}>
        {industry.desc}
      </p>

      {/* CTA */}
      <button
        onMouseEnter={() => setCtaHov(true)}
        onMouseLeave={() => setCtaHov(false)}
        onClick={() => document.getElementById('tia-case-studies')?.scrollIntoView({ behavior: 'smooth' })}
        style={{
          marginTop: 'auto',
          paddingTop: '20px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--color-pillars-cyan)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '20px 0 0',
          opacity: ctaHov ? 1 : 0.82,
          transition: 'opacity 0.22s ease',
        }}
      >
        <span>Read the story</span>
        <span style={{
          transform: ctaHov ? 'translateX(4px)' : 'none',
          transition: 'transform 0.25s cubic-bezier(0.16,1,0.3,1)',
          display: 'inline-block',
        }}>→</span>
      </button>
    </div>
  )
}

function S7Industries() {
  const [sectionRef, inView] = useInView(0.06)
  const [ctaBtnHov, setCtaBtnHov] = useState(false)

  return (
    <>
      <style>{`
        @keyframes s7FadeUp {
          from { opacity: 0; transform: translateY(28px); filter: blur(8px); }
          to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
        }
        @keyframes s7EyebrowIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .s7-eyebrow  { animation: s7EyebrowIn 0.5s  cubic-bezier(0.16,1,0.3,1) 0.08s both; }
        .s7-heading  { animation: s7FadeUp    0.75s cubic-bezier(0.16,1,0.3,1) 0.18s both; }
        .s7-card-0   { animation: s7FadeUp    0.75s cubic-bezier(0.16,1,0.3,1) 0.34s both; }
        .s7-card-1   { animation: s7FadeUp    0.75s cubic-bezier(0.16,1,0.3,1) 0.48s both; }
        .s7-card-2   { animation: s7FadeUp    0.75s cubic-bezier(0.16,1,0.3,1) 0.62s both; }
        .s7-fallback { animation: s7FadeUp    0.75s cubic-bezier(0.16,1,0.3,1) 0.78s both; }

        .s7-paused .s7-eyebrow, .s7-paused .s7-heading,
        .s7-paused .s7-card-0, .s7-paused .s7-card-1, .s7-paused .s7-card-2,
        .s7-paused .s7-fallback {
          opacity: 0; animation-play-state: paused;
        }
        .s7-running .s7-eyebrow, .s7-running .s7-heading,
        .s7-running .s7-card-0, .s7-running .s7-card-1, .s7-running .s7-card-2,
        .s7-running .s7-fallback {
          animation-play-state: running;
        }

        .s7-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(20px, 2vw, 28px);
        }
        @media (max-width: 1024px) {
          .s7-cards-grid { grid-template-columns: repeat(2, 1fr); }
          .s7-card-2 { grid-column: span 2; }
        }
        @media (max-width: 639px) {
          .s7-cards-grid { grid-template-columns: 1fr; }
          .s7-card-2 { grid-column: span 1; }
          .s7-card-0, .s7-card-1, .s7-card-2 { min-height: unset !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .s7-eyebrow, .s7-heading,
          .s7-card-0, .s7-card-1, .s7-card-2, .s7-fallback {
            animation: none !important; opacity: 1 !important; filter: none !important;
          }
        }
      `}</style>

      <section
        id="tia-industries"
        ref={sectionRef}
        className={`py-16 px-6 md:px-10 lg:px-16 ${inView ? 's7-running' : 's7-paused'}`}
        style={{ background: 'var(--color-secondary)' }}
      >
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>

          {/* ── Header ── */}
          <div className="mb-8" style={{ maxWidth: '920px' }}>

            {/* Eyebrow */}
            <p className="text-h4 text-[var(--color-highlight)] mb-2 s7-eyebrow">
              Where TIA Works
            </p>

            {/* Heading */}
            <h2 className="s7-heading text-h1" style={{ lineHeight: 1.2 }}>
              <span style={{ color: 'var(--color-text-white)' }}>
                TIA adapts to where you operate.
              </span>
              
            </h2>
          </div>

          {/* ── Cards grid ── */}
          <div className="s7-cards-grid">
            {INDUSTRIES.map((ind, i) => (
              <IndustryCard key={ind.industry} industry={ind} index={i} />
            ))}
          </div>

          {/* ── Fallback CTA ── */}
          <div
            className="s7-fallback"
            style={{
              marginTop: 'clamp(32px, 3vw, 40px)',
              borderTop: '1px solid rgba(168,218,220,0.16)',
              paddingTop: 'clamp(16px, 2vw, 20px)',
              textAlign: 'center',
            }}
          >
            <p style={{
              fontFamily: 'var(--font-accent)',
              fontStyle: 'italic',
              color: 'var(--color-text-white)',
              fontSize: 'clamp(20px, 2vw, 28px)',
              marginBottom: '24px',
            }}>
              Operating in a different industry?
            </p>

            <Link
              to="/contact"
              onMouseEnter={() => setCtaBtnHov(true)}
              onMouseLeave={() => setCtaBtnHov(false)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                border: `1px solid ${ctaBtnHov ? 'rgba(94,234,212,0.55)' : 'rgba(255,255,255,0.28)'}`,
                borderRadius: '999px',
                padding: '14px 28px',
                color: 'var(--color-text-white)',
                background: ctaBtnHov ? 'rgba(94,234,212,0.08)' : 'transparent',
                textDecoration: 'none',
                fontFamily: 'var(--font-heading)',
                fontSize: '15px',
                fontWeight: 600,
                transition: 'border-color 0.25s ease, background 0.25s ease, transform 0.25s ease',
                transform: ctaBtnHov ? 'translateY(-2px)' : 'none',
              }}
            >
              <span>Tell us about your business</span>
              <span style={{
                transform: ctaBtnHov ? 'translateX(4px)' : 'none',
                transition: 'transform 0.25s cubic-bezier(0.16,1,0.3,1)',
                display: 'inline-block',
              }}>→</span>
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}

export default S7Industries
