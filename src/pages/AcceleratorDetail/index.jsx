import { useParams, Navigate } from 'react-router-dom'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import S1Hero from './sections/S1Hero'
import S2Description from './sections/S2Description'
import { accelerators } from '../../data/accelerators'

function AcceleratorDetail() {
  const { slug } = useParams()
  const accelerator = accelerators.find((a) => a.slug === slug)

  if (!accelerator) return <Navigate to="/accelerators" replace />

  return (
    <>
      <Navbar />
      <S1Hero
        label={accelerator.label}
        title={accelerator.title}
        tagline={accelerator.tagline}
        tags={accelerator.tags}
      />
      <S2Description accelerator={accelerator} />
      <Footer />
    </>
  )
}

export default AcceleratorDetail
