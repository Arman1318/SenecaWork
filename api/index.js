const express = require('express');
const app = express();

// Root route that displays your name, course, and the current GMT
app.get('/', (req, res) => {
  const currentGMT = new Date().toISOString(); // Fetch current GMT time
  res.send(`<h1>Arman Dodhiya - WEB322 - ${currentGMT}</h1>`);
});

// Additional route to confirm app is running
app.get('/status', (req, res) => {
  res.send('Your App is Running!');
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
