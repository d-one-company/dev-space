import { authOptions } from '@/auth';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

async function handler(req: NextRequest, res: NextResponse) {
  if (req.method !== 'GET') return;
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return new NextResponse(JSON.stringify({ user: null }), { status: 401 });
    const user = await db.query.users.findFirst({
      where: eq(users.id, session.user.id),
    });
    if (!user) return new NextResponse(JSON.stringify({ user: null }), { status: 404 });

    return new NextResponse(JSON.stringify({ user }), { status: 200 });
  } catch (error) {
    console.error(error);
  }

  return new NextResponse(JSON.stringify({ user: null }), { status: 500 });
}

export { handler as GET };
