const app = require('./server');

const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';

app.listen(port, host, () => {
  console.log(`Server is now running on http://${host}:${port}`);
  console.log('app.address():', app.address());
});