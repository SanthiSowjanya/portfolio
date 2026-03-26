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
    <div className="w-full pb-32 sm:pb-16">
      {/* Tab Navigation */}
      <div className="flex flex-row overflow-x-auto sm:flex-wrap items-center sm:justify-start gap-2 mb-12 border-b border-white/10 pb-4 no-scrollbar">
        {skills.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative whitespace-nowrap px-6 py-3 rounded-full text-sm font-bold tracking-wider transition-colors z-10 uppercase ${
              activeTab === tab.id ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeSkillsTab"
                className="absolute inset-0 bg-cyan-400/10 border border-cyan-400/30 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            <span className="relative z-20">{tab.category}</span>
          </button>
        ))}
      </div>

      {/* Cards Display */}
      <div className="relative min-h-[350px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {activeCategory?.items.map((item, itemIdx) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.05 * itemIdx }}
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
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
