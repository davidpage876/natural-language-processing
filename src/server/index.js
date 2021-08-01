const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../../dist/index.html')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
