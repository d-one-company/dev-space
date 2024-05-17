import { authOptions } from '@/auth';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return;
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return NextResponse.json({ user: null });
    const user = await db.query.users.findFirst({
      where: eq(users.id, session.user.id),
    });

    if (!user) return NextResponse.json({ user: null });

    return NextResponse.json({ user });
  } catch (error) {
    console.error(error);
  }
}

export { handler as GET };
