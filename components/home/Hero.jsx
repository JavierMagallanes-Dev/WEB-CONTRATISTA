'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react'

export default function Hero({ config }) {
  const badges = [
    `${config.estadisticas.añosExperiencia}+ años de experiencia`,
    'Garantía de calidad',
    'Atención personalizada'
  ]

  return (
    <section className="relative text-white py-24 md:py-36 overflow-hidden">
      
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/banner-header.png)',
        }}
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Patrón */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Efectos de luz */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Título */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
            {config.slogan}
          </h1>

          {/* Descripción */}
          <p
            className="text-xl md:text-2xl mb-8 opacity-95 font-light animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            {config.descripcion}
          </p>

          {/* Botones */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <Button
              size="lg"
              asChild
              className="text-lg bg-white text-orange-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Link href="/contacto">
                Solicitar Cotización Gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg border-2 border-white text-white hover:bg-white hover:text-orange-600 transition-all duration-300 bg-white/10 hover:scale-105"
            >
              <Link href="/portafolio">Ver Nuestros Trabajos</Link>
            </Button>
          </div>

          {/* Badges */}
          <div
            className="flex flex-wrap gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center px-5 py-3 rounded-full backdrop-blur-md bg-white/15 border border-white/20 hover:bg-white/25 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ola */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
