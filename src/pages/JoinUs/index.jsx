import Navbar       from '../../components/layout/Navbar'
import Footer       from '../../components/layout/Footer'
import S1Hero       from './sections/S1Hero'
import S2WhyJoinUs  from './sections/S2WhyJoinUs'
import S3OpenRoles  from './sections/S3OpenRoles'
import S4ApplyForm  from './sections/S4ApplyForm'

function JoinUs() {
  return (
    <>
      <Navbar />
      <S1Hero />
      <S2WhyJoinUs />
      <S3OpenRoles />
      <S4ApplyForm />
      <Footer />
    </>
  )
}

export default JoinUs
