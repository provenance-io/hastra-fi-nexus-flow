import { useState, useEffect } from "react";
import SPRIMEHero from "@/components/sprime/SPRIMEHero";
import SPRIMEMetrics from "@/components/sprime/SPRIMEMetrics";
import SPRIMEHowItWorks from "@/components/sprime/SPRIMEHowItWorks";
import SPRIMEValueProposition from "@/components/sprime/SPRIMEValueProposition";
import SPRIMEInvestmentDetails from "@/components/sprime/SPRIMEInvestmentDetails";
import SPRIMELeveragedLooping from "@/components/sprime/SPRIMEYieldComparison";
import SPRIMEFinalCTA from "@/components/sprime/SPRIMEFinalCTA";
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
          <SPRIMEHero />
          <SPRIMEHowItWorks />
          <SPRIMEValueProposition />
          <SPRIMEInvestmentDetails />
          <SPRIMELeveragedLooping />
          <SPRIMEFinalCTA />
          <SPRIMEMetrics />
          <ProvenanceBranding />
        </div>
      </div>
    </div>
  );
};

export default SPRIMEPage;
