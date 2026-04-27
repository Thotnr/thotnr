import heroCoverVideo from '../../../assets/videos/home-cover.mp4'

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <style>{`
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-content { animation: heroIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both; }
      `}</style>

      {/* Background video — slightly brighter so it breathes on the right */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={heroCoverVideo}
        autoPlay
        muted
        loop
        playsInline
        style={{ filter: 'brightness(0.72) contrast(1.05)' }}
      />

      {/* Primary gradient: left dark → right open (pulled back slightly) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        background: 'linear-gradient(to right, rgba(1,7,22,0.80) 0%, rgba(1,7,22,0.04) 100%)',
      }} />

      {/* Bottom vignette */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(1,7,22,0.55) 0%, transparent 38%)',
      }} />

      

    

      {/* Content — shifted to 13% */}
      <div
        className="hero-content absolute z-10"
        style={{ left: '13%', top: '20%', transform: 'translateY(-50%)', maxWidth: '520px' }}
      >

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
          <div style={{ width: '22px', height: '1px', background: 'var(--color-accent)', opacity: 0.5 }} />
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
          fontSize: 'clamp(54px, 6.2vw, 92px)',
          fontWeight: 600,
          lineHeight: 1.02,
          letterSpacing: '-0.036em',
          color: 'var(--color-text-white)',
          marginBottom: '28px',
        }}>
          Your<br />
          <em style={{ fontStyle: 'italic', color: 'var(--color-accent)', opacity: 0.62 }}>Thought</em><br />
          Partner
        </h1>

        {/* Thin editorial divider */}
        <div style={{
          width: '32px',
          height: '1px',
          background: 'var(--color-text-white)',
          opacity: 0.15,
          marginBottom: '20px',
        }} />

        {/* Supporting text */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          lineHeight: 1.85,
          color: 'var(--color-text-white)',
          opacity: 0.62,
          maxWidth: '360px',
          marginBottom: '32px',
        }}>
          Building intelligent systems where AI meets real enterprise needs.
        </p>

      

      </div>

    </section>
  )
}

export default Hero
