
import React, { useState, useEffect, useRef } from 'react';

interface ConnectingLinesProps {
  missionToBeliefLine: boolean;
  beliefToVisionLine: boolean;
  visionToHashLine: boolean;
  provenanceToHashTokenLine: boolean;
  hashTokenToCommitmentLine: boolean;
  commitmentToSuccessLine: boolean;
}

interface LinePosition {
  left: string;
  top: string;
  height: string;
}

const ConnectingLines: React.FC<ConnectingLinesProps> = ({
  missionToBeliefLine,
  beliefToVisionLine,
  visionToHashLine,
  provenanceToHashTokenLine,
  hashTokenToCommitmentLine,
  commitmentToSuccessLine,
}) => {
  const [linePositions, setLinePositions] = useState<{
    missionToBelief: LinePosition;
    beliefToVision: LinePosition;
    visionToHash: LinePosition;
    provenanceToHashToken: LinePosition;
    hashTokenToCommitment: LinePosition;
    commitmentToSuccess: LinePosition;
  }>({
    missionToBelief: { left: '20%', top: '304px', height: '96px' },
    beliefToVision: { left: '80%', top: '682px', height: '96px' },
    visionToHash: { left: '50%', top: '1172px', height: '221px' },
    provenanceToHashToken: { left: '20%', top: '2112px', height: '123px' },
    hashTokenToCommitment: { left: '80%', top: '2670px', height: '121px' },
    commitmentToSuccess: { left: '50%', top: '3083px', height: '216px' },
  });

  useEffect(() => {
    const updateLinePositions = () => {
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;
      
      // Get actual card positions
      const missionCard = document.getElementById('mission-card');
      const beliefCard = document.getElementById('belief-card');
      const visionCard = document.getElementById('vision-card');
      
      if (!missionCard || !beliefCard || !visionCard) return;
      
      const missionRect = missionCard.getBoundingClientRect();
      const beliefRect = beliefCard.getBoundingClientRect();
      const visionRect = visionCard.getBoundingClientRect();
      
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Calculate dynamic positions based on actual card positions
      const containerWidth = window.innerWidth;
      const leftAlign = isMobile ? '10%' : isTablet ? '15%' : '18%';
      const rightAlign = isMobile ? '90%' : isTablet ? '85%' : '82%';
      const centerAlign = '50%';
      
      // Mission to Belief line
      const missionBottom = missionRect.bottom + scrollTop;
      const beliefTop = beliefRect.top + scrollTop;
      const missionToBeliefHeight = Math.max(beliefTop - missionBottom - 20, 40);
      
      // Belief to Vision line  
      const beliefBottom = beliefRect.bottom + scrollTop;
      const visionTop = visionRect.top + scrollTop;
      const beliefToVisionHeight = Math.max(visionTop - beliefBottom - 20, 40);
      
      // Vision to Hash line (estimate based on scroll position)
      const visionBottom = visionRect.bottom + scrollTop;
      const estimatedHashTop = visionBottom + (isMobile ? 150 : 200);
      const visionToHashHeight = isMobile ? 150 : 200;
      
      // Estimate remaining lines based on proportional spacing
      const sectionSpacing = isMobile ? 300 : 400;
      
      setLinePositions({
        missionToBelief: {
          left: leftAlign,
          top: `${missionBottom + 10}px`,
          height: `${missionToBeliefHeight}px`
        },
        beliefToVision: {
          left: rightAlign,
          top: `${beliefBottom + 10}px`,
          height: `${beliefToVisionHeight}px`
        },
        visionToHash: {
          left: centerAlign,
          top: `${visionBottom + 20}px`,
          height: `${visionToHashHeight}px`
        },
        provenanceToHashToken: {
          left: leftAlign,
          top: `${estimatedHashTop + sectionSpacing}px`,
          height: `${isMobile ? 80 : 100}px`
        },
        hashTokenToCommitment: {
          left: rightAlign,
          top: `${estimatedHashTop + sectionSpacing * 1.5}px`,
          height: `${isMobile ? 80 : 100}px`
        },
        commitmentToSuccess: {
          left: centerAlign,
          top: `${estimatedHashTop + sectionSpacing * 2}px`,
          height: `${isMobile ? 120 : 150}px`
        }
      });
    };

    // Initial calculation
    updateLinePositions();
    
    // Update on resize and scroll
    window.addEventListener('resize', updateLinePositions);
    window.addEventListener('scroll', updateLinePositions);
    
    // Also update after a short delay to ensure cards are rendered
    const timer = setTimeout(updateLinePositions, 100);
    
    return () => {
      window.removeEventListener('resize', updateLinePositions);
      window.removeEventListener('scroll', updateLinePositions);
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <>
      {/* Mission to Belief Line */}
      <div 
        className={`absolute transition-all duration-1000 z-40 ${
          missionToBeliefLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          left: linePositions.missionToBelief.left,
          top: linePositions.missionToBelief.top,
          height: linePositions.missionToBelief.height,
          width: '2px',
          background: 'rgba(229, 218, 194, 0.8)',
          transformOrigin: 'top',
          boxShadow: '0 0 12px rgba(229, 218, 194, 0.6), 0 0 6px rgba(229, 218, 194, 0.4)',
        }}
      />

      {/* Belief to Vision Line */}
      <div 
        className={`absolute transition-all duration-1000 z-40 ${
          beliefToVisionLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          left: linePositions.beliefToVision.left,
          top: linePositions.beliefToVision.top,
          height: linePositions.beliefToVision.height,
          width: '2px',
          background: 'rgba(229, 218, 194, 0.8)',
          transformOrigin: 'top',
          boxShadow: '0 0 12px rgba(229, 218, 194, 0.6), 0 0 6px rgba(229, 218, 194, 0.4)',
        }}
      />

      {/* Vision to HASH Line */}
      <div 
        className={`absolute transition-all duration-1000 z-40 ${
          visionToHashLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          left: linePositions.visionToHash.left,
          top: linePositions.visionToHash.top,
          height: linePositions.visionToHash.height,
          width: '2px',
          background: 'rgba(229, 218, 194, 0.8)',
          transformOrigin: 'top',
          boxShadow: '0 0 12px rgba(229, 218, 194, 0.6), 0 0 6px rgba(229, 218, 194, 0.4)',
          transform: linePositions.visionToHash.left === '50%' ? 'translateX(-50%)' : 'none',
        }}
      />

      {/* Provenance to HASH Token Line */}
      <div 
        className={`absolute transition-all duration-2000 ease-out z-40 ${
          provenanceToHashTokenLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          left: linePositions.provenanceToHashToken.left,
          top: linePositions.provenanceToHashToken.top,
          height: linePositions.provenanceToHashToken.height,
          width: '2px',
          background: 'rgba(229, 218, 194, 0.8)',
          transformOrigin: 'top',
          boxShadow: '0 0 12px rgba(229, 218, 194, 0.6), 0 0 6px rgba(229, 218, 194, 0.4)',
        }}
      />

      {/* HASH Token to Commitment Line */}
      <div 
        className={`absolute transition-all duration-2000 ease-out z-40 ${
          hashTokenToCommitmentLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          left: linePositions.hashTokenToCommitment.left,
          top: linePositions.hashTokenToCommitment.top,
          height: linePositions.hashTokenToCommitment.height,
          width: '2px',
          background: 'rgba(229, 218, 194, 0.8)',
          transformOrigin: 'top',
          boxShadow: '0 0 12px rgba(229, 218, 194, 0.6), 0 0 6px rgba(229, 218, 194, 0.4)',
        }}
      />

      {/* Commitment to Success Line */}
      <div 
        className={`absolute transition-all duration-2000 ease-out z-40 ${
          commitmentToSuccessLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          left: linePositions.commitmentToSuccess.left,
          top: linePositions.commitmentToSuccess.top,
          height: linePositions.commitmentToSuccess.height,
          width: '2px',
          background: 'rgba(229, 218, 194, 0.8)',
          transformOrigin: 'top',
          boxShadow: '0 0 12px rgba(229, 218, 194, 0.6), 0 0 6px rgba(229, 218, 194, 0.4)',
          transform: linePositions.commitmentToSuccess.left === '50%' ? 'translateX(-50%)' : 'none',
        }}
      />
    </>
  );
};

export default ConnectingLines;
