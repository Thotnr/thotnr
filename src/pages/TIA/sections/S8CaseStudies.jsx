import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import creditasLogo from '../../../assets/images/clients/creditas-removebg-preview.png'
import hollardLogo  from '../../../assets/images/clients/hollard.png'
import rexall from '../../../assets/images/clients/csav.png'

const LENS_META = {
  sense: {
    border: 'var(--color-tertiary)',
    bgBase: 'rgba(69,123,157,0.05)',
    bgHov:  'rgba(69,123,157,0.11)',
  },
  shape: {
    border: 'var(--color-highlight)',
    bgBase: 'rgba(230,57,70,0.04)',
    bgHov:  'rgba(230,57,70,0.09)',
  },
  scale: {
    border: '#7C3AED',
    bgBase: 'rgba(124,58,237,0.04)',
    bgHov:  'rgba(124,58,237,0.09)',
  },
}

const CASES = [
  {
    id: 'rexall', sector: 'Pharma & Healthcare',
    client: 'Rexall',
    title: 'Autonomous Field Intelligence',
    logo: rexall,
    context: 'Rexall operates one of Canada\'s largest pharmacy chains with a large field force serving thousands of HCPs. Performance management ran on manual quarterly analysis — strategic decisions were being made on data already 3 months old.',
    sense: 'We mapped 5 years of HCP visit data, sales transactions, territory configurations, and CRM coverage gaps. Surfaced the structural lag: insight cycle was running 3 months behind decisions.',
    shape: 'Identified the two highest-impact decision points — weekly territory prioritization and rep-level coaching. Designed an Agentic AI platform anchored to these decisions, not generic \'AI for sales.\'',
    scale: 'Deployed end-to-end on Snowflake + AWS. Autonomous agents running bell-curve segmentation, pattern detection, and performance scoring. A GenAI recommendation engine translates analytics into plain-language weekly plans.',
    outcomes: [
      'Insight cycle compressed from 3 months to 7–15 days',
      'AI-powered field coaching activated across the entire force',
      'Smart HCP targeting — high-potential professionals auto-prioritized',
      'Early risk detection — performance declines flagged weeks before quarterly impact',
      'Autonomous opportunity discovery — AI agents surface untapped territories',
    ],
    ctaLabel: 'Read the full Rexall case study →', ctaLink: '/case-studies/rexall',
  },
  {
    id: 'sa-insurer', sector: 'Life & Short-Term Insurance',
    client: 'SA Insurer',
    title: 'End-to-End Agentic AI for Insurance Operations',
    logo: hollardLogo,
    context: 'A leading South African insurer running Life and short-term lines. Manual claims processing, reactive rule-based fraud detection, 5-day motor assessment cycles — operating under strict POPIA and GDPR obligations.',
    sense: 'Mapped the legacy claims journey end-to-end: 18% straight-through processing, fragmented data across document systems, fraud flagged post-payment, dark data trapped from cross-sell.',
    shape: 'Designed four orchestrated AI agents — Document Intake, Fraud Network, Claims Decision, Revenue & Lead — built on Azure AI Foundry. Governance and compliance designed into architecture from week one.',
    scale: 'Phased rollout across Life and Insure divisions. Document Intelligence replaced legacy OCR. Semantic Kernel powered real-time fraud network graph analysis. WhatsApp concierge for FNOL-to-assessment workflows.',
    outcomes: [
      'Claims STP lifted from 18% to 44%',
      'Motor assessment turnaround reduced by 3 working days',
      'R285 cost savings per motor assessment via workflow optimization',
      'Fraud syndicates surfaced pre-payment via ML network graph analysis',
      '10+ AI use cases deployed into production across Life and Insure',
      'Dark data transformed into live revenue intelligence',
    ],
    ctaLabel: 'Read the full SA Insurer case study →', ctaLink: '/case-studies/sa-insurer',
  },
  {
    id: 'creditas', sector: 'Finance & Digital Lending',
    client: 'Creditas',
    title: 'Embedded Agentic AI Across the Customer Lifecycle',
    logo: creditasLogo,
    context: 'Creditas, one of Brazil\'s leading digital lending platforms, ran polished web apps across acquisition, account management, and collections — but every meaningful interaction required a live agent. Support queues overwhelmed, drop-offs high, costs scaling linearly with users.',
    sense: 'Audited the full customer lifecycle, identified where live-agent dependency was creating bottlenecks. Quantified drop-offs, repetitive query volume, and revenue leakage from missed personalization moments.',
    shape: 'Designed a journey-aware Agentic AI platform — RAG-grounded for accuracy, MCP-enabled for real-time platform actions, with human-in-the-loop checkpoints for compliance. Multi-agent orchestration.',
    scale: 'Deployed across the full lifecycle. Agents detect intent, recommend actions, execute platform operations (payments, bookings, status), and learn continuously — within a detect-recommend-act-learn loop with strict guardrails.',
    outcomes: [
      '60%+ reduction in live-agent hand-offs',
      '25–30% lift in offer conversion via context-rich personalization',
      'Average query resolution under 30 seconds',
      '80%+ first-contact resolution on help-desk queries (RAG-grounded)',
      '70%+ of routine platform operations automated via MCP',
      'Scalable agentic foundation across the customer lifecycle',
    ],
    ctaLabel: 'Read the full Creditas case study →', ctaLink: '/case-studies/creditas',
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

function TabButton({ cs, isActive, onClick }) {
  const [hov, setHov] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: '14px 24px',
        borderRadius: '10px',
        background: isActive
          ? 'var(--color-secondary)'
          : hov ? 'rgba(29,53,87,0.07)' : 'rgba(11,15,25,0.03)',
        border: `1px solid ${
          isActive
            ? 'var(--color-secondary)'
            : hov ? 'rgba(29,53,87,0.22)' : 'rgba(11,15,25,0.1)'
        }`,
        boxShadow: isActive
          ? '0 10px 36px rgba(29,53,87,0.22), 0 2px 8px rgba(29,53,87,0.12)'
          : hov ? '0 4px 18px rgba(11,15,25,0.07)' : 'none',
        cursor: 'pointer',
        textAlign: 'left',
        transform: isActive ? 'translateY(-2px)' : hov ? 'translateY(-1px)' : 'none',
        transition: [
          'background 0.3s cubic-bezier(0.16,1,0.3,1)',
          'border-color 0.3s cubic-bezier(0.16,1,0.3,1)',
          'box-shadow 0.3s cubic-bezier(0.16,1,0.3,1)',
          'transform 0.3s cubic-bezier(0.16,1,0.3,1)',
        ].join(', '),
      }}
    >
      <p className="text-sm" style={{
        color: isActive
          ? 'rgba(168,218,220,0.85)'
          : hov ? 'var(--color-highlight)' : 'var(--color-text-tertiary)',
        // letterSpacing: '0.1em',
        textTransform: 'uppercase',
        margin: '0 0 4px',
        transition: 'color 0.28s ease',
      }}>
        {cs.sector}
      </p>
      <p className="text-body-sm" style={{
        color: isActive
          ? 'var(--color-text-white)'
          : hov ? 'var(--color-secondary)' : 'var(--color-text-secondary)',
        fontWeight: isActive ? 600 : 400,
        margin: 0,
        transition: 'color 0.28s ease',
      }}>
        {cs.client}
      </p>
    </button>
  )
}

