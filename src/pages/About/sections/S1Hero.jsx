import aboutBg from '../../../assets/images/about-us.jpg'

function S1Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-black/60" />

      {/* Content */}
      <div className="absolute z-10 left-[10%] top-[60%] -translate-y-1/2">

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
