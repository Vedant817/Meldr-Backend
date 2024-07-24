import redis from 'redis';

const connectRedis = async () => {
    try {
        const redisClient = redis.createClient({
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

export default connectRedis;