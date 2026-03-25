"use client";
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function GlobeBlob3D() {
  const globeGroupRef = useRef<THREE.Group>(null);
  const blobsGroupRef = useRef<THREE.Group>(null);

  const blobs = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / 15);
      const theta = Math.sqrt(15 * Math.PI) * phi;
      return {
        baseR: 1.8 + Math.random() * 0.5,
        theta,
        phi,
        speedFactor: 0.5 + Math.random(),
        distortOffset: Math.random() * Math.PI * 2,
      };
    });
  }, []);

  const blobRefs = useRef<THREE.Mesh[]>([]);
  const materialRefs = useRef<any[]>([]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (globeGroupRef.current) {
      globeGroupRef.current.rotation.y = time * 0.15;
      globeGroupRef.current.rotation.x = time * 0.05;
      
      const targetX = (state.pointer.x * Math.PI) / 6;
      const targetY = (state.pointer.y * Math.PI) / 6;
      globeGroupRef.current.rotation.z = THREE.MathUtils.lerp(globeGroupRef.current.rotation.z, -targetX, 0.1);
      globeGroupRef.current.rotation.x = THREE.MathUtils.lerp(globeGroupRef.current.rotation.x, targetY, 0.1);
    }
    
    // Calculate mouse magnitude to trigger blob dispersions
    const mouseDist = Math.max(0, Math.min(1, Math.sqrt(state.pointer.x ** 2 + state.pointer.y ** 2)));
    
    // Orbital expansion and heavy distortion based on mouse
    const expansion = 1 + mouseDist * 1.2; 
    const distortionMultiplier = 0.2 + mouseDist * 0.8;

    if (blobsGroupRef.current) {
      blobsGroupRef.current.rotation.y = -time * 0.1;
      blobsGroupRef.current.rotation.z = time * 0.05;
    }

    blobRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const { baseR, theta, phi, speedFactor, distortOffset } = blobs[i];
      const targetR = baseR * expansion + Math.sin(time * speedFactor + distortOffset) * 0.2;
      
      const currentR = THREE.MathUtils.lerp((mesh.position.length() || baseR), targetR, 0.05);
      
      mesh.position.set(
        currentR * Math.cos(theta) * Math.sin(phi),
        currentR * Math.sin(theta) * Math.sin(phi),
        currentR * Math.cos(phi)
      );
      
      const mat = materialRefs.current[i];
      if (mat) {
        mat.distort = THREE.MathUtils.lerp(mat.distort, distortionMultiplier, 0.1);
        mat.speed = THREE.MathUtils.lerp(mat.speed, 2 + mouseDist * 5, 0.1);
      }
    });
  });

  return (
    <group position={[0, -0.2, 0]}>
      {/* Minimal Tech Globe */}
      <group ref={globeGroupRef}>
        <Icosahedron args={[1.5, 2]}>
          <meshBasicMaterial color="#0ea5e9" wireframe transparent opacity={0.3} />
        </Icosahedron>
        <Sphere args={[1.4, 64, 64]}>
          <meshStandardMaterial color="#050505" roughness={0.1} metalness={0.8} />
        </Sphere>
      </group>

      {/* Dispersing Blobs */}
      <group ref={blobsGroupRef}>
        {blobs.map((_, i) => (
          <Sphere 
            key={i} 
            ref={(el) => { if (el) blobRefs.current[i] = el as THREE.Mesh; }} 
            args={[Math.random() * 0.15 + 0.1, 32, 32]}
          >
            <MeshDistortMaterial 
              ref={(el) => { if (el) materialRefs.current[i] = el; }}
              color="#3b82f6" 
              emissive="#3b82f6"
              emissiveIntensity={1}
              transparent
              opacity={0.8}
              distort={0.4}
              speed={2}
            />
          </Sphere>
        ))}
      </group>
    </group>
  );
}
