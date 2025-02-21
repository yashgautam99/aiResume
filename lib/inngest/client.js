import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "echo-ai", // Unique app ID
  name: "echo-ai",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
