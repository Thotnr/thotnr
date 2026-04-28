import { useState } from 'react'

const contactItems = [
  {
    label: 'Press & Media',
    value: 'press@thotnr.com',
    href: 'mailto:press@thotnr.com',
  },
  {
    label: 'Careers',
    value: 'careers@thotnr.com',
    href: 'mailto:careers@thotnr.com',
  },
  {
    label: 'Website',
    value: 'www.thotnr.com',
    href: '#',
  },
]

const inputBase = 'w-full px-5 py-3 text-body-sm outline-none transition-all duration-150'
const inputStyle = {
  background: 'rgba(0,0,0,0.05)',
  border: '1px solid rgba(0,0,0,0.08)',
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
        className={`${inputBase} rounded-full`}
        style={inputStyle}
        onFocus={(e) => {
          e.currentTarget.style.border = '1px solid var(--color-tertiary)'
          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(69,123,157,0.15)'
        }}
        onBlur={(e) => {
          e.currentTarget.style.border = '1px solid rgba(0,0,0,0.08)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      />
    </div>
  )
}

function TextareaField({ label, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-label" style={{ color: 'var(--color-text-secondary)' }}>
        {label}
      </label>
      <textarea
        rows={4}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${inputBase} rounded-2xl resize-none`}
        style={inputStyle}
        onFocus={(e) => {
          e.currentTarget.style.border = '1px solid var(--color-tertiary)'
          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(69,123,157,0.15)'
        }}
        onBlur={(e) => {
          e.currentTarget.style.border = '1px solid rgba(0,0,0,0.08)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      />
    </div>
  )
}

function S3ContactAction() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
    consent: false,
  })

  const set = (key) => (e) =>
    setForm((f) => ({
      ...f,
      [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }))

  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-secondary)' }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left — Direct Contact */}
        <div>
          <p className="text-h4 text-[var(--color-highlight)]">Get in Touch</p>
          <h2 className="text-h1 text-white leading-tight mb-10">
            Reach Us Directly
          </h2>

          <div className="flex flex-col">
            {contactItems.map((item, i) => (
              <div key={item.label}>
                <div className="py-6">
                  <p className="text-label text-white/50 mb-2">{item.label}</p>
                  <a
                    href={item.href}
                    className="text-h4 text-white no-underline transition-colors duration-150"
                    style={{ color: '#ffffff' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#ffffff' }}
                  >
                    {item.value}
                  </a>
                </div>
                {i < contactItems.length - 1 && (
                  <div className="h-[1px]" style={{ background: 'rgba(255,255,255,0.1)' }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right — Floating Form Card */}
        <div
          style={{
            background: 'var(--color-primary)',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 40px 80px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-6px)'
            e.currentTarget.style.boxShadow = '0 56px 100px rgba(0,0,0,0.5), 0 12px 32px rgba(0,0,0,0.25)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 40px 80px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.2)'
          }}
        >
          <h3 className="text-h3 mb-6" style={{ color: 'var(--color-text-primary)' }}>
            Send a Message
          </h3>

          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>

            {/* Name row */}
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

            <TextareaField
              label="Message"
              placeholder="Tell us about your challenge or project…"
              value={form.message}
              onChange={set('message')}
            />

            {/* Consent */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={set('consent')}
                className="mt-1 w-4 h-4 flex-shrink-0 accent-[var(--color-accent)]"
              />
              <span className="text-body-sm" style={{ color: 'var(--color-text-secondary)' }}>
                I agree to Thotnr contacting me and accept the{' '}
                <a
                  href="#"
                  className="underline"
                  style={{ color: 'var(--color-tertiary)' }}
                >
                  Privacy Notice
                </a>
                .
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-full text-body-sm font-semibold transition-all duration-200"
              style={{ background: 'var(--color-highlight)', color: '#fff' }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88' }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  )
}

export default S3ContactAction
