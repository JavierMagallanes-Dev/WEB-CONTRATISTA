import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CallToAction() {
  return (
    <section className="py-16 bg-primary-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          ¿Listo para Transformar tu Espacio?
        </h2>
        <p className="text-xl mb-8 text-primary-100">
          Obtén tu cotización gratuita hoy mismo. Sin compromiso.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contacto">Solicitar Cotización</Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10" 
            asChild
          >
            <Link href="/portafolio">Ver Portafolio</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}