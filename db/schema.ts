import { createId } from '@paralleldrive/cuid2';
import { relations } from 'drizzle-orm';
import { boolean, integer, pgTableCreator, primaryKey, text, timestamp } from 'drizzle-orm/pg-core';

const pgTable = pgTableCreator(name => `dev_space_${name}`);

export const users = pgTable('user', {
  id: text('id').primaryKey().$default(createId),
  name: text('name'),
  username: text('username').unique(),
  email: text('email').notNull().unique(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const usersRelations = relations(users, ({ one, many }) => ({
  authoredPosts: many(posts, {
    relationName: 'author',
  }),

  givenLikes: many(likes, {
    relationName: 'likingUser',
  }),

  givenBookmarks: many(bookmarks, {
    relationName: 'bookmarkingUser',
  }),

  receivedNotifications: many(notifications, {
    relationName: 'receiver',
  }),

  createdNotifications: many(notifications, {
    relationName: 'creator',
  }),

  following: many(follows, {
    relationName: 'followingUser',
  }),

  followers: many(follows, {
    relationName: 'followedUser',
  }),

  feedItems: many(feed, {
    relationName: 'relatedUser',
  }),

  feedPosts: many(feed, {
    relationName: 'postAuthor',
  }),
}));

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
  content: text('content').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at'),
});

export const postsRelations = relations(posts, ({ one, many }) => ({
  author: one(users, {
    fields: [posts.userId],
    references: [users.id],
    relationName: 'author',
  }),
  receivedLikes: many(likes, {
    relationName: 'likedPost',
  }),
  receivedBookmarks: many(bookmarks, {
    relationName: 'bookmarkedPost',
  }),

  relatedNotifications: many(notifications, {
    relationName: 'relatedPost',
  }),
  feedItems: many(feed, {
    relationName: 'relatedPost',
  }),
}));

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

export const likesRelations = relations(likes, ({ one, many }) => ({
  likedPost: one(posts, {
    fields: [likes.postId],
    references: [posts.id],
    relationName: 'likedPost',
  }),

  likingUser: one(users, {
    fields: [likes.userId],
    references: [users.id],
    relationName: 'likingUser',
  }),
}));

export const bookmarks = pgTable('bookmark', {
  id: text('id').primaryKey().$default(createId),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  postId: text('postId')
    .notNull()
    .references(() => posts.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const bookmarksRelations = relations(bookmarks, ({ one, many }) => ({
  bookmarkedPost: one(posts, {
    fields: [bookmarks.postId],
    references: [posts.id],
    relationName: 'bookmarkedPost',
  }),

  bookmarkingUser: one(users, {
    fields: [bookmarks.userId],
    references: [users.id],
    relationName: 'bookmarkingUser',
  }),
}));

export const notifications = pgTable('notification', {
  id: text('id').primaryKey().$default(createId),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  isRead: boolean('is_read').notNull().default(false),
  type: text('type', { enum: ['follow', 'like', 'newPost', 'bookmark'] }).notNull(),
  postId: text('postId').references(() => posts.id, { onDelete: 'cascade' }),
  createdBy: text('created_by').references(() => users.id, { onDelete: 'cascade' }),
});

export const notificationsRelations = relations(notifications, ({ one }) => ({
  relatedPost: one(posts, {
    fields: [notifications.postId],
    references: [posts.id],
    relationName: 'relatedPost',
  }),

  receiver: one(users, {
    fields: [notifications.userId],
    references: [users.id],
    relationName: 'receiver',
  }),

  creator: one(users, {
    fields: [notifications.createdBy],
    references: [users.id],
    relationName: 'creator',
  }),
}));

export const follows = pgTable('follow', {
  id: text('id').primaryKey().$default(createId),
  followeeId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  followerId: text('followerId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const followsRelations = relations(follows, ({ one, many }) => ({
  followedUser: one(users, {
    fields: [follows.followeeId],
    references: [users.id],
    relationName: 'followedUser',
  }),

  followingUser: one(users, {
    fields: [follows.followerId],
    references: [users.id],
    relationName: 'followingUser',
  }),
}));

export const feed = pgTable('feed', {
  id: text('id').primaryKey().$default(createId),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),

  postAuthorId: text('postAuthorId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  postId: text('postId')
    .notNull()
    .references(() => posts.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const feedRelations = relations(feed, ({ one }) => ({
  relatedPost: one(posts, {
    fields: [feed.postId],
    references: [posts.id],
    relationName: 'relatedPost',
  }),

  relatedUser: one(users, {
    fields: [feed.userId],
    references: [users.id],
    relationName: 'relatedUser',
  }),

  followingUser: one(users, {
    fields: [feed.postAuthorId],
    references: [users.id],
    relationName: 'postAuthor',
  }),
}));
