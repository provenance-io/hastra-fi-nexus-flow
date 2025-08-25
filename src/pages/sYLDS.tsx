
import { useState, useEffect } from 'react';
import SYLDSHero from '@/components/sylds/SYLDSHero';
import SYLDSMetrics from '@/components/sylds/SYLDSMetrics';
import SYLDSHowItWorks from '@/components/sylds/SYLDSHowItWorks';
import SYLDSValueProposition from '@/components/sylds/SYLDSValueProposition';
import SYLDSInvestmentDetails from '@/components/sylds/SYLDSInvestmentDetails';
import SYLDSLeveragedLooping from '@/components/sylds/SYLDSYieldComparison';
import SYLDSFinalCTA from '@/components/sylds/SYLDSFinalCTA';
import HOMESComingSoonModal from '@/components/homes/HOMESComingSoonModal';
import ProvenanceBranding from '@/components/ProvenanceBranding';

const SYLDSPage = () => {
  const [showModal, setShowModal] = useState(false);
  
  // Start with page accessible for now to avoid blocking content
  const [pageAccessible, setPageAccessible] = useState(true);

  useEffect(() => {
    // Show modal after a brief delay on page load
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Unified gradient background to match other pages */}
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
          <SYLDSHero />
          <SYLDSHowItWorks />
          <SYLDSValueProposition />
          <SYLDSInvestmentDetails />
          <SYLDSLeveragedLooping />
          <SYLDSFinalCTA />
          <SYLDSMetrics />
          <ProvenanceBranding />
        </div>
      </div>
    </div>
  );
};

export default SYLDSPage;
