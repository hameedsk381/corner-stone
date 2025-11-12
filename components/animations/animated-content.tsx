"use client"

import { useEffect, type ReactNode } from "react"
import gsap from "gsap"
import { useInView } from "react-intersection-observer"

interface AnimatedContentProps {
  children: ReactNode
  direction?: "vertical" | "horizontal"
  distance?: number
  duration?: number
  delay?: number
  className?: string
}

export function AnimatedContent({
  children,
  direction = "vertical",
  distance = 100,
  duration = 0.8,
  delay = 0,
  className = "",
}: AnimatedContentProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    if (!inView) return

    const element = ref.current
    if (!element) return

    const isVertical = direction === "vertical"
    const fromValue = isVertical ? { y: distance, opacity: 0 } : { x: distance, opacity: 0 }

    gsap.fromTo(element, fromValue, {
      y: isVertical ? 0 : undefined,
      x: isVertical ? undefined : 0,
      opacity: 1,
      duration,
      delay,
      ease: "power3.out",
    })
  }, [inView, direction, distance, duration, delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
