import Navbar              from '../../components/layout/Navbar'
import Footer              from '../../components/layout/Footer'
import SubscribeSection    from '../../components/layout/SubscribeSection'
import AllServicesSection  from '../../components/layout/AllServicesSection'
import S1Hero              from './sections/S1Hero'
import S2Services          from './sections/S2Services'
import S3Approach          from './sections/S3Approach'

function Services() {
  return (
    <>
      <Navbar />
      <S1Hero />
      <S2Services />
      <S3Approach />
      <AllServicesSection />
      <SubscribeSection />
      <Footer />
    </>
  )
}

export default Services
