/**
 * Browser-safe compiler wrapper for OrayCSS Playground & Studio
 */
import { extractCandidates } from '../../oraycss/src/compiler/extractor.js';
import { parseCandidate } from '../../oraycss/src/compiler/parser.js';
import { sortRules } from '../../oraycss/src/compiler/ordering.js';
import { generateCSS } from '../../oraycss/src/compiler/generate.js';
import { optimizeCSS } from '../../oraycss/src/compiler/optimize.js';
import { analyzeCandidates } from '../../oraycss/src/compiler/diagnostics.js';
import { generateCssVariables } from '../../oraycss/src/theme/css-variables.js';
import { defaultTheme } from '../../oraycss/src/theme/defaults.js';

export const PREFLIGHT_CSS = `/* OrayCSS Preflight Reset */
*, ::before, ::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: var(--oray-border, #27272a);
}

html, :host {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  font-family: var(--oray-font-sans, system-ui, sans-serif);
}

body {
  margin: 0;
  line-height: inherit;
  background-color: var(--oray-background, #09090b);
  color: var(--oray-foreground, #fafafa);
}

h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: inherit;
}

button, input, optgroup, select, textarea {
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}

button {
  background-color: transparent;
  background-image: none;
  cursor: pointer;
}

img, svg, video {
  display: block;
  max-width: 100%;
  height: auto;
}

[hidden] {
  display: none !important;
}`;

export interface BrowserCompileOptions {
  theme?: any;
  preflight?: boolean;
  darkMode?: 'media' | 'class';
  safelist?: string[];
  minify?: boolean;
  inputCss?: string;
}

export function compileInBrowser(sources: string | string[], options: BrowserCompileOptions = {}) {
  const startTime = performance.now();

  const {
    theme = defaultTheme,
    preflight = true,
    darkMode = 'media',
    safelist = [],
    minify = false,
    inputCss = ''
  } = options;

  // 1. Candidate extraction
  const allCandidates = new Set<string>(safelist || []);
  const sourceList = Array.isArray(sources) ? sources : [sources];

  for (const src of sourceList) {
    if (typeof src === 'string') {
      const extracted = extractCandidates(src);
      for (const c of extracted) {
        allCandidates.add(c);
      }
    }
  }

  // 2. Parse candidates
  const parsedRules: any[] = [];
  for (const candidate of allCandidates) {
    const parsed = parseCandidate(candidate);
    if (parsed) {
      parsedRules.push(parsed);
    }
  }

  // 3. Deterministic rule sorting
  const sortedRules = sortRules(parsedRules);

  // 4. Generate utility CSS
  const utilityCss = generateCSS(sortedRules, { darkMode });

  // 5. Generate theme custom properties
  const themeCss = generateCssVariables(theme, darkMode);

  // 6. Preflight
  const resetCss = preflight ? PREFLIGHT_CSS : '';

  // 7. Compose final stylesheet
  let finalCss = '';
  if (inputCss && inputCss.trim()) {
    let custom = inputCss;
    if (custom.includes('@oray preflight;')) {
      custom = custom.replace('@oray preflight;', resetCss);
    }
    if (custom.includes('@oray theme;')) {
      custom = custom.replace('@oray theme;', themeCss);
    }
    if (custom.includes('@oray utilities;')) {
      custom = custom.replace('@oray utilities;', utilityCss);
    } else {
      custom = `${custom}\n\n/* OrayCSS Utilities */\n${utilityCss}`;
    }
    finalCss = custom;
  } else {
    const parts: string[] = [];
    if (resetCss) parts.push(resetCss);
    if (themeCss) parts.push(themeCss);
    if (utilityCss) parts.push(`/* OrayCSS Utilities */\n${utilityCss}`);
    finalCss = parts.join('\n\n');
  }

  // 8. Optimization (minification)
  if (minify) {
    finalCss = optimizeCSS(finalCss);
  }

  const durationMs = performance.now() - startTime;
  const diagnostics = analyzeCandidates(allCandidates, sortedRules, safelist);
  const bytes = new TextEncoder().encode(finalCss).length;

  return {
    css: finalCss,
    stats: {
      candidatesCount: allCandidates.size,
      rulesCount: sortedRules.length,
      bytes,
      durationMs: parseFloat(durationMs.toFixed(2)),
      diagnostics
    }
  };
}
