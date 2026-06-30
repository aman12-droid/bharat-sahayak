const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

//  Health check route
app.get("/", (req, res) => {
  res.send("🚀 Bharat Sahayak backend is running");
});

//  CHAT ROUTE (FIXED)
app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    if (!userMessage) {
      return res.json({ reply: "No message received" });
    }

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: userMessage,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const aiReply = response.data?.choices?.[0]?.message?.content;

    res.json({
      reply: aiReply || "No response from AI",
    });

  } catch (error) {
    console.log("ERROR:", error.response?.data || error.message);

    res.json({
      reply: "Error generating response",
    });
  }
});

//  PORT FIXED (RAILWAY SAFE)
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});