import { useState, useEffect } from "react";
import PRIMEHero from "../components/prime/PRIMEHero";
import PRIMEMetrics from "../components/prime/PRIMEMetrics";
import PRIMEHowItWorks from "../components/prime/PRIMEHowItWorks";
import PRIMEValueProposition from "../components/prime/PRIMEValueProposition";
import PRIMEInvestmentDetails from "../components/prime/PRIMEInvestmentDetails";
import PRIMELeveragedLooping from "../components/prime/PRIMEYieldComparison";
import PRIMEFinalCTA from "../components/prime/PRIMEFinalCTA";
import HOMESComingSoonModal from "../components/homes/HOMESComingSoonModal";
import ProvenanceBranding from "../components/ProvenanceBranding";

const PRIMEPage = () => {
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
          <PRIMEHero />
          <PRIMEHowItWorks />
          <PRIMEValueProposition />
          <PRIMEInvestmentDetails />
          <PRIMELeveragedLooping />
          <PRIMEFinalCTA />
          <PRIMEMetrics />
          <ProvenanceBranding />
        </div>
      </div>
    </div>
  );
};

export default PRIMEPage;
