import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin } from 'lucide-react'

export default function ProyectosRecientes({ proyectos }) {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Proyectos Recientes
          </h2>
          <p className="text-xl text-neutral-600">
            Conoce algunos de nuestros trabajos realizados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {proyectos.slice(0, 6).map((proyecto) => (
            <Link
              key={proyecto.slug}
              href={`/portafolio/${proyecto.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <Badge className="absolute top-4 left-4">
                    {proyecto.servicioNombre}
                  </Badge>
                  <div className="text-center text-neutral-500">
                    <p className="text-sm">Imagen del proyecto</p>
                    <p className="text-xs mt-1">(Próximamente)</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition">
                    {proyecto.titulo}
                  </h3>
                  <div className="flex items-center text-sm text-neutral-600">
                    <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                    {proyecto.ubicacion}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/portafolio">Ver Todos los Proyectos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}