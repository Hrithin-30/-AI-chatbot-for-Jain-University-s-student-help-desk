# -AI-chatbot-for-Jain-University-s-student-help-desk
A browser-based AI chatbot for Jain University's student help desk — answers admissions, fee, and campus questions instantly via Groq/Gemini, with optional voice input.
# JAIN University AI — Student Help Desk

A lightweight, client-side chatbot that answers student questions about
admissions, fees, courses, hostel life, and placements — instantly, 24/7.
Built as a single self-contained HTML file with no backend, no build step,
and no framework.

## Features
- 🎓 Answers grounded in a curated Jain University knowledge base
- 🚫 Guardrailed to stay strictly on-topic (declines off-topic questions)
- 🎤 Voice input via the browser's native Web Speech API
- 💬 Quick-question chips for common queries (fees, hostel, placements)
- 🔑 Bring-your-own API key — stored only in-browser, never on a server
- ⚡ Two interchangeable LLM backends: **Groq** (Llama/gpt-oss-120b) and
  **Google Gemini** (gemini-3.5-flash)

## Tech Stack
- HTML5, CSS3, Vanilla JavaScript (no framework, no build tools)
- Groq Chat Completions API / Google Gemini API
- Web Speech API (SpeechRecognition) for voice input

## Getting Started
1. Open `jain_chatbot_groq_ai.html` (or `jain_chatbot_voice.html` for the
   Gemini variant) in Chrome or Edge.
2. Paste your API key ([Groq console](https://console.groq.com/keys) or
   [Google AI Studio](https://aistudio.google.com/apikey)).
3. Start chatting — type or tap the mic to ask a question.

## Limitations
- Knowledge base is static (not pulled from a live source)
- API key is exposed client-side — not intended for public deployment as-is
- Voice input requires a Chromium-based browser

## Team
Built by a 5-member team — frontend/UI, Groq integration, Gemini
integration, voice input, and knowledge base/testing.
