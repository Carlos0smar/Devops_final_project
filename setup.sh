#!/bin/bash


DOCKER_IMAGE_NAME="final-project-devops"


print_message() {
    echo "=========================="
    echo "$1"
    echo "=========================="
}



print_message "Installing dependencies..."
npm install


print_message "Running the application..."
npm start &


print_message "Building the Docker image..."
docker build -t $DOCKER_IMAGE_NAME .


print_message "Running the application with Docker..."
docker run -p 3000:3000 $DOCKER_IMAGE_NAME


print_message "Running tests..."
npm test
