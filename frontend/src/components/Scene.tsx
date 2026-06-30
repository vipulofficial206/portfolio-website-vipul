import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function RetroGrid() {
  const gridRef = useRef<THREE.GridHelper>(null!);

  useFrame((state, delta) => {
    // Scroll the grid towards the camera to simulate moving forward
    if (gridRef.current) {
      gridRef.current.position.z = (gridRef.current.position.z + delta * 2) % 2;
    }
  });

  return (
    <group position={[0, -2, 0]}>
      {/* Base Grid */}
      <gridHelper 
        ref={gridRef}
        args={[100, 50, '#06b6d4', '#06b6d4']} 
        position={[0, 0, 0]}
      />
      {/* Fog to hide the grid fading out */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial color="#050505" />
      </mesh>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050505]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={60} />
        <fog attach="fog" args={['#050505', 5, 25]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 5, -5]} intensity={2} color="#06b6d4" />
        <pointLight position={[5, 2, 5]} intensity={2} color="#d946ef" />
        
        <RetroGrid />
        
        {/* Starfield for deep space effect */}
        <Stars radius={50} depth={50} count={3000} factor={4} saturation={1} fade speed={1} />
      </Canvas>
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#050505]/40 to-[#050505] pointer-events-none" />
      <div className="scanlines pointer-events-none" />
    </div>
  );
}
