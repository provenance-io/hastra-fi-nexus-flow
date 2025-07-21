/**
 * Smooth scroll to a section by data attribute selector
 * @param selector - CSS selector for the target element
 */
export const scrollToSection = (selector: string): void => {
  const targetElement = document.querySelector(selector);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Smooth scroll to element by ID
 * @param elementId - ID of the target element
 */
export const scrollToElementById = (elementId: string): void => {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};