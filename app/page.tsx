"use client"

import Link from "next/link"
import { Github, Mail, Linkedin, Calendar, GraduationCap, Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { SectionHeading } from "@/components/section-heading"
import { DataFlowAnimation, TerminalText, CodeSnippet } from "@/components/data-visualization"
import { ResumeModal } from "@/components/resume-modal"
import { SocialBar } from "@/components/social-bar"
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HoverCard,
  FloatingIcon,
  PulsingIcon,
  ParallaxContainer,
  MouseParallax,
} from "@/components/animations/motion-components"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrollY, setScrollY] = useState(0)
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Client-side only code
  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Update active section based on scroll position
      const sections = ["home", "about", "experience", "projects", "skills", "publications"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const openResume = () => setIsResumeOpen(true)
  const closeResume = () => setIsResumeOpen(false)

  // Prevent hydration errors by not rendering until client-side
  if (!isMounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background cyber-bg">
      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={closeResume} />

      {/* Social Bar */}
      <SocialBar />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-background/90 backdrop-blur-md shadow-md border-b border-primary/20" : ""
        }`}
      >
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-10 w-10 bg-primary/20 border border-primary/30 rounded-md flex items-center justify-center">
              <span className="font-bold text-primary">NP</span>
            </div>
            <span className="font-medium">Narayani Patil</span>
          </motion.div>

          <motion.nav
            className="hidden md:flex gap-6 items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {["home", "about", "experience", "projects", "skills"].map((section, index) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link
                  href={`#${section}`}
                  className={`hover:text-primary transition-colors relative ${
                    activeSection === section ? "text-primary font-medium" : "text-foreground/80"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      layoutId="activeSection"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <ThemeToggle />
          </motion.nav>

          <motion.div
            className="flex items-center gap-2 md:hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </motion.div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
              {["home", "about", "experience", "projects", "skills"].map((section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  className={`py-2 hover:text-primary transition-colors ${
                    activeSection === section ? "text-primary font-medium" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <ParallaxContainer>
        <section id="home" className="pt-28 pb-20 md:pt-48 md:pb-24 relative overflow-hidden futuristic-grid">
          <div className="absolute inset-0 z-0">
            <DataFlowAnimation />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <StaggerContainer className="max-w-3xl mx-auto space-y-8">
              <StaggerItem>
                <MouseParallax strength={40}>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-center tracking-tight leading-tight">
                    <span className="text-foreground">Hi, I'm </span>
                    <motion.span
                      className="text-primary glow-text block md:inline hero-animate-text"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5,
                        type: "spring",
                        stiffness: 100,
                      }}
                    >
                      Narayani Patil
                    </motion.span>
                  </h1>
                </MouseParallax>
              </StaggerItem>

              <StaggerItem>
                <div className="flex justify-center">
                  <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm px-4 py-2 text-base">
                    <PulsingIcon className="flex h-2 w-2 rounded-full bg-primary mr-2"></PulsingIcon>
                    <TerminalText text="data_engineer && ml_enthusiast" className="text-lg" />
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <p className="text-xl md:text-2xl text-muted-foreground text-center text-balance px-4 font-medium">
                  I transform complex data into meaningful insights and build scalable data pipelines.
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="flex gap-3 md:gap-4 justify-center flex-wrap px-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10 text-lg py-6 px-8"
                      onClick={openResume}
                    >
                      View Resume
                    </Button>
                  </motion.div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex gap-4 pt-4 justify-center">
                  <Link href="https://github.com/narayanipatil99" target="_blank" rel="noopener noreferrer">
                    <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-primary/10 hover:text-primary"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="https://www.linkedin.com/in/narayani-patil/" target="_blank" rel="noopener noreferrer">
                    <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-primary/10 hover:text-primary"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </motion.div>
                  </Link>
                  <a href="mailto:narayanipatil99@gmail.com">
                    <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-primary/10 hover:text-primary"
                      >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </Button>
                    </motion.div>
                  </a>
                </div>
              </StaggerItem>

              <FloatingIcon className="flex justify-center mt-16">
                <Link href="#about" className="text-primary/70 hover:text-primary transition-colors">
                  <ChevronDown className="h-8 w-8 animate-bounce" />
                </Link>
              </FloatingIcon>
            </StaggerContainer>
          </div>
        </section>
      </ParallaxContainer>

      {/* About Section */}
      <section id="about" className="py-20 md:py-24 bg-secondary/30 data-lines">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeading title="About Me" subtitle="Get to know more about my background and expertise" />
          </FadeIn>

          <div className="flex flex-col md:flex-row gap-12 items-center max-w-5xl mx-auto">
            <FadeIn direction="left" delay={0.2} className="md:w-1/3 flex justify-center">
              <MouseParallax strength={20}>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
                  <motion.div
                    className="h-64 w-64 rounded-full overflow-hidden border-4 border-background relative"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Image
                      src="/images/narayani-profile.png"
                      alt="Narayani Patil"
                      width={256}
                      height={256}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                </div>
              </MouseParallax>
            </FadeIn>

            <FadeIn direction="right" delay={0.4} className="md:w-2/3">
              <motion.div
                className="code-block mb-6 glow-card"
                whileHover={{
                  boxShadow: "0 0 30px rgba(0, 153, 255, 0.3)",
                  y: -5,
                }}
              >
                <CodeSnippet
                  code={`# About Narayani Patil
class DataEngineer:
    def __init__(self):
        self.name = "Narayani Patil"
        self.role = "Data Engineer & ML Enthusiast"
        self.location = "Boston, MA"
        self.education = ["MS Computer Engineering", "BE Information Technology"]
        self.skills = ["Python", "SQL", "Big Data", "ML/AI", "Cloud"]
        
    def transform_data(self, raw_data):
        return meaningful_insights  # Magic happens here!`}
                />
              </motion.div>

              <p className="text-foreground/90 mb-4">
                I'm a passionate Data Engineer and Computer Engineering graduate student at Northeastern University with
                expertise in designing and implementing data pipelines, ETL processes, and analytics solutions.
              </p>
              <p className="text-foreground/90 mb-6">
                With professional experience at Natixis Investment Managers and Deloitte, I've developed skills in
                Python, SQL, big data technologies, and machine learning. I'm currently working as a Teaching Assistant
                for Machine Learning Operations at Northeastern University.
              </p>

              {/* Education */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                  Education
                </h3>
                <div className="space-y-4">
                  <motion.div
                    className="border-l-2 border-primary pl-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <h4 className="font-medium">Northeastern University, Boston, USA</h4>
                    <p className="text-sm text-muted-foreground">Master of Science in Computer Engineering</p>
                    <p className="text-sm text-muted-foreground">Expected Aug 2025</p>
                  </motion.div>
                  <motion.div
                    className="border-l-2 border-primary pl-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <h4 className="font-medium">University of Mumbai, Mumbai, India</h4>
                    <p className="text-sm text-muted-foreground">Bachelor of Engineering in Information Technology</p>
                    <p className="text-sm text-muted-foreground">Aug 2017 – Jul 2021</p>
                  </motion.div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Data Engineering", "Machine Learning", "Big Data", "Python", "SQL"].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                  >
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-24 tech-dots">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeading
              title="Professional Experience"
              subtitle="My journey in the field of data engineering and analytics"
            />
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative border-l-2 border-primary/30 pl-8 ml-4 space-y-12">
              {/* Experience 1 */}
              <FadeIn direction="right" delay={0.2}>
                <div className="relative">
                  <motion.div
                    className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-background bg-primary"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
                  ></motion.div>
                  <HoverCard>
                    <Card className="overflow-hidden border border-primary/20 shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 bg-card/80 backdrop-blur-sm glow-card neon-border">
                      <CardHeader className="border-b border-border/30">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                          <div>
                            <CardTitle className="text-xl">Teaching Assistant – Machine Learning Operations</CardTitle>
                            <CardDescription className="text-primary font-medium">
                              Northeastern University, Boston, USA
                            </CardDescription>
                          </div>
                          <span className="text-sm text-muted-foreground flex items-center whitespace-nowrap">
                            <Calendar className="h-4 w-4 mr-1" /> Dec 2024 – Present
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                          <li>
                            Working on a RAG based chatbot leveraging LangChain, LLMs, vector databases, airflow and
                            model pipelines.
                          </li>
                          <li>
                            Assisting 200+ students in understanding MLOps concepts, model versioning/deployment and
                            operationalization.
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </HoverCard>
                </div>
              </FadeIn>

              {/* Experience 2 */}
              <FadeIn direction="right" delay={0.3}>
                <div className="relative">
                  <motion.div
                    className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-background bg-primary"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.3 }}
                  ></motion.div>
                  <HoverCard>
                    <Card className="overflow-hidden border border-primary/20 shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 bg-card/80 backdrop-blur-sm glow-card neon-border">
                      <CardHeader className="border-b border-border/30">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                          <div>
                            <CardTitle className="text-xl">Data Science Engineer Co-Op</CardTitle>
                            <CardDescription className="text-primary font-medium">
                              Natixis Investment Managers (GROUPE BPCE), Boston, USA
                            </CardDescription>
                          </div>
                          <span className="text-sm text-muted-foreground flex items-center whitespace-nowrap">
                            <Calendar className="h-4 w-4 mr-1" /> Aug 2024 – Dec 2024
                          </span\
