"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  className?: string
}

export function FadeIn({ children, direction = "up", delay = 0, className = "" }: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directions[direction] }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>
}

export function StaggerItem({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}

export function HoverCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FloatingIcon({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function PulsingIcon({ children, className = "" }: { children?: ReactNode; className?: string }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ParallaxContainer({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}

export function MouseParallax({
  children,
  strength = 20,
  className = "",
}: { children: ReactNode; strength?: number; className?: string }) {
  return <div className={className}>{children}</div>
}

export function ScrollProgressBar() {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
      style={{ scaleX: 0, transformOrigin: "0%" }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
    />
  )
}
