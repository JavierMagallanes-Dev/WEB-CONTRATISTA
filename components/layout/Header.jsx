'use client'

import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Header({ config }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Portafolio', href: '/portafolio' },
    { name: 'Contacto', href: '/contacto' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-display font-bold text-xl text-primary-600 hover:text-primary-700 transition">
            {config.nombreNegocio}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-primary-600 transition font-medium"
              >
                {item.name}
              </Link>
            ))}
            <a 
              href={`tel:${config.contacto.telefono}`}
              className="flex items-center text-neutral-700 hover:text-primary-600 transition"
            >
              <Phone className="w-4 h-4 mr-2" />
              {config.contacto.telefono}
            </a>
            <Button asChild>
              <Link href="/contacto">Solicitar Cotización</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-neutral-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-neutral-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href={`tel:${config.contacto.telefono}`}
              className="flex items-center text-neutral-700 hover:text-primary-600 py-2"
            >
              <Phone className="w-4 h-4 mr-2" />
              {config.contacto.telefono}
            </a>
            <Button asChild className="w-full">
              <Link href="/contacto">Solicitar Cotización</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}