function LensRow({ lensKey, label, text }) {
  const [hov, setHov] = useState(false)
  const meta = LENS_META[lensKey]

  return (
    <div
      style={{
        flex: 1,
        padding: '16px 18px',
        borderLeft: `3px solid ${meta.border}`,
        borderRadius: '0 8px 8px 0',
        background: hov ? meta.bgHov : meta.bgBase,
        transition: 'background 0.28s cubic-bezier(0.16,1,0.3,1)',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <p className="text-label mb-2" style={{
        color: 'var(--color-secondary)',
        letterSpacing: '0.14em',
        fontWeight: 600,
      }}>
        TIA LENS — {label.toUpperCase()}
      </p>
      <p className="text-body-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, margin: 0 }}>
        {text}
      </p>
    </div>
  )
}

function CaseContent({ cs }) {
  return (
    <div className="cs-content grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12">

      {/* LEFT — context + TIA lens rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

        {/* Logo + sector + title */}
        <div>
          {cs.logo && (
            <img
              src={cs.logo}
              alt={cs.client}
              style={{ height: '50px', objectFit: 'contain', marginBottom: '12px', }}
            />
          )}
          <p className="text-label mb-2" style={{ color: 'var(--color-highlight)', letterSpacing: '0.14em' }}>
            {cs.sector}
          </p>
          <h3 className="text-h2" style={{ color: 'var(--color-secondary)', fontWeight: 600, lineHeight: 1.2, marginBottom: 0 }}>
            {cs.client} — {cs.title}
          </h3>
        </div>

        {/* Context */}
        <p className="text-body-lg" style={{
          color: 'var(--color-text-secondary)',
          lineHeight: 1.8,
          borderLeft: '3px solid var(--color-accent)',
          paddingLeft: '18px',
          margin: 0,
        }}>
          {cs.context}
        </p>

        {/* TIA lens rows — fills remaining height */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
          {[
            { key: 'sense', label: 'Sense', text: cs.sense },
            { key: 'shape', label: 'Shape', text: cs.shape },
            { key: 'scale', label: 'Scale', text: cs.scale },
          ].map((lens) => (
            <LensRow key={lens.key} lensKey={lens.key} label={lens.label} text={lens.text} />
          ))}
        </div>
      </div>

      {/* RIGHT — outcomes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{
          padding: '28px',
          borderRadius: '12px',
          background: 'rgba(29,53,87,0.05)',
          border: '1px solid rgba(29,53,87,0.1)',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}>
          <p className="text-label mb-4" style={{ color: 'var(--color-secondary)', letterSpacing: '0.14em', flexShrink: 0 }}>
            THE OUTCOME
          </p>
          <ul style={{
            listStyle: 'none', padding: 0, margin: 0,
            display: 'flex', flexDirection: 'column',
            flexGrow: 1,
            justifyContent: 'space-between',
          }}>
            {cs.outcomes.map((o, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: 'var(--color-tertiary)', flexShrink: 0, marginTop: '3px', fontSize: '13px', fontWeight: 700 }}>✓</span>
                <span className="text-body-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{o}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          to={cs.ctaLink}
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.07em',
            color: 'var(--color-secondary)', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            transition: 'color 0.2s ease, gap 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-highlight)'; e.currentTarget.style.gap = '10px' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-secondary)'; e.currentTarget.style.gap = '6px' }}
        >
          {cs.ctaLabel}
        </Link>
      </div>
    </div>
  )
}

function S8CaseStudies() {
  const [sectionRef, inView] = useInView(0.06)
  const [active, setActive]   = useState(0)
  const [fading, setFading]   = useState(false)

  const switchCase = (i) => {
    if (i === active) return
    setFading(true)
    setTimeout(() => { setActive(i); setFading(false) }, 260)
  }

  return (
    <>
      <style>{`
        @keyframes csFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes csBlurReveal {
          from { opacity: 0; filter: blur(10px); transform: translateY(14px); }
          to   { opacity: 1; filter: blur(0);    transform: translateY(0); }
        }

        .cs-eyebrow { animation: csFadeUp      0.5s  cubic-bezier(0.16,1,0.3,1) 0.08s both; }
        .cs-heading { animation: csBlurReveal  0.8s  cubic-bezier(0.16,1,0.3,1) 0.16s both; }
        .cs-sub     { animation: csFadeUp      0.6s  cubic-bezier(0.16,1,0.3,1) 0.26s both; }
        .cs-tabs    { animation: csFadeUp      0.65s cubic-bezier(0.16,1,0.3,1) 0.38s both; }
        .cs-area    { animation: csFadeUp      0.75s cubic-bezier(0.16,1,0.3,1) 0.52s both; }

        .cs-content {
          transition: opacity 0.26s ease, transform 0.26s cubic-bezier(0.16,1,0.3,1);
        }

        .cs-paused .cs-eyebrow, .cs-paused .cs-heading, .cs-paused .cs-sub,
        .cs-paused .cs-tabs,    .cs-paused .cs-area {
          opacity: 0; animation-play-state: paused;
        }
        .cs-running .cs-eyebrow, .cs-running .cs-heading, .cs-running .cs-sub,
        .cs-running .cs-tabs,    .cs-running .cs-area {
          animation-play-state: running;
        }

        @media (prefers-reduced-motion: reduce) {
          .cs-eyebrow, .cs-heading, .cs-sub, .cs-tabs, .cs-area {
            animation: none !important; opacity: 1 !important; filter: none !important;
          }
          .cs-content { transition: none; }
        }
      `}</style>

      <section
        id="tia-case-studies"
        ref={sectionRef}
        className={`py-16 px-5 md:px-10 lg:px-16 bg-[var(--color-primary)] ${inView ? 'cs-running' : 'cs-paused'}`}
      >
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>

          {/* Header */}
          <div className="mb-10">
            <p className="cs-eyebrow text-h4 text-[var(--color-highlight)] mb-1">PROOF</p>
            <h2 className="cs-heading text-h1 text-[var(--color-text-primary)]" style={{ lineHeight: 1.2 }}>
              TIA in action.
            </h2>
          
          </div>

          {/* Tab navigation */}
          <div className="cs-tabs flex flex-wrap gap-3 mb-10">
            {CASES.map((cs, i) => (
              <TabButton
                key={cs.id}
                cs={cs}
                isActive={active === i}
                onClick={() => switchCase(i)}
              />
            ))}
          </div>

          {/* Content area */}
          <div
            className="cs-area cs-content"
            style={{
              opacity: fading ? 0 : 1,
              transform: fading ? 'translateY(10px)' : 'translateY(0)',
            }}
          >
            <CaseContent cs={CASES[active]} />
          </div>

        </div>
      </section>
    </>
  )
}

export default S8CaseStudies
