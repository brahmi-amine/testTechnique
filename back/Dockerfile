# Use the official Node.js 14 as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to work directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source inside Docker image
COPY . .

# Expose port 3001 to the outside once the container has launched
EXPOSE 3001

# Define the command to run your app using CMD which defines your runtime
CMD ["npm", "start"]
