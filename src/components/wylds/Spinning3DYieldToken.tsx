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
      meshRef.current.rotation.x += delta * 1.2
    }
  })

  return (
    <mesh ref={meshRef} scale={[1.8, 1.8, 0.15]}>
      <cylinderGeometry args={[1, 1, 1, 64]} />
      <meshStandardMaterial 
        map={texture} 
        metalness={0.6}
        roughness={0.2}
        emissive={new THREE.Color(0x001133)}
        emissiveIntensity={0.05}
      />
    </mesh>
  )
}

export default Spinning3DYieldToken