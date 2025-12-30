'use client'

import { useState } from 'react'

export default function ComparadorAntesDepues({ imagenAntes, imagenDespues, titulo }) {
  const [posicion, setPosicion] = useState(50)

  return (
    <div className="relative w-full h-96 bg-neutral-100 rounded-lg overflow-hidden">
      {/* Imagen Después (fondo) */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-success-100 to-success-200 flex items-center justify-center"
      >
        <div className="text-center text-neutral-500">
          <p className="text-sm font-semibold">DESPUÉS</p>
          <p className="text-xs mt-1">(Imagen próximamente)</p>
        </div>
      </div>

      {/* Imagen Antes (con clip) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center"
        style={{ clipPath: `inset(0 ${100 - posicion}% 0 0)` }}
      >
        <div className="text-center text-neutral-500">
          <p className="text-sm font-semibold">ANTES</p>
          <p className="text-xs mt-1">(Imagen próximamente)</p>
        </div>
      </div>

      {/* Slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={posicion}
        onChange={(e) => setPosicion(e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
      />

      {/* Línea divisora */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 pointer-events-none"
        style={{ left: `${posicion}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-semibold">
        ANTES
      </div>
      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-semibold">
        DESPUÉS
      </div>
    </div>
  )
}