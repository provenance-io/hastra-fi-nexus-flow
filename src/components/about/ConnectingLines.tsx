
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <>
      {/* Mission to Belief Line - Far left aligned, connecting card edges */}
      <div 
        className={`absolute transition-all duration-1000 z-40 ${
          missionToBeliefLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          left: isMobile ? '15%' : '20%',
          top: isMobile ? '310px' : '334px',
          height: isMobile ? '84px' : '96px',
          width: '2px',
          background: 'rgba(229, 218, 194, 0.8)',
          transformOrigin: 'top',
          boxShadow: '0 0 12px rgba(229, 218, 194, 0.6), 0 0 6px rgba(229, 218, 194, 0.4)',
        }}
      />

      {/* Belief to Vision Line - Far right aligned, connecting card edges */}
      <div 
        className={`absolute transition-all duration-1000 z-40 ${
          beliefToVisionLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          left: isMobile ? '85%' : '80%',
          top: isMobile ? '550px' : '591px',
          height: isMobile ? '28px' : '32px',
          width: '2px',
          background: 'rgba(229, 218, 194, 0.8)',
          transformOrigin: 'top',
          boxShadow: '0 0 12px rgba(229, 218, 194, 0.6), 0 0 6px rgba(229, 218, 194, 0.4)',
        }}
      />

      {/* Vision to HASH Line - Center aligned */}
      <div 
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 z-40 ${
          visionToHashLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          top: isMobile ? '900px' : '1018px',
          height: isMobile ? '150px' : '192px',
          width: '2px',
          background: 'rgba(229, 218, 194, 0.8)',
          transformOrigin: 'top',
          boxShadow: '0 0 12px rgba(229, 218, 194, 0.6), 0 0 6px rgba(229, 218, 194, 0.4)',
        }}
      />

      {/* Provenance to HASH Token Line - Left aligned */}
      <div 
        className={`absolute transition-all duration-1000 z-40 ${
          provenanceToHashTokenLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          left: isMobile ? '15%' : '20%',
          top: isMobile ? '1860px' : '2160px',
          height: isMobile ? '80px' : '96px',
          width: '2px',
          background: 'rgba(229, 218, 194, 0.8)',
          transformOrigin: 'top',
          boxShadow: '0 0 12px rgba(229, 218, 194, 0.6), 0 0 6px rgba(229, 218, 194, 0.4)',
        }}
      />

      {/* HASH Token to Commitment Line - Right aligned */}
      <div 
        className={`absolute transition-all duration-1000 z-40 ${
          hashTokenToCommitmentLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          left: isMobile ? '85%' : '80%',
          top: isMobile ? '2260px' : '2560px',
          height: isMobile ? '40px' : '48px',
          width: '2px',
          background: 'rgba(229, 218, 194, 0.8)',
          transformOrigin: 'top',
          boxShadow: '0 0 12px rgba(229, 218, 194, 0.6), 0 0 6px rgba(229, 218, 194, 0.4)',
        }}
      />

      {/* Commitment to Success Line - Center aligned */}
      <div 
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 z-40 ${
          commitmentToSuccessLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          top: isMobile ? '2700px' : '3100px',
          height: isMobile ? '60px' : '80px',
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
