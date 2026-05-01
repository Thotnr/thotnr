import Hero             from './sections/Hero'
import ProblemStatement from './sections/ProblemStatement'
import Vision          from './sections/Vision'
import ServicesCards    from './sections/ServicesCards'
import Escalates        from './sections/Escalates'
import ProcessTimeline  from './sections/ProcessTimeline'
import Insights         from './sections/Insights'
import ServicesList     from './sections/ServicesList'
import Events           from './sections/Events'
import CaseStudies      from './sections/CaseStudies'
import Clients         from './sections/Clients'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Products from './sections/Products'
import SubscribeSection from '../../components/layout/SubscribeSection'


// Home — assembles all page sections in order; each section manages its own background and layout
function Home() {
  return (
    <>

      <Navbar />
      <Hero />
      <ProblemStatement />
      <Vision />
      <ProcessTimeline />
      <ServicesCards />
      <Escalates />
      <CaseStudies />
      <Clients />
      <Products />
      <ServicesList />
      <Insights />
      <SubscribeSection/>
      <Footer />
    </>
  )
}

export default Home
