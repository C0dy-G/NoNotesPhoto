"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"   // ✅ import Link

export default function Header() {  
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo with Swiss minimalist styling */}
          <Link href="/" aria-label="Go to homepage">   {/* ✅ wrap logo */}
            <Image
              src="/no-notes-photography-logo-black.svg"
              alt="NO NOTES PHOTO LOGO"
              width={180}
              height={32}
              className="h-8 w-auto brightness-0 dark:brightness-100 dark:invert transition-colors duration-300"
              priority
            />
          </Link>
          {/* Text Logo
          <div className="font-display text-xl font-bold text-foreground">№ NOTES PHOTO</div> */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="font-body text-sm font-light text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="font-body text-sm font-light text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="font-body text-sm font-light text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-body text-sm font-light text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-body text-sm font-normal px-6"
              onClick={() => scrollToSection("contact")}
            >
              Book a Shoot
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div
                className={`w-full h-0.5 bg-foreground transition-all ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <div className={`w-full h-0.5 bg-foreground transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
              <div
                className={`w-full h-0.5 bg-foreground transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="font-body text-sm font-light text-foreground hover:text-primary transition-colors text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="font-body text-sm font-light text-foreground hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="font-body text-sm font-light text-foreground hover:text-primary transition-colors text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="font-body text-sm font-light text-foreground hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-body text-sm font-normal w-fit"
                onClick={() => scrollToSection("contact")}
              >
                Book a Shoot
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
