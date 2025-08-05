import HastraLogo from "@/components/HastraLogo";
import { useState, useEffect } from "react";

const SendIt = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sparkleCount, setSparkleCount] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
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
    setSparkleCount(prev => prev + 1);
    playChaChing();
    
    // Enhanced haptic feedback for mobile
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
    
    setTimeout(() => setIsPressed(false), 200);
  };

  return (
    <div className={`min-h-screen relative overflow-hidden transition-all duration-1000 ${
      isLoaded ? 'bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900' : 'bg-background'
    }`}>
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-gradient-to-r from-green-300/10 to-emerald-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-gradient-to-r from-lime-400/5 to-green-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-emerald-400/30 rounded-full animate-pulse`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-8">
        {/* Enhanced title with animations */}
        <div className={`space-y-6 transition-all duration-1000 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-500 bg-clip-text text-transparent tracking-tight relative">
            Send It! 
            <span className="text-6xl md:text-7xl lg:text-8xl ml-4 animate-bounce">🚀</span>
            {/* Glow effect behind text */}
            <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-emerald-400/20 via-green-500/20 to-emerald-400/20 -z-10"></div>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-3xl mx-auto font-medium">
            You found the <span className="text-emerald-400 font-bold">secret stash</span>! 
            <br className="hidden md:block" />
            Click the magic button below...
          </p>
          
          {/* Click counter */}
          {sparkleCount > 0 && (
            <div className="text-emerald-400 font-bold text-lg animate-pulse">
              Clicks: {sparkleCount} 🎉
            </div>
          )}
        </div>

        {/* Enhanced Giant Easy Button */}
        <div className={`flex justify-center transition-all duration-1000 delay-300 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button
            onClick={handleClick}
            className={`
              relative group
              transition-all duration-300 ease-out
              ${isPressed ? 'scale-90 translate-y-2' : 'hover:scale-110 hover:-translate-y-2 active:scale-90'}
              focus:outline-none focus:ring-8 focus:ring-emerald-500/40
              drop-shadow-2xl
            `}
            aria-label="Send it! Easy button"
          >
            {/* Enhanced Button Base/Shadow with 3D effect */}
            <div className="relative perspective-1000">
              {/* Multiple shadow layers for depth */}
              <div className="absolute inset-0 w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] bg-black/40 rounded-full blur-2xl translate-y-6 scale-95"></div>
              <div className="absolute inset-0 w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] bg-black/20 rounded-full blur-xl translate-y-4 scale-98"></div>
              
              {/* Enhanced Silver/Gray Base */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] bg-gradient-to-b from-slate-200 via-slate-300 to-slate-500 rounded-full shadow-inner border-8 border-slate-600 overflow-hidden">
                {/* Metallic shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full"></div>
                <div className="absolute top-6 left-6 right-6 h-24 bg-gradient-to-b from-white/50 to-transparent rounded-full blur-md"></div>
              </div>
              
              {/* Enhanced Green Button Top */}
              <div className={`
                absolute top-3 left-3 right-3 transition-all duration-200
                ${isPressed ? 'bottom-12' : 'bottom-16'}
                bg-gradient-to-b from-emerald-300 via-green-500 to-emerald-700
                hover:from-emerald-200 hover:via-green-400 hover:to-emerald-600
                rounded-full border-4 border-emerald-800
                flex flex-col items-center justify-center
                overflow-hidden relative
                ${isPressed ? 'shadow-[inset_0_4px_20px_rgba(0,0,0,0.4)]' : 'shadow-[inset_0_-12px_24px_rgba(0,0,0,0.3),inset_0_12px_24px_rgba(255,255,255,0.4)]'}
              `}>
                {/* Animated shine effect on button */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Enhanced SEND IT Text */}
                <div className={`text-white font-black tracking-widest drop-shadow-2xl transition-all duration-200
                  ${isPressed ? 'text-3xl md:text-4xl lg:text-5xl mb-2' : 'text-4xl md:text-5xl lg:text-6xl mb-4'}
                  relative z-10
                `}>
                  <span className="relative">
                    SEND IT
                    {/* Text glow effect */}
                    <div className="absolute inset-0 text-emerald-200 blur-sm opacity-50">SEND IT</div>
                  </span>
                </div>
                
                {/* Enhanced Hastra Logo Area */}
                <div className={`bg-white/95 rounded-xl shadow-2xl border-2 border-emerald-100 transition-all duration-200 relative z-10
                  ${isPressed ? 'px-2 py-1 md:px-3 md:py-1' : 'px-4 py-2 md:px-6 md:py-3'}
                `}>
                  <HastraLogo className={`w-auto transition-all duration-200 ${
                    isPressed ? 'h-6 md:h-8 lg:h-10' : 'h-8 md:h-12 lg:h-16'
                  }`} />
                  {/* Logo glow */}
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-xl blur-md -z-10"></div>
                </div>
                
                {/* Surface highlights */}
                <div className="absolute top-4 left-4 right-4 h-20 md:h-24 lg:h-32 bg-gradient-to-b from-white/50 to-transparent rounded-full blur-lg opacity-80"></div>
              </div>
            </div>
            
            {/* Enhanced Glow Effects */}
            <div className="absolute inset-0 rounded-full bg-emerald-400/30 blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-700 animate-pulse"></div>
            <div className="absolute inset-0 rounded-full bg-green-300/20 blur-3xl opacity-0 group-hover:opacity-50 transition-all duration-1000 scale-150"></div>
            
            {/* Dynamic sparkle effects */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-3 h-3 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300`}
                style={{
                  top: `${[15, 85, 25, 75, 50, 20, 80, 60][i]}%`,
                  left: `${[-15, 115, -10, 110, -20, 120, -8, 108][i]}%`,
                  animationDelay: `${i * 150}ms`,
                  animationDuration: `${1 + (i % 3) * 0.5}s`
                }}
              />
            ))}
            
            {/* Click burst effect */}
            {sparkleCount > 0 && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(sparkleCount % 5 + 3)].map((_, i) => (
                  <div
                    key={`burst-${sparkleCount}-${i}`}
                    className="absolute w-4 h-4 bg-yellow-300 rounded-full animate-ping"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDuration: '0.8s'
                    }}
                  />
                ))}
              </div>
            )}
          </button>
        </div>

        {/* Enhanced fun subtitle */}
        <div className={`space-y-4 transition-all duration-1000 delay-500 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="text-xl md:text-2xl lg:text-3xl text-emerald-300 font-bold tracking-wide">
            💰 Every click brings you closer to financial freedom! 💰
          </p>
          <p className="text-base md:text-lg text-slate-400 font-medium">
            (Not financial advice, just good vibes ✨)
          </p>
          
          {/* Easter egg hint */}
          {sparkleCount >= 10 && (
            <div className="text-yellow-400 text-lg font-bold animate-pulse">
              🎉 Achievement Unlocked: Button Master! 🎉
            </div>
          )}
          
          {sparkleCount >= 25 && (
            <div className="text-purple-400 text-lg font-bold animate-bounce">
              🌟 Legend Status: Send It Champion! 🌟
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default SendIt;