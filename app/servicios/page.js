import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getServicios } from '@/lib/data-loader'
import * as Icons from 'lucide-react'

export const metadata = {
  title: 'Nuestros Servicios | Construcción y Acabados',
  description: 'Servicios profesionales de enchapado, pintura, drywall y electricidad en Lima.',
}

export default function ServiciosPage() {
  const servicios = getServicios()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Ofrecemos soluciones completas en construcción y acabados con la más alta calidad
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicios.map((servicio) => {
            const Icon = Icons[servicio.icono] || Icons.Box
            return (
              <Card key={servicio.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary-100 p-2 rounded-lg">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <CardTitle className="text-2xl">{servicio.nombre}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {servicio.descripcionCorta}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {servicio.beneficios.slice(0, 3).map((beneficio, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <span className="text-success-500 mr-2">✓</span>
                        {beneficio}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/servicios/${servicio.slug}`}>
                      Ver Detalles Completos
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}