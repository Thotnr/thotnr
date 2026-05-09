import { useState } from 'react'

const borderDefault = '1px solid rgba(11,15,25,0.14)'
const borderFocus   = '1px solid var(--color-secondary)'

function Field({ label, type = 'text', placeholder, value, onChange, required }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-body-sm" style={{ color: 'var(--color-secondary)' }}
      >
        {label}{required && <span style={{ color: 'var(--color-highlight)' }}> *</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 text-body-sm rounded-lg outline-none transition-all duration-150"
        style={{
          background: '#ffffff',
          border: borderDefault,
          color: 'var(--color-text-primary)',
        }}
        onFocus={(e) => { e.currentTarget.style.border = borderFocus }}
        onBlur={(e)  => { e.currentTarget.style.border = borderDefault }}
      />
    </div>
  )
}

function TextareaField({ label, placeholder, value, onChange, required }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-body-sm" style={{ color: 'var(--color-secondary)' }}
      >
        {label}{required && <span style={{ color: 'var(--color-highlight)' }}> *</span>}
      </label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={4}
        className="w-full px-4 py-3 text-body-sm rounded-lg outline-none transition-all duration-150 resize-none"
        style={{
          background: '#ffffff',
          border: borderDefault,
          color: 'var(--color-text-primary)',
          lineHeight: '1.7',
        }}
        onFocus={(e) => { e.currentTarget.style.border = borderFocus }}
        onBlur={(e)  => { e.currentTarget.style.border = borderDefault }}
      />
    </div>
  )
}

function S7Form() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', company: '', message: '', consent: false,
  })

  const set = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-primary)' }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-[2fr_3fr] gap-16 xl:gap-24 items-start">

        {/* Left — heading + trust signals */}
        <div className="pt-2 flex flex-col gap-8">
          <div>
            <h2
              className="text-h1 leading-tight"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Let's Talk<br />About AI
            </h2>
            <p className="text-body mt-4" style={{ color: 'var(--color-text-secondary)' }}>
              Tell us about your challenge. We'll come back within one business day.
            </p>
          </div>

          {/* Trust signals */}
          <div
            className="flex flex-col gap-4 pt-8"
            style={{ borderTop: '1px solid rgba(11,15,25,0.08)' }}
          >
            {[
              { label: 'Response Time',  value: 'Within 1 business day'      },
              { label: 'Engagement',     value: 'No-obligation conversation'  },
              { label: 'Confidentiality','value': 'All discussions are private' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-0.5">
                <span
                  className="text-label"
                  style={{ color: 'var(--color-text-tertiary)' }}
                >
                  {item.label}
                </span>
                <span
                  className="text-h4 font-medium"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div
          style={{
            background: 'var(--color-primary)',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 32px 64px rgba(0,0,0,0.35), 0 6px 20px rgba(0,0,0,0.18)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-6px)'
            e.currentTarget.style.boxShadow = '0 44px 80px rgba(0,0,0,0.45), 0 10px 28px rgba(0,0,0,0.22)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 32px 64px rgba(0,0,0,0.35), 0 6px 20px rgba(0,0,0,0.18)'
          }}
        >
        

          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>

            <Field
              label="Work Email"
              type="email"
              placeholder="jane@company.com"
              value={form.email}
              onChange={set('email')}
            />

            <Field
              label="Company"
              placeholder="Acme Corp"
              value={form.company}
              onChange={set('company')}
            />

            <TextareaField
              label="Message"
              placeholder="Tell us about your challenge or project…"
              value={form.message}
              onChange={set('message')}
            />

      

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-full text-body-sm font-semibold tracking-wide transition-all duration-200"
              style={{ background: 'var(--color-secondary)', color: 'var(--color-text-white)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-highlight)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-secondary)' }}
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  )
}

export default S7Form
