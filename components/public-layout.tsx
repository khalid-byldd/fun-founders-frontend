'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

type PublicLayoutProps = {
  title?: string;
  children: ReactNode;
};

const links = [
  { href: '/', label: 'Leaderboard', icon: '🏆' },
  { href: '/teams', label: 'Teams', icon: '👥' },
  { href: '/events', label: 'Events', icon: '📅' }
];

export default function PublicLayout({ title, children }: PublicLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="public-layout">
      <aside className="public-sidebar">
        <div className="public-brand" title="Fun Founders">
          FF
        </div>
        <nav className="public-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-label={link.label}
              title={link.label}
              className={`public-link ${pathname === link.href ? 'active' : ''}`}
            >
              <span>{link.icon}</span>
            </Link>
          ))}
        </nav>
      </aside>
      <main className="public-main">
        {title ? <h1>{title}</h1> : null}
        {children}
      </main>
    </div>
  );
}
