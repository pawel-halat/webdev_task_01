# WebDev Task 01

## How to Run with Docker

This application provides both development and production Docker environments. The easiest way to run the application is using the provided shell script.

### Prerequisites

- Docker and Docker Compose installed on your system
- Make sure Docker daemon is running

### Quick Start (docker)

1. Navigate to the project directory:

   ```bash
   cd webdev_task_01
   ```

2. Make the script executable (if needed):

   ```bash
   chmod +x docker.sh
   ```

3. Run the application:

   **For Development (with hot reload):**

   ```bash
   ./docker.sh dev
   ```

   - Frontend: http://localhost:5173
   - API Server: http://localhost:3001

   **For Production:**

   ```bash
   ./docker.sh prod
   ```

   - Frontend: http://localhost:3000
   - API Server: http://localhost:3001

### Available Commands

The `docker.sh` script provides the following commands:

- `./docker.sh dev` - Start development environment with hot reload
- `./docker.sh prod` - Start production environment
- `./docker.sh build` - Build production Docker image
- `./docker.sh stop` - Stop all running containers
- `./docker.sh clean` - Stop containers and remove images

### Troubleshooting

- If ports are already in use, stop the containers with `./docker.sh stop`
- To clean up all Docker resources, use `./docker.sh clean`
- Make sure Docker daemon is running before executing commands

## How to Run directly client dev server fron console (without docker)

- Go to project directory
- type `npm i `
- type `npm run dev`

## Troubleshooting

- I haven't used shadcn cause it was not described in requirements (just Tailwind).
- The project architecture wasn't described so i have selected custom architecture (Screaming architecture)
- I couldn't find api pagination for table so i have created FE side pagination
