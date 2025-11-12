# Use Bun alpine image as base for building
FROM oven/bun:1.1-alpine as builder

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

# Use a smaller image for the final stage
FROM oven/bun:1.1-alpine-slim

# Set working directory
WORKDIR /app

# Install runtime dependencies
RUN apk add --no-cache python3

# Copy necessary files from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/bun.lockb ./bun.lockb
COPY --from=builder /app/public ./public

# Create next build cache directory
RUN mkdir -p .next/cache

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["bun", "start"]