"use client"

import Link from "next/link"
import { MessageCircle, Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)

  return (
    <footer className="bg-foreground text-background py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-secondary-foreground font-bold text-lg group-hover:rotate-6 transition-transform duration-300">
                CS
              </div>
              <span className="text-2xl font-bold">Cornerstone</span>
            </div>
            <p className="text-background/80 max-w-md">
              Premier construction and architectural consultancy services with decades of experience delivering excellence.
            </p>
            <a href="https://wa.me/916281417779" target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                variant="outline"
                className="gap-2 bg-background text-foreground hover:bg-background/90 group relative overflow-hidden"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="relative z-10">WhatsApp Us</span>
                <span className="absolute inset-0 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </Button>
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-background/80 hover:text-background transition-colors group flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-background/80 hover:text-background transition-colors group flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-background/80 hover:text-background transition-colors group flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-background/80 hover:text-background transition-colors group flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform"></span>
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-background/80 hover:text-background transition-colors group flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform"></span>
                  Architectural Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-background/80 hover:text-background transition-colors group flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform"></span>
                  Structural Engineering
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-background/80 hover:text-background transition-colors group flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform"></span>
                  Project Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-background/80 hover:text-background transition-colors group flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform"></span>
                  Cost Estimation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 group">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <a href="tel:+916281417779" className="text-background/80 hover:text-background transition-colors">
                  +91 6281417779
                </a>
              </li>
              <li className="flex gap-3 group">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <a
                  href="mailto:cornerstoneconstructions3@gmail.com"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  cornerstoneconstructions3@gmail.com
                </a>
              </li>
              <li className="flex gap-3 group">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <span className="text-background/80">Visakhapatnam – 530018</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-background/80">© {currentYear} Cornerstone Constructions. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/80 hover:text-background transition-colors relative group"
              onMouseEnter={() => setHoveredSocial('facebook')}
              onMouseLeave={() => setHoveredSocial(null)}
            >
              <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
              {hoveredSocial === 'facebook' && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-background text-foreground text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  Facebook
                </span>
              )}
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/80 hover:text-background transition-colors relative group"
              onMouseEnter={() => setHoveredSocial('linkedin')}
              onMouseLeave={() => setHoveredSocial(null)}
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              {hoveredSocial === 'linkedin' && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-background text-foreground text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  LinkedIn
                </span>
              )}
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/80 hover:text-background transition-colors relative group"
              onMouseEnter={() => setHoveredSocial('twitter')}
              onMouseLeave={() => setHoveredSocial(null)}
            >
              <Twitter className="w-6 h-6 group-hover:scale-110 transition-transform" />
              {hoveredSocial === 'twitter' && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-background text-foreground text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  Twitter
                </span>
              )}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
