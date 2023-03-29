const express = require('express');
const Fellow = require('./fellow');

const app = express();

app.use((req, res, next) => {
  const time = (new Date()).toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next();
})

app.use((req, res, next) => {
  req.Fellow = Fellow;
  next();
})

app.use(express.json());

app.get('/fellows', (req, res) => {
  res.send(req.Fellow.list());
});

app.post('/fellows', (req, res) => {
  const { Fellow, body: { fellowName } } = req;
  const newFellow = new Fellow(fellowName);
  res.send(newFellow);
});

const port = process.env.PORT || 80;
const host = process.env.HOST || '0.0.0.0';

app.listen(port, host, () => {
  console.log(`Server is now running on http://${host}:${port}`);
});