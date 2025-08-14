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
        <div className={`absolute -top-24 -left-4 z-20 ${
          animationPhase === 2 ? 'animate-lightning-flash' : 'animate-lightning-buildup'
        }`}>
          <svg 
            width="160" 
            height="240" 
            viewBox="0 0 160 240" 
            className="lightning-bolt"
            style={{
              filter: 'drop-shadow(0 0 20px hsl(var(--premium-gold))) drop-shadow(0 0 30px hsl(var(--hastra-teal))) drop-shadow(0 0 40px hsl(var(--electric-blue)))',
              transform: 'rotate(-45deg)',
              transformOrigin: 'center'
            }}
          >
            {/* Main lightning channel - organic curved path */}
            <path 
              d="M80 0 Q78 15 85 30 Q82 45 90 60 Q85 75 95 90 Q88 105 98 120 Q92 135 102 150 Q95 165 105 180 Q98 195 108 210 Q100 225 110 240" 
              stroke="url(#mainLightningGradient)"
              strokeWidth="4"
              fill="none"
              className="lightning-path-main"
            />
            
            {/* Main lightning core - brighter center */}
            <path 
              d="M80 0 Q78 15 85 30 Q82 45 90 60 Q85 75 95 90 Q88 105 98 120 Q92 135 102 150 Q95 165 105 180 Q98 195 108 210 Q100 225 110 240" 
              stroke="url(#coreLightningGradient)"
              strokeWidth="1.5"
              fill="none"
              className="lightning-path-core"
            />
            
            {/* Primary branch 1 - curves naturally */}
            <path 
              d="M85 45 Q88 55 82 65 Q86 75 78 85 Q82 95 74 105" 
              stroke="url(#branchGradient1)"
              strokeWidth="2.5"
              fill="none"
              opacity="0.8"
              className="lightning-path-branch"
            />
            
            {/* Primary branch 2 - flows organically */}
            <path 
              d="M95 90 Q102 100 108 110 Q115 120 122 130 Q128 140 135 150" 
              stroke="url(#branchGradient2)"
              strokeWidth="2"
              fill="none"
              opacity="0.7"
              className="lightning-path-branch"
            />
            
            {/* Secondary branch 1 */}
            <path 
              d="M90 120 Q95 130 88 140 Q92 150 85 160" 
              stroke="url(#branchGradient3)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
              className="lightning-path-branch"
            />
            
            {/* Secondary branch 2 */}
            <path 
              d="M102 165 Q108 175 115 185 Q120 195 127 205" 
              stroke="url(#branchGradient3)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.5"
              className="lightning-path-branch"
            />
            
            {/* Tertiary micro-branches */}
            <path 
              d="M82 60 Q85 65 80 70 M108 135 Q112 140 118 145 M88 180 Q92 185 86 190" 
              stroke="url(#microBranchGradient)"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
              className="lightning-path-micro"
            />
            
            {/* Electric sparks around main channel */}
            <circle cx="82" cy="30" r="1" fill="hsl(var(--premium-gold))" opacity="0.8" className="animate-pulse" />
            <circle cx="92" cy="75" r="0.8" fill="hsl(var(--electric-blue))" opacity="0.6" className="animate-pulse" style={{animationDelay: "0.2s"}} />
            <circle cx="100" cy="135" r="1.2" fill="hsl(var(--hastra-teal))" opacity="0.7" className="animate-pulse" style={{animationDelay: "0.4s"}} />
            <circle cx="105" cy="195" r="0.9" fill="hsl(var(--premium-gold))" opacity="0.9" className="animate-pulse" style={{animationDelay: "0.1s"}} />
            
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