
import React from 'react';

interface EnhancedHashLogoProps {
  shouldGlow: boolean;
  circleProgress: number;
}

const EnhancedHashLogo: React.FC<EnhancedHashLogoProps> = ({ shouldGlow, circleProgress }) => {
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
        
        {/* Animated Circle that draws around the logo */}
        {circleProgress > 0 && (
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ transform: 'scale(1.4)' }}
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
            
            {/* Left semicircle */}
            <path
              d="M 50 10 A 40 40 0 0 0 50 90"
              fill="none"
              stroke="url(#circleGradient)"
              strokeWidth="2"
              filter="url(#glow)"
              strokeDasharray="125.66"
              strokeDashoffset={125.66 * (1 - Math.min(circleProgress * 2, 1))}
              style={{
                transition: 'stroke-dashoffset 0.1s ease-out',
              }}
            />
            
            {/* Right semicircle */}
            <path
              d="M 50 90 A 40 40 0 0 0 50 10"
              fill="none"
              stroke="url(#circleGradient)"
              strokeWidth="2"
              filter="url(#glow)"
              strokeDasharray="125.66"
              strokeDashoffset={125.66 * (1 - Math.min(Math.max(circleProgress * 2 - 1, 0), 1))}
              style={{
                transition: 'stroke-dashoffset 0.1s ease-out',
              }}
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default EnhancedHashLogo;
