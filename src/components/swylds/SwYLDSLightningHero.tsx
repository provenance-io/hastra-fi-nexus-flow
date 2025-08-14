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
      {/* Ethereal Lightning Effect */}
      {showLightning && (
        <div className={`absolute -left-8 z-0 ${
          animationPhase === 2 ? 'animate-lightning-flash' : 'animate-lightning-buildup'
        }`} style={{ top: '-140px' }}>
          
          {/* Atmospheric background glow */}
          <div 
            className="absolute inset-0 w-80 h-72 opacity-30"
            style={{
              background: 'radial-gradient(ellipse 200px 300px at 50% 60%, rgba(147, 197, 253, 0.2) 0%, rgba(59, 130, 246, 0.1) 30%, rgba(79, 70, 229, 0.05) 70%, transparent 100%)',
              filter: 'blur(20px)',
            }}
          />
          
          <svg 
            width="200" 
            height="220" 
            viewBox="0 0 200 220"
            className="lightning-bolt"
            style={{
              filter: 'blur(0.5px) drop-shadow(0 0 15px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 25px rgba(147, 197, 253, 0.6)) drop-shadow(0 0 35px rgba(59, 130, 246, 0.4))'
            }}
          >
            {/* Atmospheric outer glow layers */}
            <path 
              d="M80 10 C82 18, 78 25, 85 35 C83 48, 89 52, 75 68 C77 82, 73 88, 88 105 C85 120, 92 125, 78 142 C81 158, 76 165, 95 185 C92 198, 98 205, 110 220"
              stroke="url(#atmosphericGlow)"
              strokeWidth="12"
              fill="none"
              opacity="0.3"
              className="lightning-atmosphere"
              style={{ filter: 'blur(8px)' }}
            />
            
            <path 
              d="M80 10 C82 18, 78 25, 85 35 C83 48, 89 52, 75 68 C77 82, 73 88, 88 105 C85 120, 92 125, 78 142 C81 158, 76 165, 95 185 C92 198, 98 205, 110 220"
              stroke="url(#atmosphericGlow2)"
              strokeWidth="8"
              fill="none"
              opacity="0.5"
              className="lightning-atmosphere"
              style={{ filter: 'blur(4px)' }}
            />
            
            {/* Main lightning channel with organic flow */}
            <path 
              d="M80 10 C82 18, 78 25, 85 35 C83 48, 89 52, 75 68 C77 82, 73 88, 88 105 C85 120, 92 125, 78 142 C81 158, 76 165, 95 185 C92 198, 98 205, 110 220"
              stroke="url(#mainLightningGradient)"
              strokeWidth="3"
              fill="none"
              className="lightning-path-main"
            />
            
            {/* Bright white core */}
            <path 
              d="M80 10 C82 18, 78 25, 85 35 C83 48, 89 52, 75 68 C77 82, 73 88, 88 105 C85 120, 92 125, 78 142 C81 158, 76 165, 95 185 C92 198, 98 205, 110 220"
              stroke="url(#coreLightningGradient)"
              strokeWidth="1"
              fill="none"
              className="lightning-path-core"
            />
            
            {/* Organic branching patterns */}
            {/* Upper left branch */}
            <path 
              d="M85 35 C78 42, 72 48, 65 52 C58 58, 52 65, 45 72 C38 78, 32 85, 25 92"
              stroke="url(#branchGradient1)"
              strokeWidth="2"
              fill="none"
              opacity="0.8"
              className="lightning-path-branch"
            />
            
            {/* Upper right branch */}
            <path 
              d="M85 35 C92 41, 98 47, 105 53 C112 59, 118 66, 125 73"
              stroke="url(#branchGradient1)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.7"
              className="lightning-path-branch"
            />
            
            {/* Middle left branch - flowing naturally */}
            <path 
              d="M75 68 C68 74, 62 80, 55 86 C48 92, 42 98, 35 105 C28 112, 22 118, 15 125"
              stroke="url(#branchGradient2)"
              strokeWidth="1.8"
              fill="none"
              opacity="0.6"
              className="lightning-path-branch"
            />
            
            {/* Middle right branch */}
            <path 
              d="M88 105 C95 111, 102 117, 109 123 C116 129, 123 135, 130 142 C137 148, 144 155, 151 162"
              stroke="url(#branchGradient2)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.5"
              className="lightning-path-branch"
            />
            
            {/* Lower left branch */}
            <path 
              d="M78 142 C71 148, 64 154, 57 160 C50 166, 43 172, 36 178"
              stroke="url(#branchGradient3)"
              strokeWidth="1.2"
              fill="none"
              opacity="0.4"
              className="lightning-path-branch"
            />
            
            {/* Micro-branches with subtle irregularities */}
            <path 
              d="M82 25 C79 28, 76 32, 73 35 M89 55 C92 58, 95 62, 98 65 M85 125 C82 128, 79 132, 76 135 M98 192 C101 195, 104 199, 107 202"
              stroke="url(#microBranchGradient)"
              strokeWidth="0.8"
              fill="none"
              opacity="0.3"
              className="lightning-path-micro"
            />
            
            {/* Ethereal energy nodes */}
            <circle cx="85" cy="35" r="1.5" fill="url(#nodeGradient)" opacity="0.9" className="animate-pulse" />
            <circle cx="75" cy="68" r="1.2" fill="url(#nodeGradient)" opacity="0.8" className="animate-pulse" style={{animationDelay: "0.3s"}} />
            <circle cx="88" cy="105" r="1.8" fill="url(#nodeGradient)" opacity="1" className="animate-pulse" style={{animationDelay: "0.1s"}} />
            <circle cx="78" cy="142" r="1.3" fill="url(#nodeGradient)" opacity="0.7" className="animate-pulse" style={{animationDelay: "0.5s"}} />
            <circle cx="95" cy="185" r="2" fill="url(#nodeGradient)" opacity="0.9" className="animate-pulse" style={{animationDelay: "0.2s"}} />
            
            {/* Ionized air particles */}
            {[...Array(8)].map((_, i) => (
              <circle 
                key={i}
                cx={70 + Math.sin(i * 0.8) * 15} 
                cy={30 + i * 20} 
                r="0.5" 
                fill="rgba(255, 255, 255, 0.6)" 
                opacity="0.4"
                className="animate-pulse"
                style={{animationDelay: `${i * 0.2}s`}}
              />
            ))}
            
            <defs>
              {/* Atmospheric glow gradients */}
              <radialGradient id="atmosphericGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
                <stop offset="30%" stopColor="rgba(147, 197, 253, 0.6)" />
                <stop offset="70%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="100%" stopColor="rgba(79, 70, 229, 0.1)" />
              </radialGradient>
              
              <radialGradient id="atmosphericGlow2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
                <stop offset="50%" stopColor="rgba(147, 197, 253, 0.4)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
              </radialGradient>
              
              {/* Main lightning gradient with bright white core */}
              <linearGradient id="mainLightningGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
                <stop offset="20%" stopColor="rgba(147, 197, 253, 1)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.95)" />
                <stop offset="80%" stopColor="rgba(59, 130, 246, 0.9)" />
                <stop offset="100%" stopColor="rgba(147, 197, 253, 0.8)" />
              </linearGradient>
              
              {/* Core lightning - pure white center */}
              <linearGradient id="coreLightningGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.9)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.8)" />
              </linearGradient>
              
              {/* Branch gradients with atmospheric colors */}
              <linearGradient id="branchGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(147, 197, 253, 0.8)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
                <stop offset="100%" stopColor="rgba(79, 70, 229, 0.4)" />
              </linearGradient>
              
              <linearGradient id="branchGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(147, 197, 253, 0.7)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
              </linearGradient>
              
              <linearGradient id="branchGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(147, 197, 253, 0.6)" />
                <stop offset="100%" stopColor="rgba(79, 70, 229, 0.2)" />
              </linearGradient>
              
              <linearGradient id="microBranchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(147, 197, 253, 0.5)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
              </linearGradient>
              
              {/* Energy node gradient */}
              <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
                <stop offset="50%" stopColor="rgba(147, 197, 253, 0.8)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.4)" />
              </radialGradient>
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