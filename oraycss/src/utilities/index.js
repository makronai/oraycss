import { parseArbitraryValue } from '../compiler/candidates.js';
import { matchLayout } from './layout.js';
import { matchFlexbox } from './flexbox.js';
import { matchGrid } from './grid.js';
import { matchSpacing } from './spacing.js';
import { matchSizing } from './sizing.js';
import { matchTypography } from './typography.js';
import { matchBackgrounds } from './backgrounds.js';
import { matchBorders } from './borders.js';
import { matchEffects } from './effects.js';
import { matchTransforms } from './transforms.js';
import { matchTransitions } from './transitions.js';
import { matchAnimation } from './animation.js';
import { matchAccessibility } from './accessibility.js';

export function resolveUtility(baseClass) {
  const arbitrary = parseArbitraryValue(baseClass);

  let res;

  // 1. Layout
  res = matchLayout(baseClass, arbitrary);
  if (res) return { css: res, category: 'layout' };

  // 2. Flexbox
  res = matchFlexbox(baseClass, arbitrary);
  if (res) return { css: res, category: 'flexbox' };

  // 3. Grid
  res = matchGrid(baseClass, arbitrary);
  if (res) return { css: res, category: 'grid' };

  // 4. Spacing
  res = matchSpacing(baseClass, arbitrary);
  if (res) return { css: res, category: 'spacing' };

  // 5. Sizing
  res = matchSizing(baseClass, arbitrary);
  if (res) return { css: res, category: 'sizing' };

  // 6. Typography
  res = matchTypography(baseClass, arbitrary);
  if (res) return { css: res, category: 'typography' };

  // 7. Backgrounds
  res = matchBackgrounds(baseClass, arbitrary);
  if (res) return { css: res, category: 'backgrounds' };

  // 8. Borders
  res = matchBorders(baseClass, arbitrary);
  if (res) return { css: res, category: 'borders' };

  // 9. Effects
  res = matchEffects(baseClass, arbitrary);
  if (res) return { css: res, category: 'effects' };

  // 10. Transforms
  res = matchTransforms(baseClass, arbitrary);
  if (res) return { css: res, category: 'transforms' };

  // 11. Transitions
  res = matchTransitions(baseClass, arbitrary);
  if (res) return { css: res, category: 'transitions' };

  // 12. Animation
  const animRes = matchAnimation(baseClass);
  if (animRes) return { css: animRes.css, keyframe: animRes.keyframe, category: 'animation' };

  // 13. Accessibility
  res = matchAccessibility(baseClass);
  if (res) return { css: res, category: 'accessibility' };

  return null;
}
