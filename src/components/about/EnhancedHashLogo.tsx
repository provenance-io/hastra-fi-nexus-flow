
import React from 'react';

interface EnhancedHashLogoProps {
  shouldGlow: boolean;
}

const EnhancedHashLogo: React.FC<EnhancedHashLogoProps> = ({ shouldGlow }) => {
  return (
    <div className="flex justify-center mb-12">
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
      </div>
    </div>
  );
};

export default EnhancedHashLogo;
