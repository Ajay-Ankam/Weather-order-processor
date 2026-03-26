# 🌦️ Weather-Based Order Delay Processor

## 🚀 Overview
This project is a Node.js-based automation system that processes customer orders and detects potential delivery delays based on real-time weather conditions.

It integrates external APIs, uses parallel processing, and applies intelligent logic to update order statuses and generate customer-friendly messages.

---

## 🧠 Features

- ⚡ Parallel API Calls using Promise.all  
- 🌦️ Real-time Weather Fetching via OpenWeatherMap API  
- 🤖 AI-Powered Apology Messages using Gemini API  
- 🛡️ Robust Error Handling (invalid cities handled gracefully)  
- 🔐 Secure API Key Management using `.env`  
- 🧱 Clean Modular Architecture  

---

## 📁 Project Structure

src/
├── config/           # Environment configuration <br>
├── services/         # API integrations (Weather + AI) <br>
├── processors/       # Core business logic <br>
├── utils/            # Logger & error handling <br>
├── data/             # orders.json (input/output) <br>
└── index.js          # Entry point

---

## ⚙️ Setup Instructions

### 1. Clone the repository
git clone https://github.com/Ajay-Ankam/Weather-order-processor.git  
cd weather-order-processor  

### 2. Install dependencies
npm install  

### 3. Create `.env` file
OPENWEATHER_API_KEY=your_weather_api_key  
GEMINI_API_KEY=your_gemini_api_key  

### 4. Run the application
node src/index.js  

---

## 🔄 How It Works

1. Reads orders from `orders.json`  
2. Fetches weather data for each city in parallel  
3. Applies logic:  
   - If weather is **Rain / Snow / Extreme → mark as Delayed**  
4. Generates a personalized apology message using AI  
5. Updates the JSON file with new status and message  

---

## 🧪 Error Handling

- Invalid cities are logged without stopping execution  
- Example:  
Error in InvalidCity123: Weather fetch failed  

---

## 📊 Sample Output

{
  "order_id": "1002",
  "customer": "Bob Jones",
  "city": "Mumbai",
  "status": "Delayed",
  "message": "Hi Bob, your order is delayed due to heavy rain. We appreciate your patience."
}

---

## 🧠 AI Log

Prompt Used:  
Write a short, polite apology message for a delayed order due to bad weather. Keep it under 25 words and professional.  

Enhancement:  
Make the tone empathetic and customer-friendly.  

---

## 💡 Key Highlights

- Demonstrates real-world async processing  
- Implements resilient API handling  
- Integrates AI for dynamic content generation  
- Follows clean code and scalable architecture principles  

---


## 👨‍💻 Author  
Ajay Ankam