import { useRef, useState, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

const SYLDSTransformationToken = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  
  // Load token texture (use fallback if loading fails)
  let texture: THREE.Texture | null = null;
  try {
    texture = useLoader(TextureLoader, '/lovable-uploads/e7aaba79-32ba-4351-820f-5388f7bed1c2.png');
  } catch (error) {
    // Load sYLDS texture
    try {
      texture = useLoader(TextureLoader, '/lovable-uploads/cb25764a-a760-4bdf-9502-6b82befb91eb.png');
    } catch (fallbackError) {
      console.error('Failed to load sYLDS texture:', error)
    }
  }

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (meshRef.current) {
      // Gentle floating motion
      meshRef.current.position.y = Math.sin(time * 0.8) * 0.1;
      meshRef.current.rotation.y = time * 0.5;
      meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
      
      // Scale on hover
      const targetScale = hovered ? 1.1 : 1;
      meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1);
      meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, targetScale, 0.1);
      meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, targetScale, 0.1);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[2, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <cylinderGeometry args={[0.8, 0.8, 0.1, 32]} />
      <meshStandardMaterial
        map={texture}
        metalness={0.7}
        roughness={0.2}
        emissive="#4f46e5"
        emissiveIntensity={hovered ? 0.3 : 0.1}
      />
    </mesh>
  );
};

export default SYLDSTransformationToken;