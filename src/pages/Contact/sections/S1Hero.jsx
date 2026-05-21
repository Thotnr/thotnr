import contactBg from '../../../assets/images/contact-cover.png'

function S1Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <style>{`
        @media (min-width: 1440px) {
          .contact-hero-xl { left: calc((100vw - 1280px) / 2 + 64px) !important; }
        }
      `}</style>

      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-black/60" />

      {/* Content */}
      <div className="absolute z-10 left-[10%] top-[60%] -translate-y-1/2 max-w-2xl contact-hero-xl">

        <h1 className="text-display text-white mb-4 leading-tight">
          Let's{' '}
          <span style={{ color: '#7dd3c0' }}>
            Connect
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
          We'd love to hear from you — whether it's a complex enterprise challenge
          or just an early-stage idea.
        </p>

      </div>

    </section>
  )
}

export default S1Hero
