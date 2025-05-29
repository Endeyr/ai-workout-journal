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

export type DB_ExerciseTableType = typeof exercise_table.$inferSelect;

export const workout_table = createTable(
  'table',
  {
    id: bigint('id', { mode: 'number', unsigned: true })
      .primaryKey()
      .autoincrement(),
    ownerId: text('owner_id').notNull(), // User Id
    name: text('name').notNull(), // Workout Name
    type: text('type').notNull(), // Enum? Legs, Arms, Back, ect
    duration: int().notNull(), // HHMM
    notes: text('notes'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (t) => {
    return [index('owner_id_index').on(t.ownerId)];
  }
);

export type DB_WorkoutTableType = typeof exercise_table.$inferSelect;
