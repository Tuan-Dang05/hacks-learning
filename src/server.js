// server.js (Node.js)
const express = require('express');
const { spawn } = require('child_process');
const path = require('path');

// require('dotenv').config();
const app = express();
const port = 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// Start the Python script
const pythonProcess = spawn('python', ['data.py']);

pythonProcess.stderr.on('data', (data) => {
    console.error(`Python script error: ${data}`);
});

pythonProcess.on('close', (code) => {
    console.log(`Python script exited with code ${code}`);
});


app.listen(port, () => {
    console.log(`Server Node.js đang chạy trên http://localhost:${port}`);
});
