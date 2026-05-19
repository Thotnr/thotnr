import { useEffect } from 'react'
import { AskTIAChat } from '../sections/S9AskTIA'

function AskTIAModal({ onClose }) {
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <>
      <style>{`
        @keyframes modalBackdrop { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalScale {
          from { opacity: 0; transform: scale(0.92) translateY(20px); filter: blur(8px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    filter: blur(0); }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(100%); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .modal-backdrop { animation: modalBackdrop 0.25s ease both; }
        .modal-panel    { animation: modalScale 0.35s cubic-bezier(0.16,1,0.3,1) 0.05s both; }
        @media (max-width: 640px) {
          .modal-panel { animation: modalSlideUp 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        }
        @media (prefers-reduced-motion: reduce) {
          .modal-backdrop, .modal-panel { animation: none !important; }
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="modal-backdrop"
        style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(11,15,25,0.75)',
          backdropFilter: 'blur(6px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '20px',
        }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      >
        {/* Panel */}
        <div
          className="modal-panel"
          style={{
            width: '100%',
            maxWidth: '600px',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Close button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '8px',
                color: 'rgba(255,255,255,0.6)',
                padding: '6px 14px',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                letterSpacing: '0.06em',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.14)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            >
              ESC to close
            </button>
          </div>

          <AskTIAChat compact={false} />
        </div>
      </div>
    </>
  )
}

export default AskTIAModal
