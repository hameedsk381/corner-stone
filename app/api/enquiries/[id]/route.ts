import { type NextRequest, NextResponse } from "next/server"
import { deleteEnquiry, updateEnquiryStatus } from "@/lib/db"

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    deleteEnquiry(id)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete enquiry" }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { status } = await request.json()
    const id = Number.parseInt(params.id)
    updateEnquiryStatus(id, status)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update enquiry" }, { status: 500 })
  }
}
