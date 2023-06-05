
// STYLES
import './HeroHeader.css'

// MOCKS
import heroData from '../../../../mocks/heroData.json'

// HOOKS
import { useContext, useEffect } from 'react'

// CONTEXT
import { IdiomContext } from '../../../context/IdiomContext'

// ANIMATIONS
import ScrollReveal from 'scrollreveal';

// Compontente
export function HeroHeader(){

  // Obtenemos el idioma según el valor del contexto
  const { idiom } = useContext(IdiomContext)

  // Obtenemos el contenido según el valor del idioma
  const { heroTitle } = idiom == 'ES' ? heroData.spanish : heroData.english

  // Ejecutamos la animación cada vez que el componente se renderice
  useEffect(()=>{
    ScrollReveal().reveal('#hero__section h1', {
      opacity: 0,
      delay: 300,
      reset: true,
      duration: 1000,
    })
  }, [])

  return (
    <section id="hero__section">
      <h1>{ heroTitle }</h1>
      <article id="video">
        <video className="back__video" autoPlay loop muted playsInline>
          <source src='../../../../public/video/background-hero-video.mp4' type='video/mp4'/>
        </video>
      </article>
    </section>
  )
}
