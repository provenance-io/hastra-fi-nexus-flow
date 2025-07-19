
import React, { useState } from 'react';

interface AnimatedCardProps {
  title: string;
  children: React.ReactNode;
  isVisible: boolean;
  cardId: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  title, 
  children, 
  isVisible, 
  cardId 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      id={cardId}
      className={`card-gradient rounded-3xl p-8 md:p-12 card-hover animate-fade-in relative transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${
        isHovered ? 'shadow-2xl shadow-header-glow/20 border-header-glow/40' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle glow overlay on hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-br from-header-glow/5 to-crypto-accent/5 rounded-3xl pointer-events-none opacity-0 animate-fade-in" 
             style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }} />
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
