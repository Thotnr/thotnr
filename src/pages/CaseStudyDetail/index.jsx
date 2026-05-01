import { useParams, Navigate } from 'react-router-dom'
import { caseStudies } from '../../data/caseStudies'
import Navbar        from '../../components/layout/Navbar'
import Footer        from '../../components/layout/Footer'
import S1Hero        from './sections/S1Hero'
import S2Metadata    from './sections/S2Metadata'
import S3Timeline    from './sections/S3Timeline'
import S4ClientSpeak from './sections/S4ClientSpeak'
import S5CTA         from './sections/S5CTA'

function CaseStudyDetail() {
  const { slug } = useParams()
  const data = caseStudies.find(c => c.slug === slug)

  if (!data) return <Navigate to="/case-studies" replace />

  return (
    <>
      <Navbar />
      <S1Hero        data={data}                                                         />
      <S2Metadata    meta={data.meta}                                                    />
      <S3Timeline    backdrop={data.backdrop} challenge={data.challenge} solution={data.solution} outcome={data.outcome} />
      <S4ClientSpeak clientSpeak={data.clientSpeak} />
      <S5CTA         cta={data.cta}                                                      />
      <Footer />
    </>
  )
}

export default CaseStudyDetail
