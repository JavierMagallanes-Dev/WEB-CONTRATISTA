'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Award, Shield, Users } from 'lucide-react'

function FeatureCard({ razon, icon: Icon, index }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="group relative">
        {/* Card principal */}
        <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
          {/* Efecto de brillo de fondo */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Círculo decorativo */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-700" />
          
          {/* Contenido */}
          <div className="relative">
            {/* Ícono con animación */}
            <div className="mb-6 inline-block">
              <div className="relative">
                {/* Círculo de fondo animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-110 transform" />
                
                {/* Contenedor del ícono */}
                <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 p-5 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Icon className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>

            {/* Título */}
            <h3 className="font-display text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
              {razon.titulo}
            </h3>

            {/* Descripción */}
            <p className="text-gray-600 leading-relaxed text-base">
              {razon.descripcion}
            </p>

            {/* Línea decorativa */}
            <div className="mt-6 h-1 w-16 bg-gradient-to-r from-primary-500 to-primary-300 rounded-full group-hover:w-24 transition-all duration-500" />
          </div>

          {/* Borde brillante al hover */}
          <div className="absolute inset-0 rounded-2xl ring-2 ring-primary-500/0 group-hover:ring-primary-500/20 transition-all duration-500" />
        </div>
      </div>
    </div>
  )
}

export default function PorQueElegirnos({ config }) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 })
  
  const razones = [
    {
      icon: Award,
      titulo: 'Experiencia Comprobada',
      descripcion: `Más de ${config.estadisticas.añosExperiencia} años en el mercado con ${config.estadisticas.proyectosCompletados}+ proyectos completados exitosamente.`
    },
    {
      icon: Shield,
      titulo: 'Trabajo Garantizado',
      descripcion: 'Garantía escrita de 1 año en mano de obra. Trabajamos con materiales de primera calidad.'
    },
    {
      icon: Users,
      titulo: 'Atención Personalizada',
      descripcion: 'Presupuestos sin costo, asesoramiento profesional y seguimiento en cada etapa del proyecto.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20" />
      
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
              Nuestra Diferencia
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compromiso con la calidad en cada proyecto que realizamos
          </p>
        </div>

        {/* Grid de razones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {razones.map((razon, index) => (
            <FeatureCard 
              key={index} 
              razon={razon} 
              icon={razon.icon}
              index={index}
            />
          ))}
        </div>

        {/* Estadísticas destacadas */}
        <div 
          className={`mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 shadow-2xl transform transition-all duration-1000 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                {config.estadisticas.añosExperiencia}+
              </div>
              <div className="text-primary-100 text-lg">Años de Experiencia</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                {config.estadisticas.proyectosCompletados}+
              </div>
              <div className="text-primary-100 text-lg">Proyectos Completados</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                {config.estadisticas.clientesSatisfechos}+
              </div>
              <div className="text-primary-100 text-lg">Clientes Satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}