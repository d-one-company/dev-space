import { timestamp, text, pgTableCreator, integer, primaryKey, boolean } from 'drizzle-orm/pg-core';
import { createId } from '@paralleldrive/cuid2';

const pgTable = pgTableCreator(name => `dev_space_${name}`);

export const users = pgTable('user', {
  id: text('id').primaryKey().$default(createId),
  name: text('name'),
  email: text('email').notNull().unique(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const accounts = pgTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  account => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const posts = pgTable('post', {
  id: text('id').primaryKey().$default(createId),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  content: text('content'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at'),
});

export const notifications = pgTable('notification', {
  id: text('id').primaryKey().$default(createId),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  isRead: boolean('is_read').notNull().default(false),
  type: text('type', { enum: ['follow', 'like', 'newPost'] }).notNull(),
  postId: text('postId').references(() => posts.id, { onDelete: 'cascade' }),
  createdBy: text('created_by').references(() => users.id, { onDelete: 'cascade' }),
});

export const likes = pgTable('like', {
  id: text('id').primaryKey().$default(createId),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  postId: text('postId')
    .notNull()
    .references(() => posts.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const follows = pgTable('follow', {
  id: text('id').primaryKey().$default(createId),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  followerId: text('followerId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
