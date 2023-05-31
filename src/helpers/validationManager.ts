
type UserRegisterData = {
  name: string;
  email: string;
  password: string;
};

type UserLoginData = {
  email: string;
  password: string;
};

export type ErrorArray = [boolean, string[]];
export type UserRegisterArray = [boolean, UserRegisterData];
export type UserLoginArray = [boolean, UserLoginData];

export const registerValidation = ({idiom, name, email, password}: {idiom: string, name: string, email: string, password: string}): ErrorArray | UserRegisterArray=>{
  let errors = [];
  // Validar nombre
  const nombreRegExp = /^[a-zA-Z ]{2,30}$/;
  if (!nombreRegExp.test(name.trim())) {
    errors.push('name')
    /* if(idiom === 'ES')
      errors.push('Error en nombre: Debe tener solo letras y más de 2 caracteres')
    else
      errors.push('Name error: Must have only letters and more than 2 characters') */
  }

  // Validar email
  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegExp.test(email.trim())) {
    errors.push('email')
    /* if(idiom === 'ES')
      errors.push('Error en email: Debe tener un formato válido')
    else
      errors.push('Email error: Must have valid email format') */
  }

  // Validar contraseña
  const contraseñaRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!contraseñaRegExp.test(password)) {
    errors.push('password')
    /* if(idiom === 'ES')
      errors.push('Password error: Must have numbers, letters, and more than 5 characters')
    else
      errors.push('Error en contraseña: Debe tener numeros, letras y más de 5 caracteres') */
  }

  if(errors.length > 0)
    return [false, errors]

  // Si todas las validaciones pasan, se retorna verdadero
  return [true, {name: name.trim(), email: email.trim(), password: password.trim()}];
  
}

export const loginValidation = ({idiom, email, password}: {idiom: string, email: string, password: string}): ErrorArray | UserLoginArray=>{
  let errors = [];
  // Validar email
  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegExp.test(email.trim())) {
    errors.push('email')
    /* if(idiom === 'ES')
      errors.push('Error en email: Debe tener un formato válido')
    else
      errors.push('Email error: Must have valid email format') */
  }

  // Validar contraseña
  const contraseñaRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!contraseñaRegExp.test(password)) {
    errors.push('password')
    /* if(idiom === 'ES')
      errors.push('Password error: Must have numbers, letters, and more than 5 characters')
    else
      errors.push('Error en contraseña: Debe tener numeros, letras y más de 5 caracteres') */
  }

  if(errors.length > 0)
    return [false, errors]

  // Si todas las validaciones pasan, se retorna verdadero
  return [true, {email: email.trim(), password: password.trim()}];
  
}