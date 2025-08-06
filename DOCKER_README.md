# Docker Setup for webdev_task_01

This project includes Docker configuration to run the application in containers.

## Files Created

- `Dockerfile` - Production build using nginx
- `Dockerfile.dev` - Development build with hot reload
- `docker-compose.yml` - Production environment
- `docker-compose.dev.yml` - Development environment
- `docker.sh` - Convenience script for Docker operations
- `.dockerignore` - Excludes unnecessary files from Docker context

## Quick Start

### Using the convenience script (recommended):

```bash
# Start development environment (with hot reload)
./docker.sh dev

# Start production environment
./docker.sh prod

# Build production image only
./docker.sh build

# Stop all containers
./docker.sh stop

# Clean up containers and images
./docker.sh clean
```

### Manual Docker commands:

#### Development Environment

```bash
# Start development with hot reload
docker-compose -f docker-compose.dev.yml up --build

# Access the app at: http://localhost:5173
# API server at: http://localhost:3001
```

#### Production Environment

```bash
# Build and start production
docker-compose up --build

# Access the app at: http://localhost:3000
# API server at: http://localhost:3001
```

#### Build Production Image Only

```bash
docker build -t webdev_task_01 .
```

## Services

### Frontend

- **Development**: React app with Vite dev server and hot reload
- **Production**: Built React app served by nginx
- **Port**: 5173 (dev) / 3000 (prod)

### API

- JSON Server serving the `db.json` file
- **Port**: 3001
- **Endpoints**:
  - `/roads` - Roads data
  - `/todos` - Todos data

## Environment Variables

The development environment includes:

- `CHOKIDAR_USEPOLLING=true` - For file watching in containers

## Notes

- The API configuration in `src/config/api.ts` uses `localhost:3001` which works when running both services
- For production deployment, you may need to update the API base URL
- The development setup includes volume mounting for hot reload functionality
- Node modules are cached in an anonymous volume for faster rebuilds
