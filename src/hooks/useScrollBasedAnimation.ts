
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
  shortTermToJoinLine: boolean;
  hashGlow: boolean;
  hashCircleVisible: boolean;
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
    shortTermToJoinLine: false,
    hashGlow: false,
    hashCircleVisible: false,
    missionGlow: false,
    beliefGlow: false,
    visionGlow: false,
    provenanceCardGlow: false,
    hashTokenCardGlow: false,
    commitmentCardGlow: false,
    joinMissionGlow: false,
  });

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const scrollProgress = scrollY / (documentHeight - windowHeight);

          // Progressive animation triggers based on scroll position
          const newState: ScrollAnimationState = {
            missionVisible: scrollProgress > 0.1,
            beliefVisible: scrollProgress > 0.2,
            visionVisible: scrollProgress > 0.3,
            missionToBeliefLine: scrollProgress > 0.15,
            beliefToVisionLine: scrollProgress > 0.25,
            visionToHashLine: scrollProgress > 0.35,
            // New bottom connecting lines with earlier triggers for better visibility
            provenanceToHashTokenLine: scrollProgress > 0.42,
            hashTokenToCommitmentLine: scrollProgress > 0.52,
            commitmentToSuccessLine: scrollProgress > 0.62,
            shortTermToJoinLine: scrollProgress > 0.72,
            hashGlow: scrollProgress > 0.35, // HASH glows when line reaches it
            hashCircleVisible: scrollProgress > 0.35, // Circle triggers when line reaches logo
            // Card glow timing - only one card glows at a time
            missionGlow: scrollProgress > 0.12 && scrollProgress < 0.22,
            beliefGlow: scrollProgress > 0.22 && scrollProgress < 0.32,
            visionGlow: scrollProgress > 0.32 && scrollProgress < 0.42,
            provenanceCardGlow: scrollProgress > 0.4 && scrollProgress < 0.55,
            hashTokenCardGlow: scrollProgress > 0.5 && scrollProgress < 0.65,
            commitmentCardGlow: scrollProgress > 0.6 && scrollProgress < 0.75,
            joinMissionGlow: scrollProgress > 0.75, // Stays glowing once started
          };

          setState(newState);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return state;
};
