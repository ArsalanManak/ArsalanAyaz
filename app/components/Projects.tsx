"use client";

import { useEffect, useState } from 'react';

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string | null;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(Array.isArray(data) ? data : []);
        setLoading(false);
      });
  }, []);

  return (
    <section className="mb-12">
      <h2 className="text-3xl text-cardinal mb-1.5 font-normal">Projects</h2>
      <div className="w-4 h-[2px] bg-cardinal mb-6"></div>
      
      {loading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-24 bg-gray-200 w-full rounded"></div>
          <div className="h-24 bg-gray-200 w-full rounded"></div>
        </div>
      ) : (
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-1/3 shrink-0 overflow-hidden rounded shadow-sm border border-gray-100">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 md:h-32 object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-[#2e2d29] mb-2">{project.title}</h3>
                <p className="text-[14px] text-[#4d4f53] leading-relaxed mb-3">
                  {project.description}
                </p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-cardinal hover:underline text-sm font-medium">
                    View Project &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
          {projects.length === 0 && (
            <p className="text-gray-500 text-sm">No projects listed yet.</p>
          )}
        </div>
      )}
    </section>
  );
}
