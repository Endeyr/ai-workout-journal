'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import {
  Calendar,
  Clock,
  Dumbbell,
  Filter,
  Heart,
  MapPin,
  MessageCircle,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Search,
  Share2,
  Target,
  TrendingUp,
  Trophy,
  UserPlus,
  Users,
} from 'lucide-react';
import { useState } from 'react';

export default function SocialPage() {
  const [activeTab, setActiveTab] = useState('feed');
  const [newPost, setNewPost] = useState('');

  const feedPosts = [
    {
      id: 1,
      user: {
        name: 'Sarah Chen',
        avatar: '/avatar-sarah.jpg',
        username: '@sarahlifts',
        level: 'Advanced',
      },
      content:
        'Just hit a new squat PR! 225lbs x 5 reps 💪 The progressive overload is really paying off. Thanks for all the encouragement!',
      workout: {
        name: 'Lower Body Strength',
        duration: 75,
        exercises: 6,
      },
      timestamp: '2 hours ago',
      likes: 24,
      comments: 8,
      achievements: ['Personal Record', 'Volume Milestone'],
    },
    {
      id: 2,
      user: {
        name: 'Mike Rodriguez',
        avatar: '/avatar-mike.jpg',
        username: '@mikesgains',
        level: 'Intermediate',
      },
      content:
        'Week 8 of my cut is complete! Down 12lbs and still maintaining strength. Consistency is everything 🔥',
      progress: {
        startWeight: 185,
        currentWeight: 173,
        goalWeight: 170,
      },
      timestamp: '5 hours ago',
      likes: 31,
      comments: 12,
      achievements: ['Weight Goal Progress'],
    },
    {
      id: 3,
      user: {
        name: 'Alex Thompson',
        avatar: '/avatar-alex.jpg',
        username: '@alexfitness',
        level: 'Beginner',
      },
      content:
        'Completed my first full week of workouts! 4 sessions done, feeling stronger already. This community is amazing! 🙌',
      streak: 7,
      timestamp: '1 day ago',
      likes: 18,
      comments: 15,
      achievements: ['First Week Complete', 'Consistency Streak'],
    },
  ];

  const challenges = [
    {
      id: 1,
      title: '30-Day Consistency Challenge',
      description: 'Complete 20 workouts in 30 days',
      participants: 247,
      daysLeft: 18,
      progress: 67,
      type: 'consistency',
      reward: '500 points',
    },
    {
      id: 2,
      title: 'Squat Strength Challenge',
      description: 'Increase your squat 1RM by 10%',
      participants: 89,
      daysLeft: 45,
      progress: 23,
      type: 'strength',
      reward: 'Badge + 1000 points',
    },
    {
      id: 3,
      title: 'Community Volume Challenge',
      description: 'Lift 1 million pounds as a community',
      participants: 156,
      daysLeft: 12,
      progress: 78,
      type: 'community',
      reward: 'Exclusive workout program',
    },
  ];

  const leaderboard = [
    {
      rank: 1,
      name: 'Emma Wilson',
      points: 2847,
      streak: 28,
      avatar: '/avatar-emma.jpg',
    },
    {
      rank: 2,
      name: 'David Kim',
      points: 2651,
      streak: 21,
      avatar: '/avatar-david.jpg',
    },
    {
      rank: 3,
      name: 'Maria Santos',
      points: 2543,
      streak: 35,
      avatar: '/avatar-maria.jpg',
    },
    {
      rank: 4,
      name: 'You',
      points: 2401,
      streak: 5,
      avatar: '/avatar-you.jpg',
      isUser: true,
    },
    {
      rank: 5,
      name: 'James Brown',
      points: 2298,
      streak: 14,
      avatar: '/avatar-james.jpg',
    },
  ];

  const friends = [
    {
      name: 'Lisa Park',
      avatar: '/avatar-lisa.jpg',
      status: 'online',
      lastWorkout: '2 hours ago',
      streak: 12,
      mutualFriends: 3,
    },
    {
      name: 'Ryan Mitchell',
      avatar: '/avatar-ryan.jpg',
      status: 'offline',
      lastWorkout: '1 day ago',
      streak: 8,
      mutualFriends: 7,
    },
    {
      name: 'Jessica Lee',
      avatar: '/avatar-jessica.jpg',
      status: 'working-out',
      lastWorkout: 'now',
      streak: 23,
      mutualFriends: 2,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'working-out':
        return 'bg-blue-500';
      default:
        return 'bg-gray-400';
    }
  };

  const getChallengeIcon = (type: string) => {
    switch (type) {
      case 'consistency':
        return Calendar;
      case 'strength':
        return Dumbbell;
      case 'community':
        return Users;
      default:
        return Target;
    }
  };

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      <div className='container mx-auto max-w-7xl px-4 py-8'>
        {/* Header */}
        <div className='mb-8 flex items-center gap-3'>
          <Users className='h-8 w-8 text-blue-500' />
          <div>
            <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
              Community
            </h1>
            <p className='text-gray-600 dark:text-gray-400'>
              Connect, compete, and grow together
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-8 lg:grid-cols-4'>
          {/* Main Content */}
          <div className='lg:col-span-3'>
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className='space-y-6'
            >
              <TabsList className='grid w-full grid-cols-3'>
                <TabsTrigger value='feed'>Feed</TabsTrigger>
                <TabsTrigger value='challenges'>Challenges</TabsTrigger>
                <TabsTrigger value='leaderboard'>Leaderboard</TabsTrigger>
              </TabsList>

              {/* Feed Tab */}
              <TabsContent value='feed' className='space-y-6'>
                {/* Create Post */}
                <Card>
                  <CardContent className='p-6'>
                    <div className='flex gap-4'>
                      <Avatar>
                        <AvatarImage src='/your-avatar.jpg' />
                        <AvatarFallback>You</AvatarFallback>
                      </Avatar>
                      <div className='flex-1 space-y-3'>
                        <Textarea
                          placeholder='Share your workout achievements, progress, or motivation...'
                          value={newPost}
                          onChange={(e) => setNewPost(e.target.value)}
                          className='min-h-[100px] resize-none'
                        />
                        <div className='flex items-center justify-between'>
                          <div className='flex gap-2'>
                            <Button
                              variant='outline'
                              size='sm'
                              className='flex items-center gap-2'
                            >
                              <Dumbbell className='h-4 w-4' />
                              Add Workout
                            </Button>
                            <Button
                              variant='outline'
                              size='sm'
                              className='flex items-center gap-2'
                            >
                              <Trophy className='h-4 w-4' />
                              Add Achievement
                            </Button>
                          </div>
                          <Button className='flex items-center gap-2'>
                            <Share2 className='h-4 w-4' />
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Feed Posts */}
                <div className='space-y-6'>
                  {feedPosts.map((post) => (
                    <Card key={post.id}>
                      <CardContent className='p-6'>
                        <div className='flex gap-4'>
                          <Avatar>
                            <AvatarImage src={post.user.avatar} />
                            <AvatarFallback>
                              {post.user.name
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                            </AvatarFallback>
                          </Avatar>

                          <div className='flex-1'>
                            <div className='mb-2 flex items-center gap-2'>
                              <h3 className='font-semibold'>
                                {post.user.name}
                              </h3>
                              <span className='text-sm text-gray-500'>
                                {post.user.username}
                              </span>
                              <Badge variant='secondary' className='text-xs'>
                                {post.user.level}
                              </Badge>
                              <span className='text-sm text-gray-500'>•</span>
                              <span className='text-sm text-gray-500'>
                                {post.timestamp}
                              </span>
                            </div>

                            <p className='mb-4 text-gray-800 dark:text-gray-200'>
                              {post.content}
                            </p>

                            {/* Workout Info */}
                            {post.workout && (
                              <div className='mb-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20'>
                                <div className='flex items-center gap-4'>
                                  <Dumbbell className='h-5 w-5 text-blue-500' />
                                  <div>
                                    <h4 className='font-medium text-blue-700 dark:text-blue-300'>
                                      {post.workout.name}
                                    </h4>
                                    <div className='flex items-center gap-4 text-sm text-blue-600 dark:text-blue-400'>
                                      <span className='flex items-center gap-1'>
                                        <Clock className='h-3 w-3' />
                                        {post.workout.duration} min
                                      </span>
                                      <span>
                                        {post.workout.exercises} exercises
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Progress Info */}
                            {post.progress && (
                              <div className='mb-4 rounded-lg bg-green-50 p-4 dark:bg-green-900/20'>
                                <div className='flex items-center gap-4'>
                                  <TrendingUp className='h-5 w-5 text-green-500' />
                                  <div>
                                    <h4 className='font-medium text-green-700 dark:text-green-300'>
                                      Weight Progress
                                    </h4>
                                    <p className='text-sm text-green-600 dark:text-green-400'>
                                      {post.progress.startWeight} →{' '}
                                      {post.progress.currentWeight} lbs (Goal:{' '}
                                      {post.progress.goalWeight} lbs)
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Streak Info */}
                            {post.streak && (
                              <div className='mb-4 rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20'>
                                <div className='flex items-center gap-4'>
                                  <div>
                                    <h4 className='font-medium text-orange-700 dark:text-orange-300'>
                                      {post.streak} Day Streak! 🔥
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Achievements */}
                            {post.achievements && (
                              <div className='mb-4 flex flex-wrap gap-2'>
                                {post.achievements.map((achievement, index) => (
                                  <Badge
                                    key={index}
                                    variant='outline'
                                    className='text-xs'
                                  >
                                    <Trophy className='mr-1 h-3 w-3' />
                                    {achievement}
                                  </Badge>
                                ))}
                              </div>
                            )}

                            {/* Actions */}
                            <div className='flex items-center gap-6 border-t pt-2'>
                              <Button
                                variant='ghost'
                                size='sm'
                                className='flex items-center gap-2 text-gray-600 hover:text-red-500'
                              >
                                <Heart className='h-4 w-4' />
                                <span>{post.likes}</span>
                              </Button>
                              <Button
                                variant='ghost'
                                size='sm'
                                className='flex items-center gap-2 text-gray-600 hover:text-blue-500'
                              >
                                <MessageCircle className='h-4 w-4' />
                                <span>{post.comments}</span>
                              </Button>
                              <Button
                                variant='ghost'
                                size='sm'
                                className='flex items-center gap-2 text-gray-600 hover:text-green-500'
                              >
                                <Share2 className='h-4 w-4' />
                                Share
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Challenges Tab */}
              <TabsContent value='challenges' className='space-y-6'>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                  {challenges.map((challenge) => {
                    const ChallengeIcon = getChallengeIcon(challenge.type);
                    return (
                      <Card key={challenge.id}>
                        <CardContent className='p-6'>
                          <div className='flex items-start gap-4'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900'>
                              <ChallengeIcon className='h-6 w-6 text-blue-600 dark:text-blue-400' />
                            </div>
                            <div className='flex-1'>
                              <h3 className='mb-2 font-semibold'>
                                {challenge.title}
                              </h3>
                              <p className='mb-4 text-sm text-gray-600 dark:text-gray-400'>
                                {challenge.description}
                              </p>

                              <div className='space-y-3'>
                                <div className='flex justify-between text-sm'>
                                  <span>
                                    {challenge.participants} participants
                                  </span>
                                  <span>{challenge.daysLeft} days left</span>
                                </div>

                                <div>
                                  <div className='mb-1 flex justify-between text-sm'>
                                    <span>Progress</span>
                                    <span>{challenge.progress}%</span>
                                  </div>
                                  <div className='h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700'>
                                    <div
                                      className='h-2 rounded-full bg-blue-500'
                                      style={{
                                        width: `${challenge.progress}%`,
                                      }}
                                    ></div>
                                  </div>
                                </div>

                                <div className='flex items-center justify-between'>
                                  <Badge
                                    variant='secondary'
                                    className='text-xs'
                                  >
                                    Reward: {challenge.reward}
                                  </Badge>
                                  <Button size='sm'>Join Challenge</Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>

              {/* Leaderboard Tab */}
              <TabsContent value='leaderboard' className='space-y-6'>
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Leaderboard</CardTitle>
                    <CardDescription>
                      Top performers this month based on consistency and
                      achievements
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-4'>
                      {leaderboard.map((user) => (
                        <div
                          key={user.rank}
                          className={`flex items-center gap-4 rounded-lg p-4 ${
                            user.isUser
                              ? 'border-2 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20'
                              : 'bg-gray-50 dark:bg-gray-800'
                          }`}
                        >
                          <div className='flex items-center gap-3'>
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                                user.rank === 1
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : user.rank === 2
                                    ? 'bg-gray-100 text-gray-800'
                                    : user.rank === 3
                                      ? 'bg-orange-100 text-orange-800'
                                      : 'bg-blue-100 text-blue-800'
                              }`}
                            >
                              {user.rank}
                            </div>
                            <Avatar>
                              <AvatarImage src={user.avatar} />
                              <AvatarFallback>
                                {user.name
                                  .split(' ')
                                  .map((n) => n[0])
                                  .join('')}
                              </AvatarFallback>
                            </Avatar>
                          </div>

                          <div className='flex-1'>
                            <div className='flex items-center gap-2'>
                              <h3 className='font-semibold'>{user.name}</h3>
                              {user.isUser && (
                                <Badge variant='outline' className='text-xs'>
                                  You
                                </Badge>
                              )}
                            </div>
                            <div className='flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400'>
                              <span>{user.points} points</span>
                              <span className='flex items-center gap-1'>
                                {/* Fire Emoji */}
                                {user.streak} day streak
                              </span>
                            </div>
                          </div>

                          {user.rank <= 3 && (
                            <Trophy
                              className={`h-6 w-6 ${
                                user.rank === 1
                                  ? 'text-yellow-500'
                                  : user.rank === 2
                                    ? 'text-gray-500'
                                    : 'text-orange-500'
                              }`}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className='space-y-6'>
            {/* Friends */}
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center justify-between'>
                  <span>Friends</span>
                  <Button variant='ghost' size='sm'>
                    <UserPlus className='h-4 w-4' />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                {friends.map((friend, index) => (
                  <div key={index} className='flex items-center gap-3'>
                    <div className='relative'>
                      <Avatar className='h-10 w-10'>
                        <AvatarImage src={friend.avatar} />
                        <AvatarFallback>
                          {friend.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`absolute -right-1 -bottom-1 h-4 w-4 ${getStatusColor(friend.status)} rounded-full border-2 border-white dark:border-gray-800`}
                      ></div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-sm font-medium'>{friend.name}</p>
                      <p className='text-xs text-gray-500'>
                        {friend.status === 'working-out'
                          ? 'Working out now'
                          : `Last workout ${friend.lastWorkout}`}
                      </p>
                    </div>
                    <Button variant='ghost' size='sm'>
                      <MessageSquare className='h-4 w-4' />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Your Stats</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-600 dark:text-gray-400'>
                    Total Points
                  </span>
                  <span className='font-semibold'>2,401</span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-600 dark:text-gray-400'>
                    Current Streak
                  </span>
                  <span className='flex items-center gap-1 font-semibold'>
                    5 days
                  </span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-600 dark:text-gray-400'>
                    Rank
                  </span>
                  <span className='font-semibold'>#4</span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-600 dark:text-gray-400'>
                    Active Challenges
                  </span>
                  <span className='font-semibold'>2</span>
                </div>
              </CardContent>
            </Card>

            {/* Trending Workouts */}
            <Card>
              <CardHeader>
                <CardTitle>Trending Workouts</CardTitle>
              </CardHeader>
              <CardContent className='space-y-3'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900'>
                    <TrendingUp className='h-4 w-4 text-red-600 dark:text-red-400' />
                  </div>
                  <div className='flex-1'>
                    <p className='text-sm font-medium'>Upper Body Blast</p>
                    <p className='text-xs text-gray-500'>
                      142 completions today
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900'>
                    <TrendingUp className='h-4 w-4 text-green-600 dark:text-green-400' />
                  </div>
                  <div className='flex-1'>
                    <p className='text-sm font-medium'>HIIT Cardio</p>
                    <p className='text-xs text-gray-500'>
                      98 completions today
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900'>
                    <TrendingUp className='h-4 w-4 text-purple-600 dark:text-purple-400' />
                  </div>
                  <div className='flex-1'>
                    <p className='text-sm font-medium'>Core Crusher</p>
                    <p className='text-xs text-gray-500'>
                      76 completions today
                    </p>
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
