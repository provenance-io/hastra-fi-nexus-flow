import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import * as THREE from 'three'

interface Spinning3DYieldTokenProps {
  texture: THREE.Texture
}

const Spinning3DYieldToken = ({ texture }: Spinning3DYieldTokenProps) => {
  const meshRef = useRef<Mesh>(null!)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.7
      meshRef.current.rotation.z += delta * 0.3
    }
  })

  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 0.3]}>
      <cylinderGeometry args={[1, 1, 0.2, 32]} />
      <meshStandardMaterial 
        map={texture} 
        metalness={0.3}
        roughness={0.4}
        emissive={new THREE.Color(0x001122)}
        emissiveIntensity={0.1}
      />
    </mesh>
  )
}

export default Spinning3DYieldToken