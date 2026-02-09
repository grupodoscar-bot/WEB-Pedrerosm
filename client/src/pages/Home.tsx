import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
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

  const seoData = {
    title: "Pedrero Social Media - Agencia de Marketing en Instagram y TikTok | Badajoz",
    description: "Agencia de Social Media Marketing en Badajoz especializada en Instagram y TikTok. Estrategia, creación de contenido, gestión de redes sociales y crecimiento para tu marca. Resultados medibles y transparentes.",
    keywords: "agencia social media badajoz, marketing instagram, marketing tiktok, gestión redes sociales, contenido redes sociales, estrategia digital badajoz, agencia marketing extremadura, reels instagram, community manager"
  };

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Recap Diciembre 2025",
      category: "contenido",
      type: "Carrusel",
      metrics: "87 likes • 12 comentarios",
      description: "Resumen visual de las actividades y logros del mes",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663330305411/QdhzkvBVolwuMasr.webp"
    },
    {
      id: 2,
      title: "By My Way - Reel Viral",
      category: "reels",
      type: "Reel",
      metrics: "322 likes • 51 comentarios",
      description: "Contenido lifestyle que conectó con la audiencia",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663330305411/GkWWYuAUktIIvWIz.webp",
      badge: "13.1K views"
    },
    {
      id: 3,
      title: "Navidad en Red Mercantil",
      category: "eventos",
      type: "Post",
      metrics: "24 likes • 1 comentario",
      description: "Comida de Navidad de Red Mercantil Badajoz en María Coqueta",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663330305411/XhUfbZMTsnNqGRYb.webp"
    },
    {
      id: 4,
      title: "Gladis x Coca-Cola",
      category: "colaboraciones",
      type: "Colaboración",
      metrics: "56 likes • 3 comentarios",
      description: "Reconocimiento de Coca-Cola y ECODES por compromiso ambiental #PorElClima",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663330305411/wMODcynMRdSLZuDt.webp",
      badge: "Gran Marca"
    },
    {
      id: 5,
      title: "Carmen Gastrobar 13º Aniversario",
      category: "eventos",
      type: "Reel",
      metrics: "33 likes • 5 comentarios",
      description: "Cobertura del 13º aniversario de Carmen Gastrobar",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663330305411/yxjJJjsNpyuNdckj.webp"
    },
    {
      id: 6,
      title: "Castellano Joyeros - Colgante Nexus",
      category: "colaboraciones",
      type: "Video",
      metrics: "79 likes",
      description: "Reel promocional del colgante Nexus en Oro de Ley 18K",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663330305411/qFcVuNfoYaVEBqEh.webp"
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
      <SEO {...seoData} />
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Three-Column Video Background */}
        <div className="absolute inset-0 flex">
          {/* Video Izquierda */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-1/3 h-full object-cover"
          >
            <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663330305411/dEqIKHxSmoCpFLAt.mp4" type="video/mp4" />
          </video>
          
          {/* Video Centro */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-1/3 h-full object-cover"
          >
            <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663330305411/ZVEIUnqcHVNmycMy.mp4" type="video/mp4" />
          </video>
          
          {/* Video Derecha */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-1/3 h-full object-cover"
          >
            <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663330305411/PCnpNOijkPSrBSXF.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Animated Lines Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: 'oklch(0.8 0.15 45)', stopOpacity: 0.4}} />
                <stop offset="100%" style={{stopColor: 'oklch(0.7 0.12 30)', stopOpacity: 0.25}} />
              </linearGradient>
            </defs>
            <path d="M 0,100 Q 250,50 500,100 T 1000,100" stroke="url(#lineGradient)" strokeWidth="4" fill="none">
              <animate attributeName="d" 
                values="M 0,100 Q 250,50 500,100 T 1000,100;
                        M 0,150 Q 250,100 500,150 T 1000,150;
                        M 0,100 Q 250,50 500,100 T 1000,100"
                dur="8s" repeatCount="indefinite" />
            </path>
            <path d="M 0,300 Q 400,250 800,300 T 1600,300" stroke="url(#lineGradient)" strokeWidth="4" fill="none">
              <animate attributeName="d" 
                values="M 0,300 Q 400,250 800,300 T 1600,300;
                        M 0,250 Q 400,300 800,250 T 1600,250;
                        M 0,300 Q 400,250 800,300 T 1600,300"
                dur="10s" repeatCount="indefinite" />
            </path>
            <path d="M 0,500 Q 300,450 600,500 T 1200,500" stroke="url(#lineGradient)" strokeWidth="4" fill="none">
              <animate attributeName="d" 
                values="M 0,500 Q 300,450 600,500 T 1200,500;
                        M 0,550 Q 300,500 600,550 T 1200,550;
                        M 0,500 Q 300,450 600,500 T 1200,500"
                dur="12s" repeatCount="indefinite" />
            </path>
          </svg>
        </div>
        
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]"></div>
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
              Portfolio de trabajos
            </h2>
            <p className="text-foreground/80 text-lg max-w-3xl mx-auto mb-4 leading-relaxed">
              Mi portfolio se compone de proyectos reales desarrollados para empresas de distintos sectores en Extremadura.
            </p>
            <p className="text-foreground/80 text-lg max-w-3xl mx-auto mb-4 leading-relaxed">
              Mi trabajo se centra en la creación de contenido audiovisual y la comunicación estratégica aplicada a negocio: vídeos corporativos, contenido para redes sociales, fotografía profesional y campañas pensadas para posicionar marca, no solo para "estar presentes".
            </p>
            <p className="text-foreground/80 text-lg max-w-3xl mx-auto mb-4 leading-relaxed">
              He trabajado con marcas como Gladys, Castellano Joyeros, Hotel Barceló Cáceres V Centenario, proyectos inmobiliarios, restauración, eventos empresariales y redes de networking como Red Mercantil o Círculo Empresarial Cacereño, entre otros.
            </p>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8 leading-relaxed italic">
              Cada proyecto parte siempre del mismo punto: entender la empresa, su público y su objetivo, para después crear un contenido coherente, profesional y alineado con su identidad.
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
                    alt={`${item.title} - ${item.description} | Pedrero Social Media`}
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
                alt="Equipo de Pedrero Social Media - Agencia de marketing digital especializada en Instagram y TikTok en Badajoz"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="font-['Fraunces'] font-bold text-4xl md:text-5xl text-foreground mb-6">
                Sobre mí
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Soy Celia Pedrero, publicista especializada en comunicación estratégica y creación de contenido audiovisual.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Trabajo de forma independiente acompañando a empresas que quieren profesionalizar su imagen y comunicar mejor lo que hacen. Mi enfoque combina creatividad y estrategia: analizo la marca, defino el mensaje, planifico el contenido y lo ejecuto de forma visual, cuidada y eficaz.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Mi trabajo no consiste solo en grabar o publicar. Me involucro en cada proyecto para que la comunicación tenga sentido, continuidad y resultados, adaptándome a sectores como hostelería, joyería, inmobiliaria, hotelería y eventos corporativos.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Actualmente desarrollo proyectos de manera recurrente con distintos clientes, gestionando su contenido mensual, grabaciones profesionales, fotografía corporativa y vídeos estratégicos para redes sociales.
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
                Contacto
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
                Si quieres trabajar conmigo, puedes hacerlo a través del formulario de contacto.
              </p>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Para facilitar la gestión y ofrecerte una respuesta ajustada a tus necesidades, te agradeceré que indiques el motivo de tu consulta seleccionando una de las opciones disponibles.
              </p>
              <p className="text-muted-foreground text-base max-w-2xl mx-auto mt-4 italic">
                Responderé personalmente para valorar tu proyecto y proponerte una solución adaptada a tus objetivos y a la realidad de tu negocio.
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
                  <Label htmlFor="service" className="font-['DM_Sans'] font-medium">Motivo de consulta</Label>
                  <select 
                    id="service"
                    required
                    className="mt-2 w-full rounded-2xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="gestion-redes">Gestión y estrategia de redes sociales</option>
                    <option value="video-corporativo">Vídeo corporativo</option>
                    <option value="contenido-audiovisual">Contenido audiovisual para marcas</option>
                    <option value="fotografia">Fotografía profesional</option>
                    <option value="eventos">Eventos y grabaciones puntuales</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="font-['DM_Sans'] font-medium">Mensaje</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Cuéntame más sobre tu proyecto..." 
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
