"use client";

import { useEffect, useState } from 'react';

type Education = {
  id: string;
  degree: string;
  university: string;
  date: string;
  details: string | null;
  imageUrl: string | null;
};

export default function Education() {
  const [education, setEducation] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/education')
      .then(res => res.json())
      .then(data => {
        setEducation(Array.isArray(data) ? data : []);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <section className="mb-12 animate-pulse">
      <div className="h-8 bg-gray-200 w-32 mb-6 rounded"></div>
      <div className="space-y-6">
        <div className="h-16 bg-gray-200 w-full rounded"></div>
        <div className="h-16 bg-gray-200 w-full rounded"></div>
      </div>
    </section>
  );

  return (
    <section className="mb-12">
      <h2 className="text-3xl text-cardinal mb-1.5 font-normal">Education</h2>
      <div className="w-4 h-[2px] bg-cardinal mb-6"></div>
      <ul className="space-y-8">
        {education.map((edu) => (
          <li key={edu.id} className="flex flex-col md:flex-row gap-6 items-start">
            {edu.imageUrl && (
              <div className="w-full md:w-32 shrink-0 overflow-hidden rounded shadow-sm border border-gray-100">
                <img src={edu.imageUrl} alt={edu.degree} className="w-full h-48 md:h-24 object-cover" />
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-start">
                <span className="text-cardinal mr-2 text-[10px] mt-[6px]">■</span>
                <div>
                  <span className="font-semibold text-[#2e2d29] text-[16px]">{edu.degree}</span>
                  <br />
                  <span className="text-[#4d4f53] font-medium">{edu.university}</span>{' '}
                  <span className="text-gray-500 text-sm">{edu.date}</span>
                  {edu.details && (
                    <p className="text-[13px] text-gray-500 mt-1 italic leading-relaxed">{edu.details}</p>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
        {education.length === 0 && <p className="text-gray-500 text-sm">No education entries added yet.</p>}
      </ul>
    </section>
  );
}
