
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
      {/* Mission to Belief Line - Far left aligned, connecting card edges */}
      <div 
        className={`absolute transition-all duration-1000 z-40 ${
          missionToBeliefLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          left: '20%', // Far left
          top: '330px', // Moved up ~2 inches
          height: '32px', // Just a tad smaller
          width: '3px',
          background: 'linear-gradient(to bottom, hsl(var(--header-glow) / 0.8), hsl(var(--header-glow) / 0.4))',
          transformOrigin: 'top',
          boxShadow: '0 0 12px hsl(var(--header-glow) / 0.6)',
        }}
      />

      {/* Belief to Vision Line - Far right aligned, connecting card edges */}
      <div 
        className={`absolute transition-all duration-1000 z-40 ${
          beliefToVisionLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          left: '80%', // Far right
          top: '590px', // Moved up by same amount (190px)
          height: '32px', // Same length as first line
          width: '3px',
          background: 'linear-gradient(to bottom, hsl(var(--header-glow) / 0.8), hsl(var(--header-glow) / 0.4))',
          transformOrigin: 'top',
          boxShadow: '0 0 12px hsl(var(--header-glow) / 0.6)',
        }}
      />

      {/* Vision to HASH Line - Center aligned */}
      <div 
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 z-40 ${
          visionToHashLine ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          top: '1100px', // End of Vision card
          height: '200px', // Distance to HASH section
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
