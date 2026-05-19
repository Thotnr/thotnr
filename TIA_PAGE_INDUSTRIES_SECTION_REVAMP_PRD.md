# TIA_PAGE_INDUSTRIES_SECTION_REVAMP_PRD.md

## Section
TIA Page — Industries Section Revamp

## Target Section
Section 7 — TIA + Your Industry

---

# Objective

Revamp the industries section to match the provided reference layout, while using the existing website design system from `index.css`.

The section should show that TIA adapts across industries through three premium industry cards and one fallback CTA.

The section should feel:
- premium
- dark
- strategic
- enterprise-grade
- editorial
- outcome-focused
- easy to scan

---

# Fixed Background

Use:

```css
background: var(--color-secondary);
```

`--color-secondary` is fixed as:

```css
--color-secondary: #1D3557;
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
--color-text-white: #ffffff;
--color-pillars-cyan: #5EEAD4;
--color-overlay-card: rgba(255, 255, 255, 0.08);
--color-overlay-border: rgba(255, 255, 255, 0.15);
--color-icon-bg: rgba(168, 218, 220, 0.18);
```

Color intent:
- Section background: `var(--color-secondary)`
- Heading primary text: `var(--color-text-white)`
- Heading emphasis: `var(--color-accent)` or `var(--color-pillars-cyan)`
- Eyebrow: `var(--color-pillars-cyan)`
- Industry labels: `var(--color-highlight)`
- Metrics and CTA links: `var(--color-pillars-cyan)`
- Cards: subtle dark elevated surface using overlay tokens
- Borders: `var(--color-overlay-border)`

---

# Exact Content

Use the exact content below.

## Eyebrow

```text
WHERE TIA WORKS
```

## Main Heading

```text
TIA adapts to where you operate.
```

Visual treatment:
- `TIA adapts to` should be white.
- `where you operate.` should be emphasized using accent/italic styling.
- Match the reference layout: heading is large, left-aligned, and editorial.

---

# Industry Card 01

## Industry

```text
PHARMA & HEALTHCARE
```

## Signature Use Case

```text
Autonomous Field Intelligence
```

## Outcome Metric

```text
40% faster HCP decisions
```

## Description

```text
Real-time sales and HCP intelligence replacing quarterly manual analysis. AI-powered field coaching, smart targeting, and early risk detection — embedded into the rep workflow.
```

## CTA

```text
Read the story →
```

Target:
- Rexall case study

---

# Industry Card 02

## Industry

```text
FINANCE & BANKING
```

## Signature Use Case

```text
Real-time Risk & Operations
```

## Outcome Metric

```text
60%+ agent deflection
```

## Description

```text
Embedded Agentic AI across lending journeys. Journey-aware agents, RAG-grounded responses, real-time platform actions, with strict guardrails and compliance.
```

## CTA

```text
Read the story →
```

Target:
- Creditas case study

---

# Industry Card 03

## Industry

```text
LIFE & INSURANCE
```

## Signature Use Case

```text
AI-Powered Claims & Underwriting
```

## Outcome Metric

```text
STP lifted 18% → 44%
```

## Description

```text
End-to-end Agentic AI for claims operations. Document intelligence, fraud network detection pre-payment, autonomous claims decisioning — fully POPIA and GDPR compliant.
```

## CTA

```text
Read the story →
```

Target:
- SA Insurer case study

---

# Fallback CTA

## Text

```text
Operating in a different industry?
```

## Button

```text
Tell us about your business →
```

---

# Layout Structure

Use the exact structure from the reference:

```text
— WHERE TIA WORKS

TIA adapts to where you operate.

[Industry Card 01] [Industry Card 02] [Industry Card 03]

------------------------------------------------------------

Operating in a different industry?

[ Tell us about your business → ]
```

---

# Desktop Layout

## Section Container

Use full-width section with centered content.

Recommended:

