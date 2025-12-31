import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const body = await request.json()
    const { nombre, email, telefono, servicio, mensaje } = body

    // Validación básica
    if (!nombre || !email || !telefono || !servicio || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    // Enviar email con Resend
    const { data, error } = await resend.emails.send({
      from: 'Sitio Web <onboarding@resend.dev>', // Cambiar después de verificar dominio
      to: ['jhuniormaga415@gmail.com'], // ← CAMBIA ESTO POR TU EMAIL REAL
      subject: `Nuevo contacto: ${servicio}`,
      html: `
        <h2>Nuevo Mensaje desde el Sitio Web</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Servicio de Interés:</strong> ${servicio}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Enviado desde el formulario de contacto</small></p>
      `,
    })

    if (error) {
      console.error('Error enviando email:', error)
      return NextResponse.json(
        { error: 'Error al enviar el mensaje' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error en API de contacto:', error)
    return NextResponse.json(
      { error: 'Error del servidor' },
      { status: 500 }
    )
  }
}
