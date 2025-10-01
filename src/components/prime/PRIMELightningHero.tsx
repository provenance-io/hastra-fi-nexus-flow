import { useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import PRIMETransformationToken from "./PRIMETransformationToken";

function LightningOrb() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
    meshRef.current.rotation.y = time * 0.2;
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.1;
  });

  return (
    <Sphere ref={meshRef} args={[1.2, 64, 64]} scale={1.5}>
      <MeshDistortMaterial
        color="#4f46e5"
        attach="material"
        distort={0.6}
        speed={2}
        roughness={0.1}
        metalness={0.8}
      />
    </Sphere>
  );
}

function ElectricField() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.z = time * 0.1;

    groupRef.current.children.forEach((child, i) => {
      child.rotation.y = time * (0.5 + i * 0.1);
      child.position.x = Math.sin(time * 0.3 + i) * 0.5;
      child.position.z = Math.cos(time * 0.3 + i) * 0.5;
    });
  });

  return (
    <group ref={groupRef}>
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[0, 0, 0]}>
          <ringGeometry args={[2 + i * 0.3, 2.1 + i * 0.3, 32]} />
          <meshBasicMaterial
            color={`hsl(${240 + i * 10}, 70%, ${60 + i * 5}%)`}
            transparent
            opacity={0.1 - i * 0.01}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

const PRIMELightningHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Lightning animation on canvas background
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId: number;
    const lightning: Array<{
      x: number;
      y: number;
      opacity: number;
      life: number;
    }> = [];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new lightning bolts occasionally
      if (Math.random() < 0.02) {
        lightning.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          opacity: Math.random() * 0.5 + 0.3,
          life: 20 + Math.random() * 20,
        });
      }

      // Draw and update lightning
      lightning.forEach((bolt, index) => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(79, 70, 229, ${bolt.opacity})`;
        ctx.lineWidth = 2;
        ctx.moveTo(bolt.x, bolt.y);

        // Create jagged lightning path
        for (let i = 0; i < 5; i++) {
          bolt.x += (Math.random() - 0.5) * 60;
          bolt.y += (Math.random() - 0.5) * 60;
          ctx.lineTo(bolt.x, bolt.y);
        }

        ctx.stroke();

        bolt.life--;
        bolt.opacity *= 0.95;

        if (bolt.life <= 0 || bolt.opacity < 0.01) {
          lightning.splice(index, 1);
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-3xl">
      {/* Background canvas for lightning */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20"
        style={{
          background:
            "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)",
        }}
      />

      {/* 3D Scene */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[0, 0, 10]} intensity={1} color="#4f46e5" />
          <pointLight position={[5, 5, 5]} intensity={0.5} color="#06b6d4" />

          <ElectricField />
          <LightningOrb />
          <PRIMETransformationToken />
        </Canvas>
      </div>

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/30" />
    </div>
  );
};

export default PRIMELightningHero;
