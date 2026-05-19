# UPDATE_S2_ORIGIN_PRD.md

## Section
S2 — Origin Story

---

# Objective

Design a premium, editorial-style “Origin Story” section for the TIA landing page.

The section should feel:
- human
- strategic
- premium
- grounded
- founder-led
- enterprise-grade

This section explains why TIA exists and introduces the founders behind the framework.

---

# Background

## Fixed Background Color

Use:

```css
background: var(--color-primary);
```

This is fixed.

---

# Layout Direction

Use a balanced two-column editorial layout.

| Left Side | Right Side |
|---|---|
| Story narrative | Founder visuals + quote |

The section should feel spacious and breathable.

Avoid:
- cramped cards
- dense grids
- startup-style layouts
- overly animated UI

---

# Section Height & Spacing

## Desktop

- Large vertical spacing
- Comfortable breathing room
- Section should feel immersive

Suggested:
- padding-top: 120px+
- padding-bottom: 120px+

---

# Main Layout

## Container

Use:
- max-width container
- centered horizontally

Suggested layout:
- display: grid
- two columns
- aligned vertically center

---

# Left Content Area

## Width

Approximately:
- 52–56%

---

# Left Content Structure

## 1. Eyebrow

### Content

THE ORIGIN

### Layout

- Small uppercase label
- Horizontal divider line before text
- Tight spacing

### Animation

- Divider line expands horizontally
- Eyebrow fades upward softly

---

## 2. Main Heading

### Content

TIA was born from a problem we kept seeing.

### Layout

- Large editorial-style heading
- Multi-line controlled wrapping
- Strong visual hierarchy
- Left aligned

### Animation

- Blur-to-sharp reveal
- Slow upward transition
- Slight stagger between lines

---

## 3. Story Paragraphs

### Content

Paragraph 1:
Across 20+ enterprise AI engagements — spanning pharma, financial services, insurance, and digital lending — we saw the same pattern repeat:

Paragraph 2:
Models worked in demos. Pilots didn't reach scale. Production rarely arrived. Quarters passed. Budgets stretched. Outcomes stayed promised, not delivered.

Paragraph 3:
We stopped blaming the model. We started fixing the framework around it — the data discipline, the delivery rhythm, the governance, the way intelligence was embedded into how the business actually operated.

### Layout

- Paragraphs stacked vertically
- Comfortable spacing between blocks
- Use subtle separators/dividers between paragraphs

### Animation

- Paragraphs reveal sequentially on scroll
- Fade + slight translateY
- Delayed stagger timing

---

## 4. Closing Statement

### Content

That framework became TIA.

### Layout

- Positioned at bottom of narrative stack
- Slightly larger emphasis than body text
- Treated as emotional conclusion

### Animation

- Fade in after final paragraph
- Slight glow emphasis on reveal

---

# Right Content Area

## Width

Approximately:
- 44–48%

---

# Founder Visual Section

## Layout

Display 3 founder images horizontally.

### Structure

- Equal-width founder cards
- Slight spacing between portraits
- Portraits aligned cleanly

Use images from:

```text
assets/images/
```

---

# Founder Card Structure

Each founder card contains:
- Portrait image
- Founder name

Names:
- HARIRAJ
- SANJAY
- GAURAV VERMA

Below all names:

Founders, TIA

---

# Founder Image Style

## Layout

- Soft rounded corners
- Editorial portrait framing
- Consistent image crop ratio
- Premium professional portrait treatment

Avoid:
- circular avatars
- startup-style cards
- aggressive shadows

---

# Founder Name Row

## Layout

Names displayed in a clean horizontal row below portraits.

Suggested:
- centered alignment
- subtle separators between names

Example:
HARIRAJ · SANJAY · GAURAV VERMA

---

# Founder Quote Card

## Position

Below founder portraits.

---

# Quote Card Content

"After the 20th pilot, we stopped blaming the model. We started fixing the framework."

— Hariraj, Co-founder

---

# Quote Card Layout

## Structure

- Large quotation mark/icon
- Quote text
- Founder attribution below

The card should feel:
- thoughtful
- premium
- calm
- editorial

---

# Quote Card Styling

## Colors

- Use soft elevated surface tone over `--color-primary`
- Keep contrast subtle and premium

Avoid:
- hard borders
- overly bright cards
- strong gradients

---

# Quote Card Animation

- Reveal slightly later than portraits
- Slow fade + upward motion
- Optional soft scale settle

---

# Motion & Animation System

Animations should feel:
- cinematic
- smooth
- mature
- premium

