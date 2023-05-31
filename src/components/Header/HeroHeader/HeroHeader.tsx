
// STYLES
import './HeroHeader.css'

// MOCKS
import heroData from '../../../../mocks/heroData.json'

// HOOKS
import { useContext, useEffect } from 'react'

// CONTEXT
import { IdiomContext } from '../../../context/IdiomContext'

import ScrollReveal from 'scrollreveal';

export function HeroHeader(){

  // Get idiom of idiom context
  const { idiom } = useContext(IdiomContext)

  // Get mock
  const {heroTitle} = idiom == 'ES' ? heroData.spanish : heroData.english

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
      <h1>{heroTitle}</h1>
      <article id="video">
        <video className="back__video" autoPlay loop muted playsInline>
          <source src='../../../../public/video/background-hero-video.mp4' type='video/mp4'/>
        </video>
      </article>
    </section>
  )
}
