import test from 'node:test';
import assert from 'node:assert/strict';
import { compile, resolveUtility, matchComponents } from '../src/index.js';

test('switches utilities resolve and compile correctly', () => {
  assert.ok(matchComponents('switch') !== null);
  assert.ok(matchComponents('switch-thumb') !== null);
  assert.ok(matchComponents('switch-sm') !== null);
  assert.ok(matchComponents('switch-lg') !== null);
  assert.ok(matchComponents('switch-checked') !== null);

  const res = compile('<label class="switch"><input type="checkbox" class="switch-input"><span class="switch-thumb"></span></label>', { preflight: false });
  assert.ok(res.css.includes('.switch {'));
  assert.ok(res.css.includes('.switch-thumb {'));
  assert.ok(res.css.includes(':has(.switch-input:checked)'));
});

test('tabs utilities resolve and compile correctly', () => {
  assert.ok(matchComponents('tabs') !== null);
  assert.ok(matchComponents('tabs-pills') !== null);
  assert.ok(matchComponents('tab') !== null);
  assert.ok(matchComponents('tab-active') !== null);
  assert.ok(matchComponents('tab-pill') !== null);
  assert.ok(matchComponents('tab-pill-active') !== null);

  const res = compile('<nav class="tabs"><button class="tab tab-active">Overview</button><button class="tab">Settings</button></nav>', { preflight: false });
  assert.ok(res.css.includes('.tabs {'));
  assert.ok(res.css.includes('.tab {'));
  assert.ok(res.css.includes('.tab-active {'));
});

test('accordions utilities resolve and compile correctly', () => {
  assert.ok(matchComponents('accordion') !== null);
  assert.ok(matchComponents('accordion-item') !== null);
  assert.ok(matchComponents('accordion-trigger') !== null);
  assert.ok(matchComponents('accordion-content') !== null);

  const res = compile('<div class="accordion"><details class="accordion-item"><summary class="accordion-trigger">Question?</summary><div class="accordion-content">Answer.</div></details></div>', { preflight: false });
  assert.ok(res.css.includes('.accordion {'));
  assert.ok(res.css.includes('.accordion-item {'));
  assert.ok(res.css.includes('.accordion-trigger {'));
  assert.ok(res.css.includes('.accordion-content {'));
});

test('dropdowns and dropups resolve and compile correctly', () => {
  assert.ok(matchComponents('dropdown') !== null);
  assert.ok(matchComponents('dropdown-menu') !== null);
  assert.ok(matchComponents('dropup') !== null);
  assert.ok(matchComponents('dropup-menu') !== null);
  assert.ok(matchComponents('dropdown-item') !== null);

  const res = compile('<div class="dropdown"><button class="dropdown-trigger">Menu</button><div class="dropdown-menu"><a class="dropdown-item">Item</a></div></div>', { preflight: false });
  assert.ok(res.css.includes('.dropdown {'));
  assert.ok(res.css.includes('.dropdown-menu {'));
  assert.ok(res.css.includes('.dropdown-item {'));
});

test('breadcrumbs resolve and compile correctly', () => {
  assert.ok(matchComponents('breadcrumbs') !== null);
  assert.ok(matchComponents('breadcrumb-item') !== null);
  assert.ok(matchComponents('breadcrumb-link') !== null);
  assert.ok(matchComponents('breadcrumb-active') !== null);

  const res = compile('<ol class="breadcrumbs"><li class="breadcrumb-item"><a class="breadcrumb-link" href="#">Home</a></li><li class="breadcrumb-item"><span class="breadcrumb-active">Docs</span></li></ol>', { preflight: false });
  assert.ok(res.css.includes('.breadcrumbs {'));
  assert.ok(res.css.includes('.breadcrumb-item {'));
  assert.ok(res.css.includes('.breadcrumb-link {'));
  assert.ok(res.css.includes('.breadcrumb-active {'));
});

test('checkboxes resolve and compile correctly', () => {
  assert.ok(matchComponents('checkbox') !== null);
  assert.ok(matchComponents('checkbox-checked') !== null);
  assert.ok(matchComponents('checkbox-label') !== null);

  const res = compile('<label class="checkbox-label"><input type="checkbox" class="checkbox"> Agree to terms</label>', { preflight: false });
  assert.ok(res.css.includes('.checkbox {'));
  assert.ok(res.css.includes('.checkbox:checked'));
  assert.ok(res.css.includes('.checkbox-label {'));
});

test('forms resolve and compile correctly', () => {
  assert.ok(matchComponents('form-group') !== null);
  assert.ok(matchComponents('form-label') !== null);
  assert.ok(matchComponents('form-input') !== null);
  assert.ok(matchComponents('form-input-error') !== null);
  assert.ok(matchComponents('form-select') !== null);
  assert.ok(matchComponents('form-textarea') !== null);
  assert.ok(matchComponents('form-hint') !== null);
  assert.ok(matchComponents('form-error') !== null);

  const res = compile('<div class="form-group"><label class="form-label">Email</label><input type="email" class="form-input form-input-error"><span class="form-error">Invalid email</span></div>', { preflight: false });
  assert.ok(res.css.includes('.form-group {'));
  assert.ok(res.css.includes('.form-label {'));
  assert.ok(res.css.includes('.form-input {'));
  assert.ok(res.css.includes('.form-input-error {'));
  assert.ok(res.css.includes('.form-error {'));
});

