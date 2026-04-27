import { AlertCircle, Lightbulb, TrendingUp } from 'lucide-react'

const BLOCKS = [
  {
    key: 'challenge',
    label: 'Challenge',
    Icon: AlertCircle,
    color: 'var(--color-highlight)',
    bgColor: 'rgba(230, 57, 70, 0.07)',
    borderColor: 'rgba(230, 57, 70, 0.18)',
    spineColor: 'rgba(230, 57, 70, 0.15)',
  },
  {
    key: 'solution',
    label: 'Solution',
    Icon: Lightbulb,
    color: '#5A9B7D',
    bgColor: 'rgba(90, 155, 125, 0.08)',
    borderColor: 'rgba(90, 155, 125, 0.22)',
    spineColor: 'rgba(90, 155, 125, 0.18)',
  },
  {
    key: 'outcome',
    label: 'Outcome',
    Icon: TrendingUp,
    color: 'var(--color-secondary)',
    bgColor: 'rgba(29, 53, 87, 0.07)',
    borderColor: 'rgba(29, 53, 87, 0.18)',
    spineColor: 'rgba(29, 53, 87, 0.12)',
  },
]

function chunkText(text) {
  const sentences = text.match(/[^.!?]+[.!?]+\s*/g) || [text]
  const chunks = []
  let current = ''
  for (const s of sentences) {
    if (current.length + s.length > 230 && current.length > 60) {
      chunks.push(current.trim())
      current = s
    } else {
      current += s
    }
  }
  if (current.trim()) chunks.push(current.trim())
  return chunks.length ? chunks : [text]
}

function cleanText(text) {
  return text
    .split('\n')
    .map(l => l.trim())
    .filter(Boolean)
    .filter(l => !/^[A-Z][A-Z\s&,–—\d%+]+$/.test(l))
    .map(l => l.replace(/^[•·]\s*/, ''))
    .join(' ')
}

function DescriptionBody({ text }) {
  if (!text) return null
  const chunks = chunkText(cleanText(text))
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {chunks.map((chunk, i) => (
        <p key={i} className="text-body" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
          {chunk}
        </p>
      ))}
    </div>
  )
}

function TimelineBlock({ label, Icon, color, bgColor, borderColor, spineColor, title, description, isLast }) {
  return (
    <div className="flex gap-8 md:gap-14">

      {/* Left — icon node + spine */}
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: '48px' }}>
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{
            background: bgColor,
            border: `1px solid ${borderColor}`,
          }}
        >
          <Icon size={20} style={{ color }} strokeWidth={1.75} />
        </div>
        {!isLast && (
          <div
            className="flex-1 mt-3"
            style={{ width: '1px', background: spineColor }}
          />
        )}
      </div>

      {/* Right — content */}
      <div className="pb-16 flex-1 min-w-0">
        <p className="text-h4 mb-3" style={{ color }}>
          {label}
        </p>
        <h2
          className="text-h2 leading-snug mb-5"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {title}
        </h2>
        <DescriptionBody text={description} />
      </div>

    </div>
  )
}

function S3Timeline({ challenge, solution, outcome }) {
  const data = { challenge, solution, outcome }

  return (
    <section
      className="pt-16 pb-4 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-primary)' }}
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <p className="text-h4" style={{ color: 'var(--color-highlight)' }}>The Story</p>
          <h2 className="text-h1" style={{ color: 'var(--color-text-primary)' }}>How We Did It</h2>
        </div>

        <div>
          {BLOCKS.map((b, i) => (
            <TimelineBlock
              key={b.key}
              label={b.label}
              Icon={b.Icon}
              color={b.color}
              bgColor={b.bgColor}
              borderColor={b.borderColor}
              spineColor={b.spineColor}
              title={data[b.key]?.title}
              description={data[b.key]?.description}
              isLast={i === BLOCKS.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default S3Timeline
