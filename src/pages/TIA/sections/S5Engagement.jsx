import { useEffect, useRef, useState } from 'react'
import { FileText } from 'lucide-react'

const TIMELINE = [
  { weeks: 'WEEKS 1–4',   phase: 'Sense' },
  { weeks: 'WEEKS 4–8',   phase: 'Shape' },
  { weeks: 'WEEKS 8–16+', phase: 'Scale' },
]

const PHASES = [
  {
    num: '01',
    title: 'Sense',
    tasks: [
      'Data landscape audit',
      'System and workflow mapping',
      'Stakeholder interviews',
      'Governance and risk assessment',
    ],
    deliverables: ['Data Readiness Report', 'Enterprise AI Opportunity Landscape'],
    prompt: 'Run a Data Readiness check on my org',
    answer: "In private beta, I'll run a 10-minute structured assessment across data foundation, decision points, governance, and delivery rhythm — and give you a TIA-shaped readiness score. Join the waitlist to be invited.",
  },
  {
    num: '02',
    title: 'Shape',
    tasks: [
      'AI use case identification',
      'Solution architecture',
      'ROI modeling and risk assessment',
      'Phased delivery roadmap',
    ],
    deliverables: ['AI Opportunity Map', 'TIA Capability Blueprint'],
    prompt: 'Show me my highest-impact AI opportunities',
    answer: "I'll rank opportunities by ROI potential × data readiness × adoption potential — using the same scoring TIA uses in Shape phase engagements. Join the waitlist for access.",
  },
  {
    num: '03',
    title: 'Scale',
    tasks: [
      'End-to-end AI deployment',
      'System and workflow integration',
      'Governance and monitoring setup',
      'Team enablement and handover',
    ],
    deliverables: ['Production-grade AI capability', 'TIA Governance Layer'],
    prompt: 'Show me my AI outcomes this quarter',
    answer: "Once you're a TIA client, I'll surface live outcomes — revenue lift, hours saved, decisions accelerated — from your production AI capabilities. Coming with full launch.",
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
        @keyframes s5ModalOverlay { from { opacity: 0; } to { opacity: 1; } }
        @keyframes s5ModalIn {
          from { opacity: 0; transform: scale(0.94) translateY(18px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
        .s5-modal-overlay { animation: s5ModalOverlay 0.22s ease both; }
        .s5-modal-box     { animation: s5ModalIn     0.34s cubic-bezier(0.16,1,0.3,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .s5-modal-overlay, .s5-modal-box { animation: none !important; }
        }
      `}</style>

      <div
        className="s5-modal-overlay"
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(0,0,0,0.55)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '16px',
        }}
      >
        <div
          className="s5-modal-box"
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

          {/* Avatar + response bubble */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '18px', paddingRight: '28px' }}>
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
              <p className="text-body-sm" style={{ color: 'rgba(255,255,255,0.92)', fontWeight: 600, marginBottom: '10px', lineHeight: 1.5 }}>
                {prompt.text}
              </p>
              <p className="text-body-sm" style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.72 }}>
                {prompt.answer}
              </p>
            </div>
          </div>

          {/* Helper text */}
          <p className="text-caption" style={{ textAlign: 'center', color: 'rgba(255,255,255,0.45)', marginBottom: '12px', lineHeight: 1.6 }}>
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

function PhaseCard({ phase, index, onPromptClick }) {
  const [hov,       setHov]       = useState(false)
  const [promptHov, setPromptHov] = useState(false)

  return (
    <div
      className={`s5-card-${index}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '6px',
        border: `1px solid ${hov ? 'rgba(94,234,212,0.42)' : 'rgba(168,218,220,0.16)'}`,
        background: hov ? 'rgba(255,255,255,0.065)' : 'rgba(255,255,255,0.045)',
        padding: 'clamp(24px, 3vw, 40px)',
        boxShadow: hov ? '0 24px 80px rgba(0,0,0,0.18)' : 'none',
        transform: hov ? 'translateY(-6px)' : 'none',
        transition: [
          'transform 0.55s cubic-bezier(0.16,1,0.3,1)',
          'border-color 0.55s cubic-bezier(0.16,1,0.3,1)',
          'background 0.55s cubic-bezier(0.16,1,0.3,1)',
          'box-shadow 0.55s cubic-bezier(0.16,1,0.3,1)',
        ].join(', '),
      }}
    >
      {/* Phase label */}
      <p 
      className='text-sm'
      style={{
        
        textTransform: 'uppercase',
        color: 'var(--color-highlight)',
        marginBottom: '8px',
      }}>
        PHASE {phase.num}
      </p>

      {/* Title */}
      <h3 className="text-h2" style={{
        color: 'var(--color-text-white)',
        fontWeight: 600,
        marginBottom: '28px',
        lineHeight: 1.2,
      }}>
        {phase.title}
      </h3>

      {/* What We Do */}
      <div style={{ marginBottom: '24px' }}>
        <p className="s5-mini-label" style={{ marginBottom: '12px' }}>WHAT WE DO</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
          {phase.tasks.map((task, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <span style={{
                flexShrink: 0,
                marginTop: '3px',
                color: 'var(--color-pillars-cyan)',
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                lineHeight: 1,
              }}>–</span>
              <span className="text-body-sm" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.65 }}>
                {task}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* You Receive */}
      <div style={{ marginBottom: '20px' }}>
        <p className="s5-mini-label" style={{ marginBottom: '12px' }}>YOU RECEIVE</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {phase.deliverables.map((d, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(255,255,255,0.045)',
              borderRadius: '4px',
              padding: '12px 14px',
            }}>
              <div style={{
                flexShrink: 0,
                width: '28px', height: '28px',
                borderRadius: '4px',
                background: 'rgba(168,218,220,0.16)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <FileText size={14} strokeWidth={1.5} color="var(--color-accent)" aria-hidden="true" />
              </div>
              <span className="text-body-sm" style={{ color: 'rgba(255,255,255,0.86)', lineHeight: 1.5 }}>
                {d}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div style={{ flexGrow: 1 }} />

      {/* Dashed divider */}
      <div style={{
        width: '100%',
        borderTop: '1px dashed rgba(168,218,220,0.2)',
        margin: '20px 0 16px',
      }} />

      {/* Ask TIA label */}
      <p className="s5-mini-label" style={{ marginBottom: '10px' }}>✦ ASK TIA</p>

      {/* Prompt button */}
      <button
        aria-label={`Ask TIA: ${phase.prompt}`}
        onClick={() => onPromptClick({ text: phase.prompt, answer: phase.answer })}
        onMouseEnter={() => setPromptHov(true)}
        onMouseLeave={() => setPromptHov(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '12px 14px',
          borderRadius: '4px',
          border: `1px solid ${promptHov ? 'rgba(94,234,212,0.42)' : 'rgba(168,218,220,0.24)'}`,
          background: promptHov ? 'rgba(168,218,220,0.1)' : 'rgba(168,218,220,0.06)',
          cursor: 'pointer',
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: 'rgba(255,255,255,0.82)',
          textAlign: 'left',
          transition: 'background 0.25s ease, border-color 0.25s ease',
          gap: '10px',
        }}
      >
        <span style={{ lineHeight: 1.5 }}>{phase.prompt}</span>
        <span style={{
          flexShrink: 0,
          color: 'var(--color-accent)',
          transform: promptHov ? 'translateX(4px)' : 'none',
          transition: 'transform 0.25s cubic-bezier(0.16,1,0.3,1)',
        }}>→</span>
      </button>
    </div>
  )
}

function S5Engagement() {
  const [sectionRef, inView]     = useInView(0.06)
  const [activePrompt, setActivePrompt] = useState(null)

  return (
    <>
      <style>{`
        @keyframes s5FadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes s5BlurReveal {
          from { opacity: 0; filter: blur(12px); transform: translateY(16px); }
          to   { opacity: 1; filter: blur(0);    transform: translateY(0); }
        }

        .s5-eyebrow  { animation: s5FadeUp      0.5s  cubic-bezier(0.16,1,0.3,1) 0.08s both; }
        .s5-heading  { animation: s5BlurReveal  0.85s cubic-bezier(0.16,1,0.3,1) 0.18s both; }
        .s5-timeline { animation: s5FadeUp      0.7s  cubic-bezier(0.16,1,0.3,1) 0.34s both; }
        .s5-card-0   { animation: s5FadeUp      0.75s cubic-bezier(0.16,1,0.3,1) 0.50s both; }
        .s5-card-1   { animation: s5FadeUp      0.75s cubic-bezier(0.16,1,0.3,1) 0.64s both; }
        .s5-card-2   { animation: s5FadeUp      0.75s cubic-bezier(0.16,1,0.3,1) 0.78s both; }

        .s5-paused .s5-eyebrow, .s5-paused .s5-heading, .s5-paused .s5-timeline,
        .s5-paused .s5-card-0, .s5-paused .s5-card-1, .s5-paused .s5-card-2 {
          opacity: 0; animation-play-state: paused;
        }
        .s5-running .s5-eyebrow, .s5-running .s5-heading, .s5-running .s5-timeline,
        .s5-running .s5-card-0, .s5-running .s5-card-1, .s5-running .s5-card-2 {
          animation-play-state: running;
        }

        /* Mini section labels */
        .s5-mini-label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--color-pillars-cyan);
        }

        /* Card min-height — desktop/tablet only */
        @media (min-width: 640px) {
          .s5-card-0, .s5-card-1, .s5-card-2 { min-height: 580px; }
        }

        /* Cards grid */
        .s5-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(20px, 2vw, 28px);
        }
        @media (max-width: 1024px) {
          .s5-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .s5-card-2 {
            grid-column: span 2;
          }
        }
        @media (max-width: 639px) {
          .s5-cards-grid {
            grid-template-columns: 1fr;
          }
          .s5-card-2 {
            grid-column: span 1;
          }
        }

        /* Timeline band — vertical on mobile */
        .s5-timeline-band {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        .s5-timeline-item:not(:last-child) {
          border-right: 1px solid rgba(168,218,220,0.1);
        }
        @media (max-width: 639px) {
          .s5-timeline-band {
            grid-template-columns: 1fr;
          }
          .s5-timeline-item:not(:last-child) {
            border-right: none;
            border-bottom: 1px solid rgba(168,218,220,0.1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .s5-eyebrow, .s5-heading, .s5-timeline,
          .s5-card-0, .s5-card-1, .s5-card-2 {
            animation: none !important; opacity: 1 !important; filter: none !important;
          }
        }
      `}</style>

      <section
        id="tia-engagement"
        ref={sectionRef}
        className={`py-16 px-6 md:px-10 lg:px-16 ${inView ? 's5-running' : 's5-paused'}`}
        style={{ background: 'var(--color-secondary)' }}
      >
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>

          {/* ── Header ── */}
          <div className='mb-8'>

            {/* Eyebrow */}
            <p className="text-h4 text-[var(--color-highlight)] mb-2">
                In Practice
              </p>

            {/* Heading */}
            <h2 className="text-h1" style={{ lineHeight: 1.2 }}>
              <span style={{ color: 'var(--color-text-white)', display: 'block' }}>
                What a TIA engagement <br />
                actually looks like.
              </span>
              
            </h2>
          </div>

          {/* ── Timeline band ── */}
          <div
            className="s5-timeline s5-timeline-band"
            style={{
              border: '1px solid rgba(168,218,220,0.12)',
              background: 'rgba(11,15,25,0.12)',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: 'clamp(48px, 6vw, 72px)',
            }}
          >
            {TIMELINE.map((item, i) => (
              <div key={i} className="s5-timeline-item" style={{ padding: '28px 24px', textAlign: 'center' }}>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  opacity: 0.72,
                  marginBottom: '10px',
                }}>
                  {item.weeks}
                </p>
                <p className="text-h3" style={{ color: 'var(--color-text-white)', fontWeight: 600 }}>
                  {item.phase}
                </p>
              </div>
            ))}
          </div>

          {/* ── Phase cards ── */}
          <div className="s5-cards-grid">
            {PHASES.map((phase, i) => (
              <PhaseCard key={phase.num} phase={phase} index={i} onPromptClick={setActivePrompt} />
            ))}
          </div>

        </div>
      </section>

      {activePrompt && (
        <PromptModal prompt={activePrompt} onClose={() => setActivePrompt(null)} />
      )}
    </>
  )
}

export default S5Engagement
