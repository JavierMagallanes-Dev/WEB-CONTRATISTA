'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Calendar, ArrowRight } from 'lucide-react'

function ProjectCard({ proyecto, index }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link href={`/portafolio/${proyecto.slug}`} className="group block">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
          {/* Imagen del proyecto */}
          <div className="relative h-64 bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300 overflow-hidden">
            {/* Badge flotante */}
            <div className="absolute top-4 left-4 z-10">
              <Badge className="bg-white/95 backdrop-blur-sm text-primary-700 shadow-lg border-0 px-4 py-1.5">
                {proyecto.servicioNombre}
              </Badge>
            </div>
            
            {/* Overlay con gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Texto centrado placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-primary-600 opacity-40">
                <p className="text-sm font-medium">Vista previa del proyecto</p>
                <p className="text-xs mt-1">(Próximamente)</p>
              </div>
            </div>

            {/* Botón de acción al hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <ArrowRight className="w-6 h-6 text-primary-600" />
              </div>
            </div>

            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-full" 
                 style={{ transitionDelay: '200ms' }} />
          </div>
          
          {/* Contenido */}
          <div className="p-6">
            <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
              {proyecto.titulo}
            </h3>
            
            {/* Información del proyecto */}
            <div className="space-y-2">
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0 text-primary-500" />
                <span className="line-clamp-1">{proyecto.ubicacion}</span>
              </div>
              
              {proyecto.fecha && (
                <div className="flex items-center text-gray-600 text-sm">
                  <Calendar className="w-4 h-4 mr-2 flex-shrink-0 text-primary-500" />
                  <span>
                    {new Date(proyecto.fecha).toLocaleDateString('es-PE', { 
                      year: 'numeric', 
                      month: 'long' 
                    })}
                  </span>
                </div>
              )}
            </div>

            {/* Separador */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 font-medium">Ver detalles completos</span>
                <ArrowRight className="w-4 h-4 text-primary-600 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default function ProyectosRecientes({ proyectos }) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 })
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation({ threshold: 0.3 })

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full blur-3xl opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header animado */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-8'
          }`}
        >
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Nuestro Trabajo
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Proyectos Recientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conoce algunos de nuestros trabajos más destacados
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {proyectos.slice(0, 6).map((proyecto, index) => (
            <ProjectCard 
              key={proyecto.slug} 
              proyecto={proyecto} 
              index={index}
            />
          ))}
        </div>

        {/* Botón Ver Todos */}
        <div 
          ref={buttonRef}
          className={`text-center transform transition-all duration-1000 ease-out ${
            buttonVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <Button 
            size="lg" 
            asChild
            className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 group"
          >
            <Link href="/portafolio" className="flex items-center gap-2">
              <span>Ver Todos los Proyectos</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}