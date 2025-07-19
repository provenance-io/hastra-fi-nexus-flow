
import { useState, useEffect } from 'react';

interface FlashingTextProps {
  phrases: string[];
  className?: string;
}

const FlashingText = ({ phrases, className = "" }: FlashingTextProps) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showLastBlue, setShowLastBlue] = useState(false);
  const [isSlowFading, setIsSlowFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (prevIndex >= phrases.length - 1) {
          // After all individual flashes, show only the last phrase in blue
          setShowLastBlue(true);
          setTimeout(() => {
            // Start slow fade after lingering
            setIsSlowFading(true);
            setTimeout(() => {
              setShowLastBlue(false);
              setIsSlowFading(false);
              setIsPaused(true);
              // Pause before restarting
              setTimeout(() => {
                setIsPaused(false);
              }, 1500); // 1.5 second pause
            }, 2000); // 2 second slow fade
          }, 3000); // Linger for 3 seconds in blue
          return -1; // Reset to start the cycle over
        }
        setShowLastBlue(false);
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
            ${showLastBlue && index === phrases.length - 1 && !isSlowFading
              ? 'text-[hsl(var(--hastra-teal))]'
              : showLastBlue && index === phrases.length - 1 && isSlowFading
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
