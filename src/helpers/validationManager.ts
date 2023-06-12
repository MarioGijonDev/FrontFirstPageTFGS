
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

export const registerValidation = ({name, email, password}: {idiom: string, name: string, email: string, password: string}): ErrorArray | UserRegisterArray=>{
  let errors = [];
  // Validar nombre
  const nombreRegExp = /^[a-zA-Z ]{2,30}$/;
  if (!nombreRegExp.test(name.trim())) {
    errors.push('name')
  }

  // Validar email
  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegExp.test(email.trim())) {
    errors.push('email')
  }

  // Validar contraseña
  const contraseñaRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!contraseñaRegExp.test(password)) {
    errors.push('password')
  }

  if(errors.length > 0)
    return [false, errors]

  // Si todas las validaciones pasan, se retorna verdadero
  return [true, {name: name.trim(), email: email.trim(), password: password.trim()}];
  
}

export const loginValidation = ({email, password}: {idiom: string, email: string, password: string}): ErrorArray | UserLoginArray=>{
  let errors = [];
  // Validar email
  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegExp.test(email.trim())) {
    errors.push('email')
  }

  // Validar contraseña
  const contraseñaRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!contraseñaRegExp.test(password)) {
    errors.push('password')
  }

  if(errors.length > 0)
    return [false, errors]

  // Si todas las validaciones pasan, se retorna verdadero
  return [true, {email: email.trim(), password: password.trim()}];
  
}