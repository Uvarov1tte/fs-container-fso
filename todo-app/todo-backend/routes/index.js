const express = require('express');
const router = express.Router();
const redis = require('../redis')

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++
  await redis.set("visits", visits)
  if (!await redis.get("added_todos")){
    await redis.set("added_todos", 0)
  }

  const added_todos = await redis.get("added_todos")

  res.send({
    visits,
    added_todos
  });
});

module.exports = router;
