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
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Search,
  Filter,
  Calendar,
  Clock,
  Target,
  TrendingUp,
  Dumbbell,
  Play,
  MoreHorizontal,
  Copy,
  Edit,
  Trash2,
  Heart,
  Plus,
  SortAsc,
} from 'lucide-react';
import Link from 'next/link';

export default function WorkoutsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  // Mock data - replace with real data
  const workouts = [
    {
      id: 1,
      name: 'Push Day - Chest & Triceps',
      type: 'Push',
      date: '2025-05-29',
      duration: 45,
      exercises: 8,
      calories: 380,
      intensity: 'High',
      completed: true,
      favorite: true,
    },
    {
      id: 2,
      name: 'Pull Day - Back & Biceps',
      type: 'Pull',
      date: '2025-05-27',
      duration: 52,
      exercises: 9,
      calories: 410,
      intensity: 'High',
      completed: true,
      favorite: false,
    },
    {
      id: 3,
      name: 'Leg Day - Quads & Glutes',
      type: 'Legs',
      date: '2025-05-25',
      duration: 38,
      exercises: 7,
      calories: 445,
      intensity: 'Medium',
      completed: true,
      favorite: true,
    },
    {
      id: 4,
      name: 'Upper Body Strength',
      type: 'Upper',
      date: '2025-05-23',
      duration: 55,
      exercises: 10,
      calories: 425,
      intensity: 'High',
      completed: true,
      favorite: false,
    },
    {
      id: 5,
      name: 'HIIT Cardio Blast',
      type: 'Cardio',
      date: '2025-05-21',
      duration: 25,
      exercises: 6,
      calories: 320,
      intensity: 'Very High',
      completed: true,
      favorite: false,
    },
    {
      id: 6,
      name: 'Full Body Strength',
      type: 'Full Body',
      date: '2025-05-19',
      duration: 60,
      exercises: 12,
      calories: 485,
      intensity: 'Medium',
      completed: true,
      favorite: true,
    },
  ];

  const workoutTemplates = [
    {
      id: 'push-beginner',
      name: 'Push Day - Beginner',
      type: 'Push',
      difficulty: 'Beginner',
      duration: 35,
      exercises: 6,
      description: 'Perfect introduction to push movements',
    },
    {
      id: 'pull-intermediate',
      name: 'Pull Day - Intermediate',
      type: 'Pull',
      difficulty: 'Intermediate',
      duration: 45,
      exercises: 8,
      description: 'Build back and bicep strength',
    },
    {
      id: 'legs-advanced',
      name: 'Leg Day - Advanced',
      type: 'Legs',
      difficulty: 'Advanced',
      duration: 55,
      exercises: 10,
      description: 'Intense lower body workout',
    },
    {
      id: 'hiit-cardio',
      name: 'HIIT Fat Burner',
      type: 'Cardio',
      difficulty: 'Intermediate',
      duration: 20,
      exercises: 8,
      description: 'High intensity interval training',
    },
  ];

  const filteredWorkouts = workouts.filter((workout) => {
    const matchesSearch = workout.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterType === 'all' ||
      workout.type.toLowerCase() === filterType.toLowerCase();
    return matchesSearch && matchesFilter;
  });

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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-emerald-900/50 text-emerald-300 border-emerald-800';
      case 'Intermediate':
        return 'bg-blue-900/50 text-blue-300 border-blue-800';
      case 'Advanced':
        return 'bg-purple-900/50 text-purple-300 border-purple-800';
      default:
        return 'bg-gray-900/50 text-gray-300 border-gray-800';
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      <div className='container mx-auto px-4 py-8'>
        {/* Header */}
        <div className='mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center'>
          <div>
            <h1 className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent'>
              My Workouts
            </h1>
            <p className='mt-2 text-slate-400'>
              Browse, manage, and track your fitness journey
            </p>
          </div>
          <Button
            asChild
            className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
          >
            <Link href='/workouts/new'>
              <Plus className='mr-2 h-4 w-4' />
              New Workout
            </Link>
          </Button>
        </div>

        {/* Search and Filters */}
        <div className='mb-8 flex flex-col gap-4 sm:flex-row'>
          <div className='relative flex-1'>
            <Search className='absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-slate-400' />
            <Input
              placeholder='Search workouts...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='border-slate-700 bg-slate-800/50 pl-10 text-white placeholder:text-slate-400'
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className='w-full border-slate-700 bg-slate-800/50 text-white sm:w-48'>
              <Filter className='mr-2 h-4 w-4' />
              <SelectValue />
            </SelectTrigger>
            <SelectContent className='border-slate-700 bg-slate-800'>
              <SelectItem value='all'>All Types</SelectItem>
              <SelectItem value='push'>Push</SelectItem>
              <SelectItem value='pull'>Pull</SelectItem>
              <SelectItem value='legs'>Legs</SelectItem>
              <SelectItem value='cardio'>Cardio</SelectItem>
              <SelectItem value='full body'>Full Body</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className='w-full border-slate-700 bg-slate-800/50 text-white sm:w-48'>
              <SortAsc className='mr-2 h-4 w-4' />
              <SelectValue />
            </SelectTrigger>
            <SelectContent className='border-slate-700 bg-slate-800'>
              <SelectItem value='recent'>Most Recent</SelectItem>
              <SelectItem value='oldest'>Oldest First</SelectItem>
              <SelectItem value='duration'>Duration</SelectItem>
              <SelectItem value='intensity'>Intensity</SelectItem>
              <SelectItem value='name'>Name A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tabs */}
        <Tabs defaultValue='history' className='w-full'>
          <TabsList className='mb-8 grid w-full grid-cols-2 bg-slate-800/50'>
            <TabsTrigger
              value='history'
              className='text-white data-[state=active]:bg-blue-600'
            >
              Workout History
            </TabsTrigger>
            <TabsTrigger
              value='templates'
              className='text-white data-[state=active]:bg-blue-600'
            >
              Workout Templates
            </TabsTrigger>
          </TabsList>

          {/* Workout History Tab */}
          <TabsContent value='history' className='space-y-6'>
            {filteredWorkouts.length > 0 ? (
              <div className='grid gap-6'>
                {filteredWorkouts.map((workout) => (
                  <Card
                    key={workout.id}
                    className='border-slate-700 bg-slate-800/50 transition-all duration-300 hover:bg-slate-800/70'
                  >
                    <CardHeader className='pb-4'>
                      <div className='flex items-start justify-between'>
                        <div className='flex-1'>
                          <div className='mb-2 flex items-center gap-3'>
                            <CardTitle className='text-xl text-white'>
                              {workout.name}
                            </CardTitle>
                            {workout.favorite && (
                              <Heart className='h-4 w-4 fill-red-500 text-red-500' />
                            )}
                          </div>
                          <CardDescription className='text-slate-400'>
                            {new Date(workout.date).toLocaleDateString(
                              'en-US',
                              {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              }
                            )}
                          </CardDescription>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant='ghost'
                              size='sm'
                              className='text-slate-400 hover:text-white'
                            >
                              <MoreHorizontal className='h-4 w-4' />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className='border-slate-700 bg-slate-800'>
                            <DropdownMenuItem className='text-white hover:bg-slate-700'>
                              <Play className='mr-2 h-4 w-4' />
                              Start Again
                            </DropdownMenuItem>
                            <DropdownMenuItem className='text-white hover:bg-slate-700'>
                              <Copy className='mr-2 h-4 w-4' />
                              Duplicate
                            </DropdownMenuItem>
                            <DropdownMenuItem className='text-white hover:bg-slate-700'>
                              <Edit className='mr-2 h-4 w-4' />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className='text-red-400 hover:bg-red-900/20'>
                              <Trash2 className='mr-2 h-4 w-4' />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className='mb-4 flex flex-wrap gap-4'>
                        <div className='flex items-center gap-2 text-slate-300'>
                          <Clock className='h-4 w-4' />
                          <span className='text-sm'>
                            {workout.duration} min
                          </span>
                        </div>
                        <div className='flex items-center gap-2 text-slate-300'>
                          <Dumbbell className='h-4 w-4' />
                          <span className='text-sm'>
                            {workout.exercises} exercises
                          </span>
                        </div>
                        <div className='flex items-center gap-2 text-slate-300'>
                          <Target className='h-4 w-4' />
                          <span className='text-sm'>
                            {workout.calories} cal
                          </span>
                        </div>
                      </div>
                      <div className='mb-4 flex flex-wrap gap-2'>
                        <Badge
                          variant='outline'
                          className='border-blue-800 bg-blue-900/50 text-blue-300'
                        >
                          {workout.type}
                        </Badge>
                        <Badge
                          variant='outline'
                          className={getIntensityColor(workout.intensity)}
                        >
                          {workout.intensity}
                        </Badge>
                        {workout.completed && (
                          <Badge
                            variant='outline'
                            className='border-green-800 bg-green-900/50 text-green-300'
                          >
                            Completed
                          </Badge>
                        )}
                      </div>
                      <div className='flex gap-2'>
                        <Button
                          asChild
                          size='sm'
                          className='bg-blue-600 hover:bg-blue-700'
                        >
                          <Link href={`/workouts/${workout.id}`}>
                            View Details
                          </Link>
                        </Button>
                        <Button
                          variant='outline'
                          size='sm'
                          className='border-slate-600 text-slate-300 hover:bg-slate-700'
                        >
                          <Play className='mr-2 h-4 w-4' />
                          Start Again
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className='py-12 text-center'>
                <Dumbbell className='mx-auto mb-4 h-16 w-16 text-slate-600' />
                <h3 className='mb-2 text-xl font-semibold text-white'>
                  No workouts found
                </h3>
                <p className='mb-6 text-slate-400'>
                  Try adjusting your search or filters
                </p>
                <Button
                  asChild
                  className='bg-gradient-to-r from-blue-600 to-purple-600'
                >
                  <Link href='/workouts/new'>Create Your First Workout</Link>
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Workout Templates Tab */}
          <TabsContent value='templates' className='space-y-6'>
            <div className='grid gap-6 md:grid-cols-2'>
              {workoutTemplates.map((template) => (
                <Card
                  key={template.id}
                  className='border-slate-700 bg-slate-800/50 transition-all duration-300 hover:bg-slate-800/70'
                >
                  <CardHeader>
                    <CardTitle className='text-white'>
                      {template.name}
                    </CardTitle>
                    <CardDescription className='text-slate-400'>
                      {template.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='mb-4 flex flex-wrap gap-4'>
                      <div className='flex items-center gap-2 text-slate-300'>
                        <Clock className='h-4 w-4' />
                        <span className='text-sm'>{template.duration} min</span>
                      </div>
                      <div className='flex items-center gap-2 text-slate-300'>
                        <Dumbbell className='h-4 w-4' />
                        <span className='text-sm'>
                          {template.exercises} exercises
                        </span>
                      </div>
                    </div>
                    <div className='mb-4 flex flex-wrap gap-2'>
                      <Badge
                        variant='outline'
                        className='border-blue-800 bg-blue-900/50 text-blue-300'
                      >
                        {template.type}
                      </Badge>
                      <Badge
                        variant='outline'
                        className={getDifficultyColor(template.difficulty)}
                      >
                        {template.difficulty}
                      </Badge>
                    </div>
                    <div className='flex gap-2'>
                      <Button
                        size='sm'
                        className='bg-green-600 hover:bg-green-700'
                      >
                        <Play className='mr-2 h-4 w-4' />
                        Start Workout
                      </Button>
                      <Button
                        variant='outline'
                        size='sm'
                        className='border-slate-600 text-slate-300 hover:bg-slate-700'
                      >
                        Preview
                      </Button>
                    </div>
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
