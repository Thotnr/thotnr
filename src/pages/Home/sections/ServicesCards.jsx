import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import augDec from '../../../assets/images/augmented-decision.png'
import groundedAI from '../../../assets/images/grounded-ai.png'
import embedded from '../../../assets/images/embedded-execution.png'



function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.unobserve(el) } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

// Opacity variants kept as rgba — no design-system token exists for translucent overlays
const ACCENTS = {
  red: {
    color: '#F43F5E',
    bg: 'rgba(244,63,94,0.12)',
    border: 'rgba(244,63,94,0.28)',
    glow: 'rgba(244,63,94,0.12)',
  },
  purple: {
  color: '#9A6FE3',
  bg: 'rgba(154,111,227,0.10)',
  border: 'rgba(154,111,227,0.24)',
  glow: 'rgba(154,111,227,0.10)',
},
  blue: {
    color: '#22D3EE',
    bg: 'rgba(34,211,238,0.10)',
    border: 'rgba(34,211,238,0.26)',
    glow: 'rgba(34,211,238,0.10)',
  },
}

const capabilities = [
  {
    id: 'decisioning',
    slug: 'ai-intelligence',
    eyebrow: 'AUTONOMISATION',
    title: 'Augmented Decisions',
    subtitle: 'Human judgment, elevated by AI.',
    description: 'We design decision systems that combine machine intelligence, business rules, and human oversight — enabling faster, more consistent decisions with controlled autonomy where the business is ready, without losing accountability or trust.',
    accentKey: 'red',
    Icon: augDec,
  },
  {
    id: 'context',
    slug: 'data-engineering',
    eyebrow: 'CONTEXT',
    title: 'Grounded Intelligence',
    subtitle: 'Connected to business reality.',
    description: 'We anchor AI in trusted data, enterprise knowledge, policies, and real operating context. This ensures outputs are not only technically sound, but relevant, dependable, and aligned to how your organisation actually works.',
    accentKey: 'purple',
    Icon: groundedAI,
  },
  {
    id: 'execution',
    slug: 'enterprise-architecture',
    eyebrow: 'EXECUTION',
    title: 'Embedded Execution',
    subtitle: 'Built into workflows and decisions.',
    description: 'We integrate intelligence into systems, processes, and day-to-day operations so it becomes part of execution, not just analysis. The result is AI that supports real work, drives consistent action, and creates measurable value over time.',
    accentKey: 'blue',
    Icon: embedded,
  },
]

