import { useEffect, useRef, useState } from 'react'

const PROMPTS = [
  { emoji: '📊', label: 'Assess my AI readiness' },
  { emoji: '🎯', label: 'Find AI opportunities in my industry' },
  { emoji: '🗺️', label: 'Map a TIA engagement for my business' },
  { emoji: '💼', label: 'Talk to the Thotnr team' },
]

const FAKE_RESPONSES = {
  'Assess my AI readiness': 'To give you a meaningful read, I\'ll map your data infrastructure, governance posture, and decision-making workflows. The TIA Sense phase is designed exactly for this. Want me to outline what that looks like for your sector?',
  'Find AI opportunities in my industry': 'Based on TIA engagements across pharma, financial services, and insurance, the highest-ROI AI entry points tend to be in decision augmentation, not automation. What industry are you operating in?',
  'Map a TIA engagement for my business': 'A full Sense → Shape → Scale sequence typically runs 12–16 weeks. Sense starts in week one — with your data, not a generic template. Shall I outline what a Sense engagement looks like?',
  'Talk to the Thotnr team': 'Connecting you to the Thotnr team. You can reach them at the contact page, or leave your details in the waitlist form and they\'ll prioritize your request.',
}

const ROLES      = ['CIO', 'CDO', 'CTO', 'CEO', 'Head of AI/Data', 'Other']
const INDUSTRIES = ['Pharma', 'Finance', 'Insurance', 'Other']

function getFakeResponse(text) {
  const t = text.toLowerCase()
  if (t.includes('ready') || t.includes('assess') || t.includes('data') || t.includes('readiness'))
    return FAKE_RESPONSES['Assess my AI readiness']
  if (t.includes('industry') || t.includes('sector') || t.includes('opportunit') || t.includes('pharma') || t.includes('finance') || t.includes('insurance'))
    return FAKE_RESPONSES['Find AI opportunities in my industry']
  if (t.includes('engag') || t.includes('timeline') || t.includes('how') || t.includes('process') || t.includes('weeks') || t.includes('start'))
    return FAKE_RESPONSES['Map a TIA engagement for my business']
  if (t.includes('contact') || t.includes('team') || t.includes('talk') || t.includes('meet') || t.includes('connect'))
    return FAKE_RESPONSES['Talk to the Thotnr team']
  return "That's a thoughtful question. The way TIA approaches this is through structured discovery — mapping your data, decisions, and workflows before recommending a path. Would you like to explore how a Sense phase could surface the right entry points for your business?"
}

function useInView(threshold = 0.08) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

function TIAAvatar({ size = 30 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', flexShrink: 0,
      background: 'rgba(168,218,220,0.18)',
      border: '1.5px solid rgba(168,218,220,0.4)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
    }}>
      <span style={{
        fontFamily: 'var(--font-heading)',
        fontSize: size * 0.26 + 'px',
        fontWeight: 700,
        color: 'var(--color-accent)',
        letterSpacing: '0.03em',
      }}>TIA</span>
    </div>
  )
}

