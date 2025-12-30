import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import ComparadorAntesDepues from '@/components/portafolio/ComparadorAntesDepues'
import { getProyectoBySlug, getProyectosByServicio } from '@/lib/data-loader'
import { notFound } from 'next/navigation'
import { MapPin, Calendar, Clock, Ruler } from 'lucide-react'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const proyecto = getProyectoBySlug(slug)
  if (!proyecto) return {}

  return {
    title: proyecto.seo?.titulo || `${proyecto.titulo} | Nuestros Proyectos`,
    description: proyecto.seo?.descripcion || proyecto.descripcion,
  }
}

export default async function ProyectoDetallePage({ params }) {
  const { slug } = await params
  const proyecto = getProyectoBySlug(slug)
  
  if (!proyecto) {
    notFound()
  }

  const proyectosRelacionados = getProyectosByServicio(proyecto.servicio)
    .filter(p => p.slug !== proyecto.slug)
    .slice(0, 3)

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-neutral-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Inicio</Link>
            <span>/</span>
            <Link href="/portafolio" className="hover:text-primary-600">Portafolio</Link>
            <span>/</span>
            <span className="text-neutral-900">{proyecto.titulo}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Badge className="mb-4">{proyecto.servicioNombre}</Badge>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {proyecto.titulo}
          </h1>
          <div className="flex flex-wrap gap-4 text-neutral-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              {proyecto.ubicacion}
            </div>
            {proyecto.fecha && (
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(proyecto.fecha).toLocaleDateString('es-PE', { year: 'numeric', month: 'long' })}
              </div>
            )}
          </div>
        </div>

        {/* Imagen Principal (placeholder) */}
        <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden mb-12 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
          <div className="text-center text-neutral-500">
            <p className="text-lg">Imagen principal del proyecto</p>
            <p className="text-sm mt-2">(Se agregará en la Fase 10)</p>
          </div>
        </div>

        {/* Grid: Info + Detalles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Columna izquierda: Descripción */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold mb-4">
              Sobre el Proyecto
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {proyecto.descripcion}
            </p>
          </div>

          {/* Columna derecha: Detalles técnicos */}
          <div>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4">
                  Detalles del Proyecto
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-100 p-2 rounded">
                      <Badge className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-neutral-600">Servicio</div>
                      <div className="font-semibold">{proyecto.servicioNombre}</div>
                    </div>
                  </div>
                  {proyecto.duracionDias && (
                    <div className="flex items-center gap-3">
                      <div className="bg-primary-100 p-2 rounded">
                        <Clock className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-sm text-neutral-600">Duración</div>
                        <div className="font-semibold">{proyecto.duracionDias} días</div>
                      </div>
                    </div>
                  )}
                  {proyecto.metrosCuadrados && (
                    <div className="flex items-center gap-3">
                      <div className="bg-primary-100 p-2 rounded">
                        <Ruler className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-sm text-neutral-600">Área trabajada</div>
                        <div className="font-semibold">{proyecto.metrosCuadrados} m²</div>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-100 p-2 rounded">
                      <MapPin className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="text-sm text-neutral-600">Ubicación</div>
                      <div className="font-semibold">{proyecto.ubicacion}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Comparador Antes/Después */}
        {proyecto.imagenes.antes && proyecto.imagenes.despues && (
          <div className="mb-12">
            <h2 className="font-display text-3xl font-bold mb-6 text-center">
              Transformación del Espacio
            </h2>
            <p className="text-center text-neutral-600 mb-8">
              Desliza para comparar el antes y después
            </p>
            <ComparadorAntesDepues
              imagenAntes={proyecto.imagenes.antes}
              imagenDespues={proyecto.imagenes.despues}
              titulo={proyecto.titulo}
            />
          </div>
        )}

        {/* Proyectos Relacionados */}
        {proyectosRelacionados.length > 0 && (
          <div className="mb-12">
            <h2 className="font-display text-3xl font-bold mb-6">
              Proyectos Similares
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {proyectosRelacionados.map((proyectoRel) => (
                <Link
                  key={proyectoRel.slug}
                  href={`/portafolio/${proyectoRel.slug}`}
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
                        {proyectoRel.titulo}
                      </h3>
                      <div className="flex items-center text-sm text-neutral-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        {proyectoRel.ubicacion}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA Final */}
        <div className="bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            ¿Te Gustó Este Trabajo?
          </h2>
          <p className="text-lg text-neutral-700 mb-6">
            Solicita tu cotización para un proyecto similar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contacto">Solicitar Cotización</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/portafolio">Ver Más Proyectos</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}