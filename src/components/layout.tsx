import type React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
