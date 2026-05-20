# HOME HERO REVAMP — TIA FRAMEWORK HERO SECTION

**Version:** 1.0
**Project:** Thotnr Website
**Section:** Home Hero
**Theme:** Intelligence, Augmented
**Background:** Existing video background (already implemented)

**Objective:** Create a premium, futuristic, enterprise-grade hero section that positions "Intelligence, augmented" as the dominant brand statement while introducing TIA as the underlying framework.

---

## 1. DESIGN OBJECTIVE

This hero section should immediately communicate:

- Thotnr's core positioning: **"Intelligence, augmented"**
- TIA as the enabling enterprise framework
- Enterprise trust and premium execution quality
- A balanced, minimal, futuristic aesthetic

The section should feel:

- Premium
- Spacious
- Intelligent
- Calm
- Enterprise-grade
- Cinematic
- Highly intentional

> The layout should avoid clutter and over-compression. Everything should breathe.

---

## 2. LAYOUT STRUCTURE

### Overall Layout

Desktop layout split into two visual regions:

| Left Side | Right Side |
|---|---|
| Content & CTA | Dynamic network visual space |

**Left side contains:**
- Framework label
- Main tagline
- TIA introduction
- Industry metric cards
- CTA buttons

**Right side remains visually open for:**
- Background video visibility
- Motion graphics
- Neural network mesh overlays
- Atmospheric depth

> **IMPORTANT:** The left content should NOT occupy full width. The layout must feel left-aligned and editorial.

---

## 3. CONTENT POSITIONING

### Main Content Container Position

```css
position: absolute;
left: 10%;
top: 20%;
```

This creates:
- Better cinematic balance
- More breathing space
- Better visibility of background video
- Premium enterprise composition

---

## 4. MAIN HEADLINE

### Content

```
intelligence, augmented
```

### Layout Rules

- Both words **MUST** remain on the **SAME line**
- Headline should **NOT** span full screen width
- Width should feel controlled and premium
- Avoid oversized typography

### Typography

**"intelligence,"**
```css
font-family: "Sora", sans-serif;
font-weight: 300;
color: var(--color-primary);
```

**"augmented"**
```css
font-family: "Sora", sans-serif;
font-weight: 300;
font-style: normal;
background: linear-gradient(
  90deg,
  var(--color-accent),
  var(--color-tertiary)
);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Font Size

**Desktop:**
```css
font-size: clamp(72px, 8vw, 120px);
line-height: 0.95;
letter-spacing: -0.05em;
```

**Tablet:**
```css
font-size: 72px;
```

**Mobile:**
```css
font-size: 46px;
line-height: 1;
```

---

## 5. FRAMEWORK LABEL

### Content

```
THE FRAMEWORK
```

### Placement

> **IMPORTANT:** This label should sit **directly above the TIA block**, NOT near the main tagline.

The spacing between `"THE FRAMEWORK"` and the TIA section should feel **tight and connected**.

### Styling

```css
font-family: "Sora", sans-serif;
font-size: 13px;
letter-spacing: 0.35em;
text-transform: uppercase;
color: var(--color-accent);
opacity: 0.9;
```

Add a thin horizontal line before the label.

---

## 6. TIA INTRO BLOCK

### Left Label

```
TIA
```

### Right Description

```
TIA (Thotnr Intelligence Augmentation) is our enterprise AI framework that augments your data, embeds into your workflows, and strengthens what your business can achieve.
```

### Layout Structure

```
[TIA] | [description]
```

Vertical divider between both blocks.

### Styling

**TIA label:**
```css
font-size: 84px;
font-weight: 500;
font-family: "Sora", sans-serif;
color: var(--color-primary);
```

**Description:**
```css
font-size: 18px;
line-height: 1.9;
max-width: 560px;
color: rgba(241, 250, 238, 0.86);
font-family: "Source Serif 4", serif;
```

---

## 7. INDUSTRY METRIC CARDS

There are **3 metric cards**.

Cards should feel:
- Lightweight
- Elegant
- Data-driven
- Enterprise-focused

> Avoid bulky card designs.

---

## 8. CARD CONTENT

### CARD 1

**Icon:** Meaningful healthcare/pharma icon — capsule + medical cross OR healthcare analytics symbol

**Metrics:**
```
40%↑
faster HCP decisions
```

**Industry:** `PHARMA & HEALTHCARE`

**Link:** `Read the story →`

---

### CARD 2

**Icon:** Finance/banking architecture icon

**Metrics:**
```
60%+
agent deflection
```

**Industry:** `FINANCE & BANKING`

**Link:** `Read the story →`

---

### CARD 3

**Icon:** Insurance protection icon — shield + person OR policy/security visualization

**Metrics:**
```
18→44%
STP lift in claims
```

**Industry:** `LIFE & INSURANCE`

**Link:** `Read the story →`

---

## 9. CARD LAYOUT

### Structure

```
[ICON] [CONTENT]
```

Cards aligned horizontally.

**Desktop Width:**
```css
width: 320px;
```

### Card Styling

```css
border-top: 1px solid rgba(168, 218, 220, 0.12);
border-bottom: 1px solid rgba(168, 218, 220, 0.12);
padding: 24px 0;
```

> Minimal borders only. No heavy filled cards.

---

## 10. CARD ICON CONTAINER

```css
width: 88px;
height: 88px;
border: 1px solid rgba(168, 218, 220, 0.18);
border-radius: 20px;
backdrop-filter: blur(12px);
```

Icons should:
- Glow slightly
- Feel futuristic
- Match industry meaning

---

## 11. CARD HOVER ANIMATIONS

All 3 cards should have elegant hover interactions.

### On Hover

```css
transform: translateY(-6px);
transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
```

### Glow Effect

```css
box-shadow:
  0 0 30px rgba(168, 218, 220, 0.12),
  0 0 80px rgba(69, 123, 157, 0.10);
