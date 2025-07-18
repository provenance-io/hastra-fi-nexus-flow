import { useState, useEffect } from 'react';
import HOMESHero from '@/components/homes/HOMESHero';
import HOMESAbout from '@/components/homes/HOMESAbout';
import HOMESPortfolio from '@/components/homes/HOMESPortfolio';
import HOMESPoolComposition from '@/components/homes/HOMESPoolComposition';
import HOMESFAQ from '@/components/homes/HOMESFAQ';
import HOMESComingSoonModal from '@/components/homes/HOMESComingSoonModal';

const HOMESPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [isBlurred, setIsBlurred] = useState(true);

  useEffect(() => {
    // Show modal after a brief delay on page load
    const timer = setTimeout(() => {
      setShowModal(true);
      setIsBlurred(true); // Activate blur when modal shows
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
          onClose={() => setShowModal(false)} 
        />
        <div className={`transition-all duration-300 ${isBlurred ? 'blur-sm' : ''}`}>
          <HOMESHero />
          <HOMESAbout />
          <HOMESPortfolio />
          <HOMESPoolComposition />
          <HOMESFAQ />
        </div>
      </div>
    </div>
  );
};

export default HOMESPage;