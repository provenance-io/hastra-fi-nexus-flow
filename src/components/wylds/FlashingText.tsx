
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
    let timeout: NodeJS.Timeout;

    const showNextPhrase = () => {
      setActiveIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        
        // If we've reached the end, restart the cycle
        if (nextIndex >= phrases.length) {
          setIsLastPhraseExtended(false);
          setIsSlowFading(false);
          // Pause before restarting
          timeout = setTimeout(() => {
            setActiveIndex(0); // Start with first phrase
            timeout = setTimeout(showNextPhrase, 1000);
          }, 1500);
          return -1;
        }
        
        // If this is the last phrase, handle extended timing
        if (nextIndex === phrases.length - 1) {
          setIsLastPhraseExtended(true);
          // Extended time for last phrase (3 seconds) + slow fade
          timeout = setTimeout(() => {
            setIsSlowFading(true);
            timeout = setTimeout(() => {
              setIsLastPhraseExtended(false);
              setIsSlowFading(false);
              // Move to next cycle after fade completes
              timeout = setTimeout(showNextPhrase, 100);
            }, 3000); // 3 second slow fade
          }, 3000); // Stay visible for 3 seconds
        } else {
          // Regular phrases: 1 second display time
          timeout = setTimeout(showNextPhrase, 1000);
        }
        
        return nextIndex;
      });
    };

    // Start the cycle initially
    timeout = setTimeout(showNextPhrase, 1000);

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [phrases.length]);

  return (
    <span className={className}>
      {phrases.map((phrase, index) => (
        <span 
          key={index}
          className={`
            transition-colors duration-3000 ease-out
            ${isPaused
              ? 'text-transparent'
              : activeIndex === index && index === phrases.length - 1 && (isLastPhraseExtended || isSlowFading)
                ? isSlowFading ? 'text-transparent' : 'text-[hsl(var(--hastra-teal))]'
              : activeIndex === index && index !== phrases.length - 1
                ? 'text-orange-400'
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
