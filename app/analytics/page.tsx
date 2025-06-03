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
  ArrowDown,
  ArrowUp,
  Award,
  BarChart3,
  Brain,
  Calendar,
  Clock,
  Download,
  Filter,
  Minus,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('volume');

  const stats = {
    totalWorkouts: 48,
    totalVolume: 142500,
    avgDuration: 67,
    bestStreak: 12,
    currentStreak: 5,
    personalRecords: 8,
  };

  const insights = [
    {
      title: 'Strong Progressive Overload',
      description: 'Your squat volume has increased 15% over the past month',
      type: 'positive',
      icon: TrendingUp,
      category: 'Strength',
    },
    {
      title: 'Consistency Opportunity',
      description: "You've missed 3 scheduled leg days this month",
      type: 'warning',
      icon: Calendar,
      category: 'Schedule',
    },
    {
      title: 'Recovery Pattern',
      description: 'Your best performances occur after 1-2 rest days',
      type: 'insight',
      icon: Brain,
      category: 'Recovery',
    },
    {
      title: 'New PR Alert!',
      description: 'Deadlift 1RM increased from 315 to 325 lbs',
      type: 'achievement',
      icon: Award,
      category: 'Strength',
    },
  ];

  const muscleGroupData = [
    { name: 'Chest', volume: 12500, sessions: 8, trend: 'up' },
    { name: 'Back', volume: 15200, sessions: 10, trend: 'up' },
    { name: 'Legs', volume: 18700, sessions: 6, trend: 'down' },
    { name: 'Shoulders', volume: 8900, sessions: 7, trend: 'up' },
    { name: 'Arms', volume: 9200, sessions: 9, trend: 'stable' },
    { name: 'Core', volume: 4200, sessions: 12, trend: 'up' },
  ];

  const weeklyData = [
    { week: 'Week 1', volume: 32000, duration: 285, workouts: 4 },
    { week: 'Week 2', volume: 35500, duration: 310, workouts: 5 },
    { week: 'Week 3', volume: 29800, duration: 240, workouts: 3 },
    { week: 'Week 4', volume: 38200, duration: 335, workouts: 5 },
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <ArrowUp className='h-4 w-4 text-green-500' />;
      case 'down':
        return <ArrowDown className='h-4 w-4 text-red-500' />;
      default:
        return <Minus className='h-4 w-4 text-gray-500' />;
    }
  };

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'positive':
        return 'text-green-700 bg-green-100 border-green-200';
      case 'warning':
        return 'text-yellow-700 bg-yellow-100 border-yellow-200';
      case 'achievement':
        return 'text-purple-700 bg-purple-100 border-purple-200';
      default:
        return 'text-blue-700 bg-blue-100 border-blue-200';
    }
  };

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      <div className='container mx-auto max-w-7xl px-4 py-8'>
        {/* Header */}
        <div className='mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center'>
          <div className='flex items-center gap-3'>
            <BarChart3 className='h-8 w-8 text-blue-500' />
            <div>
              <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
                Analytics
              </h1>
              <p className='text-gray-600 dark:text-gray-400'>
                Insights into your fitness journey
              </p>
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className='w-32'>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='7d'>7 days</SelectItem>
                <SelectItem value='30d'>30 days</SelectItem>
                <SelectItem value='90d'>90 days</SelectItem>
                <SelectItem value='1y'>1 year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant='outline' className='flex items-center gap-2'>
              <Download className='h-4 w-4' />
              Export
            </Button>
          </div>
        </div>

        {/* Key Stats */}
        <div className='mb-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6'>
          <Card>
            <CardContent className='p-4'>
              <div className='mb-1 flex items-center gap-2'>
                <Activity className='h-4 w-4 text-blue-500' />
                <span className='text-sm font-medium text-gray-600 dark:text-gray-400'>
                  Workouts
                </span>
              </div>
              <p className='text-2xl font-bold'>{stats.totalWorkouts}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-4'>
              <div className='mb-1 flex items-center gap-2'>
                <Target className='h-4 w-4 text-green-500' />
                <span className='text-sm font-medium text-gray-600 dark:text-gray-400'>
                  Volume
                </span>
              </div>
              <p className='text-2xl font-bold'>
                {(stats.totalVolume / 1000).toFixed(0)}k
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-4'>
              <div className='mb-1 flex items-center gap-2'>
                <Clock className='h-4 w-4 text-purple-500' />
                <span className='text-sm font-medium text-gray-600 dark:text-gray-400'>
                  Avg Duration
                </span>
              </div>
              <p className='text-2xl font-bold'>{stats.avgDuration}m</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-4'>
              <div className='mb-1 flex items-center gap-2'>
                <Zap className='h-4 w-4 text-orange-500' />
                <span className='text-sm font-medium text-gray-600 dark:text-gray-400'>
                  Current Streak
                </span>
              </div>
              <p className='text-2xl font-bold'>{stats.currentStreak}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-4'>
              <div className='mb-1 flex items-center gap-2'>
                <Award className='h-4 w-4 text-yellow-500' />
                <span className='text-sm font-medium text-gray-600 dark:text-gray-400'>
                  Best Streak
                </span>
              </div>
              <p className='text-2xl font-bold'>{stats.bestStreak}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='p-4'>
              <div className='mb-1 flex items-center gap-2'>
                <TrendingUp className='h-4 w-4 text-red-500' />
                <span className='text-sm font-medium text-gray-600 dark:text-gray-400'>
                  PRs
                </span>
              </div>
              <p className='text-2xl font-bold'>{stats.personalRecords}</p>
            </CardContent>
          </Card>
        </div>

        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {/* Main Analytics */}
          <div className='lg:col-span-2'>
            <Tabs defaultValue='trends' className='space-y-6'>
              <TabsList className='grid w-full grid-cols-3'>
                <TabsTrigger value='trends'>Trends</TabsTrigger>
                <TabsTrigger value='muscle-groups'>Muscle Groups</TabsTrigger>
                <TabsTrigger value='performance'>Performance</TabsTrigger>
              </TabsList>

              <TabsContent value='trends' className='space-y-6'>
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Progress</CardTitle>
                    <CardDescription>
                      Your training volume and frequency over time
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-4'>
                      {weeklyData.map((week, index) => (
                        <div
                          key={index}
                          className='flex items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-800'
                        >
                          <div>
                            <p className='font-medium'>{week.week}</p>
                            <p className='text-sm text-gray-600 dark:text-gray-400'>
                              {week.workouts} workouts
                            </p>
                          </div>
                          <div className='text-right'>
                            <p className='font-bold'>
                              {(week.volume / 1000).toFixed(0)}k lbs
                            </p>
                            <p className='text-sm text-gray-600 dark:text-gray-400'>
                              {week.duration} min
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value='muscle-groups' className='space-y-6'>
                <Card>
                  <CardHeader>
                    <CardTitle>Muscle Group Analysis</CardTitle>
                    <CardDescription>
                      Training volume distribution by muscle group
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-4'>
                      {muscleGroupData.map((group, index) => (
                        <div
                          key={index}
                          className='flex items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-800'
                        >
                          <div className='flex items-center gap-3'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900'>
                              <Activity className='h-6 w-6 text-blue-600 dark:text-blue-400' />
                            </div>
                            <div>
                              <p className='font-medium'>{group.name}</p>
                              <p className='text-sm text-gray-600 dark:text-gray-400'>
                                {group.sessions} sessions
                              </p>
                            </div>
                          </div>
                          <div className='flex items-center gap-3 text-right'>
                            <div>
                              <p className='font-bold'>
                                {(group.volume / 1000).toFixed(1)}k lbs
                              </p>
                              <p className='text-sm text-gray-600 dark:text-gray-400'>
                                total volume
                              </p>
                            </div>
                            {getTrendIcon(group.trend)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value='performance' className='space-y-6'>
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                    <CardDescription>
                      Key performance indicators and trends
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                      <div className='rounded-lg bg-gradient-to-r from-green-50 to-blue-50 p-4 dark:from-green-900/20 dark:to-blue-900/20'>
                        <h4 className='mb-2 font-semibold text-green-700 dark:text-green-300'>
                          Strength Gains
                        </h4>
                        <p className='text-2xl font-bold text-green-800 dark:text-green-200'>
                          +12%
                        </p>
                        <p className='text-sm text-green-600 dark:text-green-400'>
                          Average across all lifts
                        </p>
                      </div>

                      <div className='rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 p-4 dark:from-purple-900/20 dark:to-pink-900/20'>
                        <h4 className='mb-2 font-semibold text-purple-700 dark:text-purple-300'>
                          Volume Progression
                        </h4>
                        <p className='text-2xl font-bold text-purple-800 dark:text-purple-200'>
                          +8%
                        </p>
                        <p className='text-sm text-purple-600 dark:text-purple-400'>
                          Monthly average increase
                        </p>
                      </div>

                      <div className='rounded-lg bg-gradient-to-r from-orange-50 to-red-50 p-4 dark:from-orange-900/20 dark:to-red-900/20'>
                        <h4 className='mb-2 font-semibold text-orange-700 dark:text-orange-300'>
                          Workout Efficiency
                        </h4>
                        <p className='text-2xl font-bold text-orange-800 dark:text-orange-200'>
                          89%
                        </p>
                        <p className='text-sm text-orange-600 dark:text-orange-400'>
                          Time under tension ratio
                        </p>
                      </div>

                      <div className='rounded-lg bg-gradient-to-r from-blue-50 to-teal-50 p-4 dark:from-blue-900/20 dark:to-teal-900/20'>
                        <h4 className='mb-2 font-semibold text-blue-700 dark:text-blue-300'>
                          Recovery Score
                        </h4>
                        <p className='text-2xl font-bold text-blue-800 dark:text-blue-200'>
                          7.8/10
                        </p>
                        <p className='text-sm text-blue-600 dark:text-blue-400'>
                          Based on workout frequency
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* AI Insights Sidebar */}
          <div className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Brain className='h-5 w-5 text-purple-500' />
                  AI Insights
                </CardTitle>
                <CardDescription>
                  Personalized recommendations based on your data
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                {insights.map((insight, index) => (
                  <div
                    key={index}
                    className={`rounded-lg border p-4 ${getInsightColor(insight.type)}`}
                  >
                    <div className='flex items-start gap-3'>
                      <insight.icon className='mt-0.5 h-5 w-5' />
                      <div className='flex-1'>
                        <div className='mb-1 flex items-center gap-2'>
                          <h4 className='text-sm font-medium'>
                            {insight.title}
                          </h4>
                          <Badge variant='secondary' className='text-xs'>
                            {insight.category}
                          </Badge>
                        </div>
                        <p className='text-sm opacity-90'>
                          {insight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Goals Progress</CardTitle>
                <CardDescription>Track your fitness objectives</CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div>
                  <div className='mb-2 flex items-center justify-between'>
                    <span className='text-sm font-medium'>Squat 1RM Goal</span>
                    <span className='text-sm text-gray-600 dark:text-gray-400'>
                      275/300 lbs
                    </span>
                  </div>
                  <div className='h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700'>
                    <div
                      className='h-2 rounded-full bg-blue-500'
                      style={{ width: '92%' }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className='mb-2 flex items-center justify-between'>
                    <span className='text-sm font-medium'>Workout Streak</span>
                    <span className='text-sm text-gray-600 dark:text-gray-400'>
                      5/30 days
                    </span>
                  </div>
                  <div className='h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700'>
                    <div
                      className='h-2 rounded-full bg-green-500'
                      style={{ width: '17%' }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className='mb-2 flex items-center justify-between'>
                    <span className='text-sm font-medium'>Monthly Volume</span>
                    <span className='text-sm text-gray-600 dark:text-gray-400'>
                      142k/180k lbs
                    </span>
                  </div>
                  <div className='h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700'>
                    <div
                      className='h-2 rounded-full bg-purple-500'
                      style={{ width: '79%' }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
