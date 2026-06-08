import './insightHtml.css'
import { urlFor } from '../../../lib/sanityClient'

function replaceImagePlaceholders(html, bodyImages = []) {
  if (!html) return ''

  let updatedHtml = html

  bodyImages.forEach((image) => {
    if (!image?.label || !image?.asset) return

    const imageUrl = urlFor(image).width(1600).url()

    updatedHtml = updatedHtml.replaceAll(
      `{{${image.label}}}`,
      imageUrl
    )
  })

  return updatedHtml
}

function S2Content({ data }) {
  if (!data?.bodyHtml) return null

  const htmlWithSanityImages = replaceImagePlaceholders(
    data.bodyHtml,
    data.bodyImages
  )

  return (
    <section
      style={{
        background: 'var(--color-primary)',
        position: 'relative',
      }}
    >
      <div
        className="insight-html"
        dangerouslySetInnerHTML={{
          __html: htmlWithSanityImages,
        }}
      />
    </section>
  )
}

export default S2Content