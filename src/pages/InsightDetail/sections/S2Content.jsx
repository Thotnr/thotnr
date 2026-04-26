function Intro({ text }) {
  return (
    <p
      className="text-body-lg leading-relaxed"
      style={{
        color: 'var(--color-text-secondary)',
        lineHeight: '1.9',
        borderLeft: '3px solid var(--color-highlight)',
        paddingLeft: '1.25rem',
        fontStyle: 'italic',
      }}
    >
      {text}
    </p>
  )
}

function Paragraph({ text }) {
  return (
    <p
      className="text-body-lg"
      style={{ color: 'var(--color-text-secondary)', lineHeight: '1.88' }}
    >
      {text}
    </p>
  )
}

function SectionHeading({ text }) {
  return (
    <h2
      className="text-h2 mt-4"
      style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}
    >
      {text}
    </h2>
  )
}

function BulletList({ items }) {
  return (
    <ul className="flex flex-col gap-4 ml-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4 items-start">
          <span
            className="flex-shrink-0 mt-[6px] w-1.5 h-1.5 rounded-full"
            style={{ background: 'var(--color-highlight)' }}
          />
          <span
            className="text-body-lg"
            style={{ color: 'var(--color-text-secondary)', lineHeight: '1.88' }}
          >
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
      className="py-6 pl-8 my-4"
      style={{
        borderLeft: '3px solid var(--color-accent)',
        background: 'rgba(69,123,157,0.05)',
        borderRadius: '0 8px 8px 0',
      }}
    >
      <p
        className="text-h3 italic leading-snug mb-3"
        style={{ color: 'var(--color-secondary)', fontFamily: 'var(--font-heading)' }}
      >
        &ldquo;{text}&rdquo;
      </p>
    </blockquote>
  )
}

function ImageTextBlock({ image, imageAlt, text, imageLeft }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-4">
      <div className={imageLeft ? '' : 'md:order-2'}>
        <img
          src={image}
          alt={imageAlt || ''}
          className="w-full rounded-xl object-cover"
          style={{ aspectRatio: '4/3' }}
        />
      </div>
      <div className={imageLeft ? '' : 'md:order-1'}>
        <p
          className="text-body-lg"
          style={{ color: 'var(--color-text-secondary)', lineHeight: '1.88' }}
        >
          {text}
        </p>
      </div>
    </div>
  )
}

function BlockRenderer({ block }) {
  switch (block.type) {
    case 'intro':       return <Intro        text={block.text} />
    case 'paragraph':   return <Paragraph    text={block.text} />
    case 'heading':     return <SectionHeading text={block.text} />
    case 'bullets':     return <BulletList   items={block.items} />
    case 'quote':       return <QuoteBlock   text={block.text} attribution={block.attribution} />
    case 'image_text':  return <ImageTextBlock {...block} />
    default:            return null
  }
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

import userAvatar from '../../../assets/images/user-avatar.png'

function S2Content({ data }) {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-primary)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 xl:gap-24 items-start">

          {/* ── MAIN CONTENT ── */}
          <article className="flex flex-col gap-8 min-w-0">
            {data.contentBlocks.map((block, i) => (
              <BlockRenderer key={i} block={block} />
            ))}
          </article>

          {/* ── SIDEBAR ── */}
          <aside
            className="flex flex-col gap-8 lg:sticky"
            style={{ top: '6rem' }}
          >

            {/* Author */}
            <div className="flex items-center gap-3">
              <img
                src={userAvatar}
                alt={data.authorName}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                style={{ border: '2px solid rgba(168,218,220,0.5)' }}
              />
              <span
                className="text-body-sm"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                by <span className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>{data.authorName}</span>
              </span>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(108,117,125,0.15)' }} />

            {/* Table of Contents */}
            {(() => {
              const headings = data.contentBlocks.filter(b => b.type === 'heading')
              if (!headings.length) return null
              return (
                <div>
                  <p
                    className="text-xs uppercase mb-4"
                    style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
                  >
                    In this article
                  </p>
                  <div className="flex flex-col gap-0">
                    {headings.map((h, i) => (
                      <span
                        key={i}
                        className="text-body-sm py-2.5"
                        style={{
                          color: 'var(--color-text-secondary)',
                          borderBottom: '1px solid rgba(108,117,125,0.12)',
                          lineHeight: '1.5',
                        }}
                      >
                        {h.text}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })()}

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(108,117,125,0.15)' }} />

            {/* Meta */}
            <div className="flex flex-col gap-5">
              <div>
                <p
                  className="text-xs uppercase mb-1"
                  style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
                >
                  Category
                </p>
                <p
                  className="text-body-sm font-semibold"
                  style={{ color: 'var(--color-highlight)' }}
                >
                  {data.tagline}
                </p>
              </div>

              <div>
                <p
                  className="text-xs uppercase mb-1"
                  style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
                >
                  Published
                </p>
                <p
                  className="text-body-sm"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {data.publishDate}
                </p>
              </div>
            </div>
          

          </aside>
        </div>
      </div>
    </section>
  )
}

export default S2Content
