export interface PlaygroundPreset {
  id: string;
  name: string;
  description: string;
  html: string;
}

export const PLAYGROUND_PRESETS: PlaygroundPreset[] = [
  {
    id: 'hero',
    name: 'Hero Showcase',
    description: 'Clean headline, glowing badge, subtle button interactions',
    html: `<div class="max-w-2xl mx-auto py-12 px-6 space-y-6 text-center">
  <span class="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
    <span class="size-2 rounded-full bg-primary animate-pulse"></span>
    Zero-Dependency &bull; Pure AOT
  </span>

  <h1 class="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
    Design with intention.
    <span class="text-primary block mt-1">Compiled in milliseconds.</span>
  </h1>

  <p class="text-base text-muted-foreground leading-relaxed max-w-lg mx-auto">
    OrayCSS produces lightweight, predictable stylesheets with zero browser runtime and complete supply chain independence.
  </p>

  <div class="flex items-center justify-center gap-4 pt-2">
    <button class="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition duration-200 hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-2 focus-visible:outline-ring">
      Get Started &rarr;
    </button>
    <button class="inline-flex items-center justify-center rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground hover:bg-surface-elevated transition">
      View Documentation
    </button>
  </div>
</div>`
  },
  {
    id: 'metric-card',
    name: 'Metric Card',
    description: 'SaaS KPI card with elevation and trend badges',
    html: `<div class="max-w-sm mx-auto p-6">
  <div class="rounded-2xl border border-border bg-surface p-6 shadow-soft hover:border-primary/40 transition duration-200">
    <div class="flex items-center justify-between">
      <span class="text-xs font-medium text-muted-foreground uppercase tracking-wider">AOT Cold Compilation</span>
      <span class="inline-flex items-center rounded-full bg-success/15 px-2.5 py-0.5 text-xs font-semibold text-success">
        &minus;68% latency
      </span>
    </div>
    
    <div class="mt-4 flex items-baseline justify-between">
      <span class="text-4xl font-semibold tracking-tight text-foreground font-mono">3.4 ms</span>
      <span class="text-xs text-primary font-mono font-medium">100% Native</span>
    </div>

    <p class="mt-3 text-xs text-muted-foreground leading-relaxed border-t border-border pt-3">
      Zero PostCSS overhead &bull; Single-pass deterministic compiler
    </p>
  </div>
</div>`
  },
  {
    id: 'pricing',
    name: 'Pricing Tier Card',
    description: 'Feature checklist and prominent call-to-action',
    html: `<div class="max-w-md mx-auto p-6">
  <div class="rounded-3xl border border-primary/40 bg-surface p-8 shadow-soft relative overflow-hidden">
    <div class="absolute top-0 right-0 rounded-bl-xl bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
      RECOMMENDED
    </div>

    <span class="text-xs font-mono uppercase tracking-widest text-primary">Production Tier</span>
    <h3 class="text-2xl font-semibold text-foreground mt-1">Enterprise Core</h3>
    <div class="mt-4 flex items-baseline gap-2">
      <span class="text-4xl font-bold font-mono text-foreground">$0</span>
      <span class="text-xs text-muted-foreground">/ forever open-source</span>
    </div>

    <ul class="mt-6 space-y-3 text-xs text-muted-foreground border-t border-border pt-6">
      <li class="flex items-center gap-2 text-foreground">
        <span class="text-primary font-bold">&check;</span> Zero runtime browser dependencies
      </li>
      <li class="flex items-center gap-2 text-foreground">
        <span class="text-primary font-bold">&check;</span> Standalone Node.js CLI binary
      </li>
      <li class="flex items-center gap-2 text-foreground">
        <span class="text-primary font-bold">&check;</span> Arbitrary value bracket grammar
      </li>
      <li class="flex items-center gap-2 text-foreground">
        <span class="text-primary font-bold">&check;</span> Built-in dark mode and motion safety
      </li>
    </ul>

    <button class="mt-8 w-full rounded-xl bg-primary px-4 py-3 text-xs font-semibold text-primary-foreground hover:shadow-glow transition duration-200">
      Install OrayCSS Now
    </button>
  </div>
</div>`
  },
  {
    id: 'arbitrary-demo',
    name: 'Arbitrary Value Lab',
    description: 'Custom bracket values: w-[37rem], bg-[#101014], clamp()',
    html: `<div class="max-w-xl mx-auto p-6 space-y-4">
  <div class="w-[37rem] max-w-full rounded-2xl bg-[#121215] border border-[#27272a] p-6 shadow-soft">
    <span class="text-xs font-mono text-[#a78bfa]">w-[37rem] &bull; bg-[#121215]</span>
    <h3 class="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold text-[#fafafa] mt-2">
      Balanced Delimiter Precision
    </h3>
    <div class="grid grid-cols-[auto_1fr_auto] items-center gap-4 mt-4 pt-4 border-t border-[#27272a]">
      <span class="size-3 rounded-full bg-[#b8f36b]"></span>
      <span class="text-xs text-[#a1a1aa] font-mono">grid-cols-[auto_1fr_auto]</span>
      <span class="text-xs font-mono text-[#b8f36b]">$ npx oraycss build</span>
    </div>
  </div>
</div>`
  }
];
