// ===============================================
// Inception Labs - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://platform.inceptionlabs.ai
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_API_KEY',
  baseURL: 'https://api.inceptionlabs.ai/v1'
});

const response = await client.chat.completions.create({
  model: 'mercury-2',
  messages: [
    { role: 'user', content: 'What is a diffusion model?' }
  ]
});

console.log(response.choices[0].message.content);
