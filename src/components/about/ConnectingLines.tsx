
import React, { useState, useEffect } from 'react';

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
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setScreenSize('mobile');
      } else if (width <= 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  // Responsive positioning based on screen size
  const getLineStyles = () => {
    const positions = {
      mobile: {
        leftAlign: '8%',
        rightAlign: '92%',
        centerAlign: '50%',
        missionToBelief: { top: '320px', height: '100px' },
        beliefToVision: { top: '720px', height: '100px' },
        visionToHash: { top: '1120px', height: '180px' },
        provenanceToHashToken: { top: '1900px', height: '120px' },
        hashTokenToCommitment: { top: '2450px', height: '120px' },
        commitmentToSuccess: { top: '2800px', height: '180px' },
      },
      tablet: {
        leftAlign: '12%',
        rightAlign: '88%',
        centerAlign: '50%',
        missionToBelief: { top: '340px', height: '110px' },
        beliefToVision: { top: '750px', height: '110px' },
        visionToHash: { top: '1160px', height: '200px' },
        provenanceToHashToken: { top: '2000px', height: '130px' },
        hashTokenToCommitment: { top: '2550px', height: '130px' },
        commitmentToSuccess: { top: '2950px', height: '200px' },
      },
      desktop: {
        leftAlign: '18%',
        rightAlign: '82%',
        centerAlign: '50%',
        missionToBelief: { top: '360px', height: '120px' },
        beliefToVision: { top: '780px', height: '120px' },
        visionToHash: { top: '1200px', height: '220px' },
        provenanceToHashToken: { top: '2100px', height: '140px' },
        hashTokenToCommitment: { top: '2650px', height: '140px' },
        commitmentToSuccess: { top: '3050px', height: '220px' },
      },
    };

    return positions[screenSize];
  };

  const styles = getLineStyles();

  return (
    <>
      {/* Mission to Belief Line */}
      <div 
        className={`absolute transition-all duration-1000 z-40 ${
          missionToBeliefLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          left: styles.leftAlign,
          top: styles.missionToBelief.top,
          height: styles.missionToBelief.height,
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
          left: styles.rightAlign,
          top: styles.beliefToVision.top,
          height: styles.beliefToVision.height,
          width: '2px',
          background: 'rgba(229, 218, 194, 0.8)',
          transformOrigin: 'top',
          boxShadow: '0 0 12px rgba(229, 218, 194, 0.6), 0 0 6px rgba(229, 218, 194, 0.4)',
        }}
      />

      {/* Vision to HASH Line */}
      <div 
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 z-40 ${
          visionToHashLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          top: styles.visionToHash.top,
          height: styles.visionToHash.height,
          width: '2px',
          background: 'rgba(229, 218, 194, 0.8)',
          transformOrigin: 'top',
          boxShadow: '0 0 12px rgba(229, 218, 194, 0.6), 0 0 6px rgba(229, 218, 194, 0.4)',
        }}
      />

      {/* Provenance to HASH Token Line */}
      <div 
        className={`absolute transition-all duration-2000 ease-out z-40 ${
          provenanceToHashTokenLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          left: styles.leftAlign,
          top: styles.provenanceToHashToken.top,
          height: styles.provenanceToHashToken.height,
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
          left: styles.rightAlign,
          top: styles.hashTokenToCommitment.top,
          height: styles.hashTokenToCommitment.height,
          width: '2px',
          background: 'rgba(229, 218, 194, 0.8)',
          transformOrigin: 'top',
          boxShadow: '0 0 12px rgba(229, 218, 194, 0.6), 0 0 6px rgba(229, 218, 194, 0.4)',
        }}
      />

      {/* Commitment to Success Line */}
      <div 
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-2000 ease-out z-40 ${
          commitmentToSuccessLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          top: styles.commitmentToSuccess.top,
          height: styles.commitmentToSuccess.height,
          width: '2px',
          background: 'rgba(229, 218, 194, 0.8)',
          transformOrigin: 'top',
          boxShadow: '0 0 12px rgba(229, 218, 194, 0.6), 0 0 6px rgba(229, 218, 194, 0.4)',
        }}
      />
    </>
  );
};

export default ConnectingLines;
