
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import { CarModel } from './CarModel';
import { FallbackCarModel } from './FallbackCarModel';

interface Car3DProps {
  color?: string;
  type?: 'hatchback' | 'sedan' | 'suv';
  className?: string;
}

const Car3D: React.FC<Car3DProps> = ({ color = '#1e40af', type = 'sedan', className = "w-full h-96" }) => {
  // Map car types to model paths
  const getModelPath = (carType: string) => {
    switch (carType) {
      case 'hatchback':
        return '/models/maruti-swift.glb';
      case 'suv':
        return '/models/hyundai-creta.glb';
      default: // sedan
        return '/models/honda-city.glb';
    }
  };

  const modelPath = getModelPath(type);

  return (
    <div className={className}>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[5, 3, 5]} />
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 10]}
          intensity={1}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={<FallbackCarModel color={color} type={type} />}>
          <CarModel 
            modelPath={modelPath}
            color={color}
            scale={1}
            position={[0, -1, 0]}
            type={type}
          />
        </Suspense>
        
        <Environment preset="city" />
        <ContactShadows position={[0, -1.4, 0]} opacity={0.4} scale={10} blur={2.5} />
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={10}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
        />
      </Canvas>
    </div>
  );
};

export default Car3D;
