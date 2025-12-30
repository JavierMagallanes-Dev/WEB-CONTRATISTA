import fs from 'fs'
import path from 'path'

const dataDirectory = path.join(process.cwd(), 'data')

export function getConfiguracion() {
  const fullPath = path.join(dataDirectory, 'configuracion.json')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  return JSON.parse(fileContents)
}

export function getServicios() {
  const fullPath = path.join(dataDirectory, 'servicios.json')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const servicios = JSON.parse(fileContents)
  return servicios.sort((a, b) => a.orden - b.orden)
}

export function getServicioBySlug(slug) {
  const servicios = getServicios()
  return servicios.find(s => s.slug === slug)
}

export function getProyectos() {
  const proyectosDirectory = path.join(dataDirectory, 'proyectos')
  
  // Verificar si la carpeta existe
  if (!fs.existsSync(proyectosDirectory)) {
    return []
  }
  
  const filenames = fs.readdirSync(proyectosDirectory)
  const proyectos = filenames
    .filter(filename => filename.endsWith('.json'))
    .map(filename => {
      const fullPath = path.join(proyectosDirectory, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      return JSON.parse(fileContents)
    })
  
  return proyectos
    .filter(p => p.visible !== false)
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
}

export function getProyectoBySlug(slug) {
  const proyectos = getProyectos()
  return proyectos.find(p => p.slug === slug)
}

export function getProyectosByServicio(servicioId) {
  const proyectos = getProyectos()
  return proyectos.filter(p => p.servicio === servicioId)
}

export function getProyectosDestacados() {
  const proyectos = getProyectos()
  return proyectos.filter(p => p.destacado === true).slice(0, 6)
}