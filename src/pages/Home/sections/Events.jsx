// ── Data ──────────────────────────────────────────────────────────────────────

const events = [
  {
    title:    'AI Leadership Summit 2025',
    desc:     "A curated gathering of enterprise AI leaders — sharing what's actually working in production environments, governance frameworks, and C-suite AI alignment.",
    date:     'January 15, 2025',
    time:     '9:00 AM – 6:00 PM',
    location: 'New York, NY',
    type:     'In-Person',
  },
  {
    title:    'Enterprise AI Workshop',
    desc:     'Hands-on half-day workshop covering AI readiness assessment, use-case prioritisation, and rapid prototyping frameworks your team can apply immediately.',
    date:     'February 8, 2025',
    time:     '10:00 AM – 2:00 PM',
    location: 'Virtual',
    type:     'Online',
  },
  {
    title:    'AI Implementation Masterclass',
    desc:     'A deep-dive masterclass on moving AI from pilot to production — covering technical architecture, change management, and governance models that prevent regression.',
    date:     'March 22, 2025',
    time:     '9:00 AM – 5:00 PM',
    location: 'San Francisco, CA',
    type:     'In-Person',
  },
]

// ── Card ──────────────────────────────────────────────────────────────────────

// EventCard — dark card on dark section
function EventCard({ title, desc, date, time, location, type }) {
  return (
    <div className="group flex flex-col gap-4 bg-card-dk rounded-xl border border-border-dk p-6 transition-all duration-200 hover:border-accent hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]">

      {/* Type badge */}
      <span className="self-start text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent">
        {type}
      </span>

      {/* Title */}
      <h3 className="text-base font-semibold leading-snug text-white">{title}</h3>

      {/* Description */}
      <p className="text-sm leading-relaxed flex-1 text-muted">{desc}</p>

      {/* Meta */}
      <div className="flex flex-col gap-1.5 pt-4 mt-auto text-xs border-t border-border-dk text-muted">
        <div className="flex items-center gap-2">
          <span>📅</span>
          <span>{date} · {time}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>📍</span>
          <span>{location}</span>
        </div>
      </div>

      {/* CTA */}
      <a href="#" className="text-sm font-semibold text-accent hover:text-accent-dark transition-colors duration-150">
        Register Now →
      </a>
    </div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

// Events — Section 7 (dark). 3-column event cards for upcoming conferences and workshops.
function Events() {
  return (
    <section className="bg-dark py-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-accent">
              Upcoming
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured <span className="text-accent">Events</span>
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold whitespace-nowrap text-accent hover:text-accent-dark transition-colors duration-150">
            View All Events →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((ev) => (
            <EventCard key={ev.title} {...ev} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
