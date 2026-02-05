import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Instagram, 
  TrendingUp, 
  Sparkles, 
  Users, 
  Target, 
  Megaphone,
  MessageCircle,
  BarChart3,
  Lightbulb,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { toast } from "sonner";

export default function Home() {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Gracias! Nos pondremos en contacto contigo en menos de 24 horas.");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden paper-texture"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/0A7kUyW8a1lK0ebmC9lJ2X/sandbox/Aj4myfE9rN4772fs9NUgrJ-img-1_1770289111000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMEE3a1V5VzhhMWxLMGVibUM5bEoyWC9zYW5kYm94L0FqNG15ZkU5ck40NzcyZnM5TlVnckotaW1nLTFfMTc3MDI4OTExMTAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=i0P7nk1pW3kxU-cxhcp0xrIri-JPiSyxup3YJLDn4UofW2aOwhoeAzg1sCtIO7~cSqkWLsL8GssMjmYqPt23VFFpiZRoSY~NdbFrZmn4n7Q8kQJQAoZ-JEXhDDJwzZZr9yupcIKrTQ9T5TdrBkRlG7LDqdV-SoQw56YdWoQA-jkH3HTK209vYQ7FzkS4Ag0SZoryKRE1GpGzOKbnaKSGBWqWpZbEs6cHSUBOJ-CI8EzpB0r6m4RDNjx-IEpU9SUmSgDvIGScjXs~NX4YV7Mh5lc9h6DQopuAvPPi3tY3vS7t~S3A9fWoyvEPSthBwnUEQDURJ2PGCnys7rbayJPTGQ__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        <div className="container relative z-10 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-['Fraunces'] font-bold text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight">
              Estrategia, Contenido y Crecimiento para tu Marca
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Convertimos tu presencia en Instagram y TikTok en resultados medibles. Somos la agencia de social media que tu negocio necesita para conectar, crecer y vender.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="rounded-full px-8 py-6 text-lg font-['DM_Sans'] font-medium shadow-lg hover:shadow-xl transition-organic"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar Propuesta
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 py-6 text-lg font-['DM_Sans'] font-medium bg-background/50 backdrop-blur-sm"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Trabajos
              </Button>
            </div>
            <div className="mt-8">
              <a
                href="https://www.instagram.com/pedrero.socialmedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-organic font-['DM_Sans']"
              >
                <Instagram className="w-5 h-5" />
                Ver Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Band */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container">
          <p className="text-center text-muted-foreground font-['DM_Sans'] font-medium mb-8">
            Agencia de Social Media Marketing
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-['Fraunces'] font-semibold text-lg mb-2">Estrategia</h3>
              <p className="text-muted-foreground text-sm">Planes de contenido basados en datos y objetivos</p>
            </div>
            <div className="text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-['Fraunces'] font-semibold text-lg mb-2">Contenido</h3>
              <p className="text-muted-foreground text-sm">Creatividad y producción de alto impacto</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-['Fraunces'] font-semibold text-lg mb-2">Crecimiento</h3>
              <p className="text-muted-foreground text-sm">Gestión de comunidades y campañas efectivas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-background paper-texture">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-['Fraunces'] font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Lo que hacemos por tu marca
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <Card className="p-8 rounded-3xl border-2 hover:border-primary transition-organic hover:shadow-xl bg-card">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Instagram className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-['Fraunces'] font-semibold text-2xl mb-3">Gestión de Redes Sociales</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nos encargamos de todo. Planificación, publicación, interacción y análisis para que tú te centres en tu negocio.
              </p>
              <Button variant="ghost" className="group font-['DM_Sans'] font-medium p-0 h-auto">
                Ver más
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-organic" />
              </Button>
            </Card>

            {/* Service 2 */}
            <Card className="p-8 rounded-3xl border-2 hover:border-primary transition-organic hover:shadow-xl bg-card">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-['Fraunces'] font-semibold text-2xl mb-3">Estrategia de Contenidos</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Creamos el plan perfecto para tu marca. Definimos tu voz, pilares de contenido y calendario editorial.
              </p>
              <Button variant="ghost" className="group font-['DM_Sans'] font-medium p-0 h-auto">
                Ver más
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-organic" />
              </Button>
            </Card>

            {/* Service 3 */}
            <Card className="p-8 rounded-3xl border-2 hover:border-primary transition-organic hover:shadow-xl bg-card">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-['Fraunces'] font-semibold text-2xl mb-3">Creación de Contenido</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Producimos reels, carruseles y posts que captan la atención. Desde el guion hasta la edición final.
              </p>
              <Button variant="ghost" className="group font-['DM_Sans'] font-medium p-0 h-auto">
                Ver más
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-organic" />
              </Button>
            </Card>

            {/* Service 4 */}
            <Card className="p-8 rounded-3xl border-2 hover:border-primary transition-organic hover:shadow-xl bg-card">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-['Fraunces'] font-semibold text-2xl mb-3">Community Management</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Construimos y cuidamos tu comunidad. Respondemos comentarios y mensajes para fidelizar seguidores.
              </p>
              <Button variant="ghost" className="group font-['DM_Sans'] font-medium p-0 h-auto">
                Ver más
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-organic" />
              </Button>
            </Card>

            {/* Service 5 */}
            <Card className="p-8 rounded-3xl border-2 hover:border-primary transition-organic hover:shadow-xl bg-card">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Megaphone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-['Fraunces'] font-semibold text-2xl mb-3">Social Ads</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Creamos y optimizamos campañas en Instagram y TikTok para llegar a nuevos clientes y acelerar ventas.
              </p>
              <Button variant="ghost" className="group font-['DM_Sans'] font-medium p-0 h-auto">
                Ver más
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-organic" />
              </Button>
            </Card>

            {/* Service 6 */}
            <Card className="p-8 rounded-3xl border-2 hover:border-primary transition-organic hover:shadow-xl bg-card">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-['Fraunces'] font-semibold text-2xl mb-3">Consultoría & Formación</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Te damos las herramientas para que lo hagas tú. Sesiones 1 a 1 para auditar tu perfil o formar a tu equipo.
              </p>
              <Button variant="ghost" className="group font-['DM_Sans'] font-medium p-0 h-auto">
                Ver más
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-organic" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 bg-card paper-texture">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-['Fraunces'] font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Nuestro método en 4 pasos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6 font-['Fraunces'] font-bold text-2xl">
                01
              </div>
              <h3 className="font-['Fraunces'] font-semibold text-xl mb-3">Briefing y Análisis</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Todo empieza escuchándote. Entendemos tus objetivos, tu marca y tu cliente para definir el punto de partida.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6 font-['Fraunces'] font-bold text-2xl">
                02
              </div>
              <h3 className="font-['Fraunces'] font-semibold text-xl mb-3">Estrategia y Planificación</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Trazamos el plan. Creamos una estrategia de contenidos y un calendario editorial como hoja de ruta.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6 font-['Fraunces'] font-bold text-2xl">
                03
              </div>
              <h3 className="font-['Fraunces'] font-semibold text-xl mb-3">Producción y Publicación</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Manos a la obra. Producimos el contenido y lo publicamos en los momentos de mayor impacto.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6 font-['Fraunces'] font-bold text-2xl">
                04
              </div>
              <h3 className="font-['Fraunces'] font-semibold text-xl mb-3">Medición y Optimización</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Lo que no se mide, no se mejora. Analizamos los resultados cada mes para optimizar la estrategia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section 
        id="portfolio" 
        className="py-24 bg-background relative overflow-hidden"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/0A7kUyW8a1lK0ebmC9lJ2X/sandbox/Aj4myfE9rN4772fs9NUgrJ-img-4_1770289105000_na1fn_cG9ydGZvbGlvLWJhY2tncm91bmQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMEE3a1V5VzhhMWxLMGVibUM5bEoyWC9zYW5kYm94L0FqNG15ZkU5ck40NzcyZnM5TlVnckotaW1nLTRfMTc3MDI4OTEwNTAwMF9uYTFmbl9jRzl5ZEdadmJHbHZMV0poWTJ0bmNtOTFibVEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lLhSH6TvqZfurij9w4KiP0X5aK5n8S4aEEbU~4qGV9DkeVD7sYRuxwikF7InpBpP~v~9tF7wYiqCPs1xsWCgduB2HCrEEUdlHaI1hr571dlDDmvkfM8XePY3dkgB-FdsieGvXPDBeavg-6VcouT~SZ3-QHZBNhn8mbaZ~qBiNtIjCPqQ1a8TTBYTy-9hhFy4bLXKlDndMUxRNnARbKyANJIK8YqP8nuSkcFXjSmycTaVrA1YrlqbAzb-hZiui-MNfW54uKtMOQ9ToNi7yR1LGcvuZL2eP6xgfXzNckhnaqu5whjtk-SAYe4wBv~rG2R9lZp293ZIr-TqfXEL5EJ-sw__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-['Fraunces'] font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Proyectos que nos llenan de orgullo
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Un vistazo a nuestro trabajo más reciente. Extraído directamente de nuestro Instagram.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {/* Portfolio items - Placeholders for Instagram content */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="rounded-3xl overflow-hidden hover:shadow-2xl transition-organic group bg-card/80 backdrop-blur-sm">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Instagram className="w-16 h-16 text-primary/30" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-['Fraunces'] font-semibold text-lg mb-2">Proyecto {item}</h3>
                  <p className="text-muted-foreground text-sm">
                    Contenido de Instagram • {item % 2 === 0 ? 'Reel' : 'Post'}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 font-['DM_Sans'] font-medium bg-background/80 backdrop-blur-sm"
              asChild
            >
              <a href="https://www.instagram.com/pedrero.socialmedia/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2" />
                Ver más en Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24 bg-card paper-texture">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/0A7kUyW8a1lK0ebmC9lJ2X/sandbox/Aj4myfE9rN4772fs9NUgrJ-img-5_1770289112000_na1fn_YWJvdXQtdGVhbQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMEE3a1V5VzhhMWxLMGVibUM5bEoyWC9zYW5kYm94L0FqNG15ZkU5ck40NzcyZnM5TlVnckotaW1nLTVfMTc3MDI4OTExMjAwMF9uYTFmbl9ZV0p2ZFhRdGRHVmhiUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rTxyuR9BN2yBqS408lo4vzH5IhFahCzbo9P~hPKrHwM4H8xQpEHixgeiO9axSzwNUhaD4EglyiHjpcZVj4jtuLrBUEJ~TPfPkSA~39ROtPhit6iBmAWmo9w81deFcCH8Mc5cq75pxiAGpS42FG6~2t1oIRU7JNiO-QrozrqCaomyxAZosoa2T0t~Vc1RTiO0u2VGG~ni50fszbjnK2VioOeb8KFZAb01RaHEDZENc~mOI~IsoyuY2HzG41F70EhzJ~5rHqFxzvfkhoAkVk3peLybdl8GJXBKsIH4ioqqYldx9oawA~Ldd48RBOg62DNOAWsh1iA6O0~EaiOFiVSmBQ__"
                alt="Equipo Pedrero SM"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="font-['Fraunces'] font-bold text-4xl md:text-5xl text-foreground mb-6">
                Más que una agencia, somos tu partner de crecimiento
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                En Pedrero SM, creemos en el poder de las conexiones humanas. Nacimos en Badajoz con el objetivo de ayudar a marcas valientes a contar su historia en el cambiante mundo digital. No solo gestionamos redes; construimos comunidades, impulsamos conversaciones y convertimos seguidores en clientes fieles.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Nuestro enfoque es simple: estrategia basada en datos, creatividad que deja huella y una consistencia que garantiza resultados. Somos un equipo joven, verificado y apoyado por instituciones, lo que nos da una perspectiva fresca y la solidez que tu marca necesita.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-['Fraunces'] font-semibold text-lg mb-1">Transparencia</h3>
                    <p className="text-muted-foreground">Comunicación clara y reportes honestos. Siempre sabrás qué estamos haciendo y por qué.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-['Fraunces'] font-semibold text-lg mb-1">Proactividad</h3>
                    <p className="text-muted-foreground">No esperamos a que las cosas pasen. Buscamos constantemente nuevas oportunidades para tu marca.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-['Fraunces'] font-semibold text-lg mb-1">Pasión</h3>
                    <p className="text-muted-foreground">Amamos lo que hacemos y se nota en cada proyecto. Tu éxito es nuestro éxito.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-background paper-texture">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-['Fraunces'] font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                ¿Listo para llevar tu marca al siguiente nivel?
              </h2>
              <p className="text-muted-foreground text-lg">
                Hablemos de tu proyecto. Rellena el formulario o envíanos un mensaje directo. Te responderemos en menos de 24 horas.
              </p>
            </div>

            <Card className="p-8 md:p-12 rounded-3xl shadow-xl bg-card">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="font-['DM_Sans'] font-medium">Nombre</Label>
                    <Input 
                      id="name" 
                      placeholder="Tu nombre" 
                      required 
                      className="mt-2 rounded-2xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-['DM_Sans'] font-medium">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="tu@email.com" 
                      required 
                      className="mt-2 rounded-2xl"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="brand" className="font-['DM_Sans'] font-medium">Nombre de tu marca/empresa</Label>
                  <Input 
                    id="brand" 
                    placeholder="Tu marca" 
                    required 
                    className="mt-2 rounded-2xl"
                  />
                </div>

                <div>
                  <Label htmlFor="goal" className="font-['DM_Sans'] font-medium">¿Cuál es tu principal objetivo?</Label>
                  <Textarea 
                    id="goal" 
                    placeholder="Ej: Aumentar ventas, más seguidores, mejor imagen de marca..." 
                    required 
                    className="mt-2 rounded-2xl min-h-[120px]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="flex-1 rounded-full font-['DM_Sans'] font-medium"
                  >
                    Enviar y Agendar Llamada
                  </Button>
                  <Button 
                    type="button" 
                    size="lg" 
                    variant="outline" 
                    className="flex-1 rounded-full font-['DM_Sans'] font-medium"
                    asChild
                  >
                    <a href="https://wa.me/34XXXXXXXXX" target="_blank" rel="noopener noreferrer">
                      O escríbenos por WhatsApp
                    </a>
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
