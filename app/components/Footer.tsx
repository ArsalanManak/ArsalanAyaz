import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#2c1d11] via-[#5c3e23] to-[#8c5e35] py-10">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 w-full">
          {/* Name & Title */}
          <div className="shrink-0">
            <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight leading-none">
              Arsalan Ayaz
            </h2>
            <p className="text-gold text-[11px] font-bold tracking-widest uppercase mt-1.5">
              AI &amp; Computational Chemistry Researcher
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-white/90 text-[13px]">
            <a href="mailto:arsalanayaz821@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <FaEnvelope size={13} /> arsalanayaz821@gmail.com
            </a>
            <a href="tel:+923037764619" className="flex items-center gap-2 hover:text-white transition-colors">
              <FaPhone size={12} /> +92 303 776 4619
            </a>
            <a href="https://github.com/ArsalanManak" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <FaGithub size={14} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/arsalan-ayaz-250057203" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <FaLinkedin size={14} /> LinkedIn
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/15 text-white/60 text-[11px] font-sans">
          © {new Date().getFullYear()} Arsalan Ayaz — Faisalabad, Punjab, Pakistan
        </div>
      </div>
    </footer>
  );
}
