import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">Contact</h2>

        <div className="space-y-8">
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Ready to discuss your project? We'd love to hear about your vision and explore how we can bring it to life through thoughtful photography.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-body px-8 py-3">
              <a href="https://spiro.media" target="_blank" rel="noopener noreferrer">
                Visit Spiro.media
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-border text-foreground hover:bg-muted font-body px-8 py-3 bg-transparent"
            >
              <a href="mailto:hello@studio.com">hello@NoNotesPhoto.com</a>
            </Button>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="font-body text-sm text-foreground/60">Based in San Francisco • Available worldwide</p>
          </div>
        </div>
      </div>
    </section>
  )
}
