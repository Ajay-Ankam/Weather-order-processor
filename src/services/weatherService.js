import axios from "axios";
import { ENV } from "../config/env.js";

export const fetchWeather = async (city) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city,
          appid: ENV.WEATHER_API_KEY,
        },
      },
    );

    return res.data.weather[0].main;
  } catch (error) {
    throw new Error(`Weather fetch failed for ${city}`);
  }
};
