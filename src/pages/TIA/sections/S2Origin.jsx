import { useEffect, useRef, useState } from 'react'
import harirajImg from '../../../assets/images/hariraj-colored.png'
import gauravImg   from '../../../assets/images/gaurav-verma-colored.png'
import sanjayImg   from '../../../assets/images/sanjay-gupta-colored.png'

const FOUNDERS = [
  { name: 'HARIRAJ SINGH',     img: harirajImg },
  { name: 'SANJAY GUPTA',      img: sanjayImg   },
  { name: 'GAURAV VERMA', img: gauravImg  },
]

const PARAGRAPHS = [
  'Across 20+ enterprise AI engagements — spanning pharma, financial services, insurance, and digital lending — we saw the same pattern repeat:',
  "Models worked in demos. Pilots didn't reach scale. Production rarely arrived. Quarters passed. Budgets stretched. Outcomes stayed promised, not delivered.",
  'We stopped blaming the model. We started fixing the framework around it — the data discipline, the delivery rhythm, the governance, the way intelligence was embedded into how the business actually operated.',
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

function S2Origin() {
  const [sectionRef, inView] = useInView(0.08)

  return (
    <>
      <style>{`
        /* ── Keyframes ── */
        @keyframes s2LineGrow {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }
        @keyframes s2FadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes s2BlurReveal {
          from { opacity: 0; filter: blur(16px); transform: translateY(18px) scale(0.98); }
          to   { opacity: 1; filter: blur(0);    transform: translateY(0)    scale(1); }
        }
        @keyframes s2GlowIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes s2PhotoIn {
          from { opacity: 0; transform: translateY(28px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }

        /* ── Assignments ── */
        .s2-eyebrow-line { animation: s2LineGrow   0.55s cubic-bezier(0.16,1,0.3,1) 0.1s  both; }
        .s2-eyebrow-text { animation: s2FadeUp     0.5s  cubic-bezier(0.16,1,0.3,1) 0.52s both; }
        .s2-heading      { animation: s2BlurReveal 1.1s  cubic-bezier(0.16,1,0.3,1) 0.28s both; }
        .s2-para-0       { animation: s2FadeUp     0.7s  cubic-bezier(0.16,1,0.3,1) 0.58s both; }
        .s2-para-1       { animation: s2FadeUp     0.7s  cubic-bezier(0.16,1,0.3,1) 0.72s both; }
        .s2-para-2       { animation: s2FadeUp     0.7s  cubic-bezier(0.16,1,0.3,1) 0.86s both; }
        .s2-closing      { animation: s2GlowIn     0.75s cubic-bezier(0.16,1,0.3,1) 1.04s both; }
        .s2-photo-0      { animation: s2PhotoIn    0.75s cubic-bezier(0.16,1,0.3,1) 0.44s both; }
        .s2-photo-1      { animation: s2PhotoIn    0.75s cubic-bezier(0.16,1,0.3,1) 0.58s both; }
        .s2-photo-2      { animation: s2PhotoIn    0.75s cubic-bezier(0.16,1,0.3,1) 0.72s both; }
        .s2-names        { animation: s2FadeUp     0.6s  cubic-bezier(0.16,1,0.3,1) 0.9s  both; }
        .s2-quote        { animation: s2FadeUp     0.8s  cubic-bezier(0.16,1,0.3,1) 1.1s  both; }

        /* ── Paused state ── */
        .s2-paused .s2-eyebrow-line,
        .s2-paused .s2-eyebrow-text,
        .s2-paused .s2-heading,
        .s2-paused .s2-para-0,
        .s2-paused .s2-para-1,
        .s2-paused .s2-para-2,
        .s2-paused .s2-closing,
        .s2-paused .s2-photo-0,
        .s2-paused .s2-photo-1,
        .s2-paused .s2-photo-2,
        .s2-paused .s2-names,
        .s2-paused .s2-quote {
          opacity: 0; animation-play-state: paused;
        }

        /* ── Running state ── */
        .s2-running .s2-eyebrow-line,
        .s2-running .s2-eyebrow-text,
        .s2-running .s2-heading,
        .s2-running .s2-para-0,
        .s2-running .s2-para-1,
        .s2-running .s2-para-2,
        .s2-running .s2-closing,
        .s2-running .s2-photo-0,
        .s2-running .s2-photo-1,
        .s2-running .s2-photo-2,
        .s2-running .s2-names,
        .s2-running .s2-quote {
          animation-play-state: running;
        }

        /* ── Founder portrait hover ── */
        .s2-portrait-wrap img {
          transition: transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .s2-portrait-wrap:hover img {
          transform: scale(1.04);
        }

        /* ── Responsive — tablet ── */
        @media (max-width: 1023px) {
          .s2-grid {
            grid-template-columns: 1fr !important;
            gap: 64px !important;
          }
        }

        /* ── Responsive — mobile ── */
        @media (max-width: 639px) {
          .s2-portrait-grid {
            gap: 8px !important;
          }
          .s2-quote-inner {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
          .s2-quote-mark {
            font-size: 72px !important;
            line-height: 1 !important;
          }
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .s2-eyebrow-line, .s2-eyebrow-text, .s2-heading,
          .s2-para-0, .s2-para-1, .s2-para-2, .s2-closing,
          .s2-photo-0, .s2-photo-1, .s2-photo-2,
          .s2-names, .s2-quote {
            animation: none !important; opacity: 1 !important;
            filter: none !important; transform: none !important;
          }
        }
      `}</style>

      <section
        id="tia-origin"
        ref={sectionRef}
        className={`py-16 px-5 md:px-10 lg:px-16 bg-[var(--color-primary)] ${inView ? 's2-running' : 's2-paused'}`}
      >
        <div
          className="s2-grid max-w-7xl mx-auto"
          style={{
            display: 'grid',
            gridTemplateColumns: '54fr 46fr',
            gap: 'clamp(48px, 8vw, 112px)',
            alignItems: 'center',
          }}
        >

          {/* ─────────── LEFT — Narrative ─────────── */}
          <div>

            {/* Eyebrow */}
          <div className="mb-8">
              
              <p className="text-h4 text-[var(--color-highlight)] mb-2">
            The Origin
            </p>
            <h2
              className="text-h1 text-[var(--color-text-primary)]"
              style={{
                
                lineHeight: 1.2,
                
              }}
            >
              TIA was born from a problem we kept seeing.
            </h2>
          </div>

           

            {/* Story paragraphs */}
            <div style={{ maxWidth: '540px', display: 'flex', flexDirection: 'column', gap: '0' }}>
              {PARAGRAPHS.map((text, i) => (
                <div key={i} className={`s2-para-${i}`}>
                  {i > 0 && (
                    <div style={{
                      width: '32px', height: '2px',
                      background: 'var(--color-accent)',
                      
                      margin: '16px 0',
                    }} />
                  )}
                  <p
                    className="text-body"
                    style={{
                      margin: 0,
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.82,
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}

              {/* Closing statement */}
              <p
                className="text-h3 text-[var(--color-text-primary)] mt-4"
              style={{
                
                lineHeight: 1.2,
                
              }}
              >
                That framework became TIA.
              </p>
            </div>

          </div>

          {/* ─────────── RIGHT — Visuals ─────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

            {/* Founder portraits — 3 horizontal */}
            <div
              className="s2-portrait-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
              }}
            >
              {FOUNDERS.map((founder, i) => (
                <div
                  key={founder.name}
                  className={`s2-photo-${i} s2-portrait-wrap`}
                  style={{ overflow: 'hidden', borderRadius: '10px', aspectRatio: '3/4' }}
                >
                  <img
                    src={founder.img}
                    alt={founder.name}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      display: 'block',
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Founder names row */}
            <div
              className="s2-names"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around',  }}
            >
              {FOUNDERS.map((founder, i) => (
                <span
                  key={founder.name}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <span
                    className="text-label"
                    style={{
                      color: 'var(--color-text-primary)',
                      letterSpacing: '0.18em',
                      fontWeight: 700,
                    }}
                  >
                    {founder.name}
                  </span>
                  {i < FOUNDERS.length - 1 && (
                    <span style={{ color: 'var(--color-accent)', fontSize: '14px', opacity: 0.7 }}>·</span>
                  )}
                </span>
              ))}
            </div>

            {/* Founders label */}
            <p
              className="text-body-lg"
              style={{
                margin: '-12px 0 0',
                textAlign: 'center',
                color: 'var(--color-text-tertiary)',
                letterSpacing: '0.14em',
              }}
            >
              Founders, TIA
            </p>

            {/* Quote card */}
            <div
              className="s2-quote"
              style={{
                borderRadius: '16px',
                padding: 'clamp(24px, 3.5vw, 40px)',
                background: 'rgba(255,255,255,0.72)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 24px rgba(11,15,25,0.06), 0 1px 4px rgba(11,15,25,0.04)',
                border: '1px solid rgba(11,15,25,0.06)',
              }}
            >
              <div
                className="s2-quote-inner"
                style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '16px', alignItems: 'start' }}
              >
                {/* Large quotation mark */}
                <div
                  className="s2-quote-mark"
                  aria-hidden="true"
                  style={{
                    fontFamily: 'var(--font-accent)',
                    fontSize: 'clamp(64px, 7vw, 96px)',
                    lineHeight: 0.75,
                    fontWeight: 700,
                    color: 'var(--color-accent)',
                    userSelect: 'none',
                  }}
                >
                  "
                </div>

                {/* Quote body */}
                <div>
                  <p
                    className="text-body-lg"
                    style={{
                      margin: 0,
                      color: 'var(--color-text-primary)',
                      fontStyle: 'italic',
                      lineHeight: 1.65,
                      fontWeight: 500,
                    }}
                  >
                    After the 20th pilot, we stopped blaming the model. We started fixing the framework.
                  </p>

                  <div style={{
                    width: '32px', height: '2px',
                    background: 'var(--color-accent)',
                    margin: '18px 0 12px',
                    opacity: 0.6,
                  }} />

                  <p
                    className="text-caption"
                    style={{ margin: 0, color: 'var(--color-text-secondary)', letterSpacing: '0.1em' }}
                  >
                    — HARIRAJ, <span style={{ opacity: 0.65 }}>Co-founder</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default S2Origin
