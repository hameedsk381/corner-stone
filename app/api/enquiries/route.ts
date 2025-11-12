import { type NextRequest, NextResponse } from "next/server"
import { addEnquiry, type Enquiry } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Enquiry

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Add to database
    const result = addEnquiry({
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      project_type: body.project_type,
      message: body.message,
    })

    return NextResponse.json({
      success: true,
      id: result.lastID,
      message: "Enquiry submitted successfully",
    })
  } catch (error) {
    console.error("Enquiry submission error:", error)
    return NextResponse.json({ error: "Failed to submit enquiry" }, { status: 500 })
  }
}

export async function GET() {
  try {
    // This will be protected by auth middleware in production
    const { getEnquiries } = await import("@/lib/db")
    const enquiries = getEnquiries()
    return NextResponse.json(enquiries)
  } catch (error) {
    console.error("Failed to fetch enquiries:", error)
    return NextResponse.json({ error: "Failed to fetch enquiries" }, { status: 500 })
  }
}
