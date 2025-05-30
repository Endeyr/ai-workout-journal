'use client';

import { Chat } from '@/components/ui/chat';
import { useChat } from '@ai-sdk/react';

// TODO Need to lock behind user being logged in
export default function Page() {
  const {
    messages,
    input,
    handleSubmit,
    handleInputChange,
    status,
    append,
    stop,
  } = useChat();

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
