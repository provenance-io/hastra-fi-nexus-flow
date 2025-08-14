import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import * as THREE from 'three'

const SwYLDSTransformationToken = () => {
  const tokenRef = useRef<Mesh>(null!)
  
  const [currentTexture, setCurrentTexture] = useState<THREE.Texture | null>(null)
  const [animationPhase, setAnimationPhase] = useState(0)
  const [phaseTimer, setPhaseTimer] = useState(0)
  
  // Simplified phases: wYLDS (5s) -> swYLDS (5s)
  const phaseDurations = [5, 5]
  
  useEffect(() => {
    const loader = new THREE.TextureLoader()
    
    // Start with wYLDS texture
    loader.load('/lovable-uploads/cb96356b-822d-4dc0-963a-96ef43bfedbd.png', (texture) => {
      console.log('wYLDS texture loaded')
      setCurrentTexture(texture)
    }, undefined, (error) => {
      console.error('Failed to load wYLDS texture:', error)
    })
    
    // Preload swYLDS texture for smooth transition
    loader.load('/lovable-uploads/f0615d6f-eee8-43fb-b807-b7d2685d3105.png', (texture) => {
      console.log('swYLDS texture preloaded')
    }, undefined, (error) => {
      console.error('Failed to load swYLDS texture:', error)
    })
  }, [])

  useFrame((state, delta) => {
    if (!tokenRef.current) return
    
    setPhaseTimer(prev => prev + delta)
    
    // Check if we need to advance to next phase
    if (phaseTimer >= phaseDurations[animationPhase]) {
      setPhaseTimer(0)
      const nextPhase = (animationPhase + 1) % phaseDurations.length
      setAnimationPhase(nextPhase)
      
      // Switch texture when moving to swYLDS phase
      if (nextPhase === 1) {
        const loader = new THREE.TextureLoader()
        loader.load('/lovable-uploads/f0615d6f-eee8-43fb-b807-b7d2685d3105.png', (texture) => {
          setCurrentTexture(texture)
        })
      } else if (nextPhase === 0) {
        const loader = new THREE.TextureLoader()
        loader.load('/lovable-uploads/cb96356b-822d-4dc0-963a-96ef43bfedbd.png', (texture) => {
          setCurrentTexture(texture)
        })
      }
    }
    
    const time = state.clock.elapsedTime
    
    // Simple floating animation for both phases
    tokenRef.current.position.y = Math.sin(time * 0.8) * 0.1
    tokenRef.current.rotation.y += delta * 0.5
    tokenRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.05)
    
    // Add golden glow effect during swYLDS phase
    if (animationPhase === 1 && tokenRef.current.material) {
      const material = tokenRef.current.material as THREE.MeshStandardMaterial
      material.emissiveIntensity = 0.3 + Math.sin(time * 3) * 0.1
    }
  })
  
  if (!currentTexture) {
    return (
      <mesh scale={[2, 2, 0.2]}>
        <cylinderGeometry args={[1, 1, 1, 64]} />
        <meshStandardMaterial 
          color={new THREE.Color(0x94a3b8)}
          metalness={0.6}
          roughness={0.2}
          emissive={new THREE.Color(0x001133)}
          emissiveIntensity={0.05}
        />
      </mesh>
    )
  }
  
  // Choose colors based on animation phase
  const tokenColor = animationPhase === 1 ? new THREE.Color(0xfbbf24) : new THREE.Color(0x94a3b8)
  const emissiveColor = animationPhase === 1 ? new THREE.Color(0x992200) : new THREE.Color(0x001133)
  const emissiveIntensity = animationPhase === 1 ? 0.3 : 0.05
  
  return (
    <mesh ref={tokenRef} scale={[2, 2, 0.2]}>
      <cylinderGeometry args={[1, 1, 1, 64]} />
      <meshStandardMaterial 
        map={currentTexture}
        color={tokenColor}
        metalness={0.6}
        roughness={0.2}
        emissive={emissiveColor}
        emissiveIntensity={emissiveIntensity}
        transparent={true}
        opacity={1}
      />
    </mesh>
  )
}

export default SwYLDSTransformationToken