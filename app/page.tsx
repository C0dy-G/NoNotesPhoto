import Header from "@/components/header"
import HeroPortfolio from "@/components/hero-portfolio"
import AboutSection from "@/components/about-section"
import PricingSection from "@/components/pricing-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      {/* Hero takes full viewport height */}
      <HeroPortfolio />
      {/* All other sections start after hero with proper spacing */}
      <div className="relative z-10">
        <AboutSection />
        <PricingSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
