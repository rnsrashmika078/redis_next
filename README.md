## 🚀 Setup Redis with Docker in Next js with Bun

### Step 1: intialize the docker

```yaml
services:
  redis:
    image: redis:7-alpine
    container_name: redis_local
    ports:
      - "6379:6379"
    command: ["redis-server", "--appendonly", "yes"]
    volumes:
      - redis_data:/data

volumes:
  redis_data:
```

### Step 2: Create docker-compose.yml

```yaml
services:
  redis:
    image: redis:7-alpine
    container_name: redis_local
    ports:
      - "6379:6379"
    command: ["redis-server", "--appendonly", "yes"]
    volumes:
      - redis_data:/data

volumes:
  redis_data:
```

### Step 3: update the docker volume

```bash
docker compose up -d
```

### Step 4: Install redis in next js

```bash
bun install redis / npn install redis
```

### Step 5: Create redis.ts

```bash
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
```

### Step 6: cache
```bash


```