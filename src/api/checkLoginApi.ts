
// This function check if the user is logged in or not
export const checkLoginApi = async ()=>{
  try{

    // Get token, sending refresh token
    const resToken = await fetch('http://localhost:3000/api/v1/auth/refresh', {
      method: 'GET',
      credentials: 'include'
    })

    13

    const { token } = await resToken.json()

    // Send bearer token in headers (The backend will verify token and put another refresh token)
    const res = await fetch('http://localhost:3000/api/v1/auth/protected', {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    // Get data, where there are user information
    const data = await res.json()

    return data

  }catch(e){
    console.log(e)

  }
}