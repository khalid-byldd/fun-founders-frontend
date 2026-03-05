'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) return;

    localStorage.setItem('ff_admin_auth', 'true');
    document.cookie = 'ff_admin_auth=true; path=/; max-age=86400; samesite=lax';
    router.push('/admin/dashboard');
  };

  return (
    <main className="auth-shell">
      <form className="auth-card" onSubmit={handleLogin}>
        <p className="sidebar-group">ADMIN ACCESS</p>
        <h1>Admin Login</h1>
        <p>Sign in to access protected admin routes.</p>
        <input
          type="email"
          className="input"
          placeholder="admin@funfounders.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          className="input"
          placeholder="••••••••"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="button" type="submit">
          Log in
        </button>
      </form>
    </main>
  );
}
