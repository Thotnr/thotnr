import { useParams, Navigate } from 'react-router-dom'
import { products } from '../../data/products'
import Navbar          from '../../components/layout/Navbar'
import Footer          from '../../components/layout/Footer'
import SubscribeSection from '../../components/layout/SubscribeSection'
import S1Hero          from './sections/S1Hero'
import S2Overview      from './sections/S2Overview'
import S3Features      from './sections/S3Features'
import S4HowItWorks    from './sections/S4HowItWorks'
import S5UseCases      from './sections/S5UseCases'
import S6Metrics       from './sections/S6Metrics'
import S4CTA           from './sections/S4CTA'

function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)

  if (!product) return <Navigate to="/products" replace />

  return (
    <>
      <Navbar />
      <S1Hero         product={product} />
      <S2Overview     product={product} />
      <S3Features     product={product} />
      <S4HowItWorks   product={product} />
      <S5UseCases     product={product} />
      <S6Metrics      product={product} />
      <S4CTA          product={product} />
      <SubscribeSection />
      <Footer />
    </>
  )
}

export default ProductDetail
