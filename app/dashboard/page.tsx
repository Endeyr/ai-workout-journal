'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Plus,
  TrendingUp,
  Calendar,
  Target,
  Flame,
  Clock,
  Dumbbell,
  Trophy,
  Activity,
  User,
  Settings,
  Bell,
} from 'lucide-react';
import Link from 'next/link';

const DashboardPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  // Mock data - replace with real data
  const weeklyGoal = 4;
  const completedWorkouts = 2;
  const weeklyProgress = (completedWorkouts / weeklyGoal) * 100;

  const recentWorkouts = [
    {
      id: 1,
      name: 'Push Day - Chest & Triceps',
      date: '2025-05-29',
      duration: 45,
      exercises: 8,
      calories: 380,
      intensity: 'High',
    },
    {
      id: 2,
      name: 'Pull Day - Back & Biceps',
      date: '2025-05-27',
      duration: 52,
      exercises: 9,
      calories: 410,
      intensity: 'High',
    },
    {
      id: 3,
      name: 'Leg Day - Quads & Glutes',
      date: '2025-05-25',
      duration: 38,
      exercises: 7,
      calories: 445,
      intensity: 'Medium',
    },
  ];

  const upcomingWorkouts = [
    {
      id: 1,
      name: 'Leg Day - Hamstrings & Calves',
      scheduledDate: '2025-05-31',
      estimatedDuration: 40,
      exercises: 6,
    },
    {
      id: 2,
      name: 'Upper Body - Arms Focus',
      scheduledDate: '2025-06-02',
      estimatedDuration: 35,
      exercises: 8,
    },
  ];
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950'>
      {/* Navigation */}
      <nav className='container mx-auto flex items-center justify-between border-b border-slate-800 px-6 py-4'>
        <div className='flex items-center space-x-2'>
          <Dumbbell className='h-8 w-8 text-purple-400' />
          <span className='text-2xl font-bold text-white'>FitAI</span>
        </div>
        <div className='flex items-center space-x-4'>
          <Button
            variant='ghost'
            size='icon'
            className='text-slate-400 hover:text-white'
          >
            <Bell className='h-5 w-5' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            className='text-slate-400 hover:text-white'
          >
            <Settings className='h-5 w-5' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            className='text-slate-400 hover:text-white'
          >
            <User className='h-5 w-5' />
          </Button>
        </div>
      </nav>

      <div className='container mx-auto px-6 py-8'>
        {/* Header */}
        <div className='mb-8 flex items-center justify-between'>
          <div>
            <h1 className='mb-2 text-4xl font-bold text-white'>
              Welcome back, Alex
            </h1>
            <p className='text-slate-400'>
              Ready to crush your fitness goals today?
            </p>
          </div>
          <Link href='/workout/new'>
            <Button className='bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'>
              <Plus className='mr-2 h-4 w-4' />
              New Workout
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className='mb-8 grid grid-cols-1 gap-6 md:grid-cols-4'>
          <Card className='border-slate-800 bg-slate-900/50 backdrop-blur-sm'>
            <CardHeader className='pb-3'>
              <div className='flex items-center justify-between'>
                <CardTitle className='text-sm font-medium text-slate-400'>
                  Weekly Goal
                </CardTitle>
                <Target className='h-4 w-4 text-purple-400' />
              </div>
            </CardHeader>
            <CardContent>
              <div className='mb-2 text-2xl font-bold text-white'>
                {completedWorkouts}/{weeklyGoal}
              </div>
              <Progress value={weeklyProgress} className='mb-2 h-2' />
              <p className='text-xs text-slate-400'>
                {Math.round(weeklyProgress)}% complete
              </p>
            </CardContent>
          </Card>

          <Card className='border-slate-800 bg-slate-900/50 backdrop-blur-sm'>
            <CardHeader className='pb-3'>
              <div className='flex items-center justify-between'>
                <CardTitle className='text-sm font-medium text-slate-400'>
                  This Week
                </CardTitle>
                <Flame className='h-4 w-4 text-orange-400' />
              </div>
            </CardHeader>
            <CardContent>
              <div className='mb-1 text-2xl font-bold text-white'>1,235</div>
              <p className='text-xs text-slate-400'>Calories burned</p>
            </CardContent>
          </Card>

          <Card className='border-slate-800 bg-slate-900/50 backdrop-blur-sm'>
            <CardHeader className='pb-3'>
              <div className='flex items-center justify-between'>
                <CardTitle className='text-sm font-medium text-slate-400'>
                  Avg Duration
                </CardTitle>
                <Clock className='h-4 w-4 text-blue-400' />
              </div>
            </CardHeader>
            <CardContent>
              <div className='mb-1 text-2xl font-bold text-white'>45m</div>
              <p className='text-xs text-slate-400'>Per workout</p>
            </CardContent>
          </Card>

          <Card className='border-slate-800 bg-slate-900/50 backdrop-blur-sm'>
            <CardHeader className='pb-3'>
              <div className='flex items-center justify-between'>
                <CardTitle className='text-sm font-medium text-slate-400'>
                  Streak
                </CardTitle>
                <Trophy className='h-4 w-4 text-yellow-400' />
              </div>
            </CardHeader>
            <CardContent>
              <div className='mb-1 text-2xl font-bold text-white'>7 days</div>
              <p className='text-xs text-slate-400'>Personal best!</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {/* Left Column - Recent Workouts */}
          <div className='lg:col-span-2'>
            <Card className='border-slate-800 bg-slate-900/50 backdrop-blur-sm'>
              <CardHeader>
                <div className='flex items-center justify-between'>
                  <CardTitle className='text-white'>Recent Workouts</CardTitle>
                  <Link href='/workouts'>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='text-purple-400 hover:text-purple-300'
                    >
                      View All
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  {recentWorkouts.map((workout) => (
                    <div
                      key={workout.id}
                      className='flex items-center justify-between rounded-lg bg-slate-800/50 p-4 transition-colors hover:bg-slate-800/70'
                    >
                      <div className='flex items-center space-x-4'>
                        <div className='flex h-10 w-10 items-center justify-center rounded-full bg-purple-600/20'>
                          <Activity className='h-5 w-5 text-purple-400' />
                        </div>
                        <div>
                          <h3 className='font-medium text-white'>
                            {workout.name}
                          </h3>
                          <p className='text-sm text-slate-400'>
                            {workout.date} • {workout.duration} min
                          </p>
                        </div>
                      </div>
                      <div className='flex items-center space-x-4 text-sm text-slate-400'>
                        <span>{workout.exercises} exercises</span>
                        <span>{workout.calories} cal</span>
                        <Badge
                          variant={
                            workout.intensity === 'High'
                              ? 'default'
                              : 'secondary'
                          }
                          className='text-xs'
                        >
                          {workout.intensity}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Upcoming & Progress */}
          <div className='space-y-6'>
            {/* Upcoming Workouts */}
            <Card className='border-slate-800 bg-slate-900/50 backdrop-blur-sm'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-white'>
                  <Calendar className='h-5 w-5 text-purple-400' />
                  Upcoming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-3'>
                  {upcomingWorkouts.map((workout) => (
                    <div
                      key={workout.id}
                      className='rounded-lg border border-slate-700/50 bg-slate-800/30 p-3'
                    >
                      {workout.name}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className='border-slate-800 bg-slate-900/50 backdrop-blur-sm'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-white'>
                  <TrendingUp className='h-5 w-5 text-green-400' />
                  AI Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='rounded-lg border border-green-800/50 bg-green-900/20 p-3'>
                    <p className='text-sm text-green-300'>
                      🎯 You're on track to beat your weekly goal!
                    </p>
                  </div>
                  <div className='rounded-lg border border-blue-800/50 bg-blue-900/20 p-3'>
                    <p className='text-sm text-blue-300'>
                      💪 Consider adding more leg exercises to balance your
                      routine
                    </p>
                  </div>
                  <div className='rounded-lg border border-yellow-800/50 bg-yellow-900/20 p-3'>
                    <p className='text-sm text-yellow-300'>
                      ⚡ Your intensity has increased 15% this month
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className='border-slate-800 bg-slate-900/50 backdrop-blur-sm'>
              <CardHeader>
                <CardTitle className='text-white'>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-2'>
                  <Link href='/workout/new' className='block'>
                    <Button
                      variant='outline'
                      className='w-full justify-start border-slate-700 text-slate-300 hover:bg-slate-800'
                    >
                      <Plus className='mr-2 h-4 w-4' />
                      Start Workout
                    </Button>
                  </Link>
                  <Link href='/progress' className='block'>
                    <Button
                      variant='outline'
                      className='w-full justify-start border-slate-700 text-slate-300 hover:bg-slate-800'
                    >
                      <TrendingUp className='mr-2 h-4 w-4' />
                      View Progress
                    </Button>
                  </Link>
                  <Link href='/workouts' className='block'>
                    <Button
                      variant='outline'
                      className='w-full justify-start border-slate-700 text-slate-300 hover:bg-slate-800'
                    >
                      <Calendar className='mr-2 h-4 w-4' />
                      Browse Workouts
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;
