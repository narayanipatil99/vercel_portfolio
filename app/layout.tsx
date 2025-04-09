import type React from "react"
import "@/app/globals.css"
import { Inter, JetBrains_Mono, Fira_Code } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { PageTransition } from "@/components/animations/page-transition"
import { ScrollProgressBar } from "@/components/animations/motion-components"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-code" })

export const metadata = {
  title: "Narayani Patil | Data Engineer",
  description: "Portfolio website for Narayani Patil, Data Engineer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${firaCode.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          storageKey="narayani-theme"
        >
          <ScrollProgressBar />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'