
import { useState, useEffect } from 'react';
import SwYLDSHero from '@/components/swylds/SwYLDSHero';
import SwYLDSMetrics from '@/components/swylds/SwYLDSMetrics';
import SwYLDSValueProposition from '@/components/swylds/SwYLDSValueProposition';
import SwYLDSHowItWorks from '@/components/swylds/SwYLDSHowItWorks';
import SwYLDSYieldComparison from '@/components/swylds/SwYLDSYieldComparison';
import SwYLDSSocialProof from '@/components/swylds/SwYLDSSocialProof';
import SwYLDSTechnicalDetails from '@/components/swylds/SwYLDSTechnicalDetails';
import SwYLDSRiskDisclosure from '@/components/swylds/SwYLDSRiskDisclosure';
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
          <SwYLDSHero />
          <SwYLDSMetrics />
          <SwYLDSValueProposition />
          <SwYLDSHowItWorks />
          <SwYLDSYieldComparison />
          <SwYLDSSocialProof />
          <SwYLDSTechnicalDetails />
          <SwYLDSRiskDisclosure />
          <SwYLDSFinalCTA />
          <ProvenanceBranding />
        </div>
      </div>
    </div>
  );
};

export default SwYLDSPage;
