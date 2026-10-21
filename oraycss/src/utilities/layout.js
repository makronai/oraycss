import { spacing } from '../theme/tokens.js';

export function matchLayout(token, arbitrary) {
  // Display
  const displayMap = {
    block: 'display: block;',
    'inline-block': 'display: inline-block;',
    inline: 'display: inline;',
    flex: 'display: flex;',
    'inline-flex': 'display: inline-flex;',
    grid: 'display: grid;',
    'inline-grid': 'display: inline-grid;',
    hidden: 'display: none;',
    contents: 'display: contents;',
    'flow-root': 'display: flow-root;'
  };
  if (displayMap[token]) return displayMap[token];

  // Position
  const posMap = {
    static: 'position: static;',
    fixed: 'position: fixed;',
    absolute: 'position: absolute;',
    relative: 'position: relative;',
    sticky: 'position: sticky;'
  };
  if (posMap[token]) return posMap[token];

  // Insets
  if (arbitrary && ['top', 'right', 'bottom', 'left', 'inset', 'inset-x', 'inset-y'].includes(arbitrary.prefix)) {
    if (arbitrary.prefix === 'inset') return `inset: ${arbitrary.value};`;
    if (arbitrary.prefix === 'inset-x') return `left: ${arbitrary.value}; right: ${arbitrary.value};`;
    if (arbitrary.prefix === 'inset-y') return `top: ${arbitrary.value}; bottom: ${arbitrary.value};`;
    return `${arbitrary.prefix}: ${arbitrary.value};`;
  }

  // Token insets
  const insetMatch = token.match(/^(-)?(inset|inset-x|inset-y|top|right|bottom|left)-([0-9.]+|px|auto|full)$/);
  if (insetMatch) {
    const [, neg, prop, valKey] = insetMatch;
    const baseVal = spacing[valKey] || valKey;
    const val = neg ? `calc(-1 * ${baseVal})` : baseVal;
    if (prop === 'inset') return `inset: ${val};`;
    if (prop === 'inset-x') return `left: ${val}; right: ${val};`;
    if (prop === 'inset-y') return `top: ${val}; bottom: ${val};`;
    return `${prop}: ${val};`;
  }

  // Z-index
  if (arbitrary && arbitrary.prefix === 'z') {
    return `z-index: ${arbitrary.value};`;
  }
  const zMatch = token.match(/^z-([0-9]+|auto)$/);
  if (zMatch) {
    return `z-index: ${zMatch[1]};`;
  }

  // Overflow
  const overflowMap = {
    'overflow-auto': 'overflow: auto;',
    'overflow-hidden': 'overflow: hidden;',
    'overflow-clip': 'overflow: clip;',
    'overflow-visible': 'overflow: visible;',
    'overflow-scroll': 'overflow: scroll;',
    'overflow-x-auto': 'overflow-x: auto;',
    'overflow-x-hidden': 'overflow-x: hidden;',
    'overflow-x-clip': 'overflow-x: clip;',
    'overflow-x-visible': 'overflow-x: visible;',
    'overflow-x-scroll': 'overflow-x: scroll;',
    'overflow-y-auto': 'overflow-y: auto;',
    'overflow-y-hidden': 'overflow-y: hidden;',
    'overflow-y-clip': 'overflow-y: clip;',
    'overflow-y-visible': 'overflow-y: visible;',
    'overflow-y-scroll': 'overflow-y: scroll;'
  };
  if (overflowMap[token]) return overflowMap[token];

  // Visibility & Box-sizing
  if (token === 'visible') return 'visibility: visible;';
  if (token === 'invisible') return 'visibility: hidden;';
  if (token === 'box-border') return 'box-sizing: border-box;';
  if (token === 'box-content') return 'box-sizing: content-box;';
  if (token === 'isolate') return 'isolation: isolate;';
  if (token === 'isolation-auto') return 'isolation: auto;';

  // Object fit
  if (token.startsWith('object-')) {
    const fitVal = token.replace('object-', '');
    if (['contain', 'cover', 'fill', 'none', 'scale-down'].includes(fitVal)) {
      return `object-fit: ${fitVal};`;
    }
  }

  return null;
}
