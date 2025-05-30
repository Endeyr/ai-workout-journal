'use client';

import { auth } from '@/auth';
import { Chat } from '@/components/ui/chat';
import { useChat } from '@ai-sdk/react';
import { redirect } from 'next/navigation';
export default async function Page() {
  const {
    messages,
    input,
    handleSubmit,
    handleInputChange,
    status,
    append,
    stop,
  } = useChat();

  const session = await auth();
  const user = session?.user;

  if (!user) redirect('/');

  return (
    <div className='mx-auto flex min-h-screen flex-col items-center justify-center'>
      <div className='rounded-md border p-4'>
        <div className='flex h-[500px] w-full'>
          <Chat
            className='grow'
            messages={messages}
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            isGenerating={status === 'ready'}
            stop={stop}
            append={append}
            suggestions={[
              'Generate a tasty vegan lasagna recipe for 3 people.',
              'Generate a list of 5 questions for a frontend job interview.',
              'Who won the 2022 FIFA World Cup?',
            ]}
          />
        </div>
      </div>
    </div>
  );
}
