import { useState, useEffect } from "react";
import SYLDSHero from "@/components/sprime/SYLDSHero";
import SYLDSMetrics from "@/components/sprime/SYLDSMetrics";
import SYLDSHowItWorks from "@/components/sprime/SYLDSHowItWorks";
import SYLDSValueProposition from "@/components/sprime/SYLDSValueProposition";
import SYLDSInvestmentDetails from "@/components/sprime/SYLDSInvestmentDetails";
import SYLDSLeveragedLooping from "@/components/sprime/SYLDSYieldComparison";
import SYLDSFinalCTA from "@/components/sprime/SYLDSFinalCTA";
import HOMESComingSoonModal from "@/components/homes/HOMESComingSoonModal";
import ProvenanceBranding from "@/components/ProvenanceBranding";

const SPRIMEPage = () => {
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
        <div
          className={`${
            !pageAccessible ? "content-protection" : "content-accessible"
          }`}
        >
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

export default SPRIMEPage;
