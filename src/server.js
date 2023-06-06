const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(express.json());

// CORS-Konfiguration
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/chatgpt/endpoint', async (req, res) => {
  try {
    const { message } = req.body;

    const response = await axios.post(
      'https://api.example.com/chatgpt/endpoint?api_key=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',
      { message }
    );

    const chatbotResponse = response.data.message;

    res.json({ message: chatbotResponse });
  } catch (error) {
    console.log('Fehler beim Aufrufen des Server-Endpunkts:', error);
    res.status(500).json({ error: 'Serverfehler' });
  }
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
