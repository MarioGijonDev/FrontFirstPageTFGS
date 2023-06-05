
// STYLES
import './Navbar.css'

// HOOKS
import { useContext, useEffect } from 'react'

// MOCKS
import navbarData from '../../../../mocks/navbarData.json'
import { IdiomContext } from '../../../context/IdiomContext'
import { ThemeContext } from '../../../context/ThemeContext'

// TYPES
import { IdiomContextType, ThemeContextType } from '../../../types/contextTypes'
import { SectionType, NavbarType } from '../../../types/navbarTypes'

// HELPERS
import { HelperHandleActiveResponsiveNavbar } from '../../../helpers/navbarManager'

import ScrollReveal from 'scrollreveal'

export function Navbar(){
  
  useEffect(()=>{
    ScrollReveal().reveal("nav", {
      origin: "top",
      distance: "80px",
      duration: 800,
      reset: true,
    });
  }, [])

  // Obtenemos el idioma según el contexto
  const { idiom, handleIdiom }: IdiomContextType = useContext(IdiomContext)
  // Obtenemos el tema según el contexto
  const { theme, handleTheme }: ThemeContextType = useContext(ThemeContext)
  // Obtenemos los tipos de datos de logo y nav
  const { logo, nav }: NavbarType = idiom === 'EN' ? navbarData.english : navbarData.spanish
  // Obtenemos de los helpers, las acciones necesarias para la barra responsiva
  const handleActiveResponsiveNavbar = HelperHandleActiveResponsiveNavbar

  
  
  return (
    <nav id='nav'>
      <article id='logo__article'>
        <aside id='logo-content__aside'>
          <img src={logo.dark.logoImg} alt="icon" />
          <p>{logo.dark.logoName}</p>
        </aside>
        <div onClick={()=> {handleActiveResponsiveNavbar(logo, theme)}} id='responsive-navbar-active__button' className="container">
          <div className="toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </article>

      <article id='responsive-navbar-items__article' onClick={()=> document.getElementById('responsive-navbar-active__button')?.click()} className={ `${(theme === 'dark' ? 'dark-background-black' : 'light-background-white')}` }>
        <ul>
          {
            nav.map((section: SectionType) => (
              <li key={section.id}><a href={section.href}>{section.title}</a></li>
            ))
          }
          <aside id='responsive-buttons__aside'>
            <button id='idiom' onClick={handleIdiom}>{idiom}</button>
            <img id='themeIcon' onClick={handleTheme}
            src={
              `${(theme === 'dark' ?
                  "../../../../public/img/dark_dark-mode.svg"
                  :
                  "../../../../public/img/light_light-mode.svg")}`
              }
            alt="dar-dark-mode" />
          </aside>
        </ul>
      </article>

      <article id='navbar-items__article'>
        <ul>
          {
            nav.map((section: SectionType) => (
              <li key={section.id}><a href={section.href}>{section.title}</a></li>
            ))
          }
          <button id='idiom' onClick={handleIdiom}>{idiom}</button>
          <li><img id='themeIcon' onClick={handleTheme} src={ `${(theme === 'dark' ? "../../../../public/img/dark_dark-mode.svg" : "../../../../public/img/dark_light-mode.svg")}`} alt="dar-dark-mode" /></li>
        </ul>
      </article>
    </nav>
  )
  
}
