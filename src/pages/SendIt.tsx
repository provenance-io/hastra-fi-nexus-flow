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
              focus:outline-none focus:ring-4 focus:ring-green-500/30
            `}
            aria-label="Send it! Easy button"
          >
            {/* Button Container */}
            <div className="relative">
              {/* Silver/Gray Base - Wider and Flatter */}
              <div className="w-80 h-32 md:w-96 md:h-40 lg:w-[28rem] lg:h-44 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-600 rounded-full shadow-2xl border-4 border-gray-700 relative overflow-hidden">
                {/* Base highlights */}
                <div className="absolute top-2 left-4 right-4 h-6 bg-gradient-to-b from-white/30 to-transparent rounded-full blur-sm"></div>
                <div className="absolute bottom-2 left-8 right-8 h-4 bg-gradient-to-t from-black/20 to-transparent rounded-full blur-sm"></div>
              </div>
              
              {/* Green Button Top - Dome Shape */}
              <div className={`
                absolute top-1 left-1 right-1 bottom-4
                bg-gradient-to-b from-green-300 via-green-500 to-green-700
                hover:from-green-200 hover:via-green-400 hover:to-green-600
                rounded-full
                border-2 border-green-800
                flex items-center justify-center
                transition-all duration-200
                ${isPressed ? 'top-3 bottom-2 shadow-inner shadow-black/50' : 'shadow-[inset_0_-12px_24px_rgba(0,0,0,0.4),inset_0_12px_24px_rgba(255,255,255,0.4)]'}
                relative overflow-hidden
              `}>
                {/* SEND IT Text */}
                <div className="text-white font-black text-4xl md:text-5xl lg:text-6xl tracking-widest drop-shadow-2xl select-none">
                  SEND IT
                </div>
                
                {/* Top highlight on button */}
                <div className="absolute top-2 left-8 right-8 h-8 md:h-12 lg:h-16 bg-gradient-to-b from-white/60 via-white/30 to-transparent rounded-full blur-lg"></div>
                
                {/* Side highlights */}
                <div className="absolute top-4 left-2 w-4 h-16 md:h-20 bg-gradient-to-r from-white/40 to-transparent rounded-full blur-sm"></div>
                <div className="absolute top-4 right-2 w-4 h-16 md:h-20 bg-gradient-to-l from-white/40 to-transparent rounded-full blur-sm"></div>
              </div>
            </div>
            
            {/* Outer Glow Effects */}
            <div className="absolute inset-0 rounded-full bg-green-400/30 blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
            
            {/* Sparkle effects around button */}
            <div className="absolute -top-6 left-1/3 w-3 h-3 bg-green-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
            <div className="absolute -bottom-6 right-1/3 w-4 h-4 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-150"></div>
            <div className="absolute top-1/2 -left-8 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-300"></div>
            <div className="absolute top-1/2 -right-8 w-2 h-2 bg-green-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-500"></div>
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