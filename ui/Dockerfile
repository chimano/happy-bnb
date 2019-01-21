# Use an official Python runtime as a parent image
FROM node:11

#TODO: Ensure same version of npm used in containers

# Set the working directory to /app
WORKDIR /app

COPY package*.json ./

RUN npm install

# Run app.py when the container launches
CMD ["npm", "start"]
