const Http = require('http');

const PORT = 8087;

const server = Http.createServer((req, res) => {
  console.log(`Received request: ${req.url}`);

  switch (req.url) {
    case '/hello-world':
      res.write('Hello World!');
      break;
    case '/':
    default:
      res.write('NodeJS is awesome!');
  }

  res.end();
});
server.listen(PORT, () => {
  console.info(`Server is UP and listening at port ${PORT}`);
});