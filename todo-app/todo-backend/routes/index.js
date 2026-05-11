const express = require('express');
const router = express.Router();
const redis = require('../redis')

const configs = require('../util/config');
const redis = require('../redis');

let visits = 0

router.get('/statistics', async (req, res) => {
  let added_todos = await redis.get("added_todos")
  let visits = await redis.get("visits")

  if (!added_todos) {
    await redis.set("added_todos", 0)
    added_todos = 0
  }

  if (!visits) {
    await redis.set("visits", 0)
    visits = 0
  }

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
