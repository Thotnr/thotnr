import { useState, useEffect } from 'react'
import tiaVideo from '../../../assets/videos/tia-cover.mp4'

const PILLS = [
  {
    label: 'Foundation',
    content: 'The foundation behind TIA — data-first, outcome-led, and governed by design. We treat AI as an operating capability, not a project, built on trusted data, workflows, and accountability.',
  },
  {
    label: 'Delivery Model',
    content: 'The way we work. A three-phase engagement — Sense, Shape, Scale — that takes enterprises from data reality to production AI without sacrificing depth or governance.',
  },
  {
    label: 'Product BETA',
    content: 'Coming soon. Ask TIA — the framework, in conversation. Self-assess your AI readiness, surface opportunities, get a TIA-shaped plan on demand. Join the waitlist below.',
  },
]

function S1Hero({ onAskTIA }) {
  const [show,       setShow]       = useState(false)
  const [activePill, setActivePill] = useState(0)
  const [exploreHov, setExploreHov] = useState(false)
  const [askHov,     setAskHov]     = useState(false)
  const [pillHov,    setPillHov]    = useState(null)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <style>{`
        @keyframes s1BlurReveal {
          from { opacity: 0; filter: blur(28px); transform: scale(0.93) translateY(14px); }
          to   { opacity: 1; filter: blur(0);    transform: scale(1)    translateY(0); }
        }
        @keyframes s1FadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes s1MeshPan {
          0%   { transform: translateX(0); }
          100% { transform: translateX(56px); }
        }
        @keyframes s1ContentReveal {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .s1-eyebrow   { animation: s1FadeUp     0.5s  cubic-bezier(0.16,1,0.3,1) 0.1s  both; }
        .s1-tia       { animation: s1BlurReveal 1.15s cubic-bezier(0.16,1,0.3,1) 0.28s both; }
        .s1-subtitle  { animation: s1FadeUp     0.6s  cubic-bezier(0.16,1,0.3,1) 0.55s both; }
        .s1-tagline   { animation: s1FadeUp     0.6s  cubic-bezier(0.16,1,0.3,1) 0.72s both; }
        .s1-pills     { animation: s1FadeUp     0.65s cubic-bezier(0.16,1,0.3,1) 0.92s both; }
        .s1-dyn-wrap  { animation: s1FadeUp     0.6s  cubic-bezier(0.16,1,0.3,1) 1.08s both; }
        .s1-para      { animation: s1FadeUp     0.7s  cubic-bezier(0.16,1,0.3,1) 1.22s both; }
        .s1-ctas      { animation: s1FadeUp     0.65s cubic-bezier(0.16,1,0.3,1) 1.38s both; }
        .s1-mesh      { animation: s1MeshPan    22s   linear 0s infinite alternate; }

        .s1-dynamic-content {
          animation: s1ContentReveal 0.32s cubic-bezier(0.16,1,0.3,1) both;
        }

        .s1-paused .s1-eyebrow, .s1-paused .s1-tia, .s1-paused .s1-subtitle,
        .s1-paused .s1-tagline, .s1-paused .s1-pills, .s1-paused .s1-dyn-wrap,
        .s1-paused .s1-para, .s1-paused .s1-ctas {
          opacity: 0; animation-play-state: paused;
        }
        .s1-running .s1-eyebrow, .s1-running .s1-tia, .s1-running .s1-subtitle,
        .s1-running .s1-tagline, .s1-running .s1-pills, .s1-running .s1-dyn-wrap,
        .s1-running .s1-para, .s1-running .s1-ctas {
          animation-play-state: running;
        }

        .s1-pill-btn {
          transition: background 0.22s ease, border-color 0.22s ease,
                      color 0.22s ease, transform 0.18s ease, box-shadow 0.22s ease;
        }
        .s1-pill-btn:hover { transform: translateY(-1px); }

        @media (min-width: 1440px) {
          .s1-xl-pad { padding-left: calc((100vw - 1280px) / 2 + 64px) !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .s1-eyebrow, .s1-tia, .s1-subtitle, .s1-tagline, .s1-pills,
          .s1-dyn-wrap, .s1-para, .s1-ctas, .s1-dynamic-content {
            animation: none !important; opacity: 1 !important; filter: none !important;
          }
          .s1-mesh { animation: none !important; }
        }
      `}</style>

      <section
        className={show ? 's1-running' : 's1-paused'}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        {/* Video background */}
        <video
          autoPlay muted loop playsInline
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            filter: 'brightness(0.52) contrast(1.12)',
          }}
          src={tiaVideo}
        />

        {/* Left-to-right dark overlay — content side fully dark, right opens up */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'linear-gradient(to right, rgba(0,0,0,0.53) 0%, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.65) 80%, rgba(0,0,0,0.40) 100%)',
      }} />

      {/* Bottom vignette */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 38%)',
      }} />

        {/* SVG mesh */}
        <svg
          className="s1-mesh"
          style={{
            position: 'absolute', inset: 0, zIndex: 3,
            width: '130%', height: '100%',
            opacity: 0.038, pointerEvents: 'none',
          }}
          viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice"
        >
          {Array.from({ length: 15 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="800"
              stroke="var(--color-accent)" strokeWidth="1" />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 100} x2="1400" y2={i * 100}
              stroke="var(--color-accent)" strokeWidth="1" />
          ))}
        </svg>

        {/* Content */}
        <div
          className="relative s1-xl-pad"
          style={{
            zIndex: 10,
            paddingTop: 'clamp(120px, 14vw, 10%)',
            paddingBottom: 'clamp(80px, 10vw, 120px)',
            paddingLeft: 'clamp(24px, 10%, 160px)',
            paddingRight: 'clamp(24px, 5%, 80px)',
          }}
        >
          <div className="max-w-8xl mx-auto">
            <div style={{ maxWidth: 'min(1020px, 72vw)' }}>

              {/* Eyebrow */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                  <div className="hero-accent-line" style={{
                  width: 'clamp(28px, 4vw, 40px)',
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent 0%, #7dd3c0 100%)',
                }} />
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12.5px',
                  fontWeight: 500,
                  letterSpacing: '0.32em',
                  textTransform: 'uppercase',
                  color: '#7dd3c0',
                }}>
                  The Framework
                </span>
              </div>

              {/* TIA */}
              <div
                className="s1-tia"
                style={{
                  fontFamily: '"Inter", "Helvetica Neue", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  fontSize: 'clamp(72px, 12vw, 100px)',
                  fontWeight: 400,
                  lineHeight: 0.9,
                  letterSpacing: '-0.045em',
                  color: 'var(--color-text-white)',
                  marginBottom: '12px',
                  textShadow: '0 4px 50px rgba(168,218,220,0.12), 0 2px 24px rgba(0,0,0,0.6)',
                }}
              >
                TIA
              </div>

              {/* Subtitle */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(16px, 1.05vw, 24px)',
                  fontWeight: 500,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: '#7dd3c0',
                  opacity: 0.85,
                  marginBottom: '20px',
                }}
              >
                Thotnr Intelligence Augmentation
              </div>

              {/* Tagline */}
              <div
                className="s1-tagline"
                style={{
                  fontSize: 'clamp(22px, 2.6vw, 36px)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 500,
                  lineHeight: 1.45,
                  marginBottom: '36px',
                }}
              >
                <span style={{ display: 'block', color: 'var(--color-text-white)' }}>
                  A framework, a delivery model, and soon{' '}
                  <em style={{ color: 'var(--color-accent)', fontStyle: 'italic', fontFamily: 'var(--font-accent)' }}>— product</em>
                </span>
                <em style={{ display: 'block', color: 'var(--color-accent)', fontStyle: 'italic', fontFamily: 'var(--font-accent)' }}>
                  you can talk to.
                </em>
              </div>

              {/* Pills */}
              <div
                className="s1-pills"
                style={{
                  display: 'inline-flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  marginBottom: '20px',
                  padding: '6px',
                  borderRadius: '100px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                {PILLS.map((pill, i) => {
                  const isActive = activePill === i
                  const isHov    = pillHov === i
                  return (
                    <button
                      key={pill.label}
                      className="s1-pill-btn text-label"
                      onClick={() => setActivePill(i)}
                      onMouseEnter={() => setPillHov(i)}
                      onMouseLeave={() => setPillHov(null)}
                      style={{
                        padding: '10px 22px',
                        borderRadius: '100px',
                        background: isActive
                          ? 'rgba(29,53,87,0.95)'
                          : isHov
                            ? 'rgba(255,255,255,0.1)'
                            : 'transparent',
                        border: isActive
                          ? '1.5px solid rgba(168,218,220,0.55)'
                          : '1.5px solid transparent',
                        color: isActive
                          ? 'var(--color-accent)'
                          : isHov
                            ? 'rgba(255,255,255,0.9)'
                            : 'rgba(255,255,255,0.7)',
                        cursor: 'pointer',
                        letterSpacing: '0.1em',
                        fontSize: '11px',
                        whiteSpace: 'nowrap',
                        boxShadow: isActive
                          ? '0 0 20px rgba(168,218,220,0.18), inset 0 0 14px rgba(168,218,220,0.06)'
                          : 'none',
                      }}
                    >
                      {i === 2 ? (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          Product
                          <span style={{
                            background: 'var(--color-highlight)',
                            color: 'var(--color-text-white)',
                            fontSize: '7px',
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            padding: '2px 5px',
                            borderRadius: '3px',
                            lineHeight: 1.3,
                            verticalAlign: 'middle',
                          }}>
                            BETA
                          </span>
                        </span>
                      ) : pill.label}
                    </button>
                  )
                })}
              </div>

              {/* Dynamic pill content */}
              <div className="s1-dyn-wrap" style={{ marginBottom: '36px' }}>
                <div
                  key={activePill}
                  className="s1-dynamic-content"
                  style={{
                    paddingLeft: '18px',
                    borderLeft: '2px solid rgba(168,218,220,0.38)',
                  }}
                >
                  <p
                    className="text-body-lg"
                    style={{
                      color: '#e8eaed',
                      lineHeight: 1.78,
                      maxWidth: '840px',
                    }}
                  >
                    {PILLS[activePill].content}
                  </p>
                </div>
              </div>

              {/* Supporting paragraph */}
              <p
                className="s1-para text-body-lg"
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.82,
                  maxWidth: '820px',
                  marginBottom: '44px',
                }}
              >
                We build enterprise AI that is grounded in your data, embedded in your workflows, and measured by outcomes your business can defend.
              </p>

              {/* CTAs — inline row */}
              <div
                className="s1-ctas"
                style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}
              >
                <button
                  className="font-semibold"
                  onClick={() => scrollTo('tia-framework')}
                  onMouseEnter={() => setExploreHov(true)}
                  onMouseLeave={() => setExploreHov(false)}
                  style={{
                    padding: '14px 36px',
                    borderRadius: '100px',
                    background: exploreHov ? 'var(--color-text-white)' : 'var(--color-accent)',
                    color: 'var(--color-secondary)',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '15px',
                    fontWeight: 700,
                    letterSpacing: '0.01em',
                    transition: 'background 0.24s ease, transform 0.22s ease, box-shadow 0.24s ease',
                    transform: exploreHov ? 'translateY(-3px)' : 'none',
                    boxShadow: exploreHov
                      ? '0 18px 44px rgba(168,218,220,0.38)'
                      : '0 8px 26px rgba(168,218,220,0.2)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Explore the Framework ↓
                </button>

                <button
                  className="font-semibold"
                  onClick={() => scrollTo('ask-tia')}
                  onMouseEnter={() => setAskHov(true)}
                  onMouseLeave={() => setAskHov(false)}
                  style={{
                    padding: '14px 36px',
                    borderRadius: '100px',
                    background: askHov ? 'rgba(168,218,220,0.13)' : 'rgba(168,218,220,0.07)',
                    color: 'var(--color-accent)',
                    border: `1.5px solid ${askHov ? 'rgba(168,218,220,0.6)' : 'rgba(168,218,220,0.32)'}`,
                    cursor: 'pointer',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '15px',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    backdropFilter: 'blur(14px)',
                    transition: 'background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.22s ease',
                    transform: askHov ? 'translateY(-3px)' : 'none',
                    boxShadow: askHov
                      ? '0 0 36px rgba(168,218,220,0.45), 0 0 72px rgba(168,218,220,0.22)'
                      : '0 0 20px rgba(168,218,220,0.22), 0 0 42px rgba(168,218,220,0.1)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  ✦ Ask TIA
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default S1Hero
