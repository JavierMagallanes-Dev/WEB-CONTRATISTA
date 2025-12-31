import { Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function InfoContacto({ config }) {
  return (
    <div className="space-y-6">
      {/* Información de contacto */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="font-semibold text-lg mb-4">
            Información de Contacto
          </h3>

          <div className="space-y-4">
            {/* Teléfono */}
            <a
              href={`tel:${config.contacto.telefono}`}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 transition"
            >
              <div className="bg-primary-100 p-2 rounded">
                <Phone className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="text-sm text-neutral-600">Teléfono</div>
                <div className="font-semibold">
                  {config.contacto.telefono}
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${config.contacto.email}`}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 transition"
            >
              <div className="bg-primary-100 p-2 rounded">
                <Mail className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="text-sm text-neutral-600">Email</div>
                <div className="font-semibold">
                  {config.contacto.email}
                </div>
              </div>
            </a>

            {/* Horario */}
            <div className="flex items-center gap-3 p-3">
              <div className="bg-primary-100 p-2 rounded">
                <Clock className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="text-sm text-neutral-600">
                  Horario de Atención
                </div>
                <div className="font-semibold">
                  {config.contacto.horario}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* WhatsApp destacado */}
      <Card className="bg-green-50 border-green-200">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <MessageCircle className="w-6 h-6 text-green-600" />
            <h3 className="font-semibold text-lg">
              Atención Inmediata
            </h3>
          </div>

          <p className="text-sm text-neutral-700 mb-4">
            Contáctanos por WhatsApp para una respuesta rápida
          </p>

          <Button
            asChild
            className="w-full bg-green-600 hover:bg-green-700"
          >
            <a
              href={`https://wa.me/${config.contacto.whatsapp}?text=Hola, me interesa solicitar información`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Abrir WhatsApp
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
