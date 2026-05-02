"use client";

import { useState, useEffect } from 'react';

export default function SOPManager() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/sop')
      .then(res => res.json())
      .then(data => {
        setContent(data.content || '');
        setLoading(false);
      });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setMessage('');
    try {
      const res = await fetch('/api/sop', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      });
      if (res.ok) {
        setMessage('SOP updated successfully!');
      } else {
        setMessage('Error updating SOP.');
      }
    } catch (err) {
      setMessage('An error occurred.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Edit Statement of Purpose (SOP)</h2>
      <p className="text-sm text-gray-500 italic">This content will be displayed in the SOP tab. You can use Markdown or simple HTML if you like.</p>
      <textarea
        className="w-full h-[500px] p-4 border border-gray-300 font-mono text-sm leading-relaxed focus:outline-none focus:border-cardinal"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter your full SOP content here..."
      />
      <div className="flex items-center gap-4">
        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-cardinal text-white px-6 py-2 hover:bg-red-800 transition-colors disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save SOP'}
        </button>
        {message && <span className={`text-sm ${message.includes('Error') ? 'text-red-500' : 'text-green-600'}`}>{message}</span>}
      </div>
    </div>
  );
}
