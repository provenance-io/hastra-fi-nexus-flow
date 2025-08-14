import { useState, useEffect } from 'react'

const SwYLDSLightningHero = () => {
  const [animationPhase, setAnimationPhase] = useState(0)
  
  useEffect(() => {
    // 7-phase animation cycle: peaceful (3s) -> buildup (1s) -> strike (0.3s) -> explosion (1s) -> morph (1s) -> pulse (3s) -> particles (2s)
    const phaseDurations = [3000, 1000, 300, 1000, 1000, 3000, 2000]
    let currentPhase = 0
    
    const advancePhase = () => {
      currentPhase = (currentPhase + 1) % phaseDurations.length
      setAnimationPhase(currentPhase)
      setTimeout(advancePhase, phaseDurations[currentPhase])
    }
    
    const timer = setTimeout(advancePhase, phaseDurations[0])
    return () => clearTimeout(timer)
  }, [])
  
  const getTokenImage = () => {
    return animationPhase >= 4 
      ? '/lovable-uploads/cb25764a-a760-4bdf-9502-6b82befb91eb.png' // swYLDS
      : '/lovable-uploads/cb96356b-822d-4dc0-963a-96ef43bfedbd.png'  // wYLDS
  }
  
  const getAnimationClasses = () => {
    switch (animationPhase) {
      case 0: return 'animate-float' // peaceful floating
      case 1: return 'animate-pulse-subtle' // buildup
      case 2: return 'animate-lightning-strike' // strike
      case 3: return 'animate-explosion' // explosion
      case 4: return 'animate-morph' // transformation
      case 5: return 'animate-golden-pulse' // golden pulse
      case 6: return 'animate-particle-dance' // particle dance
      default: return 'animate-float'
    }
  }
  
  const showLightning = animationPhase >= 1 && animationPhase <= 3
  const showParticles = animationPhase === 3 || animationPhase === 6
  const isTransformed = animationPhase >= 4
  
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
      {/* Lightning bolt */}
      {showLightning && (
        <div className={`absolute top-2 left-2 z-20 ${
          animationPhase === 2 ? 'animate-lightning-flash' : 'animate-lightning-buildup'
        }`}>
          <svg 
            width="20" 
            height="95" 
            viewBox="0 0 20 95" 
            className="lightning-bolt"
            style={{
              filter: 'drop-shadow(0 0 15px hsl(var(--premium-gold))) drop-shadow(0 0 25px hsl(var(--hastra-teal)))',
              transform: 'rotate(45deg)',
              transformOrigin: 'top left'
            }}
          >
            <path 
              d="M10 0 L6 25 L8 25 L4 45 L6 45 L2 70 L4 70 L0 95 L12 55 L10 55 L14 35 L12 35 L16 15 L14 15 L18 0 Z" 
              fill="url(#lightningGradient)"
              className="lightning-path"
            />
            <defs>
              <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--background))" stopOpacity="1" />
                <stop offset="20%" stopColor="hsl(var(--hastra-teal))" stopOpacity="0.98" />
                <stop offset="60%" stopColor="hsl(var(--premium-gold))" stopOpacity="0.95" />
                <stop offset="100%" stopColor="hsl(var(--premium-gold))" stopOpacity="0.9" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Impact spark effect at strike point */}
          {animationPhase === 2 && (
            <div 
              className="absolute w-2 h-2 bg-premium-gold rounded-full animate-ping"
              style={{
                bottom: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                filter: 'drop-shadow(0 0 8px hsl(var(--premium-gold)))',
              }}
            />
          )}
        </div>
      )}
      
      {/* Electric particles */}
      {showParticles && (
        <div className="absolute inset-0 z-10">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-electric-blue rounded-full animate-particle-float"
              style={{
                left: `${20 + (i * 5)}%`,
                top: `${30 + (i * 3)}%`,
                animationDelay: `${i * 0.1}s`,
                filter: 'drop-shadow(0 0 4px #00d4ff)',
              }}
            />
          ))}
        </div>
      )}
      
      {/* Main token */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className={`relative ${getAnimationClasses()}`}>
          <img
            src={getTokenImage()}
            alt={isTransformed ? "swYLDS Token" : "wYLDS Token"}
            className="w-48 h-48 md:w-56 md:h-56 object-contain"
            style={{
              filter: isTransformed 
                ? 'drop-shadow(0 0 20px #fbbf24) drop-shadow(0 0 40px #f59e0b) drop-shadow(0 0 60px #d97706)'
                : 'drop-shadow(0 0 15px #64748b) drop-shadow(0 0 30px #475569)',
            }}
          />
          
          {/* Lightning strike flash overlay */}
          {animationPhase === 2 && (
            <div className="absolute inset-0 bg-white/20 rounded-full animate-flash" />
          )}
          
          {/* Transformation energy waves */}
          {animationPhase === 3 && (
            <div className="absolute inset-0">
              <div className="absolute inset-0 border-4 border-electric-blue rounded-full animate-energy-wave-1" />
              <div className="absolute inset-0 border-4 border-white rounded-full animate-energy-wave-2" />
              <div className="absolute inset-0 border-4 border-yellow-400 rounded-full animate-energy-wave-3" />
            </div>
          )}
          
          {/* Golden energy aura for swYLDS */}
          {isTransformed && (
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-radial from-yellow-400/20 to-transparent rounded-full animate-golden-aura" />
            </div>
          )}
        </div>
      </div>
      
      {/* Screen flash effect during lightning strike */}
      {animationPhase === 2 && (
        <div className="absolute inset-0 bg-white/10 animate-screen-flash z-30 pointer-events-none" />
      )}
    </div>
  )
}

export default SwYLDSLightningHero