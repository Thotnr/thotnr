// ── Data ──────────────────────────────────────────────────────────────────────

const articles = [
  {
    category: 'Strategy',
    title:    'Why Most AI Projects Fail Before They Start',
    date:     'April 14, 2025',
    excerpt:  "The failure point for most enterprise AI initiatives isn't technical. It's the mismatch between what leadership expects and what the data, processes, and teams can actually support.",
  },
  {
    category: 'Technology',
    title:    'The ROI of Intelligent Automation in 2025',
    date:     'March 28, 2025',
    excerpt:  'Beyond cost reduction: how leading enterprises are measuring second and third-order returns from automation — and why the headline numbers are only half the story.',
  },
  {
    category: 'Leadership',
    title:    'Building an AI-Ready Organisation',
    date:     'March 10, 2025',
    excerpt:  "Technical readiness is table stakes. The organisations seeing compounding returns from AI share a different quality: they've built the operating muscle to absorb and direct AI capability.",
  },
]

// ── Card ──────────────────────────────────────────────────────────────────────

// InsightCard — dark card on dark section background
function InsightCard({ category, title, date, excerpt }) {
  return (
    <article className="group flex flex-col gap-4 bg-card-dk rounded-xl border border-border-dk p-6 transition-all duration-200 hover:border-accent hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]">

      {/* Category */}
      <span className="self-start text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider bg-accent/10 text-accent">
        {category}
      </span>

      {/* Title */}
      <h3 className="text-base font-semibold leading-snug text-white group-hover:text-accent transition-colors duration-200">{title}</h3>

      {/* Date */}
      <p className="text-xs text-muted">{date}</p>

      {/* Excerpt */}
      <p className="text-sm leading-relaxed flex-1 text-muted">{excerpt}</p>

      {/* Link */}
      <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium mt-auto text-accent hover:text-accent-dark transition-colors duration-150">
        Read More →
      </a>
    </article>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

// Insights — Section 5 (dark). 3-column article card grid.
function Insights() {
  return (
    <section className="bg-dark py-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-accent">
              Thinking Out Loud
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Latest from <span className="text-accent">Thotnr</span>
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold whitespace-nowrap text-accent hover:text-accent-dark transition-colors duration-150">
            View All Insights →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <InsightCard key={a.title} {...a} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Insights
