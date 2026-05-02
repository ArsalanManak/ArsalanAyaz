"use client";

import { useState, useEffect } from 'react';

export default function HeroManager() {
  const [data, setData] = useState({ name: '', role: '', imageUrl: '' });
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hero')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');

    try {
      let imageUrl = data.imageUrl;

      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        const uploadRes = await fetch('/api/upload', { method: 'POST', body: formData });
        const uploadData = await uploadRes.json();
        imageUrl = uploadData.url;
      }

      const res = await fetch('/api/hero', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, imageUrl }),
      });

      if (res.ok) {
        setMessage('Hero section updated successfully!');
        const updated = await res.json();
        setData(updated);
        setFile(null);
      } else {
        setMessage('Error updating hero section.');
      }
    } catch (err) {
      setMessage('An error occurred.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Edit Hero Section</h2>
      
      <form onSubmit={handleSave} className="space-y-4 max-w-2xl">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            required
            className="w-full p-2 border border-gray-300 rounded"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Role / Description</label>
          <input
            type="text"
            required
            className="w-full p-2 border border-gray-300 rounded"
            value={data.role}
            onChange={(e) => setData({ ...data, role: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
          <div className="flex items-center gap-4">
            {data.imageUrl && !file && (
              <img src={data.imageUrl} alt="Profile" className="w-16 h-16 rounded-full object-cover border" />
            )}
            <input
              type="file"
              accept="image/*"
              className="text-sm"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">Upload a new image to replace the current one.</p>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="bg-cardinal text-white px-6 py-2 hover:bg-red-800 transition-colors disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Update Hero'}
          </button>
          {message && <span className={`text-sm ${message.includes('Error') ? 'text-red-500' : 'text-green-600'}`}>{message}</span>}
        </div>
      </form>
    </div>
  );
}
