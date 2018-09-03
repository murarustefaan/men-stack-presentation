const router = require('express').Router();
const HamsterRepository = require('../repositories/hamster');

// Middleware function used for logging requests
router.use((req, res, next) => {
  console.log(`Received API '/hamster' request: ${req.url}`);
  next();
});

router.post('/', async (req, res) => {
  try {
    await HamsterRepository.createHamster(req.body);
    res.status(200).json(req.body);
  }
  catch(e) {
    res.status(400).write(e);
  }
  finally {
    return res.end();
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await HamsterRepository.deleteHamster(req.params.id);
    res.status(200);
  }
  catch(e) {
    res.status(400).write(e);
  }
  finally {
    return res.end();
  }
});

router.get('/:id', async (req, res) => {
  try {
    const hamster = await HamsterRepository.getHamster(req.params.id);
    res.status(200).json(hamster);
  }
  catch(e) {
    res.status(400).write(e);
  }
  finally {
    return res.end();
  }
});

router.get('/', async (req, res) => {
  try {
    const hamsters = await HamsterRepository.getHamsters();
    res.status(200).json(hamsters);
  }
  catch(e) {
    res.status(400).write(e);
  }
  finally {
    return res.end();
  }
});

module.exports = router;