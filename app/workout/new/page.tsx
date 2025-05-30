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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import {
  ArrowLeft,
  Clock,
  Dumbbell,
  Minus,
  Play,
  Plus,
  Save,
  Search,
  Sparkles,
  Target,
  Trash2,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  weight: string;
  notes: string;
  restTime: number;
}

export default function AddWorkoutPage() {
  const [workoutName, setWorkoutName] = useState('');
  const [workoutType, setWorkoutType] = useState('');
  const [workoutNotes, setWorkoutNotes] = useState('');
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState('');

  const addExercise = () => {
    const newExercise: Exercise = {
      id: Date.now().toString(),
      name: '',
      sets: 3,
      reps: '8-12',
      weight: '',
      notes: '',
      restTime: 60,
    };
    setExercises([...exercises, newExercise]);
  };

  const updateExercise = (id: string, field: keyof Exercise, value: any) => {
    setExercises(
      exercises.map((ex) => (ex.id === id ? { ...ex, [field]: value } : ex))
    );
  };

  const removeExercise = (id: string) => {
    setExercises(exercises.filter((ex) => ex.id !== id));
  };

  const workoutTemplates = [
    {
      id: 'push',
      name: 'Push Day (Chest, Shoulders, Triceps)',
      exercises: [
        {
          name: 'Bench Press',
          sets: 4,
          reps: '6-8',
          weight: '',
          restTime: 120,
        },
        {
          name: 'Overhead Press',
          sets: 3,
          reps: '8-10',
          weight: '',
          restTime: 90,
        },
        {
          name: 'Incline Dumbbell Press',
          sets: 3,
          reps: '10-12',
          weight: '',
          restTime: 90,
        },
        {
          name: 'Lateral Raises',
          sets: 3,
          reps: '12-15',
          weight: '',
          restTime: 60,
        },
        {
          name: 'Tricep Dips',
          sets: 3,
          reps: '10-12',
          weight: '',
          restTime: 60,
        },
        {
          name: 'Push-ups',
          sets: 2,
          reps: 'To failure',
          weight: '',
          restTime: 60,
        },
      ],
    },
    {
      id: 'pull',
      name: 'Pull Day (Back, Biceps)',
      exercises: [
        { name: 'Pull-ups', sets: 4, reps: '6-10', weight: '', restTime: 120 },
        {
          name: 'Barbell Rows',
          sets: 4,
          reps: '8-10',
          weight: '',
          restTime: 90,
        },
        {
          name: 'Lat Pulldowns',
          sets: 3,
          reps: '10-12',
          weight: '',
          restTime: 90,
        },
        {
          name: 'Face Pulls',
          sets: 3,
          reps: '12-15',
          weight: '',
          restTime: 60,
        },
        {
          name: 'Bicep Curls',
          sets: 3,
          reps: '10-12',
          weight: '',
          restTime: 60,
        },
        {
          name: 'Hammer Curls',
          sets: 2,
          reps: '12-15',
          weight: '',
          restTime: 60,
        },
      ],
    },
    {
      id: 'legs',
      name: 'Leg Day (Quads, Glutes, Hamstrings)',
      exercises: [
        { name: 'Squats', sets: 4, reps: '6-8', weight: '', restTime: 180 },
        {
          name: 'Romanian Deadlifts',
          sets: 3,
          reps: '8-10',
          weight: '',
          restTime: 120,
        },
        {
          name: 'Bulgarian Split Squats',
          sets: 3,
          reps: '10-12',
          weight: '',
          restTime: 90,
        },
        { name: 'Leg Press', sets: 3, reps: '12-15', weight: '', restTime: 90 },
        { name: 'Leg Curls', sets: 3, reps: '12-15', weight: '', restTime: 60 },
        {
          name: 'Calf Raises',
          sets: 4,
          reps: '15-20',
          weight: '',
          restTime: 45,
        },
      ],
    },
  ];

  const loadTemplate = (templateId: string) => {
    const template = workoutTemplates.find((t) => t.id === templateId);
    if (template) {
      setWorkoutName(template.name);
      setWorkoutType(templateId);
      setExercises(
        template.exercises.map((ex, index) => ({
          id: (Date.now() + index).toString(),
          name: ex.name,
          sets: ex.sets,
          reps: ex.reps,
          weight: ex.weight,
          notes: '',
          restTime: ex.restTime,
        }))
      );
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950'>
      {/* Navigation */}
      <nav className='container mx-auto flex items-center justify-between border-b border-slate-800 px-6 py-4'>
        <div className='flex items-center space-x-4'>
          <Link href='/dashboard'>
            <Button
              variant='ghost'
              size='icon'
              className='text-slate-400 hover:text-white'
            >
              <ArrowLeft className='h-5 w-5' />
            </Button>
          </Link>
          <div className='flex items-center space-x-2'>
            <Dumbbell className='h-8 w-8 text-purple-400' />
            <span className='text-2xl font-bold text-white'>New Workout</span>
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          <Button
            variant='outline'
            className='border-slate-700 text-slate-300 hover:bg-slate-800'
          >
            <Save className='mr-2 h-4 w-4' />
            Save Draft
          </Button>
          <Button className='bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'>
            <Play className='mr-2 h-4 w-4' />
            Start Workout
          </Button>
        </div>
      </nav>

      <div className='container mx-auto px-6 py-8'>
        <Tabs defaultValue='create' className='space-y-6'>
          <TabsList className='grid w-full grid-cols-3 bg-slate-900/50'>
            <TabsTrigger
              value='create'
              className='text-slate-300 data-[state=active]:text-white'
            >
              Create Custom
            </TabsTrigger>
            <TabsTrigger
              value='templates'
              className='text-slate-300 data-[state=active]:text-white'
            >
              Templates
            </TabsTrigger>
            <TabsTrigger
              value='ai'
              className='text-slate-300 data-[state=active]:text-white'
            >
              AI Generated
            </TabsTrigger>
          </TabsList>

          {/* Create Custom Workout */}
          <TabsContent value='create' className='space-y-6'>
            {/* Workout Details */}
            <Card className='border-slate-800 bg-slate-900/50 backdrop-blur-sm'>
              <CardHeader>
                <CardTitle className='text-white'>Workout Details</CardTitle>
                <CardDescription>
                  Give your workout a name and description
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div>
                  <Label htmlFor='workout-name' className='text-white'>
                    Workout Name
                  </Label>
                  <Input
                    id='workout-name'
                    value={workoutName}
                    onChange={(e) => setWorkoutName(e.target.value)}
                    placeholder='e.g., Push Day - Chest & Triceps'
                    className='border-slate-700 bg-slate-800 text-white'
                  />
                </div>
                <div>
                  <Label htmlFor='workout-type' className='text-white'>
                    Workout Type
                  </Label>
                  <Select value={workoutType} onValueChange={setWorkoutType}>
                    <SelectTrigger className='border-slate-700 bg-slate-800 text-white'>
                      <SelectValue placeholder='Select workout type' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='push'>
                        Push (Chest, Shoulders, Triceps)
                      </SelectItem>
                      <SelectItem value='pull'>Pull (Back, Biceps)</SelectItem>
                      <SelectItem value='legs'>
                        Legs (Quads, Glutes, Hamstrings)
                      </SelectItem>
                      <SelectItem value='upper'>Upper Body</SelectItem>
                      <SelectItem value='lower'>Lower Body</SelectItem>
                      <SelectItem value='full'>Full Body</SelectItem>
                      <SelectItem value='cardio'>Cardio</SelectItem>
                      <SelectItem value='custom'>Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor='workout-notes' className='text-white'>
                    Notes (Optional)
                  </Label>
                  <Textarea
                    id='workout-notes'
                    value={workoutNotes}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setWorkoutNotes(e.target.value)
                    }
                    placeholder='Add any notes about this workout...'
                    className='border-slate-700 bg-slate-800 text-white'
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Exercises */}
            <Card className='border-slate-800 bg-slate-900/50 backdrop-blur-sm'>
              <CardHeader>
                <div className='flex items-center justify-between'>
                  <div>
                    <CardTitle className='text-white'>Exercises</CardTitle>
                    <CardDescription>
                      Add exercises to your workout
                    </CardDescription>
                  </div>
                  <Button
                    onClick={addExercise}
                    className='bg-purple-600 text-white hover:bg-purple-700'
                  >
                    <Plus className='mr-2 h-4 w-4' />
                    Add Exercise
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {exercises.length === 0 ? (
                  <div className='py-12 text-center'>
                    <Dumbbell className='mx-auto mb-4 h-12 w-12 text-slate-600' />
                    <p className='text-slate-400'>No exercises added yet</p>
                    <p className='text-sm text-slate-500'>
                      Click "Add Exercise" to get started
                    </p>
                  </div>
                ) : (
                  <div className='space-y-4'>
                    {exercises.map((exercise, index) => (
                      <Card
                        key={exercise.id}
                        className='border-slate-700 bg-slate-800/50'
                      >
                        <CardHeader className='pb-3'>
                          <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-2'>
                              <Badge
                                variant='outline'
                                className='border-purple-600 text-purple-300'
                              >
                                {index + 1}
                              </Badge>
                              <span className='font-medium text-white'>
                                Exercise {index + 1}
                              </span>
                            </div>
                            <Button
                              variant='ghost'
                              size='icon'
                              onClick={() => removeExercise(exercise.id)}
                              className='text-red-400 hover:bg-red-900/20 hover:text-red-300'
                            >
                              <Trash2 className='h-4 w-4' />
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent className='space-y-4'>
                          <div>
                            <Label className='text-white'>Exercise Name</Label>
                            <Input
                              value={exercise.name}
                              onChange={(e) =>
                                updateExercise(
                                  exercise.id,
                                  'name',
                                  e.target.value
                                )
                              }
                              placeholder='e.g., Bench Press'
                              className='border-slate-600 bg-slate-700 text-white'
                            />
                          </div>
                          <div className='grid grid-cols-4 gap-4'>
                            <div>
                              <Label className='text-white'>Sets</Label>
                              <Input
                                type='number'
                                value={exercise.sets}
                                onChange={(e) =>
                                  updateExercise(
                                    exercise.id,
                                    'sets',
                                    parseInt(e.target.value) || 0
                                  )
                                }
                                className='border-slate-600 bg-slate-700 text-white'
                              />
                            </div>
                            <div>
                              <Label className='text-white'>
                                Reps/Duration
                              </Label>
                              <Input
                                value={exercise.reps}
                                onChange={(e) =>
                                  updateExercise(
                                    exercise.id,
                                    'reps',
                                    e.target.value
                                  )
                                }
                                placeholder='8-12'
                                className='border-slate-600 bg-slate-700 text-white'
                              />
                            </div>
                            <div>
                              <Label className='text-white'>Weight (lbs)</Label>
                              <Input
                                value={exercise.weight}
                                onChange={(e) =>
                                  updateExercise(
                                    exercise.id,
                                    'weight',
                                    e.target.value
                                  )
                                }
                                placeholder='135'
                                className='border-slate-600 bg-slate-700 text-white'
                              />
                            </div>
                            <div>
                              <Label className='text-white'>Rest (sec)</Label>
                              <Input
                                type='number'
                                value={exercise.restTime}
                                onChange={(e) =>
                                  updateExercise(
                                    exercise.id,
                                    'restTime',
                                    parseInt(e.target.value) || 0
                                  )
                                }
                                className='border-slate-600 bg-slate-700 text-white'
                              />
                            </div>
                          </div>
                          <div>
                            <Label className='text-white'>
                              Notes (Optional)
                            </Label>
                            <Input
                              value={exercise.notes}
                              onChange={(e) =>
                                updateExercise(
                                  exercise.id,
                                  'notes',
                                  e.target.value
                                )
                              }
                              placeholder='Form cues, modifications, etc.'
                              className='border-slate-600 bg-slate-700 text-white'
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Templates */}
          <TabsContent value='templates' className='space-y-6'>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {workoutTemplates.map((template) => (
                <Card
                  key={template.id}
                  className='cursor-pointer border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-colors hover:bg-slate-900/70'
                >
                  <CardHeader>
                    <CardTitle className='text-white'>
                      {template.name}
                    </CardTitle>
                    <CardDescription>
                      {template.exercises.length} exercises • ~
                      {Math.round(
                        template.exercises.reduce(
                          (acc, ex) => acc + ex.restTime,
                          0
                        ) / 60
                      )}{' '}
                      min
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='mb-4 space-y-2'>
                      {template.exercises.slice(0, 3).map((exercise, index) => (
                        <div key={index} className='text-sm text-slate-400'>
                          • {exercise.name} - {exercise.sets}x{exercise.reps}
                        </div>
                      ))}
                      {template.exercises.length > 3 && (
                        <div className='text-sm text-slate-500'>
                          +{template.exercises.length - 3} more exercises
                        </div>
                      )}
                    </div>
                    <Button
                      onClick={() => loadTemplate(template.id)}
                      className='w-full bg-purple-600 text-white hover:bg-purple-700'
                    >
                      Use Template
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* AI Generated */}
          <TabsContent value='ai' className='space-y-6'>
            <Card className='border-slate-800 bg-slate-900/50 backdrop-blur-sm'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-white'>
                  <Sparkles className='h-5 w-5 text-purple-400' />
                  AI Workout Generator
                </CardTitle>
                <CardDescription>
                  Let AI create a personalized workout based on your preferences
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='grid gap-4 md:grid-cols-2'>
                  <div>
                    <Label className='text-white'>Target Muscle Groups</Label>
                    <Select>
                      <SelectTrigger className='border-slate-700 bg-slate-800 text-white'>
                        <SelectValue placeholder='Select muscle groups' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='chest'>Chest</SelectItem>
                        <SelectItem value='back'>Back</SelectItem>
                        <SelectItem value='shoulders'>Shoulders</SelectItem>
                        <SelectItem value='arms'>Arms</SelectItem>
                        <SelectItem value='legs'>Legs</SelectItem>
                        <SelectItem value='core'>Core</SelectItem>
                        <SelectItem value='full-body'>Full Body</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className='text-white'>Workout Duration</Label>
                    <Select>
                      <SelectTrigger className='border-slate-700 bg-slate-800 text-white'>
                        <SelectValue placeholder='Select duration' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='15-30'>15-30 minutes</SelectItem>
                        <SelectItem value='30-45'>30-45 minutes</SelectItem>
                        <SelectItem value='45-60'>45-60 minutes</SelectItem>
                        <SelectItem value='60+'>60+ minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label className='text-white'>Available Equipment</Label>
                  <Select>
                    <SelectTrigger className='border-slate-700 bg-slate-800 text-white'>
                      <SelectValue placeholder='Select equipment' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='bodyweight'>
                        Bodyweight Only
                      </SelectItem>
                      <SelectItem value='dumbbells'>Dumbbells</SelectItem>
                      <SelectItem value='home-gym'>Home Gym</SelectItem>
                      <SelectItem value='full-gym'>Full Gym Access</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className='w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'>
                  <Sparkles className='mr-2 h-4 w-4' />
                  Generate AI Workout
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
