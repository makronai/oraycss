# OrayCSS Ready-to-Use UI Component Suite

OrayCSS includes a complete, accessible, zero-dependency component layer built right into the framework. You do not need DaisyUI, Flowbite, Headless UI, or any third-party UI library.

All components are available out-of-the-box and can be used directly with HTML or combined with OrayCSS utility classes and responsive/interactive variants (e.g. `hover:tab-active`, `md:panel-elevated`).

---

## 1. Switches

Accessible toggle switches built with modern CSS `:has()` pseudo-class or class states.

```html
<!-- Native Checkbox Switch (Recommended) -->
<label class="switch">
  <input type="checkbox" class="switch-input" checked />
  <span class="switch-thumb"></span>
</label>

<!-- Small and Large Sizes -->
<label class="switch switch-sm">
  <input type="checkbox" class="switch-input" />
  <span class="switch-thumb"></span>
</label>

<label class="switch switch-lg">
  <input type="checkbox" class="switch-input" checked />
  <span class="switch-thumb"></span>
</label>
```

---

## 2. Tabs

Underlined navigation tabs and pill-style segmented tab lists.

```html
<!-- Standard Underlined Tabs -->
<nav class="tabs">
  <button class="tab tab-active">Overview</button>
  <button class="tab">Features</button>
  <button class="tab">Security</button>
  <button class="tab">Billing</button>
</nav>

<!-- Pill Style Tabs -->
<div class="tabs-pills">
  <button class="tab-pill tab-pill-active">Monthly</button>
  <button class="tab-pill">Annual (-20%)</button>
</div>
```

---

## 3. Accordions

Collapsible sections built with accessible native HTML `<details>` and `<summary>` or custom classes with animated chevron indicator.

```html
<div class="accordion">
  <details class="accordion-item" open>
    <summary class="accordion-trigger">
      <span>What makes OrayCSS different from Tailwind?</span>
    </summary>
    <div class="accordion-content">
      OrayCSS has 0 npm runtime and dev dependencies, a standalone CLI binary, and built-in ready-to-use UI components without needing external plugins.
    </div>
  </details>

  <details class="accordion-item">
    <summary class="accordion-trigger">
      <span>Does OrayCSS require a browser JavaScript runtime?</span>
    </summary>
    <div class="accordion-content">
      No. All CSS is generated ahead-of-time (AOT) at build time, outputting pure CSS.
    </div>
  </details>
</div>
```

---

## 4. Drop-Down & Drop-Up Menus

Floating action menus with support for headers, items, icons, and dividers.

```html
<!-- Drop-Down Menu (Opens downward) -->
<div class="dropdown">
  <button class="btn btn-secondary dropdown-trigger">
    <span>Options</span>
    <span>&dtrif;</span>
  </button>
  <div class="dropdown-menu">
    <div class="dropdown-header">Actions</div>
    <a href="#edit" class="dropdown-item">Edit Profile</a>
    <a href="#duplicate" class="dropdown-item">Duplicate</a>
    <div class="dropdown-divider"></div>
    <a href="#delete" class="dropdown-item text-danger">Delete</a>
  </div>
</div>

<!-- Drop-Up Menu (Opens upward for bottom toolbars) -->
<div class="dropup">
  <button class="btn btn-secondary">
    <span>Settings</span>
    <span>&utrif;</span>
  </button>
  <div class="dropup-menu">
    <a href="#theme" class="dropdown-item">Dark Mode</a>
    <a href="#shortcuts" class="dropdown-item">Keyboard Shortcuts</a>
  </div>
</div>
```

---

## 5. Breadcrumbs

Accessible navigation trail with automatic slash separators.

```html
<nav aria-label="Breadcrumb">
  <ol class="breadcrumbs">
    <li class="breadcrumb-item">
      <a href="/" class="breadcrumb-link">Home</a>
    </li>
    <li class="breadcrumb-item">
      <a href="/components" class="breadcrumb-link">Components</a>
    </li>
    <li class="breadcrumb-item">
      <span class="breadcrumb-active">Navigation</span>
    </li>
  </ol>
</nav>
```

---

## 6. Checkboxes

High-contrast, accessible checkboxes with SVG checkmarks.

```html
<label class="checkbox-label">
  <input type="checkbox" class="checkbox" checked />
  <span>Enable ahead-of-time optimization</span>
</label>

<label class="checkbox-label">
  <input type="checkbox" class="checkbox" />
  <span>Automatic vendor prefixing</span>
</label>
```

---

## 7. Forms

Input fields, select boxes, textareas, labels, hints, and error validation states.

