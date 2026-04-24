# Case Studies Page — PRD

## Objective
Showcase real-world impact through a premium, editorial storytelling layout that feels like a high-end blog and builds credibility.

---

## S1 — Hero Section

**Layout**
- Full viewport (100vh)
- Background image: `../../../assets/images/case-study-cover.jpg` 
- Dark overlay / gradient for readability

**Content**
- Tagline (2–3 words) — positioned top ~60%, left ~10%
- Supporting subheadline (1–2 lines below tagline)

**Notes**
- Minimal and impactful text
- Strong contrast over image
- No heavy animations

---

## S2 — Case Studies Section (bg: `--color-primary`)

**Structure**
- Total: 8 case studies
- Section height: ~400vh (long-form scroll storytelling)

---

### Layout Pattern — Editorial Alternating

Each case study is a full-width block:

- **Odd (1,3,5,7)**
  - Left: Image (55%)
  - Right: Content (45%)

- **Even (2,4,6,8)**
  - Left: Content (45%)
  - Right: Image (55%)

---

### Case Study Block

**Image**
- Large dominant visual
- Aspect ratio: ~16:10
- Covers full column width

**Content**
- Eyebrow (industry / category)
- Headline (2–3 lines, bold)
- Description (3–5 lines)
- CTA: “Read Case Study”

---

### Spacing
- Each block: `py-20` minimum
- Column gap: `gap-12` to `gap-16`
- Maintain consistent vertical rhythm

---

### Color Usage
- Base colors from primary palette
- Use `--color-highlight` very sparingly (tagline / CTA only)
- Primary text: strong readable tone
- Secondary text: muted tone

---

## Responsive

- Desktop: 2-column alternating layout
- Tablet: reduced spacing
- Mobile:
  - Stack vertically
  - Order: Image → Content

---

## Design Principles
- Editorial / blog-style layout
- Clean, minimal, professional
- High whitespace
- No heavy shadows or effects
- Natural content flow (no forced equal heights)

---

## Notes
- Focus on storytelling over decoration
- Keep layout simple and readable
- Avoid overuse of accent colors