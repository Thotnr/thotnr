# TIA_PAGE_ENGAGEMENT_SECTION_REVAMP_PRD.md

## Section
TIA Page — Engagement Section Revamp

## Target Section
Section 5 — Anatomy of a TIA Engagement

---

# Objective

Revamp the TIA engagement section to match the provided reference layout exactly in structure, spacing, and information architecture, while using the existing website design system from `index.css`.

The section should communicate what a TIA engagement actually looks like through:
- a strong editorial heading
- a clean 3-phase timeline band
- three detailed phase cards
- premium dark-section styling
- clear deliverables
- Ask TIA preview prompts

This section should feel:
- premium
- strategic
- enterprise-grade
- structured
- calm
- professional
- easy to scan

---

# Design System Rules

Follow the existing project tokens from `index.css`.

Use only design tokens and CSS variables already defined in the project where possible.

## Required Background

```css
background: var(--color-secondary);
```

The fixed section background is:

```css
--color-secondary: #1D3557;
```

## Fonts

Use the project typography system:

```css
--font-heading: 'Sora', sans-serif;
--font-body: 'Source Serif 4', serif;
--font-mono: 'IBM Plex Mono', monospace;
--font-accent: 'Playfair Display', serif;
```

## Colors

Use the project tokens:

```css
--color-primary: #F1FAEE;
--color-secondary: #1D3557;
--color-tertiary: #457B9D;
--color-accent: #A8DADC;
--color-highlight: #E63946;
--color-text-white: #ffffff;
--color-pillars-cyan: #5EEAD4;
```

Use `--color-highlight` only for small phase labels like `PHASE 01`, not large surfaces.

Use `--color-accent` and `--color-pillars-cyan` for subtle lines, icons, labels, and interactions.

---

# Exact Content

## Eyebrow

```text
IN PRACTICE
```

## Main Heading

```text
What a TIA engagement actually
looks like.
```

Important:
- The words `actually looks like.` should be visually emphasized using accent treatment.
- Keep the layout like the reference: first part in white, emphasized part in accent/cyan tone.
- The emphasized words may use `--font-accent` italic styling if aligned with the existing brand style.

---

# Phase Timeline Band

Place directly under the heading.

Three timeline blocks:

## Timeline Item 01

```text
WEEKS 1–4
Sense
```

## Timeline Item 02

```text
WEEKS 4–8
Shape
```

## Timeline Item 03

```text
WEEKS 8–16+
Scale
```

Layout:
- full-width horizontal band
- three equal columns
- dark elevated surface
- subtle vertical dividers between columns
- centered text in each column
- weeks label in mono style
- phase name below

---

# Phase Cards

Use three cards below the timeline band.

Layout:
- 3-column grid on desktop
- equal width cards
- aligned top
- premium bordered cards
- same content structure inside each card

---

# Card 01 — Sense

## Phase Label

```text
PHASE 01
```

## Title

```text
Sense
```

## What We Do

```text
Data landscape audit
System and workflow mapping
Stakeholder interviews
Governance and risk assessment
```

## You Receive

```text
Data Readiness Report
Enterprise AI Opportunity Landscape
```

## Ask TIA

```text
Run a Data Readiness check on my org →
```

---

# Card 02 — Shape

## Phase Label

```text
PHASE 02
```

## Title

```text
Shape
```

## What We Do

```text
AI use case identification
Solution architecture
ROI modeling and risk assessment
Phased delivery roadmap
```

## You Receive

```text
AI Opportunity Map
TIA Capability Blueprint
```

## Ask TIA

```text
Show me my highest-impact AI opportunities →
```

---

# Card 03 — Scale

## Phase Label

```text
PHASE 03
```

## Title

```text
Scale
```

## What We Do

```text
End-to-end AI deployment
System and workflow integration
Governance and monitoring setup
Team enablement and handover
```

## You Receive

```text
Production-grade AI capability
TIA Governance Layer
```

## Ask TIA

```text
Show me my AI outcomes this quarter →
```

---

# Desktop Layout

