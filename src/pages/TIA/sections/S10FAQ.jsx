import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const FAQS = [
  {
    num: '01',
    q: 'How is TIA different from agile AI delivery?',
    a: 'Agile is a delivery methodology. TIA is a discipline that includes delivery — plus a worldview (data-first, outcomes-led), a governance model (built in from day one), and a future product layer (Ask TIA). Agile tells you HOW to ship. TIA tells you WHAT to build, WHY it matters, and HOW to keep it accountable.',
  },
  {
    num: '02',
    q: 'Do we need to be data-mature to start with TIA?',
    a: 'No. The Sense phase exists precisely because most enterprises aren\'t. We map your data reality — including the gaps — and tell you what\'s possible today, what needs fixing first, and where to start. Data maturity is an outcome of TIA, not a prerequisite.',
  },
  {
    num: '03',
    q: 'What does a typical TIA engagement cost?',
    a: 'Engagement sizes vary based on phase scope. Sense (4 weeks) is a fixed-scope engagement. Shape (4 weeks) builds on Sense outputs. Scale is variable based on the capability being deployed. We can scope any of these as standalone or as a full Sense → Shape → Scale sequence. Talk to us for a tailored proposal.',
  },
  {
    num: '04',
    q: 'Can we license TIA internally?',
    a: 'Today, TIA is delivered by Thotnr. We\'re not currently licensing the framework standalone. However, once Ask TIA launches (private beta in 2026), enterprise teams will be able to access the framework\'s intelligence directly through the product.',
  },
  {
    num: '05',
    q: 'Is Ask TIA a separate product?',
    a: 'Ask TIA is a product extension of the TIA framework — same discipline, same principles, accessible through conversation. Today TIA is a consulting engagement; soon it will also be a product you can talk to. Both share the same brand and worldview.',
  },
  {
    num: '06',
    q: 'How does TIA handle data security and compliance?',
    a: 'Governance is a Pillar of TIA, not an afterthought. Every engagement begins with a security and compliance review. We\'ve delivered in environments under POPIA, GDPR, HIPAA, and regional banking regulations. The TIA framework explicitly includes an \'AI Security Reference Architecture\' and a hosting decision matrix — proven across enterprise clients.',
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

function FAQRow({ faq, index, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)
  const bodyRef = useRef(null)
  const [height, setHeight] = useState(defaultOpen ? 'auto' : '0px')

  const toggle = () => {
    if (!open) {
      setOpen(true)
      setHeight(`${bodyRef.current.scrollHeight}px`)
      setTimeout(() => setHeight('auto'), 380)
    } else {
      setHeight(`${bodyRef.current.scrollHeight}px`)
      requestAnimationFrame(() => requestAnimationFrame(() => setHeight('0px')))
      setTimeout(() => setOpen(false), 380)
    }
  }

  return (
    <div
      className={`faq10-row-${index}`}
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        borderLeft: open ? '3px solid var(--color-tertiary)' : '3px solid transparent',
        background: open ? 'rgba(255,255,255,0.06)' : 'transparent',
        paddingLeft: open ? '20px' : '0',
        transition: 'border-left-color 0.25s ease, background 0.25s ease, padding-left 0.25s ease',
      }}
    >
      <button
        onClick={toggle}
        style={{
          width: '100%', display: 'flex', alignItems: 'flex-start',
          justifyContent: 'space-between', gap: '16px',
          padding: '26px 0',
          background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flex: 1, minWidth: 0 }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.1em',
            color: open ? 'var(--color-tertiary)' : 'var(--color-highlight)',
            flexShrink: 0, paddingTop: '3px',
            transition: 'color 0.22s ease',
            fontWeight: 500
          }}>
            {faq.num}
          </span>
          <h4
            className="text-h3"
            style={{
              color: open ? 'var(--color-text-white)' : 'rgba(255,255,255,0.80)',
              fontWeight: 600, margin: 0, lineHeight: 1.3,
              transition: 'color 0.22s ease',
            }}
          >
            {faq.q}
          </h4>
        </div>

        <span style={{
          flexShrink: 0,
          width: '26px', height: '26px', borderRadius: '50%',
          border: `1.5px solid ${open ? 'var(--color-tertiary)' : 'rgba(255,255,255,0.22)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: open ? 'var(--color-tertiary)' : 'rgba(255,255,255,0.45)',
          fontSize: '17px', lineHeight: 1,
          transform: open ? 'rotate(45deg)' : 'rotate(0)',
          transition: 'all 0.28s cubic-bezier(0.16,1,0.3,1)',
        }}>
          +
        </span>
      </button>

      <div
        ref={bodyRef}
        style={{
          height, overflow: 'hidden',
          transition: 'height 0.38s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <p
          className="text-body"
          style={{
            color: 'rgba(255,255,255,0.78)', lineHeight: 1.85,
            padding: '0 0 26px 36px', margin: 0,
          }}
        >
          {faq.a}
        </p>
      </div>
    </div>
  )
}

function S10FAQ() {
  const [sectionRef, inView] = useInView(0.06)

  return (
    <>
      <style>{`
        @keyframes faq10FadeUp { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
        .faq10-header   { animation: faq10FadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.1s  both; }
        .faq10-row-0    { animation: faq10FadeUp 0.65s cubic-bezier(0.16,1,0.3,1) 0.20s both; }
        .faq10-row-1    { animation: faq10FadeUp 0.65s cubic-bezier(0.16,1,0.3,1) 0.30s both; }
        .faq10-row-2    { animation: faq10FadeUp 0.65s cubic-bezier(0.16,1,0.3,1) 0.40s both; }
        .faq10-row-3    { animation: faq10FadeUp 0.65s cubic-bezier(0.16,1,0.3,1) 0.50s both; }
        .faq10-row-4    { animation: faq10FadeUp 0.65s cubic-bezier(0.16,1,0.3,1) 0.60s both; }
        .faq10-row-5    { animation: faq10FadeUp 0.65s cubic-bezier(0.16,1,0.3,1) 0.70s both; }
        .faq10-cta      { animation: faq10FadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.80s both; }
        .faq10-paused .faq10-header, .faq10-paused .faq10-row-0, .faq10-paused .faq10-row-1,
        .faq10-paused .faq10-row-2,  .faq10-paused .faq10-row-3, .faq10-paused .faq10-row-4,
        .faq10-paused .faq10-row-5,  .faq10-paused .faq10-cta  { opacity:0; animation-play-state:paused; }
        .faq10-running .faq10-header, .faq10-running .faq10-row-0, .faq10-running .faq10-row-1,
        .faq10-running .faq10-row-2,  .faq10-running .faq10-row-3, .faq10-running .faq10-row-4,
        .faq10-running .faq10-row-5,  .faq10-running .faq10-cta  { animation-play-state:running; }
        @media (prefers-reduced-motion:reduce) {
          .faq10-header,.faq10-row-0,.faq10-row-1,.faq10-row-2,
          .faq10-row-3,.faq10-row-4,.faq10-row-5,.faq10-cta {
            animation:none !important; opacity:1 !important;
          }
        }
      `}</style>

      <section
        id="tia-faq"
        ref={sectionRef}
        className={`py-16 px-5 md:px-10 lg:px-16 ${inView ? 'faq10-running' : 'faq10-paused'}`}
        style={{ background: 'var(--color-secondary)' }}
      >
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>

          {/* Header — left-aligned */}
          <div className="faq10-header mb-10">
            <p className="text-h4 mb-1" style={{ color: 'var(--color-highlight)' }}>Common Questions</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-h1" style={{ color: 'var(--color-text-white)', lineHeight: 1.2 }}>
                What people ask about TIA.
              </h2>
              
            </div>
          </div>

          {/* Accordion — full width */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {FAQS.map((faq, i) => (
              <FAQRow key={faq.num} faq={faq} index={i} defaultOpen={i === 0} />
            ))}
          </div>

          {/* CTA */}
          <div className="faq10-cta" style={{ marginTop: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-lg font-semibold"
              style={{
                background: 'transparent',
                color: 'var(--color-accent)',
                border: '1px solid rgba(168,218,220,0.45)',
                textDecoration: 'none',
                fontFamily: 'var(--font-heading)', fontSize: '15px',
                transition: 'background 0.22s ease, border-color 0.22s ease, color 0.22s ease',
                flexShrink: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-secondary)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(168,218,220,0.45)'; e.currentTarget.style.color = 'var(--color-accent)' }}
            >
              Talk to us
            </Link>
            
          </div>

        </div>
      </section>
    </>
  )
}

export default S10FAQ
