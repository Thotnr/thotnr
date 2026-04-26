import ctaImg from '../../../assets/images/ai-cta-logo2.png'

function S6CTA() {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-secondary)' }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left — content */}
        <div>
          <p className="text-h3 text-[var(--color-highlight)] mb-4">
            Get Started
          </p>

          <h2 className="text-h1 text-white leading-tight mb-6">
            Ready to Build AI<br />
            That Actually<br />
            Works?
          </h2>

          <p className="text-body mb-10 max-w-md" style={{ color: 'rgba(255,255,255,0.68)' }}>
            Most AI projects stall at the prototype stage. We specialise in taking
            them the rest of the way — into production, into your workflows, and
            into measurable business value.
          </p>

          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-full text-sm font-semibold no-underline transition-all duration-200"
            style={{ background: '#ffffff', color: 'var(--color-secondary)' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.88)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff' }}
          >
            Start a Conversation
          </a>
        </div>

        {/* Right — visual */}
        <div>
          <img
            src={ctaImg}
            alt="AI Leadership"
            className="w-full rounded-2xl object-cover"
            style={{ height: '380px' }}
          />
        </div>

      </div>
    </section>
  )
}

export default S6CTA
