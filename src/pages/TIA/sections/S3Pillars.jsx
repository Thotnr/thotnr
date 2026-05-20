import { useEffect, useRef, useState } from 'react'
import { BrainCircuit, Box, Sparkles } from 'lucide-react'

const PILLARS = [
  {
    num: '01',
    title: 'Foundation',
    subtitle: 'The thinking behind TIA.',
    description: 'Data first. Outcomes led. Governance by design. TIA begins with a foundation the enterprise can defend — before any model is designed, deployed, or scaled.',
    list: ['Data before model', 'Outcomes before outputs', 'Production before pilots', 'Governance before scale'],
    cta: { label: 'Read the TIA Principles', target: 'tia-principles' },
    Icon: BrainCircuit,
  },
  {
    num: '02',
    title: 'Delivery Model',
    subtitle: 'The way we work.',
    description: 'TIA is delivered through a structured model that follows the same three moves as the framework — trace enterprise reality, integrate intelligence into the way work happens, and amplify measurable outcomes.',
    phases: [
      {
        name: 'Trace',
        desc: 'Understand systems and constraints',
      },
      {
        name: 'Integrate',
        desc: 'Embed AI into operations',
      },
      {
        name: 'Amplify',
        desc: 'Scale outcomes and adoption',
      },
    ],    
    cta: { label: 'See the framework in action', target: 'tia-framework' },
    Icon: Box,
  },
  {
    num: '03',
    title: 'Product',
    subtitle: 'The future of TIA.',
    description: 'TIA is evolving beyond advisory and delivery into product experiences that make the framework easier to access, apply, and scale. Ask TIA is one upcoming expression — a conversational interface for readiness, opportunity discovery, and AI roadmap shaping.',
    prompts: [
      {
        text: 'How AI-ready is my data?',
        answer: "I'd start by checking three things: your data foundation (where it lives, how clean it is), your decision points (which moments matter for the business), and your delivery rhythm (do you have the discipline to ship). In private beta, I'll walk you through each. Join the waitlist to be invited.",
      },
      {
        text: 'Find AI opportunities in my industry',
        answer: 'For pharma, three angles consistently work: 1) Field intelligence — replacing quarterly analysis with real-time HCP decisioning. 2) Clinical operations — accelerating trial protocols. 3) Compliance — automating regulatory review. I can map these to your specific data landscape. Join the waitlist for the full conversation.',
      },
      {
        text: 'Map a TIA engagement for my business.',
        answer: "A typical engagement runs Sense (Weeks 1–4) → Shape (Weeks 4–8) → Scale (Weeks 8–16+). Each phase has clear deliverables. I'll customize this to your industry, data maturity, and ambition. Join the waitlist for a tailored plan.",
      },
    ],
    cta: { label: 'Join the Ask TIA waitlist', target: 'ask-tia' },
    Icon: Sparkles,
    isBeta: true,
  },
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

function PromptModal({ prompt, onClose }) {
  const [btnHov, setBtnHov] = useState(false)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleWaitlist = () => {
    onClose()
    setTimeout(() => {
      document.getElementById('ask-tia')?.scrollIntoView({ behavior: 'smooth' })
    }, 200)
  }

  return (
    <>
      <style>{`
        @keyframes s3ModalOverlay {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes s3ModalIn {
          from { opacity: 0; transform: scale(0.94) translateY(18px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
        .s3-modal-overlay {
          animation: s3ModalOverlay 0.22s ease both;
        }
        .s3-modal-box {
          animation: s3ModalIn 0.34s cubic-bezier(0.16,1,0.3,1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .s3-modal-overlay, .s3-modal-box {
            animation: none !important;
          }
        }
      `}</style>

      {/* Overlay */}
      <div
        className="s3-modal-overlay"
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(0,0,0,0.55)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '16px',
        }}
      >
        {/* Modal box */}
        <div
          className="s3-modal-box"
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'relative',
            background: 'rgba(14,30,52,0.98)',
            border: '1px solid rgba(94,234,212,0.22)',
            borderRadius: '20px',
            boxShadow: '0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(94,234,212,0.05)',
            width: '100%',
            maxWidth: '460px',
            padding: 'clamp(18px, 3vw, 26px)',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: 'absolute', top: '16px', right: '16px',
              width: '32px', height: '32px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.7)',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '20px', lineHeight: 1,
              transition: 'background 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.14)'
              e.currentTarget.style.color = 'rgba(255,255,255,1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
            }}
          >
            ×
          </button>

          {/* Main row: avatar + response bubble */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '18px', paddingRight: '28px' }}>
            {/* Avatar */}
            <div style={{
              flexShrink: 0,
              width: '34px', height: '34px',
              borderRadius: '50%',
              background: 'rgba(125,220,203,0.14)',
              border: '1.5px solid rgba(125,220,203,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '14px',
              color: '#7DDCCB',
              marginTop: '2px',
            }}>
              T
            </div>

            {/* Response bubble */}
            <div style={{
              flex: 1,
              background: 'rgba(23,36,58,0.95)',
              border: '1px solid rgba(94,234,212,0.13)',
              borderRadius: '12px',
              padding: '14px 16px',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '9px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#7DDCCB',
                marginBottom: '6px',
              }}>
                You asked:
              </p>
              <p
                className="text-body-sm"
                style={{
                  color: 'rgba(255,255,255,0.92)',
                  fontWeight: 600,
                  marginBottom: '10px',
                  lineHeight: 1.5,
                }}
              >
                {prompt.text}
              </p>
              <p className="text-body-sm" style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.72 }}>
                {prompt.answer}
              </p>
            </div>
          </div>

          {/* Helper text */}
          <p
            className="text-caption"
            style={{
              textAlign: 'center',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: '12px',
              lineHeight: 1.6,
            }}
          >
            Ask TIA is in private beta. Join the waitlist to access full conversations.
          </p>

          {/* Waitlist button */}
          <button
            onClick={handleWaitlist}
            onMouseEnter={() => setBtnHov(true)}
            onMouseLeave={() => setBtnHov(false)}
            style={{
              display: 'block',
              width: '100%',
              padding: '11px',
              borderRadius: '10px',
              background: '#7DDCCB',
              color: '#0E1E34',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-heading)',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.01em',
              textAlign: 'center',
              transition: 'opacity 0.22s ease, transform 0.22s ease',
              opacity: btnHov ? 0.88 : 1,
              transform: btnHov ? 'translateY(-2px)' : 'none',
            }}
          >
            Join the waitlist →
          </button>
        </div>
      </div>
    </>
  )
}

