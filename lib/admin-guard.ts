import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, verifyAdminToken } from './auth';

export function requireAdmin(request: NextRequest) {
  const token = request.cookies.get(ADMIN_COOKIE)?.value;
  const payload = verifyAdminToken(token);

  if (!payload || payload.role !== 'ADMIN') {
    return {
      ok: false as const,
      response: NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    };
  }

  return { ok: true as const, payload };
}
