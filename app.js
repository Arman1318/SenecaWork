const express = require('express');
const app = express();

// Root route that displays your name, course, and the current GMT
app.get('/', (req, res) => {
  const currentGMT = new Date().toUTCString();  // Get the current time in GMT/UTC string format
  res.send(`<h1>Arman Dodhiya - WEB322 - ${currentGMT}</h1>`);  // Replace 'Your Name' with your actual name
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
