import { typography } from '../theme/tokens.js';
import { resolveColorValue } from './backgrounds.js';

export function matchTypography(token, arbitrary) {
  // Arbitrary typography
  if (arbitrary) {
    if (arbitrary.prefix === 'text') {
      if (arbitrary.value.startsWith('#') || arbitrary.value.startsWith('rgb') || arbitrary.value.startsWith('hsl')) {
        return `color: ${arbitrary.value};`;
      }
      return `font-size: ${arbitrary.value};`;
    }
    if (arbitrary.prefix === 'tracking') {
      return `letter-spacing: ${arbitrary.value};`;
    }
    if (arbitrary.prefix === 'leading') {
      return `line-height: ${arbitrary.value};`;
    }
    if (arbitrary.prefix === 'font') {
      return `font-family: ${arbitrary.value};`;
    }
  }

  // Antialiasing
  if (token === 'antialiased') {
    return '-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;';
  }
  if (token === 'subpixel-antialiased') {
    return '-webkit-font-smoothing: auto;\n-moz-osx-font-smoothing: auto;';
  }

  // Font family
  const fontFamMap = {
    'font-sans': `font-family: var(--oray-font-sans, ${typography.fontFamily.sans});`,
    'font-serif': `font-family: var(--oray-font-serif, ${typography.fontFamily.serif});`,
    'font-mono': `font-family: var(--oray-font-mono, ${typography.fontFamily.mono});`,
    'font-display': `font-family: ${typography.fontFamily.display};`
  };
  if (fontFamMap[token]) return fontFamMap[token];

  // Font size (with automatic line-height)
  if (token.startsWith('text-')) {
    const sizeKey = token.replace('text-', '');
    if (typography.fontSize[sizeKey]) {
      const [fs, opts] = typography.fontSize[sizeKey];
      return `font-size: ${fs};\nline-height: ${opts.lineHeight};`;
    }

    // Text color
    const colVal = resolveColorValue(sizeKey);
    if (colVal) {
      return `color: ${colVal};`;
    }
  }

  // Font weight
  if (token.startsWith('font-')) {
    const weightKey = token.replace('font-', '');
    if (typography.fontWeight[weightKey]) {
      return `font-weight: ${typography.fontWeight[weightKey]};`;
    }
  }

  // Letter spacing (tracking)
  if (token.startsWith('tracking-')) {
    const trackKey = token.replace('tracking-', '');
    if (typography.letterSpacing[trackKey]) {
      return `letter-spacing: ${typography.letterSpacing[trackKey]};`;
    }
  }

  // Line height (leading)
  if (token.startsWith('leading-')) {
    const leadKey = token.replace('leading-', '');
    if (typography.lineHeight[leadKey]) {
      return `line-height: ${typography.lineHeight[leadKey]};`;
    }
  }

  // Text alignment
  const alignMap = {
    'text-left': 'text-align: left;',
    'text-center': 'text-align: center;',
    'text-right': 'text-align: right;',
    'text-justify': 'text-align: justify;',
    'text-start': 'text-align: start;',
    'text-end': 'text-align: end;'
  };
  if (alignMap[token]) return alignMap[token];

  // Text decoration & transform
  const decorMap = {
    underline: 'text-decoration-line: underline;',
    'line-through': 'text-decoration-line: line-through;',
    'no-underline': 'text-decoration-line: none;',
    uppercase: 'text-transform: uppercase;',
    lowercase: 'text-transform: lowercase;',
    capitalize: 'text-transform: capitalize;',
    'normal-case': 'text-transform: none;',
    italic: 'font-style: italic;',
    'not-italic': 'font-style: normal;'
  };
  if (decorMap[token]) return decorMap[token];

  // Truncation and wrapping
  if (token === 'truncate') {
    return 'overflow: hidden;\ntext-overflow: ellipsis;\nwhite-space: nowrap;';
  }
  if (token === 'text-ellipsis') return 'text-overflow: ellipsis;';
  if (token === 'text-clip') return 'text-overflow: clip;';
  if (token === 'break-words') return 'overflow-wrap: break-word;';
  if (token === 'break-all') return 'word-break: break-all;';
  if (token === 'break-normal') return 'overflow-wrap: normal;\nword-break: normal;';

  const wsMap = {
    'whitespace-normal': 'white-space: normal;',
    'whitespace-nowrap': 'white-space: nowrap;',
    'whitespace-pre': 'white-space: pre;',
    'whitespace-pre-line': 'white-space: pre-line;',
    'whitespace-pre-wrap': 'white-space: pre-wrap;'
  };
  if (wsMap[token]) return wsMap[token];

  return null;
}
