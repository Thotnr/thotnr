# Insights Page — PRD

## Objective
Create a premium, editorial-style Insights page that balances reading experience, credibility, and brand storytelling with clean layouts and minimal visual noise.

---

## S1 — Hero Section

**Layout**
- Full viewport (100vh)
- Background image: `../../../assets/images/insights-cover.jpg`
- Dark overlay for readability

**Position**
- Content positioned at Top ~60%, Left ~10%

**Content**
- Tagline (short, bold)
- Supporting subheadline (1–2 lines)

---

## S2 — Our Insights (Editorial Feed)

**Background**
- `--color-primary`

**Layout**
- Vertical editorial stream

**Structure**
- **Featured Insight (Top):**
  - Large Image
  - Category
  - Big Headline
  - Description
  - CTA: “Know more →”
- **Insights List (6 items total):**
  - Alternating rows: `[ Image ] [ Content ]` / `[ Content ] [ Image ]`
  - **Content per item:** Category, Headline, Short description, CTA: “Know more →”

**Assets**
- Images from: `../../../assets/images/insight[1..n].jpg`

**Notes**
- Keep content width slightly narrow (editorial feel)
- Focus on readability

---

## S3 — Success Stories (Impact Grid)

**Background**
- `--color-secondary`

**Layout**
- Grid (3–4 columns)

**Structure**
- **Each card:**
  - Large Metric
  - Label
  - Short context
  - Link →

**Example**
- 73% | Faster Decisioning | Global Bank AI Deployment | → Read story

**Design Notes**
- Large typography for metrics
- Minimal card styling
- High contrast text on dark background

---

## S4 — Life at Thotnr (Mosaic Layout)

**Background**
- `--color-primary`

**Layout**
- Asymmetric grid (mixed sizes)

**Structure**
- Row 1: `[ Text Block ] [ Large Image ]`
- Row 2: `[ Small Img ] [ Small Img ] [ Text Block ]`
- Row 3: `[ Wide Image Banner ]`

**Content**
- Short headline
- 2–3 line description
- Optional CTA

**Notes**
- Focus on human side of brand
- Avoid rigid grid — keep organic feel

---

## S5 — Deep Insight / Featured Article

**Background**
- `--color-secondary`

**Layout**
- Centered editorial block

**Structure**
- Category
- Large Headline
- Supporting paragraph
- CTA: “Read Full Article”

**Notes**
- Acts as a pause section
- Strong typography hierarchy
- Minimal elements

---

## Color Strategy
- **`--color-primary`**: Light sections (reading focus)
- **`--color-secondary`**: Dark sections (impact and contrast)
- **Rhythm**: Alternate between light and dark sections.
- **Accent**: Use sparingly (only for CTA / Category).

---

## Responsive Behavior
- **Desktop**: Structured layouts (grid / alternating)
- **Tablet**: Reduced spacing
- **Mobile**:
  - Stack vertically
  - Maintain reading flow (Content → Image)

---

## Design Principles
- Editorial, premium, clean
- High whitespace
- Strong typography hierarchy
- Minimal interactions (no heavy animations)
- Content-first design

---

## Notes
- Maintain consistent spacing (`py-20`, `gap-12/16`)
- Avoid repeating same layout across sections
- Prioritize clarity and storytelling
