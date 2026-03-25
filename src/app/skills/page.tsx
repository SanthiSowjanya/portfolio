import SkillsVisualizer from '@/components/SkillsVisualizer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills | Santhi Sowjanya',
};

export default function SkillsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 relative">
      <div className="absolute top-10 right-10 w-96 h-96 bg-gray-600/10 rounded-full blur-[100px] pointer-events-none" />
      <h1 className="text-4xl font-bold mb-8 text-white relative z-10 tracking-tight">
        My <span className="text-gray-400">Skills</span>
      </h1>
      <p className="text-gray-400 mb-8 max-w-3xl text-lg relative z-10 leading-relaxed">
        I am a Full Stack Developer with expertise across multiple languages, frameworks, and tools. 
        Interact with the visualization below to explore my technical stack!
      </p>
      
      <div className="relative w-full z-10">
        <SkillsVisualizer />
      </div>
    </div>
  );
}
