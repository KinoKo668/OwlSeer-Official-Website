import { useEffect, useRef } from 'react';

/**
 * RenderLogger - Debug component to track render count
 * Usage: Add <RenderLogger name="ComponentName" /> at the top of your component
 */
export function RenderLogger({ name }: { name: string }) {
  const renderCount = useRef(0);
  const lastRenderTime = useRef(Date.now());

  renderCount.current += 1;
  const now = Date.now();
  const timeSinceLastRender = now - lastRenderTime.current;
  lastRenderTime.current = now;

  // Log to console
  console.log(
    `%c[RENDER] ${name}`,
    'color: #00ff00; font-weight: bold;',
    `Count: ${renderCount.current}`,
    `Time since last: ${timeSinceLastRender}ms`
  );

  // Warn if rendering too frequently
  if (timeSinceLastRender < 100 && renderCount.current > 5) {
    console.warn(
      `%c[WARNING] ${name} is rendering very frequently!`,
      'color: #ff0000; font-weight: bold; font-size: 14px;',
      `Rendered ${renderCount.current} times in the last ${timeSinceLastRender}ms`
    );
  }

  useEffect(() => {
    console.log(`%c[MOUNT] ${name}`, 'color: #0088ff; font-weight: bold;');
    return () => {
      console.log(`%c[UNMOUNT] ${name}`, 'color: #ff8800; font-weight: bold;');
    };
  }, [name]);

  return null;
}
