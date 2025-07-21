import { useEffect, useState } from 'react';

// Performance optimization component for better load times and user experience
const PerformanceOptimizer = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLinks = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap'
      ];

      fontLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
      });

      // Optimize images with lazy loading attributes
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    };

    // Service worker registration for caching
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          // Only register in production
          if (import.meta.env.PROD) {
            await navigator.serviceWorker.register('/sw.js');
          }
        } catch (error) {
          // Service worker registration failed - could be connected to error tracking
        }
      }
    };

    // Optimize critical rendering path
    const optimizeCRP = () => {
      // Remove unused CSS (this would typically be done at build time)
      // Add critical CSS inlining for above-the-fold content
      const criticalCSS = `
        .hero-section { display: block; }
        .nav-header { display: flex; }
      `;
      
      const style = document.createElement('style');
      style.textContent = criticalCSS;
      document.head.appendChild(style);

      // Defer non-critical JavaScript
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach(script => {
        if (!script.hasAttribute('async') && !script.hasAttribute('defer')) {
          script.setAttribute('defer', '');
        }
      });
    };

    // Connection optimization
    const optimizeConnections = () => {
      // DNS prefetch for external domains
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];

      domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      });
    };

    // Resource hints for better performance
    const addResourceHints = () => {
      // Prefetch likely next pages
      const routes = ['/yield'];
      
      routes.forEach(route => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        document.head.appendChild(link);
      });
    };

    // Initialize optimizations
    const initOptimizations = () => {
      preloadCriticalResources();
      registerServiceWorker();
      optimizeCRP();
      optimizeConnections();
      addResourceHints();
      setIsLoaded(true);
    };

    // Run optimizations when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initOptimizations);
    } else {
      initOptimizations();
    }

    // Performance monitoring
    const monitorPerformance = () => {
      // Web Vitals monitoring
      if ('PerformanceObserver' in window) {
        try {
          // Largest Contentful Paint
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.entryType === 'largest-contentful-paint') {
                // LCP metrics could be sent to analytics service
              }
            });
          }).observe({ entryTypes: ['largest-contentful-paint'] });

          // First Input Delay
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.entryType === 'first-input') {
                const fidEntry = entry as any; // Performance API typing is complex
                // FID metrics could be sent to analytics service
              }
            });
          }).observe({ entryTypes: ['first-input'] });
        } catch (error) {
          // Performance monitoring not supported in this browser
        }
      }
    };

    monitorPerformance();

    return () => {
      document.removeEventListener('DOMContentLoaded', initOptimizations);
    };
  }, []);

  return (
    <>
      {/* Preload spinner for better perceived performance */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
          <div className="w-8 h-8 border-2 border-header-glow border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </>
  );
};

export default PerformanceOptimizer;