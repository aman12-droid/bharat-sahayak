import { useState } from "react";
import axios from "axios";

export default function Chatbot() {

  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {

    const res = await axios.post(
  "https://bharat-sahayak-production.up.railway.app/chat",
  {
    message,
  }
);

    setReply(res.data.reply);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">

      <h1 className="text-4xl font-bold mb-6">
        AI Assistant
      </h1>

      <input
        type="text"
        placeholder="Ask something..."
        className="border p-4 w-96 rounded-xl"
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={sendMessage}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl mt-4"
      >
        Send
      </button>

      <div className="bg-gray-100 p-6 rounded-xl mt-6 w-96 text-black">
        {reply}
      </div>

    </div>
  );
}