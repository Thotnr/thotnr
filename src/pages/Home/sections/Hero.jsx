import heroBg from '../../../assets/images/thotnr_ai_hero_bg.png'

// Hero — Section 1 (dark). Full-viewport background, left-center headline + CTAs.
function Hero() {
  return (
    <section
      className="relative h-screen w-full overflow-hidden flex items-center bg-dark"
      style={{
        backgroundImage:    `url(${heroBg})`,
        backgroundSize:     'cover',
        backgroundPosition: 'center',
        backgroundRepeat:   'no-repeat',
      }}
    >
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-dark/50 z-0" />

      {/* Top vignette */}
      <div className="absolute top-0 inset-x-0 h-[140px] bg-gradient-to-b from-dark/80 to-transparent z-10" />

      {/* Bottom vignette */}
      <div className="absolute bottom-0 inset-x-0 h-[120px] bg-gradient-to-t from-dark/75 to-transparent z-10" />

      {/* Content — left center */}
      <div
        className="relative z-20 max-w-[650px]"
        style={{ paddingLeft: 'clamp(24px, 6vw, 100px)' }}
      >
        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-accent">
          AI Strategy · Implementation · Results
        </p>

        {/* Headline */}
        <h1
          className="font-bold text-white leading-[1.05] tracking-tight"
          style={{
            fontSize:   'clamp(42px, 6vw, 88px)',
            textShadow: '0 20px 60px rgba(0,0,0,0.5)',
          }}
        >
          Your <span className="text-accent">Thought</span> Partner
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 text-muted leading-relaxed text-lg">
          We turn enterprise AI ambition into running systems — from strategy through to production.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex items-center gap-4 flex-wrap">
          <a
            href="#"
            className="px-7 py-3.5 rounded-lg text-sm font-semibold text-white bg-accent hover:bg-accent-dark transition-colors duration-200"
          >
            Start a Conversation
          </a>
          <a
            href="#"
            className="px-7 py-3.5 rounded-lg text-sm font-semibold text-white border border-white/30 hover:border-white/70 transition-colors duration-200"
          >
            See How We Work →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
