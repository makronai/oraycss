export const keyframeDefinitions = {
  'oray-spin': `@keyframes oray-spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}`,
  'oray-ping': `@keyframes oray-ping {\n  75%, 100% { transform: scale(2); opacity: 0; }\n}`,
  'oray-pulse': `@keyframes oray-pulse {\n  50% { opacity: 0.5; }\n}`,
  'oray-bounce': `@keyframes oray-bounce {\n  0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }\n  50% { transform: none; animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }\n}`,
  'oray-fade-in': `@keyframes oray-fade-in {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}`,
  'oray-slide-up': `@keyframes oray-slide-up {\n  from { opacity: 0; transform: translateY(12px); }\n  to { opacity: 1; transform: translateY(0); }\n}`,
  'oray-bounce-subtle': `@keyframes oray-bounce-subtle {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-4px); }\n}`
};

export function matchAnimation(token) {
  const animMap = {
    'animate-none': 'animation: none;',
    'animate-spin': 'animation: oray-spin 1s linear infinite;',
    'animate-ping': 'animation: oray-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;',
    'animate-pulse': 'animation: oray-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
    'animate-bounce': 'animation: oray-bounce 1s infinite;',
    'animate-fade-in': 'animation: oray-fade-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;',
    'animate-slide-up': 'animation: oray-slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;',
    'animate-bounce-subtle': 'animation: oray-bounce-subtle 2s ease-in-out infinite;'
  };

  if (animMap[token]) {
    const keyframeName = token.replace('animate-', 'oray-');
    return {
      css: animMap[token],
      keyframe: keyframeDefinitions[keyframeName] || null
    };
  }

  return null;
}
