"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { LogOut, Trash2, Eye } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Enquiry {
  id: number
  name: string
  email: string
  phone?: string
  company?: string
  project_type?: string
  message: string
  status: string
  created_at: string
}

export default function AdminDashboard() {
  const router = useRouter()
  const { toast } = useToast()
  const [enquiries, setEnquiries] = useState<Enquiry[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null)

  useEffect(() => {
    fetchEnquiries()
  }, [])

  const fetchEnquiries = async () => {
    try {
      const response = await fetch("/api/enquiries")
      if (!response.ok) throw new Error("Failed to fetch")
      const data = await response.json()
      setEnquiries(data)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch enquiries",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteEnquiry = async (id: number) => {
    if (!confirm("Are you sure you want to delete this enquiry?")) return

    try {
      const response = await fetch(`/api/enquiries/${id}`, { method: "DELETE" })
      if (!response.ok) throw new Error("Failed to delete")

      setEnquiries((prev) => prev.filter((e) => e.id !== id))
      toast({
        title: "Success",
        description: "Enquiry deleted",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete enquiry",
        variant: "destructive",
      })
    }
  }

  const handleLogout = async () => {
    document.cookie = "admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    router.push("/admin/login")
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800"
      case "contacted":
        return "bg-yellow-100 text-yellow-800"
      case "converted":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" onClick={handleLogout} className="gap-2 bg-transparent">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Enquiries Overview</CardTitle>
              <CardDescription>Total enquiries: {enquiries.length}</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Enquiries</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p>Loading enquiries...</p>
            ) : enquiries.length === 0 ? (
              <p className="text-muted-foreground">No enquiries yet</p>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Project Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {enquiries.map((enquiry) => (
                      <TableRow key={enquiry.id}>
                        <TableCell className="font-medium">{enquiry.name}</TableCell>
                        <TableCell>{enquiry.email}</TableCell>
                        <TableCell>{enquiry.project_type || "-"}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(enquiry.status)}>{enquiry.status}</Badge>
                        </TableCell>
                        <TableCell>{new Date(enquiry.created_at).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm" onClick={() => setSelectedEnquiry(enquiry)}>
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleDeleteEnquiry(enquiry.id)}>
                              <Trash2 className="w-4 h-4 text-destructive" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>

        {selectedEnquiry && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Enquiry Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">{selectedEnquiry.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{selectedEnquiry.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{selectedEnquiry.phone || "-"}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Company</p>
                  <p className="font-medium">{selectedEnquiry.company || "-"}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Message</p>
                <p className="font-medium">{selectedEnquiry.message}</p>
              </div>
              <Button variant="outline" onClick={() => setSelectedEnquiry(null)}>
                Close
              </Button>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
