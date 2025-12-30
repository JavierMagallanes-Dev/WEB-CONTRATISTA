import Link from 'next/link'
import { Phone, Mail, Clock } from 'lucide-react'

export default function Footer({ config }) {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: Info */}
          <div>
            <h3 className="font-display font-bold text-white text-xl mb-4">
              {config.nombreNegocio}
            </h3>
            <p className="text-sm text-neutral-400">{config.descripcion}</p>
          </div>

          {/* Columna 2: Enlaces */}
          <div>
            <h4 className="font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios" className="hover:text-primary-500 transition text-sm">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/portafolio" className="hover:text-primary-500 transition text-sm">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-primary-500 transition text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <a 
                  href={`tel:${config.contacto.telefono}`}
                  className="hover:text-primary-500 transition"
                >
                  {config.contacto.telefono}
                </a>
              </li>
              <li className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <a 
                  href={`mailto:${config.contacto.email}`}
                  className="hover:text-primary-500 transition"
                >
                  {config.contacto.email}
                </a>
              </li>
              <li className="flex items-start text-sm">
                <Clock className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span className="text-neutral-400">{config.contacto.horario}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} {config.nombreNegocio}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}