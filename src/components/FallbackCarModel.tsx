
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
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  const getCarSpecs = () => {
    switch (type) {
      case 'hatchback':
        return {
          mainBody: { width: 1.6, height: 0.8, length: 3.2 },
          frontSection: { width: 1.6, height: 0.6, length: 0.8 },
          rearSection: { width: 1.5, height: 0.7, length: 0.6 },
          roof: { width: 1.4, height: 0.3, length: 2.2 },
          wheelSize: { radius: 0.3, width: 0.2 },
          wheelPositions: [[-1.2, -0.4, 0.7], [1.2, -0.4, 0.7], [-1.2, -0.4, -0.7], [1.2, -0.4, -0.7]] as [number, number, number][],
        };
      case 'suv':
        return {
          mainBody: { width: 1.8, height: 1.2, length: 4.0 },
          frontSection: { width: 1.8, height: 0.8, length: 1.0 },
          rearSection: { width: 1.7, height: 1.0, length: 0.8 },
          roof: { width: 1.6, height: 0.2, length: 2.8 },
          wheelSize: { radius: 0.4, width: 0.25 },
          wheelPositions: [[-1.6, -0.2, 0.8], [1.6, -0.2, 0.8], [-1.6, -0.2, -0.8], [1.6, -0.2, -0.8]] as [number, number, number][],
        };
      default: // sedan
        return {
          mainBody: { width: 1.7, height: 0.9, length: 3.8 },
          frontSection: { width: 1.7, height: 0.7, length: 0.9 },
          rearSection: { width: 1.6, height: 0.8, length: 0.9 },
          roof: { width: 1.5, height: 0.25, length: 2.4 },
          wheelSize: { radius: 0.32, width: 0.22 },
          wheelPositions: [[-1.4, -0.35, 0.75], [1.4, -0.35, 0.75], [-1.4, -0.35, -0.75], [1.4, -0.35, -0.75]] as [number, number, number][],
        };
    }
  };

  const specs = getCarSpecs();

  return (
    <group 
      ref={meshRef}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      position={[0, 0.5, 0]}
    >
      {/* Car Body */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[specs.mainBody.width, specs.mainBody.height, specs.mainBody.length]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>

      {/* Front Section */}
      <mesh position={[0, 0.15, specs.mainBody.length/2 + specs.frontSection.length/2]} castShadow receiveShadow>
        <boxGeometry args={[specs.frontSection.width, specs.frontSection.height, specs.frontSection.length]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>

      {/* Rear Section */}
      <mesh position={[0, 0.1, -specs.mainBody.length/2 - specs.rearSection.length/2]} castShadow receiveShadow>
        <boxGeometry args={[specs.rearSection.width, specs.rearSection.height, specs.rearSection.length]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>

      {/* Roof */}
      <mesh position={[0, specs.mainBody.height/2 + specs.roof.height/2, 0]} castShadow receiveShadow>
        <boxGeometry args={[specs.roof.width, specs.roof.height, specs.roof.length]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>

      {/* Improved Wheels with realistic design */}
      {specs.wheelPositions.map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          {/* Tire with realistic rubber material */}
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[specs.wheelSize.radius, specs.wheelSize.radius, specs.wheelSize.width, 32]} />
            <meshStandardMaterial 
              color="#1a1a1a" 
              roughness={0.9}
              metalness={0.1}
            />
          </mesh>
          
          {/* Alloy Rim */}
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, specs.wheelSize.width/3]}>
            <cylinderGeometry args={[specs.wheelSize.radius * 0.75, specs.wheelSize.radius * 0.75, specs.wheelSize.width/3, 20]} />
            <meshStandardMaterial 
              color="#e0e0e0" 
              metalness={0.95} 
              roughness={0.05}
            />
          </mesh>
          
          {/* Rim Spokes */}
          {[0, 1, 2, 3, 4].map((spoke) => (
            <mesh 
              key={spoke}
              rotation={[Math.PI / 2, 0, (spoke * Math.PI * 2) / 5]} 
              position={[0, 0, specs.wheelSize.width/2.5]}
            >
              <boxGeometry args={[0.03, specs.wheelSize.radius * 0.6, 0.02]} />
              <meshStandardMaterial 
                color="#c0c0c0" 
                metalness={0.9} 
                roughness={0.1}
              />
            </mesh>
          ))}
          
          {/* Center Hub */}
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, specs.wheelSize.width/2.5]}>
            <cylinderGeometry args={[specs.wheelSize.radius * 0.25, specs.wheelSize.radius * 0.25, specs.wheelSize.width/8, 12]} />
            <meshStandardMaterial 
              color="#606060" 
              metalness={0.9} 
              roughness={0.1}
            />
          </mesh>
        </group>
      ))}

      {/* Headlights */}
      <mesh position={[-0.6, 0.15, specs.mainBody.length/2 + specs.frontSection.length + 0.01]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshPhysicalMaterial
          color="#f8f8ff"
          emissive="#ffffff"
          emissiveIntensity={0.3}
          transmission={0.9}
        />
      </mesh>
      <mesh position={[0.6, 0.15, specs.mainBody.length/2 + specs.frontSection.length + 0.01]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshPhysicalMaterial
          color="#f8f8ff"
          emissive="#ffffff"
          emissiveIntensity={0.3}
          transmission={0.9}
        />
      </mesh>

      {/* Grille */}
      <mesh position={[0, 0, specs.mainBody.length/2 + specs.frontSection.length + 0.02]}>
        <boxGeometry args={[0.8, 0.3, 0.05]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.8} 
          roughness={0.2}
        />
      </mesh>

      {/* Windows */}
      <mesh position={[0, specs.mainBody.height/2 + 0.15, 0.4]} rotation={[0.15, 0, 0]}>
        <boxGeometry args={[1.3, 0.8, 0.1]} />
        <meshPhysicalMaterial
          color="#87ceeb"
          transparent
          opacity={0.2}
          transmission={0.95}
        />
      </mesh>

      {/* Side Windows */}
      <mesh position={[specs.roof.width/2 + 0.05, specs.mainBody.height/2 + 0.15, 0]}>
        <boxGeometry args={[0.1, 0.5, 1.8]} />
        <meshPhysicalMaterial
          color="#87ceeb"
          transparent
          opacity={0.2}
          transmission={0.95}
        />
      </mesh>
      <mesh position={[-specs.roof.width/2 - 0.05, specs.mainBody.height/2 + 0.15, 0]}>
        <boxGeometry args={[0.1, 0.5, 1.8]} />
        <meshPhysicalMaterial
          color="#87ceeb"
          transparent
          opacity={0.2}
          transmission={0.95}
        />
      </mesh>
    </group>
  );
};