/* Dark-themed chat widget — works on both light section and dark modal overlay */
export function AskTIAChat({ compact = false }) {
  const [messages,  setMessages]  = useState([])
  const [thinking,  setThinking]  = useState(false)
  const [userInput, setUserInput] = useState('')
  const [sendHov,   setSendHov]   = useState(false)
  const scrollAreaRef = useRef(null)

  useEffect(() => {
    if (scrollAreaRef.current)
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
  }, [messages, thinking])

  const handlePrompt = (p) => {
    setUserInput('')
    setMessages(m => [...m, { role: 'user', text: `${p.emoji} ${p.label}` }])
    setThinking(true)
    setTimeout(() => {
      setThinking(false)
      setMessages(m => [...m, { role: 'tia', text: FAKE_RESPONSES[p.label] || '...' }])
    }, 1600)
  }

  const handleSend = () => {
    const text = userInput.trim()
    if (!text || thinking) return
    setUserInput('')
    setMessages(m => [...m, { role: 'user', text }])
    setThinking(true)
    setTimeout(() => {
      setThinking(false)
      setMessages(m => [...m, { role: 'tia', text: getFakeResponse(text) }])
    }, 1400 + Math.random() * 600)
  }

  const canSend = userInput.trim() && !thinking

  return (
    <div style={{
      background: 'var(--color-secondary)',
      borderRadius: '20px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: 'clamp(520px, 62vh, 620px)',
      boxShadow: '0 32px 80px rgba(0,0,0,0.32), 0 8px 24px rgba(0,0,0,0.18)',
      border: '1px solid rgba(255,255,255,0.1)',
    }}>

      {/* ── Header ── */}
      <div style={{
        padding: '14px 18px',
        borderBottom: '1px solid rgba(255,255,255,0.09)',
        display: 'flex', alignItems: 'center', gap: '12px',
        flexShrink: 0,
        background: 'rgba(255,255,255,0.04)',
      }}>
        <TIAAvatar size={36} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{
            fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 700,
            color: 'var(--color-text-white)', margin: 0, lineHeight: 1.2,
          }}>Ask TIA</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '3px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 5px rgba(34,197,94,0.6)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px',
              color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em',
            }}>Active · Private Beta</span>
          </div>
        </div>
        <span className="ask9-beta-pill" style={{
          padding: '5px 14px', borderRadius: '100px',
          background: 'rgba(230,57,70,0.14)',
          border: '1.5px solid rgba(230,57,70,0.48)',
          fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 700,
          color: 'rgba(255,105,115,1)',
          letterSpacing: '0.18em', textTransform: 'uppercase',
          flexShrink: 0,
          boxShadow: '0 0 12px rgba(230,57,70,0.32), inset 0 1px 0 rgba(255,150,155,0.18)',
        }}>Beta</span>
      </div>

      {/* ── Messages ── */}
      <div
        ref={scrollAreaRef}
        style={{
          flex: 1, minHeight: 0, overflowY: 'auto',
          padding: '20px 18px 10px',
          display: 'flex', flexDirection: 'column', gap: '16px',
        }}
      >
        {messages.map((msg, i) => (
          <div key={i} style={{
            display: 'flex',
            flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
            gap: '10px', alignItems: 'flex-start',
            animation: 'askMsgIn 0.32s cubic-bezier(0.16,1,0.3,1) both',
          }}>
            {msg.role === 'tia' && <TIAAvatar size={28} />}
            <div style={{
              padding: '12px 16px',
              borderRadius: msg.role === 'user' ? '18px 4px 18px 18px' : '4px 18px 18px 18px',
              background: msg.role === 'user' ? 'rgba(168,218,220,0.22)' : 'rgba(255,255,255,0.07)',
              border: msg.role === 'user' ? '1px solid rgba(168,218,220,0.35)' : '1px solid rgba(255,255,255,0.1)',
              maxWidth: '82%',
            }}>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '14px',
                color: 'rgba(255,255,255,0.90)',
                margin: 0, lineHeight: 1.7,
              }}>
                {msg.text}
              </p>
            </div>
          </div>
        ))}

        {/* Thinking indicator */}
        {thinking && (
          <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
            <TIAAvatar size={28} />
            <div style={{
              display: 'flex', gap: '5px', alignItems: 'center',
              padding: '14px 18px',
              borderRadius: '4px 18px 18px 18px',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: 'rgba(168,218,220,0.8)',
                  animation: `askDot 1.2s ease ${i * 0.18}s infinite`,
                }} />
              ))}
            </div>
          </div>
        )}

        {/* Live typing preview */}
        {userInput && !thinking && (
          <div style={{
            display: 'flex', flexDirection: 'row-reverse', gap: '10px',
            alignItems: 'flex-start', opacity: 0.55,
          }}>
            <div style={{
              padding: '12px 16px',
              borderRadius: '18px 4px 18px 18px',
              background: 'rgba(168,218,220,0.12)',
              border: '1px dashed rgba(168,218,220,0.28)',
              maxWidth: '82%',
            }}>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '14px',
                color: 'rgba(255,255,255,0.9)', margin: 0, lineHeight: 1.7,
              }}>
                {userInput}
                <span style={{
                  display: 'inline-block', width: '2px', height: '13px',
                  background: 'rgba(168,218,220,0.8)', marginLeft: '2px',
                  animation: 'askCursor 1s step-end infinite', verticalAlign: 'text-bottom',
                }} />
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ── Prompt chips ── */}
      {messages.length === 0 && (
        <div style={{
          padding: '0 16px 12px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px',
          flexShrink: 0,
        }}>
          {PROMPTS.map((p, i) => (
            <button
              key={p.label}
              onClick={() => handlePrompt(p)}
              style={{
                padding: '9px 12px', borderRadius: '10px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.78)',
                fontFamily: 'var(--font-body)', fontSize: '12px',
                cursor: 'pointer', textAlign: 'left',
                lineHeight: 1.45,
                transition: 'background 0.18s ease, border-color 0.18s ease',
                animation: `askPrompt 0.35s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s both`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(168,218,220,0.18)'
                e.currentTarget.style.borderColor = 'rgba(168,218,220,0.45)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
              }}
            >
              {p.emoji} {p.label}
            </button>
          ))}
        </div>
      )}

      {/* ── Input bar ── */}
      <div style={{
        padding: '10px 14px 14px',
        borderTop: '1px solid rgba(255,255,255,0.09)',
        background: 'rgba(255,255,255,0.03)',
        flexShrink: 0,
        display: 'flex', gap: '8px', alignItems: 'center',
      }}>
        <input
          className="ask9-chat-input"
          type="text"
          placeholder="Ask TIA anything…"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') handleSend() }}
          style={{
            flex: 1, padding: '11px 16px',
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.07)',
            border: '1.5px solid rgba(255,255,255,0.12)',
            color: 'var(--color-text-white)',
            fontFamily: 'var(--font-body)', fontSize: '14px',
            outline: 'none',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          }}
          onFocus={e => {
            e.target.style.borderColor = 'rgba(168,218,220,0.50)'
            e.target.style.boxShadow = '0 0 0 3px rgba(168,218,220,0.1)'
          }}
          onBlur={e => {
            e.target.style.borderColor = 'rgba(255,255,255,0.12)'
            e.target.style.boxShadow = 'none'
          }}
        />
        <button
          onClick={handleSend}
          disabled={!canSend}
          onMouseEnter={() => setSendHov(true)}
          onMouseLeave={() => setSendHov(false)}
          style={{
            width: '42px', height: '42px',
            borderRadius: '12px',
            background: canSend
              ? (sendHov ? 'var(--color-accent)' : 'rgba(168,218,220,0.22)')
              : 'rgba(255,255,255,0.07)',
            border: canSend ? '1px solid rgba(168,218,220,0.4)' : '1px solid rgba(255,255,255,0.1)',
            color: canSend ? 'var(--color-text-white)' : 'rgba(255,255,255,0.28)',
            cursor: canSend ? 'pointer' : 'default',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
            transition: 'background 0.22s ease, transform 0.2s ease',
            transform: canSend && sendHov ? 'translateY(-2px)' : 'none',
          }}
          aria-label="Send"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 13V3M8 3L3.5 7.5M8 3L12.5 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}

