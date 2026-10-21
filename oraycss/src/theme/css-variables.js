import { semanticColors } from './tokens.js';

/**
 * Generate CSS custom properties block for light & dark themes
 */
export function generateCssVariables(theme = {}, darkModeStrategy = 'media') {
  const light = { ...semanticColors.light, ...(theme.colors?.light || {}) };
  const dark = { ...semanticColors.dark, ...(theme.colors?.dark || {}) };

  const lightDeclarations = Object.entries(light)
    .map(([key, val]) => `  --oray-${key}: ${val};`)
    .join('\n');

  const darkDeclarations = Object.entries(dark)
    .map(([key, val]) => `  --oray-${key}: ${val};`)
    .join('\n');

  // Base font variables
  const fontVars = [
    `  --oray-font-sans: ${theme.fontFamily?.sans || 'system-ui, sans-serif'};`,
    `  --oray-font-serif: ${theme.fontFamily?.serif || 'Georgia, serif'};`,
    `  --oray-font-mono: ${theme.fontFamily?.mono || 'ui-monospace, monospace'};`
  ].join('\n');

  let output = `/* OrayCSS Design Tokens */\n:root {\n${fontVars}\n${lightDeclarations}\n}\n`;

  if (darkModeStrategy === 'class') {
    output += `\n.dark {\n${darkDeclarations}\n}\n`;
  } else {
    output += `\n@media (prefers-color-scheme: dark) {\n  :root {\n${darkDeclarations.replace(/^/gm, '  ')}\n  }\n}\n`;
    output += `\n.dark {\n${darkDeclarations}\n}\n`;
  }

  return output;
}
