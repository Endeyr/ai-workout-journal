'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Dumbbell,
  Target,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
    fitnessLevel: '',
    goals: [] as string[],
    workoutDays: '',
    workoutDuration: '',
    equipment: [] as string[],
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const handleEquipmentToggle = (equipment: string) => {
    setFormData((prev) => ({
      ...prev,
      equipment: prev.equipment.includes(equipment)
        ? prev.equipment.filter((e) => e !== equipment)
        : [...prev.equipment, equipment],
    }));
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 p-6'>
      <div className='w-full max-w-2xl'>
        {/* Header */}
        <div className='mb-8 text-center'>
          <h1 className='mb-2 text-4xl font-bold text-white'>
            Welcome to FitAI
          </h1>
          <p className='text-slate-400'>
            Let's personalize your fitness experience
          </p>
        </div>

        {/* Progress Bar */}
        <div className='mb-8'>
          <div className='mb-2 flex justify-between text-sm text-slate-400'>
            <span>
              Step {currentStep} of {totalSteps}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className='h-2' />
        </div>

        {/* Step Content */}
        <Card className='border-slate-800 bg-slate-900/50 backdrop-blur-sm'>
          <CardHeader>
            {currentStep === 1 && (
              <>
                <div className='mb-2 flex items-center gap-2'>
                  <User className='h-6 w-6 text-purple-400' />
                  <CardTitle className='text-white'>
                    Personal Information
                  </CardTitle>
                </div>
                <CardDescription>Tell us about yourself</CardDescription>
              </>
            )}
            {currentStep === 2 && (
              <>
                <div className='mb-2 flex items-center gap-2'>
                  <Target className='h-6 w-6 text-purple-400' />
                  <CardTitle className='text-white'>Fitness Goals</CardTitle>
                </div>
                <CardDescription>What do you want to achieve?</CardDescription>
              </>
            )}
            {currentStep === 3 && (
              <>
                <div className='mb-2 flex items-center gap-2'>
                  <Calendar className='h-6 w-6 text-purple-400' />
                  <CardTitle className='text-white'>
                    Workout Preferences
                  </CardTitle>
                </div>
                <CardDescription>
                  How often do you want to work out?
                </CardDescription>
              </>
            )}
            {currentStep === 4 && (
              <>
                <div className='mb-2 flex items-center gap-2'>
                  <Dumbbell className='h-6 w-6 text-purple-400' />
                  <CardTitle className='text-white'>
                    Equipment & Experience
                  </CardTitle>
                </div>
                <CardDescription>
                  What equipment do you have access to?
                </CardDescription>
              </>
            )}
          </CardHeader>

          <CardContent className='space-y-6'>
            {/* Step 1: Personal Info */}
            {currentStep === 1 && (
              <div className='space-y-4'>
                <div>
                  <Label htmlFor='name' className='text-white'>
                    Full Name
                  </Label>
                  <Input
                    id='name'
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className='border-slate-700 bg-slate-800 text-white'
                    placeholder='Enter your name'
                  />
                </div>
                <div className='grid grid-cols-3 gap-4'>
                  <div>
                    <Label htmlFor='age' className='text-white'>
                      Age
                    </Label>
                    <Input
                      id='age'
                      type='number'
                      value={formData.age}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          age: e.target.value,
                        }))
                      }
                      className='border-slate-700 bg-slate-800 text-white'
                      placeholder='25'
                    />
                  </div>
                  <div>
                    <Label htmlFor='weight' className='text-white'>
                      Weight (lbs)
                    </Label>
                    <Input
                      id='weight'
                      type='number'
                      value={formData.weight}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          weight: e.target.value,
                        }))
                      }
                      className='border-slate-700 bg-slate-800 text-white'
                      placeholder='150'
                    />
                  </div>
                  <div>
                    <Label htmlFor='height' className='text-white'>
                      Height (in)
                    </Label>
                    <Input
                      id='height'
                      type='number'
                      value={formData.height}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          height: e.target.value,
                        }))
                      }
                      className='border-slate-700 bg-slate-800 text-white'
                      placeholder='70'
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Goals */}
            {currentStep === 2 && (
              <div className='space-y-4'>
                <div>
                  <Label className='mb-4 block text-base text-white'>
                    What are your fitness goals? (Select all that apply)
                  </Label>
                  <div className='grid grid-cols-2 gap-3'>
                    {[
                      'Lose Weight',
                      'Build Muscle',
                      'Improve Strength',
                      'Increase Endurance',
                      'Stay Healthy',
                      'Sport Performance',
                    ].map((goal) => (
                      <div key={goal} className='flex items-center space-x-2'>
                        <Checkbox
                          id={goal}
                          checked={formData.goals.includes(goal)}
                          onCheckedChange={() => handleGoalToggle(goal)}
                        />
                        <Label htmlFor={goal} className='text-slate-300'>
                          {goal}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Workout Preferences */}
            {currentStep === 3 && (
              <div className='space-y-6'>
                <div>
                  <Label className='mb-4 block text-base text-white'>
                    How many days per week do you want to work out?
                  </Label>
                  <RadioGroup
                    value={formData.workoutDays}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, workoutDays: value }))
                    }
                  >
                    {['2-3 days', '4-5 days', '6-7 days'].map((option) => (
                      <div key={option} className='flex items-center space-x-2'>
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className='text-slate-300'>
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label className='mb-4 block text-base text-white'>
                    How long do you want each workout to be?
                  </Label>
                  <RadioGroup
                    value={formData.workoutDuration}
                    onValueChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        workoutDuration: value,
                      }))
                    }
                  >
                    {[
                      '15-30 minutes',
                      '30-45 minutes',
                      '45-60 minutes',
                      '60+ minutes',
                    ].map((option) => (
                      <div key={option} className='flex items-center space-x-2'>
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className='text-slate-300'>
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Step 4: Equipment & Experience */}
            {currentStep === 4 && (
              <div className='space-y-6'>
                <div>
                  <Label className='mb-4 block text-base text-white'>
                    What's your current fitness level?
                  </Label>
                  <RadioGroup
                    value={formData.fitnessLevel}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, fitnessLevel: value }))
                    }
                  >
                    {[
                      {
                        value: 'beginner',
                        label: 'Beginner - New to exercise',
                      },
                      {
                        value: 'intermediate',
                        label: 'Intermediate - Some experience',
                      },
                      {
                        value: 'advanced',
                        label: 'Advanced - Very experienced',
                      },
                    ].map((option) => (
                      <div
                        key={option.value}
                        className='flex items-center space-x-2'
                      >
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                        />
                        <Label
                          htmlFor={option.value}
                          className='text-slate-300'
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label className='mb-4 block text-base text-white'>
                    What equipment do you have access to?
                  </Label>
                  <div className='grid grid-cols-2 gap-3'>
                    {[
                      'None (Bodyweight)',
                      'Dumbbells',
                      'Resistance Bands',
                      'Pull-up Bar',
                      'Full Gym',
                      'Home Gym Setup',
                    ].map((equipment) => (
                      <div
                        key={equipment}
                        className='flex items-center space-x-2'
                      >
                        <Checkbox
                          id={equipment}
                          checked={formData.equipment.includes(equipment)}
                          onCheckedChange={() =>
                            handleEquipmentToggle(equipment)
                          }
                        />
                        <Label htmlFor={equipment} className='text-slate-300'>
                          {equipment}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className='mt-8 flex justify-between'>
          <Button
            variant='outline'
            onClick={handlePrev}
            disabled={currentStep === 1}
            className='border-slate-700 text-slate-300 hover:bg-slate-800'
          >
            <ArrowLeft className='mr-2 h-4 w-4' />
            Previous
          </Button>

          {currentStep < totalSteps ? (
            <Button
              onClick={handleNext}
              className='bg-purple-600 text-white hover:bg-purple-700'
            >
              Next
              <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
          ) : (
            <Link href='/dashboard'>
              <Button className='bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'>
                Complete Setup
                <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default OnboardingPage;
