import heroBg from '../../../assets/images/life-at-thotnr-2.jpg'

function S1Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-black/65" />

      {/* Content */}
      <div className="absolute z-10 left-[10%] top-[60%] -translate-y-1/2 max-w-2xl">

        <h1 className="text-display text-white mb-4 leading-tight">
          Build With{' '}
          <span className="italic" style={{ color: 'var(--color-accent)' }}>
            Us
          </span>
        </h1>

        <p className="text-h4" style={{ color: 'rgba(255,255,255,0.8)' }}>
          We hire people who care about outcomes, not just output — and who want
          to leave real systems better than they found them.
        </p>

      </div>

    </section>
  )
}

export default S1Hero
