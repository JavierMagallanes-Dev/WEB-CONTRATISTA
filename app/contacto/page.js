import FormularioContacto from '@/components/contacto/FormularioContacto'
import InfoContacto from '@/components/contacto/InfoContacto'
import { getConfiguracion, getServicios } from '@/lib/data-loader'

export const metadata = {
  title: 'Contacto | Solicita tu Cotización Gratis',
  description: 'Contáctanos para solicitar una cotización gratuita. Atención personalizada y respuesta rápida.',
}

export default function ContactoPage() {
  const config = getConfiguracion()
  const servicios = getServicios()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Contáctanos
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Solicita tu cotización gratuita. Responderemos en menos de 24 horas.
          </p>
        </div>

        {/* Grid: Formulario + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulario (2 columnas) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="font-display text-2xl font-bold mb-6">
                Envíanos un Mensaje
              </h2>
              <FormularioContacto servicios={servicios} />
            </div>
          </div>

          {/* Info de contacto (1 columna) */}
          <div>
            <InfoContacto config={config} />
          </div>
        </div>
      </div>
    </div>
  )
}