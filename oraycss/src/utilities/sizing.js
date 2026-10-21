import { spacing } from '../theme/tokens.js';

const maxWidthMap = {
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
  full: '100%',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
  prose: '65ch',
  'screen-sm': '640px',
  'screen-md': '768px',
  'screen-lg': '1024px',
  'screen-xl': '1280px',
  'screen-2xl': '1536px',
  none: 'none'
};

export function matchSizing(token, arbitrary) {
  // Arbitrary sizing
  if (arbitrary) {
    const p = arbitrary.prefix;
    const v = arbitrary.value;
    if (p === 'w') return `width: ${v};`;
    if (p === 'min-w') return `min-width: ${v};`;
    if (p === 'max-w') return `max-width: ${v};`;
    if (p === 'h') return `height: ${v};`;
    if (p === 'min-h') return `min-height: ${v};`;
    if (p === 'max-h') return `max-height: ${v};`;
    if (p === 'size') return `width: ${v}; height: ${v};`;
    if (p === 'aspect') return `aspect-ratio: ${v};`;
  }

  // Aspect ratio presets
  const aspectMap = {
    'aspect-auto': 'aspect-ratio: auto;',
    'aspect-square': 'aspect-ratio: 1 / 1;',
    'aspect-video': 'aspect-ratio: 16 / 9;'
  };
  if (aspectMap[token]) return aspectMap[token];

  // size-* utility (sets width and height together)
  const sizeMatch = token.match(/^size-([0-9.]+|px|full|auto)$/);
  if (sizeMatch) {
    const val = spacing[sizeMatch[1]] || sizeMatch[1];
    return `width: ${val}; height: ${val};`;
  }

  // max-w-* with semantic names
  if (token.startsWith('max-w-')) {
    const key = token.replace('max-w-', '');
    if (maxWidthMap[key]) {
      return `max-width: ${maxWidthMap[key]};`;
    }
  }

  // Screen presets
  const screenMap = {
    'w-screen': 'width: 100vw;',
    'min-w-screen': 'min-width: 100vw;',
    'h-screen': 'height: 100vh;',
    'min-h-screen': 'min-height: 100vh;',
    'max-h-screen': 'max-height: 100vh;'
  };
  if (screenMap[token]) return screenMap[token];

  // Standard token width / height
  const dimMatch = token.match(/^(w|min-w|max-w|h|min-h|max-h)-([0-9./]+|px|auto|full|min|max|fit)$/);
  if (dimMatch) {
    const [, prop, valKey] = dimMatch;
    const val = spacing[valKey] || valKey;
    switch (prop) {
      case 'w': return `width: ${val};`;
      case 'min-w': return `min-width: ${val};`;
      case 'max-w': return `max-width: ${val};`;
      case 'h': return `height: ${val};`;
      case 'min-h': return `min-height: ${val};`;
      case 'max-h': return `max-height: ${val};`;
    }
  }

  return null;
}
