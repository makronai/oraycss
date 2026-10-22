# OrayCSS

> **Zero-Dependency, Ahead-of-Time Utility-First CSS Framework & Ready-to-Use UI Component Suite**  
> *Compete directly with Tailwind CSS in expressive power and speed — with zero runtime dependencies and built-in UI components.*

[![npm version](https://img.shields.io/badge/npm-v1.0.0-emerald.svg)](https://www.npmjs.com/package/oraycss)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-success.svg)](#zero-dependency-policy)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![AOT Compiler](https://img.shields.io/badge/compiler-ahead--of--time-purple.svg)](#ahead-of-time-compilation)
[![100% Tests Passing](https://img.shields.io/badge/tests-45%2F45%20passing-brightgreen.svg)](#testing)

---

## Why OrayCSS?

Tailwind CSS requires 30+ npm packages and separate third-party component libraries (like DaisyUI or Flowbite) to build complete applications. **OrayCSS changes that:**

- **0 NPM Runtime Dependencies:** `dependencies: {}` in `package.json`. No PostCSS, Babel, or external AST parsers.
- **Built-in Ready-to-Use UI Component Suite:** Switches, tabs, accordions, dropdowns, dropups, breadcrumbs, checkboxes, forms, tooltips, notifications, toast notifications, toggles, group toggles, chips, panels, buttons, and modals built right into the framework.
- **Ahead-of-Time Compilation:** Compiles pure CSS in single-digit milliseconds using Node.js native standard modules.
- **Arbitrary Values Precision:** Balanced bracket parser handles `w-[37rem]`, `bg-[#101014]`, and `top-[calc(100%+1rem)]`.
- **Zero Browser Runtime:** The finished application loads pure, deterministic CSS — zero JavaScript runtime in the browser.

---

## Installation

```bash
npm install -D oraycss
```

---

## CLI Commands

The standalone CLI is available out of the box via `npx oraycss`:

```bash
# 1. Initialize a new configuration file (oray.config.js)
npx oraycss init

# 2. Build production CSS ahead-of-time
npx oraycss build --minify

# 3. Development watch mode (recompiles on save)
npx oraycss watch

# 4. Inspect candidates and AST diagnostics
npx oraycss inspect
```

---

## Feature Comparison: OrayCSS vs Tailwind CSS

| Feature | OrayCSS | Tailwind CSS |
|---|---|---|
| **Runtime Dependencies** | **0** | ~30+ packages |
| **Ready-to-Use UI Components** | **Built-in** (switches, tabs, accordions, etc.) | Requires 3P plugins (DaisyUI, Flowbite) |
| **Compilation Speed** | **~2-5 ms** (Native standard library) | Varies with PostCSS / Lightning pipeline |
| **Browser Runtime** | **0 KB** (Pure CSS) | 0 KB |
| **Arbitrary Values** | `w-[37rem]`, `bg-[#101014]` | `w-[37rem]`, `bg-[#101014]` |
| **Responsive Variants** | `sm:`, `md:`, `lg:`, `xl:`, `2xl:` | `sm:`, `md:`, `lg:`, `xl:`, `2xl:` |
| **Interactive Variants** | `hover:`, `focus:`, `active:`, `group-hover:` | `hover:`, `focus:`, `active:`, `group-hover:` |
| **Dark Mode** | Media query & `.dark` class | Media query & `.dark` class |
| **Supply Chain Risk** | **Zero** | Standard npm dependency tree |

---

## Ready-to-Use UI Component Suite

OrayCSS includes accessible, battle-tested UI primitives directly in the compiler. Use them directly with standard HTML markup:

### 1. Switches
```html
<label class="switch">
  <input type="checkbox" class="switch-input" checked />
  <span class="switch-thumb"></span>
</label>
```

### 2. Tabs
```html
<nav class="tabs">
  <button class="tab tab-active">Overview</button>
  <button class="tab">Settings</button>
</nav>

<div class="tabs-pills">
  <button class="tab-pill tab-pill-active">Monthly</button>
  <button class="tab-pill">Annual</button>
</div>
```

### 3. Accordions
```html
<div class="accordion">
  <details class="accordion-item" open>
    <summary class="accordion-trigger">Question?</summary>
    <div class="accordion-content">Answer.</div>
  </details>
</div>
```

### 4. Drop-Down & Drop-Up Menus
```html
<!-- Dropdown -->
<div class="dropdown">
  <button class="btn btn-secondary dropdown-trigger">Actions</button>
  <div class="dropdown-menu">
    <a class="dropdown-item">Edit</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item text-danger">Delete</a>
  </div>
</div>

<!-- Dropup -->
<div class="dropup">
  <button class="btn btn-secondary">Toolbar</button>
  <div class="dropup-menu">
    <a class="dropup-item">Profile</a>
  </div>
</div>
```

### 5. Breadcrumbs
```html
<ol class="breadcrumbs">
  <li class="breadcrumb-item"><a class="breadcrumb-link" href="#">Home</a></li>
  <li class="breadcrumb-item"><span class="breadcrumb-active">Docs</span></li>
</ol>
```

### 6. Checkboxes & Forms
```html
<label class="checkbox-label">
  <input type="checkbox" class="checkbox" checked />
  <span>Enable feature</span>
</label>

<div class="form-group">
  <label class="form-label">Project Name</label>
  <input type="text" class="form-input" placeholder="my-app" />
  <span class="form-hint">Must be URL-safe</span>
</div>
```

### 7. Tooltips & Notifications
```html
<!-- Tooltip -->
<div class="tooltip tooltip-top">
  <button class="btn btn-outline">Hover Me</button>
  <span class="tooltip-content">Saved</span>
</div>

<!-- Notification Alert -->
<div class="notification notification-success">
  <strong class="notification-title">Success</strong>
  <p class="notification-desc">Changes applied.</p>
</div>
```

### 8. Toast Notifications, Toggles, Chips, Panels, Buttons & Modals
- **Toasts:** `.toast-container`, `.toast-top-right`, `.toast`
- **Toggles:** `.toggle`, `.toggle-active`, `.toggle-group`, `.toggle-group-item`
- **Chips:** `.chip`, `.chip-primary`, `.chip-accent`, `.chip-dismiss`
- **Panels:** `.panel`, `.panel-elevated`, `.panel-header`, `.panel-body`, `.panel-footer`
- **Buttons & Modals:** `.btn`, `.btn-primary`, `.btn-secondary`, `.modal`, `.modal-box`

See [`docs/components.md`](docs/components.md) for full documentation on all components.

---

## Programmatic API

You can also run OrayCSS programmatically in custom Node.js build pipelines:

```javascript
import { compile } from 'oraycss';

const html = '<div class="switch switch-checked p-6 bg-surface">...</div>';

const { css, stats } = compile([html], {
  preflight: true,
  minify: true
});

console.log(`Compiled ${stats.rulesCount} rules in ${stats.durationMs}ms (${stats.bytes} bytes)`);
```

---

## Testing

OrayCSS uses the native Node.js test runner (`node:test`) with 100% test coverage:

```bash
npm test
```

---

## License

MIT &copy; 2026 OrayCSS Contributors.
