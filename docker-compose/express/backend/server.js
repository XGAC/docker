const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/proxy', async (req, res) => {
    try {
        const apiUrl = 'https://api.example.com/data'; // Replace with your API URL
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Proxy server is running on port ${port}`);
});
