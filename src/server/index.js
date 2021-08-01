
// Retrieve Meaning Cloud API key from environment.
// Expects "API_KEY=********************************".
const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.API_KEY;

// Set up express server.
const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../../dist')));

// Retrieve HTML on root get route.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

// Start production server on port 8080.
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
