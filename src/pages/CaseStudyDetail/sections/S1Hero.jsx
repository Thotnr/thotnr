function S1Hero({ data }) {
  const hasVideo = Boolean(data.coverVideo)
  return (
    <section className="relative w-full" style={{ height: '100vh' }}>

      {hasVideo ? (
        <>
          {/* Video background — Home-hero treatment */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src={data.coverVideo}
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
        </>
      ) : (
        <>
          {/* Image background — existing style, unchanged */}
          <img
            src={data.coverImg}
            alt={data.coverTagline}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.20) 100%),
                linear-gradient(to bottom, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.30) 100%)
              `,
            }}
          />
        </>
      )}

      {/* Content — identical for both video and image paths */}
      <div
        className="absolute flex flex-col gap-5 z-10"
        style={{ top: '60%', left: '10%', right: '10%', transform: 'translateY(-50%)' }}
      >
        <h1
         style={{
          fontFamily: 'var(--font-accent)',
          fontSize: 'clamp(36px, 8.5vw, 72px)',
          fontWeight: 600,
          lineHeight: 1.06,
          letterSpacing: '-0.032em',
          color: 'var(--color-text-white)',
          marginBottom: '28px',
         
        }}
        >
          {data.coverTagline}
        </h1>
        <p
          className="text-h4"
          style={{ color: 'rgba(255,255,255,0.78)', maxWidth: '560px' }}
        >
          {data.coverSubheadline}
        </p>
      </div>

    </section>
  )
}

export default S1Hero
