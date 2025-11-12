"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { useInView } from "react-intersection-observer"

interface BlurTextProps {
  text: string
  delay?: number
  duration?: number
  className?: string
}

export function BlurText({ text, delay = 0, duration = 0.8, className = "" }: BlurTextProps) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })

  useEffect(() => {
    if (!inView) return

    const element = ref.current
    if (!element) return

    const words = element.querySelectorAll(".blur-word")
    gsap.fromTo(
      words,
      { opacity: 0, filter: "blur(10px)" },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration,
        stagger: 0.05,
        delay,
        ease: "power3.out",
      },
    )
  }, [inView, delay, duration])

  return (
    <div ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="blur-word inline-block mr-2">
          {word}
        </span>
      ))}
    </div>
  )
}
