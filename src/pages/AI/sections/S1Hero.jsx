import aiCoverVideo from '../../../assets/videos/ai-cover.mp4'

function S1Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '100dvh', background: 'var(--color-secondary)' }}
    >
      <style>{`
        @keyframes sdHeroIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sd-hero-anim {
          animation: sdHeroIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
        }
        .sd-hero-pos {
          position: absolute;
          left: 6%;
          right: 6%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }
        @media (min-width: 768px) {
          .sd-hero-pos {
            left: 8%;
            right: auto;
            top: 50%;
            transform: translateY(-50%);
            max-width: 480px;
          }
        }
        @media (min-width: 1024px) {
          .sd-hero-pos {
            left: 10%;
            right: auto;
            top: 30%;
            transform: translateY(-50%);
            max-width: 560px;
          }
        }
      `}</style>

      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={aiCoverVideo}
        autoPlay
        muted
        loop
        playsInline
        style={{ objectPosition: 'center center', filter: 'brightness(0.72) contrast(1.05)' }}
      />

      {/* Layer 1: Desktop left-to-right gradient */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to right, rgba(1,7,22,0.82) 0%, rgba(1,7,22,0.04) 100%)',
      }} />

      {/* Layer 2: Mobile flat overlay */}
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
      <div className="sd-hero-anim sd-hero-pos">

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '36px' }}>
          <div style={{
            width: 'clamp(28px, 4vw, 40px)',
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(168,218,220,0.9) 100%)',
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11.5px',
            fontWeight: 500,
            letterSpacing: '0.34em',
            textTransform: 'uppercase',
            color: 'rgba(168,218,220,0.9)',
          }}>
            Intelligence Augmented
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-display text-white leading-tight mb-6" style={{ maxWidth: '600px' }}>
          AI and Intelligence
        </h1>

        {/* Thin divider */}
        <div style={{
          width: '48px',
          height: '1px',
          background: 'var(--color-text-white)',
          opacity: 0.75,
          marginBottom: '20px',
        }} />

        {/* Tagline */}
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
          Intelligent systems that augment human capability, automate operations, and accelerate innovation.
        </p>

      </div>

    </section>
  )
}

export default S1Hero
