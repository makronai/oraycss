/**
 * Diagnostic analysis and reporting for OrayCSS compiler
 */
export function analyzeCandidates(candidates, parsedRules, safelist = []) {
  const recognizedSet = new Set(parsedRules.map(r => r.candidate));
  const unrecognized = [];

  for (const c of candidates) {
    if (!recognizedSet.has(c)) {
      unrecognized.push(c);
    }
  }

  const categoryCounts = {};
  for (const r of parsedRules) {
    categoryCounts[r.category] = (categoryCounts[r.category] || 0) + 1;
  }

  return {
    totalCandidates: candidates.size,
    recognizedCount: recognizedSet.size,
    unrecognizedCount: unrecognized.length,
    unrecognizedCandidates: unrecognized,
    categoryCounts,
    safelistUsed: safelist.filter(s => recognizedSet.has(s))
  };
}
