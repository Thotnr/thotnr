import coverImg from '../../../assets/images/our-clients.png'

function S1Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '100dvh', background: 'var(--color-secondary)' }}
    >
      <style>{`
        @keyframes clientsHeroIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .clients-hero-content {
          animation: clientsHeroIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
        }
        .clients-hero-pos {
          position: absolute;
          left: 6%;
          right: 6%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }
        @media (min-width: 768px) {
          .clients-hero-pos {
            left: 8%;
            right: auto;
            top: 50%;
            transform: translateY(-50%);
            max-width: 480px;
          }
        }
        @media (min-width: 1024px) {
          .clients-hero-pos {
            left: 13%;
            right: auto;
            top: 20%;
            transform: translateY(-50%);
            max-width: 540px;
          }
        }
        @media (min-width: 1440px) {
          .clients-hero-pos { left: calc((100vw - 1280px) / 2 + 64px); }
        }
      `}</style>

      {/* Cover image */}
      <img
        src={coverImg}
        alt="Our Clients"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center center', filter: 'brightness(0.70) contrast(1.08)' }}
      />

      {/* Layer 1: Left-to-right gradient (desktop) */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to right, rgba(1,7,22,0.88) 0%, rgba(1,7,22,0.05) 100%)',
      }} />

      {/* Layer 2: Flat overlay (mobile/tablet) */}
      <div
        className="block lg:hidden"
        style={{
          position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
          background: 'rgba(1,7,22,0.52)',
        }}
      />

      {/* Layer 3: Bottom vignette */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(1,7,22,0.65) 0%, transparent 40%)',
      }} />

      {/* Layer 4: Top vignette */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(1,7,22,0.45) 0%, transparent 25%)',
      }} />

      {/* Content */}
      <div className="clients-hero-content clients-hero-pos">

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
          <div className="hero-accent-line" style={{
            width: 'clamp(28px, 4vw, 40px)',
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, #7dd3c0 100%)',
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.23em',
            textTransform: 'uppercase',
            color: '#7dd3c0',
          }}>
            Our Network
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--font-accent)',
          fontSize: 'clamp(34px, 7.5vw, 82px)',
          fontWeight: 600,
          lineHeight: 1.06,
          letterSpacing: '-0.028em',
          color: 'var(--color-text-white)',
          marginBottom: '24px',
        }}>
          Trusted by Leading<br />
          {' '}
          <em style={{ color: '#7dd3c0' }}>
            Industry
          </em>
        </h1>

        {/* Thin divider */}
        <div style={{
          width: '48px',
          height: '1px',
          background: 'var(--color-text-white)',
          opacity: 0.70,
          marginBottom: '20px',
        }} />

        {/* Supporting text */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '17px',
          lineHeight: 1.6,
          fontWeight: 400,
          color: 'rgba(255,255,255,0.99)',
          maxWidth: 'min(540px, 100%)',
          marginBottom: '40px',
          letterSpacing: '-0.005em',
          textShadow: '0 2px 16px rgba(0, 0, 0, 0.5)',
        }}>
          From global mining groups to fast-scaling fintechs — 22+ enterprises that chose us
          for long-term impact over short-term fixes.
        </p>

      </div>
    </section>
  )
}

export default S1Hero
