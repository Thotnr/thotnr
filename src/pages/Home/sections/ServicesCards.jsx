import { useState, useEffect, useRef } from 'react'
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

const RED  = { color: '#F43F5E', border: 'rgba(244,63,94,0.35)',   ambient: 'rgba(244,63,94,0.20)'  }
const PRP  = { color: '#9A6FE3', border: 'rgba(154,111,227,0.52)', ambient: 'rgba(154,111,227,0.28)' }
const CYAN = { color: '#22D3EE', border: 'rgba(34,211,238,0.35)',  ambient: 'rgba(34,211,238,0.20)'  }

const OUTCOMES = [
  { symbol: '⚡', metric: '3×',  label: 'Faster decisions',  accent: RED.color   },
  { symbol: '◈',  metric: '60%', label: 'Reduced effort',    accent: PRP.color   },
  { symbol: '▽',  metric: '40%', label: 'Lower risk',         accent: CYAN.color  },
  { symbol: '↑',  metric: '2×',  label: 'Stronger outcomes', accent: 'var(--color-accent)' },
]

/* ─── Side card ─── */
function SideCard({ eyebrow, title, subtitle, desc, badge, icon, accent, animClass, glowClass, inView, delay }) {
  const [hov, setHov] = useState(false)
  return (
    <div style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(52px)',
      transition: `opacity 0.82s ease ${delay}, transform 0.82s cubic-bezier(0.16,1,0.3,1) ${delay}`,
      height: '100%',
    }}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          position: 'relative',
          borderRadius: '24px',
          padding: '32px 26px 28px',
          border: `1px solid ${hov ? accent.border.replace(/[\d.]+\)$/, '0.55)') : accent.border}`,
          background: hov ? 'rgba(255,255,255,0.055)' : 'rgba(255,255,255,0.028)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: hov
            ? `0 28px 64px rgba(0,0,0,0.52), 0 0 72px ${accent.ambient}, inset 0 1px 0 rgba(255,255,255,0.08)`
            : `0 8px 32px rgba(0,0,0,0.28), 0 0 44px ${accent.ambient.replace('0.20', '0.09')}, inset 0 1px 0 rgba(255,255,255,0.04)`,
          transform: hov ? 'translateY(-6px)' : 'translateY(0)',
          transition: 'transform 0.30s cubic-bezier(0.16,1,0.3,1), border-color 0.28s ease, background 0.28s ease, box-shadow 0.38s ease',
          overflow: 'hidden',
          minHeight: '440px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Ambient top glow */}
        <div style={{
          position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)',
          width: '200px', height: '200px', borderRadius: '50%',
          background: `radial-gradient(circle, ${accent.color}24 0%, transparent 70%)`,
          filter: 'blur(26px)', pointerEvents: 'none', zIndex: 0,
          opacity: hov ? 1 : 0.55, transition: 'opacity 0.38s ease',
        }} />

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '7px',
          padding: '6px 15px', borderRadius: '100px',
          background: `${accent.color}30`,
          border: `1px solid ${accent.color}70`,
          marginBottom: '20px', position: 'relative', zIndex: 1,
          alignSelf: 'center',
          boxShadow: `0 0 18px ${accent.color}22`,
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: accent.color, display: 'inline-block', boxShadow: `0 0 9px ${accent.color}, 0 0 4px ${accent.color}` }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, color: accent.color, letterSpacing: '0.13em', textTransform: 'uppercase' }}>
            {badge}
          </span>
        </div>

        {/* Icon stage */}
        <div style={{ position: 'relative', marginBottom: '4px', zIndex: 1, perspective: '800px' }}>
          <div className={glowClass} style={{
            position: 'absolute', bottom: '2px', left: '50%',
            width: '100px', height: '38px', borderRadius: '50%',
            background: `radial-gradient(ellipse, ${accent.color} 0%, transparent 70%)`,
            filter: 'blur(14px)', opacity: hov ? 0.72 : 0.34,
            transition: 'opacity 0.38s ease', zIndex: 0,
          }} />
          <img
            src={icon}
            alt=""
            className={animClass}
            style={{
              width: '148px', height: '148px', objectFit: 'contain',
              position: 'relative', zIndex: 1,
              filter: hov
                ? `drop-shadow(0 0 30px ${accent.color}) drop-shadow(0 9px 20px rgba(0,0,0,0.58)) brightness(1.2)`
                : `drop-shadow(0 0 13px ${accent.color}90) drop-shadow(0 9px 20px rgba(0,0,0,0.50)) brightness(1)`,
              transition: 'filter 0.38s ease',
            }}
          />
        </div>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 600, color: accent.color, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '8px', position: 'relative', zIndex: 1 }}>
          {eyebrow}
        </p>
        <h3 className="text-h4" style={{ color: 'var(--color-text-white)', fontWeight: 700, marginBottom: '8px', lineHeight: 1.18, position: 'relative', zIndex: 1 }}>
          {title}
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.70)', marginBottom: '15px', lineHeight: 1.55, position: 'relative', zIndex: 1 }}>
          {subtitle}
        </p>
        <div style={{ width: '24px', height: '1px', background: accent.color, opacity: 0.65, marginBottom: '15px', position: 'relative', zIndex: 1 }} />
        <p className="text-body-sm" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.76, flex: 1, position: 'relative', zIndex: 1 }}>
          {desc}
        </p>

        {/* Bottom glow accent */}
        <div style={{
          position: 'absolute', bottom: 0, left: '14%', right: '14%', height: '1px',
          background: `linear-gradient(90deg, transparent 0%, ${accent.color} 50%, transparent 100%)`,
          opacity: hov ? 0.65 : 0.18, transition: 'opacity 0.38s ease',
        }} />
      </div>
    </div>
  )
}

