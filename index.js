const Http = require('http');
const Express = require('express');
const PORT = 8087;

const app = Express();
const router = Express.Router();

// Middleware function used for logging requests
router.use((req, res, next) => {
  console.log(`Received request: ${req.url}`);
  next();
});

router.get('/hello-world', (req, res) => {
  res.end('Hello world!');
});

router.use('*', (req, res) => {
  res.end('NodeJS is awesome!');
});

app.use(router);

app.listen(PORT, () => {
  console.info(`Server is UP and listening at port ${PORT}`);
});