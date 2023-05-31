
// HOOKS
import { createContext, useEffect, useState } from 'react';

// INTERFACES
interface Props {
  children: JSX.Element[] | JSX.Element
}

const initialIdiom: string = window.localStorage.getItem('idiom') ?? 'EN';

export const IdiomContext = createContext({idiom: initialIdiom, handleIdiom: ()=> {window.localStorage.setItem('idiom', initialIdiom)}});

export const IdiomProvider = ({children}: Props) =>{

  const [idiom, setIdiom] = useState(initialIdiom)

  const handleIdiom = ()=>{
    setIdiom(window.localStorage.getItem('idiom') == 'ES' ? 'EN' : 'ES')
  }

  useEffect(()=>{
    window.localStorage.setItem('idiom', idiom)
  }, [idiom])

  const idiomData: {idiom: string, handleIdiom: ()=> void } = {idiom, handleIdiom}
  
  return (
    <IdiomContext.Provider value={idiomData}>
      {children}
    </IdiomContext.Provider>
  )
}