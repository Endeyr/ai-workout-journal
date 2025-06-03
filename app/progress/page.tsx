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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Activity,
  Award,
  BarChart3,
  Calendar,
  CheckCircle2,
  Clock,
  Dumbbell,
  Flame,
  Target,
  TrendingDown,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from 'lucide-react';
import { useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function ProgressPage() {
  const [timeRange, setTimeRange] = useState('month');
  const [metric, setMetric] = useState('volume');

  // Mock data - replace with real data
  const stats = {
    totalWorkouts: 24,
    totalMinutes: 1080,
    totalCalories: 9240,
    totalVolume: 48500,
    currentStreak: 5,
    longestStreak: 12,
    avgWorkoutDuration: 45,
    workoutsThisWeek: 3,
    workoutsThisMonth: 12,
  };

  const volumeData = [
    { date: '2025-05-01', volume: 3200, workouts: 2 },
    { date: '2025-05-05', volume: 3800, workouts: 3 },
    { date: '2025-05-10', volume: 4200, workouts: 2 },
    { date: '2025-05-15', volume: 3900, workouts: 3 },
    { date: '2025-05-20', volume: 4500, workouts: 2 },
    { date: '2025-05-25', volume: 4800, workouts: 3 },
    { date: '2025-05-30', volume: 5100, workouts: 2 },
  ];

  const workoutTypeData = [
    { name: 'Push', value: 8, color: '#3B82F6' },
    { name: 'Pull', value: 7, color: '#8B5CF6' },
    { name: 'Legs', value: 6, color: '#10B981' },
    { name: 'Cardio', value: 3, color: '#F59E0B' },
  ];

  const strengthProgressData = [
    { exercise: 'Bench Press', current: 185, previous: 175, change: 10 },
    { exercise: 'Squat', current: 225, previous: 215, change: 10 },
    { exercise: 'Deadlift', current: 275, previous: 265, change: 10 },
    { exercise: 'Overhead Press', current: 115, previous: 110, change: 5 },
  ];

  const achievements = [
    {
      id: 1,
      name: 'First Workout',
      description: 'Complete your first workout',
      unlocked: true,
      date: '2024-01-15',
    },
    {
      id: 2,
      name: '7 Day Streak',
      description: 'Work out for 7 days straight',
      unlocked: true,
      date: '2024-02-22',
    },
    {
      id: 3,
      name: 'Volume King',
      description: 'Lift 50,000 lbs total volume',
      unlocked: false,
      progress: 97,
    },
    {
      id: 4,
      name: 'Consistency Champion',
      description: 'Complete 30 workouts',
      unlocked: false,
      progress: 80,
    },
    {
      id: 5,
      name: 'Strength Beast',
      description: 'Bench press 200 lbs',
      unlocked: false,
      progress: 92,
    },
  ];

  const weeklyGoals = [
    { name: 'Workouts', current: 3, target: 4, unit: 'sessions' },
    { name: 'Duration', current: 135, target: 180, unit: 'minutes' },
    { name: 'Calories', current: 1140, target: 1500, unit: 'calories' },
    { name: 'Volume', current: 12500, target: 15000, unit: 'lbs' },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      <div className='container mx-auto px-4 py-8'>
        {/* Header */}
        <div className='mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center'>
          <div>
            <h1 className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent'>
              Progress & Analytics
            </h1>
            <p className='mt-2 text-slate-400'>
              Track your fitness journey and celebrate your achievements
            </p>
          </div>
          <div className='flex gap-2'>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className='w-32 border-slate-700 bg-slate-800/50 text-white'>
                <SelectValue />
              </SelectTrigger>
              <SelectContent className='border-slate-700 bg-slate-800'>
                <SelectItem value='week'>This Week</SelectItem>
                <SelectItem value='month'>This Month</SelectItem>
                <SelectItem value='quarter'>3 Months</SelectItem>
                <SelectItem value='year'>This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Key Stats */}
        <div className='mb-8 grid grid-cols-2 gap-4 md:grid-cols-4'>
          <Card className='border-slate-700 bg-slate-800/50'>
            <CardContent className='p-4'>
              <div className='flex items-center gap-3'>
                <Dumbbell className='h-8 w-8 text-blue-400' />
                <div>
                  <p className='text-2xl font-bold text-white'>
                    {stats.totalWorkouts}
                  </p>
                  <p className='text-sm text-slate-400'>Total Workouts</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className='border-slate-700 bg-slate-800/50'>
            <CardContent className='p-4'>
              <div className='flex items-center gap-3'>
                <Clock className='h-8 w-8 text-green-400' />
                <div>
                  <p className='text-2xl font-bold text-white'>
                    {Math.floor(stats.totalMinutes / 60)}h
                  </p>
                  <p className='text-sm text-slate-400'>Total Time</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className='border-slate-700 bg-slate-800/50'>
            <CardContent className='p-4'>
              <div className='flex items-center gap-3'>
                <Flame className='h-8 w-8 text-orange-400' />
                <div>
                  <p className='text-2xl font-bold text-white'>
                    {stats.currentStreak}
                  </p>
                  <p className='text-sm text-slate-400'>Day Streak</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className='border-slate-700 bg-slate-800/50'>
            <CardContent className='p-4'>
              <div className='flex items-center gap-3'>
                <Target className='h-8 w-8 text-purple-400' />
                <div>
                  <p className='text-2xl font-bold text-white'>
                    {(stats.totalVolume / 1000).toFixed(1)}k
                  </p>
                  <p className='text-sm text-slate-400'>lbs Lifted</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue='overview' className='w-full'>
          <TabsList className='mb-8 grid w-full grid-cols-4 bg-slate-800/50'>
            <TabsTrigger
              value='overview'
              className='text-white data-[state=active]:bg-blue-600'
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value='strength'
              className='text-white data-[state=active]:bg-blue-600'
            >
              Strength
            </TabsTrigger>
            <TabsTrigger
              value='goals'
              className='text-white data-[state=active]:bg-blue-600'
            >
              Goals
            </TabsTrigger>
            <TabsTrigger
              value='achievements'
              className='text-white data-[state=active]:bg-blue-600'
            >
              Achievements
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value='overview' className='space-y-6'>
            <div className='grid gap-6 lg:grid-cols-2'>
              {/* Volume Chart */}
              <Card className='border-slate-700 bg-slate-800/50'>
                <CardHeader>
                  <CardTitle className='text-white'>Training Volume</CardTitle>
                  <CardDescription className='text-slate-400'>
                    Total weight lifted over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width='100%' height={300}>
                    <LineChart data={volumeData}>
                      <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                      <XAxis dataKey='date' stroke='#9CA3AF' fontSize={12} />
                      <YAxis stroke='#9CA3AF' fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1F2937',
                          border: '1px solid #374151',
                          borderRadius: '8px',
                          color: '#fff',
                        }}
                      />
                      <Line
                        type='monotone'
                        dataKey='volume'
                        stroke='#3B82F6'
                        strokeWidth={3}
                        dot={{ fill: '#3B82F6', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Workout Distribution */}
              <Card className='border-slate-700 bg-slate-800/50'>
                <CardHeader>
                  <CardTitle className='text-white'>
                    Workout Distribution
                  </CardTitle>
                  <CardDescription className='text-slate-400'>
                    Breakdown by workout type
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width='100%' height={300}>
                    <PieChart>
                      <Pie
                        data={workoutTypeData}
                        cx='50%'
                        cy='50%'
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey='value'
                      >
                        {workoutTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1F2937',
                          border: '1px solid #374151',
                          borderRadius: '8px',
                          color: '#fff',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className='mt-4 flex flex-wrap gap-4'>
                    {workoutTypeData.map((item) => (
                      <div key={item.name} className='flex items-center gap-2'>
                        <div
                          className='h-3 w-3 rounded-full'
                          style={{ backgroundColor: item.color }}
                        />
                        <span className='text-sm text-slate-300'>
                          {item.name} ({item.value})
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className='grid gap-6 md:grid-cols-3'>
              <Card className='border-slate-700 bg-slate-800/50'>
                <CardHeader>
                  <CardTitle className='text-lg text-white'>
                    This Week
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-3'>
                  <div className='flex justify-between'>
                    <span className='text-slate-400'>Workouts</span>
                    <span className='font-medium text-white'>
                      {stats.workoutsThisWeek}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-slate-400'>Avg Duration</span>
                    <span className='font-medium text-white'>
                      {stats.avgWorkoutDuration}min
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-slate-400'>Calories Burned</span>
                    <span className='font-medium text-white'>1,140</span>
                  </div>
                </CardContent>
              </Card>

              <Card className='border-slate-700 bg-slate-800/50'>
                <CardHeader>
                  <CardTitle className='text-lg text-white'>Streaks</CardTitle>
                </CardHeader>
                <CardContent className='space-y-3'>
                  <div className='flex justify-between'>
                    <span className='text-slate-400'>Current</span>
                    <div className='flex items-center gap-1'>
                      <Flame className='h-4 w-4 text-orange-400' />
                      <span className='font-medium text-white'>
                        {stats.currentStreak} days
                      </span>
                    </div>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-slate-400'>Longest</span>
                    <div className='flex items-center gap-1'>
                      <Trophy className='h-4 w-4 text-yellow-400' />
                      <span className='font-medium text-white'>
                        {stats.longestStreak} days
                      </span>
                    </div>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-slate-400'>This Month</span>
                    <span className='font-medium text-white'>
                      {stats.workoutsThisMonth} workouts
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className='border-slate-700 bg-slate-800/50'>
                <CardHeader>
                  <CardTitle className='text-lg text-white'>
                    Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-3'>
                  <div className='flex items-center justify-between'>
                    <span className='text-slate-400'>Volume Trend</span>
                    <div className='flex items-center gap-1 text-green-400'>
                      <TrendingUp className='h-4 w-4' />
                      <span className='font-medium'>+12%</span>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-slate-400'>Consistency</span>
                    <div className='flex items-center gap-1 text-green-400'>
                      <CheckCircle2 className='h-4 w-4' />
                      <span className='font-medium'>85%</span>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-slate-400'>Improvement</span>
                    <div className='flex items-center gap-1 text-blue-400'>
                      <Activity className='h-4 w-4' />
                      <span className='font-medium'>Strong</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Strength Tab */}
          <TabsContent value='strength' className='space-y-6'>
            <Card className='border-slate-700 bg-slate-800/50'>
              <CardHeader>
                <CardTitle className='text-white'>Strength Progress</CardTitle>
                <CardDescription className='text-slate-400'>
                  Track your personal records and strength gains
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  {strengthProgressData.map((exercise) => (
                    <div
                      key={exercise.exercise}
                      className='flex items-center justify-between rounded-lg bg-slate-900/50 p-4'
                    >
                      <div>
                        <h3 className='font-medium text-white'>
                          {exercise.exercise}
                        </h3>
                        <p className='text-sm text-slate-400'>
                          Current: {exercise.current} lbs
                        </p>
                      </div>
                      <div className='text-right'>
                        <div className='flex items-center gap-1 text-green-400'>
                          <TrendingUp className='h-4 w-4' />
                          <span className='font-medium'>
                            +{exercise.change} lbs
                          </span>
                        </div>
                        <p className='text-sm text-slate-400'>
                          from {exercise.previous} lbs
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Goals Tab */}
          <TabsContent value='goals' className='space-y-6'>
            <Card className='border-slate-700 bg-slate-800/50'>
              <CardHeader>
                <CardTitle className='text-white'>Weekly Goals</CardTitle>
                <CardDescription className='text-slate-400'>
                  Track your progress towards weekly fitness goals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-6'>
                  {weeklyGoals.map((goal) => (
                    <div key={goal.name} className='space-y-2'>
                      <div className='flex items-center justify-between'>
                        <span className='font-medium text-white'>
                          {goal.name}
                        </span>
                        <span className='text-sm text-slate-400'>
                          {goal.current} / {goal.target} {goal.unit}
                        </span>
                      </div>
                      <Progress
                        value={(goal.current / goal.target) * 100}
                        className='h-2 bg-slate-700'
                      />
                      <div className='text-right'>
                        <span className='text-xs text-slate-400'>
                          {Math.round((goal.current / goal.target) * 100)}%
                          complete
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value='achievements' className='space-y-6'>
            <div className='grid gap-6 md:grid-cols-2'>
              {achievements.map((achievement) => (
                <Card
                  key={achievement.id}
                  className={`border-slate-700 ${
                    achievement.unlocked
                      ? 'border-yellow-800/50 bg-gradient-to-br from-yellow-900/20 to-orange-900/20'
                      : 'bg-slate-800/50'
                  }`}
                >
                  <CardHeader>
                    <div className='flex items-center gap-3'>
                      <div
                        className={`rounded-full p-2 ${
                          achievement.unlocked
                            ? 'bg-yellow-500/20'
                            : 'bg-slate-700/50'
                        }`}
                      >
                        <Award
                          className={`h-6 w-6 ${
                            achievement.unlocked
                              ? 'text-yellow-400'
                              : 'text-slate-500'
                          }`}
                        />
                      </div>
                      <div>
                        <CardTitle
                          className={`text-lg ${
                            achievement.unlocked
                              ? 'text-yellow-400'
                              : 'text-white'
                          }`}
                        >
                          {achievement.name}
                        </CardTitle>
                        <CardDescription className='text-slate-400'>
                          {achievement.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {achievement.unlocked ? (
                      <div className='flex items-center gap-2 text-green-400'>
                        <CheckCircle2 className='h-4 w-4' />
                        <span className='text-sm'>
                          Unlocked on {achievement.date}
                        </span>
                      </div>
                    ) : (
                      <div className='space-y-2'>
                        <div className='flex justify-between text-sm'>
                          <span className='text-slate-400'>Progress</span>
                          <span className='text-white'>
                            {achievement.progress}%
                          </span>
                        </div>
                        <Progress
                          value={achievement.progress}
                          className='h-2 bg-slate-700'
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