test('tooltips resolve and compile correctly', () => {
  assert.ok(matchComponents('tooltip') !== null);
  assert.ok(matchComponents('tooltip-content') !== null);
  assert.ok(matchComponents('tooltip-top') !== null);
  assert.ok(matchComponents('tooltip-bottom') !== null);
  assert.ok(matchComponents('tooltip-left') !== null);
  assert.ok(matchComponents('tooltip-right') !== null);

  const res = compile('<div class="tooltip tooltip-top"><button>Hover</button><div class="tooltip-content">Info message</div></div>', { preflight: false });
  assert.ok(res.css.includes('.tooltip {'));
  assert.ok(res.css.includes('.tooltip-content {'));
});

test('notifications resolve and compile correctly', () => {
  assert.ok(matchComponents('notification') !== null);
  assert.ok(matchComponents('notification-info') !== null);
  assert.ok(matchComponents('notification-success') !== null);
  assert.ok(matchComponents('notification-warning') !== null);
  assert.ok(matchComponents('notification-danger') !== null);
  assert.ok(matchComponents('notification-title') !== null);

  const res = compile('<div class="notification notification-success"><strong class="notification-title">Success</strong><p class="notification-desc">Saved</p></div>', { preflight: false });
  assert.ok(res.css.includes('.notification {'));
  assert.ok(res.css.includes('.notification-success {'));
  assert.ok(res.css.includes('.notification-title {'));
});

test('toast notifications resolve and compile correctly with keyframes', () => {
  assert.ok(matchComponents('toast-container') !== null);
  assert.ok(matchComponents('toast') !== null);
  assert.ok(matchComponents('toast-top-right') !== null);

  const res = compile('<div class="toast-container toast-top-right"><div class="toast">Update applied!</div></div>', { preflight: false });
  assert.ok(res.css.includes('.toast-container {'));
  assert.ok(res.css.includes('.toast-top-right {'));
  assert.ok(res.css.includes('.toast {'));
  assert.ok(res.css.includes('@keyframes oray-toast-slide-in'));
});

test('toggles and group toggles resolve and compile correctly', () => {
  assert.ok(matchComponents('toggle') !== null);
  assert.ok(matchComponents('toggle-active') !== null);
  assert.ok(matchComponents('toggle-group') !== null);
  assert.ok(matchComponents('toggle-group-item') !== null);
  assert.ok(matchComponents('toggle-group-item-active') !== null);

  const res = compile('<div class="toggle-group"><button class="toggle-group-item toggle-group-item-active">Day</button><button class="toggle-group-item">Week</button></div>', { preflight: false });
  assert.ok(res.css.includes('.toggle-group {'));
  assert.ok(res.css.includes('.toggle-group-item {'));
  assert.ok(res.css.includes('.toggle-group-item-active {'));
});

test('chips resolve and compile correctly', () => {
  assert.ok(matchComponents('chip') !== null);
  assert.ok(matchComponents('chip-primary') !== null);
  assert.ok(matchComponents('chip-accent') !== null);
  assert.ok(matchComponents('chip-dismiss') !== null);

  const res = compile('<span class="chip chip-primary">Tag <button class="chip-dismiss">&times;</button></span>', { preflight: false });
  assert.ok(res.css.includes('.chip {'));
  assert.ok(res.css.includes('.chip-primary {'));
  assert.ok(res.css.includes('.chip-dismiss {'));
});

test('panels resolve and compile correctly', () => {
  assert.ok(matchComponents('panel') !== null);
  assert.ok(matchComponents('panel-elevated') !== null);
  assert.ok(matchComponents('panel-header') !== null);
  assert.ok(matchComponents('panel-body') !== null);
  assert.ok(matchComponents('panel-footer') !== null);

  const res = compile('<div class="panel panel-elevated"><div class="panel-header"><h3 class="panel-title">Title</h3></div><div class="panel-body">Body</div><div class="panel-footer">Footer</div></div>', { preflight: false });
  assert.ok(res.css.includes('.panel {'));
  assert.ok(res.css.includes('.panel-elevated {'));
  assert.ok(res.css.includes('.panel-header {'));
  assert.ok(res.css.includes('.panel-body {'));
  assert.ok(res.css.includes('.panel-footer {'));
});

test('buttons and modals resolve and compile correctly', () => {
  assert.ok(matchComponents('btn') !== null);
  assert.ok(matchComponents('btn-primary') !== null);
  assert.ok(matchComponents('btn-outline') !== null);
  assert.ok(matchComponents('modal') !== null);
  assert.ok(matchComponents('modal-box') !== null);

  const res = compile('<div class="modal"><div class="modal-box"><button class="btn btn-primary">Submit</button></div></div>', { preflight: false });
  assert.ok(res.css.includes('.btn {'));
  assert.ok(res.css.includes('.btn-primary {'));
  assert.ok(res.css.includes('.modal {'));
  assert.ok(res.css.includes('.modal-box {'));
});
