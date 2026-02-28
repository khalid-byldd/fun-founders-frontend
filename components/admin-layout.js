'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/teams', label: 'Teams' },
  { href: '/events', label: 'Events' },
  { href: '/settings', label: 'Settings' }
];

export default function AdminLayout({ title, children }) {
  const [ready, setReady] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const isAuthed = localStorage.getItem('ff_admin_auth') === 'true';
    if (!isAuthed) {
      router.replace('/login');
      return;
    }
    setReady(true);
  }, [router]);

  const signOut = () => {
    localStorage.removeItem('ff_admin_auth');
    router.push('/login');
  };

  if (!ready) {
    return null;
  }

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <div className="brand">Fun Founders</div>
        <nav className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button className="signout" onClick={signOut}>
          Sign out
        </button>
      </aside>
      <section className="main-panel">
        <div className="topbar">
          <h1>{title}</h1>
        </div>
        {children}
      </section>
    </div>
  );
}
