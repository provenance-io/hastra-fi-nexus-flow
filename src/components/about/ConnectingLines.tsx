
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
          top: '303px', // Down by 1px
          height: '32px', // Just a tad smaller
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
          left: '80%', // Far right
          top: '618px', // Down by 1px
          height: '32px', // Same length as first line
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
          top: '1044px', // Shifted up by another 10px
          height: '192px', // Reduced by 1px
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
