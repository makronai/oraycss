import test from 'node:test';
import assert from 'node:assert/strict';
import { compile, extractCandidates, parseCandidate, escapeClassName } from '../src/index.js';

test('extractCandidates extracts classes from HTML markup', () => {
  const html = `
    <div class="flex items-center justify-between p-6 bg-surface text-foreground">
      <span class="text-sm font-semibold tracking-tight md:text-xl">Hello OrayCSS</span>
      <button class="px-4 py-2 rounded-xl bg-primary hover:shadow-soft transition duration-200">
        Action
      </button>
    </div>
  `;
  const candidates = extractCandidates(html);
  assert.ok(candidates.has('flex'));
  assert.ok(candidates.has('items-center'));
  assert.ok(candidates.has('justify-between'));
  assert.ok(candidates.has('p-6'));
  assert.ok(candidates.has('bg-surface'));
  assert.ok(candidates.has('text-foreground'));
  assert.ok(candidates.has('md:text-xl'));
  assert.ok(candidates.has('bg-primary'));
  assert.ok(candidates.has('hover:shadow-soft'));
  assert.ok(candidates.has('transition'));
  assert.ok(candidates.has('duration-200'));
});

test('parseCandidate correctly separates variants and base utility', () => {
  const parsed = parseCandidate('md:hover:shadow-lg');
  assert.notEqual(parsed, null);
  assert.deepEqual(parsed.variants, ['md', 'hover']);
  assert.equal(parsed.baseClass, 'shadow-lg');
  assert.equal(parsed.category, 'effects');
});

test('escapeClassName escapes special characters properly', () => {
  assert.equal(escapeClassName('md:flex'), 'md\\:flex');
  assert.equal(escapeClassName('hover:-translate-y-0.5'), 'hover\\:-translate-y-0\\.5');
  assert.equal(escapeClassName('w-[37rem]'), 'w-\\[37rem\\]');
  assert.equal(escapeClassName('bg-[#101014]'), 'bg-\\[\\#101014\\]');
  assert.equal(escapeClassName('top-[calc(100%+1rem)]'), 'top-\\[calc\\(100\\%\\+1rem\\)\\]');
});

test('compile generates complete stylesheet with preflight and theme variables', () => {
  const source = '<div class="flex p-4 text-center bg-primary">Hello</div>';
  const result = compile(source, { preflight: true });

  assert.ok(result.css.includes('box-sizing: border-box;'), 'contains preflight');
  assert.ok(result.css.includes('--oray-primary:'), 'contains theme custom properties');
  assert.ok(result.css.includes('.flex {'), 'contains flex utility');
  assert.ok(result.css.includes('.p-4 {'), 'contains p-4 utility');
  assert.ok(result.css.includes('.text-center {'), 'contains text-center utility');
  assert.ok(result.css.includes('.bg-primary {'), 'contains bg-primary utility');
  assert.equal(result.stats.rulesCount, 4);
});
