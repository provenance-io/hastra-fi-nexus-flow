import { useState, useEffect } from 'react';
import HOMESHero from '@/components/homes/HOMESHero';
import HOMESAbout from '@/components/homes/HOMESAbout';
import HOMESPortfolio from '@/components/homes/HOMESPortfolio';
import HOMESPoolComposition from '@/components/homes/HOMESPoolComposition';
import HOMESFAQ from '@/components/homes/HOMESFAQ';
import HOMESComingSoonModal from '@/components/homes/HOMESComingSoonModal';

const HOMESPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    // Show modal after a brief delay on page load
    const timer = setTimeout(() => {
      setShowModal(true);
      setIsBlurred(true); // Activate blur when modal shows
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
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
    </>
  );
};

export default HOMESPage;