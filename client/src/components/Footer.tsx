import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border paper-texture">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">PS</span>
              </div>
              <span className="font-['Fraunces'] font-semibold text-xl text-foreground">
                Pedrero SM
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Agencia de Social Media Marketing especializada en Instagram y TikTok. Badajoz, España.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Fraunces'] font-semibold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#servicios" className="text-muted-foreground hover:text-foreground transition-organic text-sm">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/#portfolio" className="text-muted-foreground hover:text-foreground transition-organic text-sm">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/#nosotros" className="text-muted-foreground hover:text-foreground transition-organic text-sm">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="/#contacto" className="text-muted-foreground hover:text-foreground transition-organic text-sm">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-['Fraunces'] font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <a
                href="mailto:hola@pedrerosm.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-organic text-sm"
              >
                <Mail className="w-4 h-4" />
                hola@pedrerosm.com
              </a>
              <a
                href="https://www.instagram.com/pedrero.socialmedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-organic text-sm"
              >
                <Instagram className="w-4 h-4" />
                @pedrero.socialmedia
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Pedrero SM. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-organic text-sm">
              Aviso Legal
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-organic text-sm">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
