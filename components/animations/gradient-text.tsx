"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

interface GradientTextProps {
  text: string
  className?: string
}

export function GradientText({ text, className = "" }: GradientTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const element = containerRef.current
    const backgroundSize = "200% 200%"

    gsap.to(element, {
      backgroundPosition: "200% 0%",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })
  }, [])

  return (
    <div
      ref={containerRef}
      className={`bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_200%] text-transparent bg-clip-text ${className}`}
    >
      {text}
    </div>
  )
}
