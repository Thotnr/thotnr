import coverVideo from '../../../assets/videos/ai-cover.mp4'

function S1Hero({ label, title, tagline, tags }) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '100dvh', background: 'var(--color-secondary)' }}
    >
      <style>{`
        @keyframes accDetailHeroIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .acc-detail-hero-content {
          animation: accDetailHeroIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
        }
        .acc-detail-hero-pos {
          position: absolute;
          left: 6%;
          right: 6%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }
        @media (min-width: 768px) {
          .acc-detail-hero-pos {
            left: 8%;
            right: auto;
            top: 50%;
            transform: translateY(-50%);
            max-width: 560px;
          }
        }
        @media (min-width: 1024px) {
          .acc-detail-hero-pos {
            left: 10%;
            right: auto;
            top: 20%;
            transform: translateY(-50%);
            max-width: 600px;
          }
        }
      `}</style>

      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center center', filter: 'brightness(0.65) contrast(1.08)' }}
        src={coverVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to right, rgba(1,7,22,0.86) 0%, rgba(1,7,22,0.04) 100%)',
      }} />
      <div
        className="block lg:hidden"
        style={{
          position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
          background: 'rgba(1,7,22,0.54)',
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

      <div className="acc-detail-hero-content acc-detail-hero-pos">

        {/* Label */}
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
            {label}
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily: 'var(--font-accent)',
          fontSize: 'clamp(30px, 6.5vw, 72px)',
          fontWeight: 600,
          lineHeight: 1.08,
          letterSpacing: '-0.025em',
          color: 'var(--color-text-white)',
          marginBottom: '24px',
        }}>
          {title}
        </h1>

        <div style={{
          width: '48px', height: '1px',
          background: 'var(--color-text-white)',
          opacity: 0.6,
          marginBottom: '20px',
        }} />

        {/* Tagline */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          lineHeight: 1.85,
          color: 'var(--color-text-white)',
          opacity: 0.62,
          maxWidth: 'min(420px, 100%)',
          marginBottom: '28px',
        }}>
          {tagline}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.06em',
                  padding: '5px 14px',
                  borderRadius: '999px',
                  border: '1px solid rgba(168,218,220,0.4)',
                  color: 'var(--color-accent)',
                  opacity: 0.85,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

export default S1Hero
