export function matchFlexbox(token, arbitrary) {
  const map = {
    // Direction
    'flex-row': 'flex-direction: row;',
    'flex-row-reverse': 'flex-direction: row-reverse;',
    'flex-col': 'flex-direction: column;',
    'flex-col-reverse': 'flex-direction: column-reverse;',

    // Wrap
    'flex-wrap': 'flex-wrap: wrap;',
    'flex-wrap-reverse': 'flex-wrap: wrap-reverse;',
    'flex-nowrap': 'flex-wrap: nowrap;',

    // Align Items
    'items-start': 'align-items: flex-start;',
    'items-end': 'align-items: flex-end;',
    'items-center': 'align-items: center;',
    'items-baseline': 'align-items: baseline;',
    'items-stretch': 'align-items: stretch;',

    // Justify Content
    'justify-start': 'justify-content: flex-start;',
    'justify-end': 'justify-content: flex-end;',
    'justify-center': 'justify-content: center;',
    'justify-between': 'justify-content: space-between;',
    'justify-around': 'justify-content: space-around;',
    'justify-evenly': 'justify-content: space-evenly;',

    // Align Self
    'self-auto': 'align-self: auto;',
    'self-start': 'align-self: flex-start;',
    'self-end': 'align-self: flex-end;',
    'self-center': 'align-self: center;',
    'self-stretch': 'align-self: stretch;',
    'self-baseline': 'align-self: baseline;',

    // Grow & Shrink
    'grow': 'flex-grow: 1;',
    'grow-0': 'flex-grow: 0;',
    'flex-grow': 'flex-grow: 1;',
    'flex-grow-0': 'flex-grow: 0;',
    'shrink': 'flex-shrink: 1;',
    'shrink-0': 'flex-shrink: 0;',
    'flex-shrink': 'flex-shrink: 1;',
    'flex-shrink-0': 'flex-shrink: 0;',

    // Flex presets
    'flex-1': 'flex: 1 1 0%;',
    'flex-auto': 'flex: 1 1 auto;',
    'flex-initial': 'flex: 0 1 auto;',
    'flex-none': 'flex: none;',

    // Order
    'order-first': 'order: -9999;',
    'order-last': 'order: 9999;',
    'order-none': 'order: 0;'
  };

  if (map[token]) return map[token];

  // Numbered order: order-1, order-2, etc.
  const orderMatch = token.match(/^order-([0-9]+)$/);
  if (orderMatch) {
    return `order: ${orderMatch[1]};`;
  }

  // Arbitrary flex basis or grow
  if (arbitrary && arbitrary.prefix === 'basis') {
    return `flex-basis: ${arbitrary.value};`;
  }

  return null;
}
