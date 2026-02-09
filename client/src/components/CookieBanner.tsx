/**
 * CookieBanner - Banner de aceptación de cookies conforme a RGPD
 * 
 * Design Philosophy: Minimalist Organic with Texture
 * - Posición fija en la parte inferior
 * - Diseño limpio y accesible
 * - Botones con estilo orgánico
 * - Almacenamiento en localStorage
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya aceptó las cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      // Mostrar el banner después de 1 segundo
      setTimeout(() => {
        setShowBanner(true);
      }, 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="container max-w-6xl mx-auto">
        <div className="bg-card/95 backdrop-blur-lg border-2 border-border rounded-3xl shadow-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Icono */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
            </div>

            {/* Contenido */}
            <div className="flex-1">
              <h3 className="font-['Fraunces'] font-semibold text-lg mb-2">
                🍪 Uso de Cookies
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación, 
                analizar el tráfico del sitio y personalizar el contenido. Al hacer clic en "Aceptar", 
                consientes el uso de todas las cookies. Puedes obtener más información en nuestra{' '}
                <a 
                  href="/politica-cookies" 
                  target="_blank" 
                  className="text-primary hover:underline font-medium"
                >
                  Política de Cookies
                </a>.
              </p>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                onClick={rejectCookies}
                className="rounded-full font-['DM_Sans'] font-medium whitespace-nowrap"
              >
                Rechazar
              </Button>
              <Button
                onClick={acceptCookies}
                className="rounded-full font-['DM_Sans'] font-medium whitespace-nowrap"
              >
                Aceptar Cookies
              </Button>
            </div>

            {/* Botón cerrar (móvil) */}
            <button
              onClick={rejectCookies}
              className="absolute top-4 right-4 md:hidden text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
