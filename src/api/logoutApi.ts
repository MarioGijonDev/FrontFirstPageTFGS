
// This function is for logout of app
export const logoutApi = async ()=>{
  try{
    // Send request to logout api
    const response = await fetch('http://localhost:3000/api/v1/auth/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    })

    // Check response
    const data = await response.json()

    return data

  }catch(e){
    console.log(e)
  }
}