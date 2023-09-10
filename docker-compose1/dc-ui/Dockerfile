# Use an official Nginx runtime as the base image
FROM nginx:alpine

# Copy your HTML file and JavaScript file to the Nginx web server directory
COPY index.html /usr/share/nginx/html/

# Expose port 80, which is the default port for HTTP traffic
EXPOSE 80

# Start the Nginx web server when the container starts
CMD ["nginx", "-g", "daemon off;"]
