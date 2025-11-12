# Use Bun alpine image as base
FROM oven/bun:1-alpine

# Set working directory
WORKDIR /app

# Install dependencies needed for sqlite3
RUN apk add --no-cache python3 build-base

# Copy package files
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy all files
COPY . .

# Build the Next.js application
RUN bun run build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["bun", "start"]