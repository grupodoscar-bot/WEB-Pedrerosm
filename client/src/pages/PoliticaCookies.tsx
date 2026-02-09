import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function PoliticaCookies() {
  return (
    <>
      <SEO 
        title="Política de Cookies - Pedrero Social Media"
        description="Información sobre el uso de cookies en el sitio web de Pedrero Social Media"
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 pt-32 pb-16">
          <div className="container max-w-4xl">
            <h1 className="font-['Fraunces'] font-bold text-4xl md:text-5xl text-foreground mb-8">
              Política de Cookies
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
              <section>
                <h2 className="font-['Fraunces'] font-semibold text-2xl text-foreground mb-4">
                  ¿Qué son las cookies?
                </h2>
                <p className="leading-relaxed mb-4">
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. 
                  Se utilizan para hacer que los sitios web funcionen de manera más eficiente, así como para proporcionar 
                  información a los propietarios del sitio.
                </p>
              </section>

              <section>
                <h2 className="font-['Fraunces'] font-semibold text-2xl text-foreground mb-4">
                  Cookies que utilizamos
                </h2>
                
                <h3 className="font-['Fraunces'] font-semibold text-xl text-foreground mb-3 mt-6">
                  Cookies técnicas (necesarias)
                </h3>
                <p className="leading-relaxed mb-4">
                  Estas cookies son esenciales para el funcionamiento del sitio web y no pueden desactivarse:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Cookies de sesión:</strong> Mantienen tu sesión activa mientras navegas por el sitio</li>
                  <li><strong>Cookies de preferencias:</strong> Recuerdan tus preferencias de navegación</li>
                </ul>

                <h3 className="font-['Fraunces'] font-semibold text-xl text-foreground mb-3 mt-6">
                  Cookies analíticas
                </h3>
                <p className="leading-relaxed mb-4">
                  Utilizamos cookies analíticas para entender cómo los visitantes interactúan con nuestro sitio web:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Umami Analytics:</strong> Herramienta de análisis web que respeta la privacidad. 
                  No recopila datos personales identificables y cumple con RGPD</li>
                </ul>
              </section>

              <section>
                <h2 className="font-['Fraunces'] font-semibold text-2xl text-foreground mb-4">
                  Gestión de cookies
                </h2>
                <p className="leading-relaxed mb-4">
                  Puedes configurar tu navegador para rechazar todas las cookies o para indicar cuándo se envía una cookie. 
                  Sin embargo, si no aceptas las cookies, es posible que no puedas utilizar algunas partes de nuestro sitio web.
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>Instrucciones para gestionar cookies en los navegadores más comunes:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                  <li><strong>Mozilla Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
                  <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                  <li><strong>Microsoft Edge:</strong> Configuración → Privacidad → Cookies</li>
                </ul>
              </section>

              <section>
                <h2 className="font-['Fraunces'] font-semibold text-2xl text-foreground mb-4">
                  Actualizaciones de esta política
                </h2>
                <p className="leading-relaxed mb-4">
                  Podemos actualizar nuestra Política de Cookies periódicamente. Te notificaremos cualquier cambio 
                  publicando la nueva política en esta página con una fecha de actualización revisada.
                </p>
                <p className="text-sm text-muted-foreground mt-6">
                  Última actualización: 9 de febrero de 2026
                </p>
              </section>

              <section>
                <h2 className="font-['Fraunces'] font-semibold text-2xl text-foreground mb-4">
                  Contacto
                </h2>
                <p className="leading-relaxed mb-4">
                  Si tienes alguna pregunta sobre nuestra Política de Cookies, puedes contactarnos en:
                </p>
                <p className="leading-relaxed">
                  <strong>Email:</strong> <a href="mailto:hola@pedrerosm.com" className="text-primary hover:underline">hola@pedrerosm.com</a>
                </p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
