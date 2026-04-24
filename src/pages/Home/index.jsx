import Hero             from './sections/Hero'
import ProblemStatement from './sections/ProblemStatement'
import ServicesCards    from './sections/ServicesCards'
import ProcessTimeline  from './sections/ProcessTimeline'
import Insights         from './sections/Insights'
import ServicesList     from './sections/ServicesList'
import Events           from './sections/Events'
import CTASplit         from './sections/CTASplit'
import Newsletter       from './sections/Newsletter'
import CaseStudies      from './sections/CaseStudies'
import Clients         from './sections/Clients'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Products from './sections/Products'
import SubscribeSection from './sections/SubscribeSection'


// Home — assembles all page sections in order; each section manages its own background and layout
function Home() {
  return (
    <>

      <Navbar />

      {/* 1. CLARITY */}
      <Hero />
      <ProblemStatement />

      {/* 2. SOLUTION */}
      <ServicesCards />
      <ProcessTimeline />
      <ServicesList />

      {/* 3. TRUST */}
      <CaseStudies />
      <Clients />

      {/* 4. EXPANSION */}
      <Products />
      <Events />
      <Insights />
      
      <SubscribeSection/>

      {/* 5. CLOSE */}
      <Footer />
    </>
  )
}

export default Home
