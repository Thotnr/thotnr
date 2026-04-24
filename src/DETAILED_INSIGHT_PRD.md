# Detailed Insight Page — PRD

## Overview
Dynamic Detailed Insight Page for long-form editorial content.

- **Trigger**: Click "Read More" from Insights page.
- **Total Insights**: 12 (dynamic routing).
- **Layout Type**: Editorial / Thought Leadership.
- **Sections**: 2 (Hero + Content).

---

## Dynamic Data Model
Each Insight must support:
- `coverImg`
- `tagline` (category)
- `subheadline` (title)
- `authorName`
- `authorRole`
- `authorImage`
- `publishDate`
- `contentBlocks[]` (structured content)

---

## Section 1 — Hero
- **Layout**: Full-width background image, height `80–100vh`, dark overlay for readability.
- **Content Position**: Left aligned, `top 60%`, `left 10%`.
- **Content**: Tagline (small), Large headline (multi-line), optional subtext.
- **Image Source**: `../../../assets/images/insight[1..n].jpg`

---

## Section 2 — Editorial Content
- **Background**: `--color-primary`
- **Layout Philosophy**: Editorial reading experience; no cards or heavy UI.
- **Wrapper**: `max-w-3xl mx-auto`, `flex flex-col gap-8`.

### Content Structure
1. **Author Intro Row**: `grid grid-cols-[120px_1fr_120px]` with Author Card (circular image, name, bio), Intro Paragraph, and Social Icons.
2. **Intro Paragraphs**: Multi-paragraph storytelling, comfortable line height.
3. **Section Headings**: `text-3xl / 4xl`, bold, `mt-16 mb-6`.
4. **Body Text**: Relaxed line height, `mb-5`.
5. **Bullet Lists**: Minimal usage, `gap-3`.
6. **Inline Links**: Subtle highlight, underline on hover.
7. **Image + Text Blocks**: Alternating `grid md:grid-cols-[1fr_1.2fr]`, `gap-8`.
8. **Quote / Commentary Block**: Slight indent or left border to break flow.
9. **Content Flow**: Intro → Narrative → Section I → Image/Text → Section II → Image/Text → Section III → Closing.

---

## Design Specifications
- **Typography**: Heading (`--color-text-primary`), Body (`--color-text-secondary`), Links (subtle highlight), Line height (`1.7–1.8`).
- **Colors**: Background (`--color-primary`), Text (light tones), Highlight (very limited usage).
- **Spacing**: Section padding (`py-20`), Block gap (`gap-8`), Heading spacing (`mt-16 mb-6`), Paragraph spacing (`mb-5`).

---

## Responsive Behavior
- **Mobile**: Single column, Author row stacks, Images full width.
- **Desktop**: Centered reading column, split layout for image/text blocks.

---

## UX Principles
- **Built for reading, not scanning.**
- No heavy animations or clutter.
- Strong visual hierarchy.
- Calm, structured, high credibility aesthetic; feels like a premium research article, not a blog.