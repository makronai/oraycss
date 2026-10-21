import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { extractCandidates } from './extractor.js';
import { parseCandidate } from './parser.js';
import { sortRules } from './ordering.js';
import { generateCSS } from './generate.js';
import { optimizeCSS } from './optimize.js';
import { analyzeCandidates } from './diagnostics.js';
import { generateCssVariables } from '../theme/css-variables.js';
import { defaultTheme } from '../theme/defaults.js';

let preflightCache = null;

function getPreflightCss() {
  if (preflightCache) return preflightCache;
  try {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const preflightPath = path.resolve(__dirname, '../css/preflight.css');
    if (fs.existsSync(preflightPath)) {
      preflightCache = fs.readFileSync(preflightPath, 'utf8');
      return preflightCache;
    }
  } catch (err) {}

  // Fallback embedded preflight for browser / isolated environments
  preflightCache = `*, ::before, ::after { box-sizing: border-box; border-width: 0; border-style: solid; border-color: var(--oray-border, #e4e4e7); }
html { line-height: 1.5; -webkit-text-size-adjust: 100%; font-family: var(--oray-font-sans, system-ui, sans-serif); }
body { margin: 0; line-height: inherit; background-color: var(--oray-background, #ffffff); color: var(--oray-foreground, #09090b); }
h1, h2, h3, h4, h5, h6 { font-size: inherit; font-weight: inherit; margin: 0; }
a { color: inherit; text-decoration: inherit; }
button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; color: inherit; margin: 0; padding: 0; }
button { background-color: transparent; background-image: none; cursor: pointer; }
img, svg, video { display: block; max-width: 100%; height: auto; }
[hidden] { display: none !important; }`;
  return preflightCache;
}

/**
 * Main compiler entry point
 */
export function compile(sources = [], options = {}) {
  const startTime = performance.now();

  const {
    theme = defaultTheme,
    preflight = true,
    darkMode = 'media',
    safelist = [],
    minify = false,
    inputCss = ''
  } = options;

  // 1. Candidate discovery
  const allCandidates = new Set(safelist || []);

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
  const parsedRules = [];
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
  const resetCss = preflight ? getPreflightCss() : '';

  // 7. Compose final stylesheet
  let finalCss = '';

  if (inputCss && inputCss.trim()) {
    // If user provided inputCss with directives @oray preflight, @oray theme, @oray utilities
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
      // Append utilities if not explicitly placed
      custom = `${custom}\n\n/* OrayCSS Utilities */\n${utilityCss}`;
    }
    finalCss = custom;
  } else {
    const parts = [];
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

  return {
    css: finalCss,
    stats: {
      candidatesCount: allCandidates.size,
      rulesCount: sortedRules.length,
      bytes: Buffer.byteLength(finalCss, 'utf8'),
      durationMs: parseFloat(durationMs.toFixed(2)),
      diagnostics
    }
  };
}
