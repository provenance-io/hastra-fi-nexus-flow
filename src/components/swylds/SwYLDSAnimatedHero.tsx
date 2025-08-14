import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import SwYLDSTransformationToken from './SwYLDSTransformationToken'

const SwYLDSAnimatedHero = () => {
  return (
    <div className="w-64 h-64 md:w-80 md:h-80 mx-auto">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        {/* Ambient lighting for base illumination */}
        <ambientLight intensity={0.3} />
        
        {/* Main directional light */}
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
        
        {/* Blue accent light for wYLDS phase */}
        <pointLight position={[-3, 3, 3]} intensity={0.6} color="#3b82f6" />
        
        {/* Golden accent light for swYLDS phase */}
        <pointLight position={[3, -3, 3]} intensity={0.8} color="#fbbf24" />
        
        {/* Lightning effect light (animated) */}
        <pointLight position={[0, 8, 0]} intensity={2} color="#00d4ff" />
        
        <Suspense fallback={null}>
          <SwYLDSTransformationToken />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default SwYLDSAnimatedHero