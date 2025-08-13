
import { useState, useEffect } from 'react';
import SwYLDSHero from '@/components/swylds/SwYLDSHero';
import SwYLDSMetrics from '@/components/swylds/SwYLDSMetrics';
import SwYLDSHowItWorks from '@/components/swylds/SwYLDSHowItWorks';
import SwYLDSValueProposition from '@/components/swylds/SwYLDSValueProposition';
import SwYLDSInvestmentDetails from '@/components/swylds/SwYLDSInvestmentDetails';
import SwYLDSLeveragedLooping from '@/components/swylds/SwYLDSYieldComparison';
import SwYLDSFinalCTA from '@/components/swylds/SwYLDSFinalCTA';
import HOMESComingSoonModal from '@/components/homes/HOMESComingSoonModal';
import ProvenanceBranding from '@/components/ProvenanceBranding';

const SwYLDSPage = () => {
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
          <SwYLDSHero />
          <SwYLDSHowItWorks />
          <SwYLDSValueProposition />
          <SwYLDSInvestmentDetails />
          <SwYLDSLeveragedLooping />
          <SwYLDSFinalCTA />
          <SwYLDSMetrics />
          <ProvenanceBranding />
        </div>
      </div>
    </div>
  );
};

export default SwYLDSPage;
