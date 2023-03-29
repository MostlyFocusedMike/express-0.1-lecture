const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hi');
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

const port = process.env.PORT || 80;
const host = process.env.HOST || '0.0.0.0';

app.listen(port, host, () => {
  console.log(`Server is now running on http://${host}:${port}`);
});