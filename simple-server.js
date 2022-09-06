const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = '3000';

var requestListener = function (req, res) {
  if (req.url === '/test') {
    res.writeHead(200);
    res.end('Hello World!');
  } else if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile(__dirname + '/public/index.html', function (err, data) {
      if (err) console.log(err);
      res.end(data);
    });
  } else if (req.url === '/logo') {
    res.writeHead(200, { 'Content-Type': 'image/gif' });
    fs.readFile(__dirname + '/public/logo.png', function (err, data) {
      if (err) console.log(err);
      Response.end(data);
    });
  }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
