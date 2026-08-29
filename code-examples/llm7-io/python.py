# ===============================================
# LLM7.io - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://llm7.io
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://api.llm7.io/v1"
)

response = client.chat.completions.create(
    model="deepseek-v4-flash",
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)

print(response.choices[0].message.content)