import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { defaultConfig, defaultTheme } from './defaults.js';

/**
 * Deep merge utility for configuration objects
 */
function deepMerge(target, source) {
  if (!source || typeof source !== 'object') return target;
  const result = { ...target };
  for (const [key, val] of Object.entries(source)) {
    if (val && typeof val === 'object' && !Array.isArray(val)) {
      result[key] = deepMerge(result[key] || {}, val);
    } else {
      result[key] = val;
    }
  }
  return result;
}

/**
 * Resolve configuration from object or file path
 */
export async function resolveConfig(customConfigOrPath = {}) {
  let userConfig = {};

  if (typeof customConfigOrPath === 'string') {
    const configPath = path.resolve(process.cwd(), customConfigOrPath);
    if (fs.existsSync(configPath)) {
      const fileUrl = pathToFileURL(configPath).href;
      const mod = await import(fileUrl);
      userConfig = mod.default || mod;
    }
  } else if (typeof customConfigOrPath === 'object' && customConfigOrPath !== null) {
    userConfig = customConfigOrPath;
  }

  // Look for default config files if none specified
  if (Object.keys(userConfig).length === 0) {
    const defaultLocations = [
      'oray.config.js',
      'oray.config.mjs',
      'oray.config.json'
    ];
    for (const loc of defaultLocations) {
      const full = path.resolve(process.cwd(), loc);
      if (fs.existsSync(full)) {
        if (loc.endsWith('.json')) {
          userConfig = JSON.parse(fs.readFileSync(full, 'utf8'));
        } else {
          const mod = await import(pathToFileURL(full).href);
          userConfig = mod.default || mod;
        }
        break;
      }
    }
  }

  return {
    ...defaultConfig,
    ...userConfig,
    theme: deepMerge(defaultTheme, userConfig.theme || {}),
    content: userConfig.content || defaultConfig.content,
    output: userConfig.output || defaultConfig.output,
    preflight: userConfig.preflight !== undefined ? userConfig.preflight : defaultConfig.preflight,
    darkMode: userConfig.darkMode || defaultConfig.darkMode,
    safelist: Array.from(new Set([...(defaultConfig.safelist || []), ...(userConfig.safelist || [])]))
  };
}
