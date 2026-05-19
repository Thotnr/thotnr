# UPDATE_PILLERS_PRD.md

## Section
S3 — The Three Pillars

---

# Objective

Create a premium, professional, extended “Three Pillars” section for the TIA landing page.

The section should visually match the generated reference layout:
- dark navy section background
- three large premium pillar cards
- cyan/teal highlights
- white editorial heading
- thin bordered glass-style cards
- clean line icons
- spacious layout
- professional enterprise feel

This section should NOT be forced into `100vh`.

It should have enough vertical space to breathe and should extend naturally based on content.

---

# Fixed Background Color

Use:

```css
background: var(--color-secondary);
```

`--color-secondary` is fixed as:

```css
--color-secondary: #1D3557;
```

Do not change this background color.

---

# Color Direction

Use colors visually matching the reference image.

Recommended token-style usage:

```css
--pillars-bg: var(--color-secondary);
--pillars-text-primary: rgba(255, 255, 255, 0.96);
--pillars-text-secondary: rgba(255, 255, 255, 0.78);
--pillars-text-muted: rgba(255, 255, 255, 0.62);
--pillars-cyan: #5EEAD4;
--pillars-cyan-soft: rgba(94, 234, 212, 0.72);
--pillars-border: rgba(255, 255, 255, 0.18);
--pillars-border-hover: rgba(94, 234, 212, 0.55);
--pillars-card-bg: rgba(255, 255, 255, 0.035);
--pillars-card-bg-hover: rgba(255, 255, 255, 0.055);
```

Use project design tokens where available. If new tokens are needed, define them in CSS/design-token layer, not inline JSX hardcoded everywhere.

---

# Icon Direction

Use the same icon meanings as the reference.

## Pillar 01 — Discipline
Icon: Brain / intelligence line icon

## Pillar 02 — Delivery Model
Icon: Cube / architecture / model line icon

## Pillar 03 — Product
Icon: Sparkle / star / product future line icon

Suggested library:
- `lucide-react`

Suggested icons:
- `BrainCircuit` or `Brain`
- `Box` or `Cube`
- `Sparkles`

Icons should be:
- thin line style
- cyan/teal stroke
- placed top-right inside each card
- not filled
- not oversized

---

# Section Content

Use the exact content below.

## Eyebrow

```text
THREE PILLARS
```

## Main Heading

```text
TIA stands on three pillars.
Each holds the others up.
```

---

# Pillar 01

## Label

```text
01
```

## Title

```text
Discipline
```

## Subtitle

```text
The thinking behind TIA.
```

## Description

```text
Data first. Outcomes led. Governance by design. We treat AI as a discipline — not a demo. Every TIA engagement begins with a worldview the enterprise can defend.
```

## Core Beliefs

```text
Data before model
Outcomes before outputs
Production before pilots
Discipline before demos
```

## CTA

```text
Read the TIA Principles →
```

CTA behavior:
- smooth scroll to Section 6 / TIA Principles

---

# Pillar 02

## Label

```text
02
```

## Title

```text
Delivery Model
```

## Subtitle

```text
The way we work.
```

## Description

```text
Sense → Shape → Scale. A three-phase engagement built for enterprise reality. Repeatable, measurable, accountable — without sacrificing depth or governance.
```

## Phases

```text
Sense — Understand the enterprise reality
Shape — Design the right AI capability
Scale — Embed into systems and operations
```

## CTA

```text
See the framework in action →
```

CTA behavior:
- smooth scroll to Section 4 / TIA Framework

---

# Pillar 03

## Label

```text
03 · BETA · COMING SOON
```

## Title

```text
Product
```

## Subtitle

```text
The future of TIA.
```

## Description

```text
Soon, the framework will talk back. Ask TIA — a conversational interface to the discipline itself. Self-assess your AI readiness. Surface opportunities. Get a TIA-shaped plan, on demand.
```

## Sample Prompts

Place inside a mini-demo card:

```text
How AI-ready is my data? →
Find AI angles in pharma. →
Map a TIA engagement for my business. →
```

## CTA

```text
Join the Ask TIA waitlist →
```

CTA behavior:
- smooth scroll to Ask TIA / waitlist section

---

# Desktop Layout

## Section Container

Use a full-width section with centered max-width content.

Suggested:

```css
padding-top: clamp(96px, 10vw, 150px);
padding-bottom: clamp(96px, 10vw, 150px);
```

Use a max-width around:

```css
max-width: 1440px;
```

Horizontal padding:

```css
padding-left/right: clamp(24px, 5vw, 80px);
```

---

# Header Layout

Header should sit above the cards and align left.

Structure:

```text
— THREE PILLARS

TIA stands on three pillars.
Each holds the others up.
```

## Eyebrow

- horizontal line before label
- cyan/teal color
- uppercase
- tight letter spacing
- left aligned

## Heading

- large editorial heading
- white/off-white color
- max-width around `820px`
- two-line controlled wrap

---

# Card Layout

Use a 3-column grid on desktop.

```css
display: grid;
grid-template-columns: repeat(3, minmax(0, 1fr));
gap: 12px to 18px;
```

Each card should:
- have equal height
- use flex column layout
- keep CTA pinned near bottom
- have generous internal padding
- feel like a premium glass panel

Suggested card padding:

```css
padding: clamp(28px, 3vw, 42px);
```

