import test from 'node:test';
import assert from 'node:assert/strict';
import { compile } from '../oraycss/src/index.js';

test('responsive variants generate media queries', () => {
  const result = compile('<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"></div>', { preflight: false });
  assert.ok(result.css.includes('@media (min-width: 768px) {'));
  assert.ok(result.css.includes('.md\\:grid-cols-2 {'));
  assert.ok(result.css.includes('@media (min-width: 1280px) {'));
  assert.ok(result.css.includes('.xl\\:grid-cols-4 {'));
});

test('pseudo-class variants generate state selectors', () => {
  const result = compile('<button class="hover:bg-primary focus-visible:outline-ring active:scale-95"></button>', { preflight: false });
  assert.ok(result.css.includes('.hover\\:bg-primary:hover {'));
  assert.ok(result.css.includes('.focus-visible\\:outline-ring:focus-visible {'));
  assert.ok(result.css.includes('.active\\:scale-95:active {'));
});

test('dark mode variants generate dark selectors', () => {
  const result = compile('<div class="bg-background text-foreground dark:bg-surface dark:text-primary"></div>', { preflight: false });
  assert.ok(result.css.includes('.dark .dark\\:bg-surface {'));
  assert.ok(result.css.includes('.dark .dark\\:text-primary {'));
});

test('group variants generate parent selector states', () => {
  const result = compile('<div class="group"><span class="group-hover:translate-x-1"></span></div>', { preflight: false });
  assert.ok(result.css.includes('.group:hover .group-hover\\:translate-x-1 {'));
});

test('accessibility variants generate preference media queries', () => {
  const result = compile('<div class="motion-reduce:animate-none"></div>', { preflight: false });
  assert.ok(result.css.includes('@media (prefers-reduced-motion: reduce) {'));
  assert.ok(result.css.includes('.motion-reduce\\:animate-none {'));
});

test('stacked variants generate composed selectors and media queries', () => {
  const result = compile('<div class="md:hover:shadow-lg"></div>', { preflight: false });
  assert.ok(result.css.includes('@media (min-width: 768px) {'));
  assert.ok(result.css.includes('.md\\:hover\\:shadow-lg:hover {'));
});
