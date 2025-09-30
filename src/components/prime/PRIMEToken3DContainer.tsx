import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import Spinning3DYieldToken from "./Spinning3DYieldToken";

const PRIMEToken3DContainer = () => {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      "/lovable-uploads/cb96356b-822d-4dc0-963a-96ef43bfedbd.png",
      (loadedTexture) => {
        setTexture(loadedTexture);
      }
    );
  }, []);

  if (!texture) {
    return (
      <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-electric-blue border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-32 h-32 md:w-40 md:h-40">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#00ffff"
        />
        <Suspense fallback={null}>
          <Spinning3DYieldToken texture={texture} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default PRIMEToken3DContainer;
