"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function DataFlowAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 2
        this.speedY = (Math.random() - 0.5) * 2
        this.color = `rgba(0, 153, 255, ${Math.random() * 0.5 + 0.2})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles - adjust count based on screen size
    const particles: Particle[] = []
    const isMobile = window.innerWidth < 768
    const particleCount = isMobile
      ? Math.min(30, Math.floor((canvas.width * canvas.height) / 15000))
      : Math.min(50, Math.floor((canvas.width * canvas.height) / 10000))

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections - reduce connection distance on mobile
      const connectionDistance = isMobile ? 80 : 100
      ctx.strokeStyle = "rgba(0, 153, 255, 0.05)"
      ctx.lineWidth = 0.5

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize and cleanup
    const handleResize = () => {
      setCanvasDimensions()
      particles.length = 0
      const newParticleCount =
        window.innerWidth < 768
          ? Math.min(30, Math.floor((canvas.width * canvas.height) / 15000))
          : Math.min(50, Math.floor((canvas.width * canvas.height) / 10000))

      for (let i = 0; i < newParticleCount; i++) {
        particles.push(new Particle())
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70 z-0" />
}

export function TerminalText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <motion.div
      className={`font-mono text-primary inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="mr-2">$</span>
      {text}
      <span className="animate-pulse">_</span>
    </motion.div>
  )
}

export function DataMetric({
  value,
  label,
  icon,
  className = "",
}: {
  value: string | number
  label: string
  icon: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={`bg-card p-4 rounded-lg border border-border ${className}`}
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 153, 255, 0.3)" }}
    >
      <div className="flex items-center gap-3">
        <div className="text-primary">{icon}</div>
        <div>
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-xs text-muted-foreground">{label}</div>
        </div>
      </div>
    </motion.div>
  )
}

export function CodeSnippet({ code, language = "python" }: { code: string; language?: string }) {
  return (
    <div className="code-block font-mono text-sm">
      <pre className="text-muted-foreground">
        <code>{code}</code>
      </pre>
    </div>
  )
}
