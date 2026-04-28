import { useState } from 'react'
import { Link } from 'react-router-dom'

function S5CTA({ cta }) {
  const [hovered, setHovered] = useState(false)

  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-tertiary)' }}
    >
      {/* CENTERED COLUMN */}
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">

        {/* TAGLINE */}
        <p
          className="text-h4 font-semibold tracking-widest uppercase mb-4"
          style={{ color: 'rgba(255,255,255,0.6)' }}
        >
          <span style={{ color: 'var(--color-highlight)' }}>WORK</span> WITH US
        </p>

        {/* HEADLINE */}
        <h2
          className="text-h1 font-semibold leading-tight mb-6"
          style={{ color: 'var(--color-text-white)' }}
        >
          Build Something Meaningful Together
        </h2>

        {/* DESCRIPTION */}
        <p
          className="text-body-lg leading-relaxed mb-10"
          style={{ color: 'rgba(255,255,255,0.75)' }}
        >
          What’s next for your business? We help you move from ideas to execution —
          with clarity, speed, and measurable outcomes.
        </p>

        {/* CTA BUTTON */}
        <Link
          to="/contact"
          className="inline-block px-8 py-3 text-body-sm font-semibold rounded-full no-underline transition-all duration-200"
          style={{
            background: hovered ? 'var(--color-secondary)' : '#ffffff',
            color: hovered ? '#ffffff' : 'var(--color-secondary)',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}

export default S5CTA