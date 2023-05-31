
// STYLES
import './news.css'

// TYPES
import { NewsType } from '../../../types/newsTypes'
import { IdiomContextType, ThemeContextType } from '../../../types/contextTypes'

// MOCKS
import newsData from '../../../../mocks/newsData.json'

// HOOKS
import { useContext, useEffect } from 'react'

// CONTEXT
import { IdiomContext } from '../../../context/IdiomContext'
import { ThemeContext } from '../../../context/ThemeContext'

import ScrollReveal from 'scrollreveal'

export function News(){

  // Get idiom of idiom context
  const { idiom }: IdiomContextType = useContext(IdiomContext)

  // Get theme of theme context
  const { theme }: ThemeContextType = useContext(ThemeContext)

  // Get data of mock
  const data: NewsType = idiom == 'ES' ? newsData.spanish : newsData.english

  useEffect(()=>{
    ScrollReveal().reveal('#news-content-desc__aside', {
      origin: "right",
      distance: "500px",
      duration: 1000,
      opacity: 0,
      reset: true,
    })
    ScrollReveal().reveal('#news__section div', {
      origin: "left",
      distance: "500px",
      duration: 1000,
      opacity: 0,
      reset: true,
    })
    ScrollReveal().reveal('#news__section h2', {
      duration: 1000,
      opacity: 0,
      reset: true,
    })
  }, [])

  return (
    <section id="news__section" className={ `section ${(theme === 'dark' ? 'dark-background-grey' : 'light-background-blue')}` }>
      <h2>{data.title}</h2>
      <article id='news-content__article' className='hide-on-responsive-navbar'>
        <div>
          <aside className="new-card-box__container">
            <span></span>
            <img src="../../../../public/img/drawing-svgrepo-com.svg" alt="" />
            <p>
              {data.content.card.titleCard}
            </p>
          </aside>
        </div>
        <aside id='news-content-desc__aside'>
          {
            data.content.text.map((txt: string, id: number) => (
              <p key={id}>{txt}</p>
            ))
          }
        </aside>
      </article>
    </section>
  )
}