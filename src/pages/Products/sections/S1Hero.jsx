import heroBg from '../../../assets/images/products/our-product-cover.jpg'

function S1Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <style>{`
        @keyframes prodHeroIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .prod-hero-content {
          animation: prodHeroIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both;
        }
      `}</style>

      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/62" />

      {/* Accent gradient — bottom edge glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: 'linear-gradient(to top, rgba(29,53,87,0.5) 0%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="prod-hero-content absolute z-10 left-[6%] md:left-[10%] top-[58%] -translate-y-1/2">
        <p
          className="text-label mb-4"
          style={{ color: 'var(--color-accent)', letterSpacing: '0.2em' }}
        >
          Our Products
        </p>

        <h1 className="text-display text-white leading-tight mb-6" style={{ maxWidth: '600px' }}>
          Intelligence,
          <br />
          <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>
            Productised.
          </em>
        </h1>

        <p className="text-h4 max-w-lg" style={{ color: 'rgba(255,255,255,0.72)' }}>
          Enterprise products built on deep domain intelligence —
          from hospitality to smart infrastructure.
        </p>
      </div>
    </section>
  )
}

export default S1Hero
