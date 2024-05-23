import { authOptions } from '@/auth';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) redirect('/signin');

  return await db.query.users.findFirst({ where: eq(users.id, userId) });
}
