
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
        
        // If we've reached the end, reset to start
        if (nextIndex >= phrases.length) {
          // Reset all states and start over
          setIsLastPhraseExtended(false);
          setIsSlowFading(false);
          timeout = setTimeout(() => {
            setActiveIndex(0);
            timeout = setTimeout(showNextPhrase, 1000);
          }, 1500); // Pause between cycles
          return -1; // Clear display
        }
        
        // If this is the last phrase, handle extended timing
        if (nextIndex === phrases.length - 1) {
          setIsLastPhraseExtended(true);
          // Display for 2 seconds, then fade for 1 second
          timeout = setTimeout(() => {
            setIsSlowFading(true);
            timeout = setTimeout(() => {
              // Move to next (which will trigger reset logic above)
              showNextPhrase();
            }, 1000); // 1 second fade (matches CSS transition)
          }, 2000); // Stay visible for 2 seconds
        } else {
          // Regular phrases: 1 second display time
          timeout = setTimeout(showNextPhrase, 1000);
        }
        
        return nextIndex;
      });
    };

    // Start the cycle initially
    timeout = setTimeout(() => {
      setActiveIndex(0);
      timeout = setTimeout(showNextPhrase, 1000);
    }, 1000);

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
            transition-colors duration-1000 ease-out
            ${activeIndex === index 
              ? (index === phrases.length - 1 
                ? (isSlowFading ? 'text-transparent' : 'text-[hsl(var(--hastra-teal))]')
                : 'text-orange-400'
              )
              : 'text-transparent'
            }
          `}
          style={{
            textShadow: activeIndex === index ? 
              (index === phrases.length - 1 ? 
                '0 0 8px hsl(var(--hastra-teal) / 0.5), 0 0 16px hsl(var(--hastra-teal) / 0.2)' :
                '0 0 8px rgb(251 146 60 / 0.5), 0 0 16px rgb(251 146 60 / 0.2)'
              ) : 
              'none'
          }}
        >
          {phrase}
        </span>
      ))}
    </span>
  );
};

export default FlashingText;
