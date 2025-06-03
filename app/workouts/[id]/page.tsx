'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ArrowLeft,
  Award,
  BarChart3,
  Calendar,
  CheckCircle2,
  Clock,
  Copy,
  Dumbbell,
  Edit,
  Heart,
  Play,
  Share,
  Target,
  Timer,
  TrendingUp,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function WorkoutsDetailPage() {
  const params = useParams();
  const workoutId = params.id;

  // Mock data - replace with real data fetching
  const workout = {
    id: workoutId,
    name: 'Push Day - Chest & Triceps',
    type: 'Push',
    date: '2025-05-29',
    startTime: '07:30 AM',
    endTime: '08:15 AM',
    duration: 45,
    totalCalories: 380,
    intensity: 'High',
    completed: true,
    favorite: true,
    notes:
      'Great session today! Felt strong on bench press. Need to focus more on tricep isolation exercises next time.',
    exercises: [
      {
        id: 1,
        name: 'Bench Press',
        type: 'Compound',
        muscleGroups: ['Chest', 'Triceps', 'Shoulders'],
        sets: [
          { reps: 12, weight: 135, rpe: 7, rest: 90 },
          { reps: 10, weight: 155, rpe: 8, rest: 90 },
          { reps: 8, weight: 175, rpe: 9, rest: 120 },
          { reps: 6, weight: 185, rpe: 9.5, rest: 120 },
        ],
        totalVolume: 1980,
        personalRecord: false,
      },
      {
        id: 2,
        name: 'Incline Dumbbell Press',
        type: 'Compound',
        muscleGroups: ['Chest', 'Shoulders'],
        sets: [
          { reps: 12, weight: 70, rpe: 7, rest: 60 },
          { reps: 10, weight: 75, rpe: 8, rest: 60 },
          { reps: 8, weight: 80, rpe: 9, rest: 90 },
        ],
        totalVolume: 2150,
        personalRecord: true,
      },
      {
        id: 3,
        name: 'Dips',
        type: 'Compound',
        muscleGroups: ['Triceps', 'Chest'],
        sets: [
          { reps: 15, weight: 0, rpe: 6, rest: 45 },
          { reps: 12, weight: 25, rpe: 7, rest: 60 },
          { reps: 10, weight: 35, rpe: 8, rest: 60 },
        ],
        totalVolume: 720,
        personalRecord: false,
      },
      {
        id: 4,
        name: 'Overhead Press',
        type: 'Compound',
        muscleGroups: ['Shoulders', 'Triceps'],
        sets: [
          { reps: 10, weight: 95, rpe: 7, rest: 90 },
          { reps: 8, weight: 105, rpe: 8, rest: 90 },
          { reps: 6, weight: 115, rpe: 9, rest: 90 },
        ],
        totalVolume: 2400,
        personalRecord: false,
      },
    ],
  };

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case 'Low':
        return 'bg-green-900/50 text-green-300 border-green-800';
      case 'Medium':
        return 'bg-yellow-900/50 text-yellow-300 border-yellow-800';
      case 'High':
        return 'bg-orange-900/50 text-orange-300 border-orange-800';
      case 'Very High':
        return 'bg-red-900/50 text-red-300 border-red-800';
      default:
        return 'bg-gray-900/50 text-gray-300 border-gray-800';
    }
  };

  const getRPEColor = (rpe: number) => {
    if (rpe <= 6) return 'text-green-400';
    if (rpe <= 8) return 'text-yellow-400';
    if (rpe <= 9) return 'text-orange-400';
    return 'text-red-400';
  };

  const totalVolume = workout.exercises.reduce(
    (sum, exercise) => sum + exercise.totalVolume,
    0
  );

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      <div className='container mx-auto px-4 py-8'>
        {/* Header */}
        <div className='mb-8 flex items-center gap-4'>
          <Button
            variant='ghost'
            size='sm'
            asChild
            className='text-slate-400 hover:text-white'
          >
            <Link href='/workouts'>
              <ArrowLeft className='mr-2 h-4 w-4' />
              Back to Workouts
            </Link>
          </Button>
        </div>

        <div className='mb-8 flex flex-col items-start justify-between gap-6 lg:flex-row'>
          <div className='flex-1'>
            <div className='mb-2 flex items-center gap-3'>
              <h1 className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent'>
                {workout.name}
              </h1>
              {workout.favorite && (
                <Heart className='h-6 w-6 fill-red-500 text-red-500' />
              )}
            </div>
            <p className='text-lg text-slate-400'>
              {new Date(workout.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}{' '}
              • {workout.startTime} - {workout.endTime}
            </p>
          </div>
          <div className='flex gap-2'>
            <Button
              variant='outline'
              size='sm'
              className='border-slate-600 text-slate-300 hover:bg-slate-700'
            >
              <Share className='mr-2 h-4 w-4' />
              Share
            </Button>
            <Button
              variant='outline'
              size='sm'
              className='border-slate-600 text-slate-300 hover:bg-slate-700'
            >
              <Copy className='mr-2 h-4 w-4' />
              Duplicate
            </Button>
            <Button
              variant='outline'
              size='sm'
              className='border-slate-600 text-slate-300 hover:bg-slate-700'
            >
              <Edit className='mr-2 h-4 w-4' />
              Edit
            </Button>
            <Button className='bg-green-600 hover:bg-green-700'>
              <Play className='mr-2 h-4 w-4' />
              Start Again
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className='mb-8 grid grid-cols-2 gap-4 md:grid-cols-4'>
          <Card className='border-slate-700 bg-slate-800/50'>
            <CardContent className='p-4'>
              <div className='flex items-center gap-3'>
                <Clock className='h-8 w-8 text-blue-400' />
                <div>
                  <p className='text-2xl font-bold text-white'>
                    {workout.duration}
                  </p>
                  <p className='text-sm text-slate-400'>Minutes</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className='border-slate-700 bg-slate-800/50'>
            <CardContent className='p-4'>
              <div className='flex items-center gap-3'>
                <Target className='h-8 w-8 text-orange-400' />
                <div>
                  <p className='text-2xl font-bold text-white'>
                    {workout.totalCalories}
                  </p>
                  <p className='text-sm text-slate-400'>Calories</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className='border-slate-700 bg-slate-800/50'>
            <CardContent className='p-4'>
              <div className='flex items-center gap-3'>
                <Dumbbell className='h-8 w-8 text-purple-400' />
                <div>
                  <p className='text-2xl font-bold text-white'>
                    {totalVolume.toLocaleString()}
                  </p>
                  <p className='text-sm text-slate-400'>lbs Volume</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className='border-slate-700 bg-slate-800/50'>
            <CardContent className='p-4'>
              <div className='flex items-center gap-3'>
                <Zap className='h-8 w-8 text-yellow-400' />
                <div>
                  <p className='text-2xl font-bold text-white'>
                    {workout.exercises.length}
                  </p>
                  <p className='text-sm text-slate-400'>Exercises</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className='grid gap-8 lg:grid-cols-3'>
          {/* Exercises */}
          <div className='lg:col-span-2'>
            <Card className='border-slate-700 bg-slate-800/50'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-white'>
                  <Dumbbell className='h-5 w-5' />
                  Exercises
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-6'>
                {workout.exercises.map((exercise, index) => (
                  <div key={exercise.id} className='space-y-4'>
                    <div className='flex items-center justify-between'>
                      <div>
                        <h3 className='flex items-center gap-2 text-lg font-semibold text-white'>
                          {exercise.name}
                          {exercise.personalRecord && (
                            <Award className='h-4 w-4 text-yellow-400' />
                          )}
                        </h3>
                        <div className='mt-1 flex flex-wrap gap-2'>
                          {exercise.muscleGroups.map((muscle) => (
                            <Badge
                              key={muscle}
                              variant='outline'
                              className='border-blue-800 bg-blue-900/30 text-xs text-blue-300'
                            >
                              {muscle}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Badge
                        variant='outline'
                        className='border-slate-600 bg-slate-700/50 text-slate-300'
                      >
                        {exercise.type}
                      </Badge>
                    </div>

                    <div className='rounded-lg bg-slate-900/50 p-4'>
                      <div className='mb-2 grid grid-cols-4 gap-4 text-sm text-slate-400'>
                        <div>Set</div>
                        <div>Reps × Weight</div>
                        <div>RPE</div>
                        <div>Rest</div>
                      </div>
                      {exercise.sets.map((set, setIndex) => (
                        <div
                          key={setIndex}
                          className='grid grid-cols-4 gap-4 border-b border-slate-700/50 py-2 text-sm text-white last:border-b-0'
                        >
                          <div className='flex items-center gap-2'>
                            <CheckCircle2 className='h-4 w-4 text-green-400' />
                            {setIndex + 1}
                          </div>
                          <div>
                            {set.reps} ×{' '}
                            {set.weight > 0
                              ? `${set.weight} lbs`
                              : 'Bodyweight'}
                          </div>
                          <div className={getRPEColor(set.rpe)}>
                            RPE {set.rpe}
                          </div>
                          <div className='text-slate-400'>{set.rest}s</div>
                        </div>
                      ))}
                    </div>

                    <div className='text-sm text-slate-400'>
                      Total Volume:{' '}
                      <span className='font-medium text-white'>
                        {exercise.totalVolume.toLocaleString()} lbs
                      </span>
                    </div>

                    {index < workout.exercises.length - 1 && (
                      <Separator className='bg-slate-700' />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className='space-y-6'>
            {/* Workout Summary */}
            <Card className='border-slate-700 bg-slate-800/50'>
              <CardHeader>
                <CardTitle className='text-white'>Workout Summary</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <span className='text-slate-400'>Type</span>
                  <Badge
                    variant='outline'
                    className='border-blue-800 bg-blue-900/50 text-blue-300'
                  >
                    {workout.type}
                  </Badge>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-slate-400'>Intensity</span>
                  <Badge
                    variant='outline'
                    className={getIntensityColor(workout.intensity)}
                  >
                    {workout.intensity}
                  </Badge>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-slate-400'>Status</span>
                  <Badge
                    variant='outline'
                    className='border-green-800 bg-green-900/50 text-green-300'
                  >
                    <CheckCircle2 className='mr-1 h-3 w-3' />
                    Completed
                  </Badge>
                </div>
                <Separator className='bg-slate-700' />
                <div className='space-y-2'>
                  <div className='flex justify-between'>
                    <span className='text-slate-400'>Total Sets</span>
                    <span className='text-white'>
                      {workout.exercises.reduce(
                        (sum, ex) => sum + ex.sets.length,
                        0
                      )}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-slate-400'>Total Reps</span>
                    <span className='text-white'>
                      {workout.exercises.reduce(
                        (sum, ex) =>
                          sum +
                          ex.sets.reduce((setSum, set) => setSum + set.reps, 0),
                        0
                      )}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-slate-400'>Avg RPE</span>
                    <span className='text-white'>
                      {(
                        workout.exercises.reduce(
                          (sum, ex) =>
                            sum +
                            ex.sets.reduce(
                              (setSum, set) => setSum + set.rpe,
                              0
                            ),
                          0
                        ) /
                        workout.exercises.reduce(
                          (sum, ex) => sum + ex.sets.length,
                          0
                        )
                      ).toFixed(1)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Personal Records */}
            {workout.exercises.some((ex) => ex.personalRecord) && (
              <Card className='border-yellow-800/50 bg-gradient-to-br from-yellow-900/20 to-orange-900/20'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2 text-yellow-400'>
                    <Award className='h-5 w-5' />
                    Personal Records
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {workout.exercises
                    .filter((ex) => ex.personalRecord)
                    .map((exercise) => (
                      <div key={exercise.id} className='text-white'>
                        🏆 {exercise.name}
                      </div>
                    ))}
                </CardContent>
              </Card>
            )}

            {/* Notes */}
            {workout.notes && (
              <Card className='border-slate-700 bg-slate-800/50'>
                <CardHeader>
                  <CardTitle className='text-white'>Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-sm leading-relaxed text-slate-300'>
                    {workout.notes}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Quick Actions */}
            <Card className='border-slate-700 bg-slate-800/50'>
              <CardHeader>
                <CardTitle className='text-white'>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className='space-y-3'>
                <Button className='w-full bg-green-600 hover:bg-green-700'>
                  <Play className='mr-2 h-4 w-4' />
                  Start This Workout
                </Button>
                <Button
                  variant='outline'
                  className='w-full border-slate-600 text-slate-300 hover:bg-slate-700'
                >
                  <Copy className='mr-2 h-4 w-4' />
                  Create Template
                </Button>
                <Button
                  variant='outline'
                  className='w-full border-slate-600 text-slate-300 hover:bg-slate-700'
                >
                  <BarChart3 className='mr-2 h-4 w-4' />
                  View Progress
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
