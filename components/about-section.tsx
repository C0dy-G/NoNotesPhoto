import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">About</h2>
            <div className="space-y-6 font-body text-foreground/80 leading-relaxed">
              <p>
                We specialize in capturing the essence of architectural spaces, commercial environments, and industrial
                landscapes through a minimalist lens. Our approach emphasizes clean lines, natural light, and the
                inherent beauty of functional design.
              </p>
              <p>
                With over a decade of experience in architectural and commercial photography, we work closely with
                architects, designers, and businesses to create compelling visual narratives that showcase their work in
                its best light.
              </p>
              <p>
                Every project is approached with meticulous attention to detail, ensuring that each photograph not only
                documents but elevates the subject matter through thoughtful composition and technical excellence.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Photographer at work"
              width={500}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
