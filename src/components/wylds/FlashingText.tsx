
import { useState, useEffect } from 'react';

interface FlashingTextProps {
  phrases: string[];
  className?: string;
}

const FlashingText = ({ phrases, className = "" }: FlashingTextProps) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showAllBlue, setShowAllBlue] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (prevIndex >= phrases.length - 1) {
          // After all individual flashes, show all in blue
          setShowAllBlue(true);
          setTimeout(() => {
            setShowAllBlue(false);
          }, 1000); // Show all blue for 1 second
          return -1; // Reset to start the cycle over
        }
        setShowAllBlue(false);
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
            ${showAllBlue 
              ? 'text-[hsl(var(--hastra-teal))]'
              : activeIndex === index 
                ? 'text-orange-400 animate-[flash_10s_ease-in-out]' 
                : 'text-transparent'
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
