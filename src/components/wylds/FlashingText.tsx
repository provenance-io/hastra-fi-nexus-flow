
import { useState, useEffect } from 'react';

interface FlashingTextProps {
  phrases: string[];
  className?: string;
}

const FlashingText = ({ phrases, className = "" }: FlashingTextProps) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isLastPhraseExtended, setIsLastPhraseExtended] = useState(false);
  const [isSlowFading, setIsSlowFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        
        // If we've reached the last phrase
        if (nextIndex >= phrases.length) {
          setIsLastPhraseExtended(false);
          setIsSlowFading(false);
          setIsPaused(true);
          // Pause before restarting
          setTimeout(() => {
            setIsPaused(false);
          }, 1500); // 1.5 second pause
          return -1; // Reset to start the cycle over
        }
        
        // If this is the last phrase, handle extended timing
        if (nextIndex === phrases.length - 1) {
          setIsLastPhraseExtended(true);
          // Extended time for last phrase + slow fade
          setTimeout(() => {
            setIsSlowFading(true);
            setTimeout(() => {
              setIsLastPhraseExtended(false);
              setIsSlowFading(false);
            }, 2000); // 2 second slow fade
          }, 3000); // Stay visible for 3 seconds
        } else {
          setIsLastPhraseExtended(false);
          setIsSlowFading(false);
          setIsPaused(false);
        }
        
        return nextIndex;
      });
    }, 1000); // Flash each phrase for 1 second (except last one)

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <span className={className}>
      {phrases.map((phrase, index) => (
        <span 
          key={index}
          className={`
            ${isSlowFading ? 'transition-colors duration-2000 ease-in-out' : 'transition-colors duration-300 ease-in-out'}
            ${isPaused
              ? 'text-transparent'
              : activeIndex === index && index === phrases.length - 1 && (isLastPhraseExtended || isSlowFading)
                ? isSlowFading ? 'text-transparent' : 'text-[hsl(var(--hastra-teal))]'
              : activeIndex === index && index !== phrases.length - 1
                ? 'text-orange-400 animate-[flash_10s_ease-in-out]'
              : activeIndex === index && index === phrases.length - 1
                ? 'text-[hsl(var(--hastra-teal))]'
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
