import ProyectosGrid from '@/components/portafolio/ProyectosGrid'
import { getProyectos, getServicios, getConfiguracion } from '@/lib/data-loader'

export const metadata = {
  title: 'Nuestros Proyectos | Portafolio de Trabajos Realizados',
  description: 'Conoce nuestros proyectos de enchapado, pintura, drywall y electricidad en Lima.',
}

export default function PortafolioPage() {
  const proyectos = getProyectos()
  const servicios = getServicios()
  const config = getConfiguracion()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Nuestros Proyectos
          </h1>
          <p className="text-xl text-neutral-600 mb-6">
            Más de {config.estadisticas.proyectosCompletados} trabajos completados con éxito
          </p>
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600">
                {config.estadisticas.proyectosCompletados}+
              </div>
              <div className="text-neutral-600">Proyectos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600">
                {config.estadisticas.clientesSatisfechos}+
              </div>
              <div className="text-neutral-600">Clientes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600">
                {config.estadisticas.añosExperiencia}+
              </div>
              <div className="text-neutral-600">Años</div>
            </div>
          </div>
        </div>

        {/* Grid con filtros (componente cliente) */}
        <ProyectosGrid proyectos={proyectos} servicios={servicios} />
      </div>
    </div>
  )
}