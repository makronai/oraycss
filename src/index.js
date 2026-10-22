/**
 * OrayCSS Public Programmatic API
 * Zero-dependency, utility-first CSS framework and compiler
 */

export { compile, getComponentsCss } from './compiler/compile.js';
export { extractCandidates } from './compiler/extractor.js';
export { parseCandidate } from './compiler/parser.js';
export { escapeClassName, parseArbitraryValue } from './compiler/candidates.js';
export { sortRules } from './compiler/ordering.js';
export { generateCSS } from './compiler/generate.js';
export { optimizeCSS } from './compiler/optimize.js';
export { analyzeCandidates } from './compiler/diagnostics.js';

export { resolveUtility } from './utilities/index.js';
export { matchComponents } from './utilities/components.js';
export { resolveConfig } from './theme/config.js';
export { defaultConfig, defaultTheme } from './theme/defaults.js';
export { semanticColors, palette, spacing, typography, radii, shadows, breakpoints } from './theme/tokens.js';
export { generateCssVariables } from './theme/css-variables.js';
export { scanContentFiles, scanDirectory } from './content/scan.js';
export { startWatcher } from './content/watch.js';
