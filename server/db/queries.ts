import { db } from '@/server/db/index';
import { and, eq } from 'drizzle-orm';
import 'server-only';
import { exercise_table } from './schema';
// Drizzle queries + mutations to singlestore db
export const QUERY = {
  getWorkouts: (workoutId: number, userId: string) => {
    return db
      .select()
      .from(exercise_table)
      .where(
        and(
          eq(exercise_table.ownerId, userId),
          eq(exercise_table.id, workoutId)
        )
      )
      .orderBy(exercise_table.createdAt);
  },
  getWorkoutById: async (workoutId: number) => {
    const workout = await db
      .select()
      .from(exercise_table)
      .where(eq(exercise_table.id, workoutId));
    return workout[0];
  },
};

export const MUTATION = {
  createWorkout: async (input: {
    workout: {
      name: string;
      sets: number;
      reps: number;
      notes: string;
    };
    userId: string;
  }) => {
    return await db
      .insert(exercise_table)
      .values({ ...input.workout, ownerId: input.userId });
  },
  onBoardUser: async () => {
    return;
  },
};
