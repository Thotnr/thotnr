import heroBg from '../../../assets/images/insights-cover.jpg'

function S1Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="absolute inset-0 z-0 bg-black/65" />

      <div className="absolute z-10 left-[10%] top-[60%] -translate-y-1/2 max-w-2xl">
        <h1 className="text-display text-white mb-4 leading-tight">
          Thinking{' '}
          <span className="italic" style={{ color: 'var(--color-accent)' }}>
            Out Loud
          </span>
        </h1>
        <p className="text-h4" style={{ color: 'rgba(255,255,255,0.8)' }}>
          Perspectives on AI, enterprise technology, and the future of
          intelligent organisations — from the people building them.
        </p>
      </div>

    </section>
  )
}

export default S1Hero
