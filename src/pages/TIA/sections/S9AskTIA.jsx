import { useEffect, useRef, useState } from 'react'

const GREETING = 'Hi. I\'m TIA. I can help you think through enterprise AI — grounded in your data, shaped for your business, scaled with governance. What would you like to explore?'

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
  'Talk to the Thotnr team': 'Connecting you to the Thotnr team... You can reach them at the contact page, or leave your details in the waitlist form and they\'ll prioritize your request.',
}

const ROLES      = ['CIO', 'CDO', 'CTO', 'CEO', 'Head of AI/Data', 'Other']
const INDUSTRIES = ['Pharma', 'Finance', 'Insurance', 'Other']

function getFakeResponse(text) {
  const t = text.toLowerCase()
  if (t.includes('ready') || t.includes('assess') || t.includes('data') || t.includes('readiness')) {
    return FAKE_RESPONSES['Assess my AI readiness']
  }
  if (t.includes('industry') || t.includes('sector') || t.includes('opportunit') || t.includes('pharma') || t.includes('finance') || t.includes('insurance')) {
    return FAKE_RESPONSES['Find AI opportunities in my industry']
  }
  if (t.includes('engag') || t.includes('timeline') || t.includes('how') || t.includes('process') || t.includes('weeks') || t.includes('start')) {
    return FAKE_RESPONSES['Map a TIA engagement for my business']
  }
  if (t.includes('contact') || t.includes('team') || t.includes('talk') || t.includes('meet') || t.includes('connect')) {
    return FAKE_RESPONSES['Talk to the Thotnr team']
  }
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

export function AskTIAChat({ compact = false }) {
  const [typed,        setTyped]        = useState('')
  const [greetingDone, setGreetingDone] = useState(false)
  const [messages,     setMessages]     = useState([])
  const [thinking,     setThinking]     = useState(false)
  const [userInput,    setUserInput]    = useState('')
  const timerRef      = useRef(null)
  const startedRef    = useRef(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (startedRef.current) return
    startedRef.current = true
    let i = 0
    timerRef.current = setInterval(() => {
      setTyped(GREETING.slice(0, i + 1))
      i++
      if (i >= GREETING.length) { clearInterval(timerRef.current); setGreetingDone(true) }
    }, 16)
    return () => clearInterval(timerRef.current)
  }, [])

  useEffect(() => {
    if (messages.length > 0 || thinking)
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
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

  return (
    <div style={{
      background: 'rgba(11,15,25,0.72)',
      border: '1px solid rgba(168,218,220,0.22)',
      borderRadius: '18px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      minHeight: '520px',
      boxShadow: '0 12px 56px rgba(0,0,0,0.28), 0 2px 8px rgba(0,0,0,0.14)',
      backdropFilter: 'blur(16px)',
    }}>

      {/* Title bar */}
      <div style={{
        padding: '12px 18px',
        borderBottom: '1px solid rgba(168,218,220,0.1)',
        background: 'rgba(255,255,255,0.03)',
        display: 'flex', alignItems: 'center', gap: '12px',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
          {['#FF5F57', '#FEBC2E', '#28C840'].map((c, i) => (
            <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
          ))}
        </div>
        <p style={{
          flex: 1, textAlign: 'center', margin: 0,
          fontFamily: 'var(--font-mono)', fontSize: '11px',
          letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)',
        }}>
          Ask TIA — Beta
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexShrink: 0 }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent)', animation: 'askPulse 2s ease infinite' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'rgba(168,218,220,0.5)' }}>Active</span>
        </div>
      </div>

      {/* Message area */}
      <div style={{
        flex: 1, overflowY: 'auto', padding: '18px',
        display: 'flex', flexDirection: 'column', gap: '12px',
      }}>
        {/* TIA greeting */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
          <div style={{
            width: '26px', height: '26px', borderRadius: '50%', flexShrink: 0,
            background: 'linear-gradient(135deg, rgba(168,218,220,0.3) 0%, rgba(29,53,87,0.6) 100%)',
            border: '1px solid rgba(168,218,220,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '8px', fontWeight: 700, color: 'var(--color-accent)' }}>TIA</span>
          </div>
          <div style={{
            padding: '11px 14px', borderRadius: '4px 14px 14px 14px',
            background: 'rgba(168,218,220,0.07)',
            border: '1px solid rgba(168,218,220,0.12)',
            maxWidth: '88%',
          }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.88)', margin: 0, lineHeight: 1.7 }}>
              {typed}
              {!greetingDone && (
                <span style={{ display: 'inline-block', width: '2px', height: '11px', background: 'var(--color-accent)', marginLeft: '2px', animation: 'askCursor 1s step-end infinite', verticalAlign: 'text-bottom' }} />
              )}
            </p>
          </div>
        </div>

        {/* Conversation messages */}
        {messages.map((msg, i) => (
          <div key={i} style={{
            display: 'flex',
            flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
            gap: '10px', alignItems: 'flex-start',
            animation: 'askMsgIn 0.3s ease both',
          }}>
            <div style={{
              padding: '10px 14px',
              borderRadius: msg.role === 'user' ? '14px 4px 14px 14px' : '4px 14px 14px 14px',
              background: msg.role === 'user' ? 'rgba(230,57,70,0.12)' : 'rgba(168,218,220,0.07)',
              border: msg.role === 'user' ? '1px solid rgba(230,57,70,0.2)' : '1px solid rgba(168,218,220,0.12)',
              maxWidth: '82%',
            }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.88)', margin: 0, lineHeight: 1.6 }}>
                {msg.text}
              </p>
            </div>
          </div>
        ))}

        {/* Thinking dots */}
        {thinking && (
          <div style={{ display: 'flex', gap: '8px', padding: '10px 14px', borderRadius: '4px 14px 14px 14px', background: 'rgba(168,218,220,0.07)', border: '1px solid rgba(168,218,220,0.12)', alignSelf: 'flex-start' }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-accent)', animation: `askDot 1.2s ease ${i * 0.15}s infinite` }} />
            ))}
          </div>
        )}

        {/* Live typing preview — reflects what user is typing */}
        {userInput && !thinking && (
          <div style={{
            display: 'flex', flexDirection: 'row-reverse', gap: '10px', alignItems: 'flex-start',
            opacity: 0.62,
          }}>
            <div style={{
              padding: '10px 14px',
              borderRadius: '14px 4px 14px 14px',
              background: 'rgba(230,57,70,0.08)',
              border: '1px dashed rgba(230,57,70,0.28)',
              maxWidth: '82%',
            }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.78)', margin: 0, lineHeight: 1.6 }}>
                {userInput}
                <span style={{ display: 'inline-block', width: '2px', height: '11px', background: 'rgba(255,255,255,0.55)', marginLeft: '2px', animation: 'askCursor 1s step-end infinite', verticalAlign: 'text-bottom' }} />
              </p>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Prompt grid — only before first message */}
      {messages.length === 0 && greetingDone && (
        <div style={{ padding: '0 16px 14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', flexShrink: 0 }}>
          {PROMPTS.map((p, i) => (
            <button
              key={p.label}
              onClick={() => handlePrompt(p)}
              style={{
                padding: '9px 11px', borderRadius: '10px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(168,218,220,0.15)',
                color: 'rgba(255,255,255,0.75)',
                fontFamily: 'var(--font-body)', fontSize: '12px',
                cursor: 'pointer', textAlign: 'left',
                transition: 'all 0.2s ease',
                animation: `askPrompt 0.35s ease ${i * 0.08}s both`,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(168,218,220,0.1)'; e.currentTarget.style.borderColor = 'rgba(168,218,220,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(168,218,220,0.15)' }}
            >
              {p.emoji} {p.label}
            </button>
          ))}
        </div>
      )}

      {/* Text input */}
      <div style={{
        padding: '10px 14px 14px',
        borderTop: '1px solid rgba(168,218,220,0.1)',
        background: 'rgba(255,255,255,0.02)',
        flexShrink: 0,
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
      }}>
        <input
          className="ask9-input"
          type="text"
          placeholder="Type your question..."
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') handleSend() }}
          style={{
            flex: 1,
            padding: '9px 14px',
            borderRadius: '10px',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(168,218,220,0.2)',
            color: 'rgba(255,255,255,0.9)',
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            outline: 'none',
            transition: 'border-color 0.22s ease, box-shadow 0.22s ease',
          }}
          onFocus={e => { e.target.style.borderColor = 'rgba(168,218,220,0.52)'; e.target.style.boxShadow = '0 0 0 3px rgba(168,218,220,0.08)' }}
          onBlur={e => { e.target.style.borderColor = 'rgba(168,218,220,0.2)'; e.target.style.boxShadow = 'none' }}
        />
        <button
          onClick={handleSend}
          disabled={!userInput.trim() || thinking}
          style={{
            padding: '9px 16px',
            borderRadius: '10px',
            background: userInput.trim() && !thinking ? 'var(--color-accent)' : 'rgba(255,255,255,0.06)',
            border: `1px solid ${userInput.trim() && !thinking ? 'var(--color-accent)' : 'rgba(168,218,220,0.18)'}`,
            color: userInput.trim() && !thinking ? 'var(--color-secondary)' : 'rgba(255,255,255,0.28)',
            fontFamily: 'var(--font-heading)',
            fontSize: '13px',
            fontWeight: 700,
            cursor: userInput.trim() && !thinking ? 'pointer' : 'default',
            transition: 'all 0.22s cubic-bezier(0.16,1,0.3,1)',
            flexShrink: 0,
          }}
        >
          Send
        </button>
      </div>
    </div>
  )
}

function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ email: '', company: '', role: '', industry: '' })

  const inputStyle = {
    width: '100%',
    padding: '13px 16px',
    borderRadius: '10px',
    background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(168,218,220,0.2)',
    color: 'var(--color-text-white)',
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
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(168,218,220,0.2)',
        boxShadow: '0 8px 40px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.06)',
        animation: 'askSuccessIn 0.4s cubic-bezier(0.16,1,0.3,1) both',
        height: '100%', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        boxSizing: 'border-box',
      }}>
        <p style={{ fontSize: '32px', marginBottom: '14px' }}>✦</p>
        <p className="text-h3" style={{ color: 'var(--color-text-white)', fontWeight: 600, marginBottom: '10px' }}>
          You're on the list.
        </p>
        <p className="text-body-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
          We'll be in touch soon. Until then, the framework is yours to explore.
        </p>
      </div>
    )
  }

  return (
    <div style={{
      padding: 'clamp(28px, 3vw, 40px)',
      borderRadius: '16px',
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(168,218,220,0.16)',
      boxShadow: '0 8px 40px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.06)',
      height: '100%',
      display: 'flex', flexDirection: 'column', gap: '22px',
      boxSizing: 'border-box',
    }}>

      <div>
        <p className="text-label mb-2" style={{ color: 'var(--color-accent)', letterSpacing: '0.18em' }}>
          ASK TIA — PRIVATE BETA
        </p>
        <p className="text-h3" style={{ color: 'var(--color-text-white)', fontWeight: 600, lineHeight: 1.2, marginBottom: '6px' }}>
          Join the waitlist.
        </p>
        <p className="text-body-sm" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
          Get early access to TIA — the framework in conversation.
        </p>
      </div>

      <div style={{ height: '1px', background: 'rgba(168,218,220,0.12)', flexShrink: 0 }} />

      <form
        onSubmit={e => { e.preventDefault(); if (form.email && form.company && form.role) setSubmitted(true) }}
        style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}
      >
        <input
          className="ask9-input"
          type="email" placeholder="Work email *" required value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          style={inputStyle}
          onFocus={e => { e.target.style.borderColor = 'rgba(168,218,220,0.55)'; e.target.style.boxShadow = '0 0 0 3px rgba(168,218,220,0.1)' }}
          onBlur={e => { e.target.style.borderColor = 'rgba(168,218,220,0.2)'; e.target.style.boxShadow = 'none' }}
        />
        <input
          className="ask9-input"
          type="text" placeholder="Company *" required value={form.company}
          onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
          style={inputStyle}
          onFocus={e => { e.target.style.borderColor = 'rgba(168,218,220,0.55)'; e.target.style.boxShadow = '0 0 0 3px rgba(168,218,220,0.1)' }}
          onBlur={e => { e.target.style.borderColor = 'rgba(168,218,220,0.2)'; e.target.style.boxShadow = 'none' }}
        />
        <select
          className="ask9-input ask9-select"
          required value={form.role}
          onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
          style={{ ...inputStyle, color: form.role ? 'var(--color-text-white)' : 'rgba(255,255,255,0.38)' }}
          onFocus={e => { e.target.style.borderColor = 'rgba(168,218,220,0.55)'; e.target.style.boxShadow = '0 0 0 3px rgba(168,218,220,0.1)' }}
          onBlur={e => { e.target.style.borderColor = 'rgba(168,218,220,0.2)'; e.target.style.boxShadow = 'none' }}
        >
          <option value="" disabled>Role *</option>
          {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
        <select
          className="ask9-input ask9-select"
          value={form.industry}
          onChange={e => setForm(f => ({ ...f, industry: e.target.value }))}
          style={{ ...inputStyle, color: form.industry ? 'var(--color-text-white)' : 'rgba(255,255,255,0.38)' }}
          onFocus={e => { e.target.style.borderColor = 'rgba(168,218,220,0.55)'; e.target.style.boxShadow = '0 0 0 3px rgba(168,218,220,0.1)' }}
          onBlur={e => { e.target.style.borderColor = 'rgba(168,218,220,0.2)'; e.target.style.boxShadow = 'none' }}
        >
          <option value="">Industry (optional)</option>
          {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
        </select>

        <button
          type="submit"
          style={{
            padding: '14px 24px', borderRadius: '10px',
            background: 'var(--color-accent)', color: 'var(--color-secondary)',
            border: 'none', cursor: 'pointer',
            fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 700,
            transition: 'background 0.22s ease, transform 0.2s ease, box-shadow 0.22s ease',
            marginTop: '4px',
            boxShadow: '0 4px 20px rgba(168,218,220,0.18)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-text-white)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(168,218,220,0.28)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(168,218,220,0.18)' }}
        >
          Join the waitlist →
        </button>

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'rgba(255,255,255,0.28)', margin: 0 }}>
          No spam. Invite-only access. Unsubscribe anytime.
        </p>
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
        @keyframes askPulse      { 0%,100% { opacity:1; } 50% { opacity:0.25; } }
        @keyframes askCursor     { 0%,100% { opacity:1; } 50% { opacity:0; } }
        @keyframes askDot        { 0%,80%,100% { transform:translateY(0); } 40% { transform:translateY(-5px); } }
        @keyframes askPrompt     { from { opacity:0; transform:scale(0.93); } to { opacity:1; transform:scale(1); } }
        @keyframes askMsgIn      { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
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

        .ask9-input::placeholder { color: rgba(255,255,255,0.3); }
        .ask9-select option       { background: #1D3557; color: #ffffff; }

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
        style={{ background: 'var(--color-secondary)' }}
      >
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ marginBottom: '40px' }}>
            <p className="ask9-eyebrow text-h4 text-[var(--color-highlight)] mb-2">
              Coming Soon
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="ask9-heading text-h1" style={{ lineHeight: 1.15 }}>
                <span style={{ color: 'var(--color-text-white)' }}>Meet Ask TIA. <br /> The framework, in conversation.</span>
                
              </h2>
              
            </div>
          </div>

          {/* Waitlist left, Chat right */}
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
