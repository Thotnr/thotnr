import Navbar          from '../../components/layout/Navbar'
import Footer          from '../../components/layout/Footer'
import SubscribeSection from '../../components/layout/SubscribeSection'
import S1Hero          from './sections/S1Hero'
import S2Services      from './sections/S2Services'

function Services() {
  return (
    <>
      <Navbar />
      <S1Hero />
      <S2Services />
      <SubscribeSection />
      <Footer />
    </>
  )
}

export default Services
