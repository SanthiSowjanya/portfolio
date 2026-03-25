"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-[#050505]/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-bold text-2xl text-white tracking-widest flex items-center gap-1"
            >
              SSC<span className="text-gray-500 text-3xl">.</span>
            </motion.div>
          </Link>
          <div className="hidden sm:flex flex-row justify-end items-center gap-8">
            {['/', '/skills', '/experience', '/projects', '/contact'].map((path) => {
              const isActive = pathname === path;
              return (
                <Link 
                  key={path} 
                  href={path} 
                  className={`relative uppercase text-[11px] font-semibold tracking-[0.2em] transition-colors duration-300 py-2 ${isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  {path === '/' ? 'Home' : path.substring(1)}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
