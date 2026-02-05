import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
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
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type PortfolioCategory = 'todos' | 'reels' | 'eventos' | 'colaboraciones' | 'contenido';

interface PortfolioItem {
  id: number;
  title: string;
  category: PortfolioCategory;
  type: string;
  metrics: string;
  description: string;
  image: string;
  badge?: string;
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('todos');

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Recap Diciembre 2025",
      category: "contenido",
      type: "Carrusel",
      metrics: "87 likes • 12 comentarios",
      description: "Resumen visual de las actividades y logros del mes",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=800&fit=crop"
    },
    {
      id: 2,
      title: "By My Way - Reel Viral",
      category: "reels",
      type: "Reel",
      metrics: "322 likes • 51 comentarios",
      description: "Contenido lifestyle que conectó con la audiencia",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=800&fit=crop",
      badge: "13.1K views"
    },
    {
      id: 3,
      title: "Evento Empresarial",
      category: "eventos",
      type: "Post",
      metrics: "83 likes • 8 comentarios",
      description: "Cobertura de evento corporativo con backdrop profesional",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=800&fit=crop"
    },
    {
      id: 4,
      title: "Gladis x Coca-Cola",
      category: "colaboraciones",
      type: "Colaboración",
      metrics: "Campaña #PorElClima",
      description: "Gestión de evento con marca internacional",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=800&fit=crop",
      badge: "Gran Marca"
    },
    {
      id: 5,
      title: "Navidad en Red Xcantil",
      category: "eventos",
      type: "Reel",
      metrics: "22 likes • Cliente: Red Xcantil",
      description: "Producción de contenido para evento navideño corporativo",
      image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&h=800&fit=crop"
    },
    {
      id: 6,
      title: "Joya del Ebro",
      category: "colaboraciones",
      type: "Video",
      metrics: "Cliente: Joyería local",
      description: "Producción de contenido para marca de joyería artesanal",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop"
    }
  ];

  const categories = [
    { id: 'todos' as PortfolioCategory, label: 'Todos', count: portfolioItems.length },
    { id: 'reels' as PortfolioCategory, label: 'Reels', count: portfolioItems.filter(item => item.category === 'reels').length },
    { id: 'eventos' as PortfolioCategory, label: 'Eventos', count: portfolioItems.filter(item => item.category === 'eventos').length },
    { id: 'colaboraciones' as PortfolioCategory, label: 'Colaboraciones', count: portfolioItems.filter(item => item.category === 'colaboraciones').length },
    { id: 'contenido' as PortfolioCategory, label: 'Contenido', count: portfolioItems.filter(item => item.category === 'contenido').length }
  ];

  const filteredItems = activeCategory === 'todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

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
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-['Fraunces'] font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Lo que hacemos por tu marca
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={1}>
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
          </AnimatedSection>
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
          <div className="text-center mb-12">
            <h2 className="font-['Fraunces'] font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Proyectos que nos llenan de orgullo
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Un vistazo a nuestro trabajo más reciente. Extraído directamente de nuestro Instagram.
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={`rounded-full px-6 font-['DM_Sans'] font-medium transition-organic ${
                    activeCategory === category.id 
                      ? "" 
                      : "bg-background/80 backdrop-blur-sm hover:bg-primary/10"
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                  <span className={`ml-2 text-xs ${
                    activeCategory === category.id 
                      ? "text-primary-foreground/80" 
                      : "text-muted-foreground"
                  }`}>
                    ({category.count})
                  </span>
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {filteredItems.map((item) => (
              <Card key={item.id} className="rounded-3xl overflow-hidden hover:shadow-2xl transition-organic group bg-card/80 backdrop-blur-sm">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-organic"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-organic"></div>
                  {item.badge && (
                    <div className={`absolute ${
                      item.badge === "Gran Marca" ? "top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground" : "top-4 right-4 bg-primary text-primary-foreground"
                    } px-3 py-1 rounded-full text-xs font-['DM_Sans'] font-medium`}>
                      {item.badge}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-['Fraunces'] font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {item.type} • {item.metrics}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <Instagram className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">No hay proyectos en esta categoría</p>
            </div>
          )}

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
          <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/0A7kUyW8a1lK0ebmC9lJ2X/sandbox/Aj4myfE9rN4772fs9NUgrJ-img-5_1770289112000_na1fn_YWJvdXQtdGVhbQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMEE3a1V5VzhhMWxLMGVibUM5bEoyWC9zYW5kYm94L0FqNG15ZkU5ck40NzcyZnM5TlVnckotaW1nLTVfMTc3MDI4OTExMjAwMF9uYTFmbl9ZV0p2ZFhRdGRHVmhiUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rTxyuR9BN2yBqS408lo4vzH5IhFahCzbo9P~hPKrHwM4H8xQpEHixgeiO9axSzwNUhaD4EglyiHjpcZVj4jtuLrBUEJ~TPfPkSA~39ROtPhit6iBmAWmo9w81deFcCH8Mc5cq75pxiAGpS42FG6~2t1oIRU7JNiO-QrozrqCaomyxAZosoa2T0t~Vc1RTiO0u2VGG~ni50fszbjnK2VioOeb8KFZAb01RaHEDZENc~mOI~IsoyuY2HzG41F70EhzJ~5rHqFxzvfkhoAkVk3peLybdl8GJXBKsIH4ioqqYldx9oawA~Ldd48RBOg62DNOAWsh1iA6O0~EaiOFiVSmBQ__"
                alt="Equipo Pedrero Social Media"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="font-['Fraunces'] font-bold text-4xl md:text-5xl text-foreground mb-6">
                Más que una agencia, somos tu partner de crecimiento
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                En Pedrero Social Media, creemos en el poder de las conexiones humanas. Nacimos en Badajoz con el objetivo de ayudar a marcas valientes a contar su historia en el cambiante mundo digital. No solo gestionamos redes; construimos comunidades, impulsamos conversaciones y convertimos seguidores en clientes fieles.
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
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background paper-texture">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-['Fraunces'] font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              La confianza de nuestros clientes es nuestro mayor logro. Estas son algunas de sus experiencias trabajando con nosotros.
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {/* Testimonial 1 - Red Xcantil */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                  <Card className="p-8 rounded-3xl h-full bg-card hover:shadow-xl transition-organic">
                    <div className="flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                          <Users className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-['Fraunces'] font-semibold text-lg mb-1">María González</h3>
                          <p className="text-muted-foreground text-sm">Directora de Marketing, Red Xcantil</p>
                        </div>
                      </div>
                      <blockquote className="text-foreground/90 leading-relaxed mb-6 flex-1">
                        "Pedrero Social Media transformó completamente nuestra presencia en redes sociales. Su trabajo en nuestro evento navideño fue impecable, desde la planificación hasta la ejecución. Los reels que crearon generaron un engagement que nunca habíamos visto antes. Son profesionales, creativos y siempre están un paso adelante."
                      </blockquote>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-5 h-5 text-primary">
                            ★
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </CarouselItem>

                {/* Testimonial 2 - Joya del Ebro */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                  <Card className="p-8 rounded-3xl h-full bg-card hover:shadow-xl transition-organic">
                    <div className="flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-['Fraunces'] font-semibold text-lg mb-1">Carmen Ruiz</h3>
                          <p className="text-muted-foreground text-sm">Fundadora, Joya del Ebro</p>
                        </div>
                      </div>
                      <blockquote className="text-foreground/90 leading-relaxed mb-6 flex-1">
                        "Como marca artesanal, necesitábamos alguien que entendiera nuestra esencia y la transmitiera en digital. Pedrero Social Media capturó la elegancia y delicadeza de nuestras piezas de joyería de una manera que nos dejó sin palabras. Las ventas a través de Instagram aumentaron un 40% en solo tres meses."
                      </blockquote>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-5 h-5 text-primary">
                            ★
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </CarouselItem>

                {/* Testimonial 3 - Gladis Restaurante */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                  <Card className="p-8 rounded-3xl h-full bg-card hover:shadow-xl transition-organic">
                    <div className="flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                          <Target className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-['Fraunces'] font-semibold text-lg mb-1">Roberto Sánchez</h3>
                          <p className="text-muted-foreground text-sm">Gerente, Gladis Restaurante</p>
                        </div>
                      </div>
                      <blockquote className="text-foreground/90 leading-relaxed mb-6 flex-1">
                        "Trabajar con Pedrero Social Media en nuestra colaboración con Coca-Cola fue una experiencia increíble. Gestionaron todo el evento con profesionalismo y crearon contenido que llegó a miles de personas. Su capacidad para coordinar con grandes marcas y mantener nuestra identidad local es admirable."
                      </blockquote>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-5 h-5 text-primary">
                            ★
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </CarouselItem>

                {/* Testimonial 4 - Cliente Genérico */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                  <Card className="p-8 rounded-3xl h-full bg-card hover:shadow-xl transition-organic">
                    <div className="flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-['Fraunces'] font-semibold text-lg mb-1">Laura Martínez</h3>
                          <p className="text-muted-foreground text-sm">CEO, Startup Tech Badajoz</p>
                        </div>
                      </div>
                      <blockquote className="text-foreground/90 leading-relaxed mb-6 flex-1">
                        "Como startup, teníamos presupuesto limitado pero grandes ambiciones. Pedrero Social Media nos ayudó a construir una presencia sólida en redes desde cero. Su estrategia de contenidos fue clave para atraer a nuestros primeros clientes. Son un partner estratégico, no solo una agencia."
                      </blockquote>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-5 h-5 text-primary">
                            ★
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="-left-12 hidden lg:flex" />
              <CarouselNext className="-right-12 hidden lg:flex" />
            </Carousel>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-['Fraunces'] font-bold text-primary mb-2">4+</div>
              <div className="text-muted-foreground text-sm">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-['Fraunces'] font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground text-sm">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-['Fraunces'] font-bold text-primary mb-2">13K+</div>
              <div className="text-muted-foreground text-sm">Views Totales</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-['Fraunces'] font-bold text-primary mb-2">687</div>
              <div className="text-muted-foreground text-sm">Seguidores Gestionados</div>
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
