import { useState } from 'react'

const borderDefault = '1px solid rgba(11,15,25,0.14)'
const borderFocus   = '1px solid var(--color-secondary)'

function Field({ label, type = 'text', placeholder, value, onChange, required }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-label"
        style={{ color: 'var(--color-text-secondary)', letterSpacing: '0.06em' }}
      >
        {label}{required && <span style={{ color: 'var(--color-highlight)' }}> *</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 text-sm rounded-lg outline-none transition-all duration-150"
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
        className="text-label"
        style={{ color: 'var(--color-text-secondary)', letterSpacing: '0.06em' }}
      >
        {label}{required && <span style={{ color: 'var(--color-highlight)' }}> *</span>}
      </label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={4}
        className="w-full px-4 py-3 text-sm rounded-lg outline-none transition-all duration-150 resize-none"
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
                  className="text-sm uppercase"
                  style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.08em' }}
                >
                  {item.label}
                </span>
                <span
                  className="text-lg font-medium"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Name row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="First Name" placeholder="Jane"  value={form.firstName} onChange={set('firstName')} required />
            <Field label="Last Name"  placeholder="Smith" value={form.lastName}  onChange={set('lastName')}  required />
          </div>

          <Field
            label="Work Email" type="email"
            placeholder="jane@company.com"
            value={form.email} onChange={set('email')} required
          />

          <Field
            label="Company"
            placeholder="Acme Corp"
            value={form.company} onChange={set('company')}
          />

          <TextareaField
            label="How can we help?"
            placeholder="Describe your AI challenge or project — the more detail, the better."
            value={form.message} onChange={set('message')} required
          />

          {/* Consent */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={set('consent')}
              className="mt-1 w-4 h-4 flex-shrink-0 accent-[var(--color-secondary)]"
            />
            <span className="text-body-sm" style={{ color: 'var(--color-text-tertiary)' }}>
              I agree to Thotnr contacting me about AI services and accept the{' '}
              <a href="#" className="underline" style={{ color: 'var(--color-text-secondary)' }}>
                Privacy Notice
              </a>
              .
            </span>
          </label>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="px-8 py-3 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer"
              style={{
                background: 'var(--color-secondary)',
                color: '#ffffff',
                border: '1px solid var(--color-secondary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--color-secondary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-secondary)'
                e.currentTarget.style.color = '#ffffff'
              }}
            >
              Send Message
            </button>
          </div>
        </form>

      </div>
    </section>
  )
}

export default S7Form
