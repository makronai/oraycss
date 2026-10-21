# OrayCSS

> **Zero-Dependency, Ahead-of-Time Utility-First CSS Framework**  
> *Compete with Tailwind CSS in expressive power and developer velocity, with zero browser runtime and zero external npm dependencies.*

[![npm version](https://img.shields.io/badge/npm-v1.0.0-emerald.svg)](https://www.npmjs.com/package/oraycss)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-success.svg)](#zero-dependency-policy)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![AOT Compiler](https://img.shields.io/badge/compiler-ahead--of--time-purple.svg)](#ahead-of-time-compilation)

---

## Strategic Philosophy: Build-Time AOT Compilation

OrayCSS makes a fundamental architectural commitment: **it generates pure CSS at build time, never dynamically styling applications in the browser at runtime**.

- **Zero Framework Overhead:** The finished website or application does not load a single byte of OrayCSS JavaScript in the browser.
- **Standalone CLI as a First-Class Citizen:** Whether you are building with vanilla HTML, React, Vue, Svelte, Astro, PHP, or Go templates, the standalone `oraycss` CLI is your complete CSS toolchain.
- **Lightning Compilation:** By leveraging Node.js native standard modules without layered abstractions or multi-level AST transformations, OrayCSS scans and compiles full projects in milliseconds.
- **Pure Dependency Freedom:** `dependencies` in `package.json` is strictly empty (`{}`). Zero third-party packages, zero transitive risks, zero supply-chain vulnerabilities.

---

## Quickstart

### 1. Installation

```bash
npm install -D oraycss
```

### 2. Initialize Project

```bash
npx oraycss init
```

This creates a clean `oray.config.js`:

```javascript
/** @type {import('oraycss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx,vue,svelte,astro}'
  ],
  output: './dist/oray.css',
  preflight: true,
  darkMode: 'media',
  theme: {
    // Custom theme overrides
  }
};
```

### 3. Build Production Stylesheet

```bash
npx oraycss build --minify
```

Link the generated stylesheet in your HTML:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="/dist/oray.css" />
    <title>OrayCSS App</title>
  </head>
  <body class="bg-background text-foreground antialiased min-h-screen">
    <main class="mx-auto max-w-4xl px-6 py-20 space-y-6">
      <span class="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
        Production Ready
      </span>
      <h1 class="text-5xl font-semibold tracking-tight">
        Build with <span class="text-primary">OrayCSS</span>.
      </h1>
      <p class="text-lg text-muted-foreground leading-relaxed">
        Expressive utilities, consistent design tokens, and ahead-of-time CSS.
      </p>
      <div class="flex items-center gap-4 pt-2">
        <a href="#" class="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition duration-200 hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-2 focus-visible:outline-ring">
          Get Started
        </a>
      </div>
    </main>
  </body>
</html>
```

### 4. Development Watch Mode

```bash
npx oraycss watch
```

---

## Standalone CLI Commands

| Command | Description |
|---------|-------------|
| `oraycss init` | Initialize a new `oray.config.js` and `src/oray.css` |
| `oraycss build [options]` | Scan source files and compile CSS ahead of time |
| `oraycss watch [options]` | Watch source files and recompile automatically on save |
| `oraycss inspect [options]` | Inspect discovered candidates, recognized utilities, and CSS breakdown |
| `oraycss --help` | View complete CLI documentation and flags |
| `oraycss --version` | Output current OrayCSS version |

### CLI Options

- `-i, --input <file>`: Authored input stylesheet with `@oray` directives.
- `-o, --output <file>`: Target destination path for compiled stylesheet.
- `-c, --config <file>`: Path to custom configuration file.
- `-m, --minify`: Enable safe whitespace and comment removal.
- `-w, --watch`: Enable continuous watch mode.
- `--verbose`: Print category-level breakdown of all compiled rules.

---

## Feature Matrix

| Feature | OrayCSS | Tailwind CSS |
|---------|---------|--------------|
| **Core Architecture** | AOT Build-time Compiler | AOT Build-time Compiler |
| **npm Dependencies** | **0** | ~30+ packages |
| **Browser Runtime** | **0 KB** (Pure CSS) | 0 KB |
| **Arbitrary Values** | `w-[37rem]`, `bg-[#101014]` | `w-[37rem]`, `bg-[#101014]` |
| **Responsive Variants** | `sm:`, `md:`, `lg:`, `xl:`, `2xl:` | `sm:`, `md:`, `lg:`, `xl:`, `2xl:` |
| **Interactive Variants** | `hover:`, `focus:`, `focus-visible:`, `active:`, `group-hover:`, `peer-checked:` | Same |
| **Dark Mode** | Media query & `.dark` class strategy | Same |
| **Accessible Motion** | `motion-safe:`, `motion-reduce:` | Same |
| **Design Token System** | Semantic roles (`surface`, `primary`, `accent`) | Utility color map |
| **Supply Chain Risk** | **Zero** | Standard npm tree |

---

## Arbitrary Values

OrayCSS features a balanced-delimiter parser that handles complex arbitrary CSS values without falling back to raw expression evaluation:

```html
<!-- Custom dimensions -->
<div class="w-[37rem] max-w-[calc(100%-4rem)]"></div>

<!-- Arbitrary CSS Grid templates -->
<div class="grid grid-cols-[auto_1fr_auto] gap-4"></div>

<!-- Exact hex, rgb, or hsl colors -->
<div class="bg-[#101014] text-[#b8f36b] border-[#27272a]"></div>

<!-- Responsive clamp expressions -->
<h1 class="text-[clamp(2rem,5vw,5rem)]"></h1>

<!-- Calculated insets -->
<div class="top-[calc(100%+1rem)]"></div>
```

---

## Zero-Dependency Policy

The core framework maintains strict dependency freedom:
- No PostCSS, Lightning CSS, Sass, Less, or Babel.
- No third-party globbing or filesystem watching packages.
- Native Node.js standard modules only: `node:fs`, `node:path`, `node:process`, `node:test`, `node:assert`, `node:crypto`.
- Automated test suite runs with native `node --test`.

---

## Programmatic API

OrayCSS can also be invoked programmatically in build scripts or custom bundler plugins:

```javascript
import { compile, extractCandidates, parseCandidate } from 'oraycss';

const html = '<div class="flex items-center gap-4 bg-surface p-6">...</div>';

const { css, stats } = compile([html], {
  minify: true,
  preflight: true
});

console.log(`Compiled in ${stats.durationMs}ms (${stats.bytes} bytes)`);
```

---

## License

MIT &copy; 2026 OrayCSS Contributors.
