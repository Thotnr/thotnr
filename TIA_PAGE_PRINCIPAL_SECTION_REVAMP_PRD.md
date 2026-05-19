# TIA_PAGE_PRINCIPAL_SECTION_REVAMP_PRD.md

## Section
TIA Page — Principles Section Revamp

## Target Section
Section 6 — The TIA Principles

---

# Objective

Revamp the TIA Principles section to match the provided reference layout exactly in structure and interaction, while using the existing website design system from `index.css`.

The section should feel:
- editorial
- premium
- calm
- principle-led
- strategic
- clean
- easy to scan

The layout should present the seven TIA principles as a refined card grid on a light background.

---

# Fixed Background

Use:

```css
background: var(--color-primary);
```

`--color-primary` is fixed as:

```css
--color-primary: #F1FAEE;
```

Do not change this section background.

---

# Design System Rules

Follow existing tokens from `index.css`.

## Fonts

Use:

```css
--font-heading: 'Sora', sans-serif;
--font-body: 'Source Serif 4', serif;
--font-mono: 'IBM Plex Mono', monospace;
--font-accent: 'Playfair Display', serif;
```

## Colors

Use:

```css
--color-primary: #F1FAEE;
--color-secondary: #1D3557;
--color-tertiary: #457B9D;
--color-accent: #A8DADC;
--color-highlight: #E63946;
--color-text-primary: #0B0F19;
--color-text-secondary: #2B2D42;
--color-text-tertiary: #6C757D;
--color-divider: rgba(11, 15, 25, 0.1);
```

Color intent:
- Background: `var(--color-primary)`
- Main heading: `var(--color-secondary)` or `var(--color-text-primary)`
- Accent italic heading text: `var(--color-tertiary)`
- Eyebrow and hover left border: `var(--color-highlight)`
- Card text: `var(--color-secondary)`
- Paragraph text: `var(--color-text-tertiary)`
- Card border: `var(--color-divider)`

---

# Exact Content

Use the exact content below.

## Eyebrow

```text
WHAT WE BELIEVE
```

## Main Heading

```text
Seven principles. One discipline.
```

Visual treatment:
- `Seven principles.` should be the primary heading text.
- `One discipline.` should be emphasized with accent/italic treatment.
- Match the reference style: strong editorial heading with the emphasized phrase differentiated.

---

# Principle Cards

## Principle 01

### Number

```text
01
```

### Title

```text
Data before model.
```

### Description

```text
If the data can't prove it, the model can't sustain it.
```

---

## Principle 02

### Number

```text
02
```

### Title

```text
Outcomes before outputs.
```

### Description

```text
An AI that ships is not the goal. An AI that pays back is.
```

---

## Principle 03

### Number

```text
03
```

### Title

```text
Production before pilots.
```

### Description

```text
We engineer for the day after launch, not the demo before it.
```

---

## Principle 04

### Number

```text
04
```

### Title

```text
Discipline before demos.
```

### Description

```text
Impressive on stage is easy. Defensible in production is the work.
```

---

## Principle 05

### Number

```text
05
```

### Title

```text
Governance by design, not by audit.
```

### Description

```text
Risk, compliance, and oversight are built in from week one — not retrofitted.
```

---

## Principle 06

### Number

```text
06
```

### Title

```text
Workflows before features.
```

### Description

```text
AI that fits how teams already work is the AI that gets adopted.
```

---

## Principle 07

### Number

```text
07
```

### Title

```text
AI inside the business, not beside it.
```

### Description

```text
Intelligence belongs in the operating model — not in a parallel project.
```

---

# Desktop Layout

Use the same layout pattern as the reference.

## Container

```css
max-width: 1320px;
margin: 0 auto;
padding-left/right: clamp(24px, 5vw, 80px);
```

## Section Spacing

```css
padding-top: clamp(88px, 9vw, 130px);
padding-bottom: clamp(88px, 9vw, 130px);
```

---

# Header Layout

Header should be left aligned.

Structure:

```text
— WHAT WE BELIEVE

Seven principles. One discipline.
```

## Eyebrow

- mono font
- uppercase
- horizontal line before text
- use `var(--color-highlight)`
- small and refined
- similar to reference

## Heading

- large editorial heading
- `Seven principles.` in primary dark color
- `One discipline.` in accent/italic treatment
- heading should not span full page width unnecessarily
- keep max-width controlled

Suggested:

```css
max-width: 920px;
```

---

# Card Grid Layout

Use a 3-column grid on desktop.

```css
display: grid;
grid-template-columns: repeat(3, minmax(0, 1fr));
gap: clamp(20px, 2vw, 28px);
```

Card placement should match the reference:
- Row 1: 01, 02, 03
- Row 2: 04, 05, 06
- Row 3: 07 only on the left

Do not center the 7th card on desktop. It should stay left-aligned.

---

# Card Styling

Cards should feel like clean white editorial cards on the light section background.

Recommended base style:

