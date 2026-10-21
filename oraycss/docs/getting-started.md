# Getting Started with OrayCSS

OrayCSS is a zero-dependency, utility-first CSS framework and ahead-of-time (AOT) compiler designed for high developer velocity, pure CSS runtime independence, and restrained digital product aesthetics.

## Why OrayCSS?

- **Zero Third-Party Dependencies:** Built entirely with Node.js built-ins (`node:fs`, `node:path`, `node:test`). No PostCSS, no Autoprefixer, no bloated node_modules.
- **Ahead-of-Time Compilation:** The compiler extracts utility classes from your source markup and generates ordinary, optimized CSS at build time. Zero JavaScript runtime in the browser.
- **Built-in Design Tokens:** Systematic typography, spacing, depth, and color palettes that look intentional right out of the box.
- **Arbitrary Precision:** Express one-off values directly in markup using bracket notation: `w-[37rem]`, `grid-cols-[auto_1fr_auto]`, `top-[calc(100%+1rem)]`.

## Quickstart in 3 Steps

### 1. Install OrayCSS

```bash
npm install -D oraycss
```

### 2. Initialize Configuration

Run the initialization wizard to generate `oray.config.js` and `src/oray.css`:

```bash
npx oraycss init
```

This creates:
```javascript
// oray.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx,vue,svelte,astro}'
  ],
  output: './dist/oray.css',
  preflight: true,
  darkMode: 'media',
  theme: {}
};
```

### 3. Build Your CSS

```bash
npx oraycss build --minify
```

Include `./dist/oray.css` in your HTML `<head>`:

```html
<link rel="stylesheet" href="/dist/oray.css" />
```

### Development Watch Mode

Automatically rebuild whenever your markup or source files change:

```bash
npx oraycss watch
```
