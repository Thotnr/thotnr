import coverVideo from '../../../assets/videos/about-cover.mp4'

function S1Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <style>{`
        @media (min-width: 1440px) {
          .about-hero-xl { left: calc((100vw - 1280px) / 2 + 64px) !important; }
        }
      `}</style>

      {/* Background */}
      <video
              className="absolute inset-0 w-full h-full object-cover z-0"
              style={{ objectPosition: 'center center', filter: 'brightness(0.72) contrast(1.05)' }}
              src={coverVideo}
              autoPlay
              muted
              loop
              playsInline
            />
      

      {/* Content */}
      <div className="absolute z-10 left-[10%] top-[60%] -translate-y-1/2 about-hero-xl">

        <h1 className="text-display text-white mb-4 leading-tight max-w-xl">
          We{' '}
          <span className="italic" style={{ color: 'var(--color-accent)' }}>
            Think
          </span>
          ,<br />
          Therefore We{' '}
          <span className="italic" style={{ color: 'var(--color-accent)' }}>
            Build
          </span>
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
          A team of enterprise technologists, AI practitioners, and strategic thinkers
          — united by a single mission.
        </p>

      </div>

    </section>
  )
}

export default S1Hero
