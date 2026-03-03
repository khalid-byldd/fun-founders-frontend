'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

type AdminLayoutProps = {
  title: string;
  children: ReactNode;
};

const navItems: Array<{ href: string; label: string }> = [
  { href: '/admin/dashboard', label: 'Dashboard' },
  { href: '/admin/teams', label: 'Teams' },
  { href: '/admin/events', label: 'Events' },
  { href: '/admin/settings', label: 'Settings' }
];

export default function AdminLayout({ title, children }: AdminLayoutProps) {
  const [ready, setReady] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const isAuthed = localStorage.getItem('ff_admin_auth') === 'true';

    if (!isAuthed) {
      router.replace('/admin/login');
      return;
    }

    setReady(true);
  }, [router]);

  const signOut = () => {
    localStorage.removeItem('ff_admin_auth');
    document.cookie = 'ff_admin_auth=; path=/; max-age=0; samesite=lax';
    router.push('/admin/login');
  };

  if (!ready) {
    return null;
  }

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <div className="brand-wrap">
          <div className="brand-mark">FF</div>
          <div>
            <div className="brand">fun-founders</div>
            <p className="sidebar-note">Admin Console</p>
          </div>
        </div>
        <p className="sidebar-group">Admin</p>
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
