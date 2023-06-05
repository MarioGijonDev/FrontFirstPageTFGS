
// STYLES
import './Header.css'

// COMPONTENTS
import { Navbar } from './Navbar/Navbar'
import { HeroHeader } from './HeroHeader/HeroHeader'

export function Header() {

  return (
    <header id='home'>
      <Navbar/>
      <HeroHeader />
    </header>
  )
}