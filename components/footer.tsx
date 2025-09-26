export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo № */}
          <div className="font-display text-xl font-bold">NO NOTES PHOTOGRAPHY</div>

          {/* Social Icons Placeholders */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="w-6 h-6 bg-background/20 rounded-full flex items-center justify-center hover:bg-background/30 transition-colors"
              aria-label="Instagram"
            >
              <span className="text-xs">IG</span>
            </a>
            <a
              href="#"
              className="w-6 h-6 bg-background/20 rounded-full flex items-center justify-center hover:bg-background/30 transition-colors"
              aria-label="LinkedIn"
            >
              <span className="text-xs">LI</span>
            </a>
            <a
              href="#"
              className="w-6 h-6 bg-background/20 rounded-full flex items-center justify-center hover:bg-background/30 transition-colors"
              aria-label="Behance"
            >
              <span className="text-xs">BE</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="font-body text-sm text-background/70">© {currentYear} NO NOTES STUDIO. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
