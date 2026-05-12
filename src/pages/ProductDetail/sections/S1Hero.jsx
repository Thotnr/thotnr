import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

function S1Hero({ product }) {
  const [logoSize, setLogoSize] = useState(124)

  return (
    <section
      className="px-6 md:px-10 lg:px-16 relative overflow-hidden flex items-center"
      style={{ background: 'var(--color-secondary)', minHeight: '100vh' }}
    >
      <style>{`
        @keyframes pdHeroFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pdLogoReveal {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes pdGlowPulse {
          0%, 100% { opacity: 0.18; }
          50%       { opacity: 0.30; }
        }
        .pdh-back    { animation: pdHeroFadeUp 0.5s ease 0.10s both; }
        .pdh-badge   { animation: pdHeroFadeUp 0.55s ease 0.22s both; }
        .pdh-name    { animation: pdHeroFadeUp 0.65s ease 0.34s both; }
        .pdh-tagline { animation: pdHeroFadeUp 0.6s ease 0.44s both; }
        .pdh-divider { animation: pdHeroFadeUp 0.5s ease 0.50s both; }
        .pdh-stat    { animation: pdHeroFadeUp 0.6s ease 0.58s both; }
        .pdh-logo    { animation: pdLogoReveal 0.9s cubic-bezier(0.16,1,0.3,1) 0.50s both; }
        .pdh-glow    { animation: pdGlowPulse 4s ease-in-out infinite; }

        .pdh-size-btn {
          width: 28px; height: 28px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(11,15,25,0.07);
          border: 1px solid rgba(11,15,25,0.12);
          color: var(--color-text-secondary);
          font-family: var(--font-heading);
          font-size: 16px; font-weight: 600; line-height: 1;
          cursor: pointer;
          transition: background 0.18s ease;
        }
        .pdh-size-btn:hover { background: rgba(11,15,25,0.14); }
      `}</style>

      {/* Radial accent glow — top right */}
      <div
        className="pdh-glow absolute pointer-events-none"
        style={{
          top: '-10%',
          right: '-5%',
          width: '55%',
          height: '120%',
          background: 'radial-gradient(ellipse at center, var(--color-accent) 0%, transparent 65%)',
          zIndex: 0,
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(29,53,87,0.5))',
          zIndex: 0,
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* 2-col: info left, logo right */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">

          {/* Left — text info */}
          <div>
            {/* Domain badge */}
            <span
              className="pdh-badge inline-block mb-6 px-4 py-1.5 rounded-full text-label"
              style={{
                color: 'var(--color-secondary)',
                background: 'var(--color-accent)',
                letterSpacing: '0.10em',
                fontWeight: 600,
              }}
            >
              {product.domain}
            </span>

            {/* Product name */}
            <h1
              className="pdh-name leading-none mb-5"
              style={{
                fontFamily: 'var(--font-accent)',
                fontSize: 'clamp(44px, 7vw, 88px)',
                fontWeight: 600,
                letterSpacing: '-0.025em',
                color: 'var(--color-text-white)',
              }}
            >
              {product.name}
            </h1>

            {/* Tagline */}
            <p
              className="pdh-tagline text-body-lg mb-8"
              style={{
                color: 'rgba(255,255,255,0.62)',
                fontStyle: 'italic',
                lineHeight: 1.6,
                maxWidth: '480px',
              }}
            >
              {product.tagline}
            </p>

            {/* Divider */}
            <div
              className="pdh-divider mb-8"
              style={{ width: '48px', height: '1px', background: 'rgba(255,255,255,0.25)' }}
            />

            {/* Stat */}
            <div className="pdh-stat">
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  fontWeight: 800,
                  lineHeight: 1,
                  color: 'var(--color-text-white)',
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                {product.stat.number}
              </span>
              <span
                className="text-label"
                style={{ color: 'rgba(255,255,255,0.42)', letterSpacing: '0.12em' }}
              >
                {product.stat.label}
              </span>
            </div>
          </div>

          {/* Right — logo showcase */}
          <div className="pdh-logo flex items-center justify-center lg:justify-end">
            <div
              className="relative flex flex-col items-center justify-center rounded-2xl w-full"
              style={{
                background: '#ffffff',
                boxShadow: '0 24px 64px rgba(0,0,0,0.28), 0 4px 20px rgba(0,0,0,0.14)',
                maxWidth: '340px',
                aspectRatio: '4/3',
                padding: '40px',
              }}
            >
              <img
                src={product.logo}
                alt={product.name}
                style={{
                  maxHeight: `${logoSize}px`,
                  maxWidth: `${Math.round(logoSize * 2.2)}px`,
                  objectFit: 'contain',
                  transition: 'max-height 0.25s ease, max-width 0.25s ease',
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default S1Hero
