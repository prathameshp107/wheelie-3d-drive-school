
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FallbackCarModelProps {
  color?: string;
  type?: 'hatchback' | 'sedan' | 'suv';
}

export const FallbackCarModel: React.FC<FallbackCarModelProps> = ({ 
  color = '#1e40af', 
  type = 'sedan' 
}) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current && !hovered) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  const getCarDimensions = () => {
    switch (type) {
      case 'hatchback':
        return {
          body: [3.5, 1, 1.8] as [number, number, number],
          roof: [2.8, 0.4, 1.6] as [number, number, number],
          windows: [2.6, 0.2, 1.4] as [number, number, number],
          wheelPositions: [[-1.4, -0.3, 0.9], [1.4, -0.3, 0.9], [-1.4, -0.3, -0.9], [1.4, -0.3, -0.9]] as const,
          wheelSize: [0.4, 0.4, 0.3] as [number, number, number]
        };
      case 'suv':
        return {
          body: [4.2, 1.6, 2] as [number, number, number],
          roof: [3.8, 0.4, 1.8] as [number, number, number],
          windows: [3.6, 0.2, 1.6] as [number, number, number],
          wheelPositions: [[-1.8, -0.2, 1], [1.8, -0.2, 1], [-1.8, -0.2, -1], [1.8, -0.2, -1]] as const,
          wheelSize: [0.5, 0.5, 0.4] as [number, number, number]
        };
      default: // sedan
        return {
          body: [4, 1, 1.8] as [number, number, number],
          roof: [3.2, 0.4, 1.6] as [number, number, number],
          windows: [3, 0.2, 1.4] as [number, number, number],
          wheelPositions: [[-1.6, -0.3, 0.9], [1.6, -0.3, 0.9], [-1.6, -0.3, -0.9], [1.6, -0.3, -0.9]] as const,
          wheelSize: [0.4, 0.4, 0.3] as [number, number, number]
        };
    }
  };

  const dimensions = getCarDimensions();

  return (
    <group 
      ref={meshRef}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Main body */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={dimensions.body} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      
      {/* Roof */}
      <mesh position={[0, 1.2, 0]} castShadow receiveShadow>
        <boxGeometry args={dimensions.roof} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      
      {/* Windows */}
      <mesh position={[0, 1.3, 0]}>
        <boxGeometry args={dimensions.windows} />
        <meshPhysicalMaterial
          color="#87ceeb"
          transparent
          opacity={0.3}
          metalness={0}
          roughness={0}
        />
      </mesh>
      
      {/* Wheels */}
      {dimensions.wheelPositions.map((pos, i) => (
        <mesh key={i} position={pos} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={dimensions.wheelSize} />
          <meshStandardMaterial color="#2a2a2a" />
        </mesh>
      ))}
    </group>
  );
};
