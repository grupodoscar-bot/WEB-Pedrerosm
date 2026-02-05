import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AvisoLegal() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <h1 className="font-['Fraunces'] font-bold text-4xl md:text-5xl text-foreground mb-8">
              Aviso Legal
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2 className="font-['Fraunces'] font-semibold text-2xl text-foreground mb-4">
                  1. Datos Identificativos
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa a los usuarios de los datos identificativos de Pedrero Social Media:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Denominación social:</strong> Pedrero Social Media</li>
                  <li><strong>Domicilio social:</strong> Badajoz, España</li>
                  <li><strong>Correo electrónico:</strong> hola@pedrerosm.com</li>
                  <li><strong>Instagram:</strong> @pedrero.socialmedia</li>
                </ul>
              </div>

              <div>
                <h2 className="font-['Fraunces'] font-semibold text-2xl text-foreground mb-4">
                  2. Objeto
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  El presente aviso legal regula el uso del sitio web pedrerosm.com (en adelante, el "Sitio Web"), del que es titular Pedrero Social Media. La navegación por el Sitio Web atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
                </p>
              </div>

              <div>
                <h2 className="font-['Fraunces'] font-semibold text-2xl text-foreground mb-4">
                  3. Condiciones de Uso
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que Pedrero Social Media ofrece a través del Sitio Web y, con carácter enunciativo pero no limitativo, a no emplearlos para:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
                  <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos.</li>
                  <li>Provocar daños en los sistemas físicos y lógicos de Pedrero Social Media, de sus proveedores o de terceras personas.</li>
                  <li>Introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar los daños anteriormente mencionados.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-['Fraunces'] font-semibold text-2xl text-foreground mb-4">
                  4. Propiedad Intelectual e Industrial
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Todos los contenidos del Sitio Web, incluyendo, sin carácter limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a Pedrero Social Media, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso del Sitio Web.
                </p>
              </div>

              <div>
                <h2 className="font-['Fraunces'] font-semibold text-2xl text-foreground mb-4">
                  5. Exclusión de Garantías y Responsabilidad
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Pedrero Social Media no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
                </p>
              </div>

              <div>
                <h2 className="font-['Fraunces'] font-semibold text-2xl text-foreground mb-4">
                  6. Modificaciones
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Pedrero Social Media se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
                </p>
              </div>

              <div>
                <h2 className="font-['Fraunces'] font-semibold text-2xl text-foreground mb-4">
                  7. Legislación Aplicable y Jurisdicción
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  La relación entre Pedrero Social Media y el usuario se regirá por la normativa española vigente. En caso de controversia, las partes se someterán a los Juzgados y Tribunales de Badajoz, España.
                </p>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-muted-foreground text-sm">
                  Última actualización: Febrero 2026
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
