import { useEffect, useRef, useState } from 'react'
import frameworkImg from '../../../assets/images/tia-framework.png'

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

function S4Framework() {
  const [sectionRef, inView] = useInView(0.06)

  return (
    <>
      <style>{`
        @keyframes fw4FadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fw4ImgReveal {
          from { opacity: 0; transform: translateY(28px); filter: blur(8px); }
          to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
        }

        .fw4-header { animation: fw4FadeUp     0.75s cubic-bezier(0.16,1,0.3,1) 0.10s both; }
        .fw4-img    { animation: fw4ImgReveal  1.0s  cubic-bezier(0.16,1,0.3,1) 0.28s both; }

        .fw4-paused .fw4-header,
        .fw4-paused .fw4-img  { opacity: 0; animation-play-state: paused; }

        .fw4-running .fw4-header,
        .fw4-running .fw4-img { animation-play-state: running; }

        @media (min-width: 1440px) {
          .fw4-img {
            max-width: 1408px;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fw4-header, .fw4-img {
            animation: none !important; opacity: 1 !important;
            filter: none !important; transform: none !important;
          }
        }
      `}</style>

      <section
        id="tia-framework"
        ref={sectionRef}
        className={`bg-[var(--color-primary)] ${inView ? 'fw4-running' : 'fw4-paused'}`}
        style={{  display: 'flex', flexDirection: 'column', paddingTop: '64px', paddingBottom: '40px' }}
      >
        {/* Header */}
        <div className="fw4-header px-5 md:px-10 lg:px-16 mb-8" style={{ flexShrink: 0 }}>
          <div className="max-w-7xl mx-auto">
            <p className="text-h4 text-[var(--color-highlight)] mb-2">
              The TIA Framework
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <h2
                className="text-h1 text-[var(--color-text-primary)]"
                style={{ lineHeight: 1.2 }}
              >
                One picture. Three phases. Three capabilities.
              </h2>
              
            </div>
            <p
                className="text-body-sm mt-4"
                style={{
                  color: 'var(--color-text-primary)',
                  maxWidth: '660px',
                  lineHeight: 1.75,
                  flexShrink: 0,
                }}
              >
TIA connects how intelligence is shaped with where it creates value — from enterprise data reality to decisions, workflows, and measurable growth.              </p>
          </div>
        </div>

        {/* Image — fills remaining viewport height, full content visible */}
        <div
          className="fw4-img px-5 md:px-10 lg:px-16"
          style={{ flex: 1, minHeight: 0, lineHeight: 0, overflow: 'hidden' }}
        >
          <img
            src={frameworkImg}
            alt="TIA Framework Diagram"
            style={{
              width: '100%',
              height: 'auto',
              display: 'contain',
              borderRadius: '16px',
            }}
          />
        </div>
      </section>
    </>
  )
}

export default S4Framework
