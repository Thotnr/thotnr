import coverVideo from '../../../assets/videos/case-study-cover.mp4'

function S1Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <style>{`
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-content { animation: heroIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both; }
      `}</style>

      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={coverVideo}
        autoPlay
        muted
        loop
        playsInline
        style={{ filter: 'brightness(0.72) contrast(1.05)' }}
      />

      {/* Left dark → right open */}
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

      <div
        className="hero-content absolute z-10"
        style={{ left: '13%', top: '20%', transform: 'translateY(-50%)', maxWidth: '640px' }}
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
            Client Work
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--font-accent)',
          fontSize: 'clamp(44px, 5vw, 72px)',
          fontWeight: 600,
          lineHeight: 1.06,
          letterSpacing: '-0.032em',
          color: 'var(--color-text-white)',
          marginBottom: '28px',
        }}>
          Real<br />
          <em style={{ fontStyle: 'italic', color: 'var(--color-accent)', opacity: 0.62 }}>Impact,</em><br />
          Real Enterprises
        </h1>

        {/* Thin divider */}
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
          maxWidth: '400px',
        }}>
          A record of AI and technology work that moved the needle — from boardroom decision to production system.
        </p>

      </div>

    </section>
  )
}

export default S1Hero
