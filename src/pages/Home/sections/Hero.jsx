import { useEffect } from 'react'
import heroBg from '../../../assets/images/thotnr_ai_hero_bg.png'

function Hero() {
  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0);     }
        }
        @keyframes glowPulse {
          0%, 100% {
            text-shadow:
              1px 1px 0 var(--color-accent-sh2),
              2px 2px 0 var(--color-accent-sh3),
              3px 3px 0 var(--color-accent-sh4),
              4px 4px 12px rgba(0,0,0,0.6),
              0 0 30px rgb(var(--color-accent-rgb) / 0.3);
          }
          50% {
            text-shadow:
              1px 1px 0 var(--color-accent-sh0),
              2px 2px 0 var(--color-accent-sh2),
              3px 3px 0 var(--color-accent-sh3),
              4px 4px 0 var(--color-accent-sh4),
              5px 5px 14px rgba(0,0,0,0.6),
              0 0 55px rgb(var(--color-accent-rgb) / 0.55),
              0 0 80px rgb(var(--color-accent-rgb) / 0.2);
          }
        }
        @keyframes lineGrow {
          from { width: 0; opacity: 0; }
          to   { width: 64px; opacity: 0.6; }
        }
        @keyframes badgeFade {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1);    }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0);   opacity: 0.5; }
          50%       { transform: translateY(6px); opacity: 1;   }
        }
        @keyframes bottomFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .hero-tagline  { animation: fadeSlideDown 0.9s cubic-bezier(0.4,0,0.2,1) 0.2s both; }
        .hero-badge    { animation: badgeFade     0.8s cubic-bezier(0.4,0,0.2,1) 0.5s both; }
        .hero-headline { animation: fadeSlideUp   1s   cubic-bezier(0.4,0,0.2,1) 0.7s both; }
        .hero-sub      { animation: fadeSlideUp   1s   cubic-bezier(0.4,0,0.2,1) 0.95s both; }
        .hero-desc     { animation: bottomFadeUp  1s   cubic-bezier(0.4,0,0.2,1) 1.2s both; }
        .hero-scroll   { animation: bottomFadeUp  1s   cubic-bezier(0.4,0,0.2,1) 1.5s both; }
        .line-left     { animation: lineGrow      1s   ease 0.3s both; }
        .line-right    { animation: lineGrow      1s   ease 0.3s both; }
        .thought-word {
          display: inline-block;
          color: var(--color-accent);
        }
        .scroll-dot {
          animation: scrollBounce 1.8s ease-in-out infinite;
        }
      `}</style>

      <section className="relative h-screen w-full overflow-hidden flex flex-col">

        {/* Background */}
        <div
          className="absolute inset-0 z-0 opacity-70"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-0 bg-black/55" />

        {/* Top strip — tagline */}
        <div className="hero-tagline relative z-10 w-full flex items-center justify-center pt-32">
          <div className="flex items-center gap-3">
            <div className="line-left h-px" style={{ background: 'var(--color-accent)' }} />
            <p
              className="t-tagline m-0"
              style={{ color: 'var(--color-accent)' }}
            >
              Architect AI Together
            </p>
            <div className="line-right h-px" style={{ background: 'var(--color-accent)' }} />
          </div>
        </div>

        {/* Center — main content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">

          {/* Badge */}
          <div
            className="hero-badge inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full"
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.04)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span
              className="t-eyebrow"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              AI-First Technology Consulting
            </span>
          </div>

          {/* Main Headline — 2 lines */}
          {/* Main Headline — fixed alignment */}
          <h1
            className="hero-headline t-display m-0 mb-4"
            style={{
              color: 'var(--color-text-primary)',
              textShadow: '1px 1px 0 rgba(0,0,0,0.6), 2px 2px 0 rgba(0,0,0,0.35), 4px 4px 14px rgba(0,0,0,0.4)',
              textAlign: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            Your <span className="thought-word">Thought</span> Partner
          </h1>

          {/* Subheadline */}
          <p
            className="hero-sub t-tagline pt-4 mb-10"
            style={{
              color: 'var(--color-text-secondary)',
              textShadow: '0 1px 6px rgba(0,0,0,0.5)',
            }}
          >
            Strategy. Built. Delivered.
          </p>

        </div>

        {/* Bottom section — AI tagline + scroll */}
        <div className="relative z-10 w-full flex flex-col items-center pb-10 gap-6">

          {/* Divider */}
          <div
            className="w-full"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          />

          {/* AI tagline */}
          <p
            className="hero-desc t-hero-body text-center m-0 px-6"
            style={{
              color: 'rgb(var(--color-ink-soft-rgb) / 0.45)',
              whiteSpace: 'nowrap',
            }}
          >
            We engineer AI that works inside your real enterprise —{' '}
            <span style={{ color: 'rgb(var(--color-ink-soft-rgb) / 0.75)', fontStyle: 'italic' }}>
              not just in the demo.
            </span>
          </p>

          {/* Scroll indicator */}
          <div className="hero-scroll flex flex-col items-center gap-2">
            <span
              className="t-caption"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              Scroll
            </span>
            <div
              className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
              style={{ border: '1px solid rgba(255,255,255,0.2)' }}
            >
              <div
                className="scroll-dot w-1 h-1.5 rounded-full"
                style={{ background: 'var(--color-accent)' }}
              />
            </div>
          </div>

        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent z-10" />

      </section>
    </>
  )
}

export default Hero
