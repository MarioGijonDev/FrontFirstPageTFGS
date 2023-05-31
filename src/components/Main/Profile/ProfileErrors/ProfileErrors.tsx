
// TYPES
import { IdiomContextType } from "../../../../types/contextTypes"

// HOOKS
import { useContext } from "react"

// CONTEXT
import { IdiomContext } from "../../../../context/IdiomContext"

import ScrollReveal from 'scrollreveal'

export const ProfileErrors = ({errors}: any)=>{

  const { idiom }: IdiomContextType = useContext(IdiomContext)

  return (
    <article id="errors__container">
      {
        errors.includes('name') ?
            idiom === 'ES' ?
              <p>Error en nombre: Debe tener solo letras y más de 2 caracteres</p>
            :
              <p>Name error: Must have only letters and more than 2 characters</p>
        : ""
          
      }
      {
        errors.includes('email') ?
          idiom === 'ES' ?
            <p>Error en email: Debe tener un formato válido</p>
          :
            <p>Email error: Must have valid email format</p>
        : ""

      }
      {
        errors.includes('password') ?
          idiom === 'ES' ?
            <p>Error en contraseña: Debe tener numeros, letras y más de 5 caracteres</p>
          :
            <p>Password error: Must have numbers, letters, and more than 5 characters</p>
        : ""
      }
      {
        errors.includes('User does not exists') ?
          idiom === 'ES' ?
            <p>El usuario no existe</p>
          :
            <p>User does not exists</p>
        : ""
      }
      {
        errors.includes('Email already exists') ?
          idiom === 'ES' ?
            <p>El email ya se está usando</p>
          :
            <p>Email already in use</p>
        : ""
      }
      {
        errors.includes('Incorrect credentials') ?
          idiom === 'ES' ?
            <p>Credenciales incorrectas</p>
          :
            <p>Incorrect credentials</p>
        : ""
      }
    </article>
  )
}