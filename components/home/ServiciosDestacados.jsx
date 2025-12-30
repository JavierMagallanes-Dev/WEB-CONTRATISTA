import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import * as Icons from 'lucide-react'

export default function ServiciosDestacados({ servicios }) {
  const serviciosDestacados = servicios.filter(s => s.destacado).slice(0, 4)

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-neutral-600">
            Soluciones completas para tu proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviciosDestacados.map((servicio) => {
            const Icon = Icons[servicio.icono] || Icons.Box
            
            return (
              <Card key={servicio.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {servicio.nombre}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {servicio.descripcionCorta}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" asChild>
                    <Link href={`/servicios/${servicio.slug}`}>
                      Ver detalles →
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}