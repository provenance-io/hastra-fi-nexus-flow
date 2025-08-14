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
        <div className={`absolute -left-4 z-20 ${
          animationPhase === 2 ? 'animate-lightning-flash' : 'animate-lightning-buildup'
        }`} style={{ top: '-126px' }}>
          <svg 
            width="160" 
            height="240" 
            viewBox="0 0 160 240" 
            className="lightning-bolt"
            style={{
              filter: 'drop-shadow(0 0 20px hsl(var(--premium-gold))) drop-shadow(0 0 30px hsl(var(--hastra-teal))) drop-shadow(0 0 40px hsl(var(--electric-blue)))'
            }}
          >
            {/* Main lightning channel - diagonal angle from top-left to bottom-right */}
            <path 
              d="M20 0 Q25 20 40 35 Q35 55 55 70 Q50 90 70 105 Q65 125 85 140 Q80 160 100 175 Q95 195 115 210 Q110 230 140 240" 
              stroke="url(#mainLightningGradient)"
              strokeWidth="4"
              fill="none"
              className="lightning-path-main"
            />
            
            {/* Main lightning core - brighter center */}
            <path 
              d="M20 0 Q25 20 40 35 Q35 55 55 70 Q50 90 70 105 Q65 125 85 140 Q80 160 100 175 Q95 195 115 210 Q110 230 140 240" 
              stroke="url(#coreLightningGradient)"
              strokeWidth="1.5"
              fill="none"
              className="lightning-path-core"
            />
            
            {/* Primary branch 1 - flows from diagonal path */}
            <path 
              d="M40 55 Q35 65 25 75 Q20 85 10 95 Q5 105 0 115" 
              stroke="url(#branchGradient1)"
              strokeWidth="2.5"
              fill="none"
              opacity="0.8"
              className="lightning-path-branch"
            />
            
            {/* Primary branch 2 - flows right from diagonal */}
            <path 
              d="M70 105 Q80 115 90 125 Q100 135 110 145 Q120 155 130 165" 
              stroke="url(#branchGradient2)"
              strokeWidth="2"
              fill="none"
              opacity="0.7"
              className="lightning-path-branch"
            />
            
            {/* Secondary branch 1 - left flowing */}
            <path 
              d="M55 140 Q50 150 40 160 Q35 170 25 180" 
              stroke="url(#branchGradient3)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
              className="lightning-path-branch"
            />
            
            {/* Secondary branch 2 - right flowing */}
            <path 
              d="M100 175 Q110 185 120 195 Q130 205 140 215" 
              stroke="url(#branchGradient3)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.5"
              className="lightning-path-branch"
            />
            
            {/* Tertiary micro-branches flowing from diagonal */}
            <path 
              d="M30 35 Q25 40 20 45 M75 125 Q80 130 85 135 M95 195 Q100 200 105 205" 
              stroke="url(#microBranchGradient)"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
              className="lightning-path-micro"
            />
            
            {/* Electric sparks along diagonal path */}
            <circle cx="30" cy="25" r="1" fill="hsl(var(--premium-gold))" opacity="0.8" className="animate-pulse" />
            <circle cx="60" cy="85" r="0.8" fill="hsl(var(--electric-blue))" opacity="0.6" className="animate-pulse" style={{animationDelay: "0.2s"}} />
            <circle cx="85" cy="155" r="1.2" fill="hsl(var(--hastra-teal))" opacity="0.7" className="animate-pulse" style={{animationDelay: "0.4s"}} />
            <circle cx="120" cy="220" r="0.9" fill="hsl(var(--premium-gold))" opacity="0.9" className="animate-pulse" style={{animationDelay: "0.1s"}} />
            
            <defs>
              {/* Main lightning gradient - most intense */}
              <linearGradient id="mainLightningGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--background))" stopOpacity="0.9" />
                <stop offset="10%" stopColor="hsl(var(--electric-blue))" stopOpacity="1" />
                <stop offset="30%" stopColor="hsl(var(--hastra-teal))" stopOpacity="0.98" />
                <stop offset="60%" stopColor="hsl(var(--premium-gold))" stopOpacity="0.95" />
                <stop offset="100%" stopColor="hsl(var(--premium-gold))" stopOpacity="0.9" />
              </linearGradient>
              
              {/* Core lightning - brightest center */}
              <linearGradient id="coreLightningGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                <stop offset="20%" stopColor="hsl(var(--premium-gold))" stopOpacity="1" />
                <stop offset="50%" stopColor="white" stopOpacity="0.9" />
                <stop offset="80%" stopColor="hsl(var(--premium-gold))" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0.8" />
              </linearGradient>
              
              {/* Branch gradients - progressively dimmer */}
              <linearGradient id="branchGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--electric-blue))" stopOpacity="0.8" />
                <stop offset="50%" stopColor="hsl(var(--hastra-teal))" stopOpacity="0.7" />
                <stop offset="100%" stopColor="hsl(var(--premium-gold))" stopOpacity="0.5" />
              </linearGradient>
              
              <linearGradient id="branchGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--electric-blue))" stopOpacity="0.7" />
                <stop offset="100%" stopColor="hsl(var(--hastra-teal))" stopOpacity="0.4" />
              </linearGradient>
              
              <linearGradient id="branchGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--electric-blue))" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--hastra-teal))" stopOpacity="0.3" />
              </linearGradient>
              
              <linearGradient id="microBranchGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--electric-blue))" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(var(--hastra-teal))" stopOpacity="0.2" />
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