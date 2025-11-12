import { initializeDatabase } from "../lib/db"

// Initialize the database
try {
  initializeDatabase()
  console.log("Database initialized successfully")
} catch (error) {
  console.error("Failed to initialize database:", error)
}