import Navbar         from '../../components/layout/Navbar'
import Footer         from '../../components/layout/Footer'
import SubscribeSection from '../../components/layout/SubscribeSection'

import S1Hero         from './sections/S1Hero'
import S6CTA          from './sections/S6CTA'
import S7Form         from './sections/S7Form'

import S2Overview     from '../ServicesDetail/sections/S2Overview'
import S3SubServices  from '../ServicesDetail/sections/S3SubServices'

import { services }   from '../../data/services'

const aiService = services.find(s => s.slug === 'ai-intelligence')

function AI() {
  return (
    <>
      <Navbar />

      <S1Hero />

      <S2Overview service={aiService} />

      <S3SubServices service={aiService} />

      <S6CTA />
      <S7Form />

      <SubscribeSection />
      <Footer />
    </>
  )
}

export default AI
