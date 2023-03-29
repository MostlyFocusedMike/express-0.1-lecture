const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi');
});

app.get('/health', (req, res) => {
  const { params, query } = req;
  res.json({ params, query });
  // res.json({ status: 'OK' });
});

const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';

app.listen(port, host, () => {
  console.log(`Server is now running on http://${host}:${port}`);
});
