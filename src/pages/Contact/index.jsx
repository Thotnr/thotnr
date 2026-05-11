import Navbar          from '../../components/layout/Navbar'
import Footer          from '../../components/layout/Footer'
import SubscribeSection from '../../components/layout/SubscribeSection'
import S1Hero          from './sections/S1Hero'
import S2Presence      from './sections/S2Presence'
import S3ContactAction from './sections/S3ContactAction'

function Contact() {
  return (
    <>
      <Navbar />
      <S1Hero />
      <S2Presence />
      <S3ContactAction />
      <SubscribeSection/>
      <Footer />
    </>
  )
}

export default Contact
