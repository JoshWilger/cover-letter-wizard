import type { FormValues } from '@@types/form';
import instance from '@api';
import { mapSearchParamToValue, generatePrompt } from './completion.utils';

const API_KEY = import.meta.env.VITE_API_KEY;

interface CompletionApiProps extends Omit<FormValues, 'editedTranscript'> {
  searchParams: URLSearchParams;
  isFeedback: boolean;
}

const fetchOpenAICompletion = async ({
  searchParams,
  transcript,
  conversationContext,
  isFeedback,
}: CompletionApiProps) => {

  if (conversationContext.length < 2) {
    const { role, occasion, length } = mapSearchParamToValue(searchParams);
    const prompt = generatePrompt(role, occasion, length, isFeedback);
    isFeedback = false;
    conversationContext = [{role: 'system', content: prompt}];
  }
  else if (transcript) {
    conversationContext.push({role: 'user', content: transcript})
  }

  const options = {
    model: 'gpt-4',
    messages: conversationContext,
    temperature: 0.7,
    max_tokens: 1000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };
  const config = {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const { data } = await instance.post('v1/chat/completions', options, config);

  const response = data.choices[0].message.content.trim();
  conversationContext.push({role: 'assistant', content: response})
  const newContext = conversationContext

  return {
    id: data.id,
    response,
    newContext
  };
};

export default fetchOpenAICompletion;
