---
name: Precision Engineering Dark
colors:
  surface: '#121318'
  surface-dim: '#121318'
  surface-bright: '#38393f'
  surface-container-lowest: '#0d0e13'
  surface-container-low: '#1a1b21'
  surface-container: '#1e1f25'
  surface-container-high: '#292a2f'
  surface-container-highest: '#34343a'
  on-surface: '#e3e1e9'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#e3e1e9'
  inverse-on-surface: '#2f3036'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#e29100'
  on-tertiary-container: '#523200'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#121318'
  on-background: '#e3e1e9'
  surface-variant: '#34343a'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  mono-lead:
    fontFamily: JetBrains Mono
    fontSize: 15px
    fontWeight: '500'
    lineHeight: 22px
    letterSpacing: -0.01em
  mono-badge:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  mono-caption:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4.5rem
  space-4xl: 6rem
  container-max: 1200px
  gutter: 1.5rem
---

## Brand & Style

This design system establishes an unapologetically technical, high-rigor visual identity tailored for Lucas Lougon, a Senior Backend & Fullstack Software Engineer. The aesthetic bridges high-performance systems engineering (distributed systems, database internals, cloud infrastructure) with modern editorial minimalism.

The target audience consists of Technical Directors, VP of Engineering leaders, Staff Engineers, and specialized technical recruiters who evaluate candidates based on architectural clarity, execution velocity, and craftsmanship. 

Visual principles:
- **Monochrome Foundation with Precise Accents:** Deep carbon and obsidian surfaces establish a dense, focused developer terminal ambiance, illuminated by surgical emerald and technical cyan accents to signify live telemetry, system health, and execution states.
- **Editorial Brutalism meets High Precision:** Bold, condensed grotesque section headers combined with strict monospaced data callouts, structured grid boundaries, and high-density metric counters.
- **Developer Authority:** Surfaces and cards emulate high-end infrastructure observability dashboards and architectural specs rather than generic promotional marketing templates.

## Colors

The palette is engineered around dark-mode-first contrast, utilizing subtle luminance steps between dark surfaces to establish clear visual hierarchy without distracting glare.

### Palette Architecture
- **Primary (`#10B981` — Emerald Telemetry):** Represents successful compilation, active deployment status, system health, primary call-to-actions, and key architectural metrics.
- **Secondary (`#06B6D4` — Cyan Signal):** Used for technical badges, micro-interactions, secondary tags, API endpoint indicators, and interactive code highlights.
- **Tertiary (`#F59E0B` — Amber Kernel):** Used selectively for workload warnings, latency metrics, work-in-progress highlights, and specialized benchmark callouts.
- **Neutral Core (`#090A0F` — Obsidian Base):** Deep, non-neutral obsidian background with micro-blue undertones that prevent muddy greys. 

### Surface Tiers
- **Surface Canvas:** `#090A0F` (Base viewport background)
- **Surface Base:** `#11131A` (Base layer for sections and containers)
- **Surface Elevated:** `#181B24` (Cards, code blocks, project panels)
- **Surface Overlay:** `#222634` (Hover states, interactive elements, popovers)
- **Border Default:** `rgba(255, 255, 255, 0.08)` (Subtle separation lines)
- **Border Active:** `rgba(16, 185, 129, 0.4)` (Focused or selected state borders)
- **Text Primary:** `#F3F4F6` (High legibility body and titles)
- **Text Muted:** `#9CA3AF` (Secondary technical specs and captions)
- **Text Code/Ghost:** `#6B7280` (Line numbers, terminal timestamps, syntax metadata)

## Typography

The typography pairings form a triad of architectural balance:
1. **Space Grotesk (Headlines & Metric Headers):** Offers geometric structure and a progressive engineering edge. Section numbering (e.g., `// 01. ARCHITECTURE`) directly borrows from technical index formats.
2. **Geist (Body & Explanations):** Delivers clean readability for narrative descriptions, architectural decisions, and career milestones.
3. **JetBrains Mono (Technical Details, Data Tags, Stack & Statuses):** Brings raw terminal accuracy to stack labels, system metrics, commit hashes, and telemetry data.

All section labels, category headers, and metadata tags should be styled in uppercase monospaced text with leading forward slashes or dot indicators (e.g., `// STACK`, `:: METRICS`).

## Layout & Spacing

The layout is anchored on an 8pt architectural grid with a structured 12-column system, prioritizing high information density without visual crowding.

### Grid & Breakpoints
- **Desktop (>= 1200px):** 12-column grid, max-width `1200px`, `gutter: 24px`, margins automatic centered.
- **Tablet (768px - 1199px):** 8-column grid, `gutter: 20px`, margins `32px`.
- **Mobile (< 768px):** 4-column grid, `gutter: 16px`, margins `16px`.

### Elevation & Depth

Visual hierarchy does not rely on heavy drop shadows. Instead, it uses stacked tonal surfaces, hairline borders, and targeted luminescent accents:
- **Surface Stacking:** Deep obsidian backgrounds (`#090A0F`) support elevated card panels (`#11131A`), which further support active interactive surfaces (`#181B24`).
- **Low-Contrast Hairlines:** All cards, splitters, and module boundaries use crisp 1px borders colored with `rgba(255, 255, 255, 0.08)`. On hover, borders transition to `rgba(16, 185, 129, 0.4)` or `rgba(6, 182, 212, 0.4)`.
- **Luminescent Accent Glows:** Active indicators and primary interactive states feature radial gradient glow underlays: `0 0 24px rgba(16, 185, 129, 0.15)`.
- **Backdrop Blurs:** Floating navigation bars and sticky headers utilize `backdrop-filter: blur(16px)` over a 70% opacity dark canvas (`rgba(9, 10, 15, 0.75)`).
