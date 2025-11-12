"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

interface RotatingTextProps {
  words: string[]
  className?: string
}

export function RotatingText({ words, className = "" }: RotatingTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || words.length === 0) return

    const container = containerRef.current

    // Create initial text elements
    words.forEach((word, index) => {
      const span = document.createElement("span")
      span.textContent = word
      span.style.position = "absolute"
      span.style.opacity = index === 0 ? "1" : "0"
      container.appendChild(span)
    })

    const spans = container.querySelectorAll("span")

    // Animate rotation through words
    gsap.timeline({ repeat: -1 }).to(spans, {
      duration: 0.5,
      opacity: 0,
      stagger: {
        each: (3 / spans.length) * 1000,
        from: 0,
      },
      ease: "power2.inOut",
    })

    // Set first element to visible
    gsap.to(spans[0], { opacity: 1, delay: 0 })

    // Rotate through words
    for (let i = 0; i < spans.length; i++) {
      gsap.to(spans[i], {
        opacity: 1,
        delay: i * 3,
        duration: 0.5,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: (spans.length - 1) * 3,
      })
    }
  }, [words])

  return (
    <div
      ref={containerRef}
      className={`relative inline-block h-[1em] ${className}`}
      style={{ perspective: "1000px" }}
    />
  )
}