```css
background: rgba(255, 255, 255, 0.72);
border: 1px solid var(--color-divider);
border-radius: 6px;
padding: clamp(28px, 3vw, 38px);
min-height: 240px;
position: relative;
overflow: hidden;
transition:
  transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
  border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1),
  box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1),
  background 0.5s cubic-bezier(0.16, 1, 0.3, 1);
```

Subtle card shadow:

```css
box-shadow: 0 20px 50px rgba(11, 15, 25, 0.04);
```

---

# Hover Interaction

On hover:
- card zooms in slightly
- card lifts subtly
- red line appears on the left border
- border becomes slightly stronger
- shadow becomes more visible

Required hover effect:

```css
transform: translateY(-6px) scale(1.025);
box-shadow: 0 26px 70px rgba(11, 15, 25, 0.1);
border-color: rgba(230, 57, 70, 0.24);
background: rgba(255, 255, 255, 0.92);
```

## Red Left Border

Add the left red line using `::before`.

Default:

```css
.card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 3px;
  height: 100%;
  background: var(--color-highlight);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
```

Hover:

```css
.card:hover::before {
  transform: scaleY(1);
}
```

The red line should appear only on hover.

---

# Card Internal Layout

Each card structure:

```text
[number]

[principle title]

[description]

[optional small SHARE / arrow micro-link]
```

The reference contains a small `SHARE ↗` style micro-link. This can be included as a subtle decorative interaction if desired.

If included, use:
- mono font
- small uppercase
- `var(--color-tertiary)`
- very subtle
- not visually dominant

---

# Card Typography

## Number

Use large accent serif style.

```css
font-family: var(--font-accent);
font-size: clamp(42px, 5vw, 58px);
line-height: 1;
font-weight: 700;
color: rgba(230, 57, 70, 0.36);
```

## Title

Use heading style.

```css
font-family: var(--font-heading);
font-size: clamp(18px, 1.8vw, 23px);
line-height: 1.22;
font-weight: 600;
color: var(--color-secondary);
```

## Description

Use body style.

```css
font-family: var(--font-body);
font-size: 15px;
line-height: 1.65;
color: var(--color-text-tertiary);
```

---

# Animation System

Animations should be smooth and premium.

## On Scroll Reveal

Sequence:
1. Eyebrow line expands
2. Eyebrow text fades up
3. Heading fades up with slight blur-to-clear
4. Cards reveal in staggered order

Suggested card reveal order:
- 01, 02, 03
- 04, 05, 06
- 07

Card reveal animation:

```css
opacity: 0;
transform: translateY(28px);
filter: blur(8px);
```

Reveal state:

```css
opacity: 1;
transform: translateY(0);
filter: blur(0);
```

Use stagger delay:
- 01: 0.20s
- 02: 0.30s
- 03: 0.40s
- 04: 0.50s
- 05: 0.60s
- 06: 0.70s
- 07: 0.80s

---

# Responsive Behavior

## Large Desktop

- 3-column card grid
- 7th card remains left aligned in third row
- spacious section padding

## Tablet

Use 2-column grid:

```css
grid-template-columns: repeat(2, minmax(0, 1fr));
```

Card order remains normal:
01, 02, 03, 04, 05, 06, 07

7th card should remain left aligned.

## Mobile

Use single-column grid:

```css
grid-template-columns: 1fr;
```

Mobile order:
1. Eyebrow
2. Heading
3. Card 01
4. Card 02
5. Card 03
6. Card 04
7. Card 05
8. Card 06
9. Card 07

Mobile styling:
- reduce card padding
- remove excessive min-height
- keep hover effect but make it subtle
- on touch devices, left red line can appear on focus/active

---

# Accessibility

- Cards should be readable without hover.
- Hover red line should be decorative only.
- If cards are clickable/shareable, use semantic buttons/links.
- Use `aria-label` for any share links.
- Respect `prefers-reduced-motion`.
- Do not rely only on red line for meaning.

---

# Implementation Notes

## Suggested Component Name

```text
S6Principles
```

## Suggested Section ID

```text
tia-principles
```

## Data-Driven Structure

Create a `principles` array:

```js
const principles = [
  {
    number: '01',
    title: 'Data before model.',
    description: "If the data can't prove it, the model can't sustain it.",
  },
  ...
]
```

Render cards from this array.

---

# Important Constraints

Do not:
- change section background away from `var(--color-primary)`
- introduce new fonts
- use random hardcoded colors when tokens exist
- make the layout dark
- center the 7th card on desktop
- add extra copy beyond the provided content
- make cards overly animated or playful

---

# Final Visual Goal

The final section should match the reference layout:

```text
Light off-white background
Left-aligned eyebrow
Large editorial heading
3-column white card grid
Seven principle cards
Soft pink/red principle numbers
Red left border on hover
Subtle zoom-in hover animation
Premium clean editorial spacing
```

The section should communicate:

```text
Seven principles.
One discipline.
```

with clarity, confidence, and strong visual hierarchy.
