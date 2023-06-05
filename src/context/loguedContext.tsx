// HOOKS
import { createContext, useState } from 'react';

// API
import { checkLoginApi } from '../api/checkLoginApi';

// INTERFACES
interface Props {
  children: JSX.Element[] | JSX.Element
}

// Realizar la llamada a la API para verificar si el usuario ha iniciado sesión
const checkInitialLogued = await checkLoginApi();

// Guardara el estado del usuario
let initialLogued: any;

// Verificar el resultado de la llamada a la API y establecer el valor inicial del initialLogued
if (checkInitialLogued === undefined || checkInitialLogued.status === 'bad')
  initialLogued = false;
else
  initialLogued = checkInitialLogued;

// Crear el contexto de logued
export const LoguedContext = createContext({ logued: initialLogued });

// Crear el provider del estado del usuario
export const LoguedProvider = ({ children }: Props) => {

  // Crear una variable de estado para almacenar el estado de logued
  const [logued, setLogued] = useState(initialLogued);

  // Crear un objeto que contiene el estado de logued y la función para actualizarlo
  const loguedData: { logued: any, setLogued: React.Dispatch<React.SetStateAction<boolean>> } = { logued, setLogued };

  return (
    // Proveedor del contexto que envuelve a los componentes hijos y proporciona el contexto de logued
    <LoguedContext.Provider value={loguedData}>
      {children}
    </LoguedContext.Provider>
  )
}
