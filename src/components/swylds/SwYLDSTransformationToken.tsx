import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, Group } from 'three'
import * as THREE from 'three'
import { playAudio } from '@/utils/audioUtils'

const SwYLDSTransformationToken = () => {
  const tokenRef = useRef<Mesh>(null!)
  const lightningRef = useRef<Mesh>(null!)
  const particlesRef = useRef<THREE.Points>(null!)
  const groupRef = useRef<Group>(null!)
  
  const [currentTexture, setCurrentTexture] = useState<THREE.Texture | null>(null)
  const [swyldsTexture, setSwyldsTexture] = useState<THREE.Texture | null>(null)
  const [animationPhase, setAnimationPhase] = useState(0)
  const [phaseTimer, setPhaseTimer] = useState(0)
  const [lightningIntensity, setLightningIntensity] = useState(0)
  
  // 7-phase animation: peaceful (3s) -> buildup (1s) -> strike (0.5s) -> explosion (1s) -> morph (1s) -> pulse (3s) -> particles (2s)
  const phaseDurations = [3, 1, 0.5, 1, 1, 3, 2]
  
  useEffect(() => {
    const loader = new THREE.TextureLoader()
    
    // Load wYLDS texture
    loader.load('/lovable-uploads/cb96356b-822d-4dc0-963a-96ef43bfedbd.png', (texture) => {
      setCurrentTexture(texture)
    }, undefined, (error) => {
      console.error('Failed to load wYLDS texture:', error)
    })
    
    // Load swYLDS texture
    loader.load('/lovable-uploads/f0615d6f-eee8-43fb-b807-b7d2685d3105.png', (texture) => {
      setSwyldsTexture(texture)
    }, undefined, (error) => {
      console.error('Failed to load swYLDS texture:', error)
    })
  }, [])

  useFrame((state, delta) => {
    if (!tokenRef.current || !groupRef.current) return
    
    setPhaseTimer(prev => prev + delta)
    
    // Check if we need to advance to next phase
    if (phaseTimer >= phaseDurations[animationPhase]) {
      setPhaseTimer(0)
      const nextPhase = (animationPhase + 1) % phaseDurations.length
      setAnimationPhase(nextPhase)
      
      // Play lightning sound on strike phase
      if (nextPhase === 2) {
        playAudio('/sounds/cha-ching.mp3', 0.2)
      }
    }
    
    const time = state.clock.elapsedTime
    const phaseProgress = phaseTimer / phaseDurations[animationPhase]
    
    // Phase-specific animations
    switch (animationPhase) {
      case 0: // Peaceful floating
        tokenRef.current.position.y = Math.sin(time * 0.8) * 0.1
        tokenRef.current.rotation.y += delta * 0.3
        tokenRef.current.scale.setScalar(1 + Math.sin(time * 1.5) * 0.02)
        setLightningIntensity(0)
        if (currentTexture && tokenRef.current.material) {
          const material = tokenRef.current.material as THREE.MeshStandardMaterial
          material.map = currentTexture
          material.emissiveIntensity = 0.1
          material.color.setHex(0x94a3b8)
        }
        break
        
      case 1: // Lightning buildup
        tokenRef.current.position.y = Math.sin(time * 0.8) * 0.1
        tokenRef.current.rotation.y += delta * 0.3
        const buildupScale = 1 + Math.sin(time * 5) * 0.05 * phaseProgress
        tokenRef.current.scale.setScalar(buildupScale)
        setLightningIntensity(phaseProgress * 0.5)
        break
        
      case 2: // Lightning strike
        const strikeIntensity = Math.sin(phaseProgress * Math.PI * 10) * 0.5 + 0.5
        setLightningIntensity(strikeIntensity)
        tokenRef.current.position.y = Math.sin(time * 0.8) * 0.1 + Math.random() * 0.02
        tokenRef.current.rotation.y += delta * 0.3
        break
        
      case 3: // Electric explosion
        const explosionScale = 1 + phaseProgress * 0.3
        tokenRef.current.scale.setScalar(explosionScale)
        setLightningIntensity(Math.max(0, 1 - phaseProgress))
        if (particlesRef.current) {
          particlesRef.current.visible = true
          const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
          for (let i = 0; i < positions.length; i += 3) {
            positions[i] += (Math.random() - 0.5) * 0.02
            positions[i + 1] += (Math.random() - 0.5) * 0.02
            positions[i + 2] += (Math.random() - 0.5) * 0.02
          }
          particlesRef.current.geometry.attributes.position.needsUpdate = true
        }
        break
        
      case 4: // Token transformation
        if (swyldsTexture && tokenRef.current.material && phaseProgress > 0.5) {
          const material = tokenRef.current.material as THREE.MeshStandardMaterial
          material.map = swyldsTexture
          material.color.setHex(0xfbbf24)
          material.emissiveIntensity = 0.4
        }
        const morphScale = 1 + Math.sin(phaseProgress * Math.PI) * 0.2
        tokenRef.current.scale.setScalar(morphScale)
        setLightningIntensity(0)
        break
        
      case 5: // Golden pulse
        tokenRef.current.position.y = Math.sin(time * 1.2) * 0.15
        tokenRef.current.rotation.y += delta * 0.8
        const pulseScale = 1.1 + Math.sin(time * 4) * 0.1
        tokenRef.current.scale.setScalar(pulseScale)
        if (tokenRef.current.material) {
          const material = tokenRef.current.material as THREE.MeshStandardMaterial
          material.emissiveIntensity = 0.5 + Math.sin(time * 3) * 0.2
        }
        break
        
      case 6: // Particle dance
        tokenRef.current.position.y = Math.sin(time * 1.2) * 0.15
        tokenRef.current.rotation.y += delta * 0.8
        tokenRef.current.scale.setScalar(1.1 + Math.sin(time * 2) * 0.05)
        if (particlesRef.current) {
          particlesRef.current.visible = true
          particlesRef.current.rotation.y += delta * 0.5
        }
        if (tokenRef.current.material) {
          const material = tokenRef.current.material as THREE.MeshStandardMaterial
          material.emissiveIntensity = 0.3 + Math.sin(time * 2) * 0.1
        }
        break
    }
    
    // Lightning bolt visibility and animation
    if (lightningRef.current) {
      lightningRef.current.visible = animationPhase >= 1 && animationPhase <= 3
      if (lightningRef.current.visible) {
        lightningRef.current.scale.y = lightningIntensity * 2
        lightningRef.current.position.y = 2 - lightningIntensity
        if (lightningRef.current.material) {
          const material = lightningRef.current.material as THREE.MeshBasicMaterial
          material.opacity = lightningIntensity
        }
      }
    }
  })
  
  // Create particle geometry
  const particleCount = 100
  const particles = new THREE.BufferGeometry()
  const positions = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 4
  }
  
  particles.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  
  if (!currentTexture) {
    return (
      <group ref={groupRef}>
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
      </group>
    )
  }
  
  return (
    <group ref={groupRef}>
      {/* Main token */}
      <mesh ref={tokenRef} scale={[2, 2, 0.2]}>
        <cylinderGeometry args={[1, 1, 1, 64]} />
        <meshStandardMaterial 
          map={currentTexture}
          metalness={0.6}
          roughness={0.2}
          transparent={true}
          opacity={1}
        />
      </mesh>
      
      {/* Lightning bolt */}
      <mesh ref={lightningRef} position={[0, 2, 0]} visible={false}>
        <cylinderGeometry args={[0.05, 0.15, 3, 8]} />
        <meshBasicMaterial 
          color={new THREE.Color(0x00d4ff)}
          transparent={true}
          opacity={0}
        />
      </mesh>
      
      {/* Electric particles */}
      <points ref={particlesRef} visible={false}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color={new THREE.Color(0x00d4ff)}
          transparent={true}
          opacity={0.8}
        />
      </points>
    </group>
  )
}

export default SwYLDSTransformationToken