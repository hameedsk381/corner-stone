import Header from "@/components/header"
import Footer from "@/components/footer"
import Portfolio from "@/components/portfolio"

export const metadata = {
  title: "Portfolio - Cornerstone Constructions",
  description: "Explore our portfolio of completed projects showcasing our expertise and quality workmanship.",
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          Discover the quality and innovation behind every project we undertake.
        </p>
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}
