import Header from "@/components/header"
import Footer from "@/components/footer"
import Contact from "@/components/contact"

export const metadata = {
  title: "Contact Us - Cornerstone Constructions",
  description: "Get in touch with our team for your construction and consultancy needs.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          Have a project in mind? Get in touch with our team today.
        </p>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
