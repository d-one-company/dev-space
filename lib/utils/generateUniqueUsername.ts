import { db } from '@/db';
import { eq } from 'drizzle-orm';
import { users } from '@/db/schema';
import { nanoid } from 'nanoid';

export default async function generateUniqueUsername(email: string, suffix?: string): Promise<string> {
  const emailBase = email.replace(/@.+/, '').replace(/[&/\\#,+()$~%._@'":*?<>{}]/g, '');
  const username = emailBase + (suffix ? `-${suffix}` : '');

  const existingUser = await db.query.users.findFirst({ where: eq(users.username, username) });

  if (existingUser) {
    return await generateUniqueUsername(email, nanoid(5));
  }

  return username;
}
