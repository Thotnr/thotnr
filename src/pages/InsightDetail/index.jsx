import { useParams, Navigate } from 'react-router-dom'
import { insights }  from '../../data/insights'
import Navbar        from '../../components/layout/Navbar'
import Footer        from '../../components/layout/Footer'
import S1Hero        from './sections/S1Hero'
import S2Content     from './sections/S2Content'
import SubscribeSection from '../../components/layout/SubscribeSection'

function InsightDetail() {
  const { slug } = useParams()
  const data = insights.find(i => i.slug === slug)

  if (!data) return <Navigate to="/insights" replace />

  return (
    <>
      <Navbar />
      <S1Hero    data={data} />
      <S2Content data={data} />
      <SubscribeSection />
      <Footer />
    </>
  )
}

export default InsightDetail
