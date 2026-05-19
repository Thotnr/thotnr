import { useEffect, useRef, useState } from 'react'

const PRINCIPLES = [
  { num: '01', title: 'Data before model.',                     desc: "If the data can't prove it, the model can't sustain it." },
  { num: '02', title: 'Outcomes before outputs.',               desc: 'An AI that ships is not the goal. An AI that pays back is.' },
  { num: '03', title: 'Production before pilots.',              desc: 'We engineer for the day after launch, not the demo before it.' },
  { num: '04', title: 'Discipline before demos.',               desc: 'Impressive on stage is easy. Defensible in production is the work.' },
  { num: '05', title: 'Governance by design, not by audit.',    desc: 'Risk, compliance, and oversight are built in from week one — not retrofitted.' },
  { num: '06', title: 'Workflows before features.',             desc: 'AI that fits how teams already work is the AI that gets adopted.' },
  { num: '07', title: 'AI inside the business, not beside it.', desc: 'Intelligence belongs in the operating model — not in a parallel project.' },
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

function PrincipleCard({ principle, index }) {
  const [hov, setHov] = useState(false)

  return (
    <div
      className={`s6-card s6-card-${index}${hov ? ' s6-card--hov' : ''}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.72)',
        border: `1px solid ${hov ? 'rgba(230,57,70,0.24)' : 'var(--color-divider)'}`,
        borderRadius: '6px',
        padding: 'clamp(28px, 3vw, 38px)',
        minHeight: '240px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        transform: hov ? 'translateY(-6px) scale(1.025)' : 'none',
        boxShadow: hov
          ? '0 26px 70px rgba(11,15,25,0.1)'
          : '0 20px 50px rgba(11,15,25,0.04)',
        transition: [
          'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
          'border-color 0.5s cubic-bezier(0.16,1,0.3,1)',
          'box-shadow 0.5s cubic-bezier(0.16,1,0.3,1)',
          'background 0.5s cubic-bezier(0.16,1,0.3,1)',
        ].join(', '),
      }}
    >
      {/* Number */}
      <div style={{
        fontFamily: 'var(--font-accent)',
        fontSize: 'clamp(42px, 5vw, 58px)',
        lineHeight: 1,
        fontWeight: 700,
        color: 'rgba(230,57,70,0.36)',
      }}>
        {principle.num}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(18px, 1.8vw, 23px)',
        lineHeight: 1.22,
        fontWeight: 600,
        color: 'var(--color-secondary)',
        margin: 0,
      }}>
        {principle.title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '15px',
        lineHeight: 1.65,
        color: 'var(--color-text-tertiary)',
        margin: 0,
        flexGrow: 1,
      }}>
        {principle.desc}
      </p>
    </div>
  )
}

function S6Principles() {
  const [sectionRef, inView] = useInView(0.06)

  return (
    <>
      <style>{`
        @keyframes s6FadeUp {
          from { opacity: 0; transform: translateY(28px); filter: blur(8px); }
          to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
        }
        @keyframes s6EyebrowIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .s6-eyebrow { animation: s6EyebrowIn 0.5s  cubic-bezier(0.16,1,0.3,1) 0.08s both; }
        .s6-heading { animation: s6FadeUp    0.75s cubic-bezier(0.16,1,0.3,1) 0.16s both; }
        .s6-card-0  { animation: s6FadeUp    0.7s  cubic-bezier(0.16,1,0.3,1) 0.20s both; }
        .s6-card-1  { animation: s6FadeUp    0.7s  cubic-bezier(0.16,1,0.3,1) 0.30s both; }
        .s6-card-2  { animation: s6FadeUp    0.7s  cubic-bezier(0.16,1,0.3,1) 0.40s both; }
        .s6-card-3  { animation: s6FadeUp    0.7s  cubic-bezier(0.16,1,0.3,1) 0.50s both; }
        .s6-card-4  { animation: s6FadeUp    0.7s  cubic-bezier(0.16,1,0.3,1) 0.60s both; }
        .s6-card-5  { animation: s6FadeUp    0.7s  cubic-bezier(0.16,1,0.3,1) 0.70s both; }
        .s6-card-6  { animation: s6FadeUp    0.7s  cubic-bezier(0.16,1,0.3,1) 0.80s both; }

        .s6-paused .s6-eyebrow, .s6-paused .s6-heading,
        .s6-paused .s6-card-0, .s6-paused .s6-card-1, .s6-paused .s6-card-2,
        .s6-paused .s6-card-3, .s6-paused .s6-card-4, .s6-paused .s6-card-5,
        .s6-paused .s6-card-6 {
          opacity: 0; animation-play-state: paused;
        }
        .s6-running .s6-eyebrow, .s6-running .s6-heading,
        .s6-running .s6-card-0, .s6-running .s6-card-1, .s6-running .s6-card-2,
        .s6-running .s6-card-3, .s6-running .s6-card-4, .s6-running .s6-card-5,
        .s6-running .s6-card-6 {
          animation-play-state: running;
        }

        /* Red left-border reveal on hover */
        .s6-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0;
          width: 3px; height: 100%;
          background: var(--color-highlight);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
        }
        .s6-card--hov::before {
          transform: scaleY(1);
        }

        /* Cards grid */
        .s6-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(20px, 2vw, 28px);
        }
        @media (max-width: 1024px) {
          .s6-cards-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 639px) {
          .s6-cards-grid { grid-template-columns: 1fr; }
          .s6-card { min-height: unset !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .s6-eyebrow, .s6-heading,
          .s6-card-0, .s6-card-1, .s6-card-2,
          .s6-card-3, .s6-card-4, .s6-card-5, .s6-card-6 {
            animation: none !important; opacity: 1 !important; filter: none !important;
          }
          .s6-card, .s6-card--hov { transform: none !important; }
        }
      `}</style>

      <section
        id="tia-principles"
        ref={sectionRef}
        className={`py-16 px-5 md:px-10 lg:px-16 bg-[var(--color-primary)] ${inView ? 's6-running' : 's6-paused'}`}
      >
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>

          {/* ── Header ── */}
          <div 
          className='mb-8'
          style={{ maxWidth: '920px'}}>

            {/* Eyebrow */}
            <p className="text-h4 text-[var(--color-highlight)] mb-1" >
                What We Believe
              </p>

            {/* Heading */}
            <h2 className="text-h1 text-[var(--color-text-primary)]"
              style={{
                
                lineHeight: 1.2,
                
              }}>
              <span style={{ color: 'var(--color-text-primary)' }}>
                Seven principles.{' '}
              </span>
              <span style={{
                fontFamily: 'var(--font-accent)',
                fontStyle: 'italic',
                color: 'var(--color-tertiary)',
              }}>
                One discipline.
              </span>
            </h2>
          </div>

          {/* ── Cards grid ── */}
          <div className="s6-cards-grid">
            {PRINCIPLES.map((p, i) => (
              <PrincipleCard key={p.num} principle={p} index={i} />
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default S6Principles