/* Light-themed waitlist form — for use on --color-primary section background */
function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ email: '', company: '', role: '', industry: '' })

  const inputStyle = {
    width: '100%',
    padding: '13px 16px',
    borderRadius: '10px',
    background: 'rgba(11,15,25,0.04)',
    border: '1px solid rgba(11,15,25,0.14)',
    color: 'var(--color-text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.22s ease, box-shadow 0.22s ease',
    boxSizing: 'border-box',
  }

  if (submitted) {
    return (
      <div style={{
        textAlign: 'center', padding: '40px 28px',
        borderRadius: '16px',
        background: 'rgba(11,15,25,0.04)',
        border: '1px solid rgba(11,15,25,0.1)',
        boxShadow: '0 4px 24px rgba(11,15,25,0.06)',
        animation: 'askSuccessIn 0.4s cubic-bezier(0.16,1,0.3,1) both',
        height: '100%', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        boxSizing: 'border-box',
      }}>
        <p style={{ fontSize: '32px', marginBottom: '14px' }}>✦</p>
        <p className="text-h3" style={{ color: 'var(--color-text-primary)', fontWeight: 600, marginBottom: '10px' }}>
          You're on the list.
        </p>
        <p className="text-body-sm" style={{ color: 'var(--color-text-tertiary)' }}>
          We'll be in touch soon. Until then, the framework is yours to explore.
        </p>
      </div>
    )
  }

  return (
    <div style={{
      padding: 'clamp(28px, 3vw, 40px)',
      borderRadius: '16px',
      background: 'rgba(11,15,25,0.04)',
      border: '1px solid rgba(11,15,25,0.1)',
      boxShadow: '0 4px 24px rgba(11,15,25,0.06)',
      height: '100%',
      display: 'flex', flexDirection: 'column', gap: '22px',
      boxSizing: 'border-box',
    }}>

      <div>
        <p className="text-label mb-2" style={{ color: 'var(--color-highlight)', letterSpacing: '0.18em' }}>
          ASK TIA — PRIVATE BETA
        </p>
        <p className="text-h3" style={{ color: 'var(--color-text-primary)', fontWeight: 600, lineHeight: 1.2, marginBottom: '6px' }}>
          Join the waitlist.
        </p>
        <p className="text-body-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
          Get early access to TIA — the framework in conversation.
        </p>
      </div>

      <div style={{ height: '1px', background: 'rgba(11,15,25,0.1)', flexShrink: 0 }} />

      <form
        onSubmit={e => { e.preventDefault(); if (form.email && form.company && form.role) setSubmitted(true) }}
        style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}
      >
        <input
          className="ask9-input-light"
          type="email" placeholder="Work email *" required value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          style={inputStyle}
          onFocus={e => { e.target.style.borderColor = 'rgba(29,53,87,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(29,53,87,0.07)' }}
          onBlur={e => { e.target.style.borderColor = 'rgba(11,15,25,0.14)'; e.target.style.boxShadow = 'none' }}
        />
        <input
          className="ask9-input-light"
          type="text" placeholder="Company *" required value={form.company}
          onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
          style={inputStyle}
          onFocus={e => { e.target.style.borderColor = 'rgba(29,53,87,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(29,53,87,0.07)' }}
          onBlur={e => { e.target.style.borderColor = 'rgba(11,15,25,0.14)'; e.target.style.boxShadow = 'none' }}
        />
        <select
          className="ask9-input-light ask9-select-light"
          required value={form.role}
          onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
          style={{ ...inputStyle, color: form.role ? 'var(--color-text-primary)' : 'rgba(11,15,25,0.38)' }}
          onFocus={e => { e.target.style.borderColor = 'rgba(29,53,87,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(29,53,87,0.07)' }}
          onBlur={e => { e.target.style.borderColor = 'rgba(11,15,25,0.14)'; e.target.style.boxShadow = 'none' }}
        >
          <option value="" disabled>Role *</option>
          {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
        <select
          className="ask9-input-light ask9-select-light"
          value={form.industry}
          onChange={e => setForm(f => ({ ...f, industry: e.target.value }))}
          style={{ ...inputStyle, color: form.industry ? 'var(--color-text-primary)' : 'rgba(11,15,25,0.38)' }}
          onFocus={e => { e.target.style.borderColor = 'rgba(29,53,87,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(29,53,87,0.07)' }}
          onBlur={e => { e.target.style.borderColor = 'rgba(11,15,25,0.14)'; e.target.style.boxShadow = 'none' }}
        >
          <option value="">Industry (optional)</option>
          {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
        </select>

        <button
          type="submit"
          style={{
            padding: '14px 24px', borderRadius: '10px',
            background: 'var(--color-secondary)', color: 'var(--color-text-white)',
            border: 'none', cursor: 'pointer',
            fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 700,
            transition: 'background 0.22s ease, transform 0.2s ease, box-shadow 0.22s ease',
            marginTop: '4px',
            boxShadow: '0 4px 20px rgba(29,53,87,0.18)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-highlight)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(230,57,70,0.22)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-secondary)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(29,53,87,0.18)' }}
        >
          Join the waitlist →
        </button>

        {/* <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'rgba(11,15,25,0.48)', margin: 0 }}>
          No spam. Invite-only access. Unsubscribe anytime.
        </p> */}
      </form>
    </div>
  )
}

