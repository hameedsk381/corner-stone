"use client"

import { Building2, Users, Trophy, CheckCircle, Award, Clock } from "lucide-react"
import { useState } from "react"
import { FadeInUp } from "@/components/animations/fade-in-up"

const features = [
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Quality Assurance",
    description: "Rigorous quality control processes ensure every project meets the highest standards."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Industry Recognition",
    description: "Award-winning solutions that set new benchmarks in construction excellence."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Timely Delivery",
    description: "Commitment to project schedules with proven track record of on-time completion."
  }
]

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <FadeInUp>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium">
                <span>About Us</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Building Tomorrow's <span className="text-primary">Landmarks</span>
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl">
                With over two decades of expertise, we transform visions into reality through innovative 
                construction solutions and unwavering commitment to excellence.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>
          
          {/* Right content - Stats */}
          <FadeInUp delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <Building2 className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <Users className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-muted-foreground">Expert Team</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <Trophy className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground">25+</div>
                <div className="text-muted-foreground">Industry Awards</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <Clock className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-muted-foreground">On-Time Delivery</div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}
