
// This funcion is for remove user from api
export const removeApi = async ()=>{
  try{
    // Check user is logged in
    const resToken = await fetch('http://localhost:3000/api/v1/auth/refresh', {
      method: 'GET',
      credentials: 'include'
    })

    const { token } = await resToken.json()

    const res = await fetch('http://localhost:3000/api/v1/auth/remove', {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    // If is loggued
    if(res.status === 200){
      // Send petition to api
      await fetch('http://localhost:3000/api/v1/auth/logout', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
      })
  
      // Get response
      const data = await res.json()
  
      return data
    }

  }catch(e){
    console.log(e)
  }
}