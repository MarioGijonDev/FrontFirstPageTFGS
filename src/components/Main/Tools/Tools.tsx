
// STYLES
import './tools.css'

// TYPES
import { ToolCardType, ToolsType } from '../../../types/toolsTypes'
import { ThemeContextType, IdiomContextType } from '../../../types/contextTypes'

// MOCKS
import toolsData from '../../../../mocks/toolsData.json'

// HOOKS
import { useContext, useEffect } from 'react'

// CONTEXT
import { IdiomContext } from '../../../context/IdiomContext'
import { ThemeContext } from '../../../context/ThemeContext'

import ScrollReveal from 'scrollreveal'

export function Tools(){

  // Get idiom of idiom context
  const { idiom }: IdiomContextType = useContext(IdiomContext)

  // Get theme of theme context
  const { theme }: ThemeContextType = useContext(ThemeContext)

  // Get data of mock
  const data: ToolsType = idiom == 'ES' ? toolsData.spanish : toolsData.english

  useEffect(()=>{
    for (let i = 0; i <= 5; i++){
      console.log(i)
      ScrollReveal().reveal(`#card-${i}`, {
        origin: i>=3 ? "right" : "left",
        distance: "500px",
        duration: 1500,
        opacity: 0,
        reset: true,
      });
    }
    ScrollReveal().reveal('#tools__section h2', {
      duration: 1000,
      opacity: 0,
      reset: true,
    })
  }, [])
  

  return(
    <section id="tools__section" className={ `section ${(theme === 'dark' ? 'dark-background-black' : 'light-background-white')}` }>
      <h2>{data.title}</h2>
      <article id='tools-content__article'>
        {
          data.content.map((card: ToolCardType, id: number) => (
              <div key={card.id} className="tool-card" id={`card-${id}`}>
                <div className="icon">
                  <i className="material-icons md-36">{card.icon}</i>
                </div>
                <p className="title">{card.titleCard}</p>
                <p className="text">{card.textCard}</p>
              </div>
            )
          )
        }
      </article>
      
    </section>
    
  )
}