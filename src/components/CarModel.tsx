
import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { FallbackCarModel } from './FallbackCarModel';

interface CarModelProps {
  modelPath: string;
  color?: string;
  scale?: number;
  position?: [number, number, number];
  type?: 'hatchback' | 'sedan' | 'suv';
}

export const CarModel: React.FC<CarModelProps> = ({ 
  modelPath, 
  color = '#1e40af', 
  scale = 1, 
  position = [0, 0, 0],
  type = 'sedan'
}) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [loadError, setLoadError] = useState(false);
  
  // Load the GLTF model with proper error handling
  const { scene, error } = useGLTF(modelPath);
  
  // Handle loading errors in useEffect to avoid render cycle issues
  useEffect(() => {
    if (error) {
      console.log('Model loading failed, falling back to geometric car:', error);
      setLoadError(true);
    }
  }, [error]);
  
  useFrame((state) => {
    if (meshRef.current && !hovered) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  // If model failed to load, use fallback
  if (loadError || !scene) {
    return <FallbackCarModel color={color} type={type} />;
  }

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

// Remove preload attempts since files don't exist yet
// These will be uncommented once actual GLB files are added
// useGLTF.preload('/models/honda-city.glb');
// useGLTF.preload('/models/maruti-swift.glb');
// useGLTF.preload('/models/hyundai-creta.glb');
