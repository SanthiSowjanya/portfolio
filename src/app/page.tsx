"use client";
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import GlobeBlob3D from '@/components/GlobeBlob3D';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative w-full min-h-[calc(100vh-64px)] bg-gradient-to-br from-[#050505] via-[#111111] to-[#1f1f1f] flex lg:flex-row flex-col items-center justify-center p-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gray-700/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      
      {/* Text Content */}
      <div className="z-10 w-full lg:w-1/2 flex flex-col items-start justify-center gap-6 px-0 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          >
          <span className="text-gray-400 font-mono tracking-widest text-sm sm:text-base mb-2 block uppercase">
            Full Stack Developer
          </span>
          <h1 className="text-4xl sm:text-7xl font-bold text-gray-100 mb-2 tracking-tight">
            Santhi Sowjanya Chokka
          </h1>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-500 mt-2">
            I engineer immersive web experiences.
          </h2>
        </motion.div>

        <motion.p
          className="text-gray-400 max-w-xl text-lg leading-relaxed mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          >
          With over 2.5 years of experience building scalable HRMS, CRM, and enterprise payroll systems, I specialize in combining robust backends with highly interactive, high-performance web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4 mt-8"
          >
          <Link href="/projects" className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-300 border border-gray-600 shadow-[0_0_15px_rgba(156,163,175,0.1)] hover:shadow-[0_0_25px_rgba(156,163,175,0.3)]">
            Explore My Work
          </Link>
          <Link href="/contact" className="px-8 py-4 bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-800 font-medium rounded-lg transition-all duration-300">
            Get In Touch
          </Link>
        </motion.div>
      </div>

      {/* 3D Canvas */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-[80vh] relative mt-12 lg:mt-0 z-10 cursor-none">
        <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.2} />
          
          <Suspense fallback={null}>
            <GlobeBlob3D />
            <ContactShadows position={[0, -1.8, 0]} opacity={0.5} scale={5} blur={2.4} far={4} color="#0ea5e9" />
            <Environment preset="studio" />
          </Suspense>
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            minPolarAngle={Math.PI / 2.5} 
            maxPolarAngle={Math.PI / 1.5}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
          />
        </Canvas>
      </div>
    </div>
  );
}
