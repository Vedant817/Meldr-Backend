import redis from 'redis';

let redisClient;

const connectRedis = async () => {
    try {
        redisClient = redis.createClient({
            host: 'localhost',
            port: 6379
        })

        redisClient.on('error', (err) => console.log('Redis Client Error', err));

        await redisClient.connect();
        console.log('Redis Database connected');
    } catch (error) {
        console.log('Error while connecting to Redis', error);
    }
}

export {connectRedis, redisClient};