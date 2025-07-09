import { useEffect } from 'react';

// Enhanced accessibility features for web3 DeFi platform
const AccessibilityFeatures = () => {
  useEffect(() => {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:border-header-glow focus:rounded-lg';
    skipLink.setAttribute('role', 'button');
    skipLink.setAttribute('tabindex', '0');
    
    // Insert at the very beginning of body
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Enhanced focus management for modals and dropdowns
    const handleFocusTrap = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        const activeModal = document.querySelector('[role="dialog"][data-state="open"]');
        if (activeModal) {
          const closeButton = activeModal.querySelector('[aria-label*="Close"], [data-dismiss]');
          if (closeButton instanceof HTMLElement) {
            closeButton.click();
          }
        }
      }
    };

    document.addEventListener('keydown', handleFocusTrap);

    // Announce page changes for screen readers
    const announcePageChange = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.id = 'page-announcement';
      document.body.appendChild(announcement);
    };

    announcePageChange();

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleFocusTrap);
      const skipLinkElement = document.querySelector('a[href="#main-content"]');
      if (skipLinkElement) {
        skipLinkElement.remove();
      }
      const announcement = document.getElementById('page-announcement');
      if (announcement) {
        announcement.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default AccessibilityFeatures;