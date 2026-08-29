# ===============================================
# Inception Labs - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://platform.inceptionlabs.ai
# ===============================================

curl https://api.inceptionlabs.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "mercury-2",
    "messages": [
      {
        "role": "user",
        "content": "What is a diffusion model?"
      }
    ]
  }'
