import heroBg from '../../../assets/images/join-us-cover.png'

function S1Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <style>{`
        @media (min-width: 1440px) {
          .joinus-hero-xl { left: calc((100vw - 1280px) / 2 + 64px) !important; }
        }
      `}</style>

      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
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


      {/* Content */}
      <div className="absolute z-10 left-[10%] top-[60%] -translate-y-1/2 max-w-2xl joinus-hero-xl">

        <h1 className="text-display text-white mb-4 leading-tight">
          Build With{' '}
          <span  style={{ color: '#7dd3c0' }}>
            Us
          </span>
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '17px',
          lineHeight: 1.6,
          fontWeight: 400,
          color: 'rgba(255,255,255,0.99)',
          maxWidth: 'min(540px, 100%)',
          marginBottom: '40px',
          letterSpacing: '-0.005em',
          textShadow: '0 2px 16px rgba(0, 0, 0, 0.5)',
        }}>
          We hire people who care about outcomes, not just output — and who want
          to leave real systems better than they found them.
        </p>

      </div>

    </section>
  )
}

export default S1Hero
