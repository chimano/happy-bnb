# Use an official Python runtime as a parent image
FROM node:11

# Set the working directory to /app
WORKDIR /app

COPY package.json ./



RUN npm install

COPY . .
# Make port 80 available to the world outside this container
EXPOSE 8080

# Run app.py when the container launches
CMD ["node", "app.js"]