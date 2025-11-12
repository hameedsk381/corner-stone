"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  floatIntensity?: number
  rotateIntensity?: number
  delay?: number
}

export function FloatingElement({ 
  children, 
  className = "", 
  floatIntensity = 10, 
  rotateIntensity = 5,
  delay = 0
}: FloatingElementProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const tl = gsap.timeline({ repeat: -1, yoyo: true, delay })
    
    tl.to(elementRef.current, {
      y: floatIntensity,
      rotation: rotateIntensity,
      duration: 3,
      ease: "sine.inOut"
    })
    .to(elementRef.current, {
      y: -floatIntensity,
      rotation: -rotateIntensity,
      duration: 3,
      ease: "sine.inOut"
    })
  }, [floatIntensity, rotateIntensity, delay])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}