"use client"

import type React from "react"

import { useEffect, useRef } from "react"

export function AuroraBackground({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = document.createElement("canvas")
    if (!containerRef.current) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    containerRef.current.appendChild(canvas)

    const w = (canvas.width = window.innerWidth)
    const h = (canvas.height = window.innerHeight)

    const waves = []
    const time = { value: 0 }

    // Create waves
    for (let i = 0; i < 3; i++) {
      waves.push({
        y: h * (0.3 + i * 0.2),
        amplitude: 50 + i * 20,
        frequency: 0.005 + i * 0.001,
        phase: i * Math.PI,
        color: `hsl(${40 + i * 30}, 100%, 60%)`,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.globalAlpha = 0.7

      waves.forEach((wave) => {
        ctx.strokeStyle = wave.color
        ctx.lineWidth = 2
        ctx.beginPath()

        for (let x = 0; x < w; x += 5) {
          const y = wave.y + Math.sin((x * wave.frequency + time.value * 0.01 + wave.phase) * Math.PI) * wave.amplitude
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }

        ctx.stroke()
      })

      time.value++
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.remove()
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <div className="relative z-10">{children}</div>
    </div>
  )
}
