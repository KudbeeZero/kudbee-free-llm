# ===============================================
# Inception Labs - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://platform.inceptionlabs.ai
# ===============================================

from openai import OpenAI

client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://api.inceptionlabs.ai/v1"
)

response = client.chat.completions.create(
    model="mercury-2",
    messages=[
        {"role": "user", "content": "What is a diffusion model?"}
    ]
)

print(response.choices[0].message.content)
