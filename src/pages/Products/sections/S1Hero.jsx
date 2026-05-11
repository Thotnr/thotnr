import coverVideo from '../../../assets/videos/products-cover.mp4'

function S1Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <style>{`
        @keyframes prodHeroIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .prod-hero-content {
          animation: prodHeroIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both;
        }
      `}</style>

      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center center', filter: 'brightness(0.78) contrast(1.05)' }}
        src={coverVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Layer 1: Left-to-right gradient — dark on left where content lives */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          pointerEvents: 'none',
          background: 'linear-gradient(to right, rgba(1,7,22,0.88) 0%, rgba(1,7,22,0.65) 25%, rgba(1,7,22,0.30) 55%, rgba(1,7,22,0.08) 80%, rgba(1,7,22,0) 100%)',
        }}
      />

      {/* Layer 2: Mobile flat overlay — gradient alone is too subtle on small screens */}
      <div
        className="block lg:hidden absolute inset-0 z-[1]"
        style={{ pointerEvents: 'none', background: 'rgba(1,7,22,0.48)' }}
      />

      {/* Layer 3: Bottom vignette */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          pointerEvents: 'none',
          background: 'linear-gradient(to top, rgba(1,7,22,0.60) 0%, transparent 38%)',
        }}
      />

      {/* Layer 4: Top vignette */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          pointerEvents: 'none',
          background: 'linear-gradient(to bottom, rgba(1,7,22,0.40) 0%, transparent 22%)',
        }}
      />

      {/* Content */}
      <div className="prod-hero-content absolute z-10 left-[6%] md:left-[10%] top-[58%] -translate-y-1/2">
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
            Our Products
          </span>
        </div>

        <h1 className="text-display text-white leading-tight mb-6" style={{ maxWidth: '600px' }}>
          Intelligence
          <br />
          <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>
            Productised
          </em>
        </h1>

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
          Enterprise products built on deep domain intelligence —
          from hospitality to smart infrastructure.
        </p>
      </div>
    </section>
  )
}

export default S1Hero
