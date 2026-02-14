import { useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export function ScrollToTop() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    // Preserve scroll position on browser back/forward navigation.
    if (navigationType === 'POP') return;

    if (location.hash) {
      let id = location.hash.slice(1);
      try {
        id = decodeURIComponent(id);
      } catch {
        // Ignore invalid URI sequences; fall back to raw hash.
      }

      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.key, location.hash, navigationType]);

  return null;
}
