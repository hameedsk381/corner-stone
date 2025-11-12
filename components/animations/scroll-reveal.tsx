"use client"

import { type ReactNode, useEffect } from "react"
import gsap from "gsap"
import { useInView } from "react-intersection-observer"

interface ScrollRevealProps {
  children: ReactNode
  direction?: "left" | "right" | "up" | "down"
  delay?: number
  className?: string
}

export function ScrollReveal({ children, direction = "up", delay = 0, className = "" }: ScrollRevealProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  useEffect(() => {
    if (!inView) return

    const element = ref.current
    if (!element) return

    const fromValues: Record<string, any> = {
      up: { y: 100, opacity: 0 },
      down: { y: -100, opacity: 0 },
      left: { x: -100, opacity: 0 },
      right: { x: 100, opacity: 0 },
    }

    gsap.fromTo(
      element,
      fromValues[direction],
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay,
        ease: "power3.out",
      }
    )
  }, [inView, direction, delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
