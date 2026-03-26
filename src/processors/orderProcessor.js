import fs from "fs/promises";
import { fetchWeather } from "../services/weatherService.js";
import { generateApology } from "../services/aiService.js";
import { logger } from "../utils/logger.js";
import { handleError } from "../utils/errorHandler.js";

const DELAY_CONDITIONS = ["Rain", "Snow", "Extreme", "Clouds"];

export const processOrders = async () => {
  try {
    const data = await fs.readFile("./src/data/orders.json", "utf-8");
    const orders = JSON.parse(data);

    const results = await Promise.all(
      orders.map(async (order) => {
        try {
          const weather = await fetchWeather(order.city);

          logger.info(`Weather in ${order.city}: ${weather}`);

          if (DELAY_CONDITIONS.includes(weather)) {
            order.status = "Delayed";

            order.message = await generateApology(
              order.customer,
              order.city,
              weather,
            );
          }

          return order;
        } catch (error) {
          handleError(error, order.city);
          return order;
        }
      }),
    );

    // ✅ WRITE FILE (this was never reached before due to crash)
    await fs.writeFile(
      "./src/data/orders.json",
      JSON.stringify(results, null, 2),
    );

    // ✅ FIXED LOG (no 'order' here)
    logger.info(`✅ Processed ${results.length} orders successfully`);
  } catch (error) {
    handleError(error, "processOrders");
  }
};
