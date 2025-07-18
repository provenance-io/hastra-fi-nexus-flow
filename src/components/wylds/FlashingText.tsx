
import { useState, useEffect } from 'react';

interface FlashingTextProps {
  phrases: string[];
  className?: string;
}

const FlashingText = ({ phrases, className = "" }: FlashingTextProps) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (prevIndex >= phrases.length - 1) {
          return -1; // Reset to no flash
        }
        return prevIndex + 1;
      });
    }, 1000); // Flash each phrase for 1 second

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <span className={className}>
      {phrases.map((phrase, index) => (
        <span 
          key={index}
          className={`
            transition-colors duration-300 ease-in-out
            ${activeIndex === index 
              ? 'text-orange-400 animate-[flash_1s_ease-in-out]' 
              : index === 0 ? 'text-header-glow'
              : index === 1 ? 'text-crypto-accent'
              : index === 2 ? 'text-header-glow'
              : 'text-gradient'
            }
          `}
        >
          {phrase}
        </span>
      ))}
    </span>
  );
};

export default FlashingText;
