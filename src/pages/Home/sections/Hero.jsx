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
              1px 1px 0 #7f0020,
              2px 2px 0 #6b001a,
              3px 3px 0 #570015,
              4px 4px 12px rgba(0,0,0,0.6),
              0 0 30px rgba(225,29,72,0.3);
          }
          50% {
            text-shadow:
              1px 1px 0 #9f0028,
              2px 2px 0 #7f0020,
              3px 3px 0 #6b001a,
              4px 4px 0 #570015,
              5px 5px 14px rgba(0,0,0,0.6),
              0 0 55px rgba(225,29,72,0.55),
              0 0 80px rgba(225,29,72,0.2);
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
              className="text-xs font-bold tracking-[0.22em] uppercase m-0"
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
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span
              className="text-xs font-semibold tracking-[0.14em] uppercase"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              AI-First Technology Consulting
            </span>
          </div>

          {/* Main Headline — 2 lines */}
          {/* Main Headline — fixed alignment */}
          <h1
            className="hero-headline font-black tracking-tight m-0 mb-4"
            style={{
              fontSize: 'clamp(52px, 7vw, 88px)',
              lineHeight: '1.05',
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
            className="hero-sub font-light tracking-[0.22em] uppercase pt-4 mb-10"
            style={{
              fontSize: 'clamp(11px, 1.3vw, 16px)',
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
            className="hero-desc font-light text-center m-0 px-6"
            style={{
              fontSize: 'clamp(13px, 1.3vw, 17px)',
              color: 'rgba(248,250,252,0.45)',
              whiteSpace: 'nowrap',         
            }}
          >
            We engineer AI that works inside your real enterprise —{' '}
            <span style={{ color: 'rgba(248,250,252,0.75)', fontStyle: 'italic' }}>
              not just in the demo.
            </span>
          </p>

          {/* Scroll indicator */}
          <div className="hero-scroll flex flex-col items-center gap-2">
            <span
              className="text-[10px] font-semibold tracking-[0.2em] uppercase"
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
