"use client";

import { Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto bg-gradient-to-r from-[#2c1d11] via-[#5c3e23] to-[#8c5e35] h-[220px] relative flex flex-col justify-end px-8 md:px-12 pb-8 shadow-sm print:h-auto print:py-6">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
      
      {/* Top right links */}
      <div className="absolute top-6 right-8 hidden md:flex items-center gap-6 text-white/90 text-[10px] font-bold tracking-widest uppercase z-10 print:hidden">
        <button onClick={handleDownload} className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
          <Download size={12} /> Download Resume
        </button>
        <a href="https://www.linkedin.com/in/arsalan-ayaz-250057203" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
          <FaLinkedin size={12} /> LinkedIn Profile
        </a>
        <a href="https://github.com/ArsalanManak" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
          <FaGithub size={12} /> GitHub Profile
        </a>
      </div>

      <div className="relative z-10 flex items-end gap-6 md:gap-8">
        {/* Profile Picture Placeholder */}
        <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] bg-gray-200 border-4 border-black/10 shadow-lg shrink-0 overflow-hidden translate-y-2">
          <div className="w-full h-full bg-[#e6e4df] flex items-center justify-center text-gray-400">
            <span className="text-sm">Photo</span>
          </div>
        </div>

        <div className="mb-2">
          <h1 className="text-3xl md:text-[42px] font-bold text-white mb-1.5 font-sans tracking-tight leading-none">
            Arsalan Ayaz
          </h1>
          <h2 className="text-[11px] md:text-[13px] font-bold text-gold tracking-widest uppercase">
            AI &amp; Computational Chemistry Researcher
          </h2>
        </div>
      </div>
    </div>
  );
}
