"use client";

import { useEffect, useState } from 'react';

export default function Bio() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/bio')
      .then(res => res.json())
      .then(data => {
        setContent(data.content || '');
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <section className="mb-12 animate-pulse">
      <div className="h-8 bg-gray-200 w-24 mb-4 rounded"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 w-full rounded"></div>
        <div className="h-4 bg-gray-200 w-5/6 rounded"></div>
        <div className="h-4 bg-gray-200 w-4/6 rounded"></div>
      </div>
    </section>
  );

  return (
    <section className="mb-12">
      <h2 className="text-3xl text-cardinal mb-4 font-normal">Bio</h2>
      <div className="text-[#4d4f53] text-[15px] leading-[1.85] whitespace-pre-wrap">
        {content || 'Bio content coming soon...'}
      </div>
    </section>
  );
}
