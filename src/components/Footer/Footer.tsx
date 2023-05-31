
//STYLES
import './footer.css'

// MOCKS
import footerData from '../../../mocks/footerData.json'

// TYPES
import { IdiomContextType, ThemeContextType } from '../../types/contextTypes'
import { FooterInfoType } from '../../types/footerTypes'

// HOOKS
import { useContext } from 'react'

// CONTEXT
import { IdiomContext } from '../../context/IdiomContext'
import { ThemeContext } from '../../context/ThemeContext'

export function Footer(){

  // Get idiom of idiom context
  const { idiom }: IdiomContextType = useContext(IdiomContext)

  // Get theme of theme context
  const { theme }: ThemeContextType = useContext(ThemeContext)

  // Get data of mock
  const data: FooterInfoType[] = idiom === 'EN' ? footerData.english : footerData.spanish
  
  return(
    <section id="footer__section" className={ `${(theme === 'dark' ? 'dark-background-black' : 'light-background-white')}` }>
      <article id="footer-content__article">
        {
          data.map((asideInfo: any) => (
            <aside key={asideInfo.id} id={asideInfo.id}>
              <h3>{asideInfo.title}</h3>
              <ul>
                {
                  asideInfo.content.map((contentItem: any, id: number) => (
                    <li key={id}>{contentItem}</li>
                  ))
                }
              </ul>
            </aside>
          ))
        }
      </article>
    </section>
  )
}