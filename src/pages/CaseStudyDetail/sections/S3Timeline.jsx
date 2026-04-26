const BLOCKS = [
  {
    key:      'challenge',
    label:    'Challenge',
    dotColor: 'var(--color-highlight)',
    ringRgb:  '230, 57, 70',
  },
  {
  key:      'solution',
  label:    'Solution',
  dotColor: '#7A9E8D',      // A muted, premium sage
  ringRgb:  '122, 158, 141', // Matching softened RGB
},
  {
    key:      'outcome',
    label:    'Outcome',
    dotColor: 'var(--color-secondary)',
    ringRgb:  '29, 53, 87',
  },
]

function TimelineBlock({ label, dotColor, ringRgb, title, description, isLast }) {
  return (
    <div className="flex gap-8 md:gap-14">

      {/* Left — dot + spine */}
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: '16px' }}>
        <div
          className="w-4 h-4 rounded-full flex-shrink-0 mt-1"
          style={{
            background: dotColor,
            boxShadow: `0 0 0 5px rgba(${ringRgb}, 0.15)`,
          }}
        />
        {!isLast && (
          <div
            className="flex-1 mt-3"
            style={{ width: '1px', background: 'rgba(0,0,0,0.1)' }}
          />
        )}
      </div>

      {/* Right — content */}
      <div className="pb-14">
        <p
          className="text-h4 mb-3"
          style={{ color: dotColor }}
        >
          {label}
        </p>
        <h2 className="text-h2 leading-snug mb-4" style={{ color: 'var(--color-text-primary)' }}>
          {title}
        </h2>
        <p className="text-body-lg" style={{ color: 'var(--color-text-secondary)' }}>
          {description}
        </p>
      </div>

    </div>
  )
}

function S3Timeline({ challenge, solution, outcome }) {
  const data = { challenge, solution, outcome }

  return (
    <section
      className="pt-16 pb-8 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-primary)' }}
    >
      <div className="">

        {/* Section header */}
        <div className="mb-14">
          <p className="text-h4 text-[var(--color-highlight)]">The Story</p>
          <h2 className="text-h1 text-[var(--color-text-primary)]">How We Did It</h2>
        </div>

        {/* Timeline blocks */}
        <div className="">
          {BLOCKS.map((b, i) => (
            <TimelineBlock
              key={b.key}
              label={b.label}
              dotColor={b.dotColor}
              ringRgb={b.ringRgb}
              title={data[b.key].title}
              description={data[b.key].description}
              isLast={i === BLOCKS.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default S3Timeline
