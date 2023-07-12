# Use the official image for node.js
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port that your app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
