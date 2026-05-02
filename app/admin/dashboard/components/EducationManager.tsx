"use client";

import { useState, useEffect } from 'react';

type Education = {
  id: string;
  degree: string;
  university: string;
  date: string;
  details: string | null;
  imageUrl: string | null;
};

export default function EducationManager() {
  const [education, setEducation] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ id: '', degree: '', university: '', date: '', details: '' });
  const [file, setFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  const fetchEducation = async () => {
    setLoading(true);
    const res = await fetch('/api/education');
    const data = await res.json();
    setEducation(Array.isArray(data) ? data : []);
    setLoading(false);
  };

  useEffect(() => {
    fetchEducation();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    let imageUrl = '';
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      const uploadRes = await fetch('/api/upload', { method: 'POST', body: formData });
      const uploadData = await uploadRes.json();
      imageUrl = uploadData.url;
    }

    const payload = { ...form, imageUrl: imageUrl || undefined };
    const method = form.id ? 'PUT' : 'POST';
    const url = form.id ? `/api/education/${form.id}` : '/api/education';

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    setForm({ id: '', degree: '', university: '', date: '', details: '' });
    setFile(null);
    setSaving(false);
    fetchEducation();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;
    await fetch(`/api/education/${id}`, { method: 'DELETE' });
    fetchEducation();
  };

  const handleEdit = (edu: Education) => {
    setForm({ 
      id: edu.id, 
      degree: edu.degree, 
      university: edu.university, 
      date: edu.date, 
      details: edu.details || '' 
    });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Manage Education</h2>
      
      <form onSubmit={handleSubmit} className="bg-gray-50 p-4 border border-gray-200 mb-8 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Degree / Certificate"
            required
            value={form.degree}
            onChange={e => setForm({ ...form, degree: e.target.value })}
            className="p-2 border"
          />
          <input
            type="text"
            placeholder="University / Institution"
            required
            value={form.university}
            onChange={e => setForm({ ...form, university: e.target.value })}
            className="p-2 border"
          />
          <input
            type="text"
            placeholder="Date (e.g., 2019 – 2023)"
            required
            value={form.date}
            onChange={e => setForm({ ...form, date: e.target.value })}
            className="p-2 border"
          />
        </div>
        <textarea
          placeholder="Details (Optional)"
          value={form.details}
          onChange={e => setForm({ ...form, details: e.target.value })}
          className="w-full p-2 border h-24"
        />
        <div>
          <label className="block text-sm text-gray-600 mb-1">Image {form.id ? '(Leave blank to keep existing)' : '(Optional)'}</label>
          <input
            type="file"
            accept="image/*"
            onChange={e => setFile(e.target.files?.[0] || null)}
            className="w-full"
          />
        </div>
        <div className="flex gap-2">
          <button disabled={saving} type="submit" className="bg-cardinal text-white px-4 py-2 disabled:opacity-50">
            {saving ? 'Saving...' : form.id ? 'Update Entry' : 'Add Entry'}
          </button>
          {form.id && (
            <button type="button" onClick={() => setForm({ id: '', degree: '', university: '', date: '', details: '' })} className="bg-gray-300 px-4 py-2">
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      {loading ? <p>Loading...</p> : (
        <div className="space-y-4">
          {education.map(edu => (
            <div key={edu.id} className="border p-4 flex justify-between items-start">
              <div className="flex gap-4">
                {edu.imageUrl && <img src={edu.imageUrl} alt={edu.degree} className="w-20 h-20 object-cover rounded" />}
                <div>
                  <h3 className="font-semibold text-cardinal">{edu.degree}</h3>
                  <p className="text-sm font-medium">{edu.university} <span className="text-gray-500 font-normal">{edu.date}</span></p>
                  {edu.details && <p className="text-xs text-gray-600 mt-1 italic">{edu.details}</p>}
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <button onClick={() => handleEdit(edu)} className="text-sm text-blue-600 hover:underline">Edit</button>
                <button onClick={() => handleDelete(edu.id)} className="text-sm text-red-600 hover:underline">Delete</button>
              </div>
            </div>
          ))}
          {education.length === 0 && <p className="text-gray-500 text-sm">No education entries found.</p>}
        </div>
      )}
    </div>
  );
}