function PromptRow({ text, onClick }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '11px 16px',
        cursor: 'pointer',
        transition: 'background 0.22s ease',
        background: hov ? 'rgba(94,234,212,0.07)' : 'transparent',
      }}
    >
      <span
        className="text-body-sm"
        style={{ fontFamily: 'var(--font-mono)', color: hov ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,0.78)', lineHeight: 1.5, transition: 'color 0.22s ease' }}
      >
        {text}
      </span>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
        color: 'var(--color-pillars-cyan)',
        transform: hov ? 'translateX(5px)' : 'none',
        transition: 'transform 0.25s cubic-bezier(0.16,1,0.3,1)',
        flexShrink: 0,
        marginLeft: '12px',
      }}>
        →
      </span>
    </div>
  )
}

function PillarCard({ pillar, index, onPromptClick }) {
  const [hov, setHov] = useState(false)
  const [ctaHov, setCtaHov] = useState(false)
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const { Icon } = pillar

  return (
    <div
      className={`s3-card-${index}${pillar.isBeta ? ' s3-product-card' : ''}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '22px',
        border: `1px solid ${hov ? 'rgba(94,234,212,0.55)' : 'rgba(255,255,255,0.18)'}`,
        background: hov ? 'rgba(255,255,255,0.055)' : 'rgba(255,255,255,0.035)',
        boxShadow: '0 24px 80px rgba(0,0,0,0.14)',
        padding: 'clamp(20px,3vw,20px)',
        transform: hov ? 'translateY(-8px)' : 'none',
        transition: 'transform 0.65s cubic-bezier(0.16,1,0.3,1), border-color 0.65s cubic-bezier(0.16,1,0.3,1), background 0.65s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {/* ── Number row + icon ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <span className="text-caption" style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', letterSpacing: '0.12em' }}>
            {pillar.num}
          </span>
          <span style={{ display: 'block', width: '20px', height: '1px', background: 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
          {pillar.isBeta && (
            <>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.08em',
                background: 'var(--color-pillars-cyan)',
                color: 'var(--color-secondary)',
                borderRadius: '999px',
                padding: '3px 9px',
                animation: 's3BetaPulse 2.5s ease-in-out infinite',
              }}>
                BETA
              </span>
              <span className="text-caption" style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', letterSpacing: '0.1em' }}>
                COMING SOON
              </span>
            </>
          )}
        </div>
        <Icon
          aria-hidden="true"
          size={32}
          strokeWidth={1.5}
          style={{
            color: 'var(--color-pillars-cyan)',
            flexShrink: 0,
            filter: hov ? 'drop-shadow(0 0 6px rgba(94,234,212,0.55))' : 'none',
            transition: 'filter 0.5s ease',
          }}
        />
      </div>

      {/* ── Title ── */}
      <h3
        className="text-h2"
        style={{ color: 'rgba(255,255,255,0.96)', fontWeight: 600, marginBottom: '8px', lineHeight: 1.2 }}
      >
        {pillar.title}
      </h3>

      {/* ── Subtitle ── */}
      <p
        className="text-body"
        style={{ color: 'var(--color-accent)', fontStyle: 'italic', marginBottom: '20px', lineHeight: 1.6 }}
      >
        {pillar.subtitle}
      </p>

      {/* ── Description ── */}
      <p className="text-body" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: '24px' }}>
        {pillar.description}
      </p>

      {/* ── Pillar 01: dot list ── */}
      {pillar.list && (
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {pillar.list.map((item, li) => (
            <li key={li} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{
                flexShrink: 0, width: '5px', height: '5px', borderRadius: '50%',
                background: 'var(--color-pillars-cyan)', display: 'block',
              }} />
              <span className="text-body-sm" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* ── Pillar 02: phases ── */}
      {pillar.phases && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
          {pillar.phases.map((phase, pi) => (
            <div key={pi} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                flexShrink: 0, width: '22px', height: '22px',
                border: '1.5px solid var(--color-pillars-cyan)', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px',
              }}>
                <span style={{ color: 'var(--color-pillars-cyan)', fontSize: '11px', lineHeight: 1 }}>→</span>
              </div>
              <div>
                <span className="text-body-sm" style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600, display: 'block', marginBottom: '2px' }}>
                  {phase.name}
                </span>
                <span className="text-body-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>{phase.desc}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Pillar 03: clickable prompt rows ── */}
      {pillar.prompts && (
        <div style={{
          background: 'rgba(255,255,255,0.045)',
          border: '1px solid rgba(255,255,255,0.18)',
          borderRadius: '16px',
          overflow: 'hidden',
        }}>
          {pillar.prompts.map((p, pi) => (
            <div
              key={pi}
              style={{ borderBottom: pi < pillar.prompts.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}
            >
              <PromptRow text={p.text} onClick={() => onPromptClick(p)} />
            </div>
          ))}
        </div>
      )}

      
      {/* <div style={{ flexGrow: 1 }} /> */}

      {/* ── Bottom divider ── */}
      {/* <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.08)', margin: '12px 0 6px' }} /> */}

      {/* ── CTA ── */}
      {/* <button
        aria-label={pillar.cta.label}
        onClick={() => scrollTo(pillar.cta.target)}
        onMouseEnter={() => setCtaHov(true)}
        onMouseLeave={() => setCtaHov(false)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.05em',
          color: 'var(--color-pillars-cyan)',
          alignSelf: 'flex-start',
        }}
      >
        <span>{pillar.cta.label}</span>
        <span style={{
          transform: ctaHov ? 'translateX(5px)' : 'none',
          transition: 'transform 0.25s cubic-bezier(0.16,1,0.3,1)',
          display: 'inline-block',
        }}>→</span>
      </button> */}
    </div>
  )
}

function S3Pillars() {
  const [sectionRef, inView] = useInView(0.07)
  const [activePrompt, setActivePrompt] = useState(null)

  return (
    <>
      <style>{`
        @keyframes s3LineGrow {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }
        @keyframes s3FadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes s3BlurReveal {
          from { opacity: 0; filter: blur(14px); transform: translateY(18px); }
          to   { opacity: 1; filter: blur(0);    transform: translateY(0); }
        }
        @keyframes s3CardUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes s3BetaPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(94,234,212,0); }
          50%       { box-shadow: 0 0 10px 2px rgba(94,234,212,0.35); }
        }

        .s3-eyebrow-line { animation: s3LineGrow   0.55s cubic-bezier(0.16,1,0.3,1) 0.10s both; }
        .s3-eyebrow-text { animation: s3FadeUp     0.5s  cubic-bezier(0.16,1,0.3,1) 0.52s both; }
        .s3-heading      { animation: s3BlurReveal 1.0s  cubic-bezier(0.16,1,0.3,1) 0.28s both; }
        .s3-card-0       { animation: s3CardUp     0.75s cubic-bezier(0.16,1,0.3,1) 0.26s both; }
        .s3-card-1       { animation: s3CardUp     0.75s cubic-bezier(0.16,1,0.3,1) 0.40s both; }
        .s3-card-2       { animation: s3CardUp     0.75s cubic-bezier(0.16,1,0.3,1) 0.54s both; }

        .s3-paused .s3-eyebrow-line,
        .s3-paused .s3-eyebrow-text,
        .s3-paused .s3-heading,
        .s3-paused .s3-card-0,
        .s3-paused .s3-card-1,
        .s3-paused .s3-card-2 {
          opacity: 0; animation-play-state: paused;
        }
        .s3-running .s3-eyebrow-line,
        .s3-running .s3-eyebrow-text,
        .s3-running .s3-heading,
        .s3-running .s3-card-0,
        .s3-running .s3-card-1,
        .s3-running .s3-card-2 {
          animation-play-state: running;
        }

        .s3-card-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          align-items: stretch;
        }
        @media (max-width: 1023px) {
          .s3-card-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .s3-product-card { grid-column: span 2; }
        }
        @media (max-width: 639px) {
          .s3-card-grid { grid-template-columns: 1fr; }
          .s3-product-card { grid-column: span 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .s3-eyebrow-line, .s3-eyebrow-text, .s3-heading,
          .s3-card-0, .s3-card-1, .s3-card-2 {
            animation: none !important; opacity: 1 !important;
            filter: none !important; transform: none !important;
          }
        }
      `}</style>

      <section
        id="tia-pillars"
        ref={sectionRef}
        className={`py-16 px-5 md:px-10 lg:px-16 bg-[var(--color-secondary)] ${inView ? 's3-running' : 's3-paused'}`}
      >
        <div className="max-w-7xl mx-auto">

          {/* ── Section header ── */}
          <div className="mb-8">
            <p className="text-h4 text-[var(--color-highlight)] mb-2">
              The Pillars
            </p>
            <h2 className="text-h1 text-white" style={{ lineHeight: 1.2 }}>
              TIA stands on three pillars.<br />
              Each holds the others up.
            </h2>
          </div>

          {/* ── Card grid ── */}
          <div className="s3-card-grid">
            {PILLARS.map((pillar, i) => (
              <PillarCard
                key={pillar.num}
                pillar={pillar}
                index={i}
                onPromptClick={setActivePrompt}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ── Prompt modal ── */}
      {activePrompt && (
        <PromptModal
          prompt={activePrompt}
          onClose={() => setActivePrompt(null)}
        />
      )}
    </>
  )
}

export default S3Pillars