Avoid:
- bouncing
- flashy motion
- aggressive transforms

Preferred:
- opacity reveals
- slow translate transitions
- blur reveals
- subtle parallax

---

# Responsive Behavior

## Tablet

- Reduce grid gap
- Maintain two-column structure if possible
- Founder portraits slightly smaller

---

## Mobile

Convert to vertical layout:

1. Eyebrow
2. Main heading
3. Story paragraphs
4. Closing line
5. Founder portraits
6. Founder names
7. Quote card

---


---

# Responsive Wireframes

Use these wireframes as implementation guidance for desktop, tablet, and mobile layouts. They describe layout hierarchy only, not exact colors, font choices, or visual styling.

---

## Desktop Wireframe

Recommended breakpoint:
- `1024px+`

Layout behavior:
- Two-column editorial layout
- Left narrative area slightly wider than right visual area
- Founder portraits and quote stay grouped together
- Content should be vertically balanced in the section

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  ┌─────────────────────────────── CONTAINER ───────────────────────────────┐ │
│  │                                                                          │ │
│  │  ┌────────────── LEFT: STORY NARRATIVE ──────────────┐ ┌──────────────┐ │ │
│  │  │                                                    │ │ RIGHT:       │ │ │
│  │  │  ── THE ORIGIN                                    │ │ FOUNDERS     │ │ │
│  │  │                                                    │ │              │ │ │
│  │  │  TIA was born from                                │ │ ┌────┐┌────┐ │ │ │
│  │  │  a problem we                                     │ │ │IMG ││IMG │ │ │ │
│  │  │  kept seeing.                                     │ │ └────┘└────┘ │ │ │
│  │  │                                                    │ │ ┌────┐       │ │ │
│  │  │  Paragraph 1                                      │ │ │IMG │       │ │ │
│  │  │                                                    │ │ └────┘       │ │ │
│  │  │  ──                                                │ │              │ │ │
│  │  │  Paragraph 2                                      │ │ HARIRAJ ·    │ │ │
│  │  │                                                    │ │ SANJAY ·     │ │ │
│  │  │  ──                                                │ │ GAURAV VERMA │ │ │
│  │  │  Paragraph 3                                      │ │ Founders,TIA │ │ │
│  │  │                                                    │ │              │ │ │
│  │  │  That framework became TIA.                       │ │ ┌──────────┐ │ │ │
│  │  │                                                    │ │ │ Quote    │ │ │ │
│  │  │                                                    │ │ │ Card     │ │ │ │
│  │  │                                                    │ │ └──────────┘ │ │ │
│  │  └────────────────────────────────────────────────────┘ └──────────────┘ │ │
│  │                                                                          │ │
│  └──────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Desktop Layout Notes

- Founder portraits should be displayed in one clean horizontal row when enough width is available.
- If portrait width becomes tight, reduce card width instead of shrinking the left text too much.
- Keep the quote card aligned under the founder row.
- Keep the left heading and right portraits aligned visually near the top.
- Closing statement should end the left story column around the same vertical zone as the quote card.

---

## Tablet Wireframe

Recommended breakpoint:
- `768px – 1023px`

Layout behavior:
- Keep two-column structure if space allows
- Reduce gap between columns
- Reduce portrait card size
- Keep quote card below founder names
- Avoid forcing the section into mobile layout too early

