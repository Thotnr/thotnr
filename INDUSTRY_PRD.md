# Industry Page — PRD

## Objective
Showcase the breadth of industries served while reinforcing capability, process, and measurable impact in a clean, premium, enterprise-focused layout.

---

## S1 — Hero Section
- **Layout**: Full viewport (100vh), background image (`../../../assets/images/industry-cover.jpg`) with dark overlay/gradient.
- **Position**: Content positioned at Top ~60%, Left ~10%.
- **Content**: Tagline (2–3 words), supporting subheadline.
- **Notes**: High contrast, no heavy animations.

---

## S2 — Industries We Serve
- **Background**: `--color-primary`
- **Header**: Eyebrow (small uppercase), Headline ("Industries We Serve"), short description.

### 2.1 Featured Industries (Top 3)
- **Layout**: `grid-cols-1 md:grid-cols-3` (gap-6).
- **Design**: Large dominant imagery, industry name overlay, subtle gradient for readability.

### 2.2 All Industries Grid (Remaining 11) 
- **Layout**: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4` (gap-6).
- **List**: Travel, Sports, Shipping, Telecom, Real Estate, Health, Entertainment, Banking, Automotive, Fashion, Education, Pharma, Legal, Beauty.
- **Style**: Minimalist cards, light borders, subtle hover effects (scale/lift).
- **take all industry image** form ../../../assets/images/sports.jpg, take all industry image form ../../../assets/images/real-states.jpg 


---

## S3 — How We Work Across Industries
- **Background**: `--color-secondary`
- **Layout**: Horizontal process strip, `grid-cols-1 md:grid-cols-4` (gap-8).
- **Steps**:
  1. Understand Domain Context
  2. Identify High-Impact Use Cases
  3. Build & Integrate Systems
  4. Scale & Optimize
- **Style**: Clean spacing, center-aligned, focus on repeatable execution model.

---

## S4 — Industry Outcomes / Impact
- **Background**: `--color-primary`
- **Layout**: Split layout (`grid-cols-1 md:grid-cols-2`, gap-16).
- **Left (Case Highlight)**: Eyebrow, strong headline, narrative paragraph, optional CTA.
- **Right (Metrics Grid)**: `grid-cols-2` (gap-6).
  - **Metrics**: 73% Faster, 40% Reduction, 3x Speed, 60% Automation.
- **Style**: High-contrast typography, focus on readability.

---

## Responsive Behavior
- **Featured Industries**: 3 → 1 column.
- **Industry Grid**: 4 → 2 → 1 columns.
- **Process Strip**: Horizontal → Stacked.
- **Metrics Grid**: 2 → 1 column.

---

## Design Principles
- **Visual Hierarchy**: Clear distinction between featured and standard industries.
- **Enterprise-grade**: Minimalist, clean UI.
- **Trust & Clarity**: Consistent spacing, minimal animations, limited use of `--color-highlight`.