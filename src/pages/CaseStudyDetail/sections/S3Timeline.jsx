const BLOCKS = [
  { index: '01', key: 'challenge' },
  { index: '02', key: 'solution'  },
  { index: '03', key: 'outcome'   },
]

function TimelineBlock({ index, title, description, isLast }) {
  return (
    <div className="flex gap-10 md:gap-16">

      {/* Left — index + spine */}
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: '60px' }}>
        <p
          className="text-display leading-none font-bold"
          style={{
            color: 'var(--color-accent)',
            fontFamily: 'var(--font-heading)',
            fontSize: '3.5rem',
          }}
        >
          {index}
        </p>
        {!isLast && (
          <div
            className="flex-1 mt-4"
            style={{ width: '1px', background: 'var(--color-accent)', opacity: 0.35 }}
          />
        )}
      </div>

      {/* Right — content */}
      <div className={`pb-10 ${isLast ? '' : ''}`} style={{ paddingTop: '6px' }}>
        <h2 className="text-h2 leading-snug mb-4" style={{ color: 'var(--color-text-primary)' }}>
          {title}
        </h2>
        <p className="text-body-lg" style={{ color: 'var(--color-text-secondary)',  }}>
          {description}
        </p>
      </div>

    </div>
  )
}

function S3Timeline({ challenge, solution, outcome }) {
  const data = { challenge, solution, outcome }
  const ALIGNMENTS = ['justify-start', 'justify-start', 'justify-start']
  return (
    <section
      className="pt-16 pb-8 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-primary)' }}
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h2 className="text-h1" style={{ color: 'var(--color-text-primary)' }}>
            The Story
          </h2>
        </div>

        {BLOCKS.map((b, i) => (
  <div key={b.key} className={`flex ${ALIGNMENTS[i]}`}>
    <TimelineBlock
      index={b.index}
      title={data[b.key].title}
      description={data[b.key].description}
      isLast={i === BLOCKS.length - 1}
    />
  </div>
))}

      </div>
    </section>
  )
}

export default S3Timeline
