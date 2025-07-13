"use client";
import React, { useState } from "react";
import Input from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface ChatbotProps {
  topic: string;
}

const API_KEY = "ENTER_YOUR_API_KEY_HERE"; // Replace with actual API key
const genAI = new GoogleGenerativeAI(API_KEY);

const Chatbot: React.FC<ChatbotProps> = ({ topic }) => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "You", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const botResponse = await getBotResponse(input, topic);
      setMessages((prev) => [...prev, { sender: "AI Tutor", text: botResponse }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [...prev, { sender: "AI Tutor", text: "Sorry, I couldn't process your request." }]);
    } finally {
      setLoading(false);
    }
  };

  const getBotResponse = async (question: string, topic: string): Promise<string> => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
      const prompt = `Briefly answer the following question related to ${topic}. Format the response properly: "${question}"`;
      const result = await model.generateContent({ contents: [{ parts: [{ text: prompt }] }] });

      if (!result.response) return "I'm here to help! Can you rephrase your question?";

      const response = await result.response.text();
      return response.replace(/\n/g, "<br />"); // Preserve newlines
    } catch (error) {
      console.error("Error with Gemini API:", error);
      return "Sorry, there was an issue getting an answer.";
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-xl font-semibold text-center mb-3">Chat with AI Tutor</h2>
      <div className="h-96 overflow-y-auto border border-gray-700 p-3 rounded-md">
        {messages.length === 0 ? (
          <p className="text-gray-400 text-center">Ask me anything about {topic}!</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className={`p-2 my-1 ${msg.sender === "You" ? "text-blue-400" : "text-green-400"}`}>
              <strong>{msg.sender}:</strong>{" "}
              <span dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }} />
            </div>
          ))
        )}
        {loading && <p className="text-gray-400 text-center">Thinking...</p>}
      </div>
      <div className="flex items-center mt-3">
        <Input
          type="text"
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-md"
        />
        <Button onClick={handleSend} className="ml-2" disabled={loading}>
          {loading ? "Loading..." : "Send"}
        </Button>
      </div>
    </div>
  );
};

// Function to format AI responses (code blocks, newlines)
const formatMessage = (text: string) => {
  return text
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-900 p-2 rounded-md"><code>$1</code></pre>') // Code blocks
    .replace(/\n/g, "<br />"); // Preserve newlines
};

export default Chatbot;
