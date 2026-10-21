# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-10-21

### Added
- **Zero-Dependency Architecture**: Built completely on native Node.js standard libraries (`node:fs`, `node:path`, `node:process`, `node:test`, `node:assert`, `node:crypto`). No third-party runtime dependencies.
- **Ahead-of-Time Compiler**: High-performance source scanner, candidate extractor, AST-free streaming parser, and deterministic CSS rule generator.
- **Standalone CLI**: Executable `oraycss` with commands:
  - `oraycss init`: Initialize configuration and starter files.
  - `oraycss build`: Compile scanned classes into clean or minified CSS with detailed byte-level metrics.
  - `oraycss watch`: Incremental auto-rebuilding with debouncing and loop prevention.
  - `oraycss inspect`: Deep inspection of discovered candidates, detected utilities, rule counts, and bundle size breakdown.
- **Comprehensive Utility Catalog**:
  - Layout & Display (`block`, `flex`, `grid`, `inline-flex`, `hidden`, `contents`, `isolate`, etc.)
  - Flexbox (directions, alignment, wrapping, justification, order, grow, shrink)
  - CSS Grid (responsive templates, span, start, end, auto-flow, auto-rows)
  - Spacing (margins, negative margins, padding, logical spacing, gap, space-x/y, divide-x/y)
  - Sizing (width, height, min/max dimensions, aspect-ratio, full viewport sizing)
  - Typography (font families, semantic scale, weights, leading, tracking, alignments, word-break, truncation)
  - Backgrounds & Gradients (colors, multi-stop linear gradients, clip, size, position)
  - Borders & Outlines (widths, styles, colors, radius scale, focus rings, outline offset)
  - Visual Effects (subtle shadow tokens, elevation, opacities, blurs, backdrop filters)
  - Transforms & Transitions (2D translates, scales, rotates, durations, timing curves)
  - Motion & Animations (accessible presets: `animate-spin`, `animate-pulse`, `animate-fade-in`, `animate-slide-up`, `animate-bounce-subtle`)
  - Accessibility (`sr-only`, `not-sr-only`, keyboard focus visibility, reduced motion support)
- **Arbitrary Value Engine**: Balanced delimiter parser supporting `w-[37rem]`, `grid-cols-[auto_1fr_auto]`, `bg-[#101014]`, `top-[calc(100%+1rem)]`, `text-[clamp(2rem,5vw,5rem)]`.
- **Responsive & Interactive Variants**:
  - Breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
  - Dark mode: `dark:` (media-query and class strategy)
  - Interactive states: `hover:`, `focus:`, `focus-visible:`, `focus-within:`, `active:`, `disabled:`, `checked:`, `first:`, `last:`, `odd:`, `even:`
  - Relational variants: `group-hover:`, `group-focus:`, `peer-checked:`, `peer-focus:`
  - Accessibility variants: `motion-safe:`, `motion-reduce:`, `print:`
  - Variant stacking: e.g. `md:hover:shadow-lg`, `dark:hover:bg-surface`
- **Design Token System**: Cohesive semantic tokens (`background`, `foreground`, `surface`, `primary`, `accent`, `muted`, `border`, `ring`) and full 50-950 scales.
- **Preflight Reset**: Accessible, modern CSS reset that preserves accessibility indicators.
- **Safe CSS Optimizer**: Built-in production minifier stripping whitespace and comments safely.
