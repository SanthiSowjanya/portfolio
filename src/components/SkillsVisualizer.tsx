"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skills = [
  { id: "frontend", category: "Frontend Dev", items: ["React.js", "Next.js", "Ember.js", "Tailwind CSS", "HTML5", "CSS3", "Material UI"] },
  { id: "backend", category: "Backend Dev", items: ["Python", "PHP", "Node.js", "RESTful APIs", "Flask"] },
  { id: "core", category: "Core Languages", items: ["JavaScript", "TypeScript", "C", "C++"] },
  { id: "data", category: "Visualization", items: ["D3.js", "Three.js", "Recharts", "Chart.js"] },
  { id: "tools", category: "Tools & Ecosystem", items: ["Git", "Figma", "Redux", "React Query"] }
];

export default function SkillsVisualizer() {
  const [activeTab, setActiveTab] = useState(skills[0].id);
  const activeCategory = skills.find(s => s.id === activeTab);

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-12 pb-20 relative z-10">
      
      {/* Categories Menu (Left on Desktop, Top on Mobile wrapping naturally without scrollbars) */}
      <div className="w-full md:w-1/3 lg:w-1/4 flex flex-row md:flex-col flex-wrap justify-center md:justify-start gap-4">
        {skills.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className={`relative px-6 py-4 rounded-2xl text-xs sm:text-sm font-bold tracking-widest transition-all duration-300 uppercase md:text-left w-auto md:w-full overflow-hidden ${
                isActive ? 'text-white shadow-[0_0_20px_rgba(34,211,238,0.15)]' : 'text-gray-400 hover:text-gray-200 bg-white/5 border border-white/5'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 border border-cyan-400/30 rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              {/* Active neon strip indicator (Desktop only) */}
              {isActive && (
                <motion.div
                  layoutId="activeCategoryStrip"
                  className="hidden md:block absolute left-0 top-0 bottom-0 w-1.5 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)]"
                />
              )}
              <span className="relative z-10 block text-center md:text-left">
                {tab.category}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Skills Content Display (Right on Desktop, Bottom on Mobile) */}
      <div className="w-full md:w-2/3 lg:w-3/4 flex items-center mt-4 md:mt-0">
        <div className="w-full min-h-[300px] bg-[#0a0a0a]/60 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-[0_0_50px_rgba(0,0,0,0.6)] relative overflow-hidden flex items-center justify-center md:justify-start">
          
          {/* Subtle inside glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-900/10 blur-[80px] pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-wrap gap-4 sm:gap-5 justify-center md:justify-start w-full relative z-10"
            >
              {activeCategory?.items.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: idx * 0.05,
                    type: "spring", stiffness: 200, damping: 15
                  }}
                  className="relative group cursor-crosshair"
                >
                  {/* Glowing background on hover */}
                  <div className="absolute inset-0 bg-cyan-400/40 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Compact Tech Pill shape */}
                  <div className="relative px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-b from-gray-800 to-[#111] border border-gray-600 group-hover:border-cyan-400 rounded-xl flex items-center justify-center transition-all duration-300 text-gray-300 group-hover:text-white font-mono font-bold tracking-wide text-[13px] sm:text-[15px] shadow-lg group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                    {item}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    
    </div>
  );
}
