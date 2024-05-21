import { defineConfig } from 'drizzle-kit';
import { env } from '@/env';

export default defineConfig({
  schema: ['./db/schema.ts'],
  out: './db/drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
  tablesFilter: ['dev_space_*'],
});
