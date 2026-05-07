import coverVideo from '../../../assets/videos/ai-cover.mp4'

function S1Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '100dvh', background: 'var(--color-secondary)' }}
    >
      <style>{`
        @keyframes accHeroIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .acc-hero-content {
          animation: accHeroIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
        }
        .acc-hero-pos {
          position: absolute;
          left: 6%;
          right: 6%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }
        @media (min-width: 768px) {
          .acc-hero-pos {
            left: 8%;
            right: auto;
            top: 50%;
            transform: translateY(-50%);
            max-width: 520px;
          }
        }
        @media (min-width: 1024px) {
          .acc-hero-pos {
            left: 10%;
            right: auto;
            top: 20%;
            transform: translateY(-50%);
            max-width: 560px;
          }
        }
      `}</style>

      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center center', filter: 'brightness(0.68) contrast(1.06)' }}
        src={coverVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Gradient overlays for readability */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to right, rgba(1,7,22,0.84) 0%, rgba(1,7,22,0.04) 100%)',
      }} />
      <div
        className="block lg:hidden"
        style={{
          position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
          background: 'rgba(1,7,22,0.52)',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(1,7,22,0.65) 0%, transparent 40%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(1,7,22,0.45) 0%, transparent 25%)',
      }} />

      <div className="acc-hero-content acc-hero-pos">

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
          <div style={{ width: '22px', height: '1px', background: 'var(--color-accent)', opacity: 0.5 }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.30em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            opacity: 0.82,
          }}>
            AI Accelerators
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
          Enterprise{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--color-accent)', opacity: 0.65 }}>AI</em>
          <br />
          Accelerators
        </h1>

        <div style={{
          width: '48px', height: '1px',
          background: 'var(--color-text-white)',
          opacity: 0.6,
          marginBottom: '20px',
        }} />

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          lineHeight: 1.85,
          color: 'var(--color-text-white)',
          opacity: 0.62,
          maxWidth: 'min(380px, 100%)',
        }}>
          Reusable AI solution frameworks built to solve enterprise challenges faster,
          safer, and with less implementation risk.
        </p>

      </div>
    </section>
  )
}

export default S1Hero
