export function matchGrid(token, arbitrary) {
  // Arbitrary grid templates
  if (arbitrary) {
    if (arbitrary.prefix === 'grid-cols') {
      return `grid-template-columns: ${arbitrary.value};`;
    }
    if (arbitrary.prefix === 'grid-rows') {
      return `grid-template-rows: ${arbitrary.value};`;
    }
    if (arbitrary.prefix === 'col-span') {
      return `grid-column: span ${arbitrary.value} / span ${arbitrary.value};`;
    }
    if (arbitrary.prefix === 'row-span') {
      return `grid-row: span ${arbitrary.value} / span ${arbitrary.value};`;
    }
  }

  // grid-cols-N
  const colsMatch = token.match(/^grid-cols-([0-9]+|none)$/);
  if (colsMatch) {
    const val = colsMatch[1];
    if (val === 'none') return 'grid-template-columns: none;';
    return `grid-template-columns: repeat(${val}, minmax(0, 1fr));`;
  }

  // grid-rows-N
  const rowsMatch = token.match(/^grid-rows-([0-9]+|none)$/);
  if (rowsMatch) {
    const val = rowsMatch[1];
    if (val === 'none') return 'grid-template-rows: none;';
    return `grid-template-rows: repeat(${val}, minmax(0, 1fr));`;
  }

  // col-span-N
  const colSpanMatch = token.match(/^col-span-([0-9]+|full|auto)$/);
  if (colSpanMatch) {
    const val = colSpanMatch[1];
    if (val === 'full') return 'grid-column: 1 / -1;';
    if (val === 'auto') return 'grid-column: auto;';
    return `grid-column: span ${val} / span ${val};`;
  }

  // row-span-N
  const rowSpanMatch = token.match(/^row-span-([0-9]+|full|auto)$/);
  if (rowSpanMatch) {
    const val = rowSpanMatch[1];
    if (val === 'full') return 'grid-row: 1 / -1;';
    if (val === 'auto') return 'grid-row: auto;';
    return `grid-row: span ${val} / span ${val};`;
  }

  // col-start-N, col-end-N
  const startMatch = token.match(/^col-(start|end)-([0-9]+|auto)$/);
  if (startMatch) {
    return `grid-column-${startMatch[1]}: ${startMatch[2]};`;
  }

  // grid-flow
  const flowMap = {
    'grid-flow-row': 'grid-auto-flow: row;',
    'grid-flow-col': 'grid-auto-flow: column;',
    'grid-flow-dense': 'grid-auto-flow: dense;',
    'grid-flow-row-dense': 'grid-auto-flow: row dense;',
    'grid-flow-col-dense': 'grid-auto-flow: column dense;'
  };
  if (flowMap[token]) return flowMap[token];

  return null;
}
