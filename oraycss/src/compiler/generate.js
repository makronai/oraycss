import { escapeClassName } from './candidates.js';
import { processVariants } from './variants.js';

/**
 * Generate CSS stylesheet from sorted parsed rules
 */
export function generateCSS(sortedRules, options = {}) {
  const { darkMode = 'media' } = options;

  const baseRules = [];
  const mediaQueryGroups = new Map(); // mediaQuery -> array of rules
  const keyframes = new Set();
  const seenSelectors = new Set();

  for (const rule of sortedRules) {
    if (seenSelectors.has(rule.candidate)) continue;
    seenSelectors.add(rule.candidate);

    if (rule.keyframe) {
      keyframes.add(rule.keyframe);
    }

    const escaped = escapeClassName(rule.candidate);
    const { finalSelector, mediaQueries } = processVariants(rule.variants, escaped, darkMode);

    let ruleBlock;
    if (rule.css.includes('&')) {
      // Direct replacement for pseudo or sibling selectors (like space-x or divide-y)
      ruleBlock = rule.css.replace(/&/g, finalSelector);
    } else {
      ruleBlock = `${finalSelector} {\n  ${rule.css.replace(/\n/g, '\n  ')}\n}`;
    }

    if (mediaQueries.length > 0) {
      const combinedMedia = mediaQueries.join(' and ');
      if (!mediaQueryGroups.has(combinedMedia)) {
        mediaQueryGroups.set(combinedMedia, []);
      }
      mediaQueryGroups.get(combinedMedia).push(ruleBlock);
    } else {
      baseRules.push(ruleBlock);
    }
  }

  const sections = [];

  // Keyframes
  if (keyframes.size > 0) {
    sections.push(Array.from(keyframes).join('\n\n'));
  }

  // Base utility rules
  if (baseRules.length > 0) {
    sections.push(baseRules.join('\n\n'));
  }

  // Media query sections
  for (const [mq, rules] of mediaQueryGroups.entries()) {
    const indented = rules.map(r => '  ' + r.replace(/\n/g, '\n  ')).join('\n\n');
    sections.push(`${mq} {\n${indented}\n}`);
  }

  return sections.join('\n\n');
}
