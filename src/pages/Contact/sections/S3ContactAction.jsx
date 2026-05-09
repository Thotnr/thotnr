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

const inputBase = 'w-full px-4 py-2.5 text-body-sm outline-none transition-all duration-150'
const inputStyle = {
  background: 'rgba(0,0,0,0.04)',
  border: '1px solid rgba(0,0,0,0.09)',
  color: 'var(--color-text-primary)',
}

function Field({ label, type = 'text', placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-body-sm" style={{ color: 'var(--color-secondary)' }}>
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
      <label className="text-body-sm" style={{ color: 'var(--color-secondary)' }}>
        {label}
      </label>
      <textarea
        rows={3}
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
      <style>{`
        @media (min-width: 768px) and (max-width: 1023px) {
          .contact-action-grid {
            grid-template-columns: 2fr 3fr !important;
            gap: 2rem !important;
            align-items: start !important;
          }
        }
      `}</style>
      <div className="contact-action-grid max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

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

export default S3ContactAction
