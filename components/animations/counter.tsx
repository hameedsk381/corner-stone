"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { useInView } from "react-intersection-observer"

interface CounterProps {
  end: number
  start?: number
  duration?: number
  decimals?: number
  suffix?: string
  className?: string
}

export function Counter({ end, start = 0, duration = 2, decimals = 0, suffix = "", className = "" }: CounterProps) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!inView || !textRef.current) return

    const obj = { value: start }

    gsap.to(obj, {
      value: end,
      duration,
      ease: "power3.out",
      onUpdate() {
        if (textRef.current) {
          textRef.current.textContent = obj.value.toFixed(decimals) + suffix
        }
      },
    })
  }, [inView, start, end, duration, decimals, suffix])

  return (
    <span ref={textRef} className={className}>
      {start}
    </span>
  )
}
