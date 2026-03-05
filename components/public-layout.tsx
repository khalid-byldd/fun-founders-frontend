'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { IconType } from 'react-icons';
import { FaCalendarAlt, FaTrophy, FaUsers } from 'react-icons/fa';
import { useState, type ReactNode } from 'react';

type PublicLayoutProps = {
  title?: string;
  children: ReactNode;
};

const links: Array<{ href: string; label: string; icon: IconType }> = [
  { href: '/', label: 'Leaderboard', icon: FaTrophy },
  { href: '/teams', label: 'Teams', icon: FaUsers },
  { href: '/events', label: 'Events', icon: FaCalendarAlt }
];

export default function PublicLayout({ title, children }: PublicLayoutProps) {
  const pathname = usePathname();
  const [season, setSeason] = useState('season-06');

  return (
    <div className="public-layout">
      <aside className="public-sidebar">
        <div className="public-brand" title="Fun Founders">
          FF
        </div>
        <nav className="public-nav">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-label={link.label}
                title={link.label}
                className={`public-link ${pathname === link.href ? 'active' : ''}`}
              >
                <Icon className="public-link-icon" />
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className="public-main">
        <div className="public-topbar">
          {title ? <h1>{title}</h1> : <div className="public-topbar-spacer" />}
          <label className="season-picker">
            <span>Season</span>
            <select value={season} onChange={(event) => setSeason(event.target.value)}>
              <option value="season-06">Season 06</option>
              <option value="season-05">Season 05</option>
              <option value="season-04">Season 04</option>
            </select>
          </label>
        </div>
        {children}
      </main>
    </div>
  );
}
