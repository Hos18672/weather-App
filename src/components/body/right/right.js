import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./right.scss";
// import {config} from 'dotenv'
// config()
import  {Configuration, OpenAIApi} from "openai"


export const Right = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');


   const openai = new OpenAIApi(new Configuration({apiKey: "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"}))


  const sendMessage = async () => {
    if (inputValue.trim() === '') return;

    // Add user message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { content: inputValue, sender: 'user' },
    ]);
    setInputValue('');

    // Send user message to the backend for processing
    try {
      // const response = await axios.post('/chatgpt/endpoint', { message: inputValue });

      // if (response.status === 200) {
      //   const data = response.data;

      //   // Add AI response to the chat
      //   setMessages((prevMessages) => [
      //     ...prevMessages,
      //     { content: data.message, sender: 'ai' },
      //   ]);
      // }

     await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: inputValue}]
      }).then(res =>{

        setMessages((prevMessages) => [
              ...prevMessages,
              { content: res.data.choices[0].message.content, sender: 'ai' },
             ]);
      })
    } catch (error) {
      console.log('Fehler beim Aufrufen des Server-Endpunkts:', error);
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
