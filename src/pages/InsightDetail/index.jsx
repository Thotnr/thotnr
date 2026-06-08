import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'

import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import SubscribeSection from '../../components/layout/SubscribeSection'

import S1Hero from './sections/S1Hero'
import S2Content from './sections/S2Content'

import { sanityClient } from '../../lib/sanityClient'
import { insightBySlugQuery } from '../../lib/sanityQueries'

function InsightDetail() {
  const { slug } = useParams()

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    sanityClient
      .fetch(insightBySlugQuery, { slug })
      .then((result) => {
        setData(result)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [slug])

  if (loading) return null

  if (!data)
    return <Navigate to="/insights" replace />

  return (
    <>
      <Navbar />

      <S1Hero data={data} />

      <S2Content data={data} />

      <SubscribeSection />

      <Footer />
    </>
  )
}

export default InsightDetail