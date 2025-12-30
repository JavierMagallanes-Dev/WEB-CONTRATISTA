import Hero from '@/components/home/Hero'
import ServiciosDestacados from '@/components/home/ServiciosDestacados'
import PorQueElegirnos from '@/components/home/PorQueElegirnos'
import ProyectosRecientes from '@/components/home/ProyectosRecientes'
import CallToAction from '@/components/home/CallToAction'
import { getConfiguracion, getServicios, getProyectosDestacados } from '@/lib/data-loader'

export default function Home() {
  const config = getConfiguracion()
  const servicios = getServicios()
  const proyectos = getProyectosDestacados()

  return (
    <>
      <Hero config={config} />
      <ServiciosDestacados servicios={servicios} />
      <PorQueElegirnos config={config} />
      <ProyectosRecientes proyectos={proyectos} />
      <CallToAction />
    </>
  )
}