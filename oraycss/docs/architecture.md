# OrayCSS Architecture and Compiler Pipeline

OrayCSS is engineered as a deterministic ahead-of-time (AOT) pipeline with zero external npm dependencies.

```
Configuration (oray.config.js)
     ↓
Content Discovery (recursive scanner & glob engine)
     ↓
Candidate Extraction (balanced bracket extractor)
     ↓
Candidate Normalization & Escaping
     ↓
Variant & Utility Parsing (variants.js & utilities registry)
     ↓
Deterministic Rule Sorting (ordering.js)
     ↓
CSS Rule & Media-Query Generation (generate.js)
     ↓
Safe Production Optimization (optimize.js)
     ↓
Compiled Output Stylesheet
```

## Key Architectural Principles

1. **Deterministic Output:**
   Given identical source files and configuration, OrayCSS produces bit-for-bit identical CSS across different environments. Cascade ordering is determined by utility category and breakpoint weights, never by the order classes happen to appear in source markup.

2. **Supply Chain Integrity:**
   With zero dependencies in `package.json`, OrayCSS eliminates dependency tree vulnerabilities, deprecation warnings, and version resolution conflicts.

3. **Safe Selector Escaping:**
   Special characters such as brackets, colons, dots, percent signs, and hashes are escaped using strict CSS syntax (`.hover\:-translate-y-0\.5:hover`, `.w-\[37rem\]`).

4. **Zero Browser Runtime:**
   The browser only ever downloads ordinary CSS. No JavaScript bundle is injected into the client application.
