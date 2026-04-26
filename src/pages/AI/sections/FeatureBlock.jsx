// Reusable feature block — handles S2, S3, S4, S5
// imageLeft=true  + dark=true  → S2/S4 pattern (dark bg, image left on desktop)
// imageLeft=false + dark=false → S3/S5 pattern (light bg, content left on desktop)
// paragraph is optional (S3/S5 include it, S2/S4 omit it)
// blocks = [{title, desc}, {title, desc}]

function FeatureBlock({ imageLeft, dark, image, eyebrow, headline, paragraph, blocks }) {
  const sectionBg   = dark ? 'var(--color-secondary)' : 'var(--color-primary)'
  const headingCls  = dark ? 'text-white' : ''
  const headingStyle = dark ? {} : { color: 'var(--color-text-primary)' }
  const bodyCls     = dark ? 'text-white/70' : ''
  const bodyStyle   = dark ? {} : { color: 'var(--color-text-secondary)' }

  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: sectionBg }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Top layer ── */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Content — first in DOM so mobile shows it first */}
          <div className={imageLeft ? 'md:order-2' : ''}>
            <p className="text-h4 text-[var(--color-highlight)]">
              {eyebrow}
            </p>

            <h2
              className={`text-h1 leading-tight ${headingCls}`}
              style={headingStyle}
            >
              {headline}
            </h2>

            {paragraph && (
              <p
                className={`text-body-lg ${bodyCls}`}
                style={bodyStyle}
              >
                {paragraph}
              </p>
            )}
          </div>

          {/* Image — second in DOM, reordered to col-1 on desktop when imageLeft */}
          <div className={imageLeft ? 'md:order-1' : ''}>
            <img
              src={image}
              alt={headline}
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: '16/10' }}
            />
          </div>

        </div>

        {/* ── Bottom layer — supporting blocks ── */}
        <div className={`grid md:grid-cols-2 gap-10 md:gap-16 mt-8 pt-8`}>
          {blocks.map((block) => (
            <div key={block.title}>
              <h4
                className={`text-h4 mb-3 ${headingCls}`}
                style={headingStyle}
              >
                {block.title}
              </h4>
              <p
                className={`text-body ${bodyCls}`}
                style={bodyStyle}
              >
                {block.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FeatureBlock
