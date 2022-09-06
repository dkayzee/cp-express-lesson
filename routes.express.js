const express = require('express');
const app = express();

const port = 1337;

app.get('/users', (req, res, next) => {
  // get users info
});

app.post('/user', (req, res, next) => {
  // post to user
});

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
