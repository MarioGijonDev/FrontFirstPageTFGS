
// STYLES
import './main.css'

// COMPONTENTS
import { Introduction } from './Introduction/Introduction'
import { News } from './News/News'
import { Tools } from './Tools/Tools'
import { Profile } from './Profile/Profile'

export function Main(){

  return(
    <main>
      <Introduction />
      <News />
      <Tools />
      <Profile />
    </main>
  )
}