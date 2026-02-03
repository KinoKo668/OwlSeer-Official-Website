import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  // Initialize with actual window size to prevent hydration mismatch
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    // Check if window is available (client-side)
    if (typeof window !== 'undefined') {
      return window.innerWidth < MOBILE_BREAKPOINT;
    }
    return false; // Default to desktop on server-side
  });

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    const onChange = () => {
      setIsMobile((prev) => {
        const matches = mql.matches;
        // Only update if the value actually changed
        if (prev !== matches) {
          return matches;
        }
        return prev;
      });
    };
    
    // Sync with media query on mount (only if different)
    const currentMatches = mql.matches;
    if (isMobile !== currentMatches) {
      setIsMobile(currentMatches);
    }
    
    // Use the modern API if available, fallback to deprecated addListener
    if (mql.addEventListener) {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    } else {
      // Fallback for older browsers
      mql.addListener(onChange);
      return () => mql.removeListener(onChange);
    }
  }, []); // Empty dependency array - only run on mount/unmount

  return isMobile;
}
