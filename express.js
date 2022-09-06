const express = require('express');
const app = express();

const port = 1337;

app.get('/test', (req, res) => {
  res.end('Hello World');
});

app.get('/', (req, res) => {
  res.send(__dirname + '/public/index.html');
});

app.get('/logo', (req, res) => {
  res.send(__dirname + '/public.logo.png');
});

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
