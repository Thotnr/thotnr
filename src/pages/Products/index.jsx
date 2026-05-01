import Navbar          from '../../components/layout/Navbar'
import Footer          from '../../components/layout/Footer'
import SubscribeSection from '../../components/layout/SubscribeSection'
import S1Hero          from './sections/S1Hero'
import S2ProductList   from './sections/S2ProductList'
import S3Philosophy    from './sections/S3Philosophy'

function Products() {
  return (
    <>
      <Navbar />
      <S1Hero />
      <S2ProductList />
      <S3Philosophy />
      <SubscribeSection />
      <Footer />
    </>
  )
}

export default Products
