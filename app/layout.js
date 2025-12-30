import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import { getConfiguracion } from '@/lib/data-loader'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: 'Servicios de Construcción y Acabados en Lima',
  description: 'Expertos en enchapado, pintura, drywall y electricidad. Más de 10 años de experiencia.',
}

export default function RootLayout({ children }) {
  const config = getConfiguracion()

  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Header config={config} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer config={config} />
        <WhatsAppButton numero={config.contacto.whatsapp} />
      </body>
    </html>
  )
}