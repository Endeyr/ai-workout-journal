'use client';

import { Chat } from '@/components/ui/chat';
import { useChat } from '@ai-sdk/react';

export default function Page() {
  const { messages, input, handleSubmit, handleInputChange, status, append } =
    useChat();

  return (
    <Chat
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
  );
}
