"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-[#f3f1eb] font-sans">
      <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-cardinal">Portfolio Admin</h1>
        <div className="flex gap-4">
          <Link href="/" className="text-sm text-gray-600 hover:text-cardinal mt-1">
            View Site
          </Link>
          <button onClick={handleLogout} className="text-sm text-red-600 hover:text-red-800">
            Logout
          </button>
        </div>
      </nav>
      <main className="p-8 max-w-[1200px] mx-auto">
        {children}
      </main>
    </div>
  );
}
