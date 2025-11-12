"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

interface FlipWordProps {
  words: string[]
  className?: string
}

export function FlipWord({ words, className = "" }: FlipWordProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const wordRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const timeline = gsap.timeline({ repeat: -1 })

    words.forEach((word, index) => {
      timeline.fromTo(
        wordRefs.current[index],
        {
          rotationX: -90,
          opacity: 0,
        },
        {
          rotationX: 0,
          opacity: 1,
          duration: 0.6,
          ease: "back.out",
        },
        index * 2,
      )

      timeline.to(
        wordRefs.current[index],
        {
          rotationX: 90,
          opacity: 0,
          duration: 0.6,
          ease: "back.in",
        },
        index * 2 + 1.4,
      )
    })
  }, [words])

  return (
    <div ref={containerRef} className={`relative h-[1em] ${className}`} style={{ perspective: "1000px" }}>
      {words.map((word, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) wordRefs.current[index] = el
          }}
          className="absolute top-0 left-0"
          style={{ opacity: 0 }}
        >
          {word}
        </div>
      ))}
    </div>
  )
}
