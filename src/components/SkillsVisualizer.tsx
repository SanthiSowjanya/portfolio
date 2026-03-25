"use client";
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: "Frontend Dev", items: ["React.js", "Next.js", "Ember.js", "Tailwind CSS", "HTML5", "CSS3", "Material UI"] },
  { category: "Backend Dev", items: ["Python", "PHP", "Node.js", "RESTful APIs", "Flask"] },
  { category: "Core Languages", items: ["JavaScript", "TypeScript", "C", "C++"] },
  { category: "Data Visualization", items: ["D3.js", "Three.js", "Recharts", "Chart.js"] },
  { category: "State & Ecosystem", items: ["Git", "Figma", "Redux", "React Query"] }
];

export default function SkillsVisualizer() {
  return (
    <div className="w-full space-y-16 pb-16">
      {skills.map((skillGroup, idx) => (
        <motion.div 
          key={skillGroup.category}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 * idx }}
          className="relative"
        >
          <div className="flex items-center gap-6 mb-8">
            <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase tracking-[0.2em] drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
              {skillGroup.category}
            </h3>
            <div className="h-[2px] flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skillGroup.items.map((item, itemIdx) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: (0.1 * idx) + (0.05 * itemIdx) }}
                className="relative group cursor-crosshair"
              >
                {/* Glowing backdrop on hover */}
                <div className="absolute inset-0 bg-cyan-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Glassmorphic Tech Card */}
                <div className="relative h-28 bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl border border-white/5 group-hover:border-cyan-400 flex items-center justify-center p-4 transition-all duration-300 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                  
                  {/* Subtle sweep animation inside card on hover */}
                  <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite_linear]" />
                  
                  <span className="text-gray-300 font-mono text-center font-bold text-sm sm:text-base group-hover:text-white transition-colors z-10 drop-shadow-md">
                    {item}
                  </span>

                  {/* Tech accents */}
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-cyan-400 transition-colors" />
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-cyan-400 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
