# Use Node.js runtime as the base image for backend
FROM node:14

# Create and set the working directory
WORKDIR /app

# Copy the backend code into the container
COPY backend/ /app

# Install dependencies for the backend
RUN npm install

# Expose port 3000, which is the default port for the backend
EXPOSE 3000

# Command to start the backend server
CMD ["node", "server.js"]
