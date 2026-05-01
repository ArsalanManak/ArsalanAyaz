"use client";

import { useState, useRef, useEffect } from 'react';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SOPContent from './components/SOPContent';

const TABS = [
  { id: 'bio', label: 'BIO' },
  { id: 'certifications', label: 'CERTIFICATIONS' },
  { id: 'research', label: 'PROJECTS' },
  { id: 'sop', label: 'STATEMENT OF PURPOSE' },
] as const;

type TabId = (typeof TABS)[number]['id'];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>('bio');
  const [isSticky, setIsSticky] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '0px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const handleTabClick = (tabId: TabId) => {
    setActiveTab(tabId);
    // Scroll to top of content area when tab changes
    if (tabsRef.current) {
      const tabsTop = tabsRef.current.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: tabsTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans flex flex-col pt-8">
      <Hero />
      
      {/* Main Content Area */}
      <div className="flex-1 w-full max-w-[1200px] mx-auto bg-white shadow-sm mb-12 border-t-0">
        
        {/* Sentinel element to detect when tabs should become sticky */}
        <div ref={sentinelRef} className="h-0" />

        {/* Tabs Bar — sticky on scroll */}
        <div
          ref={tabsRef}
          className={`flex border-b border-gray-200 bg-[#f3f1eb] z-40 transition-shadow duration-200 ${
            isSticky
              ? 'fixed top-0 left-0 right-0 shadow-md max-w-[1200px] mx-auto'
              : ''
          }`}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-6 md:px-10 py-5 text-[11px] font-bold tracking-[0.15em] border-r border-gray-200 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-white text-[#4d4f53] border-l'
                  : 'text-[#8f8d85] hover:text-cardinal'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Spacer when tabs are fixed */}
        {isSticky && <div className="h-[58px]" />}

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row">
          {/* Left Column (Main Content) */}
          <main className="flex-1 p-8 md:p-12 pr-4 md:pr-16 space-y-12">
            {activeTab === 'bio' && (
              <>
                <Bio />
                <Education />
              </>
            )}
            {activeTab === 'certifications' && (
              <Experience />
            )}
            {activeTab === 'research' && (
              <Projects />
            )}
            {activeTab === 'sop' && (
              <SOPContent />
            )}
          </main>

          {/* Right Column (Sidebar) */}
          <aside className="w-full md:w-[350px] bg-white p-8 md:p-12 md:pl-0 flex-shrink-0">
            <Sidebar />
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
