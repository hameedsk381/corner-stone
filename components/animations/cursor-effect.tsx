"use client"

import { useEffect, useRef, useState } from "react"

export function CursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const initCursor = () => {
      setIsVisible(true)
    }

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
    }

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform += " scale(1.5)"
        cursorRef.current.style.borderColor = "var(--primary)"
        cursorRef.current.style.backgroundColor = "var(--primary)"
        cursorRef.current.style.opacity = "0.2"
      }
    }

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = cursorRef.current.style.transform.replace(" scale(1.5)", "")
        cursorRef.current.style.borderColor = "var(--foreground)"
        cursorRef.current.style.backgroundColor = "transparent"
        cursorRef.current.style.opacity = "1"
      }
    }

    // Initialize cursor
    initCursor()

    // Add event listeners
    window.addEventListener("mousemove", moveCursor)
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-foreground pointer-events-none z-[9999] mix-blend-difference transition-all duration-200 ease-out"
      style={{ transform: "translate3d(-100%, -100%, 0)" }}
    />
  )
}