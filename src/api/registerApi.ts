
// This function is for register in the app
export const registerApi = async (bodyData: any)=>{
  try{
    // Send body data
    const response = await fetch('http://localhost:3000/api/v1/auth/register', {
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

