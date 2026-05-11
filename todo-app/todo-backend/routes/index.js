const express = require('express');
const router = express.Router();
const redis = require('../redis')

const configs = require('../util/config')

let visits = 0

router.get('/statistics', async (req, res) => {
  const added_todos = await redis.get("added_todos")
  const visits = await redis.get("visits")

  res.send({
    visits,
    added_todos
  });
});

/* GET index data. */
router.get('/', async (req, res) => {
  visits++
  await redis.set("visits", visits)

  res.send({
    ...configs,
    visits,
  });
});


module.exports = router;
