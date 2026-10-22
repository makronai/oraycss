import test from 'node:test';
import assert from 'node:assert/strict';
import { optimizeCSS } from '../src/index.js';

test('optimizeCSS removes comments and whitespace', () => {
  const input = `
    /* Header Comment */
    .btn {
      display: inline-flex;
      padding: 0.5rem 1rem; /* Inline comment */
      border-radius: 0.5rem;
    }
  `;
  const minified = optimizeCSS(input);
  assert.equal(minified, '.btn{display:inline-flex;padding:0.5rem 1rem;border-radius:0.5rem}');
});

test('optimizeCSS preserves calc expressions and string literals', () => {
  const input = `
    .calc-test {
      width: calc(100% - 2rem);
      content: "Hello /* not a comment */ World";
    }
  `;
  const minified = optimizeCSS(input);
  assert.ok(minified.includes('calc(100% - 2rem)'));
  assert.ok(minified.includes('"Hello /* not a comment */ World"'));
});