function CapabilityCard({ slug, eyebrow, title, subtitle, description, accentKey, Icon, index, inView }) {
  const [hovered, setHovered] = useState(false)
  const a = ACCENTS[accentKey]

  return (
    // Outer div: scroll entrance only — no hover transition so hover feels instant
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(44px)',
        transition: `opacity 0.78s ease ${0.15 + index * 0.14}s, transform 0.78s cubic-bezier(0.16,1,0.3,1) ${0.15 + index * 0.14}s`,
      }}
    >
      {/* Link wraps inner card — hover lift, no entrance delay so it's snappy */}
      <Link
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          textDecoration: 'none',
          borderRadius: '24px',
          padding: '16px 20px 12px',
          border: `1px solid ${hovered ? a.border : 'rgba(255,255,255,0.10)'}`,
          background: hovered ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.035)',
          boxShadow: hovered
            ? `0 24px 64px rgba(0,0,0,0.5), 0 0 48px ${a.glow}, inset 0 1px 0 rgba(255,255,255,0.07)`
            : '0 4px 28px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.35s ease, background 0.35s ease, box-shadow 0.45s ease',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '420px',
        }}
      >
        {/* 3D floating icon stage */}
        <div style={{
          perspective: '900px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '180px',
          position: 'relative',
          marginBottom: '0px',
          flexShrink: 0,
        }}>
          {/* Accent glow orb — sits beneath icon, pulses in sync */}
          <div style={{
            position: 'absolute',
            bottom: '4px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 0,
          }}>
            <div
              className={`cap-glow-${index}`}
              style={{
                width: '130px',
                height: '60px',
                borderRadius: '50%',
                background: `radial-gradient(ellipse, ${a.color} 0%, transparent 70%)`,
                opacity: hovered ? 0.65 : 0.3,
                filter: 'blur(18px)',
                transition: 'opacity 0.45s ease',
              }}
            />
          </div>

          {/* Icon — 3D float animation */}
          <img
            src={Icon}
            alt=""
            className={`cap-icon-${index}`}
            style={{
              width: '160px',
              height: '160px',
              objectFit: 'contain',
              position: 'relative',
              zIndex: 1,
              filter: hovered
                ? `drop-shadow(0 0 32px ${a.color}) drop-shadow(0 10px 20px rgba(0,0,0,0.55)) brightness(1.18)`
                : 'drop-shadow(0 10px 22px rgba(0,0,0,0.55)) brightness(1)',
              transition: 'filter 0.45s ease',
            }}
          />
        </div>

        {/* Eyebrow */}
        <p className="text-body" style={{ color: `${a.color}`, marginBottom: '10px' , fontWeight: 500}}>
          {eyebrow}
        </p>

        

        {/* Title */}
        <h3
          className="text-h3"
          style={{
            color: 'var(--color-text-white)',
            lineHeight: 1.25,
            marginBottom: '10px',
            fontWeight: 600,
          }}
        >
          {title}
        </h3>

        {/* Subtitle */}
        <p
          className="text-body-sm"
          style={{
            color: 'rgba(255,255,255,0.85)',
            marginBottom: '20px'
            
          }}
        >
          {subtitle}
        </p>

        {/* Colored underline */}
        <div
          style={{
            width: '24px',
            height: '2px',
            borderRadius: '2px',
            background: `${a.color}`,
            marginBottom: '18px',
          }}
        />

        {/* Description */}
        <p
          className="text-body"
          style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.78, flex: 1 }}
        >
          {description}
        </p>

        {/* Bottom accent glow line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '15%',
            right: '15%',
            height: '1px',
            background: `linear-gradient(90deg, transparent 0%, ${a.color} 50%, transparent 100%)`,
            opacity: hovered ? 0.55 : 0,
            transition: 'opacity 0.4s ease',
          }}
        />
      </Link>
    </div>
  )
}

function ServicesCards() {
  const [sectionRef, inView] = useInView()

  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16 relative overflow-hidden"
      style={{ background: 'var(--color-secondary)' }}
    >
      {/* Decorative ambient glows — match card accent palette */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '-100px', left: '-60px',
        width: '480px', height: '480px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(244,63,94,0.11) 0%, transparent 62%)',
        filter: 'blur(48px)', pointerEvents: 'none', zIndex: 0,
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', top: '-80px', right: '-40px',
        width: '440px', height: '440px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.09) 0%, transparent 62%)',
        filter: 'blur(52px)', pointerEvents: 'none', zIndex: 0,
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '-60px', left: '50%',
        transform: 'translateX(-50%)',
        width: '600px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(139,92,246,0.09) 0%, transparent 62%)',
        filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
      }} />

      <div ref={sectionRef} className="max-w-7xl mx-auto relative" style={{ zIndex: 1 }}>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-end mb-12 md:mb-14">

          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(26px)',
              transition: 'opacity 0.78s ease, transform 0.78s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <p className="text-h4" style={{ color: 'var(--color-highlight)', marginBottom: '16px' }}>
              TIA Capabilities
            </p>
            <h2
              className="text-h1 mt-1"
              style={{ color: 'var(--color-text-white)', lineHeight: 1.16 }}
            >
              The foundations of <br />
              Thotnr Intelligence Augmentation
             
            </h2>
          </div>

          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(26px)',
              transition: 'opacity 0.78s ease 0.16s, transform 0.78s cubic-bezier(0.16,1,0.3,1) 0.16s',
            }}
          >
            <div style={{ width: '36px', height: '2px', borderRadius: '2px', background: 'var(--color-highlight)', marginBottom: '20px' }} />
            <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.78 }}>
              TIA turns AI from a standalone initiative into practical business capability. We focus on improving decisions, grounding intelligence in real enterprise context, and embedding autonomous execution into daily operations — so AI works within the enterprise, not outside it.
            </p>
          </div>
        </div>

        {/* Cards — 3-col desktop, 2-col tablet (3rd centered), 1-col mobile */}
        <style>{`
          @media (min-width: 768px) and (max-width: 1023px) {
            .cap-grid .cap-third { grid-column: 1 / -1; max-width: calc(50% - 10px); margin: 0 auto; width: 100%; }
          }

          /* 3D float — each card offset so they're never in sync */
          @keyframes capFloat0 {
            0%   { transform: translateY(2px)   rotateY(-14deg) rotateX(5deg); }
            100% { transform: translateY(-20px)  rotateY(14deg)  rotateX(-5deg); }
          }
          @keyframes capFloat1 {
            0%   { transform: translateY(-8px)  rotateY(12deg)  rotateX(-6deg); }
            100% { transform: translateY(14px)   rotateY(-12deg) rotateX(6deg); }
          }
          @keyframes capFloat2 {
            0%   { transform: translateY(5px)   rotateY(-18deg) rotateX(4deg); }
            100% { transform: translateY(-18px)  rotateY(10deg)  rotateX(-7deg); }
          }

          /* Glow orb scale — synced to same duration as matching icon */
          @keyframes capGlow0 {
            0%   { transform: scale(0.82); }
            100% { transform: scale(1.22); }
          }
          @keyframes capGlow1 {
            0%   { transform: scale(1.18); }
            100% { transform: scale(0.78); }
          }
          @keyframes capGlow2 {
            0%   { transform: scale(0.88); }
            100% { transform: scale(1.18); }
          }

          .cap-icon-0 { animation: capFloat0 4.0s ease-in-out infinite alternate; }
          .cap-icon-1 { animation: capFloat1 4.6s ease-in-out infinite alternate -1.4s; }
          .cap-icon-2 { animation: capFloat2 3.8s ease-in-out infinite alternate -2.7s; }

          .cap-glow-0 { animation: capGlow0 4.0s ease-in-out infinite alternate; }
          .cap-glow-1 { animation: capGlow1 4.6s ease-in-out infinite alternate -1.4s; }
          .cap-glow-2 { animation: capGlow2 3.8s ease-in-out infinite alternate -2.7s; }
        `}</style>
        <div className="cap-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {capabilities.map((cap, i) => (
            <div key={cap.id} className={i === 2 ? 'cap-third' : ''} style={{ display: 'flex', flexDirection: 'column' }}>
              <CapabilityCard {...cap} index={i} inView={inView} />
            </div>
          ))}
        </div>

        {/* Insight strip */}
        <div
          style={{
            marginTop: '28px',
            padding: '20px 28px',
            borderRadius: '14px',
            border: '1px solid rgba(255,255,255,0.07)',
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '16px',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.78s ease 0.58s, transform 0.78s cubic-bezier(0.16,1,0.3,1) 0.58s',
          }}
        >
          <style>{`
            @media (min-width: 1024px) {
              .insight-strip { grid-template-columns: 0.9fr 1.6fr !important; align-items: center; }
            }
          `}</style>
          <div className="insight-strip" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', fontSize: '16px', opacity: 0.75, flexShrink: 0 }}>
                ✦
              </span>
              <p style={{
                fontFamily: 'var(--font-accent)',
                fontStyle: 'italic',
                fontSize: '17px',
                lineHeight: 1.4,
                color: 'var(--color-text-white)',
                margin: 0,
              }}>
Most AI sits beside the business. TIA works inside it              </p>
            </div>
            <p className="text-body-sm" style={{ color: 'rgba(255,255,255,0.80)', lineHeight: 1.75 }}>
              Decisioning, context, and execution are not three features — they are three reasons AI finally moves from pilot to production.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ServicesCards
