import Navbar          from '../../components/layout/Navbar'
import Footer          from '../../components/layout/Footer'
import S1Hero          from './sections/S1Hero'
import S2CoreContent   from './sections/S2CoreContent'
import S3Team          from './sections/S3Team'
import S4Partners      from './sections/S4Partners'
import SubscribeSection from '../../components/layout/SubscribeSection'

function About() {
  return (
    <>
      <Navbar />
      <S1Hero />
      <S2CoreContent />
      <S3Team />
      <S4Partners />
      <SubscribeSection/>
      <Footer />
    </>
  )
}

export default About
