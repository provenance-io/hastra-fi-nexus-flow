import { useState, useEffect } from 'react'

const SwYLDSLightningHero = () => {
  const [animationPhase, setAnimationPhase] = useState(0)
  
  useEffect(() => {
    // 7-phase animation cycle: peaceful (3s) -> buildup (1s) -> strike (0.3s) -> explosion (1s) -> morph (1s) -> pulse (3s) -> particles (2s)
    const phaseDurations = [3000, 1000, 300, 1000, 1000, 3000, 2000]
    let currentPhase = 0
    
    const advancePhase = () => {
      currentPhase = currentPhase + 1
      if (currentPhase < phaseDurations.length) {
        setAnimationPhase(currentPhase)
        setTimeout(advancePhase, phaseDurations[currentPhase])
      }
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
      case 1: return 'animate-energy-buildup' // elevated energy buildup
      case 2: return 'animate-lightning-strike' // strike
      case 3: return 'animate-explosion' // explosion
      case 4: return 'animate-magical-transformation' // magical transformation
      case 5: return 'animate-golden-pulse' // golden pulse
      case 6: return 'animate-particle-dance' // particle dance
      default: return 'animate-float'
    }
  }
  
  const showLightning = animationPhase === 1 || animationPhase === 2
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
          
          {/* Main Lightning Structure */}
          <svg 
            width="240" 
            height="280" 
            viewBox="0 0 240 280"
            className={`lightning-bolt ${animationPhase === 1 ? 'animate-lightning-strike-down' : ''}`}
            style={{
              filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.4))'
            }}
          >
            <defs>
              {/* Enhanced Ethereal Gradients */}
              <linearGradient id="lightning-main-ethereal" x1="15%" y1="20%" x2="85%" y2="80%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8"/>
                <stop offset="20%" stopColor="#3B82F6" stopOpacity="0.9"/>
                <stop offset="40%" stopColor="#60A5FA" stopOpacity="1"/>
                <stop offset="60%" stopColor="#FFFFFF" stopOpacity="1"/>
                <stop offset="75%" stopColor="#FCD34D" stopOpacity="1"/>
                <stop offset="90%" stopColor="#FFD700" stopOpacity="0.9"/>
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.8"/>
              </linearGradient>
              
              <linearGradient id="lightning-atmosphere" x1="15%" y1="20%" x2="85%" y2="80%">
                <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.4"/>
                <stop offset="30%" stopColor="#93C5FD" stopOpacity="0.6"/>
                <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.7"/>
                <stop offset="100%" stopColor="#FEF3C7" stopOpacity="0.4"/>
              </linearGradient>
              
              <linearGradient id="lightning-core" x1="15%" y1="20%" x2="85%" y2="80%">
                <stop offset="0%" stopColor="#E0E7FF" stopOpacity="0.6"/>
                <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.9"/>
                <stop offset="70%" stopColor="#FFFFFF" stopOpacity="1"/>
                <stop offset="100%" stopColor="#FEF3C7" stopOpacity="0.6"/>
              </linearGradient>
            </defs>
            {/* Deep Atmospheric Layer (Blur 24px) */}
            <path 
              d="M25 15 L32 28 L38 35 L45 52 L52 49 L63 64 L58 78 L71 85 L78 98 L85 103 L92 115 L98 108 L105 125 L115 132 L128 145 L135 158 L145 162 L152 175 L158 182 L168 188 L175 205 L185 212 L195 228 L200 235 L210 252 L220 258 L225 275 L235 280"
              stroke="url(#lightning-atmosphere)"
              strokeWidth="35"
              fill="none"
              opacity="0.25"
              filter="blur(24px)"
            />
            
            {/* Medium Atmospheric Layer (Blur 12px) */}
            <path 
              d="M25 15 L32 28 L38 35 L45 52 L52 49 L63 64 L58 78 L71 85 L78 98 L85 103 L92 115 L98 108 L105 125 L115 132 L128 145 L135 158 L145 162 L152 175 L158 182 L168 188 L175 205 L185 212 L195 228 L200 235 L210 252 L220 258 L225 275 L235 280"
              stroke="url(#lightning-atmosphere)"
              strokeWidth="20"
              fill="none"
              opacity="0.4"
              filter="blur(12px)"
            />
            
            {/* Soft Glow Layer (Blur 6px) */}
            <path 
              d="M25 15 L32 28 L38 35 L45 52 L52 49 L63 64 L58 78 L71 85 L78 98 L85 103 L92 115 L98 108 L105 125 L115 132 L128 145 L135 158 L145 162 L152 175 L158 182 L168 188 L175 205 L185 212 L195 228 L200 235 L210 252 L220 258 L225 275 L235 280"
              stroke="url(#lightning-main-ethereal)"
              strokeWidth="12"
              fill="none"
              opacity="0.6"
              filter="blur(6px)"
            />
            
            {/* Main Lightning Channel */}
            <path 
              d="M25 15 L32 28 L38 35 L45 52 L52 49 L63 64 L58 78 L71 85 L78 98 L85 103 L92 115 L98 108 L105 125 L115 132 L128 145 L135 158 L145 162 L152 175 L158 182 L168 188 L175 205 L185 212 L195 228 L200 235 L210 252 L220 258 L225 275 L235 280"
              stroke="url(#lightning-main-ethereal)"
              strokeWidth="4"
              fill="none"
              opacity="0.9"
              filter="blur(1px)"
              strokeDasharray="600"
              className={animationPhase === 1 ? 'animate-lightning-draw' : ''}
            />
            
            {/* Brilliant Core */}
            <path 
              d="M25 15 L32 28 L38 35 L45 52 L52 49 L63 64 L58 78 L71 85 L78 98 L85 103 L92 115 L98 108 L105 125 L115 132 L128 145 L135 158 L145 162 L152 175 L158 182 L168 188 L175 205 L185 212 L195 228 L200 235 L210 252 L220 258 L225 275 L235 280"
              stroke="url(#lightning-core)"
              strokeWidth="2"
              fill="none"
              opacity="1"
              strokeDasharray="600"
              className={animationPhase === 1 ? 'animate-lightning-draw' : ''}
              style={{animationDelay: '0.1s'}}
            />
            
            {/* Organic Branch 1 */}
            <path 
              d="M63 64 L55 72 L48 68 L42 76 L35 82 L28 78 L20 88 L12 94 L5 108"
              stroke="url(#lightning-atmosphere)"
              strokeWidth="8"
              fill="none"
              opacity="0.3"
              filter="blur(4px)"
              strokeDasharray="120"
              className={animationPhase === 1 ? 'animate-lightning-draw-branch' : ''}
              style={{animationDelay: '0.4s'}}
            />
            <path 
              d="M63 64 L55 72 L48 68 L42 76 L35 82 L28 78 L20 88 L12 94 L5 108"
              stroke="url(#lightning-main-ethereal)"
              strokeWidth="2"
              fill="none"
              opacity="0.7"
              strokeDasharray="120"
              className={animationPhase === 1 ? 'animate-lightning-draw-branch' : ''}
              style={{animationDelay: '0.5s'}}
            />
            
            {/* Organic Branch 2 */}
            <path 
              d="M105 125 L98 132 L88 138 L82 145 L75 152 L68 148 L58 158 L52 165 L42 172"
              stroke="url(#lightning-atmosphere)"
              strokeWidth="8"
              fill="none"
              opacity="0.3"
              filter="blur(4px)"
              strokeDasharray="120"
              className={animationPhase === 1 ? 'animate-lightning-draw-branch' : ''}
              style={{animationDelay: '0.6s'}}
            />
            <path 
              d="M105 125 L98 132 L88 138 L82 145 L75 152 L68 148 L58 158 L52 165 L42 172"
              stroke="url(#lightning-main-ethereal)"
              strokeWidth="2"
              fill="none"
              opacity="0.7"
              strokeDasharray="120"
              className={animationPhase === 1 ? 'animate-lightning-draw-branch' : ''}
              style={{animationDelay: '0.7s'}}
            />
            
            {/* Organic Branch 3 */}
            <path 
              d="M145 162 L152 168 L158 175 L165 172 L172 182 L178 188 L185 195 L192 202"
              stroke="url(#lightning-atmosphere)"
              strokeWidth="8"
              fill="none"
              opacity="0.3"
              filter="blur(4px)"
              strokeDasharray="120"
              className={animationPhase === 1 ? 'animate-lightning-draw-branch' : ''}
              style={{animationDelay: '0.8s'}}
            />
            <path 
              d="M145 162 L152 168 L158 175 L165 172 L172 182 L178 188 L185 195 L192 202"
              stroke="url(#lightning-main-ethereal)"
              strokeWidth="2"
              fill="none"
              opacity="0.7"
              strokeDasharray="120"
              className={animationPhase === 1 ? 'animate-lightning-draw-branch' : ''}
              style={{animationDelay: '0.9s'}}
            />
            
            {/* Micro Tendrils with Delayed Opacity */}
            <g opacity="0.4">
              <path 
                d="M32 28 L28 32 L25 38 M38 35 L34 38 L30 42 M78 98 L82 102 L85 108"
                stroke="url(#lightning-core)"
                strokeWidth="1"
                fill="none"
                filter="blur(0.5px)"
                strokeDasharray="50"
                className={animationPhase === 1 ? 'animate-lightning-draw-micro' : ''}
                style={{animationDelay: '1s'}}
              />
              <path 
                d="M92 115 L88 118 L84 122 M128 145 L124 148 L120 152 M152 175 L148 178 L144 182"
                stroke="url(#lightning-core)"
                strokeWidth="1"
                fill="none"
                filter="blur(0.5px)"
                strokeDasharray="50"
                className={animationPhase === 1 ? 'animate-lightning-draw-micro' : ''}
                style={{animationDelay: '1.1s'}}
              />
              <path 
                d="M200 235 L204 238 L208 242 M210 252 L214 255 L218 259"
                stroke="url(#lightning-core)"
                strokeWidth="1"
                fill="none"
                filter="blur(0.5px)"
                strokeDasharray="50"
                className={animationPhase === 1 ? 'animate-lightning-draw-micro' : ''}
                style={{animationDelay: '1.2s'}}
              />
            </g>
            
            {/* Energy nodes at key electrical junctions */}
            <circle cx="63" cy="64" r="1.8" fill="url(#nodeGradient)" opacity="0.9" className="animate-pulse" />
            <circle cx="92" cy="115" r="1.4" fill="url(#nodeGradient)" opacity="0.8" className="animate-pulse" style={{animationDelay: "0.3s"}} />
            <circle cx="128" cy="145" r="2" fill="url(#nodeGradient)" opacity="1" className="animate-pulse" style={{animationDelay: "0.1s"}} />
            <circle cx="175" cy="205" r="1.6" fill="url(#nodeGradient)" opacity="0.7" className="animate-pulse" style={{animationDelay: "0.5s"}} />
            <circle cx="210" cy="252" r="2.2" fill="url(#nodeGradient)" opacity="0.9" className="animate-pulse" style={{animationDelay: "0.2s"}} />
            
            {/* Secondary energy nodes at branch points */}
            <circle cx="71" cy="85" r="1" fill="url(#nodeGradient)" opacity="0.6" className="animate-pulse" style={{animationDelay: "0.4s"}} />
            <circle cx="105" cy="125" r="1.2" fill="url(#nodeGradient)" opacity="0.7" className="animate-pulse" style={{animationDelay: "0.6s"}} />
            <circle cx="145" cy="162" r="1" fill="url(#nodeGradient)" opacity="0.5" className="animate-pulse" style={{animationDelay: "0.8s"}} />
            
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
              
              {/* Main lightning gradient - horizontal blue to gold */}
              <linearGradient id="mainLightningGradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.9)" />
                <stop offset="30%" stopColor="rgba(147, 197, 253, 1)" />
                <stop offset="60%" stopColor="rgba(255, 255, 255, 0.95)" />
                <stop offset="85%" stopColor="rgba(255, 215, 0, 0.9)" />
                <stop offset="100%" stopColor="rgba(255, 193, 7, 0.8)" />
              </linearGradient>
              
              {/* Medium lightning layer - horizontal blue to warm gold */}
              <linearGradient id="mediumLightningGradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="rgba(147, 197, 253, 0.95)" />
                <stop offset="40%" stopColor="rgba(255, 255, 255, 0.9)" />
                <stop offset="70%" stopColor="rgba(255, 235, 59, 0.8)" />
                <stop offset="100%" stopColor="rgba(255, 193, 7, 0.7)" />
              </linearGradient>
              
              {/* Core lightning - horizontal white to bright gold */}
              <linearGradient id="coreLightningGradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.98)" />
                <stop offset="80%" stopColor="rgba(255, 235, 59, 0.95)" />
                <stop offset="100%" stopColor="rgba(255, 215, 0, 0.9)" />
              </linearGradient>
              
              {/* Branch gradients - blue to gold horizontal */}
              <linearGradient id="branchGradient1" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
                <stop offset="50%" stopColor="rgba(147, 197, 253, 0.6)" />
                <stop offset="80%" stopColor="rgba(255, 255, 255, 0.5)" />
                <stop offset="100%" stopColor="rgba(255, 215, 0, 0.4)" />
              </linearGradient>
              
              <linearGradient id="branchGradient2" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="rgba(147, 197, 253, 0.7)" />
                <stop offset="60%" stopColor="rgba(255, 255, 255, 0.4)" />
                <stop offset="100%" stopColor="rgba(255, 193, 7, 0.3)" />
              </linearGradient>
              
              <linearGradient id="branchGradient3" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="rgba(147, 197, 253, 0.6)" />
                <stop offset="70%" stopColor="rgba(255, 255, 255, 0.3)" />
                <stop offset="100%" stopColor="rgba(255, 215, 0, 0.2)" />
              </linearGradient>
              
              <linearGradient id="microBranchGradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="rgba(147, 197, 253, 0.5)" />
                <stop offset="80%" stopColor="rgba(255, 255, 255, 0.3)" />
                <stop offset="100%" stopColor="rgba(255, 193, 7, 0.2)" />
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
      
      {/* Smoldering Gold Embers - only after transformation */}
      {isTransformed && (
        <div className="absolute inset-0 z-10">
          {[...Array(8)].map((_, i) => {
            // Generate random position around token center
            const angle = (Math.PI * 2 * i) / 8 + (Math.random() - 0.5) * 1.2
            const distance = 60 + Math.random() * 80
            const centerX = 50
            const centerY = 50
            const x = centerX + (Math.cos(angle) * distance) / 3.2
            const y = centerY + (Math.sin(angle) * distance) / 3.2
            
            // Vary ember characteristics
            const size = Math.random() < 0.3 ? 1 : Math.random() < 0.7 ? 2 : 3
            const opacity = 0.6 + Math.random() * 0.4
            const delay = Math.random() * 2
            const duration = 4 + Math.random() * 3
            
            return (
              <div
                key={i}
                className={`absolute rounded-full animate-ember-drift`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${Math.max(10, Math.min(90, x))}%`,
                  top: `${Math.max(10, Math.min(90, y))}%`,
                  background: `radial-gradient(circle, 
                    rgba(255, 235, 59, ${opacity}) 0%, 
                    rgba(229, 218, 194, ${opacity * 0.8}) 40%, 
                    rgba(255, 193, 7, ${opacity * 0.6}) 70%, 
                    transparent 100%)`,
                  filter: `drop-shadow(0 0 ${size * 2}px rgba(255, 215, 0, 0.4))`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  '--ember-drift-x': `${(Math.random() - 0.5) * 40}px`,
                  '--ember-drift-y': `${20 + Math.random() * 40}px`,
                  '--ember-flicker': Math.random().toString(),
                } as React.CSSProperties}
              />
            )
          })}
        </div>
      )}
      

      {/* Main token */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className={`relative ${getAnimationClasses()}`}>
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            {/* wYLDS Token */}
            <img 
              src="/lovable-uploads/cb96356b-822d-4dc0-963a-96ef43bfedbd.png" 
              alt="wYLDS Token"
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: isTransformed ? 0 : 1,
                filter: animationPhase === 1 ? 'drop-shadow(0 0 20px rgba(139, 69, 19, 0.6)) brightness(1.2)' : 'drop-shadow(0 0 15px #64748b) drop-shadow(0 0 30px #475569)',
              }}
            />
            
            {/* swYLDS Token */}
            <img 
              src="/lovable-uploads/cb25764a-a760-4bdf-9502-6b82befb91eb.png" 
              alt="swYLDS Token"
              className="absolute inset-0 w-full h-full object-contain transition-all duration-1000 ease-in-out"
              style={{
                opacity: isTransformed ? 1 : 0,
                transform: isTransformed ? 'scale(1)' : 'scale(0.95)',
                filter: animationPhase === 4 ? 'brightness(1.3) saturate(1.2) drop-shadow(0 0 20px rgba(255, 215, 0, 0.6))' : 'drop-shadow(0 0 12px rgba(229, 218, 194, 0.4)) drop-shadow(0 0 24px rgba(229, 218, 194, 0.2))',
              }}
            />
          </div>
          
          {/* Lightning strike flash overlay */}
          {animationPhase === 2 && (
            <div className="absolute inset-0 bg-white/20 rounded-full animate-flash" />
          )}
          
          
          {/* Subtle pulsating golden energy aura */}
          {isTransformed && (
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-radial from-[rgba(229,218,194,0.08)] via-[rgba(229,218,194,0.04)] to-transparent rounded-full animate-subtle-golden-pulse" />
            </div>
          )}
        </div>
      </div>
      
      {/* Gentle screen flash during lightning strike */}
      {animationPhase === 2 && (
        <div className="absolute inset-0 bg-white/5 animate-screen-flash z-30 pointer-events-none" />
      )}
    </div>
  )
}

export default SwYLDSLightningHero