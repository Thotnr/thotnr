import heroCoverVideo from '../../../assets/videos/home-cover.mp4'

function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: '100vh',
        minHeight: '100dvh',
        background: 'var(--color-secondary)',
      }}
    >
      <style>{`
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-content {
          animation: heroIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
        }

        /* Mobile — vertically centered, full width */
        .hero-content-pos {
          position: absolute;
          left: 6%;
          right: 6%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }

        /* Tablet */
        @media (min-width: 768px) {
          .hero-content-pos {
            left: 8%;
            right: auto;
            top: 50%;
            transform: translateY(-50%);
            max-width: 480px;
          }
        }

        /* Desktop — pixel-identical to original */
        @media (min-width: 1024px) {
          .hero-content-pos {
            left: 13%;
            right: auto;
            top: 20%;
            transform: translateY(-50%);
            max-width: 520px;
          }
        }

        /* Mobile + Tablet video fix only */
.hero-bg-video {
  object-fit: cover;
  object-position: center center;
}

/* Mobile */
@media (max-width: 767px) {
  .hero-bg-video {
    object-fit: cover;
    object-position: 58% center;
  }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  .hero-bg-video {
    object-fit: cover;
    object-position: 55% center;
  }
}

/* Desktop untouched */
@media (min-width: 1024px) {
  .hero-bg-video {
    object-fit: cover;
    object-position: center center;
  }
}
      `}</style>

      {/* Background video */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center center', filter: 'brightness(0.72) contrast(1.05)' }}
        src={heroCoverVideo}
        autoPlay
        muted
        loop
        playsInline
      /> */}

      <video
  className="hero-bg-video absolute inset-0 w-full h-full z-0"
  style={{ filter: 'brightness(0.72) contrast(1.05)' }}
  src={heroCoverVideo}
  autoPlay
  muted
  loop
  playsInline
/>

      {/* Layer 1: Desktop left-to-right gradient */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to right, rgba(1,7,22,0.82) 0%, rgba(1,7,22,0.04) 100%)',
      }} />

      {/* Layer 2: Mobile/tablet flat overlay */}
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

      {/* Layer 4: Top vignette — keeps navbar area always dark */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(1,7,22,0.45) 0%, transparent 25%)',
      }} />

      {/* Content — z-index 10, above all gradient layers */}
      <div className="hero-content hero-content-pos">

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
          <div style={{
            width: 'clamp(14px, 3vw, 22px)',
            height: '1px',
            background: 'var(--color-accent)',
            opacity: 0.5,
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.30em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            opacity: 0.78,
          }}>
            Enterprise AI
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--font-accent)',
          fontSize: 'clamp(36px, 8.5vw, 92px)',
          fontWeight: 600,
          lineHeight: 1.02,
          letterSpacing: '-0.036em',
          color: 'var(--color-text-white)',
          marginBottom: '28px',
        }}>
          Your<br />
          <em style={{ fontStyle: 'italic', color: 'var(--color-accent)', opacity: 0.82 }}>
            Thought
          </em><br />
          Partner
        </h1>

        {/* Divider */}
        <div style={{
          width: '48px',
          height: '1px',
          background: 'var(--color-text-white)',
          opacity: 0.75,
          marginBottom: '20px',
        }} />

        {/* Supporting text */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          lineHeight: 1.85,
          color: 'var(--color-text-white)',
          opacity: 0.62,
          maxWidth: 'min(360px, 100%)',
          marginBottom: '32px',
        }}>
          Building intelligent systems where AI meets real enterprise needs.
        </p>

      </div>
    </section>
  )
}

export default Hero
