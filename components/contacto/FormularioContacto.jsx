'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2, CheckCircle } from 'lucide-react'

const formSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  telefono: z.string().min(9, 'Teléfono inválido'),
  servicio: z.string().min(1, 'Selecciona un servicio'),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

export default function FormularioContacto({ servicios }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Nombre */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Nombre Completo *
        </label>
        <Input
          {...register('nombre')}
          placeholder="Juan Pérez"
          className={errors.nombre ? 'border-red-500' : ''}
        />
        {errors.nombre && (
          <p className="text-sm text-red-500 mt-1">{errors.nombre.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Email *
        </label>
        <Input
          {...register('email')}
          type="email"
          placeholder="juan@ejemplo.com"
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Teléfono */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Teléfono/Celular *
        </label>
        <Input
          {...register('telefono')}
          placeholder="999 888 777"
          className={errors.telefono ? 'border-red-500' : ''}
        />
        {errors.telefono && (
          <p className="text-sm text-red-500 mt-1">{errors.telefono.message}</p>
        )}
      </div>

      {/* Servicio */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Servicio de Interés *
        </label>
        <Select onValueChange={(value) => setValue('servicio', value)}>
          <SelectTrigger className={errors.servicio ? 'border-red-500' : ''}>
            <SelectValue placeholder="Selecciona un servicio" />
          </SelectTrigger>
          <SelectContent>
            {servicios.map((servicio) => (
              <SelectItem key={servicio.id} value={servicio.nombre}>
                {servicio.nombre}
              </SelectItem>
            ))}
            <SelectItem value="Otro">Otro / Consulta General</SelectItem>
          </SelectContent>
        </Select>
        {errors.servicio && (
          <p className="text-sm text-red-500 mt-1">{errors.servicio.message}</p>
        )}
      </div>

      {/* Mensaje */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Mensaje / Descripción del Proyecto *
        </label>
        <Textarea
          {...register('mensaje')}
          placeholder="Cuéntanos sobre tu proyecto..."
          rows={5}
          className={errors.mensaje ? 'border-red-500' : ''}
        />
        {errors.mensaje && (
          <p className="text-sm text-red-500 mt-1">{errors.mensaje.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          'Enviar Mensaje'
        )}
      </Button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <Alert className="bg-success-50 border-success-500">
          <CheckCircle className="h-4 w-4 text-success-600" />
          <AlertDescription className="text-success-700">
            ¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.
          </AlertDescription>
        </Alert>
      )}

      {submitStatus === 'error' && (
        <Alert variant="destructive">
          <AlertDescription>
            Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos por WhatsApp.
          </AlertDescription>
        </Alert>
      )}
    </form>
  )
}