import test from 'node:test';
import assert from 'node:assert/strict';
import { parseArguments } from '../oraycss/src/cli/arguments.js';

test('parseArguments parses command and flags', () => {
  const args = parseArguments(['build', '--input', 'src/app.css', '-o', 'public/bundle.css', '--minify']);
  assert.equal(args.command, 'build');
  assert.equal(args.input, 'src/app.css');
  assert.equal(args.output, 'public/bundle.css');
  assert.equal(args.minify, true);
});

test('parseArguments handles watch flag', () => {
  const args = parseArguments(['watch', '-c', 'custom.config.js']);
  assert.equal(args.command, 'watch');
  assert.equal(args.config, 'custom.config.js');
});

test('parseArguments handles help and version flags', () => {
  assert.equal(parseArguments(['--help']).help, true);
  assert.equal(parseArguments(['-v']).version, true);
});
