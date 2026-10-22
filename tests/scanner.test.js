import test from 'node:test';
import assert from 'node:assert/strict';
import { expandBraces, matchesPattern } from '../src/content/patterns.js';

test('expandBraces expands brace patterns', () => {
  const expanded = expandBraces('./src/**/*.{html,js,ts}');
  assert.equal(expanded.length, 3);
  assert.ok(expanded.includes('./src/**/*.html'));
  assert.ok(expanded.includes('./src/**/*.js'));
  assert.ok(expanded.includes('./src/**/*.ts'));
});

test('matchesPattern matches file paths accurately', () => {
  assert.ok(matchesPattern('src/components/Button.tsx', './src/**/*.{jsx,tsx}'));
  assert.ok(matchesPattern('index.html', ['./index.html', './src/**/*.js']));
  assert.equal(matchesPattern('node_modules/pkg/index.js', './src/**/*.js'), false);
});
