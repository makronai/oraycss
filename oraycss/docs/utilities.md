# OrayCSS Utility Reference

## 1. Layout & Display
- **Display:** `block`, `inline-block`, `inline`, `flex`, `inline-flex`, `grid`, `inline-grid`, `hidden`, `contents`, `flow-root`
- **Position:** `static`, `fixed`, `absolute`, `relative`, `sticky`
- **Insets:** `inset-0`, `inset-x-0`, `inset-y-0`, `top-0`, `right-0`, `bottom-0`, `left-0`, `-top-2`, `top-[calc(100%+1rem)]`
- **Z-Index:** `z-0`, `z-10`, `z-20`, `z-30`, `z-40`, `z-50`, `z-auto`, `z-[100]`
- **Overflow:** `overflow-auto`, `overflow-hidden`, `overflow-clip`, `overflow-x-auto`, `overflow-y-auto`
- **Box Sizing:** `box-border`, `box-content`
- **Isolation:** `isolate`, `isolation-auto`
- **Object Fit:** `object-contain`, `object-cover`, `object-fill`, `object-none`, `object-scale-down`

## 2. Flexbox
- **Direction:** `flex-row`, `flex-row-reverse`, `flex-col`, `flex-col-reverse`
- **Wrap:** `flex-wrap`, `flex-wrap-reverse`, `flex-nowrap`
- **Alignment:** `items-start`, `items-center`, `items-end`, `items-baseline`, `items-stretch`
- **Justification:** `justify-start`, `justify-center`, `justify-end`, `justify-between`, `justify-around`, `justify-evenly`
- **Self:** `self-auto`, `self-start`, `self-center`, `self-end`, `self-stretch`
- **Grow / Shrink:** `grow`, `grow-0`, `shrink`, `shrink-0`
- **Presets:** `flex-1`, `flex-auto`, `flex-initial`, `flex-none`
- **Order:** `order-first`, `order-last`, `order-none`, `order-1`, `order-2`, `order-3`

## 3. CSS Grid
- **Columns:** `grid-cols-1` through `grid-cols-12`, `grid-cols-none`, `grid-cols-[auto_1fr_auto]`
- **Rows:** `grid-rows-1` through `grid-rows-6`, `grid-rows-none`
- **Col Span:** `col-span-1` through `col-span-12`, `col-span-full`, `col-auto`
- **Row Span:** `row-span-1` through `row-span-6`, `row-span-full`
- **Flow:** `grid-flow-row`, `grid-flow-col`, `grid-flow-dense`

## 4. Spacing
- **Padding:** `p-0` through `p-96`, `px-*`, `py-*`, `pt-*`, `pr-*`, `pb-*`, `pl-*`, `p-[15px]`
- **Margin:** `m-0` through `m-96`, `mx-*`, `my-*`, `mt-*`, `mr-*`, `mb-*`, `ml-*`, `m-auto`
- **Negative Margin:** `-m-2`, `-mx-4`, `-my-8`, `-mt-0.5`
- **Gap:** `gap-0` through `gap-96`, `gap-x-*`, `gap-y-*`
- **Space Between:** `space-x-4`, `space-y-6`

## 5. Sizing
- **Width:** `w-0` through `w-96`, `w-full`, `w-screen`, `w-auto`, `w-1/2`, `w-1/3`, `w-2/3`, `w-1/4`, `w-3/4`, `w-[37rem]`
- **Max Width:** `max-w-xs`, `max-w-sm`, `max-w-md`, `max-w-lg`, `max-w-xl`, `max-w-2xl`, `max-w-3xl`, `max-w-4xl`, `max-w-5xl`, `max-w-6xl`, `max-w-7xl`, `max-w-prose`, `max-w-full`
- **Height:** `h-0` through `h-96`, `h-full`, `h-screen`, `min-h-screen`, `max-h-screen`
- **Combined Size:** `size-8`, `size-10`, `size-12`, `size-16`, `size-24`, `size-48`
- **Aspect Ratio:** `aspect-square`, `aspect-video`, `aspect-auto`, `aspect-[4/3]`

