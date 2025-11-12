"use client"

import { useEffect, useRef, type ReactNode } from "react"
import gsap from "gsap"
import { useInView } from "react-intersection-observer"

interface StaggerListProps {
  items: ReactNode[]
  staggerDelay?: number
  duration?: number
  className?: string
}

export function StaggerList({ items, staggerDelay = 0.1, duration = 0.5, className = "" }: StaggerListProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const itemRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!inView) return

    gsap.fromTo(
      itemRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger: staggerDelay,
        ease: "power3.out",
      },
    )
  }, [inView, staggerDelay, duration])

  return (
    <div ref={ref} className={className}>
      {items.map((item, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) itemRefs.current[index] = el
          }}
        >
          {item}
        </div>
      ))}
    </div>
  )
}
