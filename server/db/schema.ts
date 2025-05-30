if (process.env.NEXT_RUNTIME) {
  require('server-only');
}

import {
  bigint,
  boolean,
  index,
  int,
  singlestoreTableCreator,
  text,
  timestamp,
} from 'drizzle-orm/singlestore-core';

export const createTable = singlestoreTableCreator(
  (name) => `ai-workout-journal_${name}`
);

// Intended Use: Users can create their own exercise and search the db of others exercises to add to their workout

export const exercise_table = createTable(
  'exercise-table',
  {
    id: bigint('id', { mode: 'number', unsigned: true })
      .primaryKey()
      .autoincrement(),
    ownerId: text('owner_id').notNull(), // User Id
    name: text('name').notNull(),
    sets: int().notNull(),
    reps: int().notNull(),
    weight: int().notNull(),
    workoutId: int(), // if it belongs to a workout
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (t) => {
    return [index('owner_id_index').on(t.ownerId)];
  }
);

export type DB_ExerciseTableType = typeof exercise_table.$inferSelect;

// Intended Use: Users can create a workout to follow, and add exercises to it

export const workout_table = createTable(
  'workout-table',
  {
    id: bigint('id', { mode: 'number', unsigned: true })
      .primaryKey()
      .autoincrement(),
    ownerId: text('owner_id').notNull(), // User Id
    name: text('name').notNull(),
    type: text('type').notNull(), // Enum? Legs, Arms, Back, ect
    duration: int().notNull(), // MMSS
    notes: text('notes'),
    fitnessId: int(), // if it belongs to a fitness regimine
    dayOfWeek: text('dayOfWeek'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (t) => {
    return [index('owner_id_index').on(t.ownerId)];
  }
);

export type DB_WorkoutTableType = typeof exercise_table.$inferSelect;

// Intended Use: Tracks all the users workouts

export const regimen_table = createTable(
  'regimen-table',
  {
    id: bigint('id', { mode: 'number', unsigned: true })
      .primaryKey()
      .autoincrement(),
    ownerId: text('owner_id').notNull(), // User Id
    name: text('name').notNull(),
    visibility: boolean().default(false),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (t) => {
    return [index('owner_id_index').on(t.ownerId)];
  }
);

export type DB_RegimenTableType = typeof exercise_table.$inferSelect;
