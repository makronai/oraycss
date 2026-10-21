import { radii } from '../theme/tokens.js';
import { resolveColorValue } from './backgrounds.js';

export function matchBorders(token, arbitrary) {
  // Arbitrary borders or radii
  if (arbitrary) {
    if (arbitrary.prefix === 'border') {
      if (arbitrary.value.startsWith('#') || arbitrary.value.startsWith('rgb') || arbitrary.value.startsWith('hsl')) {
        return `border-color: ${arbitrary.value};`;
      }
      return `border-width: ${arbitrary.value};`;
    }
    if (arbitrary.prefix === 'rounded') {
      return `border-radius: ${arbitrary.value};`;
    }
    if (arbitrary.prefix === 'outline') {
      return `outline-width: ${arbitrary.value};`;
    }
    if (arbitrary.prefix === 'ring') {
      return `box-shadow: 0 0 0 ${arbitrary.value} var(--oray-ring, #b8f36b);`;
    }
  }

  // Base border (1px)
  if (token === 'border') return 'border-width: 1px;';
  if (token === 'border-x') return 'border-left-width: 1px;\nborder-right-width: 1px;';
  if (token === 'border-y') return 'border-top-width: 1px;\nborder-bottom-width: 1px;';
  if (token === 'border-t') return 'border-top-width: 1px;';
  if (token === 'border-r') return 'border-right-width: 1px;';
  if (token === 'border-b') return 'border-bottom-width: 1px;';
  if (token === 'border-l') return 'border-left-width: 1px;';

  // Border style
  const styleMap = {
    'border-solid': 'border-style: solid;',
    'border-dashed': 'border-style: dashed;',
    'border-dotted': 'border-style: dotted;',
    'border-double': 'border-style: double;',
    'border-none': 'border-style: none;'
  };
  if (styleMap[token]) return styleMap[token];

  // Border width: border-0, border-2, border-4, border-8, border-t-2, etc.
  const bWidthMatch = token.match(/^border-(t|r|b|l|x|y)?-?([0-9]+)$/);
  if (bWidthMatch) {
    const [, side, val] = bWidthMatch;
    const pxVal = `${val}px`;
    if (!side) return `border-width: ${pxVal};`;
    if (side === 'x') return `border-left-width: ${pxVal};\nborder-right-width: ${pxVal};`;
    if (side === 'y') return `border-top-width: ${pxVal};\nborder-bottom-width: ${pxVal};`;
    const sideMap = { t: 'top', r: 'right', b: 'bottom', l: 'left' };
    return `border-${sideMap[side]}-width: ${pxVal};`;
  }

  // Border radius: rounded, rounded-lg, rounded-full, rounded-t-xl, etc.
  if (token === 'rounded') return `border-radius: ${radii.DEFAULT};`;
  const radiusMatch = token.match(/^rounded-(t|r|b|l|tl|tr|bl|br)?-?([a-z0-9]+)$/);
  if (radiusMatch) {
    const [, side, size] = radiusMatch;
    const rad = radii[size];
    if (rad) {
      if (!side) return `border-radius: ${rad};`;
      if (side === 't') return `border-top-left-radius: ${rad};\nborder-top-right-radius: ${rad};`;
      if (side === 'b') return `border-bottom-left-radius: ${rad};\nborder-bottom-right-radius: ${rad};`;
      if (side === 'l') return `border-top-left-radius: ${rad};\nborder-bottom-left-radius: ${rad};`;
      if (side === 'r') return `border-top-right-radius: ${rad};\nborder-bottom-right-radius: ${rad};`;
      if (side === 'tl') return `border-top-left-radius: ${rad};`;
      if (side === 'tr') return `border-top-right-radius: ${rad};`;
      if (side === 'bl') return `border-bottom-left-radius: ${rad};`;
      if (side === 'br') return `border-bottom-right-radius: ${rad};`;
    }
  }

  // Border color: border-*
  if (token.startsWith('border-')) {
    const colKey = token.replace('border-', '');
    const val = resolveColorValue(colKey);
    if (val) {
      return `border-color: ${val};`;
    }
  }

  // Outlines
  if (token === 'outline-none') return 'outline: 2px solid transparent;\noutline-offset: 2px;';
  if (token === 'outline') return 'outline-style: solid;';
  const outlineWidth = token.match(/^outline-([0-9]+)$/);
  if (outlineWidth) return `outline-width: ${outlineWidth[1]}px;`;
  const outlineOffset = token.match(/^outline-offset-([0-9]+)$/);
  if (outlineOffset) return `outline-offset: ${outlineOffset[1]}px;`;

  if (token.startsWith('outline-')) {
    const colKey = token.replace('outline-', '');
    const colVal = resolveColorValue(colKey);
    if (colVal) {
      return `outline-color: ${colVal};`;
    }
  }

  // Ring utilities
  if (token === 'ring') return 'box-shadow: 0 0 0 3px var(--oray-ring, #b8f36b);';
  if (token === 'ring-0') return 'box-shadow: 0 0 0 0 transparent;';
  const ringMatch = token.match(/^ring-([0-9]+)$/);
  if (ringMatch) {
    return `box-shadow: 0 0 0 ${ringMatch[1]}px var(--oray-ring, #b8f36b);`;
  }
  if (token.startsWith('ring-')) {
    const ringCol = token.replace('ring-', '');
    const colVal = resolveColorValue(ringCol);
    if (colVal) {
      return `--oray-ring: ${colVal};\nbox-shadow: 0 0 0 3px var(--oray-ring);`;
    }
  }

  // Divide utilities
  if (token === 'divide-y') {
    return '& > :not([hidden]) ~ :not([hidden]) {\n  border-top-width: 1px;\n  border-color: var(--oray-border, #27272a);\n}';
  }
  if (token === 'divide-x') {
    return '& > :not([hidden]) ~ :not([hidden]) {\n  border-left-width: 1px;\n  border-color: var(--oray-border, #27272a);\n}';
  }

  return null;
}
