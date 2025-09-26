"use client"
import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import React from "react"

const portfolioImages = {
  architecture: [
    "/peoples-oc-9792-edit.webp",
    "/blum-storefront-5545.webp",
    "/glass-office-building-facade.jpg",
  ],
  commercial: [
    "/blum-retail-5775.webp",
    "/blueprints-5298.webp", 
    "/corporate-office-space.jpg",
  ],
  industrial: [
    "/electrical-5372.webp",
    "/kremlin-industrial-5357.webp",
    "/industrial-landscape.jpg",
  ],
}

export default function HeroPortfolio() {
  const architectureRef = useRef<HTMLDivElement>(null)
  const commercialRef = useRef<HTMLDivElement>(null)
  const industrialRef = useRef<HTMLDivElement>(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  // Throttle mouse move for better performance
  const throttledMouseMove = useCallback((e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY })
  }, [])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => throttledMouseMove(e), 16) // ~60fps
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(timeoutId)
    }
  }, [throttledMouseMove])

  const getCursorIcon = useCallback(() => {
    // Safety check for SSR
    if (typeof window === 'undefined') return 'default'
    
    const viewportHeight = window.innerHeight
    const isTopHalf = cursorPosition.y < viewportHeight * 0.45
    if (isTopHalf) {
      return 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3IDE0TDEyIDlMNyAxNCIgc3Ryb2tlPSIjMUExQTFBIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"), auto'
    } else {
      return 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTBMMTIgMTVMMTcgMTAiIHN0cm9rZT0iIzFBMUExQSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+"), auto'
    }
  }, [cursorPosition.y])

  return (
    <section 
      id="portfolio" 
      className="relative h-screen overflow-hidden"
    >
      {/* Desktop: Three columns with fixed height */}
      <div className="hidden lg:grid lg:grid-cols-3 h-full">
        <PortfolioColumn
          ref={architectureRef}
          title="Architecture"
          images={portfolioImages.architecture}
          cursorIcon={getCursorIcon()}
        />
        <PortfolioColumn
          ref={commercialRef}
          title="Commercial"
          images={portfolioImages.commercial}
          cursorIcon={getCursorIcon()}
        />
        <PortfolioColumn
          ref={industrialRef}
          title="Industrial"
          images={portfolioImages.industrial}
          cursorIcon={getCursorIcon()}
        />
      </div>

      {/* Tablet: Two columns + one full width */}
      <div className="hidden md:block lg:hidden h-full">
        <div className="grid grid-cols-2 h-1/2">
          <PortfolioColumn
            title="Architecture"
            images={portfolioImages.architecture}
            cursorIcon={getCursorIcon()}
          />
          <PortfolioColumn
            title="Commercial"
            images={portfolioImages.commercial}
            cursorIcon={getCursorIcon()}
          />
        </div>
        <div className="h-1/2">
          <PortfolioColumn
            title="Industrial"
            images={portfolioImages.industrial}
            cursorIcon={getCursorIcon()}
          />
        </div>
      </div>

      {/* Mobile: Stacked scrollable columns */}
      <div className="md:hidden h-full overflow-y-auto">
        <div className="space-y-8 px-4 py-4">
          <PortfolioColumn title="Architecture" images={portfolioImages.architecture} mobile />
          <PortfolioColumn title="Commercial" images={portfolioImages.commercial} mobile />
          <PortfolioColumn title="Industrial" images={portfolioImages.industrial} mobile />
        </div>
      </div>
    </section>
  )
}

interface PortfolioColumnProps {
  title: string
  images: string[]
  mobile?: boolean
  cursorIcon?: string
}

const PortfolioColumn = React.forwardRef<HTMLDivElement, PortfolioColumnProps>(
  ({ title, images, mobile = false, cursorIcon }, ref) => {
    return (
      <div className={`relative ${mobile ? "h-96" : ""} group overflow-hidden`}>
        {/* Column Title */}
        <div className="absolute top-4 left-4 z-20 bg-background/95 backdrop-blur-sm px-3 py-1.5 border border-border/20 shadow-sm">
          <h3 className="font-display text-xs font-bold text-foreground tracking-wider">
            {title.toUpperCase()}
          </h3>
        </div>

        {/* Scrollable Image Container - REMOVED h-full class that was conflicting */}
        <div
          ref={ref}
          className="portfolio-column overflow-y-scroll overflow-x-hidden"
          style={{ cursor: mobile ? "default" : cursorIcon }}
        >
          <div className="space-y-0">
            {images.map((src, index) => (
              <div key={`${title}-${index}`} className="relative w-full group/image">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`${title} photography ${index + 1}`}
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover/image:scale-[1.01]"
                  loading={index < 2 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                />
                {/* Subtle image overlay for interaction feedback */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
            {/* Add some bottom spacing for the last image */}
            <div className="h-4" />
          </div>
        </div>
      </div>
    )
  },
)

PortfolioColumn.displayName = "PortfolioColumn"