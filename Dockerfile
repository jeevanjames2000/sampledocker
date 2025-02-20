# Use an argument for the Node.js version
ARG NODE_VERSION=22.12.0

# Use a lightweight Node.js image
FROM node:${NODE_VERSION}-alpine


ENV NODE_ENV=production

# Set working directory
WORKDIR /usr/src/app

# Copy package files first for better caching
COPY package*.json ./


RUN npm i -g nodemon

# Install dependencies with cache mount optimization
RUN --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

# Copy the rest of the source code
COPY . .

# Use a non-root user for security
USER node

# Expose the application port
EXPOSE 7000

# Run the application
CMD ["npm", "run", "dev"]
