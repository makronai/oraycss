import React from 'react';
import { ShieldCheck, Cpu, Zap, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export const ArchitectureView: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col p-4 sm:p-6 max-w-7xl mx-auto w-full space-y-8">
      {/* Intro Hero */}
      <div className="bg-surface border border-border rounded-2xl p-8 space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono font-medium text-primary">
          <ShieldCheck className="size-3.5" />
          <span>Strict Zero-Dependency Architecture</span>
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Why Zero-Dependency Ahead-of-Time Matters
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground max-w-3xl">
          Modern frontend toolchains suffer from massive supply-chain sprawl, slow cold compilation times, and fragile plugin trees. OrayCSS is intentionally engineered with zero third-party dependencies, compiling ordinary CSS ahead of time using only native Node.js and browser platform standards.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-border bg-surface p-6 space-y-3">
          <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
            <Zap className="size-5" />
          </div>
          <h3 className="text-base font-semibold">Pillar A: Effortless Utility</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Write intuitive atomic utilities in markup. The compiler scans only the classes you actually use and eliminates unused declarations.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6 space-y-3">
          <div className="size-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center font-bold">
            <Layers className="size-5" />
          </div>
          <h3 className="text-base font-semibold">Pillar B: Design Foundations</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Cohesive semantic design tokens for backgrounds, surfaces, contrast, typography, and controlled elevation shadows.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6 space-y-3">
          <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
            <Cpu className="size-5" />
          </div>
          <h3 className="text-base font-semibold">Pillar C: Standalone Speed</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Generates pure CSS at build time. Zero browser runtime overhead, zero dynamic JavaScript recalculations in client DOM.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6 space-y-3">
          <div className="size-10 rounded-xl bg-success/10 text-success flex items-center justify-center font-bold">
            <CheckCircle2 className="size-5" />
          </div>
          <h3 className="text-base font-semibold">Pillar D: Universal Freedom</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Works cleanly with plain HTML, React, Vue, Svelte, Astro, Go, or PHP. Complete reduced-motion and accessibility support.
          </p>
        </div>
      </div>

      {/* Compiler Pipeline Flow */}
      <div className="rounded-2xl border border-border bg-surface p-8 space-y-6 shadow-soft">
        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Cpu className="size-5 text-primary" />
          <span>The AOT Compiler Pipeline</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="rounded-xl border border-border bg-surface-elevated p-4 space-y-2">
            <span className="font-mono text-primary font-bold">01 / Content Discovery</span>
            <p className="text-muted-foreground">
              Recursive directory walker matches file globs using native regex translation with zero glob packages.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface-elevated p-4 space-y-2">
            <span className="font-mono text-primary font-bold">02 / Extraction & Parsing</span>
            <p className="text-muted-foreground">
              Extracts candidates with balanced delimiter support for bracket syntax like <code className="text-primary font-mono">w-[37rem]</code>.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface-elevated p-4 space-y-2">
            <span className="font-mono text-primary font-bold">03 / Deterministic Ordering</span>
            <p className="text-muted-foreground">
              Sorts rules by utility category weight and breakpoint media query order to guarantee bit-for-bit repeatability.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface-elevated p-4 space-y-2">
            <span className="font-mono text-primary font-bold">04 / Safe Minification</span>
            <p className="text-muted-foreground">
              Strips comments and whitespace while preserving string literals and mathematical spacing in <code className="text-primary font-mono">calc()</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="rounded-2xl border border-border bg-surface overflow-hidden shadow-soft">
        <div className="border-b border-border p-6">
          <h3 className="text-base font-semibold">OrayCSS vs Tailwind CSS</h3>
          <p className="text-xs text-muted-foreground mt-1">Detailed architectural comparison</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border bg-surface-elevated/50 text-muted-foreground font-medium">
              <tr>
                <th className="p-4 pl-6">Dimension</th>
                <th className="p-4 text-primary font-semibold">OrayCSS (v1.0.0)</th>
                <th className="p-4 text-muted-foreground">Tailwind CSS (v3 / v4)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted-foreground">
              <tr>
                <td className="p-4 pl-6 font-medium text-foreground">Runtime Dependencies</td>
                <td className="p-4 font-mono font-semibold text-success">0 (Strictly Empty)</td>
                <td className="p-4 font-mono">~30+ transitive dependencies</td>
              </tr>
              <tr>
                <td className="p-4 pl-6 font-medium text-foreground">Browser Runtime</td>
                <td className="p-4 font-mono font-semibold text-primary">0 KB (Pure CSS)</td>
                <td className="p-4 font-mono">0 KB (Build-time)</td>
              </tr>
              <tr>
                <td className="p-4 pl-6 font-medium text-foreground">PostCSS Requirement</td>
                <td className="p-4 font-medium text-foreground">Optional / Not Required</td>
                <td className="p-4">Standard requirement or custom rust bundler</td>
              </tr>
              <tr>
                <td className="p-4 pl-6 font-medium text-foreground">Arbitrary Bracket Values</td>
                <td className="p-4 text-foreground">Full support (balanced delimiter parser)</td>
                <td className="p-4 text-foreground">Full support</td>
              </tr>
              <tr>
                <td className="p-4 pl-6 font-medium text-foreground">Design Tokens</td>
                <td className="p-4 text-foreground">Built-in semantic roles & themes</td>
                <td className="p-4 text-foreground">Primitive color scales</td>
              </tr>
              <tr>
                <td className="p-4 pl-6 font-medium text-foreground">Supply Chain Vulnerabilities</td>
                <td className="p-4 font-mono font-semibold text-success">Zero Audit Risk</td>
                <td className="p-4 font-mono">Standard npm ecosystem audit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
