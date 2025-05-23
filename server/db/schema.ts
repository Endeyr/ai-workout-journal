if (process.env.NEXT_RUNTIME) {
  require('server-only');
}

import {
  bigint,
  index,
  int,
  singlestoreTableCreator,
  text,
  timestamp,
} from 'drizzle-orm/singlestore-core';

export const createTable = singlestoreTableCreator(
  (name) => `ai-workout-journal_${name}`
);

export const table = createTable(
  'table',
  {
    id: bigint('id', { mode: 'number', unsigned: true })
      .primaryKey()
      .autoincrement(),
    ownerId: text('owner_id').notNull(),
    name: text('name').notNull(),
    size: int('size').notNull(),
    url: text('url').notNull(),
    // fileKey: text('file_key').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (t) => {
    return [index('owner_id_index').on(t.ownerId)];
  }
);

export type DB_TableType = typeof table.$inferSelect;
