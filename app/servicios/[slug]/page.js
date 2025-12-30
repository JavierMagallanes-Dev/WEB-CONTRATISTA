import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { getServicioBySlug, getProyectosByServicio } from '@/lib/data-loader'
import { notFound } from 'next/navigation'
import * as Icons from 'lucide-react'
import { CheckCircle, MapPin } from 'lucide-react'

export async function generateMetadata({ params }) {
  const { slug } = await params // ← CAMBIO AQUÍ
  const servicio = getServicioBySlug(slug)
  if (!servicio) return {}

  return {
    title: `${servicio.nombre} | Servicios Profesionales`,
    description: servicio.descripcionCorta,
  }
}

export default async function ServicioDetallePage({ params }) {
  const { slug } = await params // ← CAMBIO AQUÍ
  const servicio = getServicioBySlug(slug)
  
  if (!servicio) {
    notFound()
  }

  const proyectos = getProyectosByServicio(servicio.id)
  const Icon = Icons[servicio.icono] || Icons.Box

  return (
    <div>
      {/* Hero */}
      <section 
        className="relative py-20 text-white"
        style={{ background: 'linear-gradient(135deg, #404040 0%, #171717 100%)' }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary-500 p-3 rounded-lg">
              <Icon className="w-8 h-8" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold">
              {servicio.nombre}
            </h1>
          </div>
          <p className="text-xl opacity-90 max-w-2xl mb-6">
            {servicio.descripcionCorta}
          </p>
          <Button size="lg" asChild>
            <Link href="/contacto">Solicitar Presupuesto</Link>
          </Button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Descripción Detallada */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-6">
            Sobre este Servicio
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            {servicio.descripcionLarga}
          </p>
        </section>

        {/* Beneficios */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-6">
            Beneficios Clave
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {servicio.beneficios.map((beneficio, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success-500 flex-shrink-0 mt-1" />
                  <p className="text-neutral-700">{beneficio}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Proceso */}
        {servicio.proceso && servicio.proceso.length > 0 && (
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold mb-6">
              Nuestro Proceso
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicio.proceso.map((paso, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <p className="font-semibold">{paso}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Proyectos de este servicio */}
        {proyectos.length > 0 && (
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold mb-6">
              Proyectos Realizados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {proyectos.slice(0, 6).map((proyecto) => (
                <Link
                  key={proyecto.slug}
                  href={`/portafolio/${proyecto.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      <div className="text-center text-neutral-500">
                        <p className="text-sm">Imagen del proyecto</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2 group-hover:text-primary-600 transition">
                        {proyecto.titulo}
                      </h3>
                      <div className="flex items-center text-sm text-neutral-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        {proyecto.ubicacion}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {proyectos.length > 6 && (
              <div className="text-center mt-8">
                <Button asChild>
                  <Link href="/portafolio">Ver Más Proyectos</Link>
                </Button>
              </div>
            )}
          </section>
        )}

        {/* FAQs */}
        {servicio.faqs && servicio.faqs.length > 0 && (
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold mb-6">
              Preguntas Frecuentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {servicio.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.pregunta}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-600">
                    {faq.respuesta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}

        {/* CTA Final */}
        <section className="bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            ¿Necesitas este Servicio?
          </h2>
          <p className="text-lg text-neutral-700 mb-6">
            Solicita tu presupuesto sin compromiso y comienza tu proyecto hoy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contacto">Solicitar Cotización</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={`https://wa.me/51999888777?text=Hola, me interesa el servicio de ${encodeURIComponent(servicio.nombre)}`}>
                Contactar por WhatsApp
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}