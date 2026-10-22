/**
 * OrayCSS Ready-to-Use UI Component Utilities
 * Zero-dependency modern primitives for switches, tabs, accordions,
 * dropdowns, breadcrumbs, checkboxes, forms, tooltips, notifications,
 * toasts, toggles, chips, panels, buttons, and modals.
 */

export function matchComponents(baseClass) {
  // 1. SWITCHES
  if (baseClass === 'switch') {
    return {
      css: `position: relative; display: inline-flex; align-items: center; width: 2.75rem; height: 1.5rem; flex-shrink: 0; cursor: pointer; border-radius: 9999px; border: 1px solid var(--oray-border, #27272a); background-color: var(--oray-surface-elevated, #18181b); transition: background-color 0.2s ease, border-color 0.2s ease; user-select: none;
& .switch-input { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0; }
&:has(.switch-input:checked) { background-color: var(--oray-primary, #b8f36b); border-color: var(--oray-primary, #b8f36b); }
&:has(.switch-input:checked) .switch-thumb { transform: translateX(1.25rem); background-color: var(--oray-primary-foreground, #09090b); }
&:has(.switch-input:focus-visible) { outline: 2px solid var(--oray-ring, #b8f36b); outline-offset: 2px; }`,
      category: 'components'
    };
  }

  if (baseClass === 'switch-sm') {
    return {
      css: `width: 2.25rem; height: 1.25rem;
&:has(.switch-input:checked) .switch-thumb { transform: translateX(1rem); }`,
      category: 'components'
    };
  }

  if (baseClass === 'switch-lg') {
    return {
      css: `width: 3.5rem; height: 1.875rem;
&:has(.switch-input:checked) .switch-thumb { transform: translateX(1.625rem); }`,
      category: 'components'
    };
  }

  if (baseClass === 'switch-thumb') {
    return {
      css: `position: absolute; left: 0.125rem; width: 1.25rem; height: 1.25rem; border-radius: 9999px; background-color: #ffffff; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3); transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s ease; pointer-events: none;`,
      category: 'components'
    };
  }

  if (baseClass === 'switch-checked') {
    return {
      css: `background-color: var(--oray-primary, #b8f36b); border-color: var(--oray-primary, #b8f36b);`,
      category: 'components'
    };
  }

  if (baseClass === 'switch-checked-thumb') {
    return {
      css: `transform: translateX(1.25rem); background-color: var(--oray-primary-foreground, #09090b);`,
      category: 'components'
    };
  }

  // 2. TABS
  if (baseClass === 'tabs') {
    return {
      css: `display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid var(--oray-border, #27272a); overflow-x: auto;`,
      category: 'components'
    };
  }

  if (baseClass === 'tabs-pills') {
    return {
      css: `display: inline-flex; align-items: center; gap: 0.25rem; padding: 0.25rem; border-radius: 0.625rem; background-color: var(--oray-surface, #121215); border: 1px solid var(--oray-border, #27272a);`,
      category: 'components'
    };
  }

  if (baseClass === 'tab') {
    return {
      css: `display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.625rem 1rem; font-size: 0.875rem; font-weight: 500; color: var(--oray-muted-foreground, #a1a1aa); border-bottom: 2px solid transparent; transition: color 0.15s ease, border-color 0.15s ease, background-color 0.15s ease; cursor: pointer; white-space: nowrap; user-select: none; background: transparent;
&:hover { color: var(--oray-foreground, #fafafa); }`,
      category: 'components'
    };
  }

  if (baseClass === 'tab-active') {
    return {
      css: `color: var(--oray-primary, #b8f36b); border-bottom-color: var(--oray-primary, #b8f36b); font-weight: 600;`,
      category: 'components'
    };
  }

  if (baseClass === 'tab-pill') {
    return {
      css: `display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.375rem 0.875rem; font-size: 0.875rem; font-weight: 500; border-radius: 0.375rem; color: var(--oray-muted-foreground, #a1a1aa); cursor: pointer; transition: all 0.15s ease; border: none; background: transparent;
&:hover { color: var(--oray-foreground, #fafafa); }`,
      category: 'components'
    };
  }

  if (baseClass === 'tab-pill-active') {
    return {
      css: `background-color: var(--oray-primary, #b8f36b); color: var(--oray-primary-foreground, #09090b); font-weight: 600;`,
      category: 'components'
    };
  }

  if (baseClass === 'tab-content') {
    return {
      css: `display: block; padding-top: 1rem;`,
      category: 'components'
    };
  }

  // 3. ACCORDIONS
  if (baseClass === 'accordion') {
    return {
      css: `display: flex; flex-direction: column; border: 1px solid var(--oray-border, #27272a); border-radius: 0.75rem; overflow: hidden; background-color: var(--oray-surface, #121215);`,
      category: 'components'
    };
  }

  if (baseClass === 'accordion-item') {
    return {
      css: `border-bottom: 1px solid var(--oray-border, #27272a);
&:last-child { border-bottom: none; }`,
      category: 'components'
    };
  }

  if (baseClass === 'accordion-trigger') {
    return {
      css: `display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 1rem 1.25rem; font-size: 0.9375rem; font-weight: 500; color: var(--oray-foreground, #fafafa); background: transparent; border: none; cursor: pointer; transition: background-color 0.15s ease, color 0.15s ease; list-style: none; user-select: none;
&::-webkit-details-marker { display: none; }
&::after { content: ''; display: inline-block; width: 0.5rem; height: 0.5rem; border-right: 2px solid currentColor; border-bottom: 2px solid currentColor; transform: rotate(45deg); transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1); margin-left: 0.5rem; flex-shrink: 0; }
details[open] > &::after, &.is-open::after { transform: rotate(-135deg); }
&:hover { background-color: var(--oray-surface-elevated, #18181b); }`,
      category: 'components'
    };
  }

  if (baseClass === 'accordion-content') {
    return {
      css: `padding: 0 1.25rem 1.25rem 1.25rem; font-size: 0.875rem; line-height: 1.6; color: var(--oray-muted-foreground, #a1a1aa);`,
      category: 'components'
    };
  }

  // 4. DROP-DOWN & DROP-UP MENUS
  if (baseClass === 'dropdown') {
    return {
      css: `position: relative; display: inline-block;
&:hover > .dropdown-menu, &:focus-within > .dropdown-menu, &.is-open > .dropdown-menu { opacity: 1; visibility: visible; transform: translateY(0); pointer-events: auto; }`,
      category: 'components'
    };
  }

  if (baseClass === 'dropdown-trigger') {
    return {
      css: `display: inline-flex; align-items: center; gap: 0.5rem; cursor: pointer;`,
      category: 'components'
    };
  }

  if (baseClass === 'dropdown-menu') {
    return {
      css: `position: absolute; top: calc(100% + 0.375rem); left: 0; min-width: 12rem; max-width: 20rem; padding: 0.375rem; background-color: var(--oray-surface-elevated, #18181b); border: 1px solid var(--oray-border, #27272a); border-radius: 0.75rem; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3); z-index: 50; opacity: 0; visibility: hidden; pointer-events: none; transform: translateY(-0.25rem); transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s;`,
      category: 'components'
    };
  }

  if (baseClass === 'dropdown-menu-right') {
    return {
      css: `left: auto; right: 0;`,
      category: 'components'
    };
  }

  if (baseClass === 'dropup') {
    return {
      css: `position: relative; display: inline-block;
&:hover > .dropup-menu, &:focus-within > .dropup-menu, &.is-open > .dropup-menu { opacity: 1; visibility: visible; transform: translateY(0); pointer-events: auto; }`,
      category: 'components'
    };
  }

  if (baseClass === 'dropup-menu') {
    return {
      css: `position: absolute; bottom: calc(100% + 0.375rem); left: 0; min-width: 12rem; max-width: 20rem; padding: 0.375rem; background-color: var(--oray-surface-elevated, #18181b); border: 1px solid var(--oray-border, #27272a); border-radius: 0.75rem; box-shadow: 0 -10px 25px -5px rgba(0, 0, 0, 0.4), 0 -8px 10px -6px rgba(0, 0, 0, 0.3); z-index: 50; opacity: 0; visibility: hidden; pointer-events: none; transform: translateY(0.25rem); transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s;`,
      category: 'components'
    };
  }

  if (baseClass === 'dropdown-item' || baseClass === 'dropup-item') {
    return {
      css: `display: flex; align-items: center; gap: 0.625rem; width: 100%; padding: 0.5rem 0.75rem; font-size: 0.875rem; color: var(--oray-foreground, #fafafa); border-radius: 0.5rem; border: none; background: transparent; cursor: pointer; text-decoration: none; transition: background-color 0.15s ease, color 0.15s ease; text-align: left; box-sizing: border-box;
&:hover { background-color: var(--oray-secondary, #27272a); color: var(--oray-primary, #b8f36b); }`,
      category: 'components'
    };
  }

  if (baseClass === 'dropdown-divider') {
    return {
      css: `height: 1px; background-color: var(--oray-border, #27272a); margin: 0.375rem 0;`,
      category: 'components'
    };
  }

  if (baseClass === 'dropdown-header') {
    return {
      css: `padding: 0.375rem 0.75rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--oray-muted-foreground, #a1a1aa);`,
      category: 'components'
    };
  }

  // 5. BREADCRUMBS
  if (baseClass === 'breadcrumbs') {
    return {
      css: `display: flex; align-items: center; flex-wrap: wrap; gap: 0.5rem; font-size: 0.875rem; padding: 0; margin: 0; list-style: none;`,
      category: 'components'
    };
  }

  if (baseClass === 'breadcrumb-item') {
    return {
      css: `display: inline-flex; align-items: center; gap: 0.5rem; color: var(--oray-muted-foreground, #a1a1aa);
& + &::before { content: '/'; color: var(--oray-muted, #52525b); padding-right: 0.25rem; }`,
      category: 'components'
    };
  }

  if (baseClass === 'breadcrumb-link') {
    return {
      css: `color: var(--oray-muted-foreground, #a1a1aa); text-decoration: none; transition: color 0.15s ease;
&:hover { color: var(--oray-foreground, #fafafa); }`,
      category: 'components'
    };
  }

  if (baseClass === 'breadcrumb-active') {
    return {
      css: `color: var(--oray-foreground, #fafafa); font-weight: 500; pointer-events: none;`,
      category: 'components'
    };
  }

  // 6. CHECKBOXES
  if (baseClass === 'checkbox') {
    return {
      css: `appearance: none; -webkit-appearance: none; display: inline-grid; place-content: center; width: 1.125rem; height: 1.125rem; border: 1.5px solid var(--oray-border, #27272a); border-radius: 0.375rem; background-color: var(--oray-surface, #121215); cursor: pointer; transition: background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease; vertical-align: middle; margin: 0; flex-shrink: 0;
&:checked { background-color: var(--oray-primary, #b8f36b); border-color: var(--oray-primary, #b8f36b); background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='%2309090b' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3E%3C/svg%3E"); background-size: 100% 100%; background-position: center; background-repeat: no-repeat; }
&:focus-visible { outline: 2px solid var(--oray-ring, #b8f36b); outline-offset: 2px; }`,
      category: 'components'
    };
  }

  if (baseClass === 'checkbox-checked') {
    return {
      css: `background-color: var(--oray-primary, #b8f36b); border-color: var(--oray-primary, #b8f36b); background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='%2309090b' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3E%3C/svg%3E"); background-size: 100% 100%; background-position: center; background-repeat: no-repeat;`,
      category: 'components'
    };
  }

  if (baseClass === 'checkbox-label') {
    return {
      css: `display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: var(--oray-foreground, #fafafa); cursor: pointer; user-select: none;`,
      category: 'components'
    };
  }

  if (baseClass === 'checkbox-group') {
    return {
      css: `display: flex; flex-direction: column; gap: 0.625rem;`,
      category: 'components'
    };
  }

  // 7. FORMS
  if (baseClass === 'form-group') {
    return {
      css: `display: flex; flex-direction: column; gap: 0.375rem; margin-bottom: 1rem;`,
      category: 'components'
    };
  }

  if (baseClass === 'form-label') {
    return {
      css: `display: block; font-size: 0.875rem; font-weight: 500; color: var(--oray-foreground, #fafafa); user-select: none;`,
      category: 'components'
    };
  }

  if (baseClass === 'form-input') {
    return {
      css: `display: block; width: 100%; padding: 0.625rem 0.875rem; font-size: 0.875rem; color: var(--oray-foreground, #fafafa); background-color: var(--oray-surface, #121215); border: 1px solid var(--oray-border, #27272a); border-radius: 0.625rem; outline: none; transition: border-color 0.15s ease, box-shadow 0.15s ease;
&:focus { border-color: var(--oray-ring, #b8f36b); box-shadow: 0 0 0 3px rgba(184, 243, 107, 0.2); }`,
      category: 'components'
    };
  }

  if (baseClass === 'form-input-error') {
    return {
      css: `border-color: var(--oray-danger, #ef4444) !important;
&:focus { border-color: var(--oray-danger, #ef4444) !important; box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2) !important; }`,
      category: 'components'
    };
  }

  if (baseClass === 'form-select') {
    return {
      css: `display: block; width: 100%; padding: 0.625rem 2.25rem 0.625rem 0.875rem; font-size: 0.875rem; color: var(--oray-foreground, #fafafa); background-color: var(--oray-surface, #121215); border: 1px solid var(--oray-border, #27272a); border-radius: 0.625rem; outline: none; appearance: none; -webkit-appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23a1a1aa' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E"); background-position: right 0.75rem center; background-repeat: no-repeat; background-size: 1.25rem; cursor: pointer; transition: border-color 0.15s ease, box-shadow 0.15s ease;
&:focus { border-color: var(--oray-ring, #b8f36b); box-shadow: 0 0 0 3px rgba(184, 243, 107, 0.2); }`,
      category: 'components'
    };
  }

  if (baseClass === 'form-textarea') {
    return {
      css: `display: block; width: 100%; min-height: 5rem; padding: 0.625rem 0.875rem; font-size: 0.875rem; color: var(--oray-foreground, #fafafa); background-color: var(--oray-surface, #121215); border: 1px solid var(--oray-border, #27272a); border-radius: 0.625rem; outline: none; resize: vertical; transition: border-color 0.15s ease, box-shadow 0.15s ease;
&:focus { border-color: var(--oray-ring, #b8f36b); box-shadow: 0 0 0 3px rgba(184, 243, 107, 0.2); }`,
      category: 'components'
    };
  }

  if (baseClass === 'form-hint') {
    return {
      css: `font-size: 0.75rem; color: var(--oray-muted-foreground, #a1a1aa); margin-top: 0.25rem;`,
      category: 'components'
    };
  }

  if (baseClass === 'form-error') {
    return {
      css: `font-size: 0.75rem; color: var(--oray-danger, #ef4444); margin-top: 0.25rem;`,
      category: 'components'
    };
  }

  if (baseClass === 'form-fieldset') {
    return {
      css: `border: 1px solid var(--oray-border, #27272a); border-radius: 0.75rem; padding: 1rem 1.25rem; margin-bottom: 1.25rem;`,
      category: 'components'
    };
  }

  if (baseClass === 'form-legend') {
    return {
      css: `font-size: 0.875rem; font-weight: 600; padding: 0 0.5rem; color: var(--oray-foreground, #fafafa);`,
      category: 'components'
    };
  }

  // 8. TOOLTIPS
  if (baseClass === 'tooltip') {
    return {
      css: `position: relative; display: inline-flex; cursor: pointer;
&:hover > .tooltip-content { opacity: 1; visibility: visible; }`,
      category: 'components'
    };
  }

  if (baseClass === 'tooltip-content') {
    return {
      css: `position: absolute; z-index: 60; padding: 0.3125rem 0.625rem; font-size: 0.75rem; font-weight: 500; color: #fafafa; background-color: var(--oray-surface-elevated, #18181b); border: 1px solid var(--oray-border, #27272a); border-radius: 0.375rem; white-space: nowrap; pointer-events: none; opacity: 0; visibility: hidden; transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);`,
      category: 'components'
    };
  }

  if (baseClass === 'tooltip-top') {
    return {
      css: `& > .tooltip-content { bottom: calc(100% + 0.375rem); left: 50%; transform: translateX(-50%) translateY(4px); }
&:hover > .tooltip-content { transform: translateX(-50%) translateY(0); }`,
      category: 'components'
    };
  }

  if (baseClass === 'tooltip-bottom') {
    return {
      css: `& > .tooltip-content { top: calc(100% + 0.375rem); left: 50%; transform: translateX(-50%) translateY(-4px); }
&:hover > .tooltip-content { transform: translateX(-50%) translateY(0); }`,
      category: 'components'
    };
  }

  if (baseClass === 'tooltip-left') {
    return {
      css: `& > .tooltip-content { right: calc(100% + 0.375rem); top: 50%; transform: translateY(-50%) translateX(4px); }
&:hover > .tooltip-content { transform: translateY(-50%) translateX(0); }`,
      category: 'components'
    };
  }

  if (baseClass === 'tooltip-right') {
    return {
      css: `& > .tooltip-content { left: calc(100% + 0.375rem); top: 50%; transform: translateY(-50%) translateX(-4px); }
&:hover > .tooltip-content { transform: translateY(-50%) translateX(0); }`,
      category: 'components'
    };
  }

  // 9. NOTIFICATIONS / ALERTS
  if (baseClass === 'notification') {
    return {
      css: `display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.875rem 1.125rem; border-radius: 0.75rem; border: 1px solid var(--oray-border, #27272a); background-color: var(--oray-surface, #121215); color: var(--oray-foreground, #fafafa); font-size: 0.875rem;`,
      category: 'components'
    };
  }

  if (baseClass === 'notification-info') {
    return {
      css: `border-color: rgba(167, 139, 250, 0.35); background-color: rgba(167, 139, 250, 0.08);`,
      category: 'components'
    };
  }

  if (baseClass === 'notification-success') {
    return {
      css: `border-color: rgba(34, 197, 94, 0.35); background-color: rgba(34, 197, 94, 0.08);`,
      category: 'components'
    };
  }

  if (baseClass === 'notification-warning') {
    return {
      css: `border-color: rgba(245, 158, 11, 0.35); background-color: rgba(245, 158, 11, 0.08);`,
      category: 'components'
    };
  }

  if (baseClass === 'notification-danger') {
    return {
      css: `border-color: rgba(239, 68, 68, 0.35); background-color: rgba(239, 68, 68, 0.08);`,
      category: 'components'
    };
  }

  if (baseClass === 'notification-title') {
    return {
      css: `display: block; font-weight: 600; color: var(--oray-foreground, #fafafa); margin-bottom: 0.25rem;`,
      category: 'components'
    };
  }

  if (baseClass === 'notification-desc') {
    return {
      css: `font-size: 0.8125rem; color: var(--oray-muted-foreground, #a1a1aa); line-height: 1.5;`,
      category: 'components'
    };
  }

  if (baseClass === 'notification-icon') {
    return {
      css: `flex-shrink: 0; width: 1.25rem; height: 1.25rem; margin-top: 0.125rem;`,
      category: 'components'
    };
  }

  if (baseClass === 'notification-close') {
    return {
      css: `margin-left: auto; background: transparent; border: none; color: var(--oray-muted-foreground, #a1a1aa); cursor: pointer; padding: 0.125rem; transition: color 0.15s ease;
&:hover { color: var(--oray-foreground, #fafafa); }`,
      category: 'components'
    };
  }

  // 10. TOAST NOTIFICATIONS
  if (baseClass === 'toast-container') {
    return {
      css: `position: fixed; z-index: 100; display: flex; flex-direction: column; gap: 0.625rem; pointer-events: none; width: 100%; max-width: 24rem; padding: 1rem;`,
      category: 'components'
    };
  }

  if (baseClass === 'toast-top-right') {
    return { css: `top: 0; right: 0;`, category: 'components' };
  }
  if (baseClass === 'toast-top-left') {
    return { css: `top: 0; left: 0;`, category: 'components' };
  }
  if (baseClass === 'toast-bottom-right') {
    return { css: `bottom: 0; right: 0;`, category: 'components' };
  }
  if (baseClass === 'toast-bottom-left') {
    return { css: `bottom: 0; left: 0;`, category: 'components' };
  }

  if (baseClass === 'toast') {
    return {
      css: `pointer-events: auto; display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.875rem 1.125rem; border-radius: 0.75rem; background-color: var(--oray-surface-elevated, #18181b); border: 1px solid var(--oray-border, #27272a); color: var(--oray-foreground, #fafafa); box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.45); animation: oray-toast-slide-in 0.25s ease-out;`,
      keyframe: `@keyframes oray-toast-slide-in { from { transform: translateY(0.75rem); opacity: 0; } to { transform: translateY(0); opacity: 1; } }`,
      category: 'components'
    };
  }

  // 11. TOGGLES & GROUP TOGGLES
  if (baseClass === 'toggle') {
    return {
      css: `display: inline-flex; align-items: center; justify-content: center; padding: 0.5rem 0.875rem; font-size: 0.875rem; font-weight: 500; border-radius: 0.5rem; border: 1px solid var(--oray-border, #27272a); background-color: var(--oray-surface, #121215); color: var(--oray-muted-foreground, #a1a1aa); cursor: pointer; transition: all 0.15s ease; user-select: none;
&:hover { background-color: var(--oray-surface-elevated, #18181b); color: var(--oray-foreground, #fafafa); }`,
      category: 'components'
    };
  }

  if (baseClass === 'toggle-active') {
    return {
      css: `background-color: var(--oray-primary, #b8f36b) !important; color: var(--oray-primary-foreground, #09090b) !important; border-color: var(--oray-primary, #b8f36b) !important; font-weight: 600;`,
      category: 'components'
    };
  }

  if (baseClass === 'toggle-group') {
    return {
      css: `display: inline-flex; align-items: center; padding: 0.25rem; gap: 0.25rem; background-color: var(--oray-surface, #121215); border: 1px solid var(--oray-border, #27272a); border-radius: 0.625rem;`,
      category: 'components'
    };
  }

  if (baseClass === 'toggle-group-item') {
    return {
      css: `display: inline-flex; align-items: center; justify-content: center; padding: 0.375rem 0.75rem; font-size: 0.8125rem; font-weight: 500; border-radius: 0.375rem; border: none; background: transparent; color: var(--oray-muted-foreground, #a1a1aa); cursor: pointer; transition: all 0.15s ease;
&:hover { color: var(--oray-foreground, #fafafa); }`,
      category: 'components'
    };
  }

  if (baseClass === 'toggle-group-item-active') {
    return {
      css: `background-color: var(--oray-surface-elevated, #18181b); color: var(--oray-foreground, #fafafa); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); font-weight: 600;`,
      category: 'components'
    };
  }

  // 12. CHIPS / BADGES
  if (baseClass === 'chip') {
    return {
      css: `display: inline-flex; align-items: center; gap: 0.375rem; padding: 0.25rem 0.625rem; font-size: 0.75rem; font-weight: 500; border-radius: 9999px; background-color: var(--oray-surface, #121215); border: 1px solid var(--oray-border, #27272a); color: var(--oray-foreground, #fafafa); line-height: 1.25;`,
      category: 'components'
    };
  }

  if (baseClass === 'chip-primary') {
    return {
      css: `background-color: rgba(184, 243, 107, 0.15); border-color: rgba(184, 243, 107, 0.3); color: var(--oray-primary, #b8f36b);`,
      category: 'components'
    };
  }

  if (baseClass === 'chip-accent') {
    return {
      css: `background-color: rgba(167, 139, 250, 0.15); border-color: rgba(167, 139, 250, 0.3); color: var(--oray-accent, #a78bfa);`,
      category: 'components'
    };
  }

  if (baseClass === 'chip-success') {
    return {
      css: `background-color: rgba(34, 197, 94, 0.15); border-color: rgba(34, 197, 94, 0.3); color: var(--oray-success, #22c55e);`,
      category: 'components'
    };
  }

  if (baseClass === 'chip-warning') {
    return {
      css: `background-color: rgba(245, 158, 11, 0.15); border-color: rgba(245, 158, 11, 0.3); color: var(--oray-warning, #f59e0b);`,
      category: 'components'
    };
  }

  if (baseClass === 'chip-danger') {
    return {
      css: `background-color: rgba(239, 68, 68, 0.15); border-color: rgba(239, 68, 68, 0.3); color: var(--oray-danger, #ef4444);`,
      category: 'components'
    };
  }

  if (baseClass === 'chip-outline') {
    return {
      css: `background-color: transparent; border-color: var(--oray-border, #27272a);`,
      category: 'components'
    };
  }

  if (baseClass === 'chip-dismiss') {
    return {
      css: `display: inline-flex; align-items: center; justify-content: center; width: 0.875rem; height: 0.875rem; border-radius: 9999px; margin-left: 0.125rem; background: transparent; border: none; color: inherit; cursor: pointer; opacity: 0.6; transition: opacity 0.15s ease;
&:hover { opacity: 1; }`,
      category: 'components'
    };
  }

  // 13. PANELS
  if (baseClass === 'panel') {
    return {
      css: `display: flex; flex-direction: column; border: 1px solid var(--oray-border, #27272a); background-color: var(--oray-surface, #121215); border-radius: 1rem; overflow: hidden;`,
      category: 'components'
    };
  }

  if (baseClass === 'panel-elevated') {
    return {
      css: `box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.4);`,
      category: 'components'
    };
  }

  if (baseClass === 'panel-header') {
    return {
      css: `display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--oray-border, #27272a);`,
      category: 'components'
    };
  }

  if (baseClass === 'panel-title') {
    return {
      css: `font-size: 1.125rem; font-weight: 600; color: var(--oray-foreground, #fafafa); margin: 0;`,
      category: 'components'
    };
  }

  if (baseClass === 'panel-body') {
    return {
      css: `padding: 1.5rem; color: var(--oray-foreground, #fafafa); flex: 1 1 auto;`,
      category: 'components'
    };
  }

  if (baseClass === 'panel-footer') {
    return {
      css: `display: flex; align-items: center; justify-content: flex-end; gap: 0.75rem; padding: 1rem 1.5rem; border-top: 1px solid var(--oray-border, #27272a); background-color: var(--oray-surface-elevated, #18181b);`,
      category: 'components'
    };
  }

  // 14. BUTTONS & MODALS
  if (baseClass === 'btn') {
    return {
      css: `display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.5rem 1rem; font-size: 0.875rem; font-weight: 600; border-radius: 0.625rem; border: 1px solid transparent; cursor: pointer; text-decoration: none; transition: all 0.15s ease; user-select: none;
&:focus-visible { outline: 2px solid var(--oray-ring, #b8f36b); outline-offset: 2px; }`,
      category: 'components'
    };
  }

  if (baseClass === 'btn-primary') {
    return {
      css: `background-color: var(--oray-primary, #b8f36b); color: var(--oray-primary-foreground, #09090b);
&:hover { filter: brightness(1.08); transform: translateY(-1px); }
&:active { transform: translateY(0); }`,
      category: 'components'
    };
  }

  if (baseClass === 'btn-secondary') {
    return {
      css: `background-color: var(--oray-secondary, #27272a); color: var(--oray-secondary-foreground, #fafafa); border-color: var(--oray-border, #27272a);
&:hover { background-color: var(--oray-surface-elevated, #18181b); }`,
      category: 'components'
    };
  }

  if (baseClass === 'btn-outline') {
    return {
      css: `background-color: transparent; border-color: var(--oray-border, #27272a); color: var(--oray-foreground, #fafafa);
&:hover { background-color: var(--oray-surface-elevated, #18181b); }`,
      category: 'components'
    };
  }

  if (baseClass === 'btn-sm') {
    return {
      css: `padding: 0.375rem 0.75rem; font-size: 0.75rem; border-radius: 0.5rem;`,
      category: 'components'
    };
  }

  if (baseClass === 'btn-lg') {
    return {
      css: `padding: 0.75rem 1.25rem; font-size: 1rem; border-radius: 0.75rem;`,
      category: 'components'
    };
  }

  if (baseClass === 'modal') {
    return {
      css: `position: fixed; inset: 0; z-index: 90; display: flex; align-items: center; justify-content: center; background-color: rgba(0, 0, 0, 0.65); backdrop-filter: blur(4px); padding: 1rem; opacity: 0; visibility: hidden; pointer-events: none; transition: opacity 0.2s ease, visibility 0.2s;
&.is-open { opacity: 1; visibility: visible; pointer-events: auto; }`,
      category: 'components'
    };
  }

  if (baseClass === 'modal-box') {
    return {
      css: `width: 100%; max-width: 32rem; background-color: var(--oray-surface, #121215); border: 1px solid var(--oray-border, #27272a); border-radius: 1rem; padding: 1.5rem; box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5); transform: scale(0.95); transition: transform 0.2s ease;
.modal.is-open & { transform: scale(1); }`,
      category: 'components'
    };
  }

  return null;
}
