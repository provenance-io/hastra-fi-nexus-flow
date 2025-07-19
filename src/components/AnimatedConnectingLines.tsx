
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AnimatedConnectingLines = () => {
  const scrollProgress = useScrollAnimation();
  
  // Calculate animation progress for different sections
  const missionProgress = Math.min(Math.max((scrollProgress - 0.15) * 4, 0), 1);
  const beliefProgress = Math.min(Math.max((scrollProgress - 0.35) * 4, 0), 1);
  const visionProgress = Math.min(Math.max((scrollProgress - 0.55) * 4, 0), 1);
  const finalGlowProgress = Math.min(Math.max((scrollProgress - 0.75) * 4, 0), 1);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Mission to Center Connection */}
        <path
          d="M15 30 Q50 35 50 50"
          fill="none"
          stroke="hsl(var(--header-glow))"
          strokeWidth="0.2"
          opacity={0.6}
          strokeDasharray="2 1"
          strokeDashoffset={`${20 * (1 - missionProgress)}`}
          style={{
            filter: `drop-shadow(0 0 ${2 + missionProgress * 4}px hsl(var(--header-glow) / ${0.3 + missionProgress * 0.4}))`,
          }}
        />
        
        {/* Belief to Center Connection */}
        <path
          d="M15 45 Q50 47 50 50"
          fill="none"
          stroke="hsl(var(--crypto-accent))"
          strokeWidth="0.2"
          opacity={0.6}
          strokeDasharray="2 1"
          strokeDashoffset={`${15 * (1 - beliefProgress)}`}
          style={{
            filter: `drop-shadow(0 0 ${2 + beliefProgress * 4}px hsl(var(--crypto-accent) / ${0.3 + beliefProgress * 0.4}))`,
          }}
        />
        
        {/* Vision to Center Connection */}
        <path
          d="M15 60 Q50 55 50 50"
          fill="none"
          stroke="hsl(var(--amber-warm))"
          strokeWidth="0.2"
          opacity={0.6}
          strokeDasharray="2 1"
          strokeDashoffset={`${18 * (1 - visionProgress)}`}
          style={{
            filter: `drop-shadow(0 0 ${2 + visionProgress * 4}px hsl(var(--amber-warm) / ${0.3 + visionProgress * 0.4}))`,
          }}
        />
        
        {/* Center to HASH Logo Connection */}
        <path
          d="M50 50 Q50 65 50 75"
          fill="none"
          stroke="hsl(var(--header-glow))"
          strokeWidth="0.3"
          opacity={0.8}
          strokeDasharray="3 1"
          strokeDashoffset={`${25 * (1 - finalGlowProgress)}`}
          style={{
            filter: `drop-shadow(0 0 ${4 + finalGlowProgress * 8}px hsl(var(--header-glow) / ${0.4 + finalGlowProgress * 0.6}))`,
          }}
        />
        
        {/* Central Convergence Point */}
        <circle
          cx="50"
          cy="50"
          r={0.5 + Math.max(missionProgress, beliefProgress, visionProgress) * 0.8}
          fill="hsl(var(--header-glow))"
          opacity={0.3 + Math.max(missionProgress, beliefProgress, visionProgress) * 0.5}
          style={{
            filter: `drop-shadow(0 0 ${6 + Math.max(missionProgress, beliefProgress, visionProgress) * 10}px hsl(var(--header-glow) / 0.6))`,
          }}
        />
        
        {/* Traveling Glow Effects */}
        {missionProgress > 0 && (
          <circle
            cx="50"
            cy="50"
            r="0.3"
            fill="hsl(var(--header-glow))"
            opacity={missionProgress * 0.8}
            style={{
              filter: `drop-shadow(0 0 4px hsl(var(--header-glow)))`,
              animation: `pulse-light 2s ease-in-out infinite`,
            }}
          />
        )}
        
        {beliefProgress > 0 && (
          <circle
            cx="50"
            cy="50"
            r="0.2"
            fill="hsl(var(--crypto-accent))"
            opacity={beliefProgress * 0.7}
            style={{
              filter: `drop-shadow(0 0 3px hsl(var(--crypto-accent)))`,
              animation: `pulse-light 2.5s ease-in-out infinite`,
            }}
          />
        )}
        
        {visionProgress > 0 && (
          <circle
            cx="50"
            cy="50"
            r="0.25"
            fill="hsl(var(--amber-warm))"
            opacity={visionProgress * 0.75}
            style={{
              filter: `drop-shadow(0 0 3px hsl(var(--amber-warm)))`,
              animation: `pulse-light 3s ease-in-out infinite`,
            }}
          />
        )}
      </svg>
      
      {/* Particle Effects */}
      {finalGlowProgress > 0.5 && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: `hsl(var(--header-glow))`,
                left: `${45 + Math.sin(i * 0.785) * 10}%`,
                top: `${45 + Math.cos(i * 0.785) * 10}%`,
                opacity: finalGlowProgress * 0.8,
                animation: `float 4s ease-in-out infinite ${i * 0.2}s`,
                filter: `drop-shadow(0 0 3px hsl(var(--header-glow)))`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimatedConnectingLines;