function S9AskTIA() {
  const [sectionRef, inView] = useInView(0.06)

  return (
    <>
      <style>{`
        @keyframes askFadeUp     { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes askBlurReveal { from { opacity:0; filter:blur(10px); transform:translateY(14px); } to { opacity:1; filter:blur(0); transform:translateY(0); } }
        @keyframes askScaleIn    { from { opacity:0; transform:scale(0.97); filter:blur(6px); } to { opacity:1; transform:scale(1); filter:blur(0); } }
        @keyframes askCursor     { 0%,100% { opacity:1; } 50% { opacity:0; } }
        @keyframes askDot        { 0%,80%,100% { transform:translateY(0); opacity:0.55; } 40% { transform:translateY(-5px); opacity:1; } }
        @keyframes askPrompt     { from { opacity:0; transform:scale(0.93) translateY(6px); } to { opacity:1; transform:scale(1) translateY(0); } }
        @keyframes askMsgIn      { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        @keyframes askSuccessIn  { from { opacity:0; transform:scale(0.96); } to { opacity:1; transform:scale(1); } }

        .ask9-eyebrow { animation: askFadeUp      0.5s  cubic-bezier(0.16,1,0.3,1) 0.08s both; }
        .ask9-heading { animation: askBlurReveal  0.82s cubic-bezier(0.16,1,0.3,1) 0.16s both; }
        .ask9-sub     { animation: askFadeUp      0.6s  cubic-bezier(0.16,1,0.3,1) 0.28s both; }
        .ask9-left    { animation: askFadeUp      0.82s cubic-bezier(0.16,1,0.3,1) 0.38s both; }
        .ask9-right   { animation: askScaleIn     0.9s  cubic-bezier(0.16,1,0.3,1) 0.48s both; }

        .ask9-paused .ask9-eyebrow, .ask9-paused .ask9-heading, .ask9-paused .ask9-sub,
        .ask9-paused .ask9-left,    .ask9-paused .ask9-right {
          opacity: 0; animation-play-state: paused;
        }
        .ask9-running .ask9-eyebrow, .ask9-running .ask9-heading, .ask9-running .ask9-sub,
        .ask9-running .ask9-left,    .ask9-running .ask9-right {
          animation-play-state: running;
        }

        .ask9-input-light::placeholder { color: rgba(11,15,25,0.36); }
        .ask9-select-light option      { background: #ffffff; color: #0B0F19; }
        .ask9-chat-input::placeholder  { color: rgba(255,255,255,0.38); }

        @keyframes ask9BetaPulse {
          0%, 100% { box-shadow: 0 0 10px rgba(230,57,70,0.28), inset 0 1px 0 rgba(255,150,155,0.14); border-color: rgba(230,57,70,0.40); }
          50%      { box-shadow: 0 0 22px rgba(230,57,70,0.60), inset 0 1px 0 rgba(255,150,155,0.24); border-color: rgba(230,57,70,0.72); }
        }
        .ask9-beta-pill { animation: ask9BetaPulse 2.4s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .ask9-eyebrow, .ask9-heading, .ask9-sub, .ask9-left, .ask9-right {
            animation: none !important; opacity: 1 !important; filter: none !important;
          }
        }
      `}</style>

      <section
        id="ask-tia"
        ref={sectionRef}
        className={`py-16 px-6 md:px-10 lg:px-16 ${inView ? 'ask9-running' : 'ask9-paused'}`}
        style={{ background: 'var(--color-primary)' }}
      >
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ marginBottom: '40px' }}>
            <p className="ask9-eyebrow text-h4 mb-2" style={{ color: 'var(--color-highlight)' }}>
              Coming Soon
            </p>
            <h2 className="ask9-heading text-h1" style={{ color: 'var(--color-text-primary)', lineHeight: 1.15 }}>
              Meet Ask TIA. The framework, in conversation.
            </h2>
          </div>

          {/* Grid — form left, chat right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <div className="ask9-left">
              <WaitlistForm />
            </div>
            <div className="ask9-right">
              <AskTIAChat />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default S9AskTIA
