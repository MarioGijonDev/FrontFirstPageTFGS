
// HOOKS
import { createContext, useState } from 'react';

// INTERFACES
interface Props {
  children: JSX.Element[] | JSX.Element
}

// API
import { checkLoginApi } from '../api/checkLoginApi';

const checkInitialLogued = await checkLoginApi();
let initialLogued: any
if(checkInitialLogued === undefined || checkInitialLogued.status === 'bad')
  initialLogued = false
else
  initialLogued = checkInitialLogued;

export const LoguedContext = createContext({ logued: initialLogued });

export const LoguedProvider = ({children}: Props) =>{

  const [logued, setLogued] = useState(initialLogued)

  const loguedData: {logued: any, setLogued: React.Dispatch<React.SetStateAction<boolean>>} = {logued, setLogued}
  
  return (
    <LoguedContext.Provider value={loguedData}>
      {children}
    </LoguedContext.Provider>
  )
}