function SubscribeSection() {
  return (
    <section
      className="py-16 px-6 md:px-10 lg:px-16"
      style={{ background: 'var(--color-tertiary)' }}
    >
      <div className="flex justify-center items-center h-full"> {/* h-full and items-center for vertical centering within the brown box */}

        {/* FIXED GRID (no shrink issue) */}
        <div className="grid  gap-10 items-center justify-center"> {/* justify-center for horizontal centering */}

          {/* LEFT PANEL */}
          <div className=" text-center lg:text-left"> {/* Center text horizontally for smaller screens */}
            <h3
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Stay up to date with insights<br />
              from Thotnr!
            </h3>
          </div>

          {/* RIGHT PANEL */}
          <div className="w-full max-w-xl">

            {/* EMAIL INPUT */}
            <div
              className="flex items-center rounded-full px-2 py-2 mb-8"
              style={{
                background: 'var(--color-primary)',
                border: '1px solid var(--color-border)',
              }}
            >
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent px-4 py-2 outline-none text-sm"
                style={{ color: 'var(--color-text-primary)' }}
              />

              <button
                className="px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={{
                  background: 'var(--color-secondary)',
                  color: '#fff',
                }}
              >
                Subscribe
              </button>
            </div>

            {/* CHECKBOX 1 */}
            <label className="flex items-start gap-4 mb-6 cursor-pointer">
              <input
                type="checkbox"
                className="mt-1 w-5 h-5  accent-[var(--color-accent)]"
              />
              <span
                className="text-base leading-relaxed"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Yes, I would like to receive marketing communications from Nagarro.
                I can unsubscribe at any time.
              </span>
            </label>

            {/* CHECKBOX 2 */}
            <label className="flex items-start gap-4 cursor-pointer">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 accent-[var(--color-accent)]"
              />
              <span
                className="text-base leading-relaxed"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                I agree to the{' '}
                <a
                  href="#"
                  className="underline"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Privacy Notice
                </a>{' '}
                and to the handling of my personal information
                <span style={{ color: 'var(--color-accent)' }}> *</span>
              </span>
            </label>

          </div>

        </div>
      </div>
    </section>
  )
}

export default SubscribeSection;