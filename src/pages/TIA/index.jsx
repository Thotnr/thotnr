import { useState } from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import SubscribeSection from '../../components/layout/SubscribeSection'

import S1Hero        from './sections/S1Hero'
import S2Origin      from './sections/S2Origin'
import S3Pillars     from './sections/S3Pillars'
import S4Framework   from './sections/S4Framework'
import S5Engagement  from './sections/S5Engagement'
import S6Principles  from './sections/S6Principles'
import S7Industries  from './sections/S7Industries'
import S8CaseStudies from './sections/S8CaseStudies'
import S9AskTIA      from './sections/S9AskTIA'
import S10FAQ        from './sections/S10FAQ'
import S11FinalCTA   from './sections/S11FinalCTA'
import AskTIAModal   from './components/AskTIAModal'

function StickyAskTIA() {
  const [hov, setHov] = useState(false)

  const scrollToAskTIA = () => {
    document.getElementById('ask-tia')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToAskTIA}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label="Ask TIA"
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '28px',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: hov ? '13px 24px 13px 18px' : '13px 0px 13px 16px',
        borderRadius: '100px',
        background: hov ? 'rgba(146,232,216,1)' : 'rgba(136,222,206,0.96)',
        border: '1.5px solid rgba(255,255,255,0.08)',
        color: hov ? 'rgba(8,18,34,1)' : 'rgba(12,26,48,0.96)',
        fontFamily: 'var(--font-heading)',
        fontSize: '14px',
        fontWeight: 700,
        letterSpacing: '0.03em',
        cursor: 'pointer',
        boxShadow: hov
          ? 'inset 0 1px 0 rgba(255,255,255,0.18), 0 24px 54px rgba(136,222,206,0.28), 0 10px 28px rgba(136,222,206,0.18)'
          : 'inset 0 1px 0 rgba(255,255,255,0.18), 0 18px 42px rgba(136,222,206,0.22), 0 8px 22px rgba(136,222,206,0.16)',
        transform: hov ? 'translateY(-4px) scale(1.04)' : 'translateY(0) scale(1)',
        transition: [
          'transform 0.34s cubic-bezier(0.16,1,0.3,1)',
          'background 0.24s ease',
          'color 0.24s ease',
          'box-shadow 0.30s ease',
          'padding 0.28s cubic-bezier(0.16,1,0.3,1)',
        ].join(', '),
      }}
    >
      <span style={{
        width: '7px',
        height: '7px',
        borderRadius: '50%',
        background: 'rgba(12,26,48,0.92)',
        flexShrink: 0,
      }} />
      <span>✦ Ask TIA</span>

      {/* BETA pill */}
      <span style={{
        padding: '2px 8px',
        borderRadius: '100px',
        background: 'rgba(8,25,52,0.98)',
        color: 'rgba(136,222,206,0.96)',
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        fontWeight: 500,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}>
        Beta
      </span>

      <span style={{
        
        display: 'inline-block',
        opacity: hov ? 1 : 0,
        transform: hov ? 'translateX(0)' : 'translateX(-6px)',
        transition: 'opacity 0.22s ease, transform 0.28s cubic-bezier(0.16,1,0.3,1)',
      }}>→</span>
    </button>
  )
}

function TIA() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Navbar />

      <S1Hero onAskTIA={() => setModalOpen(true)} />
      <S2Origin />
      <S3Pillars />
      <S4Framework />
      {/* <S5Engagement />
      <S6Principles />
      <S7Industries /> */}
      <S8CaseStudies />
      <S9AskTIA />
      <S10FAQ />
      <S11FinalCTA onAskTIA={() => setModalOpen(true)} />

      <SubscribeSection />
      <Footer />

      <StickyAskTIA />
      {modalOpen && <AskTIAModal onClose={() => setModalOpen(false)} />}
    </>
  )
}

export default TIA