```html
<form class="space-y-4">
  <div class="form-group">
    <label class="form-label">Email Address</label>
    <input type="email" class="form-input" placeholder="you@company.com" />
    <span class="form-hint">We will never share your email address.</span>
  </div>

  <div class="form-group">
    <label class="form-label">Project Name</label>
    <input type="text" class="form-input form-input-error" value="my-app" />
    <span class="form-error">This project name already exists.</span>
  </div>

  <div class="form-group">
    <label class="form-label">Deployment Region</label>
    <select class="form-select">
      <option value="us-east">US East (N. Virginia)</option>
      <option value="eu-west">EU West (Frankfurt)</option>
      <option value="ap-southeast">Asia Pacific (Singapore)</option>
    </select>
  </div>

  <div class="form-group">
    <label class="form-label">Notes</label>
    <textarea class="form-textarea" placeholder="Describe your configuration..."></textarea>
  </div>
</form>
```

---

## 8. Tooltips

Directional hover tooltips without JavaScript.

```html
<div class="tooltip tooltip-top">
  <button class="btn btn-outline">Top Tooltip</button>
  <span class="tooltip-content">Saved to clipboard</span>
</div>

<div class="tooltip tooltip-bottom">
  <button class="btn btn-outline">Bottom Tooltip</button>
  <span class="tooltip-content">Read documentation</span>
</div>
```

---

## 9. Notifications / Alerts

Status callout banners with title, description, and dismiss action.

```html
<!-- Success Notification -->
<div class="notification notification-success">
  <div class="notification-icon">&check;</div>
  <div class="grow">
    <strong class="notification-title">Build Succeeded</strong>
    <p class="notification-desc">Your production stylesheet was generated in 3.4ms with 0 dependencies.</p>
  </div>
  <button class="notification-close">&times;</button>
</div>

<!-- Warning Notification -->
<div class="notification notification-warning">
  <div class="grow">
    <strong class="notification-title">Unused CSS Detected</strong>
    <p class="notification-desc">Safelist rule did not match any source tokens.</p>
  </div>
</div>

<!-- Danger Notification -->
<div class="notification notification-danger">
  <div class="grow">
    <strong class="notification-title">Compilation Error</strong>
    <p class="notification-desc">Unbalanced arbitrary bracket expression at line 42.</p>
  </div>
</div>
```

---

## 10. Toast Notifications

Fixed floating toast notifications with slide-in animation.

```html
<div class="toast-container toast-top-right">
  <div class="toast">
    <span class="text-success">&check;</span>
    <div>
      <div class="font-semibold text-sm">Package Published</div>
      <div class="text-xs text-muted-foreground">oraycss@1.0.0 is live on npm</div>
    </div>
  </div>
</div>
```

---

## 11. Toggles & Group Toggles

Interactive state toggles and segmented radio button groups.

```html
<!-- Single Toggle -->
<button class="toggle toggle-active">Active View</button>
<button class="toggle">Inactive View</button>

<!-- Segmented Toggle Group -->
<div class="toggle-group">
  <button class="toggle-group-item toggle-group-item-active">Daily</button>
  <button class="toggle-group-item">Weekly</button>
  <button class="toggle-group-item">Monthly</button>
</div>
```

---

## 12. Chips & Badges

Compact status indicators and dismissible pill chips.

```html
<span class="chip chip-primary">v1.0.0</span>
<span class="chip chip-accent">Zero Dependencies</span>
<span class="chip chip-success">Healthy</span>
<span class="chip chip-warning">Experimental</span>
<span class="chip chip-danger">Deprecated</span>

<!-- Dismissible Chip -->
<span class="chip chip-primary">
  <span>Frontend</span>
  <button class="chip-dismiss">&times;</button>
</span>
```

---

## 13. Panels & Cards

Structured content cards with headers, bodies, footers, and elevation.

```html
<div class="panel panel-elevated">
  <div class="panel-header">
    <h3 class="panel-title">Compiler Settings</h3>
    <span class="chip chip-primary">AOT</span>
  </div>
  <div class="panel-body space-y-3">
    <p class="text-sm text-muted-foreground">Configure ahead-of-time scanner rules and token safelists.</p>
  </div>
  <div class="panel-footer">
    <button class="btn btn-secondary">Cancel</button>
    <button class="btn btn-primary">Save Settings</button>
  </div>
</div>
```

---

## 14. Buttons & Modals

Universal buttons and backdrop-blurred modal dialogs.

```html
<!-- Buttons -->
<button class="btn btn-primary">Primary Action</button>
<button class="btn btn-secondary">Secondary Action</button>
<button class="btn btn-outline">Outline Action</button>
<button class="btn btn-sm btn-primary">Small</button>
<button class="btn btn-lg btn-primary">Large</button>

<!-- Modal Dialog -->
<div class="modal is-open">
  <div class="modal-box space-y-4">
    <h3 class="text-lg font-semibold">Confirm Deployment</h3>
    <p class="text-sm text-muted-foreground">Are you ready to deploy your zero-dependency stylesheet to production?</p>
    <div class="flex justify-end gap-3 pt-2">
      <button class="btn btn-secondary">Cancel</button>
      <button class="btn btn-primary">Deploy Now</button>
    </div>
  </div>
</div>
```
