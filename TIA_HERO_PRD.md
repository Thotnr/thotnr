# TIA Hero Section PRD

## Section Name
TIA Hero Section

---

# Objective

Design a premium, cinematic, enterprise-grade hero section for the TIA landing page.

The hero should immediately communicate:
- TIA as a framework
- Enterprise AI positioning
- Strategic intelligence
- Premium product thinking
- Future-facing consultancy experience

The hero must feel:
- Minimal
- Premium
- Balanced
- Intelligent
- Executive-level
- Product-oriented
- Enterprise-focused

The hero occupies full viewport height (`100vh`).

---

# Layout Structure

## Main Layout

Use a split-screen layout:

| Left Side | Right Side |
|---|---|
| Strategic narrative content | Interactive UI elements |

### Width Distribution

- Left content area: `52%`
- Right content area: `48%`

The layout should remain visually balanced across large desktop screens.

---

# Hero Container

## Height

- Full viewport height (`100vh`)
- Content vertically centered

---

# Left Content Area

## Positioning

- Left aligned
- Start around `10%` from left edge
- Content vertically centered
- Maximum width should remain controlled for readability

Suggested width:
- `520px – 640px`

---

# Left Content Structure

## 1. Eyebrow

### Content

`THE FRAMEWORK`

### Layout

- Horizontal line before text
- Small compact alignment
- Tight spacing
- Positioned above hero title

### Animation

- Line expands horizontally
- Text fades in after line animation completes

---

## 2. Hero Word

### Content

`TIA`

### Layout

- Large visual focus
- Reduced slightly from oversized scale
- Maintain strong visual hierarchy
- Left aligned

### Animation

- Blur-to-sharp reveal
- Slight upward movement
- Smooth scale settle

---

## 3. Subtitle

### Content

`THOTNR INTELLIGENCE AUGMENTATION`

### Layout

- Positioned directly below hero word
- Compact vertical spacing
- Structured and system-like appearance
- Thin divider line below subtitle

### Animation

- Character stagger reveal
- Subtle opacity transition

---

## 4. Definition Statement

### Content

```text
A framework,
a delivery model,
and soon — a product
you can talk to.
```

### Layout

- Multi-line statement block
- Controlled line width
- Strong readability
- Positioned below subtitle divider

### Animation

- Line-by-line reveal
- Slight upward transition

---

## 5. Supporting Paragraph

### Content

```text
We build enterprise AI that is grounded in your data,
embedded in your workflows, and measured by outcomes
your business can defend.
```

### Layout

- Narrow readable width
- Positioned below definition statement
- Comfortable spacing above CTA region

### Animation

- Soft fade reveal
- Delayed slightly after statement animation

---

# Right Content Area

The right side contains compact interactive UI components.

Do NOT use large dashboards or heavy cards.

The right side should feel:
- Lightweight
- Floating
- Intelligent
- Minimal
- Premium

---

# Right Side Structure

## 1. Tab Pill Navigation

### Layout

Three segmented floating pills:

- Discipline
- Delivery Model
- Product →

### Structure

Single horizontal segmented component.

### Behavior

- Hover interaction on each pill
- Product pill treated as active/future-facing state

### Animation

- Staggered entrance
- Hover glow
- Smooth floating movement
- Subtle hover lift

---

# 2. Primary CTA

### Content

`Explore the Framework ↓`

### Layout

- Large premium CTA block
- Positioned below segmented tabs
- Wider than standard button
- Strong visual presence

### Interaction

- Hover glow
- Slight scale interaction
- Magnetic hover movement

### Action

On click:
- Smooth scroll to Section 4 (TIA Framework)

---

# 3. Ask TIA Button

### Content

`✦ Ask TIA — Beta`

### Layout

- Pill-shaped glowing button
- Floating appearance
- Positioned below primary CTA
- Large soft shadow glow around button
- “BETA” badge integrated inside button

### Behavior

Should feel like:
- AI interaction entry point
- Product gateway
- Living system element

### Interaction

- Hover pulse
- Ambient glow animation
- Slight floating movement
- Cursor magnetic effect

### Action

On click:
- Open Ask TIA chatbot UI modal

---

# Spacing System

Maintain generous breathing room between:
- Left narrative content
- Right UI controls
- CTA elements

Avoid:
- Dense layouts
- Overlapping content
- Excessive visual clutter

---

# Responsive Behavior

## Desktop

- Maintain split layout
- Preserve balance between narrative and interactive side

---

## Tablet

- Reduce spacing
- Stack right-side elements tighter
- Maintain horizontal segmented tabs

---

## Mobile

Convert to vertical stack:
1. Left narrative content
2. Tab pills
3. Primary CTA
4. Ask TIA button

### Mobile Rules

- Reduce hero word size
- Maintain spacing consistency
- Preserve premium feel
- Avoid oversized controls
- Buttons should remain touch-friendly

---

# Motion & Animation Principles

Animations must feel:
- Smooth
- Controlled
- Cinematic
- Enterprise-grade

Avoid:
- Aggressive movement
- Excessive bouncing
- Overly playful behavior

Preferred:
- Opacity transitions
- Blur reveals
- Subtle floating
- Controlled hover interactions
- Slow parallax movement

---

# Important Constraints

## Do NOT:
- Add additional sections inside hero
- Add trust logos
- Add analytics widgets
- Add bottom info strips
- Add excessive floating cards
- Add noisy interface components

---

# Color Direction

Choose colors according to:
- Background video tone
- Existing design system
- CLAUDE.md project guidelines

Avoid hardcoding colors in component files.

All colors should come from:
- Design tokens
- CSS variables
- Existing project theme system

---

# Final UX Goal

The hero should feel like:

```text
Enterprise intelligence operating system
+
AI product future
+
Premium consultancy positioning
```

The section must immediately communicate:
- clarity
- confidence
- intelligence
- scalability
- product maturity
