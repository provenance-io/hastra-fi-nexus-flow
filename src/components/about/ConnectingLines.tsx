
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
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          missionToBeliefLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          top: '25%',
          height: '12%',
          width: '2px',
          background: 'linear-gradient(to bottom, hsl(var(--header-glow) / 0.6), hsl(var(--header-glow) / 0.3))',
          transformOrigin: 'top',
          boxShadow: '0 0 8px hsl(var(--header-glow) / 0.4)',
        }}
      />

      {/* Belief to Vision Line */}
      <div 
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          beliefToVisionLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          top: '48%',
          height: '12%',
          width: '2px',
          background: 'linear-gradient(to bottom, hsl(var(--header-glow) / 0.6), hsl(var(--header-glow) / 0.3))',
          transformOrigin: 'top',
          boxShadow: '0 0 8px hsl(var(--header-glow) / 0.4)',
        }}
      />

      {/* Vision to HASH Line */}
      <div 
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          visionToHashLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          top: '71%',
          height: '15%',
          width: '2px',
          background: 'linear-gradient(to bottom, hsl(var(--header-glow) / 0.6), hsl(var(--header-glow) / 0.3))',
          transformOrigin: 'top',
          boxShadow: '0 0 8px hsl(var(--header-glow) / 0.4)',
        }}
      />
    </>
  );
};

export default ConnectingLines;