/* ─── Center card ─── */
function CentreCard({ inView }) {
  const [hov, setHov] = useState(false)
  return (
    <div style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(52px)',
      transition: 'opacity 0.82s ease 0.28s, transform 0.82s cubic-bezier(0.16,1,0.3,1) 0.28s',
    }}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          position: 'relative',
          borderRadius: '28px',
          padding: '44px 34px 36px',
          border: `1px solid ${hov ? 'rgba(154,111,227,0.72)' : PRP.border}`,
          background: 'rgba(154,111,227,0.07)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          boxShadow: hov
            ? `0 36px 88px rgba(0,0,0,0.58), 0 0 130px rgba(154,111,227,0.44), inset 0 1px 0 rgba(255,255,255,0.11)`
            : `0 20px 56px rgba(0,0,0,0.38), 0 0 96px rgba(154,111,227,0.30), inset 0 1px 0 rgba(255,255,255,0.06)`,
          transform: hov ? 'translateY(-8px)' : 'translateY(0)',
          transition: 'transform 0.30s cubic-bezier(0.16,1,0.3,1), border-color 0.28s ease, box-shadow 0.40s ease',
          overflow: 'hidden',
          minHeight: '530px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          zIndex: 2,
        }}
      >
        {/* Purple aurora */}
        <div style={{
          position: 'absolute', top: '-70px', left: '50%', transform: 'translateX(-50%)',
          width: '340px', height: '340px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(154,111,227,0.24) 0%, transparent 65%)',
          filter: 'blur(34px)', pointerEvents: 'none', zIndex: 0,
          opacity: hov ? 1 : 0.78, transition: 'opacity 0.40s ease',
        }} />

        {/* Subtle grid texture overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', borderRadius: '28px',
          backgroundImage: 'linear-gradient(rgba(154,111,227,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(154,111,227,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.6,
        }} />

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '7px 18px', borderRadius: '100px',
          background: 'rgba(154,111,227,0.28)',
          border: '1px solid rgba(154,111,227,0.65)',
          marginBottom: '28px', position: 'relative', zIndex: 1,
          alignSelf: 'center',
          boxShadow: '0 0 24px rgba(154,111,227,0.22)',
        }}>
          <span style={{
            width: '7px', height: '7px', borderRadius: '50%', background: '#9A6FE3',
            display: 'inline-block', boxShadow: '0 0 12px #9A6FE3, 0 0 24px rgba(154,111,227,0.6)',
          }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 600, color: '#B08FF0', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            Intelligence Engine
          </span>
        </div>

        {/* Icon */}
        <div style={{ position: 'relative', marginBottom: '6px', zIndex: 1, perspective: '900px' }}>
          <div className="sg-glow-centre" style={{
            position: 'absolute', bottom: '0px', left: '50%',
            width: '160px', height: '60px', borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(154,111,227,0.95) 0%, transparent 70%)',
            filter: 'blur(20px)', opacity: hov ? 0.88 : 0.50,
            transition: 'opacity 0.40s ease', zIndex: 0,
          }} />
          <img
            src={groundedAI}
            alt=""
            className="sg-icon-centre"
            style={{
              width: '200px', height: '200px', objectFit: 'contain',
              position: 'relative', zIndex: 1,
              filter: hov
                ? 'drop-shadow(0 0 46px rgba(154,111,227,0.95)) drop-shadow(0 14px 30px rgba(0,0,0,0.62)) brightness(1.22)'
                : 'drop-shadow(0 0 24px rgba(154,111,227,0.58)) drop-shadow(0 14px 30px rgba(0,0,0,0.52)) brightness(1.05)',
              transition: 'filter 0.40s ease',
            }}
          />
        </div>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 600, color: '#B08FF0', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '10px', position: 'relative', zIndex: 1 }}>
          CONTEXT
        </p>
        <h3 className="text-h3" style={{ color: 'var(--color-text-white)', fontWeight: 700, marginBottom: '10px', lineHeight: 1.14, position: 'relative', zIndex: 1 }}>
          Grounded Intelligence
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(255,255,255,0.70)', marginBottom: '20px', lineHeight: 1.55, position: 'relative', zIndex: 1 }}>
          Connected to business reality.
        </p>
        <div style={{ width: '36px', height: '1px', background: '#9A6FE3', opacity: 0.75, marginBottom: '20px', position: 'relative', zIndex: 1 }} />
        <p className="text-body" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.78, flex: 1, position: 'relative', zIndex: 1 }}>
          We anchor AI in trusted data, enterprise knowledge, policies, workflows, and operating context — so outputs are relevant, dependable, and aligned to how your organisation actually works.
        </p>

        {/* Bottom glow */}
        <div style={{
          position: 'absolute', bottom: 0, left: '8%', right: '8%', height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(154,111,227,0.85) 50%, transparent 100%)',
          opacity: hov ? 1 : 0.42, transition: 'opacity 0.40s ease',
        }} />

        {/* Left connection port */}
        <div style={{
          position: 'absolute', left: '-6px', top: '50%', transform: 'translateY(-50%)',
          width: '12px', height: '12px', borderRadius: '50%',
          background: 'rgba(154,111,227,0.92)',
          boxShadow: '0 0 18px rgba(154,111,227,1), 0 0 7px rgba(154,111,227,0.8)',
          zIndex: 4,
        }} />
        {/* Right connection port */}
        <div style={{
          position: 'absolute', right: '-6px', top: '50%', transform: 'translateY(-50%)',
          width: '12px', height: '12px', borderRadius: '50%',
          background: 'rgba(154,111,227,0.92)',
          boxShadow: '0 0 18px rgba(154,111,227,1), 0 0 7px rgba(154,111,227,0.8)',
          zIndex: 4,
        }} />
      </div>
    </div>
  )
}

