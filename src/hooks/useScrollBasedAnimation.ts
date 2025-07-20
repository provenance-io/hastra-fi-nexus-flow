
import { useState, useEffect } from 'react';

interface ScrollAnimationState {
  missionVisible: boolean;
  beliefVisible: boolean;
  visionVisible: boolean;
  missionToBeliefLine: boolean;
  beliefToVisionLine: boolean;
  visionToHashLine: boolean;
  provenanceToHashTokenLine: boolean;
  hashTokenToCommitmentLine: boolean;
  commitmentToSuccessLine: boolean;
  hashGlow: boolean;
  missionGlow: boolean;
  beliefGlow: boolean;
  visionGlow: boolean;
  provenanceCardGlow: boolean;
  hashTokenCardGlow: boolean;
  commitmentCardGlow: boolean;
  joinMissionGlow: boolean;
}

export const useScrollBasedAnimation = () => {
  const [state, setState] = useState<ScrollAnimationState>({
    missionVisible: false,
    beliefVisible: false,
    visionVisible: false,
    missionToBeliefLine: false,
    beliefToVisionLine: false,
    visionToHashLine: false,
    provenanceToHashTokenLine: false,
    hashTokenToCommitmentLine: false,
    commitmentToSuccessLine: false,
    hashGlow: false,
    missionGlow: false,
    beliefGlow: false,
    visionGlow: false,
    provenanceCardGlow: false,
    hashTokenCardGlow: false,
    commitmentCardGlow: false,
    joinMissionGlow: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollProgress = scrollY / (documentHeight - windowHeight);

      // Enhanced scroll progress with debugging
      console.log('Scroll Progress:', scrollProgress.toFixed(3));

      // Progressive animation triggers with improved thresholds
      const newState: ScrollAnimationState = {
        missionVisible: scrollProgress > 0.1,
        beliefVisible: scrollProgress > 0.2,
        visionVisible: scrollProgress > 0.3,
        missionToBeliefLine: scrollProgress > 0.15,
        beliefToVisionLine: scrollProgress > 0.25,
        visionToHashLine: scrollProgress > 0.35,
        // Bottom connecting lines with earlier, more reliable triggers
        provenanceToHashTokenLine: scrollProgress > 0.35, // Reduced from 0.42
        hashTokenToCommitmentLine: scrollProgress > 0.45, // Reduced from 0.52
        commitmentToSuccessLine: scrollProgress > 0.55, // Reduced from 0.62
        hashGlow: scrollProgress > 0.35,
        // Card glow timing - only one card glows at a time
        missionGlow: scrollProgress > 0.12 && scrollProgress < 0.22,
        beliefGlow: scrollProgress > 0.22 && scrollProgress < 0.32,
        visionGlow: scrollProgress > 0.32 && scrollProgress < 0.42,
        provenanceCardGlow: scrollProgress > 0.35 && scrollProgress < 0.5, // Adjusted timing
        hashTokenCardGlow: scrollProgress > 0.45 && scrollProgress < 0.6, // Adjusted timing
        commitmentCardGlow: scrollProgress > 0.55 && scrollProgress < 0.7, // Adjusted timing
        joinMissionGlow: scrollProgress > 0.7, // Stays glowing once started
      };

      // Debug logging for bottom lines
      if (scrollProgress > 0.3) {
        console.log('Bottom lines status:', {
          provenanceToHashToken: newState.provenanceToHashTokenLine,
          hashTokenToCommitment: newState.hashTokenToCommitmentLine,
          commitmentToSuccess: newState.commitmentToSuccessLine,
          scrollProgress: scrollProgress.toFixed(3)
        });
      }

      setState(newState);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return state;
};
