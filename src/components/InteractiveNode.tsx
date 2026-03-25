"use client";
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function InteractiveNode() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const shellRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const x = (state.pointer.x * Math.PI) / 4;
    const y = (state.pointer.y * Math.PI) / 4;

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x, 0.1);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y, 0.1);
      groupRef.current.position.y = Math.sin(time) * 0.1;
    }

    if (shellRef.current) {
      shellRef.current.rotation.x = time * 0.1;
      shellRef.current.rotation.y = time * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere ref={coreRef as any} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#4b5563"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      <Icosahedron ref={shellRef as any} args={[1.5, 1]}>
        <meshStandardMaterial wireframe color="#9ca3af" opacity={0.5} transparent />
      </Icosahedron>
    </group>
  );
}
