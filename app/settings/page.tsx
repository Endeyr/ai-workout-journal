'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import {
  Activity,
  Bell,
  Calendar,
  Camera,
  Download,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Moon,
  Save,
  Settings,
  Shield,
  Smartphone,
  Sun,
  Target,
  Trash2,
  Upload,
  User,
} from 'lucide-react';
import { useState } from 'react';

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    workoutReminders: true,
    progressUpdates: true,
    achievements: true,
    weeklyReports: false,
    socialUpdates: true,
  });
  const [preferences, setPreferences] = useState({
    darkMode: true,
    units: 'imperial',
    startOfWeek: 'monday',
    defaultWorkoutLength: '60',
    restTimerSound: true,
  });
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex@example.com',
    bio: 'Fitness enthusiast focused on strength training and progressive overload.',
    age: '28',
    weight: '175',
    height: '5\'10"',
    fitnessGoal: 'strength',
    experienceLevel: 'intermediate',
  });

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications((prev) => ({ ...prev, [key]: value }));
  };

  const handlePreferenceChange = (key: string, value: string | boolean) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  const handleProfileChange = (key: string, value: string) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      <div className='container mx-auto max-w-4xl px-4 py-8'>
        <div className='mb-8 flex items-center gap-3'>
          <Settings className='h-8 w-8 text-blue-500' />
          <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
            Settings
          </h1>
        </div>

        <Tabs defaultValue='profile' className='space-y-6'>
          <TabsList className='grid w-full grid-cols-4'>
            <TabsTrigger value='profile' className='flex items-center gap-2'>
              <User className='h-4 w-4' />
              Profile
            </TabsTrigger>
            <TabsTrigger
              value='notifications'
              className='flex items-center gap-2'
            >
              <Bell className='h-4 w-4' />
              Notifications
            </TabsTrigger>
            <TabsTrigger
              value='preferences'
              className='flex items-center gap-2'
            >
              <Settings className='h-4 w-4' />
              Preferences
            </TabsTrigger>
            <TabsTrigger value='security' className='flex items-center gap-2'>
              <Shield className='h-4 w-4' />
              Security
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value='profile' className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                  Update your personal information and fitness details
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                {/* Profile Picture */}
                <div className='flex items-center gap-6'>
                  <Avatar className='h-24 w-24'>
                    <AvatarImage src='/placeholder-avatar.jpg' />
                    <AvatarFallback className='text-xl'>AJ</AvatarFallback>
                  </Avatar>
                  <div className='space-y-2'>
                    <Button
                      variant='outline'
                      className='flex items-center gap-2'
                    >
                      <Camera className='h-4 w-4' />
                      Change Photo
                    </Button>
                    <p className='text-sm text-gray-500'>JPG, PNG up to 10MB</p>
                  </div>
                </div>

                <Separator />

                {/* Basic Info */}
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                  <div>
                    <Label htmlFor='name'>Full Name</Label>
                    <Input
                      id='name'
                      value={profile.name}
                      onChange={(e) =>
                        handleProfileChange('name', e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                      id='email'
                      type='email'
                      value={profile.email}
                      onChange={(e) =>
                        handleProfileChange('email', e.target.value)
                      }
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor='bio'>Bio</Label>
                  <Textarea
                    id='bio'
                    placeholder='Tell us about your fitness journey...'
                    value={profile.bio}
                    onChange={(e) => handleProfileChange('bio', e.target.value)}
                    className='min-h-[100px]'
                  />
                </div>

                <Separator />

                {/* Fitness Profile */}
                <div className='space-y-4'>
                  <h3 className='flex items-center gap-2 text-lg font-semibold'>
                    <Activity className='h-5 w-5' />
                    Fitness Profile
                  </h3>

                  <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                    <div>
                      <Label htmlFor='age'>Age</Label>
                      <Input
                        id='age'
                        type='number'
                        value={profile.age}
                        onChange={(e) =>
                          handleProfileChange('age', e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor='weight'>Weight (lbs)</Label>
                      <Input
                        id='weight'
                        type='number'
                        value={profile.weight}
                        onChange={(e) =>
                          handleProfileChange('weight', e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor='height'>Height</Label>
                      <Input
                        id='height'
                        value={profile.height}
                        onChange={(e) =>
                          handleProfileChange('height', e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                    <div>
                      <Label htmlFor='fitnessGoal'>Primary Fitness Goal</Label>
                      <Select
                        value={profile.fitnessGoal}
                        onValueChange={(value) =>
                          handleProfileChange('fitnessGoal', value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='strength'>
                            Build Strength
                          </SelectItem>
                          <SelectItem value='muscle'>Build Muscle</SelectItem>
                          <SelectItem value='endurance'>
                            Improve Endurance
                          </SelectItem>
                          <SelectItem value='weight-loss'>
                            Weight Loss
                          </SelectItem>
                          <SelectItem value='general'>
                            General Fitness
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor='experienceLevel'>Experience Level</Label>
                      <Select
                        value={profile.experienceLevel}
                        onValueChange={(value) =>
                          handleProfileChange('experienceLevel', value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='beginner'>Beginner</SelectItem>
                          <SelectItem value='intermediate'>
                            Intermediate
                          </SelectItem>
                          <SelectItem value='advanced'>Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className='flex justify-end'>
                  <Button className='flex items-center gap-2'>
                    <Save className='h-4 w-4' />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value='notifications' className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Choose what notifications you'd like to receive
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='space-y-4'>
                  <div className='flex items-center justify-between'>
                    <div className='space-y-1'>
                      <Label>Workout Reminders</Label>
                      <p className='text-sm text-gray-500'>
                        Get reminded about scheduled workouts
                      </p>
                    </div>
                    <Switch
                      checked={notifications.workoutReminders}
                      onCheckedChange={(checked) =>
                        handleNotificationChange('workoutReminders', checked)
                      }
                    />
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='space-y-1'>
                      <Label>Progress Updates</Label>
                      <p className='text-sm text-gray-500'>
                        Weekly progress summaries
                      </p>
                    </div>
                    <Switch
                      checked={notifications.progressUpdates}
                      onCheckedChange={(checked) =>
                        handleNotificationChange('progressUpdates', checked)
                      }
                    />
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='space-y-1'>
                      <Label>Achievement Notifications</Label>
                      <p className='text-sm text-gray-500'>
                        Celebrate your milestones
                      </p>
                    </div>
                    <Switch
                      checked={notifications.achievements}
                      onCheckedChange={(checked) =>
                        handleNotificationChange('achievements', checked)
                      }
                    />
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='space-y-1'>
                      <Label>Weekly Reports</Label>
                      <p className='text-sm text-gray-500'>
                        Detailed weekly performance reports
                      </p>
                    </div>
                    <Switch
                      checked={notifications.weeklyReports}
                      onCheckedChange={(checked) =>
                        handleNotificationChange('weeklyReports', checked)
                      }
                    />
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='space-y-1'>
                      <Label>Social Updates</Label>
                      <p className='text-sm text-gray-500'>
                        Updates from friends and community
                      </p>
                    </div>
                    <Switch
                      checked={notifications.socialUpdates}
                      onCheckedChange={(checked) =>
                        handleNotificationChange('socialUpdates', checked)
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value='preferences' className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle>App Preferences</CardTitle>
                <CardDescription>Customize your app experience</CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='space-y-4'>
                  <div className='flex items-center justify-between'>
                    <div className='space-y-1'>
                      <Label className='flex items-center gap-2'>
                        {preferences.darkMode ? (
                          <Moon className='h-4 w-4' />
                        ) : (
                          <Sun className='h-4 w-4' />
                        )}
                        Dark Mode
                      </Label>
                      <p className='text-sm text-gray-500'>
                        Toggle dark/light theme
                      </p>
                    </div>
                    <Switch
                      checked={preferences.darkMode}
                      onCheckedChange={(checked) =>
                        handlePreferenceChange('darkMode', checked)
                      }
                    />
                  </div>

                  <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                    <div>
                      <Label>Units</Label>
                      <Select
                        value={preferences.units}
                        onValueChange={(value) =>
                          handlePreferenceChange('units', value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='imperial'>
                            Imperial (lbs, ft)
                          </SelectItem>
                          <SelectItem value='metric'>
                            Metric (kg, cm)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Start of Week</Label>
                      <Select
                        value={preferences.startOfWeek}
                        onValueChange={(value) =>
                          handlePreferenceChange('startOfWeek', value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='sunday'>Sunday</SelectItem>
                          <SelectItem value='monday'>Monday</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label>Default Workout Duration (minutes)</Label>
                    <Select
                      value={preferences.defaultWorkoutLength}
                      onValueChange={(value) =>
                        handlePreferenceChange('defaultWorkoutLength', value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='30'>30 minutes</SelectItem>
                        <SelectItem value='45'>45 minutes</SelectItem>
                        <SelectItem value='60'>60 minutes</SelectItem>
                        <SelectItem value='90'>90 minutes</SelectItem>
                        <SelectItem value='120'>120 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='space-y-1'>
                      <Label>Rest Timer Sound</Label>
                      <p className='text-sm text-gray-500'>
                        Play sound when rest timer ends
                      </p>
                    </div>
                    <Switch
                      checked={preferences.restTimerSound}
                      onCheckedChange={(checked) =>
                        handlePreferenceChange('restTimerSound', checked)
                      }
                    />
                  </div>
                </div>

                <div className='flex justify-end'>
                  <Button className='flex items-center gap-2'>
                    <Save className='h-4 w-4' />
                    Save Preferences
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value='security' className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Manage your account security and privacy
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='space-y-4'>
                  <div>
                    <Label htmlFor='current-password'>Current Password</Label>
                    <div className='relative'>
                      <Input
                        id='current-password'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Enter current password'
                      />
                      <Button
                        type='button'
                        variant='ghost'
                        size='sm'
                        className='absolute top-0 right-0 h-full px-3 hover:bg-transparent'
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className='h-4 w-4' />
                        ) : (
                          <Eye className='h-4 w-4' />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor='new-password'>New Password</Label>
                    <Input
                      id='new-password'
                      type='password'
                      placeholder='Enter new password'
                    />
                  </div>

                  <div>
                    <Label htmlFor='confirm-password'>
                      Confirm New Password
                    </Label>
                    <Input
                      id='confirm-password'
                      type='password'
                      placeholder='Confirm new password'
                    />
                  </div>

                  <Button className='flex items-center gap-2'>
                    <Lock className='h-4 w-4' />
                    Update Password
                  </Button>
                </div>

                <Separator />

                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold'>Data Management</h3>

                  <div className='flex flex-col gap-4 sm:flex-row'>
                    <Button
                      variant='outline'
                      className='flex items-center gap-2'
                    >
                      <Download className='h-4 w-4' />
                      Export Data
                    </Button>
                    <Button
                      variant='outline'
                      className='flex items-center gap-2'
                    >
                      <Upload className='h-4 w-4' />
                      Import Data
                    </Button>
                  </div>

                  <div className='rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20'>
                    <h4 className='mb-2 font-semibold text-red-800 dark:text-red-200'>
                      Danger Zone
                    </h4>
                    <p className='mb-3 text-sm text-red-700 dark:text-red-300'>
                      Permanently delete your account and all associated data.
                      This action cannot be undone.
                    </p>
                    <Button
                      variant='destructive'
                      className='flex items-center gap-2'
                    >
                      <Trash2 className='h-4 w-4' />
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
