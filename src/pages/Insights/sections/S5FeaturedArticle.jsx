function S5FeaturedArticle() {
  return (
    <section
      className="py-20 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-secondary)' }}
    >
      <div className="max-w-3xl mx-auto text-center">

        <p className="text-label text-[var(--color-highlight)] mb-6">
          Deep Dive
        </p>

        <h2 className="text-h1 text-white leading-tight mb-8">
          The ROI of Intelligent Automation: Measuring Second and Third-Order Returns
        </h2>

        <p className="text-body-lg text-white/70 mb-10">
          Most organisations measure automation ROI by the hours saved in the first workflow they touch.
          The real value — the compounding, second and third-order returns — lives deeper in the system.
          This article maps what that actually looks like in enterprise environments, and why the
          organisations that capture it think differently about where AI pays off.
        </p>

        <a
          href="#"
          className="inline-block px-8 py-3 rounded-full text-sm font-semibold no-underline transition-all duration-200"
          style={{ background: 'var(--color-highlight)', color: '#fff' }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88' }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
        >
          Read Full Article
        </a>

      </div>
    </section>
  )
}

export default S5FeaturedArticle
