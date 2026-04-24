const stories = [
  {
    metric:  '73%',
    label:   'Faster Decisioning',
    context: 'Global Bank — AI-powered credit risk transformation reduced loan decision time from days to hours.',
    href:    '#',
  },
  {
    metric:  '65%',
    label:   'Less Downtime',
    context: 'Manufacturing Plant — Predictive maintenance models gave teams a 72-hour failure warning window.',
    href:    '#',
  },
  {
    metric:  '40%',
    label:   'Infrastructure Savings',
    context: 'SaaS Platform — Cloud-native redesign cut costs while delivering 99.97% uptime.',
    href:    '#',
  },
  {
    metric:  '3×',
    label:   'Daily Active Usage',
    context: 'Enterprise ERP — UX redesign for a 50,000-seat rollout tripled adoption within one quarter.',
    href:    '#',
  },
]

function StoryCard({ metric, label, context, href }) {
  return (
    <div className="flex flex-col gap-4 py-8 px-2 border-t border-white/10">

      <div
        className="leading-none"
        style={{
          fontSize: '3.5rem',
          fontWeight: 700,
          fontFamily: 'var(--font-heading)',
          color: 'var(--color-accent)',
        }}
      >
        {metric}
      </div>

      <h4 className="text-h4 text-white">{label}</h4>

      <p className="text-body-sm text-white/60 flex-1">{context}</p>

    </div>
  )
}

function S3SuccessStories() {
  return (
    <section
      className="py-12 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h2 className="text-h1 text-white mt-2">Success Stories</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stories.map((s) => (
            <StoryCard key={s.metric} {...s} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default S3SuccessStories
