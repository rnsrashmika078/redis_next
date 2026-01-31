import { createClient } from "redis";


const redisUrl = process.env.REDIS_URL!;
export const redis = createClient({ url: redisUrl });


redis.on("error", (err) => console.log("redis client error", err));


let connected = false;
export async function getRedis() {
    if (!connected) {
        await redis.connect();
        connected = true;
    }
    return redis;
}
