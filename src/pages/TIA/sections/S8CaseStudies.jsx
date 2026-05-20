import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import creditasLogo from '../../../assets/images/clients/creditas-removebg-preview.png'
import hollardLogo  from '../../../assets/images/clients/hollard.png'
import rexall from '../../../assets/images/clients/csav.png'

const LENS_META = {
  trace: {
    border: 'var(--color-tertiary)',
    bgBase: 'rgba(69,123,157,0.14)',
    bgHov:  'rgba(69,123,157,0.24)',
  },
  integrate: {
    border: 'var(--color-highlight)',
    bgBase: 'rgba(230,57,70,0.12)',
    bgHov:  'rgba(230,57,70,0.22)',
  },
  amplify: {
    border: '#7C3AED',
    bgBase: 'rgba(124,58,237,0.12)',
    bgHov:  'rgba(124,58,237,0.22)',
  },
}

const CASES = [
  {
    id: 'rexall', sector: 'Pharma & Healthcare',
    client: 'Rexall',
    title: 'Autonomous Field Intelligence',
    logo: rexall, logoHeight: 48,
    context: "Rexall operates one of Canada’s largest pharmacy chains, supported by a field force responsible for building relationships with healthcare professionals across territories. Performance management depended on manually compiled visit logs and sales data, reviewed at the end of each quarter. By the time insights reached leadership, the data was already three months old — making territory planning, coaching, and HCP targeting reactive instead of real time.",
    trace: 'We mapped five years of HCP visit data, sales transactions, territory structures, and CRM coverage gaps to identify where decisions were being delayed and where field opportunities were being missed.',
    integrate: 'We designed an Agentic AI platform on Snowflake and AWS, with autonomous agents for segmentation, pattern detection, performance scoring, and territory-level opportunity discovery.',
    amplify: 'A GenAI recommendation engine translated analytics into plain-language weekly plans, giving representatives targeted actions, managers early risk signals, and leadership a faster view of field performance.',
    outcomes: [
      'Insight cycle compressed from 3 months to 7–15 days',
      'AI-powered field coaching activated across the field force',
      'Smart HCP targeting enabled for high-potential professionals',
      'Early risk detection surfaced performance declines before quarterly impact',
      'Autonomous opportunity discovery identified untapped territories and market potential',
    ],
    ctaLabel: 'Read the full Rexall case study →', ctaLink: '/case-studies/autonomous-field-intelligence-rexall',
  },
  {
    id: 'sa-insurer', sector: 'Life & Short-Term Insurance',
    client: 'Hollard',
    title: 'End-to-End Agentic AI for Insurance Operations',
    logo: hollardLogo, logoHeight: 52,
    context: "Hollard operates across Life and short-term insurance lines, where claims processing involved manual document review, fragmented systems, reactive fraud checks, and long assessment cycles. Only a limited share of claims moved straight through without intervention, while strict POPIA and GDPR obligations required every AI-led decisioning capability to be secure, explainable, and governed from the start.",

  trace: "We mapped the claims journey end to end, identifying fragmented document flows, post-payment fraud detection gaps, dark data sources, and manual bottlenecks across FNOL, assessment, decisioning, and settlement.",

  integrate: "We deployed an Agentic AI platform on Azure AI Foundry, replacing legacy OCR with Document Intelligence and orchestrating agents for document intake, fraud networks, claims decisioning, and revenue intelligence.",

  amplify: "The platform was rolled out in phases across Life and Insure operations, with governance controls, compliance guardrails, and WhatsApp-led workflows embedded into the claims operating model.",

  outcomes: [
    'Claims STP lifted from 18% to 44%',
    'Motor assessment turnaround reduced by 3 working days',
    'Cost savings of R285 per motor assessment through workflow optimization',
    'Fraud syndicates surfaced pre-payment using ML network graph analysis',
    '10+ AI use cases deployed into production across Life and Insure',
    'Dark data transformed into live revenue and broker intelligence',
  ],
    ctaLabel: 'Read the full Hollard case study →', ctaLink: '/case-studies/enterprise-ai-architecture-governance',
  },
  {
    id: 'creditas', sector: 'Finance & Digital Lending',
    client: 'Creditas',
    title: 'Embedded Agentic AI Across the Customer Lifecycle',
    logo: creditasLogo, logoHeight: 50,
    context: "Creditas runs digital lending journeys across acquisition, account management, and collections. While the web experiences were polished, many meaningful customer interactions still required live-agent support for guidance, clarification, or execution. This created high support load, repetitive query volume, journey drop-offs, and missed opportunities for timely, personalized offers.",

  trace: "We audited the full customer lifecycle to identify where live-agent dependency, repetitive queries, fragmented journeys, and missed personalization moments were creating bottlenecks and revenue leakage.",

  integrate: "We designed a journey-aware Agentic AI layer using RAG for grounded responses, MCP-enabled platform actions, and human-in-the-loop checkpoints for compliance-sensitive interactions.",

  amplify: "The platform embedded agents across acquisition, servicing, help desk, and operations — enabling users to detect intent, receive recommendations, execute actions, and learn continuously within strict guardrails.",

  outcomes: [
    '60%+ reduction in live-agent hand-offs',
    '25–30% lift in offer conversion through context-rich personalization',
    'Average query resolution reduced to under 30 seconds',
    '80%+ first-contact resolution on RAG-grounded help-desk queries',
    '70%+ routine platform operations automated through MCP-enabled actions',
    'Scalable agentic foundation embedded across the customer lifecycle',
  ],
    ctaLabel: 'Read the full Creditas case study →', ctaLink: '/case-studies/agentic-ai-for-digital-lending',
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
          ? 'rgba(255,255,255,0.13)'
          : hov ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${
          isActive
            ? 'rgba(255,255,255,0.28)'
            : hov ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.1)'
        }`,
        boxShadow: isActive
          ? '0 8px 28px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.08)'
          : hov ? '0 4px 16px rgba(0,0,0,0.14)' : 'none',
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
      <p className="text-label" style={{
        color: isActive
          ? 'var(--color-accent)'
          : hov ? 'var(--color-accent)' : 'var(--color-primary)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        margin: '0 0 4px',
        transition: 'color 0.28s ease',
        fontWeight:600
      }}>
        {cs.sector}
      </p>
      <p className="text-body-sm" style={{
        color: isActive
          ? 'var(--color-text-white)'
          : hov ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.68)',
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
        color: 'var(--color-accent)',
        letterSpacing: '0.14em',
        fontWeight: 600,
      }}>
        TIA LENS — {label.toUpperCase()}
      </p>
      <p className="text-body-sm" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, margin: 0 }}>
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
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '200px',
              height: '76px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.94)',
              boxShadow: '0 2px 16px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.12)',
              marginBottom: '16px',
              border: '1px solid rgba(255,255,255,0.6)',
              padding: '0 20px',
              boxSizing: 'border-box',
            }}>
              <img
                src={cs.logo}
                alt={cs.client}
                style={{ height: `${cs.logoHeight || 48}px`, width: '100%', objectFit: 'contain', display: 'block' }}
              />
            </div>
          )}
          <p className="text-label mb-2" style={{ color: 'var(--color-highlight)', letterSpacing: '0.14em', fontWeight: 600 }}>
            {cs.sector}
          </p>
          <h3 className="text-h2" style={{ color: 'var(--color-text-white)', fontWeight: 600, lineHeight: 1.2, marginBottom: 0 }}>
            {cs.client} — {cs.title}
          </h3>
        </div>

        {/* Context */}
        <p className="text-body-lg" style={{
          color: 'rgba(255,255,255,0.82)',
          lineHeight: 1.8,
          borderLeft: '3px solid var(--color-accent)',
          paddingLeft: '18px',
          margin: 0,
        }}>
          {cs.context}
        </p>

        {/* TIA lens rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
          {[
            { key: 'trace', label: 'Trace', text: cs.trace },
            { key: 'integrate', label: 'Integrate', text: cs.integrate },
            { key: 'amplify', label: 'Amplify', text: cs.amplify },
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
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.12)',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}>
          <p className="text-label mb-4" style={{ color: 'var(--color-accent)', letterSpacing: '0.14em', flexShrink: 0 }}>
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
                <span style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '3px', fontSize: '13px', fontWeight: 700 }}>✓</span>
                <span className="text-body-sm" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.65 }}>{o}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          to={cs.ctaLink}
          style={{
            fontFamily: 'var(--font-accent)', fontSize: '14px', letterSpacing: '0.07em',
            color: 'var(--color-accent)', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            transition: 'color 0.2s ease, gap 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-highlight)'; e.currentTarget.style.gap = '10px' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-accent)'; e.currentTarget.style.gap = '6px' }}
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
        className={`py-16 px-5 md:px-10 lg:px-16 ${inView ? 'cs-running' : 'cs-paused'}`}
        style={{ background: 'var(--color-secondary)' }}
      >
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>

          {/* Header */}
          <div className="mb-10">
            <p className="cs-eyebrow text-h4 mb-1" style={{ color: 'var(--color-highlight)' }}>TIA in Action</p>
            <h2 className="cs-heading text-h1" style={{ color: 'var(--color-text-white)', lineHeight: 1.2 }}>
              Where TIA creates measurable <br /> enterprise outcomes. 
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
