export const caseStudiesQuery = `
*[_type == "caseStudy"] | order(_createdAt desc) {
  _id,
  slug,
  coverImage,
  coverTagline,
  coverSubheadline,
  meta,
  challenge
}
`

export const caseStudyBySlugQuery = `
*[_type == "caseStudy" && slug.current == $slug][0] {
  _id,
  slug,
  coverImage,
  coverTagline,
  coverSubheadline,
  meta,
  backdrop,
  challenge,
  solution,
  outcome,
  clientSpeak,
  cta
}
`


export const insightsQuery = `
*[_type == "insight"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  category,
  tagline,
  subheadline,
  description,
  coverImage,
  publishDate,
  author
}
`

export const insightBySlugQuery = `
*[_type == "insight" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  tagline,
  subheadline,
  coverImage,
  publishDate,
  author,
  bodyHtml,
  bodyImages[]{
    _key,
    alt,
    label,
    asset->
  }
}
`