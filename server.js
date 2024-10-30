const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

require('dotenv').config();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for the profile page
app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'profile', 'index.html'));
});

// Route for the search games page
app.get('/search-games', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'search', 'index.html'));
});

// Route for the my match requests page
app.get('/my-requests', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'myrequests', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});