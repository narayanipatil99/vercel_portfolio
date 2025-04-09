"use client"

import type React from "react"
import { motion } from "framer-motion"

interface AnimatedGradientBorderProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedGradientBorder({ children, className = "" }: AnimatedGradientBorderProps) {
  return (
    <div className={`relative rounded-xl p-[1px] overflow-hidden group ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary/20 to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-primary"
        style={{
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <div className="relative bg-background rounded-xl z-10">{children}</div>
    </div>
  )
}
