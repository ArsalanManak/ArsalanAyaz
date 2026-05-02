"use client";

import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  const [data, setData] = useState({ name: 'Arsalan Ayaz', role: 'AI & Computational Chemistry Researcher', imageUrl: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/hero')
      .then(res => res.json())
      .then(d => {
        if (d.name) setData(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto bg-gradient-to-r from-[#2c1d11] via-[#5c3e23] to-[#8c5e35] h-[220px] relative flex flex-col justify-start px-8 md:px-12 pt-8 shadow-sm print:h-auto print:py-6">
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
        <a href="/admin/login" className="flex items-center gap-1.5 hover:text-white transition-colors border-l border-white/20 pl-6 ml-2">
          Admin Login
        </a>
      </div>

      <div className="relative z-10 flex items-start gap-6 md:gap-8 mt-2">
        {/* Profile Picture */}
        <div className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] bg-gray-200 border-4 border-black/10 shadow-lg shrink-0 overflow-hidden">
          {data.imageUrl ? (
            <img src={data.imageUrl} alt={data.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-[#e6e4df] flex items-center justify-center text-gray-400">
              <span className="text-[10px] md:text-xs">Photo</span>
            </div>
          )}
        </div>

        <div className={`mt-1 md:mt-3 ${loading ? 'animate-pulse' : ''}`}>
          <h1 className="text-3xl md:text-[42px] font-bold text-white mb-1.5 font-sans tracking-tight leading-none">
            {data.name}
          </h1>
          <h2 className="text-[11px] md:text-[13px] font-bold text-gold tracking-widest uppercase">
            {data.role}
          </h2>
        </div>
      </div>
    </div>
  );
}
