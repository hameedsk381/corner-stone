import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import About from "@/components/about"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import { CursorEffect } from "@/components/animations/cursor-effect"

export const metadata = {
  title: "Cornerstone Constructions - Premium Construction & Consultancy",
  description: "Expert architectural design, structural engineering, and construction consultancy services.",
  openGraph: {
    title: "Cornerstone Constructions - Premium Construction & Consultancy",
    description: "Expert architectural design, structural engineering, and construction consultancy services.",
    type: "website",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <CursorEffect />
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <CTA />
      <Footer />
    </div>
  )
}
