"use client";

import { useEffect, useState } from 'react';

export default function SOPContent() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/sop')
      .then(res => res.json())
      .then(data => {
        setContent(data.content || '');
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <article className="max-w-[800px] animate-pulse">
      <div className="h-20 bg-gray-200 w-full mb-10 rounded"></div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 w-full rounded"></div>
        <div className="h-4 bg-gray-200 w-full rounded"></div>
        <div className="h-4 bg-gray-200 w-3/4 rounded"></div>
      </div>
    </article>
  );

  return (
    <article className="max-w-[800px]">
      <div className="text-[#4d4f53] text-[15px] leading-[1.85] whitespace-pre-wrap">
        {content || 'SOP content coming soon...'}
      </div>
    </article>
  );
}
