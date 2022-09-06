const express = require('express');
const app = express();

const port = 1337;

const logger = (req, res, next) => {
  console.log(`Request: ${req.method} at ${req.url}`);
  next();
};

app.use(logger);

app.use('/user', logger);

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
