import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Instagram, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/">
              <a className="flex items-center group relative z-50">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663330305411/VuacErqQgkZnYdUQ.png" 
                  alt="Pedrero Social Media"
                  className="h-12 w-auto transition-organic group-hover:scale-105"
                />
              </a>
            </Link>

            {/* Desktop Navigation */}
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

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://www.instagram.com/pedrero.socialmedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-organic"
              >
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
              <Link href="/#contacto">
                <Button className="rounded-full px-6 font-['DM_Sans'] font-medium">
                  Solicitar Propuesta
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative z-50 flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-organic"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-20 right-0 bottom-0 w-full max-w-sm bg-background border-l border-border z-40 md:hidden transition-transform duration-300 ease-organic ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-8 gap-6">
          {/* Mobile Navigation Links */}
          <Link href="/#servicios">
            <a 
              onClick={handleLinkClick}
              className="text-foreground/70 hover:text-foreground transition-organic font-['DM_Sans'] font-medium text-lg py-3 border-b border-border/50"
            >
              Servicios
            </a>
          </Link>
          <Link href="/#portfolio">
            <a 
              onClick={handleLinkClick}
              className="text-foreground/70 hover:text-foreground transition-organic font-['DM_Sans'] font-medium text-lg py-3 border-b border-border/50"
            >
              Portfolio
            </a>
          </Link>
          <Link href="/#nosotros">
            <a 
              onClick={handleLinkClick}
              className="text-foreground/70 hover:text-foreground transition-organic font-['DM_Sans'] font-medium text-lg py-3 border-b border-border/50"
            >
              Nosotros
            </a>
          </Link>
          <Link href="/#contacto">
            <a 
              onClick={handleLinkClick}
              className="text-foreground/70 hover:text-foreground transition-organic font-['DM_Sans'] font-medium text-lg py-3 border-b border-border/50"
            >
              Contacto
            </a>
          </Link>

          {/* Mobile CTA Buttons */}
          <div className="flex flex-col gap-4 mt-6">
            <a
              href="https://www.instagram.com/pedrero.socialmedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full h-12 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-organic font-['DM_Sans'] font-medium"
            >
              <Instagram className="w-5 h-5" />
              <span>Síguenos en Instagram</span>
            </a>
            <Link href="/#contacto">
              <Button 
                onClick={handleLinkClick}
                className="w-full rounded-full h-12 font-['DM_Sans'] font-medium"
              >
                Solicitar Propuesta
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
