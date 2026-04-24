function Paragraph({ text }) {
  return (
    <p className="text-body-lg" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.88' }}>
      {text}
    </p>
  )
}

function SectionHeading({ text }) {
  return (
    <h2
      className="text-h1 mt-16 mb-2"
      style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}
    >
      {text}
    </h2>
  )
}

function BulletList({ items }) {
  return (
    <ul className="flex flex-col gap-3 ml-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 items-start">
          <span
            className="flex-shrink-0 mt-1"
            style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '1.1rem', lineHeight: 1 }}
          >
            —
          </span>
          <span className="text-body-lg" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.88' }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

function QuoteBlock({ text, attribution }) {
  return (
    <blockquote
      className="py-5 pl-8"
      style={{ borderLeft: '3px solid var(--color-accent)' }}
    >
      <p
        className="text-h2 italic leading-snug"
        style={{ color: 'var(--color-secondary)', fontFamily: 'var(--font-heading)' }}
      >
        &ldquo;{text}&rdquo;
      </p>
      {attribution && (
        <p className="text-body-sm mt-4" style={{ color: 'var(--color-text-tertiary)' }}>
          — {attribution}
        </p>
      )}
    </blockquote>
  )
}

function ImageTextBlock({ image, imageAlt, text, imageLeft }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className={imageLeft ? '' : 'md:order-2'}>
        <img
          src={image}
          alt={imageAlt || ''}
          className="w-full rounded-xl object-cover"
          style={{ aspectRatio: '4/3' }}
        />
      </div>
      <div className={imageLeft ? '' : 'md:order-1'}>
        <p className="text-body-lg" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.88' }}>
          {text}
        </p>
      </div>
    </div>
  )
}

function BlockRenderer({ block }) {
  switch (block.type) {
    case 'paragraph':   return <Paragraph  text={block.text} />
    case 'heading':     return <SectionHeading text={block.text} />
    case 'bullets':     return <BulletList items={block.items} />
    case 'quote':       return <QuoteBlock text={block.text} attribution={block.attribution} />
    case 'image_text':  return <ImageTextBlock {...block} />
    default:            return null
  }
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function S2Content({ data }) {
  const introBlock = data.contentBlocks.find(b => b.type === 'intro') || data.contentBlocks[0]
  const bodyBlocks = data.contentBlocks.filter(b => b.type !== 'intro')

  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-primary)' }}
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-8">

        {/* Author Intro Row */}
        <div
          className="grid grid-cols-1 md:grid-cols-[110px_1fr_90px] gap-8 pb-12"
          style={{ borderBottom: '1px solid rgba(108,117,125,0.18)' }}
        >
          {/* Author Card */}
          <div className="flex flex-col items-center gap-2">
            <img
              src={data.authorImage}
              alt={data.authorName}
              className="w-20 h-20 rounded-full object-cover object-top"
            />
            <p
              className="text-body-sm font-semibold text-center"
              style={{ color: 'var(--color-highlight)' }}
            >
              {data.authorName}
            </p>
            <p
              className="text-caption text-center"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              {data.authorRole}
            </p>
          </div>

          {/* Intro Paragraph */}
          <div className="flex flex-col justify-center gap-2">
            <p className="text-caption" style={{ color: 'var(--color-text-tertiary)' }}>
              {data.publishDate}
            </p>
            <p
              className="text-body-lg"
              style={{ color: 'var(--color-text-secondary)', lineHeight: '1.88' }}
            >
              {introBlock?.text}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex md:flex-col items-start md:items-end gap-4 md:pt-2">
            <a
              href="#"
              className="transition-opacity duration-150 hover:opacity-60"
              style={{
                color: 'var(--color-text-tertiary)',
                background: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-highlight)'
                e.currentTarget.style.background = 'rgb(var(--color-highlight-rgb) / 0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-slate)'
                e.currentTarget.style.background = 'transparent'
              }}
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="#"
              className="transition-opacity duration-150 hover:opacity-60"
              style={{
                color: 'var(--color-text-tertiary)',
                background: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-highlight)'
                e.currentTarget.style.background = 'rgb(var(--color-highlight-rgb) / 0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-slate)'
                e.currentTarget.style.background = 'transparent'
              }}
              aria-label="Twitter / X"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>

        {/* Article Body */}
        {bodyBlocks.map((block, i) => (
          <BlockRenderer key={i} block={block} />
        ))}

      </div>
    </section>
  )
}

export default S2Content