```

### Icon Glow Increase

```css
filter: drop-shadow(0 0 14px rgba(168, 218, 220, 0.45));
```

### Read Story Link Animation

Arrow slides slightly right:
```css
transform: translateX(4px);
```

---

## 12. CTA BUTTONS

Three CTA buttons below metric cards:

1. **Explore TIA**
2. **TIA Accelerators**
3. **Services**

---

## 13. CTA LAYOUT

Horizontal arrangement.

```css
gap: 24px;
```

---

## 14. CTA BUTTON STYLING

**Primary CTA:**
```css
background: linear-gradient(
  135deg,
  var(--color-accent),
  var(--color-tertiary)
);
color: var(--color-secondary);
```

**Secondary CTAs:**
```css
border: 1px solid rgba(168, 218, 220, 0.35);
background: rgba(255, 255, 255, 0.02);
color: var(--color-primary);
```

---

## 15. CTA HOVER EFFECTS

All buttons should feel premium and alive.

### Hover Animation

```css
transform: translateY(-3px);
transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
```

### Glow Shadow

```css
box-shadow:
  0 0 20px rgba(168, 218, 220, 0.22),
  0 0 60px rgba(69, 123, 157, 0.18);
```

### Hover Color Transition

**Primary:** Slightly brighter glow

**Secondary:**
```css
background: rgba(168, 218, 220, 0.08);
```

---

## 16. COLOR SYSTEM

Use **ONLY** project design tokens.

```css
--color-primary:   #F1FAEE;
--color-secondary: #1D3557;
--color-tertiary:  #457B9D;
--color-accent:    #A8DADC;
--color-highlight: #E63946;
```

---

## 17. TYPOGRAPHY

**Headings:**
```css
font-family: "Sora", sans-serif;
```

**Body Text:**
```css
font-family: "Source Serif 4", serif;
```

**Editorial Accent Usage:**
Use `Playfair Display` only if needed minimally.

---

## 18. SPACING SYSTEM

Large vertical breathing space required. Avoid compact layouts.

**Recommended Section Spacing:**
```css
gap: 48px;
```

Between:
- Headline
- TIA block
- Metric cards
- CTA buttons

---

## 19. RESPONSIVE BEHAVIOR

### Desktop
- Two-column cinematic layout
- Content left aligned
- Video visible on right

### Tablet
- Slightly compressed spacing
- Cards wrap into 2 rows if needed

### Mobile

Layout becomes fully vertical:
1. Headline
2. Framework label
3. TIA block
4. Metric cards
5. CTA buttons

- Buttons become stacked
- Cards become full width

---

## 20. UI WIREFRAME

```
┌────────────────────────────────────────────────────┐
│                                                    │
│  intelligence, augmented                           │
│                                                    │
│  ── THE FRAMEWORK                                  │
│                                                    │
│  TIA  │  Description                               │
│                                                    │
│  ┌──────┐  ┌──────┐  ┌──────┐                     │
│  │Card1 │  │Card2 │  │Card3 │                     │
│  └──────┘  └──────┘  └──────┘                     │
│                                                    │
│  [Explore TIA]  [TIA Accelerators]  [Services]     │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

## 21. EXPERIENCE GOAL

The final section should feel like:

- OpenAI enterprise
- Stripe editorial polish
- Palantir seriousness
- Apple-level spacing discipline
- Modern AI infrastructure company

**NOT:**
- Startup template
- Overfilled dashboard
- Generic SaaS landing page

> The hero should feel: **"calm intelligence with enterprise confidence."**
