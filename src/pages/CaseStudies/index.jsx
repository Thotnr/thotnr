import Navbar          from '../../components/layout/Navbar'
import Footer          from '../../components/layout/Footer'
import S1Hero          from './sections/S1Hero'
import S2CaseStudies   from './sections/S2CaseStudies'
import StatementSection from './sections/StatementSection'
import SubscribeSection from '../../components/layout/SubscribeSection'

function CaseStudies() {
  return (
    <>
      <Navbar />
      <S1Hero />
      <StatementSection />
      <S2CaseStudies />
      <SubscribeSection />
      <Footer />
    </>
  )
}

export default CaseStudies
