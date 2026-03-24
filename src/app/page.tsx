import Hero from '@/components/sections/Hero'
import SobreMi from '@/components/sections/SobreMi'
import Experiencia from '@/components/sections/Experiencia'
import Proyectos from '@/components/sections/Proyectos'
import Stack from '@/components/sections/Stack'
import Educacion from '@/components/sections/Educacion'
import Contacto from '@/components/sections/Contacto'

export default function Home() {
  return (
    <>
      <Hero />
      <SobreMi />
      <Experiencia />
      <Proyectos />
      <Stack />
      <Educacion />
      <Contacto />
    </>
  )
}
