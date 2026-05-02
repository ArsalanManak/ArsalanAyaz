"use client";

import { useState, useEffect } from 'react';

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string | null;
};

export default function ProjectsManager() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ id: '', title: '', description: '', link: '' });
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const fetchProjects = async () => {
    setLoading(true);
    const res = await fetch('/api/projects');
    const data = await res.json();
    setProjects(Array.isArray(data) ? data : []);
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

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
    const url = form.id ? `/api/projects/${form.id}` : '/api/projects';

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    setForm({ id: '', title: '', description: '', link: '' });
    setFile(null);
    setUploading(false);
    fetchProjects();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;
    await fetch(`/api/projects/${id}`, { method: 'DELETE' });
    fetchProjects();
  };

  const handleEdit = (p: Project) => {
    setForm({ id: p.id, title: p.title, description: p.description, link: p.link || '' });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Manage Projects</h2>
      
      <form onSubmit={handleSubmit} className="bg-gray-50 p-4 border border-gray-200 mb-8 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Title"
            required
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
            className="p-2 border"
          />
          <input
            type="text"
            placeholder="Link (Optional)"
            value={form.link}
            onChange={e => setForm({ ...form, link: e.target.value })}
            className="p-2 border"
          />
        </div>
        <textarea
          placeholder="Description"
          required
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          className="w-full p-2 border h-24"
        />
        <div>
          <label className="block text-sm text-gray-600 mb-1">Image {form.id ? '(Leave blank to keep existing)' : '(Required)'}</label>
          <input
            type="file"
            accept="image/*"
            required={!form.id}
            onChange={e => setFile(e.target.files?.[0] || null)}
            className="w-full"
          />
        </div>
        <div className="flex gap-2">
          <button disabled={uploading} type="submit" className="bg-cardinal text-white px-4 py-2 disabled:opacity-50">
            {uploading ? 'Saving...' : form.id ? 'Update Project' : 'Add Project'}
          </button>
          {form.id && (
            <button type="button" onClick={() => setForm({ id: '', title: '', description: '', link: '' })} className="bg-gray-300 px-4 py-2">
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      {loading ? <p>Loading...</p> : (
        <div className="space-y-4">
          {projects.map(p => (
            <div key={p.id} className="border p-4 flex justify-between items-start">
              <div className="flex gap-4">
                {p.imageUrl && <img src={p.imageUrl} alt={p.title} className="w-24 h-24 object-cover" />}
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{p.description}</p>
                  {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="text-blue-500 text-xs mt-2 block">View Link</a>}
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <button onClick={() => handleEdit(p)} className="text-sm text-blue-600 hover:underline">Edit</button>
                <button onClick={() => handleDelete(p.id)} className="text-sm text-red-600 hover:underline">Delete</button>
              </div>
            </div>
          ))}
          {projects.length === 0 && <p className="text-gray-500 text-sm">No projects found.</p>}
        </div>
      )}
    </div>
  );
}
