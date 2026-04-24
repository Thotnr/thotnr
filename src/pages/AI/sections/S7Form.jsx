import { useState } from 'react'

const inputCls = [
  'w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all duration-150',
].join(' ')

const inputStyle = {
  background: 'var(--color-primary)',
  border: '1px solid rgba(0,0,0,0.12)',
  color: 'var(--color-text-primary)',
}

function Field({ label, type = 'text', placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-label" style={{ color: 'var(--color-text-secondary)' }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={inputCls}
        style={inputStyle}
        onFocus={(e) => { e.currentTarget.style.border = '1px solid var(--color-tertiary)' }}
        onBlur={(e) => { e.currentTarget.style.border = '1px solid rgba(0,0,0,0.12)' }}
      />
    </div>
  )
}

function S7Form() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', company: '', consent: false,
  })

  const set = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-tertiary)' }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-[2fr_3fr] gap-16 items-start">

        {/* Left — heading */}
        <div className="pt-2">
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

        {/* Right — form */}
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Row 1 — name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field
              label="First Name"
              placeholder="Jane"
              value={form.firstName}
              onChange={set('firstName')}
            />
            <Field
              label="Last Name"
              placeholder="Smith"
              value={form.lastName}
              onChange={set('lastName')}
            />
          </div>

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

          {/* Consent */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={set('consent')}
              className="mt-1 w-4 h-4 flex-shrink-0 accent-[var(--color-secondary)]"
            />
            <span className="text-body-sm" style={{ color: 'var(--color-text-secondary)' }}>
              I agree to Thotnr contacting me about AI services and accept the{' '}
              <a href="#" className="underline" style={{ color: 'var(--color-secondary)' }}>
                Privacy Notice
              </a>
              .
            </span>
          </label>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="px-8 py-3 rounded-full text-sm font-semibold transition-all duration-200"
              style={{ background: 'var(--color-secondary)', color: '#fff' }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88' }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
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
