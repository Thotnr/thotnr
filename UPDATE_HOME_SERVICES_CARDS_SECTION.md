# UPDATE_HOME_SERVICES_CARDS_SECTION.md

## Goal

Update the Home page `ServicesCards.jsx` section to match the provided premium AI capability section layout.

The current section feels weak, generic, and visually unprofessional. Replace it with a dark, premium, consultancy-style capability section using the same content direction, same visual mood, and same color behavior shown in the reference image.

---

## Target Section Identity

This section should communicate:

> Thotnr builds AI capabilities that turn intelligence into practical business value.

The section should not look like a generic services grid. It should feel like a premium strategic capability framework.

---

## Reference Layout

Use this structure:

```txt
Dark full-width section

Top Header
- Small red eyebrow: AI CAPABILITIES
- Large headline: The foundations of Intelligence Augmented
- Supporting paragraph

Three premium capability cards in one row on desktop

Card 1: Decisioning
Card 2: Context
Card 3: Execution

Bottom insight strip
- Left: icon + strong statement
- Right: explanatory sentence
```

---

## Required Content

### Eyebrow

```txt
AI CAPABILITIES
```

### Main Heading

```txt
The foundations of Intelligence Augmented
```

### Intro Paragraph

```txt
Three core capabilities turn AI from a standalone model into practical business value.
We focus on improving decisions, grounding AI in real business context, and embedding
it into execution — so intelligence does not sit outside the enterprise, but works within it.
```

---

## Capability Cards

### Card 1

Category label:

```txt
DECISIONING
```

Title:

```txt
Augmented Decisions
```

Subtitle:

```txt
Human judgment, elevated by AI.
```

Description:

```txt
We design AI systems that extend human thinking with greater speed, scale, and precision.
By combining machine intelligence with human judgment, we help teams make faster,
more informed decisions without losing the context, oversight, and control that strong
businesses depend on.
```

Visual tone:
- Red accent
- User/person style icon
- Red underline
- Red arrow circle

---

### Card 2

Category label:

```txt
CONTEXT
```

Title:

```txt
Grounded AI
```

Subtitle:

```txt
Connected to business reality.
```

Description:

```txt
We anchor AI in trusted data, enterprise knowledge, and real operating context. This ensures
outputs are not only technically sound, but also relevant, dependable, and aligned to how
your organisation actually works across teams, systems, and day-to-day business decisions.
```

Visual tone:
- Purple accent
- Database/knowledge icon
- Purple underline
- Purple arrow circle

---

### Card 3

Category label:

```txt
EXECUTION
```

Title:

```txt
Embedded Execution
```

Subtitle:

```txt
Built into workflows and decisions.
```

Description:

```txt
We integrate AI into systems, processes, and day-to-day operations so it becomes part of
execution, not just analysis. The result is AI that supports real work, drives consistent
action, and creates measurable value across the enterprise over time.
```

Visual tone:
- Blue accent
- Gear/process icon
- Blue underline
- Blue arrow circle

---

## Bottom Insight Strip

Left text:

```txt
One principle. Three capabilities. Real impact.
```

Right text:

```txt
When these three work together, AI becomes a force multiplier — not just for technology,
but for the business outcomes that matter most.
```

---

## Layout Requirements

### Desktop

Use this layout:

```txt
┌────────────────────────────────────────────────────────────┐
│ AI CAPABILITIES                                            │
│ The foundations of Intelligence Augmented                  │
│ Supporting paragraph                                       │
│                                                            │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐         │
│ │ Card 1       │ │ Card 2       │ │ Card 3       │         │
│ └──────────────┘ └──────────────┘ └──────────────┘         │
│                                                            │
│ ┌────────────────────────────────────────────────────────┐ │
│ │ Bottom insight strip                                  │ │
│ └────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────┘
```

### Tablet

Use 2-column layout:

```txt
Card 1 | Card 2
Card 3 full width or normal width depending on available space
```

### Mobile

Use stacked layout:

```txt
Header
Card 1
Card 2
Card 3
Bottom strip stacked
```

---

## Visual Design Requirements

