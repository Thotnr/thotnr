import Navbar      from '../../components/layout/Navbar'
import Footer      from '../../components/layout/Footer'
import S1Hero      from './sections/S1Hero'
import S2Industries from './sections/S2Industries'
import S3HowWeWork from './sections/S3HowWeWork'
import S4Impact    from './sections/S4Impact'

function Industry() {
  return (
    <>
      <Navbar />
      <S1Hero />
      <S2Industries />
      <S3HowWeWork />
      <S4Impact />
      <Footer />
    </>
  )
}

export default Industry
