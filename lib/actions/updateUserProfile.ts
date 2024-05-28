'use server';

import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

export default async function updateUserProfile(userId: string, username: string) {
  if (!username) return;
  return await db.update(users).set({ username: username }).where(eq(users.id, userId));
}
