
// MOCKS
import profileData from '../../../../../mocks/profileSigninData.json'

// TYPES
import { IdiomContextType } from '../../../../types/contextTypes'
import { FieldType } from '../../../../types/profileTypes'

// HOOKS
import { FormEvent, useContext, useEffect } from 'react'
import { registerApi } from '../../../../api/registerApi'

// CONTEXT
import { IdiomContext } from '../../../../context/IdiomContext'
import { registerValidation } from '../../../../helpers/validationManager'

// TYPES
import { ErrorArray, UserRegisterArray } from '../../../../helpers/validationManager'

import ScrollReveal from 'scrollreveal'

export function ProfileRegister({handleSwap, handleErrors}: {handleSwap: any, handleErrors: any}){
  
  // Get idiom of idiom context
  const { idiom }: IdiomContextType = useContext(IdiomContext)

  // Function for handle submit
  const handleSubmit = async (e: FormEvent) => {
    // Stop form sending
    e.preventDefault()
    // Get form data
    const dataForValidation = {
      idiom,
      name: (document.getElementById('name') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      password: (document.getElementById('password') as HTMLInputElement).value
    }

    // Check valid inputs in front
    const checkValid: ErrorArray | UserRegisterArray = registerValidation(dataForValidation)
    if(!checkValid[0] && Array.isArray(checkValid[1]))
      return handleErrors(checkValid[1])
      
    try{
      // Get fetch response
      const response = await registerApi(checkValid[1])

      // Check response status
      if(response.status !== 'ok'){
        return handleErrors([response.error])
      }

      // Check action
      if(response.action === 'register'){
        handleErrors([])
        return handleSwap()
      }
        
        
    }catch(e){
      // Show error
      // console.log(e)
    }
  }

  const { form } = idiom == 'ES' ? profileData.spanish : profileData.english

  useEffect(()=>{
    ScrollReveal().reveal(`#profile-content__article`, {
      origin: "bottom",
      distance: "800px",
      duration: 1000,
      opacity: 0,
      reset: false,
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