import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import AdminDashboard from "@/components/admin-dashboard"

export const metadata = {
  title: "Admin Dashboard - Cornerstone Constructions",
  robots: {
    index: false,
    follow: false,
  },
}

export default async function AdminPage() {
  const cookieStore = await cookies()
  const adminToken = cookieStore.get("admin_token")

  if (!adminToken) {
    redirect("/admin/login")
  }

  return <AdminDashboard />
}
