
import React, { useState } from 'react';

interface AnimatedCardProps {
  title: string;
  children: React.ReactNode;
  isVisible: boolean;
  cardId: string;
  shouldGlow: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  title, 
  children, 
  isVisible, 
  cardId,
  shouldGlow 
}) => {

  return (
    <div 
      id={cardId}
      className={`card-gradient rounded-3xl p-8 md:p-12 card-hover animate-fade-in relative transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${
        shouldGlow ? 'shadow-2xl border-2' : 'border border-transparent'
      }`}
      style={{
        borderColor: shouldGlow ? 'rgba(229, 218, 194, 0.4)' : 'transparent',
        boxShadow: shouldGlow ? '0 0 20px rgba(229, 218, 194, 0.3), 0 0 40px rgba(229, 218, 194, 0.15)' : undefined,
      }}
    >
      {/* Subtle glow overlay when glowing */}
      {shouldGlow && (
        <div className="absolute inset-0 rounded-3xl pointer-events-none" 
             style={{ background: 'linear-gradient(to bottom right, rgba(229, 218, 194, 0.08), rgba(229, 218, 194, 0.03))' }} />
      )}
      
      <div className="relative z-10">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground/90">{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AnimatedCard;
