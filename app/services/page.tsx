import Header from "@/components/header"
import Footer from "@/components/footer"
import Services from "@/components/services"

export const metadata = {
  title: "Our Services - Cornerstone Constructions",
  description:
    "Comprehensive construction and architectural consultancy services including design, engineering, and project management.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          We provide comprehensive construction and architectural consultancy services tailored to your project needs.
        </p>
        <Services />
      </main>
      <Footer />
    </div>
  )
}
