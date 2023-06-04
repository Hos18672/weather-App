import React, { useState, useEffect } from "react";
import "./right.scss";

export const Right = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = async () => {
    if (inputValue.trim() === '') return;

    // Add user message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { content: inputValue, sender: 'user' },
    ]);
    setInputValue('');

    // Send user message to the backend for processing
    const response = await fetch("https://api.example.com/chatgpt/endpoint?api_key=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", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: inputValue }),
    });

    if (response.ok) {
      const data = await response.json();

      // Add AI response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: data.message, sender: 'ai' },
      ]);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        sendMessage();
      }
    };

    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);


  return (
    <div className="right card">
        <h3>Chat with ChatGPT</h3>
        <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.content}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};
