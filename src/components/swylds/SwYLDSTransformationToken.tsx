import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, Group, BufferGeometry, Material } from 'three'
import * as THREE from 'three'

const SwYLDSTransformationToken = () => {
  const groupRef = useRef<Group>(null!)
  const tokenRef = useRef<Mesh>(null!)
  const lightningRef = useRef<Mesh>(null!)
  const particlesRef = useRef<Mesh>(null!)
  
  const [wyldsTexture, setWyldsTexture] = useState<THREE.Texture | null>(null)
  const [swyldsTexture, setSwyldsTexture] = useState<THREE.Texture | null>(null)
  
  const [animationPhase, setAnimationPhase] = useState(0)
  const [phaseTimer, setPhaseTimer] = useState(0)
  
  // Animation phases:
  // 0: wYLDS floating (3s)
  // 1: Lightning building (1s)
  // 2: Lightning strike (0.5s)
  // 3: Transformation explosion (1s)
  // 4: swYLDS emerges (1s)
  // 5: swYLDS pulses (3s)
  // 6: Fade transition (1s)
  
  const phaseDurations = [3, 1, 0.5, 1, 1, 3, 1]
  
  useEffect(() => {
    const loader = new THREE.TextureLoader()
    
    // Load wYLDS texture (using the same image from wYLDs hero page)
    loader.load('/lovable-uploads/cb96356b-822d-4dc0-963a-96ef43bfedbd.png', (texture) => {
      setWyldsTexture(texture)
    })
    
    // Load swYLDS texture (using the user's Y token image)
    loader.load('/lovable-uploads/f0615d6f-eee8-43fb-b807-b7d2685d3105.png', (texture) => {
      setSwyldsTexture(texture)
    })
  }, [])

  useFrame((state, delta) => {
    if (!tokenRef.current || !groupRef.current) return
    
    setPhaseTimer(prev => prev + delta)
    
    // Check if we need to advance to next phase
    if (phaseTimer >= phaseDurations[animationPhase]) {
      setPhaseTimer(0)
      setAnimationPhase(prev => (prev + 1) % phaseDurations.length)
    }
    
    const phaseProgress = Math.min(phaseTimer / phaseDurations[animationPhase], 1)
    const time = state.clock.elapsedTime
    
    switch (animationPhase) {
      case 0: // wYLDS floating
        groupRef.current.position.y = Math.sin(time * 0.8) * 0.1
        tokenRef.current.rotation.y += delta * 0.5
        tokenRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.05)
        break
        
      case 1: // Lightning building
        groupRef.current.position.y = Math.sin(time * 0.8) * 0.1
        tokenRef.current.rotation.y += delta * 0.7
        if (lightningRef.current) {
          lightningRef.current.visible = true
          const material = lightningRef.current.material as THREE.MeshBasicMaterial
          material.opacity = phaseProgress * 0.7
        }
        break
        
      case 2: // Lightning strike
        if (lightningRef.current) {
          const material = lightningRef.current.material as THREE.MeshBasicMaterial
          material.opacity = 1
          lightningRef.current.scale.y = 1 + Math.sin(time * 20) * 0.2
        }
        tokenRef.current.scale.setScalar(1 + phaseProgress * 0.3)
        groupRef.current.position.y += Math.sin(time * 30) * 0.02
        break
        
      case 3: // Transformation explosion
        if (particlesRef.current) {
          particlesRef.current.visible = true
          particlesRef.current.scale.setScalar(phaseProgress * 2)
          const particleMat = particlesRef.current.material as THREE.MeshBasicMaterial
          particleMat.opacity = 1 - phaseProgress
        }
        tokenRef.current.scale.setScalar(1.3 - phaseProgress * 0.3)
        if (lightningRef.current) {
          const lightningMat = lightningRef.current.material as THREE.MeshBasicMaterial
          lightningMat.opacity = 1 - phaseProgress
        }
        break
        
      case 4: // swYLDS emerges
        tokenRef.current.scale.setScalar(1 + Math.sin(phaseProgress * Math.PI) * 0.2)
        tokenRef.current.rotation.y += delta * 2
        if (particlesRef.current) {
          particlesRef.current.visible = false
        }
        if (lightningRef.current) {
          lightningRef.current.visible = false
        }
        break
        
      case 5: // swYLDS pulses
        tokenRef.current.rotation.y += delta * 0.8
        tokenRef.current.scale.setScalar(1 + Math.sin(time * 3) * 0.1)
        groupRef.current.position.y = Math.sin(time * 1.2) * 0.15
        break
        
      case 6: // Fade transition
        const tokenMaterial = tokenRef.current.material as THREE.MeshStandardMaterial
        tokenMaterial.opacity = 1 - phaseProgress
        tokenRef.current.rotation.y += delta * 0.5
        break
    }
  })
  
  if (!wyldsTexture || !swyldsTexture) {
    return null
  }
  
  // Create lightning bolt geometry
  const lightningGeometry = new THREE.CylinderGeometry(0.02, 0.1, 4, 8)
  const lightningMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color(0x00d4ff),
    transparent: true,
    opacity: 0
  })
  
  // Create particle system geometry
  const particleGeometry = new THREE.SphereGeometry(1, 16, 16)
  const particleMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color(0xfbbf24),
    transparent: true,
    opacity: 0,
    wireframe: true
  })
  
  // Choose texture and color based on animation phase
  const currentTexture = animationPhase >= 4 ? swyldsTexture : wyldsTexture
  const tokenColor = animationPhase >= 4 ? new THREE.Color(0xfbbf24) : new THREE.Color(0x94a3b8)
  const emissiveColor = animationPhase >= 4 ? new THREE.Color(0x992200) : new THREE.Color(0x001133)
  const emissiveIntensity = animationPhase >= 4 ? 0.3 : 0.05
  
  return (
    <group ref={groupRef}>
      {/* Main token */}
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
      
      {/* Lightning bolt */}
      <mesh ref={lightningRef} position={[0, 2, 0]} visible={false}>
        <primitive object={lightningGeometry} />
        <primitive object={lightningMaterial} />
      </mesh>
      
      {/* Particle explosion effect */}
      <mesh ref={particlesRef} visible={false}>
        <primitive object={particleGeometry} />
        <primitive object={particleMaterial} />
      </mesh>
    </group>
  )
}

export default SwYLDSTransformationToken