import coverVideo from '../../../assets/videos/case-study-cover-2.mp4'

function S1Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '100dvh', background: 'var(--color-secondary)' }}
    >
      <style>{`
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-content {
          animation: heroIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
        }
        .hero-content-pos {
          position: absolute;
          left: 6%;
          right: 6%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }
        @media (min-width: 768px) {
          .hero-content-pos {
            left: 8%;
            right: auto;
            top: 50%;
            transform: translateY(-50%);
            max-width: 480px;
          }
        }
        @media (min-width: 1024px) {
          .hero-content-pos {
            left: 10%;
            right: auto;
            top: 30%;
            transform: translateY(-50%);
            max-width: 520px;
          }
        }
      `}</style>

      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center center', filter: 'brightness(0.72) contrast(1.05)' }}
        src={coverVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Left-to-right dark overlay — content side fully dark, right opens up */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'linear-gradient(to right, rgba(0,0,0,0.73) 0%, rgba(0,0,0,0.78) 35%, rgba(0,0,0,0.65) 80%, rgba(0,0,0,0.40) 100%)',
      }} />

      {/* Bottom vignette */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 38%)',
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
            Client work
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-display text-white leading-tight mb-6" style={{ maxWidth: '600px' }}>
          Real{' '}
          <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>
           Impact
          </em>
          <br />
          Real Results
          
          
        </h1>

        {/* Thin divider */}
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
          A record of AI and technology work that moved the needle — from boardroom decision to production system.
        </p>

      </div>

    </section>
  )
}

export default S1Hero