```css
padding-top: clamp(96px, 10vw, 145px);
padding-bottom: clamp(88px, 9vw, 130px);
padding-left/right: clamp(24px, 5vw, 80px);
```

Container:

```css
max-width: 1320px;
margin: 0 auto;
```

---

# Header Layout

Header should be left aligned.

## Eyebrow

- horizontal line before text
- mono font
- uppercase
- small size
- letter-spaced
- color: `var(--color-pillars-cyan)`
- margin-bottom: around `28px`

Example structure:

```text
— WHERE TIA WORKS
```

## Heading

- large editorial heading
- left aligned
- max-width around `920px`
- white primary text
- emphasized phrase in accent/cyan and italic
- should visually match the reference scale and rhythm

---

# Card Grid Layout

Use a three-column grid on desktop:

```css
display: grid;
grid-template-columns: repeat(3, minmax(0, 1fr));
gap: clamp(20px, 2vw, 28px);
margin-top: clamp(36px, 5vw, 56px);
```

Each card should have equal height.

---

# Industry Card Styling

Cards should visually match the reference:
- dark elevated surface over the section background
- subtle border
- rounded corners
- generous padding
- no images in this layout
- icon at top
- label
- use case title
- metric
- description
- CTA

Recommended:

```css
background: rgba(255, 255, 255, 0.055);
border: 1px solid rgba(168, 218, 220, 0.16);
border-radius: 6px;
padding: clamp(30px, 3vw, 42px);
min-height: 430px;
display: flex;
flex-direction: column;
```

Hover:
- card zooms in slightly
- lifts softly
- border becomes more cyan
- icon background becomes more visible
- CTA arrow moves right

Required hover:

```css
transform: translateY(-6px) scale(1.025);
border-color: rgba(94, 234, 212, 0.42);
background: rgba(255, 255, 255, 0.075);
box-shadow: 0 26px 80px rgba(0, 0, 0, 0.18);
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

Each card should follow this order:

```text
[Icon]

INDUSTRY LABEL

Signature Use Case

Outcome Metric

Description

