import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: '<DeepSeek API Key>',
});

export const ConnectAI = async () => {
  const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
    { role: 'system', content: 'You are a helpful assistant.' },
  ];
  const response = await openai.chat.completions.create({
    messages,
    model: 'deepseek-chat',
  });

  messages.push(response.choices[0].message);

  console.log(messages);
};
