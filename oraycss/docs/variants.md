# OrayCSS Variants Reference

Variants conditionally apply utility styles based on responsive breakpoints, user interactions, color schemes, or accessibility preferences.

## Breakpoint Variants (Mobile-First)

| Variant | Media Query |
|---------|-------------|
| `sm:` | `@media (min-width: 640px)` |
| `md:` | `@media (min-width: 768px)` |
| `lg:` | `@media (min-width: 1024px)` |
| `xl:` | `@media (min-width: 1280px)` |
| `2xl:` | `@media (min-width: 1536px)` |

```html
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"></div>
```

## Interactive Pseudo-Classes

- `hover:` &mdash; `:hover`
- `focus:` &mdash; `:focus`
- `focus-visible:` &mdash; `:focus-visible`
- `focus-within:` &mdash; `:focus-within`
- `active:` &mdash; `:active`
- `disabled:` &mdash; `:disabled`
- `checked:` &mdash; `:checked`
- `first:` &mdash; `:first-child`
- `last:` &mdash; `:last-child`
- `odd:` &mdash; `:nth-child(odd)`
- `even:` &mdash; `:nth-child(even)`

```html
<button class="bg-primary text-primary-foreground hover:shadow-glow focus-visible:outline-ring active:scale-95 transition">
  Action
</button>
```

## Dark Mode

OrayCSS supports both system media preference and class-based toggling:

```html
<div class="bg-background text-foreground dark:bg-surface dark:text-primary">
  Adaptive theme container
</div>
```

## Group and Peer Variants

Trigger child changes when a parent container is hovered or focused:

```html
<a class="group flex items-center gap-2">
  <span>Explore Framework</span>
  <span class="transition-transform group-hover:translate-x-1">&rarr;</span>
</a>
```

Form control peer states:
```html
<input type="checkbox" class="peer sr-only" id="toggle" />
<label for="toggle" class="peer-checked:bg-primary">Toggle</label>
```

## Accessibility and Motion Preferences

Support users with vestibular disorders or specific contrast requirements:
- `motion-safe:` &mdash; `@media (prefers-reduced-motion: no-preference)`
- `motion-reduce:` &mdash; `@media (prefers-reduced-motion: reduce)`
- `contrast-more:` &mdash; `@media (prefers-contrast: more)`
- `print:` &mdash; `@media print`

```html
<div class="animate-pulse motion-reduce:animate-none">
  Accessible pulse
</div>
```

## Variant Stacking

Combine multiple conditions:
```html
<div class="md:hover:shadow-lg dark:hover:bg-surface-elevated">
  Responsive interactive dark styling
</div>
```
