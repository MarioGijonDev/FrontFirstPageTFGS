
// STYLES
import './profile.css'

// MOCKS
import profileData from '../../../../mocks/profileData.json'

//TYPES
import { IdiomContextType, ThemeContextType } from '../../../types/contextTypes'

// HOOKS
import { useContext, useState, useEffect } from 'react'

// CONTEXT
import { ThemeContext } from '../../../context/ThemeContext'

// API
import { LoguedContext } from '../../../context/loguedContext'
import { ProfileStateManager } from '../../../helpers/profileManager'
import { IdiomContext } from '../../../context/IdiomContext'

// COMPONENTS
import { ProfileErrors } from './ProfileErrors/ProfileErrors'

import ScrollReveal from 'scrollreveal'

export function Profile(){

  const [isRegistered, setIsRegistered] = useState(true);
  const [errors, setErrors] = useState([])

  // Get theme of theme context
  const { theme }: ThemeContextType = useContext(ThemeContext)
  const { idiom }: IdiomContextType = useContext(IdiomContext)
  const { logued, setLogued }: any = useContext(LoguedContext)

  const handleSwap = () => {setIsRegistered(!isRegistered), handleErrors([])}
  const handleErrors = (errorsSend: any) => setErrors(errorsSend)

  useEffect(()=>{
    ScrollReveal().reveal(`#swapMethod__button`, {
      origin: "top",
      distance: "1000px",
      duration: 2000,
      opacity: 0,
      reset: true,
    });
  }, [])

  const buttonText = idiom == 'ES' ? profileData.spanish : profileData.english

  const swapButton = ()=>{
    if(!logued || logued.status === 'bad'){
      if(isRegistered){
        return (
          <button className='profileButton' onClick={handleSwap}  id='swapMethod__button'>
            {buttonText.isRegisteredText}
          </button>
        )
      }else{
        return (
          <button className='profileButton' onClick={handleSwap}  id='swapMethod__button'>
            {buttonText.isNotRegisteredText}
          </button>
        )
      }
    }
  }
    
  return(
    <section id="profile__section" className={ `section ${(theme === 'dark' ? 'dark-background-grey' : 'light-background-blue')}` }>
      {
        swapButton()
      }
      {
        (errors.length > 0) &&
          <ProfileErrors errors={errors} />
      }
      {
        <ProfileStateManager logued={logued} isRegistered={isRegistered} handleErrors={handleErrors} handleSwap={handleSwap} setLogued={setLogued} />
      }

    </section>
  )
}