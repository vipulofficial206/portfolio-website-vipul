# Use Node.js for development
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Expose port 5173 for Vite
EXPOSE 5173

# Start the Vite development server on all interfaces
CMD ["npm", "run", "dev", "--", "--host"]
