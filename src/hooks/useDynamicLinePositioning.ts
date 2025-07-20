
import { useState, useEffect, useCallback } from 'react';

interface LinePosition {
  left: string;
  top: string;
  height: string;
}

interface LinePositions {
  missionToBeliefLine: LinePosition;
  beliefToVisionLine: LinePosition;
  visionToHashLine: LinePosition;
  provenanceToHashTokenLine: LinePosition;
  hashTokenToCommitmentLine: LinePosition;
  commitmentToSuccessLine: LinePosition;
}

export const useDynamicLinePositioning = () => {
  const [positions, setPositions] = useState<LinePositions | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const calculatePositions = useCallback(() => {
    const checkMobile = window.innerWidth <= 768;
    setIsMobile(checkMobile);

    // Get card elements by their IDs
    const missionCard = document.getElementById('mission-card');
    const beliefCard = document.getElementById('belief-card');
    const visionCard = document.getElementById('vision-card');
    const hashLogo = document.querySelector('[data-testid="hash-logo"]') as HTMLElement;
    const provenanceCard = document.querySelector('[data-testid="provenance-card"]') as HTMLElement;
    const hashTokenCard = document.querySelector('[data-testid="hash-token-card"]') as HTMLElement;
    const commitmentCard = document.querySelector('[data-testid="commitment-card"]') as HTMLElement;
    const joinMissionCard = document.querySelector('[data-testid="join-mission-card"]') as HTMLElement;

    if (!missionCard || !beliefCard || !visionCard) {
      console.log('Core cards not found, using fallback positions');
      return;
    }

    const missionRect = missionCard.getBoundingClientRect();
    const beliefRect = beliefCard.getBoundingClientRect();
    const visionRect = visionCard.getBoundingClientRect();
    const scrollY = window.scrollY;

    // Calculate dynamic positions
    const newPositions: LinePositions = {
      // Mission to Belief - connect left edges
      missionToBeliefLine: {
        left: checkMobile ? '15%' : '20%',
        top: `${missionRect.bottom + scrollY - 20}px`,
        height: `${beliefRect.top + scrollY - missionRect.bottom - scrollY + 40}px`
      },
      
      // Belief to Vision - connect right edges  
      beliefToVisionLine: {
        left: checkMobile ? '85%' : '80%',
        top: `${beliefRect.bottom + scrollY - 20}px`,
        height: `${visionRect.top + scrollY - beliefRect.bottom - scrollY + 40}px`
      },
      
      // Vision to HASH - center aligned
      visionToHashLine: {
        left: '50%',
        top: `${visionRect.bottom + scrollY + 20}px`,
        height: hashLogo ? `${hashLogo.getBoundingClientRect().top + scrollY - visionRect.bottom - scrollY - 40}px` : '200px'
      },
      
      // Bottom section lines with fallback positions
      provenanceToHashTokenLine: {
        left: checkMobile ? '15%' : '20%',
        top: provenanceCard ? `${provenanceCard.getBoundingClientRect().bottom + scrollY - 20}px` : '1800px',
        height: hashTokenCard && provenanceCard ? 
          `${hashTokenCard.getBoundingClientRect().top + scrollY - provenanceCard.getBoundingClientRect().bottom - scrollY + 40}px` : 
          '120px'
      },
      
      hashTokenToCommitmentLine: {
        left: checkMobile ? '85%' : '80%',
        top: hashTokenCard ? `${hashTokenCard.getBoundingClientRect().bottom + scrollY - 20}px` : '2400px',
        height: commitmentCard && hashTokenCard ? 
          `${commitmentCard.getBoundingClientRect().top + scrollY - hashTokenCard.getBoundingClientRect().bottom - scrollY + 40}px` : 
          '120px'
      },
      
      commitmentToSuccessLine: {
        left: '50%',
        top: commitmentCard ? `${commitmentCard.getBoundingClientRect().bottom + scrollY + 20}px` : '2700px',
        height: joinMissionCard && commitmentCard ? 
          `${joinMissionCard.getBoundingClientRect().top + scrollY - commitmentCard.getBoundingClientRect().bottom - scrollY - 40}px` : 
          '180px'
      }
    };

    console.log('Calculated line positions:', newPositions);
    setPositions(newPositions);
  }, []);

  useEffect(() => {
    // Initial calculation
    const timer = setTimeout(calculatePositions, 100);
    
    // Recalculate on scroll and resize
    const handleScroll = () => {
      requestAnimationFrame(calculatePositions);
    };
    
    const handleResize = () => {
      setTimeout(calculatePositions, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [calculatePositions]);

  return { positions, isMobile };
};
