## 🚀 Setup Redis with Docker

### Step 1: Create docker-compose.yml

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
