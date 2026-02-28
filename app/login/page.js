'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();
    if (!email || !password) return;

    localStorage.setItem('ff_admin_auth', 'true');
    router.push('/dashboard');
  };

  return (
    <main className="auth-shell">
      <form className="auth-card" onSubmit={handleLogin}>
        <h1>Admin Login</h1>
        <p>Sign in to access the Fun Founders admin panel.</p>
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
