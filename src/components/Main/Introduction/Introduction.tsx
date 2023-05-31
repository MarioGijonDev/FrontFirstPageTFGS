
// STYLES
import './introduction.css'

// HOOKS
import { useContext, useEffect } from 'react'

// TYPES
import { IntroductionType } from '../../../types/introductionTypes'
import { IdiomContextType, ThemeContextType } from '../../../types/contextTypes'

// MOCKS
import introductionData from '../../../../mocks/introductionData.json'

// CONTEXT
import { IdiomContext } from '../../../context/IdiomContext'
import { ThemeContext } from '../../../context/ThemeContext'

import ScrollReveal from 'scrollreveal'

export function Introduction(){
  
  // Get idiom of idiom context
  const { idiom }: IdiomContextType = useContext(IdiomContext)

  // Get theme of theme context
  const { theme }: ThemeContextType = useContext(ThemeContext)

  // Get data of mock
  const data: IntroductionType = idiom === 'EN' ? introductionData.english : introductionData.spanish

  useEffect(()=>{
    ScrollReveal().reveal('#intro-content-desc__aside', {
      origin: "left",
      distance: "500px",
      duration: 1000,
      opacity: 0,
      reset: true,
    })
    ScrollReveal().reveal('#intro-content__article-img', {
      origin: "right",
      distance: "500px",
      duration: 1000,
      opacity: 0,
      reset: true,
    })
    ScrollReveal().reveal('#introduction__section h2', {
      duration: 1000,
      opacity: 0,
      reset: true,
    })
  }, [])

  return (
    <section id='introduction__section' className={ `section ${(theme === 'dark' ? 'dark-background-black' : 'light-background-white')}` }>
      <h2>{data.title}</h2>
      <article id='intro-content__article'>
        <aside id='intro-content-desc__aside'>
          {
            data.content.text.map((txt: string, id: number) => (
              <p key={id}>{txt}</p>
            ))
          }
        </aside>
        <div id='intro-content__article-img'>
          <img className='hide-on-responsive-navbar' src="../../../../public/img/robot-img-1.png" alt="Imagen de un cerebro en 3D" />
        </div>
      </article>
    </section>
  )
}