## Section Container

Use full-width section.

Suggested structure:

```text
<section id="tia-engagement">
  <div class="container">
    Header
    Timeline Band
    Phase Cards Grid
  </div>
</section>
```

## Spacing

Recommended:

```css
padding-top: clamp(96px, 10vw, 148px);
padding-bottom: clamp(96px, 10vw, 148px);
padding-left/right: clamp(24px, 5vw, 80px);
```

Container:

```css
max-width: 1320px;
margin: 0 auto;
```

---

# Header Layout

Header should align left.

Structure:

```text
— IN PRACTICE

What a TIA engagement actually
looks like.
```

## Eyebrow

- horizontal line before label
- use mono font
- uppercase
- small size
- accent color
- left aligned

## Heading

- large editorial heading
- max-width around `820px`
- white primary text
- accent emphasis on `actually looks like.`
- controlled line break similar to the reference

---

# Timeline Band Layout

Place timeline band after heading.

Recommended spacing:

```css
margin-top: clamp(36px, 5vw, 56px);
```

Timeline band:

```css
display: grid;
grid-template-columns: repeat(3, 1fr);
border: 1px solid rgba(168, 218, 220, 0.12);
background: rgba(11, 15, 25, 0.12);
border-radius: 8px;
overflow: hidden;
```

Each item:
- centered
- padded vertically
- vertical divider except last item
- weeks label above
- phase name below

Suggested item padding:

```css
padding: 28px 24px;
```

Use:
- weeks label: `var(--font-mono)`
- phase name: `var(--font-heading)` or existing heading utility

---

# Cards Grid Layout

Place cards below timeline band.

Recommended spacing:

```css
margin-top: clamp(48px, 6vw, 72px);
```

Desktop grid:

```css
display: grid;
grid-template-columns: repeat(3, minmax(0, 1fr));
gap: clamp(20px, 2vw, 28px);
```

---

# Phase Card Styling

Each card should visually match the reference but follow project colors.

Recommended:

```css
background: rgba(255, 255, 255, 0.045);
border: 1px solid rgba(168, 218, 220, 0.16);
border-radius: 6px;
padding: clamp(28px, 3vw, 40px);
min-height: 560px;
display: flex;
flex-direction: column;
```

Hover:

```css
border-color: rgba(94, 234, 212, 0.42);
background: rgba(255, 255, 255, 0.065);
transform: translateY(-6px);
box-shadow: 0 24px 80px rgba(0, 0, 0, 0.18);
```

Transition:

```css
transition:
  transform 0.55s cubic-bezier(0.16, 1, 0.3, 1),
  border-color 0.55s cubic-bezier(0.16, 1, 0.3, 1),
  background 0.55s cubic-bezier(0.16, 1, 0.3, 1),
  box-shadow 0.55s cubic-bezier(0.16, 1, 0.3, 1);
```

---

# Card Internal Structure

Each card should follow this exact order:

```text
PHASE 01
Sense

WHAT WE DO
- item
- item
- item
- item

YOU RECEIVE
[artifact row]
[artifact row]

divider

✦ ASK TIA
[prompt button]
```

---

# Card Typography

## Phase Label

Use mono style.

```css
font-family: var(--font-mono);
letter-spacing: 0.22em;
text-transform: uppercase;
color: var(--color-highlight);
```

## Title

Use heading style.

```css
font-family: var(--font-heading);
color: var(--color-text-white);
```

## Mini Section Labels

For `WHAT WE DO`, `YOU RECEIVE`, `ASK TIA`:

```css
font-family: var(--font-mono);
letter-spacing: 0.24em;
text-transform: uppercase;
color: var(--color-pillars-cyan);
```

---

# What We Do List

Use clean line items.

Each item:
- starts with small cyan dash
- text in white/muted white
- comfortable vertical spacing

Example:

```text
– Data landscape audit
– System and workflow mapping
```

---

# You Receive Rows

Use small elevated artifact rows.

Each row:
- subtle darker surface
- small document/icon square on the left
- text on right
- rounded corners
- consistent spacing

