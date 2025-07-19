
import { useState, useEffect } from 'react';

interface FlashingTextProps {
  phrases: string[];
  className?: string;
}

const FlashingText = ({ phrases, className = "" }: FlashingTextProps) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showAllBlue, setShowAllBlue] = useState(false);
  const [isSlowFading, setIsSlowFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (prevIndex >= phrases.length - 1) {
          // After all individual flashes, show all in blue for longer
          setShowAllBlue(true);
          setTimeout(() => {
            // Start slow fade
            setIsSlowFading(true);
            setTimeout(() => {
              setShowAllBlue(false);
              setIsSlowFading(false);
              setIsPaused(true);
              // Pause before restarting
              setTimeout(() => {
                setIsPaused(false);
              }, 1500); // 1.5 second pause
            }, 2000); // 2 second slow fade
          }, 2500); // Show blue for 2.5 seconds
          return -1; // Reset to start the cycle over
        }
        setShowAllBlue(false);
        setIsSlowFading(false);
        setIsPaused(false);
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
            ${isSlowFading ? 'transition-colors duration-2000 ease-in-out' : 'transition-colors duration-300 ease-in-out'}
            ${showAllBlue && !isSlowFading
              ? 'text-[hsl(var(--hastra-teal))]'
              : showAllBlue && isSlowFading
                ? 'text-transparent'
              : isPaused
                ? 'text-transparent'
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
