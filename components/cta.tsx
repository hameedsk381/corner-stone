"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { FloatingElement } from "@/components/animations/floating-element"

export default function CTA() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-r from-primary/90 to-accent/90 text-primary-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement 
          className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"
          floatIntensity={20}
          rotateIntensity={10}
          delay={0}
        />
        <FloatingElement 
          className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full filter blur-3xl"
          floatIntensity={15}
          rotateIntensity={8}
          delay={0.5}
        />
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-balance max-w-3xl mx-auto">
          Ready to Start Your <span className="bg-clip-text text-transparent bg-white">Project?</span>
        </h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Get in touch with our team today and let's bring your vision to life.
        </p>
        <Link href="/contact">
          <Button 
            size="lg" 
            variant="secondary" 
            className="gap-2 group relative overflow-hidden px-8 py-6 text-lg font-semibold"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="relative z-10">Get Started Now</span>
            <ArrowRight className={`w-5 h-5 relative z-10 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            <span className="absolute inset-0 bg-secondary/20 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
          </Button>
        </Link>
      </div>
    </section>
  )
}
