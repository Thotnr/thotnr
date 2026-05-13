import { useParams, Navigate } from 'react-router-dom'
import { services } from '../../data/services'
import Navbar           from '../../components/layout/Navbar'
import Footer           from '../../components/layout/Footer'
import SubscribeSection from '../../components/layout/SubscribeSection'
import S1Hero           from './sections/S1Hero'
import S2Overview       from './sections/S2Overview'
import S3SubServices    from './sections/S3SubServices'

function ServicesDetail() {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  return (
    <>
      <Navbar />
      <S1Hero        service={service} />
      <S2Overview    service={service} />
      <S3SubServices service={service} />
      <SubscribeSection />
      <Footer />
    </>
  )
}

export default ServicesDetail
