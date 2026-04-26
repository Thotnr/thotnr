# Services Page — PRD

## Objective
Present core service offerings in a clear, visual, and structured format that highlights capability without overwhelming the user.

---

## S1 — Hero Section
- **Layout**: Full viewport (100vh), background image with dark overlay/gradient.
- **Position**: Content positioned at Top ~60%, Left ~10%.
- **Content**: Tagline (2–3 words), supporting subheadline.
- **Notes**: Maintain consistency with other pages; no heavy animations.

---

## S2 — Services Section
- **Background**: `--color-primary`
- **Header**: Eyebrow (small uppercase), Headline ("Our Services"), short supporting description.

### Services Grid
- **Layout**: `grid-cols-1 md:grid-cols-2` (gap-8).
- **Service Card Design**:
  - **Image**: Dominant element (~75–80% of card height), full width, `object-cover`, slightly rounded corners.
  - **Content**: Short Service Name heading + single-line description.
- **Style Guidelines**:
  - Elevated card effect (subtle contrast).
  - Soft borders (rgba).
  - **Interaction**: Slight lift (`translateY(-4px)`), soft shadow on hover.
  - **Balance**: Equal card heights, visual dominance, minimal text.

---

## Responsive Behavior
- **Desktop/Tablet**: 2 columns.
- **Mobile**: 1 column (vertical stack).

---

## Design Principles
- **Visual-first**: Storytelling through imagery.
- **Minimalist**: Clean, enterprise-focused layout.
- **Scannability**: Clarity, structured spacing, and limited use of `--color-highlight`.
- **Consistency**: Maintain the established spacing system and avoid heavy shadows/effects.