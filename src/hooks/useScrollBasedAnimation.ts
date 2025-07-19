
import { useState, useEffect } from 'react';

interface ScrollAnimationState {
  missionVisible: boolean;
  beliefVisible: boolean;
  visionVisible: boolean;
  missionToBeliefLine: boolean;
  beliefToVisionLine: boolean;
  visionToHashLine: boolean;
  hashGlow: boolean;
  missionGlow: boolean;
  beliefGlow: boolean;
  visionGlow: boolean;
}

export const useScrollBasedAnimation = () => {
  const [state, setState] = useState<ScrollAnimationState>({
    missionVisible: false,
    beliefVisible: false,
    visionVisible: false,
    missionToBeliefLine: false,
    beliefToVisionLine: false,
    visionToHashLine: false,
    hashGlow: false,
    missionGlow: false,
    beliefGlow: false,
    visionGlow: false,
  });

  useEffect(() => {
    const handleScroll = () => {
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
        hashGlow: scrollProgress > 0.35, // HASH glows when line reaches it
        // Card glow timing - each card glows during its reading window
        missionGlow: scrollProgress > 0.12 && scrollProgress < 0.25,
        beliefGlow: scrollProgress > 0.22 && scrollProgress < 0.35,
        visionGlow: scrollProgress > 0.32 && scrollProgress < 0.45,
      };

      setState(newState);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return state;
};
