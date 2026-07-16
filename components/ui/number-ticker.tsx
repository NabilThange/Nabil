"use client"

import { ReactNode, useEffect, useRef, useState } from "react"
import { useInView } from "motion/react"

type NumberTickerProps = {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

/**
 * Number ticker — Digits rolling or counting up to a value. Animates once when it
 * scrolls into view. Respects prefers-reduced-motion by showing the final value.
 */
export function NumberTicker({
  value,
  prefix = "",
  suffix = "",
  duration = 1.6,
  className,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-15% 0px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value)
      return
    }

    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000))
      const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
      setDisplay(Math.round(eased * value))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  )
}
