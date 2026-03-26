import { GoogleGenAI } from "@google/genai";
import { ENV } from "../config/env.js";
import { logger } from "../utils/logger.js";

const ai = new GoogleGenAI({
  apiKey: ENV.GEMINI_API_KEY,
});

export const generateApology = async (customer, city, weather) => {
  try {
    const prompt = `
You are a customer support assistant.

Write a short, polite apology message for a delayed order.

Customer Name: ${customer}
City: ${city}
Reason: ${weather} weather conditions

Keep it under 25 words.
Tone: professional and empathetic.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    return response.text.trim();
  } catch (error) {
    logger.error("AI generation failed, using fallback message");

    // fallback (important for resilience)
    return `Hi ${customer}, your order to ${city} is delayed due to ${weather.toLowerCase()}. Thank you for your patience.`;
  }
};
