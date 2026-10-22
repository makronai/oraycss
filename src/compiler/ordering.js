const categoryOrder = {
  layout: 10,
  flexbox: 20,
  grid: 30,
  spacing: 40,
  components: 45,
  sizing: 50,
  typography: 60,
  backgrounds: 70,
  borders: 80,
  effects: 90,
  transforms: 100,
  transitions: 110,
  animation: 120,
  accessibility: 130,
  other: 999
};

const breakpointWeights = {
  sm: 1000,
  md: 2000,
  lg: 3000,
  xl: 4000,
  '2xl': 5000
};

/**
 * Calculate deterministic sort weight for a parsed rule
 */
export function getRuleWeight(rule) {
  let weight = categoryOrder[rule.category] || 999;

  // Check for breakpoint variant
  for (const v of rule.variants) {
    if (breakpointWeights[v]) {
      weight += breakpointWeights[v];
    } else if (v === 'hover' || v === 'focus' || v === 'active') {
      weight += 100;
    }
  }

  return weight;
}

/**
 * Sort array of parsed rules deterministically
 */
export function sortRules(rules) {
  return [...rules].sort((a, b) => {
    const wa = getRuleWeight(a);
    const wb = getRuleWeight(b);
    if (wa !== wb) return wa - wb;
    return a.candidate.localeCompare(b.candidate);
  });
}
