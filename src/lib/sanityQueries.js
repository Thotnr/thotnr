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