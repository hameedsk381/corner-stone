import Database from "better-sqlite3"
import path from "path"
import fs from "fs"

let db: Database.Database | null = null

export function getDb() {
  if (!db) {
    const dbPath = process.env.DATABASE_URL || path.join(process.cwd(), "cornerstone.db")
    db = new Database(dbPath)
    db.pragma("journal_mode = WAL")
  }
  return db
}

export function initializeDatabase() {
  const db = getDb()
  
  // Read and execute the initialization SQL script
  const initSqlPath = path.join(process.cwd(), "scripts", "init-db.sql")
  if (fs.existsSync(initSqlPath)) {
    const initSql = fs.readFileSync(initSqlPath, "utf8")
    // Split the SQL script into individual statements and execute each one
    const statements = initSql.split(";").filter(stmt => stmt.trim() !== "")
    for (const statement of statements) {
      if (statement.trim() !== "") {
        db.exec(statement)
      }
    }
  }
}

export interface Enquiry {
  id?: number
  name: string
  email: string
  phone?: string
  company?: string
  project_type?: string
  message: string
  status?: string
  created_at?: string
  updated_at?: string
}

export function addEnquiry(enquiry: Enquiry) {
  const db = getDb()
  const stmt = db.prepare(`
    INSERT INTO enquiries (name, email, phone, company, project_type, message, status)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `)

  return stmt.run(
    enquiry.name,
    enquiry.email,
    enquiry.phone || null,
    enquiry.company || null,
    enquiry.project_type || null,
    enquiry.message,
    "new",
  )
}

export function getEnquiries(status?: string) {
  const db = getDb()
  let query = "SELECT * FROM enquiries"
  const params: any[] = []

  if (status) {
    query += " WHERE status = ?"
    params.push(status)
  }

  query += " ORDER BY created_at DESC"
  const stmt = db.prepare(query)
  return stmt.all(...params) as Enquiry[]
}

export function getEnquiryById(id: number) {
  const db = getDb()
  const stmt = db.prepare("SELECT * FROM enquiries WHERE id = ?")
  return stmt.get(id) as Enquiry | undefined
}

export function updateEnquiryStatus(id: number, status: string) {
  const db = getDb()
  const stmt = db.prepare(`
    UPDATE enquiries 
    SET status = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `)
  return stmt.run(status, id)
}

export function deleteEnquiry(id: number) {
  const db = getDb()
  const stmt = db.prepare("DELETE FROM enquiries WHERE id = ?")
  return stmt.run(id)
}
