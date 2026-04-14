import bcrypt from 'bcrypt';
import crypto from 'crypto';

const AUTH_SECRET = process.env.AUTH_SECRET || 'dev-secret-change-me';
export const ADMIN_COOKIE = 'ff_admin_token';

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hashed: string) {
  return bcrypt.compare(password, hashed);
}

export function signAdminToken(payload: { userId: number; role: 'ADMIN' | 'USER' }) {
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const sig = crypto.createHmac('sha256', AUTH_SECRET).update(body).digest('base64url');
  return `${body}.${sig}`;
}

export function verifyAdminToken(token: string | undefined) {
  if (!token) return null;
  const [body, sig] = token.split('.');
  if (!body || !sig) return null;

  const expected = crypto.createHmac('sha256', AUTH_SECRET).update(body).digest('base64url');
  if (expected !== sig) return null;

  try {
    return JSON.parse(Buffer.from(body, 'base64url').toString('utf8')) as {
      userId: number;
      role: 'ADMIN' | 'USER';
    };
  } catch {
    return null;
  }
}
