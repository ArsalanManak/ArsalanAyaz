"use client";

import { useState } from 'react';
import HeroManager from '@/app/admin/dashboard/components/HeroManager';
import BioManager from '@/app/admin/dashboard/components/BioManager';
import EducationManager from '@/app/admin/dashboard/components/EducationManager';
import ProjectsManager from '@/app/admin/dashboard/components/ProjectsManager';
import CertificationsManager from '@/app/admin/dashboard/components/CertificationsManager';
import SOPManager from '@/app/admin/dashboard/components/SOPManager';

type Tab = 'hero' | 'bio' | 'education' | 'projects' | 'certifications' | 'sop';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('hero');

  const tabs = [
    { id: 'hero', label: 'Hero' },
    { id: 'bio', label: 'Bio' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'sop', label: 'SOP' },
  ] as const;

  return (
    <div className="bg-white shadow-sm min-h-[600px]">
      <div className="flex border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as Tab)}
            className={`px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${
              activeTab === tab.id ? 'border-b-2 border-cardinal text-cardinal' : 'text-gray-500 hover:text-cardinal'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-6">
        {activeTab === 'hero' && <HeroManager />}
        {activeTab === 'bio' && <BioManager />}
        {activeTab === 'education' && <EducationManager />}
        {activeTab === 'projects' && <ProjectsManager />}
        {activeTab === 'certifications' && <CertificationsManager />}
        {activeTab === 'sop' && <SOPManager />}
      </div>
    </div>
  );
}
