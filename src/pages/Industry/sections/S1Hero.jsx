import heroBg from '../../../assets/images/industry-cover.jpg'

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
      <div className="absolute inset-0 z-0 bg-black/60" />

      {/* Content */}
      <div className="absolute z-10 left-[10%] top-[60%] -translate-y-1/2 max-w-2xl">

        <h1 className="text-display text-white mb-4 leading-tight">
          Every{' '}
          <span className="italic" style={{ color: 'var(--color-accent)' }}>
            Industry
          </span>
          ,<br />One Standard
        </h1>

        <p className="text-h4" style={{ color: 'rgba(255,255,255,0.8)' }}>
          We bring the same depth of enterprise thinking to every sector —
          from banking and healthcare to logistics and beyond.
        </p>

      </div>

    </section>
  )
}

export default S1Hero
