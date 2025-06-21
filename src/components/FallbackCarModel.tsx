
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
          // Main body dimensions - compact hatchback
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
          wheelPositions: [[-1.2, -0.4, 0.7], [1.2, -0.4, 0.7], [-1.2, -0.4, -0.7], [1.2, -0.4, -0.7]] as [number, number, number][],
          // Details
          headlightSize: 0.15,
          headlightPos: [[-0.6, 0.1, 1.7], [0.6, 0.1, 1.7]] as [number, number, number][],
          grille: { width: 0.8, height: 0.3, depth: 0.05 }
        };
      case 'suv':
        return {
          // Main body dimensions - large SUV
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
          wheelPositions: [[-1.6, -0.2, 0.8], [1.6, -0.2, 0.8], [-1.6, -0.2, -0.8], [1.6, -0.2, -0.8]] as [number, number, number][],
          // Details
          headlightSize: 0.18,
          headlightPos: [[-0.7, 0.2, 2.1], [0.7, 0.2, 2.1]] as [number, number, number][],
          grille: { width: 1.0, height: 0.4, depth: 0.05 }
        };
      default: // sedan
        return {
          // Main body dimensions - elegant sedan
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
          wheelPositions: [[-1.4, -0.35, 0.75], [1.4, -0.35, 0.75], [-1.4, -0.35, -0.75], [1.4, -0.35, -0.75]] as [number, number, number][],
          // Details
          headlightSize: 0.16,
          headlightPos: [[-0.65, 0.15, 2.0], [0.65, 0.15, 2.0]] as [number, number, number][],
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
      {/* Car body with curved design */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[specs.mainBody.width, specs.mainBody.height, specs.mainBody.length]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Front hood with curved design */}
      <mesh position={[0, 0.15, specs.mainBody.length/2 + specs.frontSection.length/2]} castShadow receiveShadow>
        <boxGeometry args={[specs.frontSection.width, specs.frontSection.height, specs.frontSection.length]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Rear trunk section */}
      <mesh position={[0, 0.1, -specs.mainBody.length/2 - specs.rearSection.length/2]} castShadow receiveShadow>
        <boxGeometry args={[specs.rearSection.width, specs.rearSection.height, specs.rearSection.length]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Sleek curved roof */}
      <mesh position={[0, specs.mainBody.height/2 + specs.roof.height/2, 0]} castShadow receiveShadow>
        <boxGeometry args={[specs.roof.width, specs.roof.height, specs.roof.length]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Angled front windshield */}
      <mesh position={[0, specs.mainBody.height/2 + 0.15, specs.roof.length/2 + 0.15]} rotation={[0.15, 0, 0]}>
        <boxGeometry args={[specs.windshield.width, specs.windshield.height, specs.windshield.length]} />
        <meshPhysicalMaterial
          color="#87ceeb"
          transparent
          opacity={0.2}
          metalness={0}
          roughness={0}
          transmission={0.95}
          thickness={0.1}
        />
      </mesh>

      {/* Angled rear window */}
      <mesh position={[0, specs.mainBody.height/2 + 0.1, -specs.roof.length/2 - 0.15]} rotation={[-0.15, 0, 0]}>
        <boxGeometry args={[specs.rearWindow.width, specs.rearWindow.height, specs.rearWindow.length]} />
        <meshPhysicalMaterial
          color="#87ceeb"
          transparent
          opacity={0.2}
          metalness={0}
          roughness={0}
          transmission={0.95}
          thickness={0.1}
        />
      </mesh>

      {/* Side windows */}
      <mesh position={[specs.roof.width/2 + 0.05, specs.mainBody.height/2 + 0.15, 0]}>
        <boxGeometry args={[specs.sideWindows.width, specs.sideWindows.height, specs.sideWindows.length]} />
        <meshPhysicalMaterial
          color="#87ceeb"
          transparent
          opacity={0.2}
          metalness={0}
          roughness={0}
          transmission={0.95}
          thickness={0.1}
        />
      </mesh>

      <mesh position={[-specs.roof.width/2 - 0.05, specs.mainBody.height/2 + 0.15, 0]}>
        <boxGeometry args={[specs.sideWindows.width, specs.sideWindows.height, specs.sideWindows.length]} />
        <meshPhysicalMaterial
          color="#87ceeb"
          transparent
          opacity={0.2}
          metalness={0}
          roughness={0}
          transmission={0.95}
          thickness={0.1}
        />
      </mesh>

      {/* Realistic LED headlights with glow */}
      {specs.headlightPos.map((pos, i) => (
        <group key={`headlight-${i}`} position={pos as [number, number, number]}>
          <mesh>
            <sphereGeometry args={[specs.headlightSize, 20, 20]} />
            <meshPhysicalMaterial
              color="#f8f8ff"
              emissive="#ffffff"
              emissiveIntensity={0.3}
              metalness={0}
              roughness={0}
              transmission={0.9}
              thickness={0.1}
            />
          </mesh>
          <pointLight
            position={[0, 0, 0.1]}
            intensity={0.5}
            distance={5}
            color="#ffffff"
          />
        </group>
      ))}

      {/* Modern front grille */}
      <mesh position={[0, 0, specs.mainBody.length/2 + specs.frontSection.length + 0.02]}>
        <boxGeometry args={[specs.grille.width, specs.grille.height, specs.grille.depth]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.8} 
          roughness={0.2}
        />
      </mesh>

      {/* High-detail wheels with sport rims */}
      {specs.wheelPositions.map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          {/* Tire with realistic tread */}
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[specs.wheelSize.radius, specs.wheelSize.radius, specs.wheelSize.width, 32]} />
            <meshStandardMaterial 
              color="#0a0a0a" 
              roughness={0.9}
              normalScale={[0.5, 0.5]}
            />
          </mesh>
          {/* Sport rim */}
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, specs.wheelSize.width/3]}>
            <cylinderGeometry args={[specs.wheelSize.radius * 0.75, specs.wheelSize.radius * 0.75, specs.wheelSize.width/3, 20]} />
            <meshStandardMaterial 
              color="#e0e0e0" 
              metalness={0.95} 
              roughness={0.05}
            />
          </mesh>
          {/* Center hub */}
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

      {/* Aerodynamic side mirrors */}
      <mesh position={[specs.roof.width/2 + 0.2, specs.mainBody.height/2 + 0.2, specs.roof.length/2 - 0.4]}>
        <boxGeometry args={[0.12, 0.08, 0.15]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
      </mesh>

      <mesh position={[-specs.roof.width/2 - 0.2, specs.mainBody.height/2 + 0.2, specs.roof.length/2 - 0.4]}>
        <boxGeometry args={[0.12, 0.08, 0.15]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Modern LED taillights */}
      <mesh position={[0.6, 0.15, -specs.mainBody.length/2 - specs.rearSection.length - 0.01]}>
        <boxGeometry args={[0.3, 0.15, 0.05]} />
        <meshPhysicalMaterial
          color="#ff2020"
          emissive="#ff0000"
          emissiveIntensity={0.2}
          metalness={0}
          roughness={0}
          transmission={0.8}
        />
      </mesh>

      <mesh position={[-0.6, 0.15, -specs.mainBody.length/2 - specs.rearSection.length - 0.01]}>
        <boxGeometry args={[0.3, 0.15, 0.05]} />
        <meshPhysicalMaterial
          color="#ff2020"
          emissive="#ff0000"
          emissiveIntensity={0.2}
          metalness={0}
          roughness={0}
          transmission={0.8}
        />
      </mesh>

      {/* Chrome door handles */}
      {[-0.8, 0.8].map((x, i) => (
        <mesh key={`handle-${i}`} position={[x, 0.25, 0.6]}>
          <boxGeometry args={[0.18, 0.04, 0.08]} />
          <meshStandardMaterial 
            color="#c8c8c8" 
            metalness={0.95} 
            roughness={0.05}
          />
        </mesh>
      ))}

      {/* Rear spoiler for sporty look */}
      {type === 'sedan' && (
        <mesh position={[0, specs.mainBody.height/2 + 0.4, -specs.mainBody.length/2 - 0.3]}>
          <boxGeometry args={[1.2, 0.08, 0.25]} />
          <meshPhysicalMaterial
            color={color}
            metalness={0.9}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.05}
          />
        </mesh>
      )}
    </group>
  );
};
