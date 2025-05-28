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

export const exercise_table = createTable(
  'table',
  {
    id: bigint('id', { mode: 'number', unsigned: true })
      .primaryKey()
      .autoincrement(),
    ownerId: text('owner_id').notNull(), // User Id
    name: text('name').notNull(), // Workout Name
    sets: int().notNull(),
    reps: int().notNull(),
    notes: text('notes'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (t) => {
    return [index('owner_id_index').on(t.ownerId)];
  }
);

export type DB_TableType = typeof exercise_table.$inferSelect;
