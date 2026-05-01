# ESCALATES_PRD — Thotnr Home Page Section

## Overview

**Section name:** Escalates  
**Purpose:** Communicate that Thotnr's intelligence compounds over time — results don't plateau, they accelerate. This section sits between `ServicesCards` and `CaseStudies`, answering the visitor's unspoken question: *"What makes Thotnr different from any other AI firm?"*  
**Position in Home:** After `ServicesCards`, before `CaseStudies`

---

## Background & Color

- **Section background:** `--color-tertiary`
- Suggest all remaining colors (text, borders, metric numbers, card backgrounds, icon fills, CTA) accordingly based on `--color-tertiary`

---

## Layout Structure

Three stacked zones, full-width:

```
[ Eyebrow + Headline + Subheadline ]
[ Metrics Strip — 4 columns        ]
[ Cards Row — 3 equal columns      ]
[ Bottom Belief Bar + CTA          ]
```

---

## Zone 1 — Header

| Element | Content |
|---|---|
| Eyebrow | `Why It Escalates` |
| Headline | `Intelligence that grows` / `the more you use it.` |
| Headline style | Two lines. Second line in italic accent color (teal). Font: serif. |
| Subheadline | `Most tools plateau the moment they're deployed. Thotnr compounds. Every interaction deepens the system's understanding of your business — so results don't just hold, they accelerate.` |
| Subheadline width | max 500px |

---

## Zone 2 — Metrics Strip

Four equal columns, no gaps — separated by 1px dividers. Full-width row with rounded corners.

| # | Number | Label |
|---|---|---|
| 1 | `3×` | Faster decisions after 90 days |
| 2 | `68%` | Reduction in repeated manual work |
| 3 | `4×` | ROI growth by month six |
| 4 | `100%` | Built on your data, not generic models |

- Numbers large and bold (`34px`, `700`)
- The `×`, `%`, `+` suffix in accent color (teal)
- Labels in muted uppercase, small tracking

---

## Zone 3 — Cards (3 columns)

Each card has: small icon, title, description. Padding tight — cards should feel compact, not spacious.

### Card 1
- **Icon:** Target / radiate symbol (circle with radiating lines)
- **Title:** `Starts sharp. Gets sharper.`
- **Description:** Day one, the system understands your context. By day ninety, it knows your patterns, language, and priorities — and acts on them with precision.

### Card 2
- **Icon:** Upward trend line
- **Title:** `Value that compounds over time.`
- **Description:** Unlike one-time builds, our systems grow in value — learning from every workflow, decision, and outcome your organisation produces.

### Card 3
- **Icon:** Four small squares in 2×2 grid
- **Title:** `Scales without losing depth.`
- **Description:** As your organisation grows, intelligence scales across teams and geographies — without sacrificing the contextual depth that makes it useful.

---

## Zone 4 — Bottom Belief Bar

Horizontal bar, full width. Separated from cards by a top border line.

| Element | Content |
|---|---|
| Left — belief text | `The Thotnr difference —` `Built on your data · Embedded in your thinking ·` `Measured by what escalates.` |
| Belief text style | Muted base text. Last phrase (`Measured by what escalates.`) in italic accent color. |
| Right — CTA button | `See it in action →` |
| CTA style | Outlined button, accent color border and text, transparent background |

---

## Spacing

| Element | Value |
|---|---|
| Section padding (top/bottom) | `64px` |
| Section padding (left/right) | `60px` |
| Gap below header block | `44px` |
| Gap below metrics strip | `28px` |
| Gap below cards row | `40px` |
| Card internal padding | `22px` |
| Card gap | `14px` |
| Metrics internal padding | `24px 22px` |
| Bottom bar padding-top | `28px` |

---

## Typography

| Element | Size | Weight | Style |
|---|---|---|---|
| Eyebrow | `11px` | `500` | uppercase, `0.14em` tracking |
| Headline | `34px` | `700` | serif, line-height `1.2` |
| Subheadline | `14px` | `400` | sans, line-height `1.65` |
| Metric number | `34px` | `700` | sans |
| Metric label | `11px` | `400` | uppercase, `0.08em` tracking |
| Card title | `14px` | `600` | sans |
| Card description | `12.5px` | `400` | sans, line-height `1.6` |
| Belief text | `12px` | `400/500` | sans |

---

## Component File

```
src/pages/Home/sections/Escalates.jsx
```

Import and place in `Home.jsx` between `ServicesCards` and `CaseStudies`:

```jsx
<ServicesCards />
<Escalates />       {/* ← new */}
<CaseStudies />
```

---

## Notes for Claude Code

- All colors derived from `--color-tertiary` as the section base — choose text, border, card surface, icon, and accent colors that work harmoniously with this background
- Icon backgrounds should be a subtle tinted version of the accent color at low opacity
- Metric suffix characters (`×`, `%`, `+`) must use the same accent color as the headline italic
- Bottom bar belief text: first two dot-separated phrases in muted color, last phrase italic in accent color
- Cards must feel compact — do not over-pad. Height should feel tight, not spacious
- Metrics strip: 1px dividers between columns, no outer gaps, fully rounded container
- CTA button: outlined style only, no fill
