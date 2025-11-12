"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BlurText } from "@/components/animations/blur-text"
import { AnimatedContent } from "@/components/animations/animated-content"
import { useState, useEffect } from "react"
import { TextReveal } from "@/components/animations/text-reveal"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving gradient orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full filter blur-3xl opacity-50 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/15 rounded-full filter blur-3xl opacity-50 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-secondary/15 rounded-full filter blur-3xl opacity-50 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/5 right-1/5 w-16 h-16 border-2 border-primary/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/3 left-1/6 w-12 h-12 bg-accent/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-2/5 left-2/3 w-20 h-1 bg-primary/30 rotate-12 animate-pulse"></div>
      </div>

      {/* Grid overlay for modern tech look */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium animate-fade-in-up">
                Award Winning Construction
              </div>
              <TextReveal
                text="Building Excellence in Construction"
                className="text-5xl md:text-6xl font-bold leading-tight text-balance bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
                delay={0.3}
              />
              <AnimatedContent direction="horizontal" distance={50} delay={0.6}>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Cornerstone Constructions & Consultancy - Your trusted partner in architectural design, structural
                  engineering, and civil construction.
                </p>
              </AnimatedContent>
            </div>
            <AnimatedContent direction="vertical" distance={30} delay={0.9}>
              <div className="flex gap-4 flex-wrap">
                <Link href="/contact">
                  <Button size="lg" className="gap-2 group relative overflow-hidden">
                    <span className="relative z-10">Get in Touch</span>
                    <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                    <span className="absolute inset-0 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="group">
                    <span className="relative z-10">Explore Services</span>
                    <ArrowRight className="w-4 h-4 ml-2 relative z-10 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </AnimatedContent>
          </div>
          <AnimatedContent direction="horizontal" distance={100} delay={0.2}>
            <div className="relative h-96 rounded-2xl overflow-hidden hidden md:block group perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 backdrop-blur-sm rounded-2xl border border-primary/20"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/50 group-hover:rotate-y-3 group-hover:scale-105 transition-all duration-700">
                <img
                  src="/modern-construction-building-architecture.jpg"
                  alt="Modern construction project"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
      
      
    </section>
  )
}
