
// HOOKS
import { createContext, useEffect, useState } from 'react';

// TYPES
interface Props {
  children: JSX.Element[] | JSX.Element
}

const initialTheme: string = window.localStorage.getItem('theme') ?? 'dark';

export const ThemeContext = createContext({theme: initialTheme, handleTheme: ()=> {window.localStorage.setItem('theme', initialTheme)}});

export const ThemeProvider = ({children}: Props) =>{

  const [theme, setTheme] = useState(initialTheme)

  const handleTheme = ()=>{
    setTheme(window.localStorage.getItem('theme') == 'dark' ? 'light' : 'dark')
  }

  useEffect(()=>{
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const themeData: {theme: string, handleTheme: ()=> void} = {theme, handleTheme}
  
  return (
    <ThemeContext.Provider value={themeData}>
      {children}
    </ThemeContext.Provider>
  )
}