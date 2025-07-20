
import { useState, useEffect } from 'react';
import HOMESHero from '@/components/homes/HOMESHero';
import HOMESAbout from '@/components/homes/HOMESAbout';
import HOMESPortfolio from '@/components/homes/HOMESPortfolio';
import HOMESPoolComposition from '@/components/homes/HOMESPoolComposition';
import HOMESFAQ from '@/components/homes/HOMESFAQ';
import HOMESComingSoonModal from '@/components/homes/HOMESComingSoonModal';
import ProvenanceBranding from '@/components/ProvenanceBranding';

const HOMESPage = () => {
  const [showModal, setShowModal] = useState(false);
  
  // Use a more obscure naming convention and always keep blur active
  const [pageAccessible, setPageAccessible] = useState(false);

  useEffect(() => {
    // Show modal after a brief delay on page load
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* New muted Hastra gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-hastra-gradient-start/80 via-hastra-gradient-mid/30 to-hastra-gradient-end/10"></div>
      <div className="relative z-10">
        <HOMESComingSoonModal 
          isOpen={showModal} 
          onClose={() => setShowModal(false)} 
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
