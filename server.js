/**
 * OrayCSS Zero-Dependency Server & Documentation Explorer
 * Runs on Node.js native standard library (node:http, node:fs, node:path)
 * Port: 3000
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { compile } from './src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3000;
const HOST = '0.0.0.0';

// Ensure dist directory exists and compile initial stylesheet
function buildOrayCss() {
  const distDir = path.resolve(__dirname, 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  const indexPath = path.resolve(__dirname, 'index.html');
  let indexHtml = '';
  if (fs.existsSync(indexPath)) {
    indexHtml = fs.readFileSync(indexPath, 'utf8');
  }

  // Pre-seed safelist with all component classes so they are guaranteed in dist/oray.css
  const safelist = [
    'switch', 'switch-sm', 'switch-lg', 'switch-thumb', 'switch-checked', 'switch-checked-thumb',
    'tabs', 'tabs-pills', 'tab', 'tab-active', 'tab-pill', 'tab-pill-active', 'tab-content',
    'accordion', 'accordion-item', 'accordion-trigger', 'accordion-content',
    'dropdown', 'dropdown-trigger', 'dropdown-menu', 'dropdown-menu-right', 'dropdown-item', 'dropdown-divider', 'dropdown-header',
    'dropup', 'dropup-menu', 'dropup-item',
    'breadcrumbs', 'breadcrumb-item', 'breadcrumb-link', 'breadcrumb-active',
    'checkbox', 'checkbox-checked', 'checkbox-label', 'checkbox-group',
    'form-group', 'form-label', 'form-input', 'form-input-error', 'form-select', 'form-textarea', 'form-hint', 'form-error', 'form-fieldset', 'form-legend',
    'tooltip', 'tooltip-content', 'tooltip-top', 'tooltip-bottom', 'tooltip-left', 'tooltip-right',
    'notification', 'notification-info', 'notification-success', 'notification-warning', 'notification-danger', 'notification-title', 'notification-desc', 'notification-icon', 'notification-close',
    'toast-container', 'toast', 'toast-top-right', 'toast-top-left', 'toast-bottom-right', 'toast-bottom-left',
    'toggle', 'toggle-active', 'toggle-group', 'toggle-group-item', 'toggle-group-item-active',
    'chip', 'chip-primary', 'chip-accent', 'chip-success', 'chip-warning', 'chip-danger', 'chip-outline', 'chip-dismiss',
    'panel', 'panel-elevated', 'panel-header', 'panel-title', 'panel-body', 'panel-footer',
    'btn', 'btn-primary', 'btn-secondary', 'btn-outline', 'btn-sm', 'btn-lg',
    'modal', 'modal-box'
  ];

  const result = compile([indexHtml], {
    preflight: true,
    safelist,
    minify: false
  });

  const outPath = path.resolve(distDir, 'oray.css');
  fs.writeFileSync(outPath, result.css, 'utf8');
  console.log(`[OrayCSS] Compiled ${result.stats.rulesCount} rules to dist/oray.css in ${result.stats.durationMs}ms`);
}

buildOrayCss();

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer(async (req, res) => {
  // CORS & Security Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);

  // API endpoint for in-browser live token compilation
  if (url.pathname === '/api/compile' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body || '{}');
        const code = payload.code || '';
        const options = payload.options || {};
        const compiled = compile(code, {
          preflight: options.preflight ?? true,
          minify: options.minify ?? false,
          darkMode: options.darkMode ?? 'media'
        });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(compiled));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // Static file serving
  let reqPath = url.pathname === '/' ? '/index.html' : url.pathname;
  let filePath = path.resolve(__dirname, '.' + reqPath);

  // Fallback to index.html if file doesn't exist
  if (!fs.existsSync(filePath)) {
    filePath = path.resolve(__dirname, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  try {
    const data = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error: ' + err.message);
  }
});

server.listen(PORT, HOST, () => {
  console.log(`[OrayCSS] Server running on http://${HOST}:${PORT}`);
  console.log(`[OrayCSS] Zero-dependency NPM package mode active.`);
});
