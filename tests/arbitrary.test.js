import test from 'node:test';
import assert from 'node:assert/strict';
import { compile } from '../src/index.js';

test('arbitrary width w-[37rem]', () => {
  const result = compile('<div class="w-[37rem]"></div>', { preflight: false });
  assert.ok(result.css.includes('.w-\\[37rem\\] {'));
  assert.ok(result.css.includes('width: 37rem;'));
});

test('arbitrary grid-cols-[auto_1fr_auto]', () => {
  const result = compile('<div class="grid-cols-[auto_1fr_auto]"></div>', { preflight: false });
  assert.ok(result.css.includes('.grid-cols-\\[auto_1fr_auto\\] {'));
  assert.ok(result.css.includes('grid-template-columns: auto 1fr auto;'));
});

test('arbitrary top-[calc(100%+1rem)]', () => {
  const result = compile('<div class="top-[calc(100%+1rem)]"></div>', { preflight: false });
  assert.ok(result.css.includes('.top-\\[calc\\(100\\%\\+1rem\\)\\] {'));
  assert.ok(result.css.includes('top: calc(100%+1rem);'));
});

test('arbitrary bg-[#101014]', () => {
  const result = compile('<div class="bg-[#101014]"></div>', { preflight: false });
  assert.ok(result.css.includes('.bg-\\[\\#101014\\] {'));
  assert.ok(result.css.includes('background-color: #101014;'));
});

test('arbitrary text-[clamp(2rem,5vw,5rem)]', () => {
  const result = compile('<div class="text-[clamp(2rem,5vw,5rem)]"></div>', { preflight: false });
  assert.ok(result.css.includes('.text-\\[clamp\\(2rem\\,5vw\\,5rem\\)\\] {'));
  assert.ok(result.css.includes('font-size: clamp(2rem,5vw,5rem);'));
});
