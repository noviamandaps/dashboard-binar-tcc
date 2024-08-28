# Use an official Node runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Create the uploads directory
RUN mkdir -p ./app/resources/static/assets/uploads

# Set permissions for the uploads directory
RUN chmod 777 ./app/resources/static/assets/uploads

# Set environment variable for upload path
ENV UPLOAD_PATH=/usr/src/app/app/resources/static/assets/uploads

# Expose the port the app runs on
EXPOSE 8080

# Command to run the application
CMD ["npm", "start"]