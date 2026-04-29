# PROBLEM STATEMENT SECTION — PRD + Full Component
## File: `src/pages/Home/sections/ProblemStatement.jsx`
## Breakpoints: Mobile < 768px | Tablet 768px–1023px | Desktop 1024px+

---

## LAYOUT STRUCTURE PER BREAKPOINT

### Desktop (1024px+)
- Stats: 4-column inline grid
- Headline: full width, large editorial type
- Evidence card: 2-column (donut left, 2× stat right)
- Pillars: 3-column grid

### Tablet (768px–1023px)
- Stats: 2×2 grid (grid-cols-2)
- Headline: full width
- Evidence card: 2-column, reduced padding
- Pillars: 3-column grid (still fits)

### Mobile (< 768px)
- Stats: 2×2 grid (grid-cols-2), compact
- Headline: full width stacked
- Evidence card: single column — donut on top, 2× below
- Pillars: single column stacked

---

## COMPLETE COMPONENT

```jsx
function ProblemStatement() {
  return (
    <section className="py-16 px-5 md:px-10 lg:px-16 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto">

        {/* ── BLOCK 1: Stats bar ── */}
        <div className="mb-10">
          <p className="text-label text-[var(--color-highlight)] mb-4 tracking-widest">
            THE REALITY OF ENTERPRISE AI TODAY
          </p>
          <p className="text-body text-[var(--color-text-secondary)] mb-6">
            Most enterprises are drowning in AI pilots that never reach production.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            {[
              { pct: '95%', label: 'of GenAI pilots fail',           source: 'MIT NANDA, 2025' },
              { pct: '80%', label: 'of AI projects fail overall',    source: 'RAND CORP., 2025' },
              { pct: '42%', label: 'abandoned in 2025 (vs 17% in 2024)', source: 'S&P GLOBAL, 2025' },
              { pct: '74%', label: 'see no tangible value from AI',  source: 'BCG, 2025' },
            ].map((s, i) => (
              <div
                key={s.pct + i}
                className="flex flex-col gap-1 lg:pr-8"
                style={{
                  borderRight: i < 3 ? '1px solid rgba(11,15,25,0.08)' : 'none',
                }}
              >
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span
                    className="text-display"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(28px, 5vw, 48px)',
                      fontWeight: 700,
                      lineHeight: 1,
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {s.pct}
                  </span>
                  <span
                    className="text-body-sm"
                    style={{ color: 'var(--color-text-secondary)', maxWidth: '140px', lineHeight: 1.4 }}
                  >
                    {s.label}
                  </span>
                </div>
                <span
                  className="text-caption"
                  style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.06em' }}
                >
                  {s.source}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Thin divider */}
        <div className="mb-10" style={{ height: '1px', background: 'rgba(11,15,25,0.08)' }} />

        {/* ── BLOCK 2: Problem / Solution headline ── */}
        <div className="mb-10">
          <p className="text-label text-[var(--color-highlight)] mb-4 tracking-widest">
            WHY THOTNR IS DIFFERENT
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(24px, 4vw, 48px)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: 'var(--color-text-primary)',
              marginBottom: '4px',
            }}
          >
            We don't just build AI solutions.
          </h2>
          <h2
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: 'clamp(22px, 3.8vw, 46px)',
              fontWeight: 600,
              fontStyle: 'italic',
              lineHeight: 1.15,
              color: 'var(--color-highlight)',
              marginBottom: '24px',
            }}
          >
            We make them work inside your real organization.
          </h2>

          <p
            className="text-body"
            style={{
              color: 'var(--color-text-secondary)',
              maxWidth: '640px',
              lineHeight: 1.8,
            }}
          >
            We bridge the gap between experimental models and scalable enterprise reality —
            engineering every deployment for your existing infrastructure, your operational
            workflows, and your governance reality. So your AI doesn't just demo well.
            It ships, scales, and pays back.
          </p>
        </div>

        {/* ── BLOCK 3: Evidence card ── */}
        <div
          className="mb-12 p-6 md:p-8 rounded-2xl"
          style={{
            background: 'rgba(255,255,255,0.72)',
            border: '1px solid rgba(11,15,25,0.07)',
            boxShadow: '0 4px 24px rgba(11,15,25,0.05)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

            {/* Left — donut chart + legend */}
            <div>
              <p className="text-label text-[var(--color-text-tertiary)] mb-5 tracking-widest">
                WHERE AI PILOTS END UP
              </p>
              <div className="flex items-center gap-6 flex-wrap">

                {/* Donut SVG */}
                <div className="relative flex-shrink-0" style={{ width: '110px', height: '110px' }}>
                  <svg viewBox="0 0 110 110" width="110" height="110">
                    {/* Background circle */}
                    <circle cx="55" cy="55" r="42" fill="none" stroke="rgba(11,15,25,0.07)" strokeWidth="14" />
                    {/* Abandoned 34% — highlight red */}
                    <circle
                      cx="55" cy="55" r="42"
                      fill="none"
                      stroke="var(--color-highlight)"
                      strokeWidth="14"
                      strokeDasharray={`${0.34 * 263.9} ${263.9}`}
                      strokeDashoffset="0"
                      strokeLinecap="butt"
                      transform="rotate(-90 55 55)"
                    />
                    {/* Completed no value 29% — muted red */}
                    <circle
                      cx="55" cy="55" r="42"
                      fill="none"
                      stroke="rgba(230,57,70,0.45)"
                      strokeWidth="14"
                      strokeDasharray={`${0.29 * 263.9} ${263.9}`}
                      strokeDashoffset={`-${0.34 * 263.9}`}
                      strokeLinecap="butt"
                      transform="rotate(-90 55 55)"
                    />
                    {/* Value too low 17% — lighter */}
                    <circle
                      cx="55" cy="55" r="42"
                      fill="none"
                      stroke="rgba(230,57,70,0.22)"
                      strokeWidth="14"
                      strokeDasharray={`${0.17 * 263.9} ${263.9}`}
                      strokeDashoffset={`-${(0.34 + 0.29) * 263.9}`}
                      strokeLinecap="butt"
                      transform="rotate(-90 55 55)"
                    />
                    {/* Reach production 20% — dark navy */}
                    <circle
                      cx="55" cy="55" r="42"
                      fill="none"
                      stroke="var(--color-secondary)"
                      strokeWidth="14"
                      strokeDasharray={`${0.20 * 263.9} ${263.9}`}
                      strokeDashoffset={`-${(0.34 + 0.29 + 0.17) * 263.9}`}
                      strokeLinecap="butt"
                      transform="rotate(-90 55 55)"
                    />
                    {/* Center label */}
                    <text
                      x="55" y="51"
                      textAnchor="middle"
                      style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 700, fill: 'var(--color-text-primary)' }}
                    >
                      80%
                    </text>
                    <text
                      x="55" y="64"
                      textAnchor="middle"
                      style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', fill: 'var(--color-text-tertiary)', letterSpacing: '0.06em' }}
                    >
                      FAIL
                    </text>
                  </svg>
                </div>

                {/* Legend */}
                <div className="flex flex-col gap-2">
                  {[
                    { color: 'var(--color-highlight)',       label: 'Abandoned before production', pct: '34%' },
                    { color: 'rgba(230,57,70,0.45)',         label: 'Completed but no business value', pct: '29%' },
                    { color: 'rgba(230,57,70,0.22)',         label: 'Value too low to justify cost', pct: '17%' },
                    { color: 'var(--color-secondary)',       label: 'Reach production & deliver value', pct: '20%' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-2">
                      <div
                        className="flex-shrink-0 mt-1 rounded-sm"
                        style={{ width: '10px', height: '10px', background: item.color }}
                      />
                      <span className="text-caption" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                        {item.label} — <strong>{item.pct}</strong>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — 2× stat */}
            <div className="flex flex-col justify-center">
              <p className="text-label text-[var(--color-text-tertiary)] mb-5 tracking-widest">
                THE MIT FINDING THAT DEFINES OUR APPROACH
              </p>

              <div className="flex items-baseline gap-3 mb-3">
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(48px, 7vw, 80px)',
                    fontWeight: 800,
                    lineHeight: 1,
                    color: 'var(--color-text-primary)',
                  }}
                >
                  2×
                </span>
                <span
                  className="text-body"
                  style={{ color: 'var(--color-text-secondary)', maxWidth: '160px', lineHeight: 1.5 }}
                >
                  higher success rate with vendor-led AI
                </span>
              </div>

              <p className="text-body-sm mb-3" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                Vendor-led, workflow-embedded AI succeeds{' '}
                <strong style={{ color: 'var(--color-text-primary)' }}>67%</strong> of the time.
                Internal builds succeed only{' '}
                <strong style={{ color: 'var(--color-text-primary)' }}>33%</strong>.
              </p>

              <p
                className="text-body-sm font-semibold"
                style={{ color: 'var(--color-text-primary)' }}
              >
                That's the side of the line we put you on.
              </p>
            </div>

          </div>
        </div>

        {/* ── BLOCK 4: Three pillars ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Built for your infrastructure',
              body: 'Every solution integrates with the systems, data pipelines, and security boundaries you already have — not the ones a demo assumes.',
            },
            {
              title: 'Embedded in real workflows',
              body: 'We design around how your teams actually work. AI that fits the operation is AI that gets adopted, scaled, and trusted.',
            },
            {
              title: 'Measured in business value',
              body: 'Every deployment ships with the metrics that matter to your P&L — so AI investment becomes a number you can defend, not a hope.',
            },
          ].map((pillar) => (
            <div key={pillar.title} className="flex flex-col gap-3">
              {/* Red dash accent */}
              <div
                style={{
                  width: '28px',
                  height: '2px',
                  background: 'var(--color-highlight)',
                  borderRadius: '2px',
                }}
              />
              <h3
                className="text-h4 font-semibold"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-body"
                style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75 }}
              >
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProblemStatement
```

---

## Responsive Behaviour Summary

### Stats grid
- Mobile/Tablet: `grid-cols-2` — 2×2 layout
- Desktop: `grid-cols-4` — 4 in a row
- Border dividers between stats: hidden on mobile (would look odd in 2-col), shown on desktop via `borderRight`

### Headline block
- Font sizes use `clamp()` so they scale naturally across all viewports
- No breakpoint classes needed — pure fluid typography

### Evidence card
- Mobile: single column — donut + legend stacked above `2×` stat
- Tablet+: `grid-cols-2` — donut left, stat right
- Padding: `p-6` on mobile, `p-8` on tablet+

### Pillars
- Mobile: `grid-cols-1` — fully stacked
- Tablet+: `grid-cols-3` — 3 in a row

---
