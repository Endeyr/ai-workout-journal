import { deepseek } from '@ai-sdk/deepseek';
import { generateText } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await generateText({
    model: deepseek('deepseek-reasoner'),
    messages,
  });

  console.log(result.providerMetadata);
  // Example output: { deepseek: { promptCacheHitTokens: 1856, promptCacheMissTokens: 5 } }

  return result.providerMetadata;
}
