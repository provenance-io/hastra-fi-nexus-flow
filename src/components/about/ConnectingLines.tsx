
import React from 'react';
import { useDynamicLinePositioning } from '@/hooks/useDynamicLinePositioning';

interface ConnectingLinesProps {
  missionToBeliefLine: boolean;
  beliefToVisionLine: boolean;
  visionToHashLine: boolean;
  provenanceToHashTokenLine: boolean;
  hashTokenToCommitmentLine: boolean;
  commitmentToSuccessLine: boolean;
}

const ConnectingLines: React.FC<ConnectingLinesProps> = ({
  missionToBeliefLine,
  beliefToVisionLine,
  visionToHashLine,
  provenanceToHashTokenLine,
  hashTokenToCommitmentLine,
  commitmentToSuccessLine,
}) => {
  const { positions, isMobile } = useDynamicLinePositioning();

  // Fallback positions if dynamic calculation fails
  const getFallbackStyle = (lineType: string) => {
    const fallbacks = {
      missionToBelief: {
        left: isMobile ? '15%' : '20%',
        top: isMobile ? '280px' : '304px',
        height: isMobile ? '84px' : '96px',
      },
      beliefToVision: {
        left: isMobile ? '85%' : '80%',
        top: isMobile ? '641px' : '682px',
        height: isMobile ? '84px' : '96px',
      },
      visionToHash: {
        left: '50%',
        top: isMobile ? '1054px' : '1172px',
        height: isMobile ? '173px' : '221px',
      },
      provenanceToHashToken: {
        left: isMobile ? '15%' : '20%',
        top: isMobile ? '1812px' : '2112px',
        height: isMobile ? '103px' : '123px',
      },
      hashTokenToCommitment: {
        left: isMobile ? '85%' : '80%',
        top: isMobile ? '2370px' : '2670px',
        height: isMobile ? '100px' : '121px',
      },
      commitmentToSuccess: {
        left: '50%',
        top: isMobile ? '2683px' : '3083px',
        height: isMobile ? '162px' : '216px',
      }
    };
    return fallbacks[lineType as keyof typeof fallbacks];
  };

  const lineBaseStyles = {
    width: '2px',
    background: 'rgba(229, 218, 194, 0.8)',
    transformOrigin: 'top',
    boxShadow: '0 0 12px rgba(229, 218, 194, 0.6), 0 0 6px rgba(229, 218, 194, 0.4)',
  };
  
  return (
    <>
      {/* Mission to Belief Line */}
      <div 
        className={`absolute transition-all duration-1000 z-40 ${
          missionToBeliefLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          ...(positions ? positions.missionToBeliefLine : getFallbackStyle('missionToBelief')),
          ...lineBaseStyles,
        }}
      />

      {/* Belief to Vision Line */}
      <div 
        className={`absolute transition-all duration-1000 z-40 ${
          beliefToVisionLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          ...(positions ? positions.beliefToVisionLine : getFallbackStyle('beliefToVision')),
          ...lineBaseStyles,
        }}
      />

      {/* Vision to HASH Line */}
      <div 
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 z-40 ${
          visionToHashLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          ...(positions ? { 
            left: positions.visionToHashLine.left, 
            top: positions.visionToHashLine.top, 
            height: positions.visionToHashLine.height 
          } : getFallbackStyle('visionToHash')),
          ...lineBaseStyles,
        }}
      />

      {/* Provenance to HASH Token Line - Enhanced with debugging */}
      <div 
        className={`absolute transition-all duration-2000 ease-out z-50 ${
          provenanceToHashTokenLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          ...(positions ? positions.provenanceToHashTokenLine : getFallbackStyle('provenanceToHashToken')),
          ...lineBaseStyles,
        }}
        data-testid="provenance-hash-line"
      />

      {/* HASH Token to Commitment Line - Enhanced with debugging */}
      <div 
        className={`absolute transition-all duration-2000 ease-out z-50 ${
          hashTokenToCommitmentLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          ...(positions ? positions.hashTokenToCommitmentLine : getFallbackStyle('hashTokenToCommitment')),
          ...lineBaseStyles,
        }}
        data-testid="hash-commitment-line"
      />

      {/* Commitment to Success Line - Enhanced with debugging */}
      <div 
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-2000 ease-out z-50 ${
          commitmentToSuccessLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          ...(positions ? { 
            left: positions.commitmentToSuccessLine.left, 
            top: positions.commitmentToSuccessLine.top, 
            height: positions.commitmentToSuccessLine.height 
          } : getFallbackStyle('commitmentToSuccess')),
          ...lineBaseStyles,
        }}
        data-testid="commitment-success-line"
      />

      {/* Debug indicator - shows when bottom lines should be visible */}
      {process.env.NODE_ENV === 'development' && (
        <div 
          className="fixed top-4 right-4 bg-black/80 text-white p-2 rounded text-xs z-50"
          style={{ fontSize: '10px' }}
        >
          Lines: P→H: {provenanceToHashTokenLine ? '✓' : '✗'} | 
          H→C: {hashTokenToCommitmentLine ? '✓' : '✗'} | 
          C→S: {commitmentToSuccessLine ? '✓' : '✗'}
        </div>
      )}
    </>
  );
};

export default ConnectingLines;
