import { useEffect, useRef, useState } from 'react'
import frameworkVideo from '../../../assets/videos/TIA-framework-2.mp4'

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
        @keyframes fw4VideoReveal {
          from { opacity: 0; transform: translateY(32px) scale(0.98); filter: blur(8px); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    filter: blur(0); }
        }

        .fw4-header { animation: fw4FadeUp       0.75s cubic-bezier(0.16,1,0.3,1) 0.10s both; }
        .fw4-video  { animation: fw4VideoReveal  1.0s  cubic-bezier(0.16,1,0.3,1) 0.28s both; }

        .fw4-paused .fw4-header,
        .fw4-paused .fw4-video  { opacity: 0; animation-play-state: paused; }

        .fw4-running .fw4-header,
        .fw4-running .fw4-video { animation-play-state: running; }

        /* Desktop: 100vh, centered video at natural aspect ratio */
        @media (min-width: 768px) {
          .fw4-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
          }
          .fw4-inner {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          .fw4-header {
            width: 100%;
          }
          .fw4-video-wrap {
            width: clamp(480px, 72%, 860px);
            margin: 0 auto;
          }
          .fw4-video-wrap video {
            width: 100%;
            height: auto;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fw4-header, .fw4-video {
            animation: none !important; opacity: 1 !important;
            filter: none !important; transform: none !important;
          }
        }
      `}</style>

      <section
        id="tia-framework"
        ref={sectionRef}
        className={`fw4-section py-16 px-5 md:px-10 lg:px-16 bg-[var(--color-primary)] ${inView ? 'fw4-running' : 'fw4-paused'}`}
      >
        <div className="fw4-inner max-w-7xl mx-auto">

          {/* Header — matches S2Origin pattern */}
          <div className="fw4-header mb-8">
            <p className="text-h4 text-[var(--color-highlight)] mb-2">
              THE FRAMEWORK
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <h2
                className="text-h1 text-[var(--color-text-primary)]"
                style={{ lineHeight: 1.2 }}
              >
                One picture. Three phases. Three capabilities.
              </h2>
              <p
                className="text-body-sm"
                style={{
                  color: 'var(--color-text-tertiary)',
                  maxWidth: '260px',
                  lineHeight: 1.75,
                  flexShrink: 0,
                }}
              >
                Built on your data.<br />Measured by your growth.
              </p>
            </div>
          </div>

          {/* Video */}
          <div
            className="fw4-video fw4-video-wrap"
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(11,15,25,0.08)',
              boxShadow: '0 8px 48px rgba(11,15,25,0.1), 0 2px 16px rgba(11,15,25,0.06)',
              background: 'rgba(11,15,25,0.04)',
              lineHeight: 0,
            }}
          >
            <video
              src={frameworkVideo}
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>

        </div>
      </section>
    </>
  )
}

export default S4Framework
