"use client"

import { Button } from "@/components/ui/button"

const pricingPackages = [
  {
    title: "Architecture",
    description: "Comprehensive architectural photography for residential and commercial projects.",
    features: ["Exterior & Interior shots", "Detail photography", "Twilight photography", "High-resolution delivery"],
  },
  {
    title: "Commercial",
    description: "Professional photography for retail, hospitality, and corporate environments.",
    features: ["Space documentation", "Lifestyle integration", "Brand-focused imagery", "Multiple formats"],
  },
  {
    title: "Industrial",
    description: "Specialized photography for manufacturing, infrastructure, and industrial facilities.",
    features: ["Safety-compliant shooting", "Technical documentation", "Process photography", "Aerial capabilities"],
  },
]

export default function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Pricing</h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            Each project is unique. We provide custom quotes based on scope, location, and specific requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingPackages.map((pkg, index) => (
            <div key={index} className="border border-border p-8 bg-card">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">{pkg.title}</h3>
              <p className="font-body text-foreground/70 mb-6 leading-relaxed">{pkg.description}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="font-body text-sm text-foreground/80 flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <p className="font-body text-foreground/60 text-sm">Contact for pricing</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-body px-8 py-3"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
