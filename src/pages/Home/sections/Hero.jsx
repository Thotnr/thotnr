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

        @keyframes shimmerLine {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .hero-content {
          animation: heroIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
        }

        .hero-accent-line {
          animation: shimmerLine 3s ease-in-out infinite;
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
            max-width: 540px;
          }
        }

        /* Desktop */
        @media (min-width: 1024px) {
          .hero-content-pos {
            left: 10%;
            right: auto;
            top: 35%;
            transform: translateY(-50%);
            max-width: 620px;
          }
        }

        /* Mobile + Tablet video fix */
        .hero-bg-video {
          object-fit: cover;
          object-position: center center;
        }

        @media (max-width: 767px) {
          .hero-bg-video {
            object-fit: cover;
            object-position: 58% center;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-bg-video {
            object-fit: cover;
            object-position: 55% center;
          }
        }

        @media (min-width: 1024px) {
          .hero-bg-video {
            object-fit: cover;
            object-position: center center;
          }
        }
      `}</style>

      {/* Background video */}
      <video
        className="hero-bg-video absolute inset-0 w-full h-full z-0"
        style={{ filter: 'brightness(0.68) contrast(1.08) saturate(1.05)' }}
        src={heroCoverVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Layer 1: Smooth left-to-right gradient — extends fully across (100% to 0%) */}
<div style={{
  position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
  background: 'linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.88) 15%, rgba(0,0,0,0.72) 35%, rgba(0,0,0,0.50) 55%, rgba(0,0,0,0.28) 75%, rgba(0,0,0,0.10) 90%, rgba(0,0,0,0) 100%)',
}} />

{/* Layer 2: Vertical depth gradient — full width now, very subtle */}
<div style={{
  position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
  background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.45) 100%)',
}} />

{/* Layer 3: Mobile/tablet flat overlay */}
<div
  className="block lg:hidden"
  style={{
    position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
    background: 'rgba(0,0,0,0.50)',
  }}
/>

{/* Layer 4: Subtle radial darkness behind text content (left side anchor) */}
<div style={{
  position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
  background: 'radial-gradient(ellipse 60% 70% at 25% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 70%)',
}} />

      {/* Layer 5: Top vignette */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 22%)',
      }} />

      <div className="hero-content hero-content-pos">

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '36px' }}>
          <div className="hero-accent-line" style={{
            width: 'clamp(28px, 4vw, 40px)',
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, #7dd3c0 100%)',
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11.5px',
            fontWeight: 500,
            letterSpacing: '0.34em',
            textTransform: 'uppercase',
            color: '#7dd3c0',
          }}>
            Enterprise AI
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: '"Inter", "Helvetica Neue", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
          fontSize: 'clamp(38px, 6.8vw, 78px)',
          fontWeight: 600,
          lineHeight: 1.02,
          letterSpacing: '-0.04em',
          color: '#ffffff',
          marginBottom: '28px',
          textShadow: '0 4px 40px rgba(0, 0, 0, 0.6)',
        }}>
          Intelligence Augmented
        </h1>

        {/* Supporting text */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '17px',
          lineHeight: 1.6,
          fontWeight: 400,
          color: '#e8eaed',
          opacity: 0.85,
          maxWidth: 'min(540px, 100%)',
          marginBottom: '40px',
          letterSpacing: '-0.005em',
          textShadow: '0 2px 16px rgba(0, 0, 0, 0.5)',
        }}>
          Building intelligent systems where AI meets real enterprise outcomes.
        </p>

     

      </div>
    </section>
  )
}

export default Hero
