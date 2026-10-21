# OrayCSS Known Limitations & Non-Goals

Being transparent about technical boundaries is a core tenet of OrayCSS.

## 1. Dynamic Class Interpolation
Because OrayCSS scans source files statically ahead-of-time, string concatenations like:
```javascript
const cls = `bg-${color}-500`; // Cannot be inferred statically
```
cannot be determined without executing runtime code.
**Solution:**
Use complete static class names:
```javascript
const colorClasses = {
  emerald: 'bg-emerald-500',
  violet: 'bg-violet-500'
};
```
Or register dynamic candidates in `safelist`:
```javascript
// oray.config.js
export default {
  safelist: ['bg-emerald-500', 'bg-violet-500']
};
```

## 2. Legacy Browser Support
OrayCSS targets modern web browsers (Chrome 90+, Safari 14+, Firefox 88+, Edge 90+). Features such as `color-mix(in srgb, ...)`, `aspect-ratio`, and `:focus-visible` are used directly in generated CSS rather than transpiled with heavy vendor prefixes.

## 3. PostCSS / CSS Nesting Plugin Compatibility
OrayCSS is designed to operate completely independently of PostCSS. While you can feed custom authored CSS via `--input`, OrayCSS does not execute arbitrary third-party PostCSS plugins.