Suggested card min-height:

```css
min-height: 620px;
```

---

# Card Visual Styling

Each card should match the reference.

```css
background: rgba(255, 255, 255, 0.035);
border: 1px solid rgba(255, 255, 255, 0.18);
border-radius: 22px;
box-shadow: 0 24px 80px rgba(0, 0, 0, 0.14);
```

Hover state:

```css
background: rgba(255, 255, 255, 0.055);
border-color: rgba(94, 234, 212, 0.55);
transform: translateY(-8px);
```

Transition:

```css
transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.65s cubic-bezier(0.16, 1, 0.3, 1),
            background 0.65s cubic-bezier(0.16, 1, 0.3, 1);
```

---

# Card Internal Structure

Each pillar card should follow this order:

```text
Top row:
[number + short divider]                  [icon]

Title

Subtitle

Description

Small divider line

List / mini demo content

Bottom divider line

CTA
```

---

# Number Row

Use number with short line after it.

Example:

```text
01 —
```

For Product:

```text
03 — BETA · COMING SOON
```

## Beta Badge

The `BETA` label should be a small pill badge.

Suggested:

```css
background: var(--pillars-cyan);
color: var(--color-secondary);
border-radius: 999px;
padding: 4px 9px;
font-size: 11px;
font-weight: 800;
```

---

# Lists

## Pillar 01 List

Use small cyan dots.

```text
• Data before model
• Outcomes before outputs
• Production before pilots
• Discipline before demos
```

## Pillar 02 List

Use circular arrow icons before each phase, matching the reference.

```text
→ Sense — Understand the enterprise reality
→ Shape — Design the right AI capability
→ Scale — Embed into systems and operations
```

The arrow icon should sit inside a small outlined cyan circle.

---

# Product Mini-Demo Card

Inside Pillar 03, create a small nested card for sample prompts.

Visual style:

```css
background: rgba(255, 255, 255, 0.045);
border: 1px solid rgba(255, 255, 255, 0.18);
border-radius: 16px;
```

Each prompt row:
- text left
- arrow right
- divider line between rows
- hover row slides arrow slightly right

Prompt rows:

```text
How AI-ready is my data? →
Find AI angles in pharma. →
Map a TIA engagement for my business. →
```

---

# CTA Styling

CTA should be text-link style, not filled button.

Visual:
- cyan/teal text
- arrow to right
- top divider line above CTA
- hover arrow moves right
- hover underline or glow is optional

---

# Animation System

Animations should feel premium, smooth, and professional.

## On Scroll Reveal

Sequence:
1. Eyebrow line expands
2. Eyebrow text fades upward
3. Heading fades upward with blur-to-clear
4. Card 01 rises in
5. Card 02 rises in
6. Card 03 rises in

Suggested timing:
- header: `0.1s`
- card 01: `0.26s`
- card 02: `0.40s`
- card 03: `0.54s`

---

# Card Hover Animation

Each card:
- lifts slightly
- border becomes more cyan
- icon glows softly
- background becomes slightly more visible
- CTA arrow shifts right

Avoid:
- bouncing
- shaking
- aggressive 3D
- playful movement

---

# Product Card Extra Animation

The Product card can have:
- subtle pulsing `BETA` badge
- sparkle icon soft glow
- sample prompt arrows slide on hover

Keep it controlled and premium.

---

# Responsive Behavior

## Large Desktop

- 3 cards in one row
- heading max-width remains controlled
- section breathes with large vertical spacing

## Laptop / Small Desktop

- 3 cards remain in one row if width allows
- reduce card padding slightly
- reduce heading size via responsive clamp

## Tablet

Use 2-column layout:

```css
grid-template-columns: repeat(2, minmax(0, 1fr));
```

Behavior:
- Pillar 01 and 02 appear side-by-side
- Pillar 03 spans full width or sits below with max-width

Recommended:
- Product card spans 2 columns to preserve mini-demo readability

```css
.product-card {
  grid-column: span 2;
}
```

## Mobile

Use single-column layout:

```css
grid-template-columns: 1fr;
```

Mobile order:
1. Eyebrow
2. Heading
3. Discipline card
4. Delivery Model card
5. Product card

Mobile card behavior:
- remove excessive min-height
- keep internal spacing compact
- keep CTA visible
- prompt card rows stack naturally

Suggested mobile section padding:

```css
padding-top: 72px;
padding-bottom: 80px;
```

---

# Accessibility

- All icons should be decorative unless needed.
- CTA links should have meaningful aria-labels.
- Hover interactions must not hide critical content.
- Maintain readable contrast on `--color-secondary`.

---

# Implementation Notes

- Respect project design system.
- Do not hardcode colors repeatedly inside JSX if design tokens can be added.
- Use `var(--color-secondary)` for fixed background.
- Use new section-specific CSS variables if needed.
- Keep JSX clean and data-driven.
- Keep content arrays outside component when practical.

---

# Final Visual Goal

The final section should look like the reference image:

```text
Dark navy background
+
Large editorial white heading
+
Three premium glass-border pillar cards
+
Cyan line icons
+
Cyan interaction accents
+
Professional enterprise spacing
+
Smooth premium animation
```

The section should feel like the central conceptual explanation of TIA:
- disciplined
- structured
- intelligent
- scalable
- premium
