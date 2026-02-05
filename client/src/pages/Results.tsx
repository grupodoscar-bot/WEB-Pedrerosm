import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Palette, 
  FileText, 
  Code, 
  Image as ImageIcon,
  Instagram,
  TrendingUp,
  Users,
  Target,
  Sparkles,
  Download,
  ExternalLink
} from "lucide-react";

export default function Results() {
  const projectStats = [
    { label: "Secciones Completadas", value: "7", icon: CheckCircle2 },
    { label: "Imágenes Generadas", value: "5", icon: ImageIcon },
    { label: "Componentes Creados", value: "12+", icon: Code },
    { label: "Páginas de Contenido", value: "5", icon: FileText },
  ];

  const designFeatures = [
    {
      title: "Paleta de Colores Terrosa",
      description: "Beige claro, terracota y carbón suave para transmitir calidez y profesionalidad",
      color: "oklch(0.58 0.15 35)"
    },
    {
      title: "Tipografía Elegante",
      description: "Fraunces para títulos, Literata para cuerpo, DM Sans para botones",
      color: "oklch(0.25 0.02 80)"
    },
    {
      title: "Formas Orgánicas",
      description: "Bordes redondeados variables y texturas sutiles de papel",
      color: "oklch(0.96 0.01 85)"
    }
  ];

  const sections = [
    {
      name: "Hero Section",
      description: "Propuesta de valor clara con fondo generado por IA y CTAs prominentes",
      icon: Target,
      features: ["Imagen de fondo personalizada", "Tipografía grande e impactante", "Doble CTA (primario y secundario)"]
    },
    {
      name: "Servicios",
      description: "6 servicios principales presentados en cards con iconos y descripciones",
      icon: Sparkles,
      features: ["Gestión de Redes", "Estrategia de Contenidos", "Creación de Contenido", "Community Management", "Social Ads", "Consultoría"]
    },
    {
      name: "Método de Trabajo",
      description: "Proceso en 4 pasos claramente definido",
      icon: TrendingUp,
      features: ["Briefing y Análisis", "Estrategia y Planificación", "Producción y Publicación", "Medición y Optimización"]
    },
    {
      name: "Portfolio",
      description: "Galería visual con placeholders para contenido de Instagram",
      icon: Instagram,
      features: ["Grid responsive", "Enlaces a Instagram", "Categorización de proyectos"]
    },
    {
      name: "Sobre Nosotros",
      description: "Historia, valores y diferenciadores de la agencia",
      icon: Users,
      features: ["Imagen del equipo", "3 valores principales", "Filosofía de trabajo"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-['Fraunces'] font-bold text-2xl md:text-3xl text-foreground">
                Resultados del Proyecto Pedrero SM
              </h1>
              <p className="text-muted-foreground mt-1">Sitio web completo de agencia de social media marketing</p>
            </div>
            <Button className="rounded-full font-['DM_Sans'] font-medium" asChild>
              <a href="/#">
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver Sitio Web
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Stats */}
      <section className="py-16 bg-gradient-to-b from-card to-background paper-texture">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-['Fraunces'] font-bold text-4xl md:text-5xl text-foreground mb-4">
              Proyecto Completado con Éxito
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hemos creado un sitio web completo y profesional para Pedrero SM, siguiendo las mejores prácticas de diseño y desarrollo web.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {projectStats.map((stat, index) => (
              <Card key={index} className="p-6 rounded-2xl text-center hover:shadow-lg transition-organic">
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-['Fraunces'] font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Palette className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="font-['Fraunces'] font-bold text-3xl md:text-4xl text-foreground mb-4">
                Filosofía de Diseño: Minimalismo Orgánico con Textura
              </h2>
              <p className="text-muted-foreground text-lg">
                Un diseño que combina la elegancia minimalista con la calidez de formas orgánicas y texturas sutiles, transmitiendo autenticidad y profesionalidad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {designFeatures.map((feature, index) => (
                <Card key={index} className="p-6 rounded-2xl">
                  <div 
                    className="w-full h-20 rounded-xl mb-4"
                    style={{ backgroundColor: feature.color }}
                  ></div>
                  <h3 className="font-['Fraunces'] font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              ))}
            </div>

            <Card className="p-8 rounded-2xl bg-card">
              <h3 className="font-['Fraunces'] font-semibold text-xl mb-4">Principios de Diseño Aplicados</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Espaciado Generoso</p>
                    <p className="text-sm text-muted-foreground">El espacio vacío (Ma) como elemento activo de diseño</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Transiciones Suaves</p>
                    <p className="text-sm text-muted-foreground">Animaciones orgánicas con curvas naturales (400-600ms)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Jerarquía Visual Clara</p>
                    <p className="text-sm text-muted-foreground">Contraste de tamaños y pesos tipográficos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Texturas Sutiles</p>
                    <p className="text-sm text-muted-foreground">Overlay de papel al 3% de opacidad para calidez</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sections Overview */}
      <section className="py-16 bg-card paper-texture">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-['Fraunces'] font-bold text-3xl md:text-4xl text-foreground mb-4">
              Secciones Implementadas
            </h2>
            <p className="text-muted-foreground text-lg">
              Cada sección ha sido diseñada estratégicamente para guiar al visitante hacia la conversión
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {sections.map((section, index) => (
              <Card key={index} className="p-6 rounded-2xl hover:shadow-xl transition-organic">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Fraunces'] font-semibold text-xl mb-2">{section.name}</h3>
                    <p className="text-muted-foreground mb-4">{section.description}</p>
                    <ul className="space-y-2">
                      {section.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Code className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="font-['Fraunces'] font-bold text-3xl md:text-4xl text-foreground mb-4">
                Stack Tecnológico
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 rounded-2xl">
                <h3 className="font-['Fraunces'] font-semibold text-lg mb-4">Frontend</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>React 19 con TypeScript</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Tailwind CSS 4 con OKLCH</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>shadcn/ui components</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Wouter para routing</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 rounded-2xl">
                <h3 className="font-['Fraunces'] font-semibold text-lg mb-4">Características</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Diseño 100% responsive</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Optimizado para SEO</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Animaciones suaves y naturales</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Formulario de contacto funcional</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Summary */}
      <section className="py-16 bg-gradient-to-b from-card to-background paper-texture">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-['Fraunces'] font-bold text-3xl md:text-4xl text-foreground mb-6">
              Beneficios de Esta Presentación Interactiva
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-['Fraunces'] font-semibold text-xl mb-2">Explorar Intuitivamente</h3>
                <p className="text-muted-foreground">
                  Navega fácilmente por todas las secciones y características del proyecto con una interfaz clara y organizada
                </p>
              </div>
              <div>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-['Fraunces'] font-semibold text-xl mb-2">Entender Mejor</h3>
                <p className="text-muted-foreground">
                  Visualiza el alcance completo del proyecto, las decisiones de diseño y la estructura implementada
                </p>
              </div>
              <div>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-['Fraunces'] font-semibold text-xl mb-2">Guardar y Compartir</h3>
                <p className="text-muted-foreground">
                  Accede a esta presentación en cualquier momento y compártela fácilmente con tu equipo o clientes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container text-center">
          <h2 className="font-['Fraunces'] font-bold text-3xl md:text-4xl text-foreground mb-4">
            ¿Listo para ver el sitio web en acción?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Explora el sitio web completo de Pedrero SM y descubre cómo hemos transformado la visión en realidad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8 font-['DM_Sans'] font-medium" asChild>
              <a href="/#">
                <ExternalLink className="w-5 h-5 mr-2" />
                Ver Sitio Web Completo
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 font-['DM_Sans'] font-medium" asChild>
              <a href="https://www.instagram.com/pedrero.socialmedia/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2" />
                Ver Instagram Original
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
