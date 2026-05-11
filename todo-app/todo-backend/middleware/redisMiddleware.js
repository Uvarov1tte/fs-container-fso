const redis = require('../redis')

const redisMiddleware = async (req, res, next) => {
    if (!await redis.get("added_todos")) {
        await redis.set("added_todos", 0)
    }

    if (!await redis.get("visits")) {
        await redis.set("visits", 0)
    }

    next()
}

module.exports = redisMiddleware 