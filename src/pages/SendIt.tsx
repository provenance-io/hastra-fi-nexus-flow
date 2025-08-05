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
    setTimeout(() => setIsPressed(false), 150);
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
              transition-all duration-200 ease-out
              ${isPressed ? 'scale-95' : 'hover:scale-105 active:scale-95'}
              focus:outline-none
            `}
            aria-label="Send it! Easy button"
          >
            {/* Button Base/Shadow */}
            <div className="relative">
              {/* Silver/Gray Base */}
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 rounded-full shadow-2xl border-4 border-gray-600"></div>
              
              {/* Green Button Top */}
              <div className={`
                absolute top-2 left-2 right-2 bottom-8
                bg-gradient-to-b from-green-400 via-green-500 to-green-600
                hover:from-green-300 hover:via-green-400 hover:to-green-500
                rounded-full shadow-inner
                border-2 border-green-700
                flex flex-col items-center justify-center
                transition-all duration-200
                ${isPressed ? 'top-4 bottom-6 shadow-none' : 'shadow-[inset_0_-8px_16px_rgba(0,0,0,0.3),inset_0_8px_16px_rgba(255,255,255,0.3)]'}
              `}>
                {/* SEND IT Text */}
                <div className="text-white font-black text-3xl md:text-4xl lg:text-5xl tracking-wider drop-shadow-lg mb-4">
                  SEND IT
                </div>
                
                {/* Hastra Logo Area */}
                <HastraLogo className="h-2 md:h-3 lg:h-3 w-auto" />
              </div>
              
            </div>
            
            {/* Glow Effects */}
            <div className="absolute inset-0 rounded-full bg-green-400/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
            
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