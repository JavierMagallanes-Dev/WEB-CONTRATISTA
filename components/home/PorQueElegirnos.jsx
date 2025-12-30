import { Award, Shield, Users } from 'lucide-react'

export default function PorQueElegirnos({ config }) {
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-xl text-neutral-600">
            Compromiso con la calidad en cada proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {razones.map((razon, index) => {
            const Icon = razon.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {razon.titulo}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {razon.descripcion}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}