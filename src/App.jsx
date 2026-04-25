import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
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

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
