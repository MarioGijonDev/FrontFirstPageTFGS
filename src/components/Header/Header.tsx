
// STYLES
import './Header.css'

// COMPONTENTS
import { Navbar } from './Navbar/Navbar'
import { HeroHeader } from './HeroHeader/HeroHeader'

export function Header() {

  window.addEventListener("scroll", () => {
    
    if(window.pageYOffset > 200)
      document.getElementById('nav')!.style.opacity = "0"
    else
      document.getElementById('nav')!.style.opacity = "1"
    

    if(window.pageYOffset > 1000)
      document.getElementById('nav')!.style.display = "none"
    else
      document.getElementById('nav')!.style.display = "flex"    

  });

  return (
    <header id='home'>
      <Navbar/>
      <HeroHeader />
    </header>
  )
}