'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin } from 'lucide-react'

export default function ProyectosGrid({ proyectos, servicios }) {
  const [filtroActivo, setFiltroActivo] = useState('todos')

  const proyectosFiltrados = filtroActivo === 'todos'
    ? proyectos
    : proyectos.filter(p => p.servicio === filtroActivo)

  return (
    <div>
      {/* Filtros */}
      <div className="sticky top-16 z-40 bg-white border-b border-neutral-200 py-4 mb-8 -mx-4 px-4">
        <div className="flex flex-wrap gap-2 justify-center">
          <Button
            variant={filtroActivo === 'todos' ? 'default' : 'outline'}
            onClick={() => setFiltroActivo('todos')}
          >
            Todos ({proyectos.length})
          </Button>
          {servicios.map((servicio) => {
            const count = proyectos.filter(p => p.servicio === servicio.id).length
            return (
              <Button
                key={servicio.id}
                variant={filtroActivo === servicio.id ? 'default' : 'outline'}
                onClick={() => setFiltroActivo(servicio.id)}
              >
                {servicio.nombre.split(' ')[0]} ({count})
              </Button>
            )
          })}
        </div>
        <p className="text-center text-sm text-neutral-600 mt-2">
          Mostrando {proyectosFiltrados.length} proyecto{proyectosFiltrados.length !== 1 && 's'}
        </p>
      </div>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyectosFiltrados.map((proyecto) => (
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
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition">
                  {proyecto.titulo}
                </h3>
                <div className="flex items-center text-sm text-neutral-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {proyecto.ubicacion}
                </div>
                {proyecto.duracionDias && (
                  <p className="text-sm text-neutral-500">
                    Duración: {proyecto.duracionDias} días
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {proyectosFiltrados.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-neutral-600">
            No hay proyectos en esta categoría
          </p>
        </div>
      )}
    </div>
  )
}