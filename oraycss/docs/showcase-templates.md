# OrayCSS Showcase Templates & External Project Starters

Use these production-ready markup patterns to build your own showcase applications with OrayCSS.

---

## 1. Minimal Landing Page Template

A clean, high-contrast landing page featuring responsive typography, a glowing badge, and accessible calls-to-action:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Landing Page</title>
    <link rel="stylesheet" href="./dist/oray.css" />
  </head>
  <body class="bg-background text-foreground antialiased min-h-screen">
    <header class="border-b border-border bg-background/80 sticky top-0 z-50 backdrop-blur-md">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" class="flex items-center gap-2.5 font-semibold text-lg tracking-tight">
          <div class="size-8 rounded-lg bg-primary flex items-center justify-center font-bold text-primary-foreground shadow-glow">
            O
          </div>
          <span>My<span class="text-primary">Product</span></span>
        </a>
        <nav class="hidden md:flex items-center gap-6 text-sm text-muted-foreground font-medium">
          <a href="#features" class="hover:text-foreground transition">Features</a>
          <a href="#docs" class="hover:text-foreground transition">Docs</a>
        </nav>
        <a href="#cta" class="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition duration-200 hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-2 focus-visible:outline-ring">
          Get Started
        </a>
      </div>
    </header>

    <main class="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <section class="max-w-3xl space-y-8">
        <div class="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
          <span class="size-2 rounded-full bg-primary animate-pulse"></span>
          <span>Zero Runtime Dependencies &bull; Pure AOT Compilation</span>
        </div>

        <h1 class="text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl leading-tight">
          Powerful ideas.
          <span class="text-primary block mt-1">Beautifully simple.</span>
        </h1>

        <p class="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Build thoughtful digital experiences with expressive utilities, consistent design tokens, and modern CSS.
        </p>

        <div class="flex flex-wrap items-center gap-4 pt-2">
          <a href="#" class="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition duration-200 hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-2 focus-visible:outline-ring">
            Install via npm &rarr;
          </a>
        </div>
      </section>

      <section class="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div class="rounded-2xl border border-border bg-surface p-8 transition duration-200 hover:border-primary/40 hover:-translate-y-1">
          <h2 class="text-xl font-semibold mb-2">Zero Dependencies</h2>
          <p class="text-sm leading-relaxed text-muted-foreground">
            No third-party runtime or build tool overhead. Pure standards-based CSS.
          </p>
        </div>
      </section>
    </main>
  </body>
</html>
```

---

## 2. SaaS Dashboard Template

A telemetry dashboard with a sidebar, stat cards, and an accessible data table:

```html
<div class="min-h-screen bg-background text-foreground flex flex-col md:flex-row">
  <!-- Sidebar -->
  <aside class="w-full md:w-64 border-r border-border bg-surface p-6 space-y-6">
    <div class="flex items-center gap-3">
      <div class="size-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">D</div>
      <h1 class="font-semibold text-sm">Dashboard</h1>
    </div>
    <nav class="space-y-1">
      <a href="#" class="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-sm font-medium text-primary">Overview</a>
      <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-surface-elevated transition">Analytics</a>
    </nav>
  </aside>

  <!-- Main View -->
  <main class="flex-1 p-6 md:p-8 space-y-8">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div class="rounded-xl border border-border bg-surface p-5">
        <span class="text-xs font-medium text-muted-foreground">Compilation Time</span>
        <div class="mt-2 text-2xl font-semibold tracking-tight font-mono">3.4 ms</div>
      </div>
      <div class="rounded-xl border border-border bg-surface p-5">
        <span class="text-xs font-medium text-muted-foreground">CSS Size</span>
        <div class="mt-2 text-2xl font-semibold tracking-tight font-mono">8.4 KB</div>
      </div>
      <div class="rounded-xl border border-border bg-surface p-5">
        <span class="text-xs font-medium text-muted-foreground">Dependencies</span>
        <div class="mt-2 text-2xl font-semibold tracking-tight text-success font-mono">0</div>
      </div>
    </div>
  </main>
</div>
```

---

## 3. Immersive Editorial Portfolio Template

An editorial portfolio layout built with serif typography, asymmetric grid composition, and subtle micro-interactions:

```html
<div class="mx-auto max-w-5xl px-6 py-16 md:py-24 space-y-20">
  <header class="flex items-center justify-between border-b border-border pb-6">
    <h1 class="text-sm font-semibold tracking-wide uppercase">Jane Doe &bull; Studio</h1>
    <nav class="flex gap-4 text-xs text-muted-foreground">
      <a href="#work" class="hover:text-foreground transition">Works</a>
      <a href="#about" class="hover:text-foreground transition">About</a>
    </nav>
  </header>

  <section class="max-w-3xl space-y-6">
    <h2 class="text-4xl sm:text-6xl font-serif tracking-tight leading-tight">
      Where typography, restraint, and software meet.
    </h2>
    <p class="text-lg text-muted-foreground leading-relaxed max-w-xl">
      Crafting thoughtful digital interfaces with zero superfluous weight.
    </p>
  </section>
</div>
```

---

## 4. Commerce Product Page Template

A clean hardware/lifestyle product layout with finish selectors and purchase call-to-actions:

```html
<div class="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
  <div class="rounded-2xl border border-border bg-surface p-8 aspect-square flex items-center justify-center shadow-soft">
    <div class="size-48 rounded-3xl bg-gradient-to-tr from-surface-elevated to-surface border border-border flex items-center justify-center">
      <span class="font-mono text-xl font-bold text-primary">AP-01</span>
    </div>
  </div>

  <div class="space-y-6">
    <span class="text-xs font-mono uppercase tracking-widest text-primary">Audio Transducer System</span>
    <h1 class="text-3xl font-semibold tracking-tight">Aura Pulse 01</h1>
    <div class="text-3xl font-semibold text-primary font-mono">$389</div>
    <button class="w-full rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground hover:shadow-glow transition duration-200">
      Add to Bag
    </button>
  </div>
</div>
```
