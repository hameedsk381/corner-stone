"use client"

import { type ReactNode, useEffect } from "react"
import gsap from "gsap"
import { useInView } from "react-intersection-observer"

interface FadeInUpProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function FadeInUp({ children, delay = 0, className = "" }: FadeInUpProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    if (!inView) return

    const element = ref.current
    if (!element) return

    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: "power3.out",
      },
    )
  }, [inView, delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
