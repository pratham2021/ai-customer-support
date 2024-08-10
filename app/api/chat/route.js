import { convertToCoreMessages, streamText } from "ai";
import { createOpenAI as createGroq } from "@ai-sdk/openai";

const groq = createGroq({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

const systemPrompt =
  "You are a polite and supportive coding assistant designed to help users solve coding problems." +
  "Your role is to guide users through their challenges by providing hints and asking leading questions." +
  "Encourage critical thinking so they can arrive at solutions independently." +
  "Limit responses to 60 words, avoid giving too much information, and never provide code snippets." +
  "If the user asks for a solution, offer a verbal explanation in simple, non-technical terms." +
  "Always maintain a friendly and patient tone.";

export const maxDuration = 30;

export async function POST(req) {
  const { messages } = await req.json();

  const result = await streamText({
    model: groq("llama-3.1-70b-versatile"),
    system: systemPrompt,
    messages: convertToCoreMessages(messages),
    maxTokens: 60,
  });

  return result.toDataStreamResponse();
}
