/**
 * WhatsAppButton - Botón flotante de WhatsApp
 * 
 * Design Philosophy: Minimalist Organic with Texture
 * - Color oficial de WhatsApp (#25D366)
 * - Posición fija en esquina inferior derecha
 * - Animación suave de hover con escala
 * - Sombra orgánica para profundidad
 */

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "34633647884"; // +34 633 647 884
  const message = encodeURIComponent("Hola, me gustaría obtener más información sobre vuestros servicios.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
    </a>
  );
}
