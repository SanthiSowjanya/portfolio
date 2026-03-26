"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Layers, Mail } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-8.5a6.5 6.5 0 0 0-1.7-4.5 5.8 5.8 0 0 0-.2-4.5s-1.4-.5-4.5 1.7a14.5 14.5 0 0 0-8 0C3.4 2 2 2.5 2 2.5a5.8 5.8 0 0 0-.2 4.5 6.5 6.5 0 0 0-1.7 4.5c0 7 3 8.2 6 8.5a4.8 4.8 0 0 0-1 3.2v4"></path>
    <path d="M9 18c-4.5 1.5-5-2.5-7-3"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/skills", label: "Skills", icon: Layers },
    { path: "/experience", label: "Experience", icon: Briefcase },
    { path: "/projects", label: "Projects", icon: User },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
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
            
            {/* Desktop Nav */}
            <div className="hidden sm:flex flex-row justify-end items-center gap-8">
              {navLinks.map(({ path, label }) => {
                const isActive = pathname === path;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={`relative uppercase text-[11px] font-semibold tracking-[0.2em] transition-colors duration-300 py-2 ${isActive ? "text-white" : "text-gray-500 hover:text-gray-300"}`}
                  >
                    {label}
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
              
              <div className="w-[1px] h-6 bg-white/20 mx-2"></div>
              
              <a href="https://github.com/SanthiSowjanya" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/santhi-sowjanya-chokka-708004255" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-[#0a66c2] transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
            
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Dock (Visible only on small screens) */}
      <div className="sm:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-[#18181b]/80 backdrop-blur-xl border border-white/10 rounded-full px-4 py-3 flex justify-between items-center shadow-[0_10px_40px_rgba(0,0,0,0.8)] z-50">
        {navLinks.map(({ path, label, icon: Icon }) => {
          const isActive = pathname === path;
          return (
            <Link
              key={path}
              href={path}
              className={`relative flex flex-col items-center gap-1.5 p-2 transition-all duration-300 ${isActive ? "text-cyan-400 scale-110" : "text-gray-500 hover:text-gray-300"}`}
            >
              <Icon className="w-6 h-6 z-10" />
              {isActive && (
                <motion.div
                  layoutId="activeMobileDock"
                  className="absolute -bottom-1 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
}
