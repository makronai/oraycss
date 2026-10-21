import { semanticColors, palette } from '../theme/tokens.js';

export function resolveColorValue(colorKey) {
  // Check opacity suffix, e.g. primary/80
  let opacity = null;
  let key = colorKey;
  if (colorKey.includes('/')) {
    const [c, op] = colorKey.split('/');
    key = c;
    opacity = parseFloat(op) / 100;
  }

  // Semantic color
  if (semanticColors.dark[key] !== undefined) {
    if (opacity !== null) {
      return `color-mix(in srgb, var(--oray-${key}) ${opacity * 100}%, transparent)`;
    }
    return `var(--oray-${key})`;
  }

  // Palette color like zinc-900 or red-500
  const parts = key.split('-');
  if (parts.length === 2 && palette[parts[0]] && palette[parts[0]][parts[1]]) {
    const hex = palette[parts[0]][parts[1]];
    if (opacity !== null) {
      return `color-mix(in srgb, ${hex} ${opacity * 100}%, transparent)`;
    }
    return hex;
  }

  if (palette[key]) {
    const hex = palette[key];
    if (opacity !== null) {
      return `color-mix(in srgb, ${hex} ${opacity * 100}%, transparent)`;
    }
    return hex;
  }

  return null;
}

export function matchBackgrounds(token, arbitrary) {
  // Arbitrary background
  if (arbitrary && arbitrary.prefix === 'bg') {
    return `background-color: ${arbitrary.value};`;
  }

  // Gradients
  const gradientDirections = {
    'bg-gradient-to-t': 'to top',
    'bg-gradient-to-tr': 'to top right',
    'bg-gradient-to-r': 'to right',
    'bg-gradient-to-br': 'to bottom right',
    'bg-gradient-to-b': 'to bottom',
    'bg-gradient-to-bl': 'to bottom left',
    'bg-gradient-to-l': 'to left',
    'bg-gradient-to-tl': 'to top left'
  };
  if (gradientDirections[token]) {
    const dir = gradientDirections[token];
    return `--oray-gradient-from-position: 0%;\n--oray-gradient-to-position: 100%;\nbackground-image: linear-gradient(${dir}, var(--oray-gradient-stops, var(--oray-gradient-from, transparent) var(--oray-gradient-from-position), var(--oray-gradient-to, transparent) var(--oray-gradient-to-position)));`;
  }

  // from-*
  if (token.startsWith('from-')) {
    const colKey = token.replace('from-', '');
    const colVal = resolveColorValue(colKey) || (colKey.startsWith('[') ? colKey.slice(1, -1) : null);
    if (colVal) {
      return `--oray-gradient-from: ${colVal};\n--oray-gradient-stops: var(--oray-gradient-from) var(--oray-gradient-from-position, 0%), var(--oray-gradient-to, transparent) var(--oray-gradient-to-position, 100%);`;
    }
  }

  // via-*
  if (token.startsWith('via-')) {
    const colKey = token.replace('via-', '');
    const colVal = resolveColorValue(colKey) || (colKey.startsWith('[') ? colKey.slice(1, -1) : null);
    if (colVal) {
      return `--oray-gradient-via: ${colVal};\n--oray-gradient-stops: var(--oray-gradient-from) var(--oray-gradient-from-position, 0%), var(--oray-gradient-via) 50%, var(--oray-gradient-to, transparent) var(--oray-gradient-to-position, 100%);`;
    }
  }

  // to-*
  if (token.startsWith('to-')) {
    const colKey = token.replace('to-', '');
    const colVal = resolveColorValue(colKey) || (colKey.startsWith('[') ? colKey.slice(1, -1) : null);
    if (colVal) {
      return `--oray-gradient-to: ${colVal};\n--oray-gradient-stops: var(--oray-gradient-from, transparent) var(--oray-gradient-from-position, 0%), var(--oray-gradient-to) var(--oray-gradient-to-position, 100%);`;
    }
  }

  // Background properties
  const bgPropMap = {
    'bg-cover': 'background-size: cover;',
    'bg-contain': 'background-size: contain;',
    'bg-auto': 'background-size: auto;',
    'bg-center': 'background-position: center;',
    'bg-top': 'background-position: top;',
    'bg-bottom': 'background-position: bottom;',
    'bg-left': 'background-position: left;',
    'bg-right': 'background-position: right;',
    'bg-repeat': 'background-repeat: repeat;',
    'bg-no-repeat': 'background-repeat: no-repeat;',
    'bg-clip-text': '-webkit-background-clip: text;\nbackground-clip: text;',
    'bg-clip-border': 'background-clip: border-box;',
    'bg-clip-padding': 'background-clip: padding-box;'
  };
  if (bgPropMap[token]) return bgPropMap[token];

  // Background colors: bg-*
  if (token.startsWith('bg-')) {
    const colorKey = token.replace('bg-', '');
    const val = resolveColorValue(colorKey);
    if (val) {
      return `background-color: ${val};`;
    }
  }

  return null;
}
