const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware to log requests
app.use((req, res, next) => {
    const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
    fs.appendFileSync('server.log', log);
    console.log(log);
    next();
});

// Homepage Route
app.get('/', (req, res) => {
    res.send('Welcome to Full Stack Development');
});

// About Route
app.get('/about', (req, res) => {
    res.send('This is a simple Express.js application.');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
