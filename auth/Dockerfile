# Specify a base image
FROM node:alpine

# Commands to install additional programs (deps)
WORKDIR /app
COPY package.json .
RUN npm install --only=prod 
COPY . .

# Command to run on container startup
CMD ["npm", "start"]