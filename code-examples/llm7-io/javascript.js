// ===============================================
// LLM7.io - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://llm7.io
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_API_KEY',
  baseURL: 'https://api.llm7.io/v1'
});

const response = await client.chat.completions.create({
  model: 'deepseek-v4-flash',
  messages: [{ role: 'user', content: 'Hello!' }]
});

console.log(response.choices[0].message.content);