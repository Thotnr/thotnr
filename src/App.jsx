import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import Home             from './pages/Home'
import About            from './pages/About'
import Contact          from './pages/Contact'
import JoinUs           from './pages/JoinUs'
import CaseStudies      from './pages/CaseStudies'
import CaseStudyDetail  from './pages/CaseStudyDetail'
import AI               from './pages/AI'
import Insights         from './pages/Insights'
import InsightDetail    from './pages/InsightDetail'
import Industry         from './pages/Industry'
import Services        from './pages/Services'
import Products        from './pages/Products'
import Clients            from './pages/Clients'
import Accelerators       from './pages/Accelerators'
import AcceleratorDetail  from './pages/AcceleratorDetail'

const PAGE_TRANSITION_STYLE = `
  @keyframes pageFadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .page-enter {
    animation: pageFadeIn 400ms ease-out both;
  }
`

function AnimatedRoutes() {
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <>
      <style>{PAGE_TRANSITION_STYLE}</style>
      <div key={location.pathname} className="page-enter">
        <Routes>
          <Route path="/"                      element={<Home />}            />
          <Route path="/about"                 element={<About />}           />
          <Route path="/contact"               element={<Contact />}         />
          <Route path="/join-us"               element={<JoinUs />}          />
          <Route path="/case-studies"          element={<CaseStudies />}     />
          <Route path="/case-studies/:slug"    element={<CaseStudyDetail />} />
          <Route path="/ai"                    element={<AI />}              />
          <Route path="/insights"              element={<Insights />}        />
          <Route path="/insights/:slug"        element={<InsightDetail />}   />
          <Route path="/industries"            element={<Industry />}        />
          <Route path="/services"              element={<Services />}        />
          <Route path="/products"              element={<Products />}        />
          <Route path="/clients"               element={<Clients />}            />
          <Route path="/accelerators"          element={<Accelerators />}       />
          <Route path="/accelerators/:slug"    element={<AcceleratorDetail />}  />
        </Routes>
      </div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