Suggested:

```css
background: rgba(255, 255, 255, 0.045);
border-radius: 4px;
padding: 12px 14px;
display: flex;
align-items: center;
gap: 10px;
```

Icon:
- small square
- use `FileText`, `PanelTop`, `Layers`, or similar lucide icon
- icon color cyan/accent
- icon background: `rgba(168, 218, 220, 0.16)`

---

# Ask TIA Prompt Button

At bottom of each card.

Before Ask TIA:
- add subtle dashed divider

Ask label:

```text
✦ ASK TIA
```

Prompt button:
- full width
- border
- rounded
- compact
- text left
- arrow right
- hover moves arrow right

Suggested:

```css
border: 1px solid rgba(168, 218, 220, 0.24);
background: rgba(168, 218, 220, 0.06);
border-radius: 4px;
padding: 12px 14px;
```

Hover:

```css
background: rgba(168, 218, 220, 0.1);
border-color: rgba(94, 234, 212, 0.42);
```

---

# Animation System

Animations should be smooth, premium, and professional.

## On Scroll Reveal Sequence

1. Eyebrow line expands
2. Eyebrow text fades upward
3. Heading fades upward with blur-to-clear
4. Timeline band fades upward
5. Timeline items reveal left-to-right
6. Cards reveal one by one

Suggested delays:
- eyebrow: `0.08s`
- heading: `0.18s`
- timeline: `0.34s`
- card 01: `0.50s`
- card 02: `0.64s`
- card 03: `0.78s`

## Timeline Animation

Timeline band should feel like a process system activating.

Optional:
- thin line draw animation across each timeline block
- weeks label fades first, phase name follows

## Card Hover Animation

Each card:
- lifts slightly
- border becomes more cyan
- artifact rows subtly brighten
- Ask TIA arrow moves right

Avoid:
- bouncing
- rotation
- aggressive 3D
- playful motion

---

# Responsive Behavior

## Large Desktop

- Heading left aligned
- Timeline: 3 equal columns
- Cards: 3 equal columns

## Tablet

Timeline:
- keep 3 columns if width allows
- reduce padding

Cards:
- switch to 1 column or 2 columns depending available width
- preferred tablet layout:
  - Sense and Shape in 2 columns
  - Scale spans full width below

```css
@media (max-width: 1024px) {
  .engagement-cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .engagement-card:nth-child(3) {
    grid-column: span 2;
  }
}
```

## Mobile

Timeline:
- switch to vertical stack

```css
grid-template-columns: 1fr;
```

Cards:
- single column
- no forced min-height
- reduce padding

Mobile order:
1. Eyebrow
2. Heading
3. Timeline stacked
4. Sense card
5. Shape card
6. Scale card

---

# Accessibility

- Ask TIA prompt buttons should be buttons or links with accessible labels.
- Icons can be decorative with `aria-hidden="true"`.
- Do not rely only on color for hierarchy.
- Maintain readable contrast on dark background.
- Respect `prefers-reduced-motion`.

---

# Implementation Notes

## Component Suggested Name

```text
S5Engagement
```

## Section ID

```text
tia-engagement
```

## Data-Driven Structure

Create arrays for:
- timeline items
- engagement phase cards
- what we do items
- you receive items
- ask TIA prompts

Keep JSX clean and reusable.

---

# Important Constraints

Do not:
- force section to 100vh
- use hardcoded typography outside project font variables
- use random new fonts
- add unrelated dashboard graphics
- add extra content not listed above
- change section background away from `var(--color-secondary)`
- make cards too bright
- make animations playful

---

# Final Visual Goal

The final section should match the reference layout:

```text
Dark navy background
Left-aligned eyebrow and editorial heading
Three-column timeline band
Three detailed phase cards
Muted dark elevated surfaces
Cyan/accent labels and interactions
Professional enterprise spacing
Smooth scroll reveal animation
```

The section should clearly explain:

```text
Sense → Shape → Scale
```

as the practical engagement model behind TIA.
