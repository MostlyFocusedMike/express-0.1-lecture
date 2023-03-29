const path = require('path');
const express = require('express');
const Fellow = require('./fellow');

const app = express();

app.get('/api/fellows', (req, res) => {
    res.send(Fellow.list());
});

app.post('/api/fellows', (req, res) => {
    res.send(Fellow.list());
});

const publicDir = path.join(__dirname, '..', 'public');
const staticServer = express.static(publicDir);
app.use(staticServer);

module.exports = app;

const port = process.env.PORT || 4321;
const host = process.env.HOST || '0.0.0.0';

server.listen(port, host, () => {
  console.log(`Server is now running on http://localhost:${port}`);
});