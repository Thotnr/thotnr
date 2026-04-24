import heroBg from '../../../assets/images/thotnr_bg_cover.png'

function Hero() {
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

      {/* Hero gradient overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          background: `
            linear-gradient(to bottom, rgba(0,0,0,0.62) 0%, transparent 35%),
            linear-gradient(to left,   rgba(0,0,0,0.72) 0%, transparent 45%)
          `,
        }}
      />


      {/* LEFT PREMIUM CONTENT (Main Focus) */}
      <div className="absolute z-10 left-[10%] top-[60%] -translate-y-1/2 ">

  {/* Brand Tagline */}
  <h2 className="text-display text-[var(--color-text-white)] mb-3 leading-tight max-w-xl">
    Your{" "}
    <span className="italic text-[var(--color-accent)]">
      Thought
    </span>{" "}
    Partner
  </h2>

  {/* Main AI Line */}
  <h4 className="text-h4 text-[var(--color-text-white)] leading-relaxed mb-4">
    Building intelligent systems{" "}
    <span className="text-[var(--color-accent)]">
      where AI meets real enterprise needs
    </span>
  </h4>

</div>

      

    

    </section>
  )
}

export default Hero