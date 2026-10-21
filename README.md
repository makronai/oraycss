# OrayCSS: Zero-Dependency Utility-First CSS Framework & Developer Studio

Welcome to **OrayCSS**, a production-grade, zero-dependency, ahead-of-time utility-first CSS framework engineered to compete with Tailwind CSS.

This repository contains both:
1. **The standalone OrayCSS compiler and NPM package** (`/oraycss/` and `/bin/oraycss.js`):
   - Zero runtime dependencies (`dependencies: {}`)
   - Standalone CLI: `npx oraycss init`, `npx oraycss build`, `npx oraycss watch`, `npx oraycss inspect`
   - Complete ahead-of-time compilation pipeline
   - Semantic design token engine & preflight reset
   - Native `node:test` automated test suite with 100% pass rate
2. **The OrayCSS Developer Studio Web App** (running on port 3000):
   - Interactive Live Playground with real-time compilation, AST token breakdown, and CSS inspector
   - 4 Showcase Application Previews (Minimal Landing Page, SaaS Dashboard, Immersive Portfolio, Commerce Experience)
   - Searchable Documentation & Utility Cheat Sheet
   - Terminal & CLI Simulator for running commands in the browser

## Standalone CLI Commands

```bash
# Initialize a new project
node ./bin/oraycss.js init

# Compile project files
node ./bin/oraycss.js build --minify

# Inspect candidate classes and bundle stats
node ./bin/oraycss.js inspect

# Run test suite
node --test tests/*.test.js
```

## License
MIT &copy; 2026 OrayCSS Contributors.
