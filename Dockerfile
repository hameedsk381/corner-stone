# Use Node.js 18 alpine image as base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies needed for sqlite3
RUN apk add --no-cache python3 build-base

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy all files
COPY . .

# Build the Next.js application
RUN pnpm run build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]