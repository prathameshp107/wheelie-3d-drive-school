
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
          // Main body dimensions
          mainBody: { width: 1.6, height: 0.8, length: 3.2 },
          frontSection: { width: 1.6, height: 0.6, length: 0.8 },
          rearSection: { width: 1.5, height: 0.7, length: 0.6 },
          // Roof and windows
          roof: { width: 1.4, height: 0.3, length: 2.2 },
          windshield: { width: 1.3, height: 0.8, length: 0.1 },
          rearWindow: { width: 1.2, height: 0.6, length: 0.1 },
          sideWindows: { width: 0.1, height: 0.5, length: 1.8 },
          // Wheels and positioning
          wheelSize: { radius: 0.3, width: 0.2 },
          wheelPositions: [[-1.2, -0.4, 0.7], [1.2, -0.4, 0.7], [-1.2, -0.4, -0.7], [1.2, -0.4, -0.7]],
          // Details
          headlightSize: 0.15,
          headlightPos: [[-0.6, 0.1, 1.7], [0.6, 0.1, 1.7]],
          grille: { width: 0.8, height: 0.3, depth: 0.05 }
        };
      case 'suv':
        return {
          // Main body dimensions
          mainBody: { width: 1.8, height: 1.2, length: 4.0 },
          frontSection: { width: 1.8, height: 0.8, length: 1.0 },
          rearSection: { width: 1.7, height: 1.0, length: 0.8 },
          // Roof and windows
          roof: { width: 1.6, height: 0.2, length: 2.8 },
          windshield: { width: 1.5, height: 1.0, length: 0.1 },
          rearWindow: { width: 1.4, height: 0.8, length: 0.1 },
          sideWindows: { width: 0.1, height: 0.7, length: 2.2 },
          // Wheels and positioning
          wheelSize: { radius: 0.4, width: 0.25 },
          wheelPositions: [[-1.6, -0.2, 0.8], [1.6, -0.2, 0.8], [-1.6, -0.2, -0.8], [1.6, -0.2, -0.8]],
          // Details
          headlightSize: 0.18,
          headlightPos: [[-0.7, 0.2, 2.1], [0.7, 0.2, 2.1]],
          grille: { width: 1.0, height: 0.4, depth: 0.05 }
        };
      default: // sedan
        return {
          // Main body dimensions
          mainBody: { width: 1.7, height: 0.9, length: 3.8 },
          frontSection: { width: 1.7, height: 0.7, length: 0.9 },
          rearSection: { width: 1.6, height: 0.8, length: 0.9 },
          // Roof and windows
          roof: { width: 1.5, height: 0.25, length: 2.4 },
          windshield: { width: 1.4, height: 0.9, length: 0.1 },
          rearWindow: { width: 1.3, height: 0.7, length: 0.1 },
          sideWindows: { width: 0.1, height: 0.6, length: 2.0 },
          // Wheels and positioning
          wheelSize: { radius: 0.32, width: 0.22 },
          wheelPositions: [[-1.4, -0.35, 0.75], [1.4, -0.35, 0.75], [-1.4, -0.35, -0.75], [1.4, -0.35, -0.75]],
          // Details
          headlightSize: 0.16,
          headlightPos: [[-0.65, 0.15, 2.0], [0.65, 0.15, 2.0]],
          grille: { width: 0.9, height: 0.35, depth: 0.05 }
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
      {/* Main car body */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[specs.mainBody.width, specs.mainBody.height, specs.mainBody.length]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      
      {/* Front section (hood area) */}
      <mesh position={[0, 0.1, specs.mainBody.length/2 + specs.frontSection.length/2]} castShadow receiveShadow>
        <boxGeometry args={[specs.frontSection.width, specs.frontSection.height, specs.frontSection.length]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      
      {/* Rear section (trunk for sedan, rear for others) */}
      <mesh position={[0, 0.05, -specs.mainBody.length/2 - specs.rearSection.length/2]} castShadow receiveShadow>
        <boxGeometry args={[specs.rearSection.width, specs.rearSection.height, specs.rearSection.length]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      
      {/* Roof */}
      <mesh position={[0, specs.mainBody.height/2 + specs.roof.height/2, 0]} castShadow receiveShadow>
        <boxGeometry args={[specs.roof.width, specs.roof.height, specs.roof.length]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      
      {/* Front windshield */}
      <mesh position={[0, specs.mainBody.height/2 + 0.1, specs.roof.length/2 + 0.1]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[specs.windshield.width, specs.windshield.height, specs.windshield.length]} />
        <meshPhysicalMaterial
          color="#87ceeb"
          transparent
          opacity={0.3}
          metalness={0}
          roughness={0}
          transmission={0.9}
        />
      </mesh>
      
      {/* Rear window */}
      <mesh position={[0, specs.mainBody.height/2 + 0.05, -specs.roof.length/2 - 0.1]} rotation={[-0.2, 0, 0]}>
        <boxGeometry args={[specs.rearWindow.width, specs.rearWindow.height, specs.rearWindow.length]} />
        <meshPhysicalMaterial
          color="#87ceeb"
          transparent
          opacity={0.3}
          metalness={0}
          roughness={0}
          transmission={0.9}
        />
      </mesh>
      
      {/* Side windows */}
      <mesh position={[specs.roof.width/2 + 0.05, specs.mainBody.height/2 + 0.1, 0]}>
        <boxGeometry args={[specs.sideWindows.width, specs.sideWindows.height, specs.sideWindows.length]} />
        <meshPhysicalMaterial
          color="#87ceeb"
          transparent
          opacity={0.3}
          metalness={0}
          roughness={0}
          transmission={0.9}
        />
      </mesh>
      
      <mesh position={[-specs.roof.width/2 - 0.05, specs.mainBody.height/2 + 0.1, 0]}>
        <boxGeometry args={[specs.sideWindows.width, specs.sideWindows.height, specs.sideWindows.length]} />
        <meshPhysicalMaterial
          color="#87ceeb"
          transparent
          opacity={0.3}
          metalness={0}
          roughness={0}
          transmission={0.9}
        />
      </mesh>
      
      {/* Headlights */}
      {specs.headlightPos.map((pos, i) => (
        <mesh key={`headlight-${i}`} position={pos}>
          <sphereGeometry args={[specs.headlightSize, 16, 16]} />
          <meshPhysicalMaterial
            color="#f0f8ff"
            emissive="#ffffff"
            emissiveIntensity={0.2}
            metalness={0}
            roughness={0}
            transmission={0.8}
          />
        </mesh>
      ))}
      
      {/* Front grille */}
      <mesh position={[0, 0, specs.mainBody.length/2 + specs.frontSection.length + 0.02]}>
        <boxGeometry args={[specs.grille.width, specs.grille.height, specs.grille.depth]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Wheels with rims */}
      {specs.wheelPositions.map((pos, i) => (
        <group key={i} position={pos}>
          {/* Tire */}
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[specs.wheelSize.radius, specs.wheelSize.radius, specs.wheelSize.width, 32]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
          </mesh>
          {/* Rim */}
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, specs.wheelSize.width/4]}>
            <cylinderGeometry args={[specs.wheelSize.radius * 0.7, specs.wheelSize.radius * 0.7, specs.wheelSize.width/4, 16]} />
            <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1 />
          </mesh>
          {/* Hub */}
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, specs.wheelSize.width/3]}>
            <cylinderGeometry args={[specs.wheelSize.radius * 0.3, specs.wheelSize.radius * 0.3, specs.wheelSize.width/6, 8]} />
            <meshStandardMaterial color="#808080" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      ))}
      
      {/* Side mirrors */}
      <mesh position={[specs.roof.width/2 + 0.15, specs.mainBody.height/2 + 0.1, specs.roof.length/2 - 0.3]}>
        <boxGeometry args={[0.08, 0.06, 0.12]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
      
      <mesh position={[-specs.roof.width/2 - 0.15, specs.mainBody.height/2 + 0.1, specs.roof.length/2 - 0.3]}>
        <boxGeometry args={[0.08, 0.06, 0.12]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
      
      {/* Taillights */}
      <mesh position={[0.5, 0.1, -specs.mainBody.length/2 - specs.rearSection.length - 0.01]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshPhysicalMaterial
          color="#ff4444"
          emissive="#ff0000"
          emissiveIntensity={0.1}
          metalness={0}
          roughness={0}
          transmission={0.7}
        />
      </mesh>
      
      <mesh position={[-0.5, 0.1, -specs.mainBody.length/2 - specs.rearSection.length - 0.01]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshPhysicalMaterial
          color="#ff4444"
          emissive="#ff0000"
          emissiveIntensity={0.1}
          metalness={0}
          roughness={0}
          transmission={0.7}
        />
      </mesh>
      
      {/* Door handles */}
      {[-0.7, 0.7].map((x, i) => (
        <mesh key={`handle-${i}`} position={[x, 0.2, 0.5]}>
          <boxGeometry args={[0.15, 0.03, 0.06]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
};

