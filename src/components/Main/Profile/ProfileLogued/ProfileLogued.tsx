
// MOCKS
import { MouseEventHandler, useContext, useEffect } from 'react'
import profileData from '../../../../../mocks/profileLoguedData.json'

// API
import { logoutApi } from "../../../../api/logoutApi"
import { removeApi } from "../../../../api/removeApi"
import { IdiomContextType } from '../../../../types/contextTypes'
import { IdiomContext } from '../../../../context/IdiomContext'

import ScrollReveal from 'scrollreveal'

export const ProfileLogued = ({name, email, setLogued}: {name: string, email: string, setLogued: any})=>{

  const { idiom }: IdiomContextType = useContext(IdiomContext)

  const { title, subtitle, buttons } = idiom == 'ES' ? profileData.spanish : profileData.english

  const { goToApplication, logout, deleteAccount }: any = buttons

  function capitalize(word: string) {
    return word[0].toUpperCase() + word.slice(1);
  }

  const handleLogout = async ()=>{
    const response = await logoutApi()
    
    if(response.status !== 'ok'){
      return
    }
      
    if(response.action === 'logout')
      return setLogued(false)

  }

  const handleDeleteAccount = async ()=>{
    const response = await removeApi()
    if(response.status !== 'ok')
      return
    if(response.status === 'ok' && response.action === 'remove'){
      setLogued(false)
    }
  }

  const handleGoToAplication = ()=>{
    try{
      window.location.href = 'http://localhost:5000'
    }catch(e){
      console.log(e)
      return
    }
  }

  useEffect(()=>{
    ScrollReveal().reveal('#logued__article button', {
      duration: 1000,
      opacity: 0,
      reset: true,
    })
    ScrollReveal().reveal('#logued__article h2, #logued__article h3', {
      duration: 1000,
      opacity: 0,
      reset: true,
    })
  }, [])

  return (
    <article id="logued__article">
      <h2>{title} {capitalize(name)}</h2>
      <h3>{subtitle} {email}</h3>
      <button onClick={handleGoToAplication} className="profileButton" id={goToApplication.id}>{goToApplication.content}</button>
      <button onClick={handleLogout} className="profileButton" id={logout.id}>{logout.content}</button>
      <button onClick={handleDeleteAccount} className="profileButton" id={deleteAccount.id}>{deleteAccount.content}</button>
    </article>
  )
}