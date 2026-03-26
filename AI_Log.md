## 🧠 AI Log

### 1. Parallel Fetching

**Prompt:**
"How to make multiple API calls concurrently in Node.js instead of sequential execution?"

**Outcome:**
Used `Promise.all()` to fetch weather data for all cities in parallel, improving performance.

---

### 2. Error Handling

**Prompt:**
"How to handle API errors in async JavaScript without stopping execution of other tasks?"

**Outcome:**
Wrapped each API call inside try-catch within `Promise.all` to ensure failures (like invalid cities) do not crash the application.

---

### 3. File Handling

**Prompt:**
"How to read and write JSON files asynchronously in Node.js?"

**Outcome:**
Used `fs/promises` module to read and update the `orders.json` file.

---

### 4. AI Message Generation

**Prompt:**
"Generate a short, polite apology message for a delayed order due to bad weather."

**Outcome:**
Integrated Gemini API to dynamically generate personalized customer messages.