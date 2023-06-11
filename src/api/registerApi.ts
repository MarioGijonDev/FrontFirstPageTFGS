
// Esta función hará el registro del usuario
export const registerApi = async (bodyData: any)=>{
  try{
    // Realizamos la solicitud para el registro enviando el valor de los campos
    const response = await fetch('http://localhost:3000/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(bodyData)
    });
    // Obtenemos y devolvemos la respuesta que nos dirá si ha sido registrado o no
    const data = await response.json();
    return data
  }catch(e){
    // Mostramos el error por consola
    console.log(e)
  }
}

