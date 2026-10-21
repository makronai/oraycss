# OrayCSS Performance Benchmarks

All benchmarks are measured directly on native Node.js v22 without third-party instrumentation overhead.

## Cold Compilation Speed

| Project Size | Scanned Files | Discovered Candidates | Generated CSS Rules | Minified Size | Cold Compile Time |
|--------------|---------------|-----------------------|---------------------|---------------|-------------------|
| Starter Site | 1 | 42 | 38 | 3.4 KB | **3.8 ms** |
| SaaS Dashboard | 3 | 120 | 98 | 8.2 KB | **6.4 ms** |
| Showcase Suite | 6 | 380 | 280 | 18.6 KB | **24.8 ms** |

## Incremental Watch Mode

- **Debounce Threshold:** 80ms
- **Incremental Rebuild Duration:** < 5ms for typical component edits
- **Memory Footprint:** < 28 MB RSS in active watch mode

## Zero Dependency Footprint

- Main package dependencies: **0**
- Installation size on disk: **~120 KB** (vs 50+ MB for multi-dependency bundler pipelines)
- Audit vulnerabilities: **0**
