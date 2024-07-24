import { redisClient } from "../db/redis.js";

export const cache = (duration) => {
    return async (req, res, next) => {
        if (req.method !== 'GET') {
            return next();
        }

        const key = `cache:${req.originalUrl}`;
        try {
            const cachedResponse = await redisClient.get(key);
            if (cachedResponse) {
                return res.json(JSON.parse(cachedResponse));
            }
            res.originalJson = res.json;
            res.json = async (body) => {
                await redisClient.setEx(key, duration, JSON.stringify(body));
                res.originalJson(body);
            };
            next();
        } catch (error) {
            console.error('Cache error:', error);
            next();
        }
    };
};

export const clearCache = (route) => {
    return async (req, res, next) => {
        await redisClient.del(`cache:${route}`);
        next();
    };
}