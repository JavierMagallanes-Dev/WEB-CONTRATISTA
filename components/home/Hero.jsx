import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export default function Hero({ config }) {
  const badges = [
    `${config.estadisticas.añosExperiencia}+ años de experiencia`,
    'Garantía de calidad',
    'Atención personalizada'
  ]

  return (
    <section 
      className="relative text-white py-20 md:py-32"
      style={{
        background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)'
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.1)' }} />
      
      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {config.slogan}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {config.descripcion}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              asChild 
              className="text-lg bg-white text-primary-600 hover:bg-neutral-100"
            >
              <Link href="/contacto">Solicitar Cotización Gratis</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="text-lg border-2 border-white text-white hover:bg-white hover:text-primary-600"
              style={{ borderColor: 'white' }}
            >
              <Link href="/portafolio">Ver Nuestros Trabajos</Link>
            </Button>
          </div>
          
          {/* Badges */}
          <div className="flex flex-wrap gap-4 justify-center">
            {badges.map((badge, index) => (
              <div 
                key={index} 
                className="flex items-center px-4 py-2 rounded-full"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              >
                <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#22c55e' }} />
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}