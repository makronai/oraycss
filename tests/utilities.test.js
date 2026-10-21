import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveUtility } from '../oraycss/src/index.js';

test('layout utilities resolve correctly', () => {
  assert.equal(resolveUtility('block')?.css, 'display: block;');
  assert.equal(resolveUtility('flex')?.css, 'display: flex;');
  assert.equal(resolveUtility('grid')?.css, 'display: grid;');
  assert.equal(resolveUtility('hidden')?.css, 'display: none;');
  assert.equal(resolveUtility('relative')?.css, 'position: relative;');
  assert.equal(resolveUtility('absolute')?.css, 'position: absolute;');
  assert.equal(resolveUtility('z-50')?.css, 'z-index: 50;');
  assert.equal(resolveUtility('overflow-hidden')?.css, 'overflow: hidden;');
  assert.equal(resolveUtility('isolate')?.css, 'isolation: isolate;');
});

test('flexbox utilities resolve correctly', () => {
  assert.equal(resolveUtility('flex-col')?.css, 'flex-direction: column;');
  assert.equal(resolveUtility('items-center')?.css, 'align-items: center;');
  assert.equal(resolveUtility('justify-between')?.css, 'justify-content: space-between;');
  assert.equal(resolveUtility('flex-wrap')?.css, 'flex-wrap: wrap;');
  assert.equal(resolveUtility('grow')?.css, 'flex-grow: 1;');
  assert.equal(resolveUtility('shrink-0')?.css, 'flex-shrink: 0;');
});

test('grid utilities resolve correctly', () => {
  assert.equal(resolveUtility('grid-cols-3')?.css, 'grid-template-columns: repeat(3, minmax(0, 1fr));');
  assert.equal(resolveUtility('col-span-2')?.css, 'grid-column: span 2 / span 2;');
  assert.equal(resolveUtility('col-span-full')?.css, 'grid-column: 1 / -1;');
  assert.equal(resolveUtility('grid-flow-col')?.css, 'grid-auto-flow: column;');
});

test('spacing utilities resolve correctly', () => {
  assert.equal(resolveUtility('p-6')?.css, 'padding: 1.5rem;');
  assert.equal(resolveUtility('px-4')?.css, 'padding-left: 1rem; padding-right: 1rem;');
  assert.equal(resolveUtility('my-8')?.css, 'margin-top: 2rem; margin-bottom: 2rem;');
  assert.equal(resolveUtility('-mt-2')?.css, 'margin-top: calc(-1 * 0.5rem);');
  assert.equal(resolveUtility('gap-4')?.css, 'gap: 1rem;');
});

test('sizing utilities resolve correctly', () => {
  assert.equal(resolveUtility('w-full')?.css, 'width: 100%;');
  assert.equal(resolveUtility('max-w-3xl')?.css, 'max-width: 48rem;');
  assert.equal(resolveUtility('min-h-screen')?.css, 'min-height: 100vh;');
  assert.equal(resolveUtility('size-12')?.css, 'width: 3rem; height: 3rem;');
  assert.equal(resolveUtility('aspect-video')?.css, 'aspect-ratio: 16 / 9;');
});

test('typography utilities resolve correctly', () => {
  assert.ok(resolveUtility('text-4xl')?.css.includes('font-size: 2.25rem;'));
  assert.equal(resolveUtility('font-semibold')?.css, 'font-weight: 600;');
  assert.equal(resolveUtility('tracking-tight')?.css, 'letter-spacing: -0.025em;');
  assert.equal(resolveUtility('leading-relaxed')?.css, 'line-height: 1.625;');
  assert.equal(resolveUtility('text-center')?.css, 'text-align: center;');
  assert.equal(resolveUtility('text-primary')?.css, 'color: var(--oray-primary);');
  assert.equal(resolveUtility('text-muted-foreground')?.css, 'color: var(--oray-muted-foreground);');
});

test('background and gradient utilities resolve correctly', () => {
  assert.equal(resolveUtility('bg-background')?.css, 'background-color: var(--oray-background);');
  assert.equal(resolveUtility('bg-surface')?.css, 'background-color: var(--oray-surface);');
  assert.ok(resolveUtility('bg-gradient-to-br')?.css.includes('linear-gradient(to bottom right,'));
});

test('border and effect utilities resolve correctly', () => {
  assert.equal(resolveUtility('border')?.css, 'border-width: 1px;');
  assert.equal(resolveUtility('border-border')?.css, 'border-color: var(--oray-border);');
  assert.equal(resolveUtility('rounded-2xl')?.css, 'border-radius: 1rem;');
  assert.equal(resolveUtility('rounded-full')?.css, 'border-radius: 9999px;');
  assert.ok(resolveUtility('shadow-soft')?.css.includes('box-shadow:'));
  assert.ok(resolveUtility('shadow-glow')?.css.includes('box-shadow:'));
});

test('transform, transition and animation utilities resolve correctly', () => {
  assert.equal(resolveUtility('translate-y-4')?.css, 'transform: translateY(1rem);');
  assert.equal(resolveUtility('-translate-y-0.5')?.css, 'transform: translateY(-0.125rem);');
  assert.ok(resolveUtility('transition')?.css.includes('transition-property:'));
  assert.equal(resolveUtility('duration-200')?.css, 'transition-duration: 200ms;');
  const anim = resolveUtility('animate-spin');
  assert.ok(anim?.css.includes('animation: oray-spin 1s linear infinite;'));
  assert.ok(anim?.keyframe.includes('@keyframes oray-spin'));
});
