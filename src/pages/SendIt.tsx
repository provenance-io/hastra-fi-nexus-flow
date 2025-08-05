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

        {/* Giant interactive button */}
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className={`
              relative group p-8 md:p-12 lg:p-16 
              bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20
              hover:from-primary/30 hover:via-primary/20 hover:to-accent/30
              border-2 border-primary/30 hover:border-primary/50
              rounded-3xl shadow-2xl hover:shadow-3xl
              transition-all duration-300 ease-out
              ${isPressed ? 'scale-95 shadow-inner' : 'hover:scale-105 active:scale-95'}
              backdrop-blur-sm
              before:absolute before:inset-0 before:rounded-3xl
              before:bg-gradient-to-br before:from-white/10 before:to-transparent
              before:opacity-0 hover:before:opacity-100 before:transition-opacity
              focus:outline-none focus:ring-4 focus:ring-primary/30
            `}
            aria-label="Send it! Easter egg button"
          >
            <div className={`transition-all duration-200 ${isPressed ? 'scale-90' : ''}`}>
              <HastraLogo className="h-32 md:h-40 lg:h-48 w-auto drop-shadow-2xl" />
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            {/* Sparkle effects */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-150"></div>
            <div className="absolute top-1/4 -left-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-300"></div>
            <div className="absolute bottom-1/4 -right-4 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-500"></div>
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