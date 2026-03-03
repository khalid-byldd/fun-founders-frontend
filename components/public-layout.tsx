'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

const links = [
  { href: '/', label: 'Leaderboard' },
  { href: '/teams', label: 'Teams' },
  { href: '/events', label: 'Events' }
];

export default function PublicLayout({ title, children }: { title: string; children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="public-layout">
      <aside className="public-sidebar">
        <div className="public-brand">Fun Founders</div>
        <nav className="public-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`public-link ${pathname === link.href ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="public-main">
        <h1>{title}</h1>
        {children}
      </main>
    </div>
  );
}
