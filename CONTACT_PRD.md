# Contact Us Page — PRD

## Objective
Create a premium, trustworthy, and calm contact experience that effectively balances global physical presence with interactive digital conversion.

---

## S1 — Hero Section
- **Layout**: Full-screen (100vh), background image (`../../../assets/images/contact-cover.jpg`) with dark overlay/gradient.
- **Content Position**: Top 60%, Left 10%.
- **Content**: Tagline (e.g., “Let’s Connect”), Subheadline (inviting/human).
- **Notes**: Consistent with AI, Insight, and Case Study pages; no heavy animation.

---

## S2 — Presence & Identity
- **Background**: `--color-primary`
- **Layout**: `grid md:grid-cols-[3fr_2fr]` (gap-16).

### 2.1 Brand Narrative (Left, 60%)
- **Structure**: Small uppercase tagline (muted), bold headline (2–3 lines), thin accent divider, short description.
- **Goal**: Establish brand authority with a strong typography hierarchy.

### 2.2 Office Presence (Right, 40%)
- **Structure**: Vertical stack of two office blocks.
- **Office 1 (Head Office)**: Noida, India.
- **Office 2 (Sales Office)**: Johannesburg, South Africa.
- **Styling**: Minimalist (soft surface), highlighted office labels using `--color-highlight`.

### 2.3 Digital Footprint (Full Width, Bottom)
- **Content**: Inline country list (India • South Africa • UAE • UK • USA • Singapore).
- **Visual**: Dominant map image (`../../../assets/images/footprints-map.png`).

---

## S3 — Contact & Action
- **Background**: `--color-secondary`
- **Layout**: `grid md:grid-cols-2` (gap-16, items-center).

### 3.1 Direct Contact (Left)
- **Minimal List**: Press, Careers, Website links.
- **Styling**: Small uppercase labels, bold values, subtle hover effects. No cards/borders; clean premium aesthetic.

### 3.2 Contact Form (Right)
- **Visual Goal**: "Floating" 3D effect.
- **Styling**:
  - **Shadows**: Deep layered shadows (`0 40px 80px rgba(0,0,0,0.4)`).
  - **Interaction**: Subtle lift on hover (`translateY(-6px)`).
  - **Inputs**: Rounded (pill) inputs, large padding, soft focus glows.
  - **Button**: `--color-highlight`, high contrast.

---

## Design Principles
- **S2 (Informational)**: Grounded, professional, and clear.
- **S3 (Interactive)**: Elevated, modern, and high-depth.
- **Avoid**: Overusing accent colors, heavy borders, repetitive grid patterns, and distracting animations.

---

## Outcome
A contact page that communicates a global, premium, and trustworthy brand image—moving beyond a simple utility page to a cohesive part of the brand narrative.