```text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  ┌────────────────────── CONTAINER ───────────────────────┐  │
│  │                                                        │  │
│  │ ┌──────────── LEFT STORY ───────────┐ ┌──────────────┐ │  │
│  │ │                                   │ │ RIGHT VISUAL │ │  │
│  │ │ ── THE ORIGIN                     │ │              │ │  │
│  │ │                                   │ │ ┌───┐┌───┐   │ │  │
│  │ │ TIA was born from                 │ │ │IMG││IMG│   │ │  │
│  │ │ a problem we                      │ │ └───┘└───┘   │ │  │
│  │ │ kept seeing.                      │ │ ┌───┐        │ │  │
│  │ │                                   │ │ │IMG│        │ │  │
│  │ │ Paragraph 1                       │ │ └───┘        │ │  │
│  │ │ ──                                │ │              │ │  │
│  │ │ Paragraph 2                       │ │ Founder      │ │  │
│  │ │ ──                                │ │ names row    │ │  │
│  │ │ Paragraph 3                       │ │              │ │  │
│  │ │                                   │ │ ┌──────────┐ │ │  │
│  │ │ That framework became TIA.        │ │ │ Quote    │ │ │  │
│  │ │                                   │ │ │ Card     │ │ │  │
│  │ │                                   │ │ └──────────┘ │ │  │
│  │ └───────────────────────────────────┘ └──────────────┘ │  │
│  │                                                        │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Tablet Layout Notes

- If the founder row cannot fit three portraits cleanly, use a `2 + 1` portrait arrangement.
- Keep portrait cards equal in size.
- Keep quote card full width inside the right column.
- Avoid placing the quote above the portraits.
- Reduce vertical padding slightly compared to desktop, but keep the section breathable.

---

## Mobile Wireframe

Recommended breakpoint:
- `0px – 767px`

Layout behavior:
- Convert to a single-column editorial story
- Story content comes first
- Founder images come after the closing line
- Quote card comes last
- Keep section clean and human-focused

```text
┌──────────────────────────────────────┐
│                                      │
│  ┌──────────── CONTAINER ──────────┐ │
│  │                                │ │
│  │  ── THE ORIGIN                 │ │
│  │                                │ │
│  │  TIA was born from             │ │
│  │  a problem we                  │ │
│  │  kept seeing.                  │ │
│  │                                │ │
│  │  Paragraph 1                   │ │
│  │                                │ │
│  │  ──                            │ │
│  │  Paragraph 2                   │ │
│  │                                │ │
│  │  ──                            │ │
│  │  Paragraph 3                   │ │
│  │                                │ │
│  │  That framework became TIA.    │ │
│  │                                │ │
│  │  ┌──────┐ ┌──────┐             │ │
│  │  │ IMG  │ │ IMG  │             │ │
│  │  └──────┘ └──────┘             │ │
│  │  ┌──────┐                      │ │
│  │  │ IMG  │                      │ │
│  │  └──────┘                      │ │
│  │                                │ │
│  │  HARIRAJ · SANJAY ·            │ │
│  │  GAURAV VERMA                  │ │
│  │  Founders, TIA                 │ │
│  │                                │ │
│  │  ┌──────────────────────────┐  │ │
│  │  │ Quote Card               │  │ │
│  │  │                          │  │ │
│  │  │ “After the 20th pilot…”  │  │ │
│  │  │ — Hariraj, Co-founder    │  │ │
│  │  └──────────────────────────┘  │ │
│  │                                │ │
│  └────────────────────────────────┘ │
│                                      │
└──────────────────────────────────────┘
```

### Mobile Layout Notes

- Keep founder portraits in a `2 + 1` grid or horizontal scroll only if image width becomes too tight.
- Recommended default: `2 + 1` grid, not carousel.
- Founder names can wrap into two lines.
- Quote card should take full available width.
- Maintain enough vertical spacing between story, founders, and quote.
- Do not place founder visuals before the story on mobile.

---

# Implementation Guidance for Responsive Layout

## Suggested CSS Layout Strategy

Use a responsive grid:

```css
.origin-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: clamp(48px, 7vw, 120px);
  align-items: center;
}

@media (max-width: 767px) {
  .origin-layout {
    grid-template-columns: 1fr;
  }
}
```

## Suggested Founder Grid Strategy

```css
.founder-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(8px, 1.5vw, 16px);
}

@media (max-width: 1023px) {
  .founder-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .founder-grid > :last-child {
    grid-column: 1 / 2;
  }
}

@media (max-width: 767px) {
  .founder-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

## Suggested Content Order

Desktop and tablet:
```text
Grid row:
Left narrative | Right founder visuals
```

Mobile:
```text
Eyebrow
Heading
Story paragraph 1
Story paragraph 2
Story paragraph 3
Closing line
Founder portraits
Founder names
Quote card
```

---

# Animation Wireframe Behavior

## Desktop Animation Flow

```text
1. Eyebrow line draws
2. Heading reveals line by line
3. Paragraphs reveal sequentially
4. Founder portraits fade/slide up with stagger
5. Founder names reveal after portraits
6. Quote card reveals last
7. Closing line gets subtle emphasis
```

## Tablet Animation Flow

Same as desktop, but reduce movement distance.

## Mobile Animation Flow

Use simpler scroll reveals:
```text
1. Eyebrow
2. Heading
3. Story blocks
4. Closing line
5. Founder image grid
6. Quote card
```

Avoid complex parallax on mobile.


# Important Constraints

## Do NOT:
- Add excessive cards
- Add decorative dashboards
- Add floating widgets
- Add analytics graphics
- Add noisy visual elements

This section should feel:
- grounded
- human
- calm
- strategic

---

# Final UX Goal

This section should communicate:

```text
Experienced founders
+
Real enterprise pain
+
A disciplined response to AI failure
```
