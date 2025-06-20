
import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CarModelProps {
  modelPath: string;
  color?: string;
  scale?: number;
  position?: [number, number, number];
}

export const CarModel: React.FC<CarModelProps> = ({ 
  modelPath, 
  color = '#1e40af', 
  scale = 1, 
  position = [0, 0, 0] 
}) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  // Load the GLTF model
  const { scene } = useGLTF(modelPath);
  
  useFrame((state) => {
    if (meshRef.current && !hovered) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  // Clone the scene to avoid modifying the original
  const clonedScene = scene.clone();
  
  // Apply color to car body materials
  clonedScene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      if (child.material && child.name.toLowerCase().includes('body')) {
        const material = child.material as THREE.MeshStandardMaterial;
        material.color.set(color);
        material.metalness = 0.9;
        material.roughness = 0.1;
      }
    }
  });

  return (
    <group 
      ref={meshRef}
      scale={scale}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <primitive object={clonedScene} />
    </group>
  );
};

// Preload models for better performance
useGLTF.preload('/models/honda-city.glb');
useGLTF.preload('/models/maruti-swift.glb');
useGLTF.preload('/models/hyundai-creta.glb');
