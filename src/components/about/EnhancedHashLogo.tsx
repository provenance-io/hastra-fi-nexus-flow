
import React from 'react';

interface EnhancedHashLogoProps {
  shouldGlow: boolean;
  showCircle: boolean;
}

const EnhancedHashLogo: React.FC<EnhancedHashLogoProps> = ({ shouldGlow, showCircle }) => {
  return (
    <div id="hash-logo" className="flex justify-center mb-12">
      <div className="relative">
        <img 
          src="/lovable-uploads/9da758ec-2299-4fe7-82e4-e7fb95e9cdb8.png" 
          alt="HASH Logo" 
          className={`w-48 h-48 md:w-64 md:h-64 rounded-full object-cover aspect-square transition-all duration-1000 ${
            shouldGlow ? 'scale-110' : 'scale-100'
          }`}
          style={{
            filter: shouldGlow 
              ? 'drop-shadow(0 0 20px rgba(229, 218, 194, 0.6)) drop-shadow(0 0 40px rgba(229, 218, 194, 0.3))'
              : 'drop-shadow(0 0 6px rgba(229, 218, 194, 0.2)) drop-shadow(0 0 12px rgba(229, 218, 194, 0.1))',
            animation: shouldGlow ? 'logoGlow 3s ease-in-out infinite' : 'logoGlow 4s ease-in-out infinite',
          }}
        />
        
        {/* Enhanced glow ring effect */}
        {shouldGlow && (
          <div 
            className="absolute inset-0 rounded-full border-2 pointer-events-none opacity-0 animate-fade-in"
            style={{
              borderColor: 'rgba(229, 218, 194, 0.5)',
              boxShadow: '0 0 30px rgba(229, 218, 194, 0.4), inset 0 0 20px rgba(229, 218, 194, 0.1)',
              animation: 'pulse-light 2s ease-in-out infinite',
              animationFillMode: 'forwards',
            }}
          />
        )}
        
        {/* Animated Circles that draw around the logo */}
        {showCircle && (
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ transform: 'scale(1.02)' }}
            viewBox="0 0 100 100"
          >
            <defs>
              <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(229, 218, 194, 0.8)" />
                <stop offset="50%" stopColor="rgba(229, 218, 194, 0.6)" />
                <stop offset="100%" stopColor="rgba(229, 218, 194, 0.8)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Half circle starting from top, traveling halfway counter-clockwise */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="url(#circleGradient)"
              strokeWidth="0.5"
              filter="url(#glow)"
              strokeDasharray="125.66 251.33"
              strokeDashoffset="125.66"
              transform="rotate(-90 50 50)"
              style={{
                animation: 'drawCircle 2s ease-out forwards',
              }}
            />
          </svg>
        )}
        {showCircle && (
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ transform: 'scale(1.02) scaleX(-1)' }}
            viewBox="0 0 100 100"
          >
            <defs>
              <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(229, 218, 194, 0.8)" />
                <stop offset="50%" stopColor="rgba(229, 218, 194, 0.6)" />
                <stop offset="100%" stopColor="rgba(229, 218, 194, 0.8)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Half circle starting from top, traveling halfway counter-clockwise */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="url(#circleGradient)"
              strokeWidth="0.5"
              filter="url(#glow)"
              strokeDasharray="125.66 251.33"
              strokeDashoffset="125.66"
              transform="rotate(-90 50 50)"
              style={{
                animation: 'drawCircle 2s ease-out forwards',
              }}
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default EnhancedHashLogo;
