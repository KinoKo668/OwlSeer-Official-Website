import { useEffect } from 'react';

/**
 * RoutePreloader - Preloads critical routes in the background
 * This component preloads commonly accessed pages to improve perceived performance
 */
export function RoutePreloader() {
  useEffect(() => {
    // Preload critical routes after initial page load
    const preloadTimeout = setTimeout(() => {
      // Preload Dashboard (most common landing page)
      import('../components/Dashboard').catch(() => {});
      
      // Preload Copilot (frequently accessed)
      import('../components/Copilot').catch(() => {});
      
      // Preload Settings (common destination)
      import('../components/SettingsLayout').catch(() => {});
      
      // Preload DevTools (used on every page)
      import('../components/DevTools').catch(() => {});
    }, 2000); // Wait 2 seconds after initial load

    return () => clearTimeout(preloadTimeout);
  }, []);

  return null;
}
