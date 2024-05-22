import Google from 'next-auth/providers/google';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { env } from './env';
import { db } from './db';
import type { NextAuthOptions } from 'next-auth';
import type { Adapter } from 'next-auth/adapters';
import { accounts, users } from './db/schema';
import generateUniqueUsername from './lib/utils/generateUniqueUsername';

export const authOptions: NextAuthOptions = {
  pages: { signIn: '/signin' },
  secret: env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },
  adapter: DrizzleAdapter(db, { usersTable: users, accountsTable: accounts }) as Adapter,
  providers: [
    Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      profile: async profile => {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: `https://api.dicebear.com/7.x/initials/png?seed=${encodeURIComponent(profile.name)}`,
          username: await generateUniqueUsername(profile.email),
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.image = user.image;
      }

      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.image = token.image as string;
      }

      return session;
    },
  },
};
