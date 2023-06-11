
// Esta función se usará para eliminar el usuario
export const removeApi = async ()=>{
  try{
    // Comprobamos que el usuario tiene la sesión iniciada
    const resToken = await fetch('http://localhost:3000/api/v1/auth/refresh', {
      method: 'GET',
      credentials: 'include'
    })
    // Obtenemos token de acceso
    const { token } = await resToken.json()
    // Enviamos el token de acceso para elimianr el usuario
    const res = await fetch('http://localhost:3000/api/v1/auth/remove', {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    // Si se ha eliminado correctamente cerramos sesión desde el navegador
    // Recordemos que el RefreshJWT no es accesible en el cliente
    if(res.status === 200){
      await fetch('http://localhost:3000/api/v1/auth/logout', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
      })
      // Obtenemos y enviamos la respuesta
      const data = await res.json()
      return data
    }
  }catch(e){
    // Mostramos el error por consola
    console.log(e)
  }
}



