import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component:
 * Listens to route changes globally and ensures the browser window resets to top (0, 0).
 * Preserves anchor/hash navigation for section links (e.g., /treatments#invisalign).
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If an anchor link / hash is targeted (e.g. #reviews or #invisalign)
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      
      // Fallback for dynamically rendered section elements
      const timer = setTimeout(() => {
        const delayedElement = document.getElementById(id);
        if (delayedElement) {
          delayedElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }

    // Default route navigation: reset scroll position to the very top instantly
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;