Read the story →
```

CTA should sit near bottom using `margin-top: auto`.

---

# Icons

Use minimal line icons matching the reference.

Suggested `lucide-react` icons:

## Pharma & Healthcare
Use:
- `Pill`
- or `Capsule`

## Finance & Banking
Use:
- `Landmark`
- or `Building2`

## Life & Insurance
Use:
- `ShieldCheck`
- or `Shield`

Icon style:
- small square icon container
- icon stroke in cyan/accent
- container background: `var(--color-icon-bg)`
- container border: `1px solid rgba(168, 218, 220, 0.18)`
- rounded corners

Suggested:

```css
width: 52px;
height: 52px;
border-radius: 10px;
background: rgba(168, 218, 220, 0.14);
border: 1px solid rgba(168, 218, 220, 0.22);
display: flex;
align-items: center;
justify-content: center;
```

---

# Card Typography

## Industry Label

Use mono font.

```css
font-family: var(--font-mono);
letter-spacing: 0.28em;
text-transform: uppercase;
color: var(--color-highlight);
font-size: 11px;
```

## Use Case Title

Use heading/accent font mix according to project style.

Recommended:

```css
font-family: var(--font-heading);
font-size: clamp(22px, 2vw, 30px);
line-height: 1.35;
color: var(--color-text-white);
```

## Outcome Metric

Use accent color.

```css
font-family: var(--font-heading);
font-size: clamp(22px, 2vw, 30px);
line-height: 1.25;
color: var(--color-pillars-cyan);
font-weight: 700;
```

## Description

Use body font.

```css
font-family: var(--font-body);
font-size: 16px;
line-height: 1.65;
color: rgba(255, 255, 255, 0.82);
```

## CTA

Use mono font.

```css
font-family: var(--font-mono);
letter-spacing: 0.22em;
text-transform: uppercase;
color: var(--color-pillars-cyan);
font-size: 12px;
```

---

# Fallback CTA Area

After cards, add a horizontal divider line.

Recommended:

```css
margin-top: clamp(54px, 6vw, 72px);
border-top: 1px solid rgba(168, 218, 220, 0.16);
padding-top: clamp(36px, 4vw, 54px);
text-align: center;
```

Fallback text:

```css
font-family: var(--font-accent);
font-style: italic;
color: var(--color-text-white);
font-size: clamp(20px, 2vw, 28px);
```

Button:
- pill-shaped outline button
- centered
- border subtle
- white text
- hover background becomes slightly visible
- hover border becomes cyan
- hover moves arrow right

Suggested:

```css
border: 1px solid rgba(255, 255, 255, 0.28);
border-radius: 999px;
padding: 14px 28px;
color: var(--color-text-white);
background: transparent;
```

Hover:

```css
border-color: rgba(94, 234, 212, 0.55);
background: rgba(94, 234, 212, 0.08);
transform: translateY(-2px);
```

---

# Animation System

Animations should be smooth, premium, and professional.

## On Scroll Reveal Sequence

1. Eyebrow line expands
2. Eyebrow text fades up
3. Heading fades up with slight blur-to-clear
4. Industry Card 01 rises in
5. Industry Card 02 rises in
6. Industry Card 03 rises in
7. Divider fades in
8. Fallback CTA fades up

Suggested delays:
- eyebrow: `0.08s`
- heading: `0.18s`
- card 01: `0.34s`
- card 02: `0.48s`
- card 03: `0.62s`
- fallback: `0.78s`

## Card Hover Animation

Each card:
- zooms in slightly
- lifts softly
- icon glows softly
- border becomes cyan
- CTA arrow moves right

Avoid:
- bouncing
- rotation
- heavy 3D
- playful effects

---

# Responsive Behavior

## Large Desktop

- 3 cards in one row
- fallback CTA centered below
- heading max-width controlled

## Tablet

Use 2-column grid:

```css
grid-template-columns: repeat(2, minmax(0, 1fr));
```

Recommended:
- Card 01 and 02 in first row
- Card 03 spans full width or stays left aligned depending available width

Option:

```css
.industry-card:nth-child(3) {
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
3. Pharma & Healthcare card
4. Finance & Banking card
5. Life & Insurance card
6. Divider
7. Fallback text
8. Button

Mobile adjustments:
- reduce card padding
- remove forced min-height
- keep hover subtle
- ensure button full width or comfortable width

---

# Accessibility

- Cards should be readable without hover.
- CTAs should be links/buttons with meaningful labels.
- Icons can be decorative with `aria-hidden="true"`.
- Maintain strong contrast on dark background.
- Respect `prefers-reduced-motion`.

---

# Implementation Notes

## Suggested Component Name

```text
S7Industries
```

## Suggested Section ID

```text
tia-industries
```

## Data-Driven Structure

Create an industries array:

```js
const industries = [
  {
    icon: Pill,
    industry: 'PHARMA & HEALTHCARE',
    title: 'Autonomous Field Intelligence',
    metric: '40% faster HCP decisions',
    description: '...',
    cta: 'Read the story →',
    target: 'rexall',
  },
  ...
]
```

Render the cards from this array.

---

# Important Constraints

Do not:
- change background away from `var(--color-secondary)`
- add images to cards for this layout
- introduce unrelated content
- introduce new random fonts
- make hover overly playful
- make cards too bright
- use hardcoded colors repeatedly if tokens can be used
- remove the fallback CTA

---

# Final Visual Goal

The final section should match the reference layout:

```text
Dark navy background
Left-aligned eyebrow
Large editorial heading with italic accent phrase
Three premium industry cards
Icon at top of each card
Red industry label
White use case title
Cyan metric
Muted white description
Mono CTA link
Centered fallback CTA below divider
Cards zoom in on hover
```

The section should clearly communicate:

```text
TIA adapts to where you operate.
```
