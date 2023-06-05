
// HOOKS
import { createContext, useEffect, useState } from 'react';

// INTERFACES
interface Props {
  children: JSX.Element[] | JSX.Element
}

// Valor inicial para el idioma en el contexto
const initialIdiom: string = window.localStorage.getItem('idiom') ?? 'EN';

// Crear el contexto de idioma
export const IdiomContext = createContext({
  idiom: initialIdiom,
  handleIdiom: () => { window.localStorage.setItem('idiom', initialIdiom) } // Función para inicializar el idioma del contexto
});

export const IdiomProvider = ({ children }: Props) => {

  // Obtener el idioma inicial del localStorage o establecerlo en 'EN' si no hay ningún valor almacenado
  const initialIdiom: string = window.localStorage.getItem('idiom') ?? 'EN';

  // Crear un estado para almacenar el idioma actual
  const [idiom, setIdiom] = useState(initialIdiom);

  // Función para cambiar el idioma actual
  const handleIdiom = () => {
    // Alternar entre 'EN' y 'ES' dependiendo del valor actual del idioma
    setIdiom(window.localStorage.getItem('idiom') === 'ES' ? 'EN' : 'ES');
  }

  // Actualizar el localStorage cuando cambie el idioma
  useEffect(() => {
    window.localStorage.setItem('idiom', idiom);
  }, [idiom]);

  // Crear un objeto que contiene el idioma actual y la función para cambiar el idioma
  const idiomData: { idiom: string, handleIdiom: () => void } = { idiom, handleIdiom };

  return (
    // Proveedor del contexto que envuelve a los componentes hijos y proporciona el contexto de idioma
    <IdiomContext.Provider value={idiomData}>
      {children}
    </IdiomContext.Provider>
  )
}

  





