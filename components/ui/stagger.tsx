"use client"

import { ReactNode, useRef } from "react"
import { motion, useInView, useReducedMotion } from "motion/react"

// Shared item variant — each child fades up from a slight blur, like BlurFade but
// timed relative to its siblings so the group cascades (stagger).
const itemVariants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

type StaggerProps = {
  children: ReactNode
  className?: string
  /** delay before the first child starts animating (seconds) */
  delayChildren?: number
  /** time between each child (seconds) */
  stagger?: number
  /** how much of the container must be visible to trigger (0–1) */
  amount?: number
}

/**
 * Stagger — Animate several items one after another with a small delay between each,
 * creating a cascade. Wrap the list/grid in <Stagger> and each item in <StaggerItem>
 * (StaggerItem must be a *direct* child of Stagger for the cascade to propagate).
 */
export function Stagger({
  children,
  className,
  delayChildren = 0.05,
  stagger = 0.08,
  amount = 0.15,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount })
  const reduce = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: {},
        visible: { transition: { delayChildren, staggerChildren: stagger } },
      }}
      initial={reduce ? "visible" : "hidden"}
      animate={reduce ? "visible" : inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}
