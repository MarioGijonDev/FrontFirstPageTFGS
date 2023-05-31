
// This function is for login in the app
export const loginApi = async (bodyData: any)=>{

  try{
    // Send body data
    const response = await fetch('http://localhost:3000/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(bodyData)
    });

    // Get response
    const data = await response.json();

    return data
  }catch(e){
    console.log(e)
  }

  
}

