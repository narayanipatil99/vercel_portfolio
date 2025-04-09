"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function SocialBar() {
  // Add client-side rendering protection
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="fixed left-6 bottom-0 z-10 hidden md:flex flex-col gap-6 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5, scale: 1.1 }}
      >
        <Link
          href="https://github.com/narayanipatil99"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 flex items-center justify-center text-foreground/80 hover:text-primary hover:border-primary transition-colors"
        >
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ y: -5, scale: 1.1 }}
      >
        <Link
          href="https://www.linkedin.com/in/narayani-patil/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 flex items-center justify-center text-foreground/80 hover:text-primary hover:border-primary transition-colors"
        >
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ y: -5, scale: 1.1 }}
      >
        <a
          href="mailto:narayanipatil99@gmail.com"
          className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 flex items-center justify-center text-foreground/80 hover:text-primary hover:border-primary transition-colors"
        >
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </a>
      </motion.div>

      <div className="h-24 w-px bg-primary/20"></div>
    </div>
  )
}
