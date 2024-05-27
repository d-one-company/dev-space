import { authOptions } from '@/auth';
import { db } from '@/db';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function getUsers() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) redirect('/signin');

  return await db.query.users.findMany();
}
