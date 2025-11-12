"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AnimatedStatProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
  prefix?: string
}

export function AnimatedStat({ icon, value, label, suffix = "", prefix = "" }: AnimatedStatProps) {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true })
  const valueRef = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (inView && !hasAnimated && valueRef.current) {
      setHasAnimated(true)
      
      const obj = { val: 0 }
      gsap.to(obj, {
        val: value,
        duration: 2,
        ease: "power3.out",
        onUpdate: () => {
          if (valueRef.current) {
            valueRef.current.textContent = `${prefix}${Math.floor(obj.val)}${suffix}`
          }
        }
      })
    }
  }, [inView, value, hasAnimated, prefix, suffix])

  return (
    <div ref={ref} className="group perspective-1000">
      <Card className="text-center transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 border-border hover:border-primary/50">
        <CardHeader>
          <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <div className="p-3 bg-primary/10 rounded-full">
              {icon}
            </div>
          </div>
          <CardTitle className="text-4xl md:text-5xl font-bold">
            <span ref={valueRef}>{prefix}0{suffix}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground group-hover:text-foreground transition-colors">
            {label}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}