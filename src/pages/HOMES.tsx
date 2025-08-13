import { useState, useEffect } from 'react';
import { isFeatureEnabled } from '@/utils/featureFlags';
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