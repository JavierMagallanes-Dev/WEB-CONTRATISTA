'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import * as Icons from 'lucide-react'

function ServiceCard({ servicio, index }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })
  const Icon = Icons[servicio.icono] || Icons.Box

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="group h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50 overflow-hidden relative">
        {/* Efecto de brillo al hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" />
        
        <CardHeader className="relative">
          {/* Ícono con efecto de fondo */}
          <div className="flex items-start gap-4 mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500/10 rounded-xl blur-xl group-hover:bg-primary-500/20 transition-all duration-300" />
              <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-7 h-7 text-white" />
              </div>
            </div>
            
            {/* Título */}
            <div className="flex-1">
              <CardTitle className="text-xl mb-2 group-hover:text-primary-600 transition-colors duration-300">
                {servicio.nombre}
              </CardTitle>
            </div>
          </div>
          
          {/* Descripción */}
          <CardDescription className="text-base leading-relaxed text-gray-600">
            {servicio.descripcionCorta}
          </CardDescription>
        </CardHeader>

        {/* Separador decorativo */}
        <div className="px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-primary-300 transition-colors duration-300" />
        </div>

        <CardFooter className="pt-6">
          <Button 
            asChild 
            className="w-full group/btn bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href={`/servicios/${servicio.slug}`} className="flex items-center justify-center gap-2">
              <span>Ver detalles</span>
              <Icons.ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default function ServiciosDestacados({ servicios }) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 })
  const serviciosDestacados = servicios.filter(s => s.destacado).slice(0, 4)

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header con animación */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-8'
          }`}
        >
          <div className="inline-block mb-4">
            <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
              Nuestros Servicios
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Soluciones Completas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transformamos tus espacios con calidad y profesionalismo
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviciosDestacados.map((servicio, index) => (
            <ServiceCard 
              key={servicio.id} 
              servicio={servicio} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}