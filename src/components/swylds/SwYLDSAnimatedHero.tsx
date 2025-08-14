import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import SwYLDSTransformationToken from './SwYLDSTransformationToken'

const DynamicLighting = () => {
  const lightningLightRef = useRef<THREE.PointLight>(null!)
  const [lightningIntensity, setLightningIntensity] = useState(0)
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    // Create flickering lightning effect
    const flicker = Math.sin(time * 10) * 0.5 + 0.5
    const intensity = lightningIntensity * flicker * 3
    
    if (lightningLightRef.current) {
      lightningLightRef.current.intensity = intensity
    }
  })
  
  return (
    <>
      {/* Ambient lighting for base illumination */}
      <ambientLight intensity={0.2} />
      
      {/* Main directional light */}
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
      
      {/* Blue accent light for wYLDS phase */}
      <pointLight position={[-3, 3, 3]} intensity={0.4} color="#3b82f6" />
      
      {/* Golden accent light for swYLDS phase */}
      <pointLight position={[3, -3, 3]} intensity={0.6} color="#fbbf24" />
      
      {/* Dynamic lightning effect light */}
      <pointLight 
        ref={lightningLightRef}
        position={[0, 4, 0]} 
        intensity={0} 
        color="#00d4ff"
        distance={10}
        decay={2}
      />
      
      {/* Electric blue rim light */}
      <pointLight position={[0, 0, -4]} intensity={0.3} color="#00d4ff" />
    </>
  )
}

const SwYLDSAnimatedHero = () => {
  return (
    <div className="w-64 h-64 md:w-80 md:h-80 mx-auto">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <DynamicLighting />
        <Suspense fallback={null}>
          <SwYLDSTransformationToken />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default SwYLDSAnimatedHero