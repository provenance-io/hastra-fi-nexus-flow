// Feature flag utility system
export interface FeatureFlags {
  homesEnabled: boolean;
  testPagesEnabled: boolean;
  debugComponentsEnabled: boolean;
}

// Get feature flag value from environment variables
const getEnvFlag = (key: string, defaultValue: boolean = false): boolean => {
  const value = import.meta.env[key];
  if (value === undefined) return defaultValue;
  return value === 'true' || value === '1';
};

// Check if we're in Lovable preview mode (development environment)
const isLovablePreview = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  // Check if we're in development mode
  const isDev = import.meta.env.MODE === 'development' || import.meta.env.DEV;
  
  // Check if we're running on lovable domains
  const isLovableDomain = window.location.hostname.includes('lovable.app') || 
                         window.location.hostname.includes('lovable.dev') ||
                         window.location.hostname === 'localhost';
  
  return isDev && isLovableDomain;
};
// Check URL parameters for admin overrides
const getUrlOverride = (feature: string): boolean | null => {
  if (typeof window === 'undefined') return null;
  
  const urlParams = new URLSearchParams(window.location.search);
  const admin = urlParams.get('admin');
  const featureParam = urlParams.get('feature');
  
  if (admin === 'true' && featureParam === feature) {
    return true;
  }
  
  return null;
};

// Check localStorage for admin settings
const getLocalStorageOverride = (feature: string): boolean | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const adminSettings = localStorage.getItem('admin_feature_flags');
    if (adminSettings) {
      const settings = JSON.parse(adminSettings);
      return settings[feature] ?? null;
    }
  } catch (error) {
    console.warn('Failed to parse admin feature flags from localStorage:', error);
  }
  
  return null;
};

// Main feature flag checker
export const isFeatureEnabled = (feature: keyof FeatureFlags): boolean => {
  // Check admin overrides first (URL params take precedence)
  const urlOverride = getUrlOverride(feature);
  if (urlOverride !== null) return urlOverride;
  
  const localOverride = getLocalStorageOverride(feature);
  if (localOverride !== null) return localOverride;
  
  // Fall back to environment variables and Lovable preview detection
  switch (feature) {
    case 'homesEnabled':
      return getEnvFlag('VITE_FEATURE_HOMES_ENABLED', false);
    case 'testPagesEnabled':
      return isLovablePreview() || getEnvFlag('VITE_FEATURE_TEST_PAGES_ENABLED', false);
    case 'debugComponentsEnabled':
      return isLovablePreview() || getEnvFlag('VITE_FEATURE_DEBUG_COMPONENTS_ENABLED', false);
    default:
      return false;
  }
};

// Admin utility to toggle features in localStorage
export const toggleAdminFeature = (feature: keyof FeatureFlags, enabled: boolean): void => {
  if (typeof window === 'undefined') return;
  
  try {
    const currentSettings = localStorage.getItem('admin_feature_flags');
    const settings = currentSettings ? JSON.parse(currentSettings) : {};
    
    settings[feature] = enabled;
    localStorage.setItem('admin_feature_flags', JSON.stringify(settings));
    
    // Reload page to apply changes
    window.location.reload();
  } catch (error) {
    console.error('Failed to update admin feature flags:', error);
  }
};

// Get all current feature flag states
export const getFeatureFlags = (): FeatureFlags => ({
  homesEnabled: isFeatureEnabled('homesEnabled'),
  testPagesEnabled: isFeatureEnabled('testPagesEnabled'),
  debugComponentsEnabled: isFeatureEnabled('debugComponentsEnabled'),
});