### Section Background

Use a dark navy gradient similar to the reference.

Recommended:

```css
background:
  radial-gradient(circle at 18% 16%, rgba(225, 29, 72, 0.12), transparent 28%),
  radial-gradient(circle at 82% 20%, rgba(37, 99, 235, 0.14), transparent 30%),
  linear-gradient(135deg, #06041F 0%, #07142D 45%, #050B1E 100%);
```

Prefer existing project token if available:

```css
var(--color-secondary)
```

but the final look should stay close to the reference image.

---

### Text Colors

Use existing design tokens where possible.

Preferred:
- Main heading: white or near-white
- Body text: soft muted white
- Eyebrow/accent: `var(--color-accent)` or `var(--color-highlight)`
- Borders: translucent white/blue
- Card backgrounds: dark translucent navy

Avoid hardcoded random colors inside JSX if the project already uses CSS variables.

---

### Card Styling

Each card should have:

```css
border-radius: 24px;
border: 1px solid rgba(255, 255, 255, 0.12);
background: rgba(255, 255, 255, 0.035);
box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);
```

On hover:
- Slight lift only
- Border becomes stronger
- Background becomes slightly brighter
- Accent glow becomes visible

Do not use aggressive animation.

---

### Card Height

Cards should have equal visual height on desktop.

Use:

```css
height: 100%;
min-height: 420px;
```

or a responsive equivalent.

The text should breathe. Do not compress content.

---

### Icons

Use clean outline icons.

Suggested from `lucide-react`:
- Decisioning: `UserRound`, `Brain`, or `CircleUserRound`
- Context: `Database`, `Network`, or `Layers`
- Execution: `Settings`, `Workflow`, or `Cog`

Icon boxes should be square with rounded corners:

```css
width: 64px;
height: 64px;
border-radius: 18px;
```

Each icon box should use the card accent color.

---

## Interaction Requirements

Each card should have:
- subtle hover lift
- small arrow circle at bottom
- arrow shifts slightly on hover
- border/accent glow on hover

Example behavior:

```css
transform: translateY(-6px);
transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
```

Do not add heavy 3D rotation or noisy animations.

---

## Component Data Structure

Keep the section data-driven.

Example:

```jsx
const capabilities = [
  {
    id: 'decisioning',
    eyebrow: 'DECISIONING',
    title: 'Augmented Decisions',
    subtitle: 'Human judgment, elevated by AI.',
    description: '...',
    accent: 'red',
    Icon: UserRound,
  },
  {
    id: 'context',
    eyebrow: 'CONTEXT',
    title: 'Grounded AI',
    subtitle: 'Connected to business reality.',
    description: '...',
    accent: 'purple',
    Icon: Database,
  },
  {
    id: 'execution',
    eyebrow: 'EXECUTION',
    title: 'Embedded Execution',
    subtitle: 'Built into workflows and decisions.',
    description: '...',
    accent: 'blue',
    Icon: Settings,
  },
]
```

This makes the section easy to maintain later.

---

## Implementation Notes

Update only the Home page `ServicesCards.jsx` section.

Do not change unrelated sections.

If the current component imports old service data, remove that dependency unless still needed.

The new component should be self-contained unless the project has a dedicated data file convention.

---

## Responsive Classes Suggestion

Use this grid behavior:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
```

For bottom strip:

```jsx
<div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.6fr] gap-6">
```

---

## Expected Final Feel

The final section should feel:

- premium
- dark
- strategic
- AI-focused
- clean
- enterprise-grade
- visually close to the provided reference
- aligned with Thotnr’s tagline: Intelligence Augmented

It should not feel like a generic services list or normal card grid.

---

## Acceptance Criteria

- `ServicesCards.jsx` visually matches the reference structure.
- Section uses dark navy premium background.
- Header content matches the requested text.
- Three capability cards are displayed.
- Cards use red, purple, and blue accent systems.
- Bottom insight strip is added.
- Layout is responsive for desktop, tablet, and mobile.
- No unrelated page sections are changed.
- UI remains balanced even if text length changes slightly.