/* ─── Connector line (desktop only — display controlled by CSS) ─── */
function Connector({ fromColor, toColor, direction, inView, delay }) {
  const pulseClass = direction === 'right' ? 'conn-pulse-right' : 'conn-pulse-left'
  const baseGrad = direction === 'right'
    ? `linear-gradient(90deg, ${fromColor}50 0%, ${toColor}50 100%)`
    : `linear-gradient(90deg, ${toColor}50 0%, ${fromColor}50 100%)`
  const pulseCol = direction === 'right' ? toColor : fromColor

  return (
    <div
      className="sc-conn"
      style={{
        position: 'relative',
        opacity: inView ? 1 : 0,
        transition: `opacity 0.82s ease ${delay}`,
      }}
    >
      {/* Base static line */}
      <div style={{
        position: 'absolute', top: '50%', left: 0, right: 0,
        height: '1px', transform: 'translateY(-50%)',
        background: baseGrad,
        borderRadius: '1px',
      }} />
      {/* Animated energy pulse */}
      <div
        className={pulseClass}
        style={{
          position: 'absolute', top: '50%', left: 0, right: 0,
          height: '2px', transform: 'translateY(-50%)',
          background: `linear-gradient(90deg, transparent 0%, ${pulseCol} 50%, transparent 100%)`,
          backgroundSize: '200% 100%',
          borderRadius: '2px',
          boxShadow: `0 0 10px ${pulseCol}`,
        }}
      />
      {/* Terminal dot */}
      <div style={{
        position: 'absolute', top: '50%',
        ...(direction === 'right' ? { right: '-3px' } : { left: '-3px' }),
        transform: 'translateY(-50%)',
        width: '6px', height: '6px', borderRadius: '50%',
        background: pulseCol,
        boxShadow: `0 0 10px ${pulseCol}, 0 0 4px ${pulseCol}`,
        zIndex: 1,
      }} />
    </div>
  )
}

