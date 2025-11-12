"use client"

import { Building2, PenTool, Hammer, BarChart3, Map, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeInUp } from "@/components/animations/fade-in-up"

const services = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Plan Approvals",
    description: "GVMC & VMRDA, LRS, BPS approvals for your projects",
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Plans & Design",
    description: "Architectural drawings, elevations, electrical, plumbing, and 3D views",
  },
  {
    icon: <Hammer className="w-8 h-8" />,
    title: "Structural Design",
    description: "Professional structural drawings and comprehensive project management",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Cost Estimation",
    description: "Detailed BOQ, technical specifications, and site assessments",
  },
  {
    icon: <Map className="w-8 h-8" />,
    title: "Surveying",
    description: "Building markings, layouts, FMB drawings, and revenue surveys",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Civil Engineering",
    description: "Complete construction, projects, and development solutions",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInUp>
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <span>Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Comprehensive <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end construction and architectural consultancy services tailored to your unique needs
            </p>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeInUp key={index} delay={index * 0.1}>
              <Card className="h-full bg-white rounded-xl shadow-md border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/20">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground font-semibold group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
