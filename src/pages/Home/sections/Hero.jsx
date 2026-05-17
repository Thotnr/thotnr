import { useState } from 'react'
import home1 from '../../../assets/videos/home-1.mp4'
import home2 from '../../../assets/videos/home-2.mp4'
import home3 from '../../../assets/videos/home-3.mp4'
 
const HERO_VIDEOS = [home1, home2, home3]
const STORAGE_KEY = 'thotnr_hero_vid_idx'
 
function pickVideo() {
  try {
    const idx = parseInt(localStorage.getItem(STORAGE_KEY) ?? '0', 10)
    localStorage.setItem(STORAGE_KEY, String((idx + 1) % HERO_VIDEOS.length))
    return HERO_VIDEOS[idx]
  } catch {
    return HERO_VIDEOS[0]
  }
}
 
function Hero() {
  const [videoSrc] = useState(pickVideo)
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: '100vh',
        minHeight: '100dvh',
        background: 'var(--color-secondary)',
      }}
    >
      <style>{`
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
 
        @keyframes tiaReveal {
          from { opacity: 0; transform: translateY(20px); letter-spacing: 0.01em; }
          to   { opacity: 1; transform: translateY(0); letter-spacing: -0.045em; }
        }
 
        @keyframes shimmerLine {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
 
        @keyframes tiaGlow {
          0%, 100% { text-shadow: 0 4px 50px rgba(125, 211, 192, 0.12), 0 2px 24px rgba(0, 0, 0, 0.6); }
          50%      { text-shadow: 0 4px 70px rgba(125, 211, 192, 0.22), 0 2px 24px rgba(0, 0, 0, 0.6); }
        }
 
        .hero-content {
          animation: heroIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
        }
 
        .hero-tia {
          animation: tiaReveal 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both,
                     tiaGlow 5s ease-in-out 1.5s infinite;
        }
 
        .hero-accent-line {
          animation: shimmerLine 3s ease-in-out infinite;
        }
 
        /* Mobile — vertically centered, full width */
        .hero-content-pos {
          position: absolute;
          left: 6%;
          right: 6%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }
 
        /* Tablet */
        @media (min-width: 768px) {
          .hero-content-pos {
            left: 8%;
            right: auto;
            top: 50%;
            transform: translateY(-50%);
            max-width: 600px;
          }
        }
 
        /* Desktop */
        @media (min-width: 1024px) {
          .hero-content-pos {
            left: 10%;
            right: auto;
            top: 35%;
            transform: translateY(-50%);
            max-width: 680px;
          }
        }
 
        /* Mobile + Tablet video fix */
        .hero-bg-video {
          object-fit: cover;
          object-position: center center;
        }
 
        @media (max-width: 767px) {
          .hero-bg-video {
            object-fit: cover;
            object-position: 58% center;
          }
        }
 
        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-bg-video {
            object-fit: cover;
            object-position: 55% center;
          }
        }
 
        @media (min-width: 1024px) {
          .hero-bg-video {
            object-fit: cover;
            object-position: center center;
          }
        }
      `}</style>
 
      {/* Background video */}
      <video
        key={videoSrc}
        className="hero-bg-video absolute inset-0 w-full h-full z-0"
        style={{ filter: 'brightness(0.68) contrast(1.08) saturate(1.05)' }}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />
 
      {/* Layer 1: Smooth left-to-right gradient */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.88) 15%, rgba(0,0,0,0.72) 35%, rgba(0,0,0,0.50) 55%, rgba(0,0,0,0.28) 75%, rgba(0,0,0,0.10) 90%, rgba(0,0,0,0) 100%)',
      }} />
 
      {/* Layer 2: Vertical depth gradient */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.45) 100%)',
      }} />
 
      {/* Layer 3: Mobile/tablet flat overlay */}
      <div
        className="block lg:hidden"
        style={{
          position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
          background: 'rgba(0,0,0,0.50)',
        }}
      />
 
      {/* Layer 4: Subtle radial darkness behind text content */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 70% at 25% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 70%)',
      }} />
 
      {/* Layer 5: Top vignette */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 22%)',
      }} />
 
      <div className="hero-content hero-content-pos">
 
        {/* Eyebrow — TIA framework label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
          <div className="hero-accent-line" style={{
            width: 'clamp(28px, 4vw, 40px)',
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, #7dd3c0 100%)',
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12.5px',
            fontWeight: 500,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: '#7dd3c0',
          }}>
            The Framework
          </span>
        </div>
 
        {/* TIA — the hero word, proportional */}
        <h1
          className="hero-tia"
          style={{
            fontFamily: '"Inter", "Helvetica Neue", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
            fontSize: 'clamp(64px, 9.5vw, 56px)',
            fontWeight: 400,
            lineHeight: 0.95,
            letterSpacing: '-0.045em',
            color: '#ffffff',
            margin: 0,
            marginBottom: '10px',
            textShadow: '0 4px 50px rgba(125, 211, 192, 0.12), 0 2px 24px rgba(0, 0, 0, 0.6)',
          }}
        >
          TIA
        </h1>
 
        {/* Framework full name — directly under TIA */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(16px, 1.05vw, 24px)',
            fontWeight: 500,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#7dd3c0',
            opacity: 0.85,
            marginBottom: '20px',
          }}
        >
          Thotnr Intelligence Augmentation
        </div>
 
        {/* Tagline — supporting role */}
        {/* <h2 style={{
          fontFamily: '"Inter", "Helvetica Neue", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
          fontSize: 'clamp(24px, 3vw, 34px)',
          fontWeight: 400,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          color: '#ffffff',
          margin: 0,
          marginBottom: '22px',
          textShadow: '0 4px 40px rgba(0, 0, 0, 0.6)',
        }}>
          intelligence, <em style={{ fontStyle: 'italic', fontWeight: 300, color: '#e8eaed' }}>augmented.</em>
        </h2>
  */}
        {/* Supporting paragraph */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '16px',
          lineHeight: 1.65,
          fontWeight: 400,
          color: '#e8eaed',
          opacity: 0.82,
          maxWidth: '540px',
          marginBottom: 0,
          letterSpacing: '-0.005em',
          textShadow: '0 2px 16px rgba(0, 0, 0, 0.5)',
        }}>
          We build enterprise AI that is grounded in your data, embedded in your workflows, and measured by outcomes your business can defend.
        </p>
 
      </div>
    </section>
  )
}
 
export default Hero
 
 