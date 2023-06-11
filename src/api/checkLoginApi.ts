
// Función para comprobar si el usuaio ha iniciado sesión
export const checkLoginApi = async ()=>{
  try{
    // Esta petición actualizará el token de acceso y nos lo devolverá
    // Para ello le enviamos el refreshToken a partir de los credenciales
    const resToken = await fetch('http://localhost:3000/api/v1/auth/refresh', {
      method: 'GET',
      credentials: 'include'
    })
    // Obtenemos el token de acceso de la respuesta
    const { token } = await resToken.json()
    // Send bearer token in headers (The backend will verify token and put another refresh token)
    // Enviamos el nuevo token de acceso a la petición para obtener los datos del usuario
    // El token de acceso se envia por los headers en formato Bearer
    const res = await fetch('http://localhost:3000/api/v1/auth/protected', {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    // Obtenemos los datos de la respuesta para saber si el acceso al servidor es válido
    // Esto dependerá del valor status que recibimos
    const data = await res.json()
    // Devolvemos la información
    return data
  }catch(e){
    // Mostramos el error por consola
    console.log(e)
  }
}


