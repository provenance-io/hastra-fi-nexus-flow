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
        <div className={`absolute -left-12 z-0 ${
          animationPhase === 2 ? 'animate-lightning-flash' : 'animate-lightning-buildup'
        }`} style={{ top: '-160px' }}>
          
          {/* Atmospheric background glow */}
          <div 
            className="absolute inset-0 w-96 h-80 opacity-30"
            style={{
              background: 'radial-gradient(ellipse 240px 320px at 20% 30%, rgba(147, 197, 253, 0.2) 0%, rgba(59, 130, 246, 0.1) 30%, rgba(79, 70, 229, 0.05) 70%, transparent 100%)',
              filter: 'blur(20px)',
            }}
          />
          
          <svg 
            width="240" 
            height="280" 
            viewBox="0 0 240 280"
            className="lightning-bolt"
            style={{
              filter: 'blur(0.5px) drop-shadow(0 0 15px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 25px rgba(147, 197, 253, 0.6)) drop-shadow(0 0 35px rgba(59, 130, 246, 0.4))'
            }}
          >
            {/* Atmospheric outer glow layers */}
            <path 
              d="M25 15 C35 28, 45 42, 58 58 C68 72, 78 88, 92 105 C102 118, 115 135, 128 152 C138 165, 152 182, 165 198 C175 212, 188 228, 200 245 C210 258, 220 270, 235 280"
              stroke="url(#atmosphericGlow)"
              strokeWidth="12"
              fill="none"
              opacity="0.3"
              className="lightning-atmosphere"
              style={{ filter: 'blur(8px)' }}
            />
            
            <path 
              d="M25 15 C35 28, 45 42, 58 58 C68 72, 78 88, 92 105 C102 118, 115 135, 128 152 C138 165, 152 182, 165 198 C175 212, 188 228, 200 245 C210 258, 220 270, 235 280"
              stroke="url(#atmosphericGlow2)"
              strokeWidth="8"
              fill="none"
              opacity="0.5"
              className="lightning-atmosphere"
              style={{ filter: 'blur(4px)' }}
            />
            
            {/* Main lightning channel with diagonal flow */}
            <path 
              d="M25 15 C35 28, 45 42, 58 58 C68 72, 78 88, 92 105 C102 118, 115 135, 128 152 C138 165, 152 182, 165 198 C175 212, 188 228, 200 245 C210 258, 220 270, 235 280"
              stroke="url(#mainLightningGradient)"
              strokeWidth="3"
              fill="none"
              className={`lightning-path-main ${animationPhase === 1 ? 'animate-lightning-draw' : ''}`}
              strokeDasharray={animationPhase === 1 ? "600" : "none"}
              strokeDashoffset={animationPhase === 1 ? "600" : "0"}
            />
            
            {/* Bright white core */}
            <path 
              d="M25 15 C35 28, 45 42, 58 58 C68 72, 78 88, 92 105 C102 118, 115 135, 128 152 C138 165, 152 182, 165 198 C175 212, 188 228, 200 245 C210 258, 220 270, 235 280"
              stroke="url(#coreLightningGradient)"
              strokeWidth="1"
              fill="none"
              className={`lightning-path-core ${animationPhase === 1 ? 'animate-lightning-draw' : ''}`}
              strokeDasharray={animationPhase === 1 ? "600" : "none"}
              strokeDashoffset={animationPhase === 1 ? "600" : "0"}
            />
            
            {/* Organic branching patterns following diagonal flow */}
            {/* Upper left branch */}
            <path 
              d="M58 58 C48 68, 38 78, 28 88 C18 98, 8 108, -2 118"
              stroke="url(#branchGradient1)"
              strokeWidth="2"
              fill="none"
              opacity="0.8"
              className={`lightning-path-branch ${animationPhase === 1 ? 'animate-lightning-draw-branch' : ''}`}
              strokeDasharray={animationPhase === 1 ? "120" : "none"}
              strokeDashoffset={animationPhase === 1 ? "120" : "0"}
            />
            
            {/* Upper right branch */}
            <path 
              d="M58 58 C68 68, 78 78, 88 88 C98 98, 108 108, 118 118"
              stroke="url(#branchGradient1)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.7"
              className={`lightning-path-branch ${animationPhase === 1 ? 'animate-lightning-draw-branch' : ''}`}
              strokeDasharray={animationPhase === 1 ? "100" : "none"}
              strokeDashoffset={animationPhase === 1 ? "100" : "0"}
            />
            
            {/* Middle left branch - flowing diagonally */}
            <path 
              d="M92 105 C82 115, 72 125, 62 135 C52 145, 42 155, 32 165"
              stroke="url(#branchGradient2)"
              strokeWidth="1.8"
              fill="none"
              opacity="0.6"
              className={`lightning-path-branch ${animationPhase === 1 ? 'animate-lightning-draw-branch' : ''}`}
              strokeDasharray={animationPhase === 1 ? "110" : "none"}
              strokeDashoffset={animationPhase === 1 ? "110" : "0"}
            />
            
            {/* Middle right branch */}
            <path 
              d="M128 152 C138 162, 148 172, 158 182 C168 192, 178 202, 188 212"
              stroke="url(#branchGradient2)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.5"
              className={`lightning-path-branch ${animationPhase === 1 ? 'animate-lightning-draw-branch' : ''}`}
              strokeDasharray={animationPhase === 1 ? "95" : "none"}
              strokeDashoffset={animationPhase === 1 ? "95" : "0"}
            />
            
            {/* Lower left branch */}
            <path 
              d="M165 198 C155 208, 145 218, 135 228 C125 238, 115 248, 105 258"
              stroke="url(#branchGradient3)"
              strokeWidth="1.2"
              fill="none"
              opacity="0.4"
              className={`lightning-path-branch ${animationPhase === 1 ? 'animate-lightning-draw-branch' : ''}`}
              strokeDasharray={animationPhase === 1 ? "85" : "none"}
              strokeDashoffset={animationPhase === 1 ? "85" : "0"}
            />
            
            {/* Micro-branches with subtle irregularities */}
            <path 
              d="M35 28 C32 32, 29 36, 26 40 M78 88 C82 92, 86 96, 90 100 M152 182 C149 186, 146 190, 143 194 M200 245 C204 249, 208 253, 212 257"
              stroke="url(#microBranchGradient)"
              strokeWidth="0.8"
              fill="none"
              opacity="0.3"
              className={`lightning-path-micro ${animationPhase === 1 ? 'animate-lightning-draw-micro' : ''}`}
              strokeDasharray={animationPhase === 1 ? "50" : "none"}
              strokeDashoffset={animationPhase === 1 ? "50" : "0"}
            />
            
            {/* Ethereal energy nodes following diagonal path */}
            <circle cx="58" cy="58" r="1.5" fill="url(#nodeGradient)" opacity="0.9" className="animate-pulse" />
            <circle cx="92" cy="105" r="1.2" fill="url(#nodeGradient)" opacity="0.8" className="animate-pulse" style={{animationDelay: "0.3s"}} />
            <circle cx="128" cy="152" r="1.8" fill="url(#nodeGradient)" opacity="1" className="animate-pulse" style={{animationDelay: "0.1s"}} />
            <circle cx="165" cy="198" r="1.3" fill="url(#nodeGradient)" opacity="0.7" className="animate-pulse" style={{animationDelay: "0.5s"}} />
            <circle cx="200" cy="245" r="2" fill="url(#nodeGradient)" opacity="0.9" className="animate-pulse" style={{animationDelay: "0.2s"}} />
            
            {/* Ionized air particles following diagonal flow */}
            {[...Array(10)].map((_, i) => (
              <circle 
                key={i}
                cx={15 + i * 22} 
                cy={10 + i * 27} 
                r="0.5" 
                fill="rgba(255, 255, 255, 0.6)" 
                opacity="0.4"
                className="animate-pulse"
                style={{animationDelay: `${i * 0.15}s`}}
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
                bottom: '-20px',
                right: '-40px',
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