#!/bin/bash

case "$1" in
    "dev")
        echo "Starting development environment..."
        docker-compose -f docker-compose.dev.yml up --build
        ;;
    "prod")
        echo "Starting production environment..."
        docker-compose up --build
        ;;
    "build")
        echo "Building production image..."
        docker build -t webdev_task_01 .
        ;;
    "stop")
        echo "Stopping all containers..."
        docker-compose down
        docker-compose -f docker-compose.dev.yml down
        ;;
    "clean")
        echo "Cleaning up containers and images..."
        docker-compose down --rmi all
        docker-compose -f docker-compose.dev.yml down --rmi all
        ;;
    *)
        echo "Usage: $0 {dev|prod|build|stop|clean}"
        echo ""
        echo "Commands:"
        echo "  dev   - Start development environment with hot reload"
        echo "  prod  - Start production environment"
        echo "  build - Build production Docker image"
        echo "  stop  - Stop all running containers"
        echo "  clean - Stop containers and remove images"
        exit 1
        ;;
esac
