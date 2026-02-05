import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Instagram } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center group">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663330305411/VuacErqQgkZnYdUQ.png" 
                alt="Pedrero Social Media"
                className="h-12 w-auto transition-organic group-hover:scale-105"
              />
            </a>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#servicios">
              <a className="text-foreground/70 hover:text-foreground transition-organic font-['DM_Sans'] font-medium">
                Servicios
              </a>
            </Link>
            <Link href="/#portfolio">
              <a className="text-foreground/70 hover:text-foreground transition-organic font-['DM_Sans'] font-medium">
                Portfolio
              </a>
            </Link>
            <Link href="/#nosotros">
              <a className="text-foreground/70 hover:text-foreground transition-organic font-['DM_Sans'] font-medium">
                Nosotros
              </a>
            </Link>
            <Link href="/#contacto">
              <a className="text-foreground/70 hover:text-foreground transition-organic font-['DM_Sans'] font-medium">
                Contacto
              </a>
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/pedrero.socialmedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-organic"
            >
              <Instagram className="w-5 h-5 text-foreground" />
            </a>
            <Link href="/#contacto">
              <Button className="rounded-full px-6 font-['DM_Sans'] font-medium">
                Solicitar Propuesta
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
