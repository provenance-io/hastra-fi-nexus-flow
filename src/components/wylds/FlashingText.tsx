
import { useState, useEffect } from 'react';

interface FlashingTextProps {
  phrases: string[];
  className?: string;
}

const FlashingText = ({ phrases, className = "" }: FlashingTextProps) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isLastPhraseExtended, setIsLastPhraseExtended] = useState(false);
  const [isSlowFading, setIsSlowFading] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const showNextPhrase = () => {
      setActiveIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        
        // If we've reached the end, this shouldn't happen anymore
        if (nextIndex >= phrases.length) {
          return prevIndex; // Stay at current index
        }
        
        // If this is the last phrase, handle extended timing
        if (nextIndex === phrases.length - 1) {
          setIsLastPhraseExtended(true);
          // Shorter display time for last phrase (2 seconds) + slow fade
          timeout = setTimeout(() => {
            setIsSlowFading(true);
            timeout = setTimeout(() => {
              // Reset states and move to next cycle
              setIsLastPhraseExtended(false);
              setIsSlowFading(false);
              setActiveIndex(-1); // Clear before restart
              timeout = setTimeout(() => {
                setActiveIndex(0);
                timeout = setTimeout(showNextPhrase, 1000);
              }, 1500); // Pause between cycles
            }, 2000); // 2 second slow fade
          }, 2000); // Stay visible for 2 seconds
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
            ${activeIndex === index && index === phrases.length - 1 && (isLastPhraseExtended || isSlowFading)
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
