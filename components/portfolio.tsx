"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { useState } from "react"
import { FloatingElement } from "@/components/animations/floating-element"

const projects = [
  {
    id: 1,
    title: "Modern Office Complex",
    description: "A state-of-the-art 50,000 sq ft commercial office space with sustainable features.",
    category: "Commercial",
    image: "/modern-office-building.png",
  },
  {
    id: 2,
    title: "Luxury Residential Community",
    description: "200-unit luxury residential development with premium amenities.",
    category: "Residential",
    image: "/luxury-residential-apartments.jpg",
  },
  {
    id: 3,
    title: "Industrial Manufacturing Facility",
    description: "Advanced manufacturing facility with optimized logistics and safety features.",
    category: "Industrial",
    image: "/industrial-warehouse.png",
  },
  {
    id: 4,
    title: "Shopping Mall Renovation",
    description: "Complete renovation and modernization of 100,000 sq ft shopping mall.",
    category: "Commercial",
    image: "/shopping-mall-interior.png",
  },
]

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <FloatingElement 
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          floatIntensity={15}
          rotateIntensity={8}
          delay={0}
        />
        <FloatingElement 
          className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl"
          floatIntensity={20}
          rotateIntensity={10}
          delay={0.5}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium">
            Our Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful construction and architectural projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
              <div 
                className="group perspective-1000"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Card className={`overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 border-border ${
                  hoveredId === project.id ? 'rotate-y-2 scale-105 z-10' : ''
                }`}>
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary" className="mt-4">
                      {project.category}
                    </Badge>
                  </CardHeader>
                </Card>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
