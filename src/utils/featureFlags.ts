// Feature flag utility system
export interface FeatureFlags {
  // Core pages
  indexEnabled: boolean;
  aboutEnabled: boolean;
  learnEnabled: boolean;
  earnEnabled: boolean;
  termsEnabled: boolean;
  privacyEnabled: boolean;
  brandGuideEnabled: boolean;

  // Product pages
  primeEnabled: boolean;
  sPrimeEnabled: boolean;
  homesEnabled: boolean;
  senditEnabled: boolean;

  // Development/admin pages
  testPagesEnabled: boolean;
  debugComponentsEnabled: boolean;

  // System features
  ofacCheckEnabled: boolean;
}

// Get feature flag value from environment variables
const getEnvFlag = (key: string, defaultValue: boolean = false): boolean => {
  const value = import.meta.env[key];
  if (value === undefined) return defaultValue;
  return value === "true" || value === "1";
};

// Check if we're in Lovable preview mode (development environment)
const isLovablePreview = (): boolean => {
  if (typeof window === "undefined") return false;

  // Check if we're in development mode
  const isDev = import.meta.env.MODE === "development" || import.meta.env.DEV;

  // Check if we're running on lovable domains
  const isLovableDomain =
    window.location.hostname.includes("lovable.app") ||
    window.location.hostname.includes("lovable.dev") ||
    window.location.hostname === "localhost";

  return isDev && isLovableDomain;
};
// Check URL parameters for admin overrides
const getUrlOverride = (feature: string): boolean | null => {
  if (typeof window === "undefined") return null;

  const urlParams = new URLSearchParams(window.location.search);
  const admin = urlParams.get("admin");
  const featureParam = urlParams.get("feature");

  if (admin === "true" && featureParam === feature) {
    return true;
  }

  return null;
};

// Check localStorage for admin settings
const getLocalStorageOverride = (feature: string): boolean | null => {
  if (typeof window === "undefined") return null;

  try {
    const adminSettings = localStorage.getItem("admin_feature_flags");
    if (adminSettings) {
      const settings = JSON.parse(adminSettings);
      return settings[feature] ?? null;
    }
  } catch (error) {
    console.warn(
      "Failed to parse admin feature flags from localStorage:",
      error
    );
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
    // Core pages - default enabled
    case "indexEnabled":
      return getEnvFlag("VITE_FEATURE_INDEX_ENABLED", true);
    case "aboutEnabled":
      return getEnvFlag("VITE_FEATURE_ABOUT_ENABLED", true);
    case "learnEnabled":
      return getEnvFlag("VITE_FEATURE_LEARN_ENABLED", true);
    case "earnEnabled":
      return getEnvFlag("VITE_FEATURE_EARN_ENABLED", true);
    case "termsEnabled":
      return getEnvFlag("VITE_FEATURE_TERMS_ENABLED", true);
    case "privacyEnabled":
      return getEnvFlag("VITE_FEATURE_PRIVACY_ENABLED", true);
    case "brandGuideEnabled":
      return getEnvFlag("VITE_FEATURE_BRAND_GUIDE_ENABLED", true);

    // Product pages - default disabled
    case "primeEnabled":
      return getEnvFlag("VITE_FEATURE_PRIME_ENABLED", true);
    case "sPrimeEnabled":
      return getEnvFlag("VITE_FEATURE_SPRIME_ENABLED", true);
    case "homesEnabled":
      return getEnvFlag("VITE_FEATURE_HOMES_ENABLED", false);
    case "senditEnabled":
      return getEnvFlag("VITE_FEATURE_SENDIT_ENABLED", true);

    // Development/admin pages - default disabled in production
    case "testPagesEnabled":
      return (
        isLovablePreview() ||
        getEnvFlag("VITE_FEATURE_TEST_PAGES_ENABLED", false)
      );
    case "debugComponentsEnabled":
      return (
        isLovablePreview() ||
        getEnvFlag("VITE_FEATURE_DEBUG_COMPONENTS_ENABLED", false)
      );

    // System features
    case "ofacCheckEnabled":
      return getEnvFlag("VITE_FEATURE_OFAC_ENABLED", false);

    default:
      return false;
  }
};

// Admin utility to toggle features in localStorage
export const toggleAdminFeature = (
  feature: keyof FeatureFlags,
  enabled: boolean
): void => {
  if (typeof window === "undefined") return;

  try {
    const currentSettings = localStorage.getItem("admin_feature_flags");
    const settings = currentSettings ? JSON.parse(currentSettings) : {};

    settings[feature] = enabled;
    localStorage.setItem("admin_feature_flags", JSON.stringify(settings));

    // Reload page to apply changes
    window.location.reload();
  } catch (error) {
    console.error("Failed to update admin feature flags:", error);
  }
};

// Get all current feature flag states
export const getFeatureFlags = (): FeatureFlags => ({
  // Core pages
  indexEnabled: isFeatureEnabled("indexEnabled"),
  aboutEnabled: isFeatureEnabled("aboutEnabled"),
  learnEnabled: isFeatureEnabled("learnEnabled"),
  earnEnabled: isFeatureEnabled("earnEnabled"),
  termsEnabled: isFeatureEnabled("termsEnabled"),
  privacyEnabled: isFeatureEnabled("privacyEnabled"),
  brandGuideEnabled: isFeatureEnabled("brandGuideEnabled"),

  // Product pages
  primeEnabled: isFeatureEnabled("primeEnabled"),
  sPrimeEnabled: isFeatureEnabled("sPrimeEnabled"),
  homesEnabled: isFeatureEnabled("homesEnabled"),
  senditEnabled: isFeatureEnabled("senditEnabled"),

  // Development/admin pages
  testPagesEnabled: isFeatureEnabled("testPagesEnabled"),
  debugComponentsEnabled: isFeatureEnabled("debugComponentsEnabled"),

  // System features
  ofacCheckEnabled: isFeatureEnabled("ofacCheckEnabled"),
});

// Page route mapping for display
export const pageRoutes = {
  indexEnabled: { path: "/", name: "Home" },
  aboutEnabled: { path: "/about", name: "About" },
  learnEnabled: { path: "/learn", name: "Learn" },
  earnEnabled: { path: "/earn", name: "Earn" },
  termsEnabled: { path: "/terms", name: "Terms" },
  privacyEnabled: { path: "/privacy", name: "Privacy" },
  brandGuideEnabled: { path: "/brand-guide", name: "Brand Guide" },
  primeEnabled: { path: "/yield", name: "PRIME" },
  sPrimeEnabled: { path: "/prime", name: "sPRIME" },
  homesEnabled: { path: "/homes", name: "HOMES" },
  senditEnabled: { path: "/sendit", name: "Send It" },
  testPagesEnabled: { path: "/test-debug", name: "Test Debug" },
  debugComponentsEnabled: { path: "/components", name: "Components" },
} as const;