/* ─── Section ─── */
function ServicesCards() {
  const [sectionRef, inView] = useInView()

  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16 relative overflow-hidden"
      style={{ background: 'var(--color-secondary)' }}
    >
      {/* Ambient background glows */}
      <div aria-hidden="true" style={{ position: 'absolute', top: '-100px', left: '-60px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,63,94,0.10) 0%, transparent 62%)', filter: 'blur(48px)', pointerEvents: 'none', zIndex: 0 }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: '-80px', right: '-40px', width: '440px', height: '440px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 62%)', filter: 'blur(52px)', pointerEvents: 'none', zIndex: 0 }} />
      <div aria-hidden="true" style={{ position: 'absolute', bottom: '-60px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(154,111,227,0.11) 0%, transparent 62%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />

      <div ref={sectionRef} className="max-w-7xl mx-auto relative" style={{ zIndex: 1 }}>

        {/* ── Header — unchanged ── */}
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
              The intelligence layer <br />
              TIA builds
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
              TIA turns AI from a standalone initiative into practical enterprise capability — grounded in real context, applied to better decisions, and carried into the way work gets done.
            </p>
          </div>
        </div>

        {/* ── Styles ── */}
        <style>{`
          /* Icon float animations */
          @keyframes sgFloatCentre {
            0%   { transform: translateY(-5px)  rotateY(-9deg)  rotateX(3deg);  }
            100% { transform: translateY(9px)   rotateY(9deg)   rotateX(-3deg); }
          }
          @keyframes sgFloat0 {
            0%   { transform: translateY(5px)   rotateY(-14deg) rotateX(5deg);  }
            100% { transform: translateY(-18px)  rotateY(13deg)  rotateX(-5deg); }
          }
          @keyframes sgFloat1 {
            0%   { transform: translateY(-8px)  rotateY(13deg)  rotateX(-5deg); }
            100% { transform: translateY(16px)   rotateY(-11deg) rotateX(5deg);  }
          }
          @keyframes sgGlowC {
            0%   { transform: translateX(-50%) scale(0.80); opacity: 0.48; }
            100% { transform: translateX(-50%) scale(1.26); opacity: 0.88; }
          }
          @keyframes sgGlow0 {
            0%   { transform: translateX(-50%) scale(0.78); opacity: 0.32; }
            100% { transform: translateX(-50%) scale(1.22); opacity: 0.70; }
          }
          @keyframes sgGlow1 {
            0%   { transform: translateX(-50%) scale(1.20); opacity: 0.68; }
            100% { transform: translateX(-50%) scale(0.76); opacity: 0.30; }
          }

          .sg-icon-centre { animation: sgFloatCentre 4.4s ease-in-out infinite alternate; }
          .sg-icon-0      { animation: sgFloat0      4.0s ease-in-out infinite alternate; }
          .sg-icon-1      { animation: sgFloat1      3.8s ease-in-out infinite alternate -1.6s; }
          .sg-glow-centre { animation: sgGlowC       4.4s ease-in-out infinite alternate; }
          .sg-glow-0      { animation: sgGlow0       4.0s ease-in-out infinite alternate; }
          .sg-glow-1      { animation: sgGlow1       3.8s ease-in-out infinite alternate -1.6s; }

          /* Connector pulse animations */
          @keyframes connPulseRight {
            0%   { background-position: -100% 0; }
            100% { background-position: 200%  0; }
          }
          @keyframes connPulseLeft {
            0%   { background-position: 200%  0; }
            100% { background-position: -100% 0; }
          }
          .conn-pulse-right { animation: connPulseRight 2.2s linear infinite; }
          .conn-pulse-left  { animation: connPulseLeft  2.2s linear infinite; }

          /* ── Layout ── */
          /* Mobile: single column */
          .sc-arch  { display: flex; flex-direction: column; gap: 16px; }
          .sc-conn  { display: none; }

          /* Desktop: 5-column grid — side | connector | centre | connector | side */
          @media (min-width: 1024px) {
            .sc-arch {
              display: grid;
              grid-template-columns: 1fr 58px 1.30fr 58px 1fr;
              align-items: center;
              gap: 0;
            }
            .sc-conn {
              display: flex;
              align-self: stretch;
              align-items: center;
              justify-content: center;
              position: relative;
            }
            .sc-centre-wrap { position: relative; z-index: 2; }
            .sc-side-wrap   { position: relative; z-index: 1; }
          }

          /* Outcomes grid */
          .sc-outcomes { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
          @media (min-width: 1024px) {
            .sc-outcomes { grid-template-columns: repeat(4, 1fr); gap: 14px; }
          }

          @media (prefers-reduced-motion: reduce) {
            .sg-icon-centre, .sg-icon-0, .sg-icon-1,
            .sg-glow-centre, .sg-glow-0,  .sg-glow-1,
            .conn-pulse-right, .conn-pulse-left {
              animation: none !important;
            }
          }
        `}</style>

        {/* ── Architecture layout ── */}
        <div className="sc-arch">

          {/* Left card — Decisioning */}
          <div className="sc-side-wrap">
            <SideCard
              eyebrow="DECISIONING"
              title="Augmented Decisions"
              subtitle="Human judgment, elevated by AI."
              desc="We design decision systems that combine machine intelligence, business rules, and human oversight — enabling faster, more consistent decisions without losing accountability or trust."
              badge="Decision Layer"
              icon={augDec}
              accent={RED}
              animClass="sg-icon-0"
              glowClass="sg-glow-0"
              inView={inView}
              delay="0.14s"
            />
          </div>

          {/* Left connector — energy flows center → left */}
          <Connector
            fromColor={PRP.color}
            toColor={RED.color}
            direction="left"
            inView={inView}
            delay="0.48s"
          />

          {/* Center card — Grounded Intelligence */}
          <div className="sc-centre-wrap">
            <CentreCard inView={inView} />
          </div>

          {/* Right connector — energy flows center → right */}
          <Connector
            fromColor={PRP.color}
            toColor={CYAN.color}
            direction="right"
            inView={inView}
            delay="0.48s"
          />

          {/* Right card — Execution */}
          <div className="sc-side-wrap">
            <SideCard
              eyebrow="EXECUTION"
              title="Intelligent Execution"
              subtitle="AI carried into daily operations."
              desc="We integrate intelligence into systems, processes, approvals, and day-to-day workflows — so AI supports real work, drives consistent action, and creates measurable value over time."
              badge="Execution Layer"
              icon={embedded}
              accent={CYAN}
              animClass="sg-icon-1"
              glowClass="sg-glow-1"
              inView={inView}
              delay="0.14s"
            />
          </div>

        </div>

        {/* ── Outcomes strip ── */}
        <div style={{
          marginTop: '36px',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(22px)',
          transition: 'opacity 0.82s ease 0.76s, transform 0.82s cubic-bezier(0.16,1,0.3,1) 0.76s',
        }}>
          <div className="sc-outcomes">
            {OUTCOMES.map((o, i) => (
              <div
                key={i}
                style={{
                  padding: '20px 22px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,0.07)',
                  background: 'rgba(255,255,255,0.028)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                <div style={{
                  width: '42px', height: '42px', borderRadius: '11px', flexShrink: 0,
                  background: o.accent === 'var(--color-accent)' ? 'rgba(168,218,220,0.14)' : `${o.accent}18`,
                  border: `1px solid ${o.accent === 'var(--color-accent)' ? 'rgba(168,218,220,0.30)' : o.accent + '38'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '18px',
                  boxShadow: o.accent === 'var(--color-accent)' ? '0 0 16px rgba(168,218,220,0.18)' : `0 0 16px ${o.accent}1A`,
                }}>
                  {o.symbol}
                </div>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '22px',
                    color: o.accent, lineHeight: 1.05, marginBottom: '3px',
                  }}>
                    {o.metric}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-mono)', fontSize: '12px',
                    color: 'rgba(255,255,255,0.85)', letterSpacing: '0.09em', textTransform: 'uppercase',
                  }}>
                    {o.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
                fontFamily: 'var(--font-heading)',
                
                fontSize: '18px',
                lineHeight: 1.4,
                color: 'var(--color-text-white)',
                margin: 0,
              }}>
                Most AI sits beside the business. TIA works inside it              </p>
            </div>
            <p className="text-body" style={{ color: 'rgba(255,255,255,0.80)', lineHeight: 1.75 }}>
                Built on real context. Designed for enterprise work. Measured by outcomes that compound.            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesCards
