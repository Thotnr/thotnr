import servicesBg from '../../../assets/images/offer-service.jpg'

function S1Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${servicesBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-black/60" />

      {/* Content */}
      <div className="absolute z-10 left-[10%] top-[60%] -translate-y-1/2">

        <h1 className="text-display text-white mb-4 leading-tight max-w-xl">
          Built to{' '}
          <span className="italic" style={{ color: 'var(--color-accent)' }}>
            Deliver
          </span>
        </h1>

        <p className="text-h4 max-w-lg" style={{ color: 'rgba(255,255,255,0.8)' }}>
          End-to-end capabilities across AI, architecture, and cloud.
        </p>

      </div>

    </section>
  )
}

export default S1Hero
