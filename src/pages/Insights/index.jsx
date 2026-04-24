import Navbar            from '../../components/layout/Navbar'
import Footer            from '../../components/layout/Footer'
import S1Hero            from './sections/S1Hero'
import S2EditorialFeed   from './sections/S2EditorialFeed'
import S3SuccessStories  from './sections/S3SuccessStories'
import S4LifeAtThotnr    from './sections/S4LifeAtThotnr'
import S5FeaturedArticle from './sections/S5FeaturedArticle'
import StatementSection from './sections/StatementSection'
import SubscribeSection from '../../components/layout/SubscribeSection'

function Insights() {
  return (
    <>
      <Navbar />
      <S1Hero />
      <StatementSection/>
      <S2EditorialFeed />
      <S3SuccessStories />
      <S4LifeAtThotnr />
      <SubscribeSection/>
      <Footer />
    </>
  )
}

export default Insights
