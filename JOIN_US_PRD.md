# Join Us Page — PRD

## Objective
Attract high-quality talent by communicating culture, impact, and opportunities through a premium, structured, and conversion-focused layout.

---

## S1 — Hero Section
- **Layout**: Full viewport (100vh), background image (`../../../assets/images/join-us-cover.jpg`) with dark overlay/gradient.
- **Content**: Tagline (2–3 words), supporting sentence. Positioned at Top ~60%, Left ~10%.
- **Notes**: Maintain visual consistency with other pages; no heavy animations.

---

## S2 — Why Join Us
- **Background**: `--color-primary`
- **Layout**: `grid md:grid-cols-[3fr_2fr]` (gap-16).

### 2.1 Narrative (Left, 3fr)
- **Content**: Eyebrow ("Why Join Us"), bold headline, short description.
- **Style**: Left-aligned, strong typography hierarchy, focused on vision/culture.

### 2.2 Core Pillars (Right, 2fr)
- **Structure**: Vertical list (not cards).
  - **01 Ownership**: You build, ship, and own outcomes.
  - **02 Real Impact**: Work on systems that matter in production.
  - **03 Growth**: Learn fast, evolve faster.
- **Style**: Editorial feel, minimal UI, subtle spacing.

---

## S3 — Open Roles
- **Background**: `--color-secondary`
- **Layout**: Vertical accordion-style list.
- **Default State**: Show role titles only (e.g., DevOps Engineer, Senior Software Engineer – Java).
- **Expanded Panel**:
  - **Left (70%)**: Role description, responsibilities, requirements.
  - **Right (30%)**: Meta info (Experience, Openings, Location).
- **Behavior**: Click to expand; accordion-style (one expanded at a time).

---

## S4 — Apply / Join Form
- **Layout**: Centered, floating card.
- **Header**: “Join Us” tagline + “Let’s Build Something Meaningful Together” headline.
- **Form Fields**: Name, Email, Role dropdown, Custom Resume Upload (“Drag & drop your resume or browse”).
- **Styling**:
  - **Card**: Elevated, soft shadows, slight hover lift.
  - **Inputs**: Pill-style, spacious padding, clean borders, focus glow.
  - **Button**: `--color-highlight`, high contrast.

---

## Design Principles
- **Minimalist & Premium**: Enterprise feel with strong hierarchy.
- **Editorial**: Prioritize readable content over heavy card/box usage.
- **Interactive**: Intentional transitions, not noisy animations.
- **Accent**: Sparse use of `--color-highlight`.

---

## Responsive
- **Mobile**: Single-column vertical stack for all sections.
- **Accordion**: Fully functional on touch devices.
- **Form**: Adapts to full width.

---

## Final Experience Flow
1. **Hero**: Inspiration & visual context.
2. **Why Join Us**: Establishing cultural clarity.
3. **Open Roles**: Providing specific opportunities.
4. **Join Form**: Streamlined conversion/action.