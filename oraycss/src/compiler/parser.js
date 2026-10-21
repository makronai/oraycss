import { splitVariants } from './variants.js';
import { resolveUtility } from '../utilities/index.js';

/**
 * Parse an extracted candidate into structured rule metadata
 */
export function parseCandidate(candidate) {
  if (!candidate || typeof candidate !== 'string') return null;

  const { variants, baseClass } = splitVariants(candidate);
  const resolved = resolveUtility(baseClass);

  if (!resolved) {
    return null;
  }

  return {
    candidate,
    variants,
    baseClass,
    css: resolved.css,
    keyframe: resolved.keyframe || null,
    category: resolved.category || 'other'
  };
}
