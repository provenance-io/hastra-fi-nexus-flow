
import { useState, useEffect } from 'react';

interface ScrollAnimationState {
  missionVisible: boolean;
  beliefVisible: boolean;
  visionVisible: boolean;
  missionToBeliefLine: boolean;
  beliefToVisionLine: boolean;
  visionToHashLine: boolean;
  hashGlow: boolean;
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
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollProgress = scrollY / (documentHeight - windowHeight);

      // Progressive animation triggers based on scroll position
      const newState: ScrollAnimationState = {
        missionVisible: scrollProgress > 0.2,
        beliefVisible: scrollProgress > 0.35,
        visionVisible: scrollProgress > 0.5,
        missionToBeliefLine: scrollProgress > 0.4,
        beliefToVisionLine: scrollProgress > 0.55,
        visionToHashLine: scrollProgress > 0.7,
        hashGlow: scrollProgress > 0.8,
      };

      setState(newState);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return state;
};
