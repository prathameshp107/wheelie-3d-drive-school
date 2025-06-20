
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface CarModelProps {
  color?: string;
  type?: 'hatchback' | 'sedan' | 'suv';
}

const CarModel: React.FC<CarModelProps> = ({ color = '#1e40af', type = 'sedan' }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current && !hovered) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  // Different car geometries based on type
  const getCarGeometry = () => {
    switch (type) {
      case 'hatchback':
        return (
          <group ref={meshRef}>
            {/* Main body - more compact */}
            <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
              <boxGeometry args={[3.5, 1, 1.8]} />
              <meshPhysicalMaterial
                color={color}
                metalness={0.9}
                roughness={0.1}
                clearcoat={1}
                clearcoatRoughness={0.1}
              />
            </mesh>
            {/* Roof - shorter */}
            <mesh position={[0, 1.2, 0]} castShadow receiveShadow>
              <boxGeometry args={[2.8, 0.4, 1.6]} />
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
              <boxGeometry args={[2.6, 0.2, 1.4]} />
              <meshPhysicalMaterial
                color="#87ceeb"
                transparent
                opacity={0.3}
                metalness={0}
                roughness={0}
              />
            </mesh>
            {/* Wheels */}
            {([-1.4, -0.3, 0.9] as const, [1.4, -0.3, 0.9] as const, [-1.4, -0.3, -0.9] as const, [1.4, -0.3, -0.9] as const).map((pos, i) => (
              <mesh key={i} position={pos} rotation={[Math.PI / 2, 0, 0]} castShadow>
                <cylinderGeometry args={[0.4, 0.4, 0.3]} />
                <meshStandardMaterial color="#2a2a2a" />
              </mesh>
            ))}
          </group>
        );
      case 'suv':
        return (
          <group ref={meshRef}>
            {/* Main body - taller and larger */}
            <mesh position={[0, 0.8, 0]} castShadow receiveShadow>
              <boxGeometry args={[4.2, 1.6, 2]} />
              <meshPhysicalMaterial
                color={color}
                metalness={0.9}
                roughness={0.1}
                clearcoat={1}
                clearcoatRoughness={0.1}
              />
            </mesh>
            {/* Roof */}
            <mesh position={[0, 1.8, 0]} castShadow receiveShadow>
              <boxGeometry args={[3.8, 0.4, 1.8]} />
              <meshPhysicalMaterial
                color={color}
                metalness={0.9}
                roughness={0.1}
                clearcoat={1}
                clearcoatRoughness={0.1}
              />
            </mesh>
            {/* Windows */}
            <mesh position={[0, 1.9, 0]}>
              <boxGeometry args={[3.6, 0.2, 1.6]} />
              <meshPhysicalMaterial
                color="#87ceeb"
                transparent
                opacity={0.3}
                metalness={0}
                roughness={0}
              />
            </mesh>
            {/* Wheels - larger */}
            {([-1.8, -0.2, 1] as const, [1.8, -0.2, 1] as const, [-1.8, -0.2, -1] as const, [1.8, -0.2, -1] as const).map((pos, i) => (
              <mesh key={i} position={pos} rotation={[Math.PI / 2, 0, 0]} castShadow>
                <cylinderGeometry args={[0.5, 0.5, 0.4]} />
                <meshStandardMaterial color="#2a2a2a" />
              </mesh>
            ))}
          </group>
        );
      default: // sedan
        return (
          <group ref={meshRef}>
            {/* Main body */}
            <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
              <boxGeometry args={[4, 1, 1.8]} />
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
              <boxGeometry args={[3.2, 0.4, 1.6]} />
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
              <boxGeometry args={[3, 0.2, 1.4]} />
              <meshPhysicalMaterial
                color="#87ceeb"
                transparent
                opacity={0.3}
                metalness={0}
                roughness={0}
              />
            </mesh>
            {/* Wheels */}
            {([-1.6, -0.3, 0.9] as const, [1.6, -0.3, 0.9] as const, [-1.6, -0.3, -0.9] as const, [1.6, -0.3, -0.9] as const).map((pos, i) => (
              <mesh key={i} position={pos} rotation={[Math.PI / 2, 0, 0]} castShadow>
                <cylinderGeometry args={[0.4, 0.4, 0.3]} />
                <meshStandardMaterial color="#2a2a2a" />
              </mesh>
            ))}
          </group>
        );
    }
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full h-full"
    >
      {getCarGeometry()}
    </div>
  );
};

interface Car3DProps {
  color?: string;
  type?: 'hatchback' | 'sedan' | 'suv';
  className?: string;
}

const Car3D: React.FC<Car3DProps> = ({ color, type, className = "w-full h-96" }) => {
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
        <CarModel color={color} type={type} />
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
