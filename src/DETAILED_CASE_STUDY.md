# Detailed Case Study Page — PRD

## Objective
Build a dynamic Detailed Case Study page that presents enterprise work in a premium, narrative-driven, consulting-grade format. The page must be reusable for all case studies via structured data input.

---

## Data Model (Dynamic)
Each case study is structured as follows:

```json
{
  "slug": "string",
  "coverImg": "string",
  "coverTagline": "string",
  "coverSubheadline": "string",
  "meta": {
    "sector": "string",
    "company": "string",
    "service": "string",
    "offering": "string"
  },
  "challenge": { "title": "string", "description": "string" },
  "solution": { "title": "string", "description": "string" },
  "outcome": { "title": "string", "description": "string" },
  "clientSpeak": {
    "quote": "string",
    "name": "string",
    "role": "string",
    "company": "string",
    "image": "string"
  },
  "cta": {
    "headline": "string",
    "description": "string",
    "buttonText": "string"
  }
}
```

---

## S1 — Hero Section
- **Layout**: Full viewport (100vh), full background `coverImg`.
- **Content**: Overlay for readability, content at top ~60%, left ~10%.
- **Mapping**: Tagline (`coverTagline`), Subheadline (`coverSubheadline`).

---

## S2 — Metadata Section (Floating Info Rail)
- **Background**: `--color-secondary`
- **Layout**: 2-column layout.
  - **Left**: Sticky small heading ("Overview").
  - **Right**: Vertical stack of meta rows.
- **Row Design**: Small muted label + bold high-contrast value.
- **Accent**: Optional subtle highlight using `--color-highlight`.

---

## S3 — Main Content (Vertical Timeline Narrative)
- **Background**: `--color-primary`
- **Structure**: Vertical timeline spine (left) with content blocks (right).
- **Sections**: Challenge, Solution, Outcome.
- **Design Notes**: Use subtle separators; maintain strong reading width; include section index (01/02/03).

---

## S4 — Client Speak (Split Quote Layout)
- **Background**: Pure white (`#FFFFFF`)
- **Layout**: 2 columns.
  - **Left**: Client portrait/image.
  - **Right**: Large dominant quote, followed by attribution (Name, Role, Company).
- **Design Notes**: No cards/borders; clean editorial spacing.

---

## S5 — Work With Us (Asymmetric CTA Block)
- **Background**: `--color-tertiary`
- **Layout**: Asymmetric 2 columns.
  - **Left**: Large bold headline.
  - **Right**: Compact paragraph + CTA button.

---

## Color Strategy
| Section | Background | Text Strategy |
| :--- | :--- | :--- |
| S2 | `--color-secondary` | Light text + strong contrast |
| S3 | `--color-primary` | Dark text for readability |
| S4 | White | Neutral editorial |
| S5 | `--color-tertiary` | Balanced contrast |

*Use `--color-highlight` very sparingly (CTA/markers only).*

---

## Responsive Behavior
- **Metadata**: Stack vertically on mobile.
- **Timeline**: Becomes simple vertical blocks.
- **Client Speak**: Image moves above text.
- **CTA**: Stacked layout.

---

## Design Principles
- **Narrative-driven**: Focus on storytelling flow.
- **Premium**: Minimal, clean, consulting-grade.
- **Typography**: Strong hierarchy.
- **No Clutter**: Avoid heavy gradients, flashes, or repeated layout patterns.

---

## Final Page Flow
1. **Hero**: Set context.
2. **Metadata**: Clarity.
3. **Timeline**: Storytelling.
4. **Client Speak**: Build trust.
5. **CTA**: Drive action.