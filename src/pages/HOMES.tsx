import { useState, useEffect } from 'react';
import { isFeatureEnabled } from '@/utils/featureFlags';
import FeatureDisabledBanner from '@/components/test/FeatureDisabledBanner';
import HOMESHero from '@/components/homes/HOMESHero';
import HOMESAbout from '@/components/homes/HOMESAbout';
import HOMESPortfolio from '@/components/homes/HOMESPortfolio';
import HOMESPoolComposition from '@/components/homes/HOMESPoolComposition';
import HOMESFAQ from '@/components/homes/HOMESFAQ';
import HOMESComingSoonModal from '@/components/homes/HOMESComingSoonModal';
import ProvenanceBranding from '@/components/ProvenanceBranding';
import NotFound from './NotFound';

const HOMESPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [pageAccessible, setPageAccessible] = useState(false);
  
  // Check if HOMES feature is enabled
  const isHOMESEnabled = isFeatureEnabled('homesEnabled');

  // Check if we're in Lovable preview mode
  const isLovablePreview = window.location.hostname.includes('lovable.app') || 
                          window.location.hostname.includes('lovable.dev') ||
                          window.location.hostname === 'localhost';

  // Check production feature state
  const getProductionFeatureState = (): boolean => {
    try {
      const adminSettings = localStorage.getItem('admin_feature_flags');
      if (adminSettings) {
        const settings = JSON.parse(adminSettings);
        if (settings.homesEnabled !== undefined) return settings.homesEnabled;
      }
    } catch (error) {
      // Ignore localStorage errors
    }
    return import.meta.env.VITE_FEATURE_HOMES_ENABLED === 'true';
  };

  const shouldShowBanner = isLovablePreview && !getProductionFeatureState();
  
  // If feature is not enabled, show 404
  if (!isHOMESEnabled) {
    return <NotFound />;
  }

  useEffect(() => {
    // Show modal after a brief delay on page load
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {shouldShowBanner && (
        <FeatureDisabledBanner 
          featureName="homesEnabled" 
          displayName="HOMES" 
        />
      )}
      {/* Extended gradient background to match homepage */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      <div className="relative z-10">
        <HOMESComingSoonModal 
          isOpen={showModal} 
          onClose={() => {
            setShowModal(false);
            setPageAccessible(true);
          }} 
        />
        <div className={`${!pageAccessible ? 'content-protection' : 'content-accessible'}`}>
          <HOMESHero />
          <HOMESAbout />
          <HOMESPortfolio />
          <HOMESPoolComposition />
          <HOMESFAQ />
          <ProvenanceBranding />
        </div>
      </div>
    </div>
  );
};

export default HOMESPage;