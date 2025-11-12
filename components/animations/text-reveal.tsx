"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
}

export function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const chars = textRef.current.querySelectorAll(".char")
    
    gsap.fromTo(
      chars,
      { 
        opacity: 0, 
        y: 50,
        rotationX: -90,
        transformStyle: "preserve-3d"
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.02,
        delay,
        ease: "back.out(1.7)",
      }
    )
  }, [delay])

  return (
    <div ref={textRef} className={className}>
      {text.split("").map((char, i) => (
        <span 
          key={i} 
          className="char inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  )
}