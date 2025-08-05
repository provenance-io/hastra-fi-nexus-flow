import HastraLogo from "@/components/HastraLogo";
import { useState } from "react";

const SendIt = () => {
  const [isPressed, setIsPressed] = useState(false);
  
  const playChaChing = () => {
    // Create audio element and play cha-ching sound
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+Dsr2ASBkCa5+7Qfj0MIXHF8+OYSA');
    audio.volume = 0.3;
    audio.play().catch(() => {
      // Fallback: create a simple beep if audio fails
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
      oscillator.frequency.setValueAtTime(600, audioCtx.currentTime + 0.1);
      oscillator.frequency.setValueAtTime(400, audioCtx.currentTime + 0.2);
      
      gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
      
      oscillator.start(audioCtx.currentTime);
      oscillator.stop(audioCtx.currentTime + 0.3);
    });
  };

  const handleClick = () => {
    setIsPressed(true);
    playChaChing();
    setTimeout(() => setIsPressed(false), 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-muted/30 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center space-y-8">
        {/* Secret page title */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient tracking-tight">
            Send It! 🚀
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            You found the secret stash! Click the magic button below...
          </p>
        </div>

        {/* Giant Easy Button Style */}
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className={`
              relative group
              transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
              ${isPressed ? 'scale-98' : 'hover:scale-105 active:scale-98'}
              focus:outline-none
              filter drop-shadow-2xl
            `}
            aria-label="Send it! Easy button"
          >
            {/* Enhanced Button Base Structure */}
            <div className="relative">
              {/* Deep Shadow Layer */}
              <div className={`
                absolute inset-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 
                bg-gradient-to-b from-gray-800 via-gray-900 to-black 
                rounded-full blur-lg opacity-40
                transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${isPressed ? 'scale-95 opacity-60' : 'scale-100'}
              `}></div>
              
              {/* Interactive Base Layer */}
              <div className={`
                relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 
                bg-gradient-to-b from-gray-300 via-gray-400 to-gray-600
                rounded-full border-4 border-gray-700
                transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${isPressed 
                  ? 'shadow-[inset_0_8px_32px_rgba(0,0,0,0.6),0_4px_16px_rgba(0,0,0,0.4)] transform translate-y-1' 
                  : 'shadow-[0_16px_32px_rgba(0,0,0,0.4),0_8px_16px_rgba(0,0,0,0.2)] transform translate-y-0'
                }
              `}>
                
                {/* Enhanced Green Button Top */}
                <div className={`
                  absolute transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                  ${isPressed 
                    ? 'top-6 left-3 right-3 bottom-4' 
                    : 'top-2 left-2 right-2 bottom-8'
                  }
                  bg-gradient-to-b rounded-full border-2 border-green-700
                  flex flex-col items-center justify-center
                  ${isPressed 
                    ? 'from-green-500 via-green-600 to-green-700 shadow-[inset_0_4px_16px_rgba(0,0,0,0.4)]' 
                    : 'from-green-400 via-green-500 to-green-600 shadow-[inset_0_-12px_24px_rgba(0,0,0,0.3),inset_0_12px_24px_rgba(255,255,255,0.3)]'
                  }
                  hover:from-green-300 hover:via-green-400 hover:to-green-500
                `}>
                  
                  {/* Enhanced Text with Press Effect */}
                  <div className={`
                    text-white font-black tracking-wider mb-4
                    transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                    ${isPressed 
                      ? 'text-2xl md:text-3xl lg:text-4xl drop-shadow-sm transform translate-y-0.5' 
                      : 'text-3xl md:text-4xl lg:text-5xl drop-shadow-lg transform translate-y-0'
                    }
                  `}>
                    SEND IT
                  </div>
                  
                  {/* Enhanced Logo with Press Effect */}
                  <div className={`
                    transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                    ${isPressed 
                      ? 'transform translate-y-0.5 scale-95 opacity-90' 
                      : 'transform translate-y-0 scale-100 opacity-100'
                    }
                  `}>
                    <HastraLogo className={`
                      w-auto transition-all duration-300
                      ${isPressed 
                        ? 'h-7 md:h-9 lg:h-11' 
                        : 'h-8 md:h-10 lg:h-12'
                      }
                    `} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Glow Effects */}
            <div className={`
              absolute inset-0 rounded-full blur-xl 
              transition-all duration-500 ease-out
              ${isPressed 
                ? 'bg-green-500/30 opacity-40 scale-95' 
                : 'bg-green-400/20 opacity-0 group-hover:opacity-60 group-hover:scale-105'
              }
              animate-pulse
            `}></div>
            
            {/* Interaction Ripple Effect */}
            <div className={`
              absolute inset-0 rounded-full
              transition-all duration-300 ease-out
              ${isPressed 
                ? 'bg-green-300/20 scale-110 opacity-100' 
                : 'bg-transparent scale-100 opacity-0'
              }
            `}></div>
            
          </button>
        </div>

        {/* Fun subtitle */}
        <div className="space-y-2">
          <p className="text-lg md:text-xl text-muted-foreground">
            💰 Every click brings you closer to financial freedom! 💰
          </p>
          <p className="text-sm text-muted-foreground/60">
            (Not financial advice, just good vibes)
          </p>
        </div>
      </div>
    </div>
  );
};

export default SendIt;