
// MOCKS
import profileData from '../../../../../mocks/profileLoginData.json'

// TYPES
import { IdiomContextType } from '../../../../types/contextTypes'
import { FieldType } from '../../../../types/profileTypes'

// HOOKS
import { FormEvent, useContext, useEffect } from 'react'

// CONTEXT
import { IdiomContext } from '../../../../context/IdiomContext'
import { LoguedContext } from '../../../../context/loguedContext'

// API
import { loginApi } from '../../../../api/loginApi.ts'
import { checkLoginApi } from '../../../../api/checkLoginApi'
import { ErrorArray, UserLoginArray, loginValidation } from '../../../../helpers/validationManager'

import ScrollReveal from 'scrollreveal'

export function ProfileLogin({handleErrors}: any){

  const { setLogued }: any = useContext(LoguedContext)

  // Get idiom of idiom context
  const { idiom }: IdiomContextType = useContext(IdiomContext)

  // Get data of mock
  const { form } = idiom == 'ES' ? profileData.spanish : profileData.english

  // Function for handle submit
    // Stop submit to the server automaticaly
    // TODO Check inputs
  const handleSubmit = async (e: FormEvent) => {
    // Stop form sending
    e.preventDefault()

    const dataForValidation = {
      idiom,
      email: (document.getElementById('email') as HTMLInputElement).value,
      password: (document.getElementById('password') as HTMLInputElement).value
    }

    const checkValid: ErrorArray | UserLoginArray = loginValidation(dataForValidation)
    if(!checkValid[0] && Array.isArray(checkValid[1]))
      return handleErrors(checkValid[1])

    try{

      // No recibe datos del usuario
      const response = await loginApi(checkValid[1])

      // Check response
      if(response.status !== 'ok'){
        return handleErrors([response.error])
      }
        

      if(response.action === 'login'){
        const infoUser = await checkLoginApi()
        handleErrors([])
        return setLogued(infoUser)
      }

    }catch(e){
      // Show error
      // console.log(e)
    }
  }

  useEffect(()=>{
    ScrollReveal().reveal(`#profile-content__article`, {
      origin: "bottom",
      distance: "800px",
      duration: 1000,
      opacity: 0,
      reset: true,
    });
  }, [])

  return(
    <article className='hide-on-responsive-navbar' id='profile-content__article'>
      <div className="login-box">
        <h3>{form.title}</h3>
        <form method='POST' onSubmit={handleSubmit}>
          {
            form.fields.map((field: FieldType, id: number) => (
              <div key={id} className="user-box">
                <label>{field.label}</label>
                <input type={field.type} name={field.name} id={field.name} autoComplete='off'/>
            </div>
            ))
          }
          <button type='submit'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {form.submitButton} 
          </button>
        </form>
        <aside>
            <img src="../../../../public/img/pngwing.com (3).png" alt="" />
        </aside>
      </div>
    </article>
  )
}