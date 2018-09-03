const Express = require('express');
const BodyParser = require('body-parser');
const hamsterRouter = require('./routers/hamster');

const PORT = 8087;

const app = Express();

// Middleware used for parsing POST and PUT request bodies
app.use(BodyParser.json({
  strict: true
}));

// Use routers
app.use('/api/hamsters', hamsterRouter);

// Generic route
app.all('*', (req, res) => {
  res.end('NodeJS is awesome!');
});

app.listen(PORT, () => {
  console.info(`Server is UP and listening at port ${PORT}`);
});