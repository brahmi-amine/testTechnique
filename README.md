# HyperMail Messaging App

## Overview
HyperMail is a messaging application designed to combine essential features for managing messages. The app is split into two main components: a backend service (`back`) built with Node.js and TypeScript using MongoDB, and a frontend (`front`) built with React.js. This README provides guidance on setting up and running the application using Docker and Docker Compose, ensuring a streamlined deployment process.

## Prerequisites
- Docker and Docker Compose installed on your system
- Node.js and npm installed for local development and testing

## Environment Setup

### Backend `.env` Configuration
Create a `.env` file in the `back` directory with the following content:
```
APP_PORT=3001
SECRET_KEY=qwe1234
MONGO_URL=mongodb://admin:rtfgcv@localhost:27017/hypermail?authSource=admin
```

### Frontend `.env` Configuration
Create a `.env` file in the `front` directory with the following content:
```
REACT_APP_API=http://localhost:3001/api/v1/
REACT_APP_BASE_URL=http://localhost:3001
```

## Local Development Setup

### Node.js Backend

#### Installing Dependencies
Navigate to the `back` directory and run:
```
cd back
npm install
```

#### Building the Application
To compile the TypeScript code, run:
```
npm run build
```

#### Starting the Application
To start the backend service, run:
```
npm start
```

#### Running Tests
To execute tests, run:
```
npm test
```

### React.js Frontend

#### Installing Dependencies
Navigate to the `front` directory and run:
```
cd front
npm install
```

#### Starting the Application
To start the React application, run:
```
npm start
```

## Docker and Docker Compose Setup

To facilitate deployment, a `docker-compose.yml` file is used to containerize and run both the `back` and `front` components along with a MongoDB service.

### Docker Compose Configuration
Ensure you have a `docker-compose.yml` file at the root of your project with the necessary configurations for the backend, frontend, and MongoDB services.

### Starting the Application with Docker Compose
To start the application using Docker Compose, run the following command from the root directory of your project:
```
docker-compose up --build
```

This command builds the images (if not already built) and starts the containers based on the configurations provided in the `docker-compose.yml` file. The `--build` option ensures that the images are rebuilt if there are any changes.

## Accessing the Application
Once the containers are up and running, you can access the frontend of the application by navigating to `http://localhost:3000` in your web browser.

## Conclusion
This README provides a comprehensive guide to setting up and running the HyperMail messaging application using Docker and Docker Compose, along with instructions for local development and environment configuration. Ensure all environment variables are correctly set up as per the instructions to avoid any issues during deployment or local development.
```