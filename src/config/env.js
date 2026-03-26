import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  WEATHER_API_KEY: process.env.OPENWEATHER_API_KEY,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
};
