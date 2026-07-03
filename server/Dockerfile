# Use Node.js for backend
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Expose port (default is usually 5000 or 3000)
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