## 6. Typography
- **Font Family:** `font-sans`, `font-serif`, `font-mono`, `font-display`
- **Font Size:** `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl`, `text-7xl`, `text-8xl`, `text-9xl`, `text-[clamp(2rem,5vw,5rem)]`
- **Font Weight:** `font-thin` (100) to `font-black` (900)
- **Tracking:** `tracking-tighter`, `tracking-tight`, `tracking-normal`, `tracking-wide`, `tracking-wider`, `tracking-widest`
- **Leading:** `leading-none`, `leading-tight`, `leading-snug`, `leading-normal`, `leading-relaxed`, `leading-loose`
- **Alignment:** `text-left`, `text-center`, `text-right`, `text-justify`
- **Text Color:** `text-foreground`, `text-muted-foreground`, `text-primary`, `text-accent`, `text-zinc-400`, `text-[#101014]`
- **Decoration & Style:** `underline`, `no-underline`, `line-through`, `uppercase`, `lowercase`, `capitalize`, `italic`
- **Truncation:** `truncate`, `break-words`, `break-all`
- **Smoothing:** `antialiased`, `subpixel-antialiased`

## 7. Backgrounds & Gradients
- **Colors:** `bg-background`, `bg-surface`, `bg-surface-elevated`, `bg-primary`, `bg-accent`, `bg-muted`, `bg-transparent`, `bg-zinc-900`
- **Opacity modifier:** `bg-primary/80`, `bg-surface/50`
- **Gradients:** `bg-gradient-to-t`, `bg-gradient-to-tr`, `bg-gradient-to-r`, `bg-gradient-to-br`, `bg-gradient-to-b`, `bg-gradient-to-bl`, `bg-gradient-to-l`, `bg-gradient-to-tl`
- **Stops:** `from-primary`, `via-accent`, `to-transparent`
- **Clip & Size:** `bg-clip-text`, `bg-cover`, `bg-contain`, `bg-center`

## 8. Borders & Radii
- **Width:** `border`, `border-0`, `border-2`, `border-4`, `border-t`, `border-b`, `border-x`, `border-y`
- **Style:** `border-solid`, `border-dashed`, `border-dotted`, `border-none`
- **Color:** `border-border`, `border-primary`, `border-accent`, `border-zinc-800`
- **Radius:** `rounded-none`, `rounded-sm`, `rounded`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full`, `rounded-t-xl`, `rounded-b-xl`
- **Outlines & Rings:** `outline-none`, `outline-2`, `outline-ring`, `outline-offset-2`, `ring`, `ring-2`, `ring-primary`
- **Divide:** `divide-x`, `divide-y`

## 9. Effects & Depth
- **Shadows:** `shadow-none`, `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`, `shadow-inner`, `shadow-soft`, `shadow-glow`, `shadow-glow-accent`
- **Opacity:** `opacity-0` through `opacity-100` (e.g. `opacity-50`, `opacity-80`)
- **Blur:** `blur-none`, `blur-sm`, `blur`, `blur-md`, `blur-lg`, `blur-xl`, `backdrop-blur-sm`, `backdrop-blur-md`

## 10. Transforms, Transitions & Animations
- **Translate:** `translate-x-4`, `-translate-y-0.5`, `translate-y-full`
- **Scale:** `scale-95`, `scale-100`, `scale-105`, `scale-110`
- **Rotate:** `rotate-45`, `-rotate-45`, `rotate-90`, `rotate-180`
- **Transitions:** `transition`, `transition-all`, `transition-colors`, `transition-transform`, `transition-opacity`
- **Duration:** `duration-150`, `duration-200`, `duration-300`, `duration-500`
- **Timing:** `ease-linear`, `ease-in`, `ease-out`, `ease-in-out`
- **Animations:** `animate-spin`, `animate-pulse`, `animate-ping`, `animate-bounce`, `animate-fade-in`, `animate-slide-up`, `animate-bounce-subtle`

## 11. Accessibility & Interactivity
- `sr-only`, `not-sr-only`
- `pointer-events-none`, `pointer-events-auto`
- `select-none`, `select-text`
- `cursor-pointer`, `cursor-not-allowed`
- `scroll-smooth`
