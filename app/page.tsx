import { auth } from '@/auth';
import SignIn from '@/components/sign-in';
import SignOut from '@/components/sign-out';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Brain, Dumbbell, TrendingUp, Zap } from 'lucide-react';
import Link from 'next/link';

export default async function Page() {
  const session = await auth();
  const user = session?.user;

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950'>
      {/* Navigation */}
      <nav className='container mx-auto flex items-center justify-between px-6 py-4'>
        <div className='flex items-center space-x-2'>
          <Dumbbell className='text-primary h-8 w-8' />
          <span className='text-2xl font-bold text-white'>FitAI</span>
        </div>
        <div className='flex items-center space-x-4'>
          {!user ? (
            <>
              <SignIn />
              <Link href='/onboarding'>
                <Button className='bg-primary hover:bg-secondary text-white'>
                  Get Started
                </Button>
              </Link>
            </>
          ) : (
            <SignOut />
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className='container mx-auto px-6 py-20 text-center'>
        <Badge className='mb-6 border-purple-700 bg-purple-900/50 text-purple-300'>
          AI-Powered Fitness
        </Badge>
        <h1 className='mb-6 text-6xl leading-tight font-bold text-white'>
          Your Personal
          <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
            {' '}
            AI Trainer
          </span>
        </h1>
        <p className='mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-slate-300'>
          Transform your fitness journey with intelligent workout tracking,
          personalized recommendations, and AI-powered insights that adapt to
          your progress.
        </p>
        <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
          <Link href='/onboarding'>
            <Button
              size='lg'
              className='bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg text-white hover:from-purple-700 hover:to-pink-700'
            >
              Start Your Journey
            </Button>
          </Link>
          <Button
            size='lg'
            variant='outline'
            className='border-purple-400 px-8 py-4 text-lg text-purple-300 hover:bg-purple-900/20'
          >
            Watch Demo
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className='container mx-auto px-6 py-20'>
        <h2 className='mb-16 text-center text-4xl font-bold text-white'>
          Why Choose FitAI?
        </h2>
        <div className='grid gap-8 md:grid-cols-3'>
          <Card className='border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:bg-slate-900/70'>
            <CardHeader>
              <Brain className='mb-4 h-12 w-12 text-purple-400' />
              <CardTitle className='text-white'>AI-Powered Insights</CardTitle>
              <CardDescription className='text-slate-400'>
                Get personalized workout recommendations based on your progress,
                goals, and preferences.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className='border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:bg-slate-900/70'>
            <CardHeader>
              <TrendingUp className='mb-4 h-12 w-12 text-green-400' />
              <CardTitle className='text-white'>Progress Tracking</CardTitle>
              <CardDescription className='text-slate-400'>
                Visualize your fitness journey with detailed analytics and
                progress charts.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className='border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:bg-slate-900/70'>
            <CardHeader>
              <Zap className='mb-4 h-12 w-12 text-yellow-400' />
              <CardTitle className='text-white'>Smart Automation</CardTitle>
              <CardDescription className='text-slate-400'>
                Automatic workout logging and intelligent rest day
                recommendations.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className='container mx-auto px-6 py-20 text-center'>
        <div className='rounded-3xl border border-purple-800/30 bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-12 backdrop-blur-sm'>
          <h2 className='mb-6 text-4xl font-bold text-white'>
            Ready to Transform Your Fitness?
          </h2>
          <p className='mx-auto mb-8 max-w-2xl text-xl text-slate-300'>
            Join thousands of users who have already revolutionized their
            workout routine with AI.
          </p>
          <Link href='/onboarding'>
            <Button
              size='lg'
              className='bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-4 text-lg text-white hover:from-purple-700 hover:to-pink-700'
            >
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className='container mx-auto border-t border-slate-800 px-6 py-12'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <Dumbbell className='h-6 w-6 text-purple-400' />
            <span className='font-semibold text-white'>FitAI</span>
          </div>
          <p className='text-slate-400'>© 2025 FitAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
