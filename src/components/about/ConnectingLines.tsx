
import React from 'react';

interface ConnectingLinesProps {
  missionToBeliefLine: boolean;
  beliefToVisionLine: boolean;
  visionToHashLine: boolean;
}

const ConnectingLines: React.FC<ConnectingLinesProps> = ({
  missionToBeliefLine,
  beliefToVisionLine,
  visionToHashLine,
}) => {
  return (
    <>
      {/* Mission to Belief Line */}
      <div 
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 z-40 ${
          missionToBeliefLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          top: '400px',
          height: '120px',
          width: '3px',
          background: 'linear-gradient(to bottom, hsl(var(--header-glow) / 0.8), hsl(var(--header-glow) / 0.4))',
          transformOrigin: 'top',
          boxShadow: '0 0 12px hsl(var(--header-glow) / 0.6)',
        }}
      />

      {/* Belief to Vision Line */}
      <div 
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 z-40 ${
          beliefToVisionLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          top: '800px',
          height: '120px',
          width: '3px',
          background: 'linear-gradient(to bottom, hsl(var(--header-glow) / 0.8), hsl(var(--header-glow) / 0.4))',
          transformOrigin: 'top',
          boxShadow: '0 0 12px hsl(var(--header-glow) / 0.6)',
        }}
      />

      {/* Vision to HASH Line */}
      <div 
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 z-40 ${
          visionToHashLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          top: '1200px',
          height: '150px',
          width: '3px',
          background: 'linear-gradient(to bottom, hsl(var(--header-glow) / 0.8), hsl(var(--header-glow) / 0.4))',
          transformOrigin: 'top',
          boxShadow: '0 0 12px hsl(var(--header-glow) / 0.6)',
        }}
      />
    </>
  );
};

export default ConnectingLines;
