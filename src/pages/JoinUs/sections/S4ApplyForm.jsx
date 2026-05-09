import { useState, useRef } from 'react'

const roleOptions = [
  'Senior Software Engineer – Java',
  'DevOps Engineer',
  'AI / ML Engineer',
  'Frontend Engineer – React',
  'Enterprise Solutions Architect',
  'UX Researcher',
  'Other / Open Application',
]

const whyPoints = [
  {
    title: 'Mission-Driven Work',
    desc: 'Every project we take on is chosen for its potential to create lasting, meaningful impact.',
  },
  {
    title: 'Collaborative by Design',
    desc: 'Small teams, direct access to decision-makers, and a culture that values every voice.',
  },
  {
    title: 'Grow Fast, Stay Sharp',
    desc: 'Regular mentorship, access to learning budgets, and exposure to cutting-edge AI challenges.',
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
          e.currentTarget.style.border = '1px solid rgba(0,0,0,0.09)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      />
    </div>
  )
}

function ResumeUpload({ file, onFile }) {
  const inputRef = useRef(null)
  const [dragging, setDragging] = useState(false)

  const handleDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    const dropped = e.dataTransfer.files[0]
    if (dropped) onFile(dropped)
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-body-sm" style={{ color: 'var(--color-secondary)' }}>
        Resume
      </label>
      <div
        className="flex flex-col items-center justify-center gap-2 rounded-2xl py-6 px-5 cursor-pointer transition-all duration-200"
        style={{
          border: dragging
            ? '1.5px dashed var(--color-tertiary)'
            : '1.5px dashed rgba(0,0,0,0.15)',
          background: dragging ? 'rgba(69,123,157,0.05)' : 'rgba(0,0,0,0.03)',
        }}
        onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
      >
        {file ? (
          <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" style={{ color: 'var(--color-tertiary)' }}>
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            <span className="text-body-sm text-center" style={{ color: 'var(--color-text-primary)' }}>
              {file.name}
            </span>
            <span
              className="text-label"
              style={{ color: 'var(--color-tertiary)', cursor: 'pointer' }}
              onClick={(e) => { e.stopPropagation(); onFile(null) }}
            >
              Remove
            </span>
          </>
        ) : (
          <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" style={{ color: 'rgba(0,0,0,0.3)' }}>
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            <p className="text-body-sm text-center" style={{ color: 'var(--color-text-secondary)' }}>
              Drag & drop or{' '}
              <span style={{ color: 'var(--color-tertiary)', textDecoration: 'underline' }}>browse</span>
            </p>
            <p className="text-caption" style={{ color: 'var(--color-text-tertiary)' }}>
              PDF, DOCX — max 5 MB
            </p>
          </>
        )}
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={(e) => onFile(e.target.files[0] || null)}
        />
      </div>
    </div>
  )
}

function S4ApplyForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',
    resume: null,
    consent: false,
  })

  const set = (key) => (e) =>
    setForm((f) => ({
      ...f,
      [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }))

  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* Left — Content */}
        <div className="lg:sticky lg:top-24">
          <p className="text-h4 text-[var(--color-highlight)]">Join Us</p>
          <h2 className="text-h1 leading-tight mt-1 mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Let's Build Something<br className="hidden sm:block" /> Meaningful Together
          </h2>
          <p className="text-body mb-10" style={{ color: 'var(--color-text-secondary)' }}>
            We're a team of builders, thinkers, and problem-solvers who believe technology should serve people — not the other way around. If that resonates, we'd love to hear from you.
          </p>

          <div className="flex flex-col gap-7">
            {whyPoints.map((pt) => (
              <div key={pt.title} className="flex gap-4 items-start">
                <div
                  className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: 'var(--color-highlight)' }}
                />
                <div>
                  <p className="text-h4 mb-1" style={{ color: 'var(--color-text-primary)' }}>
                    {pt.title}
                  </p>
                  <p className="text-body" style={{ color: 'var(--color-text-secondary)' }}>
                    {pt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form Card */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '36px',
            boxShadow: '0 24px 60px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.06)',
          }}
        >
          <h3 className="text-h3 mb-5" style={{ color: 'var(--color-text-primary)' }}>
            Apply Now
          </h3>

          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>

            <Field
              label="Full Name"
              placeholder="Jane Smith"
              value={form.name}
              onChange={set('name')}
            />

            <Field
              label="Email"
              type="email"
              placeholder="jane@company.com"
              value={form.email}
              onChange={set('email')}
            />

            {/* Role dropdown */}
            <div className="flex flex-col gap-1.5">
              <label className="text-body-sm" style={{ color: 'var(--color-secondary)' }}>
                Role
              </label>
              <select
                value={form.role}
                onChange={set('role')}
                className={`${inputBase} rounded-full appearance-none`}
                style={{ ...inputStyle, cursor: 'pointer' }}
                onFocus={(e) => {
                  e.currentTarget.style.border = '1px solid var(--color-tertiary)'
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(69,123,157,0.15)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(0,0,0,0.09)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <option value="">Select a role…</option>
                {roleOptions.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            <ResumeUpload
              file={form.resume}
              onFile={(f) => setForm((prev) => ({ ...prev, resume: f }))}
            />

            {/* Consent */}
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={set('consent')}
                className="mt-0.5 w-3.5 h-3.5 flex-shrink-0 accent-[var(--color-accent)]"
              />
              <span className="text-caption" style={{ color: 'var(--color-text-tertiary)' }}>
                I agree to Thotnr processing my application and accept the{' '}
                <a href="#" className="underline" style={{ color: 'var(--color-tertiary)' }}>
                  Privacy Notice
                </a>
                .
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-full text-body-sm font-semibold tracking-wide transition-all duration-200"
              style={{ background: 'var(--color-secondary)', color: 'var(--color-text-white)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-highlight)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-secondary)' }}
            >
              Submit Application
            </button>

          </form>
        </div>

      </div>
    </section>
  )
}

export default S4ApplyForm
