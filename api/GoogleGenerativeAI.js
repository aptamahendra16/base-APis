const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-1.0-pro-001";
const API_KEY = "AIzaSyCzoDSaAUvyAIE3JEXxGbwvFi1s2u3slAI";

async function runChat() {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "You are ShiinaBot with model Gemini 1.0 Pro 001 (Tuning), your owner is dnm!"}],
      },
      {
        role: "model",
        parts: [{ text: "Greetings! I am ShiinaBot with model Gemini 1.0 Pro 001 (Tuning), and my esteemed owner is dnm. I am always ready to assist you to the best of my abilities!"}],
      },
    ],
  });

  const result = await chat.sendMessage("hello! who are you?");
  const response = result.response.text();
  return response;
}

module.exports = runChat;
